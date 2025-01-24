// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point.
// -Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner.

// The following is extra credit (10pts)
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.

// Deck Class
// ---------------
// 52 cards
class Deck {
  // each deck of cards has 52 cards
  constructor() {
    this.deck = [];
    this.ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];
    this.suits = ["Spades ♠️", "Hearts ♥️", "Diamonds ♦️", "Clubs ♣️"];
  }

  // Building the deck
  createDeck() {
    // deck array
    // need each rank to have one of each suit
    // could use a for loop nested in a for loop
    for (let rank of this.ranks) {
      for (let suit of this.suits) {
        let card = {
          name: `${rank} of ${suit}`,
          value: suit + 1,
        };
        // add cards to the deck
        this.deck.push(card);
      }
    }
    return this.deck;
  }

  // Shuffle the deck
  shuffle() {
    //iterate through the deck of cards
    for (let i = this.deck.length - 1; i > 0; i--) {
      // using Fisher-Yates shuffle algorithm to shuffle the deck of cards
      const j = Math.floor(Math.random() * (i + 1));

      // Swap the elements of the array
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  // deal cards to each player
  dealToPlayers(numPlayers, cardsPerPlayer) {
    // determine there are enough cards for each player
    if (this.deck.length < numPlayers * cardsPerPlayer) {
      console.log("Not enough cards in the deck");
      return;
    }

// using playerHands to split an array between numPlayers
    this.playerHands = Array(numPlayers);
    for (let i = 0; i < numPlayers; i++) {
      this.playerHands[i] = this.deck.slice(
        cardsPerPlayer * i,
        cardsPerPlayer * (i + 1)
      );
    }
    return this.playerHands;
  }
}

// class to actually play the game.

class warGame {
  constructor() {
    // create players
    this.p1 = {
      name: "Billy",
      score: 0,
      hand: [],
    };
    this.p2 = {
      name: "Bob",
      score: 0,
      hand: [],
    };
  }

  playGame() {
    // instantiate new deck, create deck, then shuffle
    let deck = new Deck();
    deck.createDeck();
    deck.shuffle();
    let hands = deck.dealToPlayers(2, 26);

    // actually dealing to players
    this.p1.hand = hands[0];
    this.p2.hand = hands[1];

    // playing the game
    for (let i = 0; i < this.p1.hand.length; i++) {
      // conditional for awarding points based on compared card value.
      if (this.p1.hand[i].value > this.p2.hand[i].value) {
        this.p1.score++;
        console.log(`
          ${this.p1.name}'s Card: ${this.p1.hand[i].name}
          ${this.p2.name}'s Card: ${this.p2.hand[i].name}
          ${this.p1.name} wins a point!
          Current Score: ${this.p1.name}: ${this.p1.score}, ${this.p2.name}: ${this.p2.score}
        `);
      } else if (this.p2.hand[i].value > this.p1.hand[i].value) {
        this.p2.score++;
        console.log(`
          ${this.p1.name}'s Card: ${this.p1.hand[i].name}
          ${this.p2.name}'s Card: ${this.p2.hand[i].name}
          ${this.p2.name} wins a point!
          Current Score: ${this.p1.name}: ${this.p1.score}, ${this.p2.name}: ${this.p2.score}
        `);
      } else {
        console.log(`
          ${this.p1.name}'s Card: ${this.p1.hand[i].name}
          ${this.p2.name}'s Card: ${this.p2.hand[i].name}
          Tie: No one gets a point
          Current Score: ${this.p1.name}: ${this.p1.score}, ${this.p2.name}: ${this.p2.score}
        `);
      }
    }
    // calculate score and alert
    if (this.p1.score > this.p2.score) {
      console.log(`${this.p1.name} wins!
        Final Score: ${this.p1.name}: ${this.p1.score} 
                     ${this.p2.name}: ${this.p2.score}
            `);
    } else if (this.p2.score > this.p1.score) {
      console.log(`${this.p2.name} wins!
        Final Score: ${this.p1.name}: ${this.p1.score} 
                     ${this.p2.name}: ${this.p2.score}
            `);
    } else {
      console.log(`The game has resulted in a Tie`);
    }
  }
}

let game = new warGame();
game.playGame();
