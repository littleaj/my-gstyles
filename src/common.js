








function onInstall(e) {
  // TODO initialize styles storage
  // TODO add example styles: code, blockquote
}

/**
 * @param {HomepageEventObject} e
 * @returns {GoogleAppsScript.Card_Service.Card[]}
 */
function onCommonHomepage(e) {
  return [getStylesCard()];
}
