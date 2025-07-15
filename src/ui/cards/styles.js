
function getStylesCard() {
  // TODO finish implementing this card
  const sectionStyles = CardService.newCardSection()
    .setHeader("My gStyles")
    .setCollapsible(false);

  return CardService.newCardBuilder()
    .addSection(sectionStyles)
    .build();
}
