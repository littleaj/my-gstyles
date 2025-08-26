







/**
 * Uses UserProperties as the storage backend.
 * @implements {StylesStorage}
 */
class UserPropsStylesStorage extends StylesStorage {
  static get PREFIX() {
    return "my-gstyles_";
  }

  constructor() {
    super();
    /**
     * @type {GoogleAppsScript.Properties.Properties}
     */
    this.userProps = PropertiesService.getUserProperties();
  }

  /**
   * @returns {string}
   */
  getPrefixedId(id) {
    return `${UserPropsStylesStorage.PREFIX}${id}`;
  }

  /**
   * @param {SavedGStyle} style
   */
  put(style) {
    if (!style?.id) {
      throw new Error("Style object must have an 'id' property.");
    }

    const prefixedId = this.getPrefixedId(style.id);
    this.userProps.setProperty(prefixedId, JSON.stringify(style));
  }

  /**
   * @param {string} id
   * @returns {boolean} `true` if style was deleted, `false` if it did not exist
   */
  delete(id) {
    if (!id) {
      throw new Error("Style id must be provided for deletion.");
    }

    const prefixedId = this.getPrefixedId(id);

    if (!this.userProps.getProperty(prefixedId)) {
      return false;
    }

    this.userProps.deleteProperty(prefixedId);
    return true;
  }

  /**
   * @param {string} id
   * @returns {SavedGStyle | null}
   */
  get(id) {
    if (!id) {
      throw new Error("Style id must be provided for retrieval.");
    }

    const prefixedId = this.getPrefixedId(id);
    const value = this.userProps.getProperty(prefixedId);
    return value ? JSON.parse(value) : null;
  }

  /**
   * @returns {SavedGStyle[]}
   */
  list() {
    const all = this.userProps.getProperties();
    return Object.entries(all)
      .filter(([key]) => key.startsWith(UserPropsStylesStorage.PREFIX))
      .map(([key, json]) => {
        try {
          return JSON.parse(json);
        } catch (parseError) {
          console.error(`UserPropsStylesStorage.list: Failed to parse style at '${key}': `, parseError);
          return null;
        }
      })
      .filter(style => style !== null)
  }
}
