
function getStylesCard() {
  const sectionStyles = CardService.newCardSection()
    .setHeader("My gStyles")
    .setCollapsible(false);

  return CardService.newCardBuilder()
    .addSection(sectionStyles)
    .build();
}
