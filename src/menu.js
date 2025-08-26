








function buildAddOnMenu() {
  GoogleApps.Ui.createAddonMenu()
    .addItem("Show Sidebar", "showSidebar")
    .addToUi();
}

function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile("ui/sidebar/Sidebar");
  GoogleApps.Ui.showSidebar(html);
}
