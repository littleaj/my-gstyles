
function getStylesCard() {
  const cardBuilder = CardService.newCardBuilder();

  cardBuilder.addSection(CardService.newCardSection()
    .setHeader(CardService.newCardHeader().setTitle("Hello!"))
    .addWidget(CardService.newTextParagraph().setText("Hello, World!"))
    .setCollapsible(false));

  cardBuilder.setHeader(CardService.newCardHeader()
    .setTitle("My-gStyles")
    .setSubtitle("Styles for your Google Apps"));

  return cardBuilder.build();
}
