// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point.
// -Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner.


// The following is extra credit (10pts)
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.

// Card Class
// A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2,
// each card has 4 suits spades, hearts, diamonds, clubs

class Card {
    // each card has a suit and a rank
    constructor(suit, rank){
        this.suit = suit
        this.rank = rank
    }

    // return rank and suit of card as a string
    cardString() {
        return `${this.suit} of ${this.rank}`
    }
}

// Deck Class
// ---------------
// 52 cards
class Deck {
    // each deck of cards has 52 cards
    constructor() {
        this.rank = ['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2]
        this.suit = ['spades ♠️', 'heart ♥️', 'diamonds ♦️', 'clubs ♣️']
        this.cards = this.createDeck()
    }

    // Building the deck
    createDeck() {
        // deck array
        let deck = []
        // need each rank to have one of each suit
        // could use a for loop nested in a for loop
        for (let ranks of this.rank) {
            for (let suits of this.suit) {
                // grab the rank and suit of a card and add it to the deck
                deck.push(new Card(ranks, suits))
            }  
        }
        console.log(deck)
        return deck
    }

    // Shuffle the deck
    shuffle() {
        
        //iterate through the deck of cards
        for (let i = this.cards.length - 1; i > 0; i--) {

            // using Fisher-Yates shuffle algorithm to shuffle the deck of cards
            const j = Math.floor(Math.random() * (i + 1));

            // Swap the elements of the array
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
        }
    }

    // deal half of the deck to each player
    dealToPlayers(numPlayers, cardsPerPlayer) {
        // determine there are enough cards for each player
        if (this.cards.length < numPlayers * cardsPerPlayer) {
            console.log('Not enough cards in the deck')
            return;
        }

        // Empty array to hold your hand when you are lonley
        const hands = []

        // deal cards to each player
        for (let i = 0; i < numPlayers; i++) {
            // deal 'cardsPerPlayer' cards to each player
            const hand = this.cards.splice(0, cardsPerPlayer)
            hands.push(hand);
        }
        return hands
    }

}
// Player class
// -------------------------------------
// each player will have 26 cards

// class Player() {
//     constructor(numCards, hand) {
//         this.numCards = numCards
//     }

    
// }


// call test
console.log(new Deck)

// Create a deck
const deck = new Deck();
console.log("Deck before shuffle:");
deck.cards.forEach(card => console.log(card.cardString()));

// Shuffle the deck
deck.shuffle();
console.log("\nDeck after shuffle:");
deck.cards.forEach(card => console.log(card.cardString()));

// deal 26 cards to 2 players
const playersHands = deck.dealToPlayers(2, 26)

// display each players cards

playersHands.forEach((hand, index) => {
    console.log(`\nPlayer ${index + 1}'s cards:`)
    hand.forEach(card => console.log(card.cardString()))
})

console.log("\nRemaining cards in deck:");
deck.cards.forEach(card => console.log(card.cardString()));