








const GoogleApps = (function() {

  //#region private functions
  /**
   * @returns {GoogleAppsScript.Base.Ui & { name: string }}
   */
  function getUi() {
    const allUis = {
      Sheets: () => SpreadsheetApp.getUi(),
      Docs: () => DocumentApp.getUi(),
      Slides: () => SlidesApp.getUi(),
    }

    let foundUi = null;
    const name = Object.keys(allUis)
      .find((name) => {
        try {
          foundUi = allUis[name]();
          return true;
        } catch {
          return false;
        }
      });

    console.log("Initialized Google App Ui");
    return new Proxy(foundUi, {
      get(target, prop, receiver) {
        if (prop === "name") {
          return name;
        }
        return Reflect.get(target, prop, receiver);
      }
    });
  }
  //#endregion private functions

  const Ui = getUi();
  return {
    Ui,
  }
})();
