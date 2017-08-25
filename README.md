# Flashcard-Generator

Alt-H2 BasicCard.js:

**This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: module.exports = BasicCard;**
- The constructor should accept two arguments: front and back.
- The constructed object should have a front property that contains the text on the front of the card.
- The constructed object should have a back property that contains the text on the back of the card.

Alt-H2 ClozeCard.js:

**This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;**
- The constructor should accept two arguments: text and cloze.
- The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
- The constructed object should have a partial property that contains only the partial text.
- The constructed object should have a fullText property that contains only the full text.
- The constructor should throw or log an error when the cloze deletion does not appear in the input text.
- Use prototypes to attach these methods, wherever possible.
