








/**
 * @param {GoogleAppsScript.Events.AddonOnInstall} e
 */
function onInstall(e) {
  // Q initialize styles storage here?
  // Q add example styles? (code, blockquote)
  console.log("Styles installed. ", e);
  if (e.authMode === ScriptApp.AuthMode.FULL) {
    onOpen(e);
  }
}

/**
 * @param {GoogleAppsScript.Events.SheetsOnOpen | GoogleAppsScript.Events.DocsOnOpen | GoogleAppsScript.Events.SlidesOnOpen} e
 */
function onOpen(e) {
  console.log("onOpen: ", e.source && Object.getOwnPropertyNames(e.source));
  buildAddOnMenu();
}

/**
 * @param {{ hostApp: "sheets" | "docs" | "slides" }} e
 * @returns {GoogleAppsScript.Card_Service.Card[]}
 */
function onCommonHomepage(e) {
  console.log("Styles homepage opened.", e);
  if (e.hostApp.toLocaleLowerCase() === "sheets") {
    // return onSheetsHomepage(e);
  } else if (e.hostApp.toLocaleLowerCase() === "docs") {
    // return onDocsHomepage(e);
  } else if (e.hostApp.toLocaleLowerCase() === "slides") {
    // return onSlidesHomepage(e);
  } else {
    console.error("Unknown host app: ", e.hostApp);
  }
}
