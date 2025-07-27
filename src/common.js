








/**
 * @param {GoogleAppsScript.Events.AddonOnInstall} e
 */
function onInstall(e) {
  // TODO initialize styles storage
  // TODO add example styles: code, blockquote
  console.log("Styles installed. ", e);
  buildAddOnMenu(e.authMode);
}

/**
 * @param {ScriptApp.AuthMode}
 */
function buildAddOnMenu(authMode) {
  SpreadsheetApp.getUi().createAddonMenu()
    .addItem("Hello", "doHello")
    .addToUi();
}

function doHello() {
  console.log("Hello from My-gStyles!");
}

/**
 * @param {HomepageEventObject} e
 * @returns {GoogleAppsScript.Card_Service.Card[]}
 */
function onCommonHomepage(e) {
  console.log("Styles homepage opened.");
  return [getStylesCard()];
}
