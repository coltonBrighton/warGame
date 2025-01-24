// importing expect function from chai library
let expect = chai.expect; 

// describe what is to be tested

describe("Deck is being shuffled", () => {
    // checking to ensure that the cards in the deck are being shuffled
    // using done to indicate that other tests can be run at the same time as this one
    it("Should show that the cards in the deck have been shuffled", function (done) {
        let testDeck = new Deck(); // creating a new deck of cards from the warGame.js file
        let cards = [...testDeck.createDeck()]; // creating a copy of the deck to verify that the deck is not shuffled
        console.log("Here is my unshuffled Deck", cards);

        testDeck.shuffle();

        let cardsShuffled = testDeck.deck;

        console.log("are my cards shuffled?", cardsShuffled)
        expect(cardsShuffled).to.not.eql(cards, "The shuffled deck is not equal to the unshuffled deck");
        done();
    });
});
