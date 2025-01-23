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
    this.rank = [
      "Ace",
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
    ];
    this.suit = ["Spades ♠️", "Hearts ♥️", "Diamonds ♦️", "Clubs ♣️"];
  }

  // Building the deck
  createDeck() {
    // deck array
    // need each rank to have one of each suit
    // could use a for loop nested in a for loop
    for (let i = 0; i < this.suit.length; i++) {
      for (let j = 0; j < this.rank.length; j++) {
        let card = {
          name: `${this.rank[j]} of ${this.suit[i]}`,
          value: j + 1,
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
    this.player1 = {
      name: "Player 1",
      score: 0,
      hand: [],
    };
    this.player2 = {
      name: "Player 2",
      score: 0,
      hand: [],
    };
    this.player3 = {
      name: "Player 1",
      score: 0,
      hand: [],
    };
    this.player4 = {
      name: "Player 2",
      score: 0,
      hand: [],
    };
  }

  twoPlayerGame() {
    // instantiate new deck, create deck, then shuffle
    let deck = new Deck();
    deck.createDeck();
    deck.shuffle();
    let hands = deck.dealToPlayers(2, 26);

    // actually dealing to players
    this.player1.hand = hands[0];
    this.player2.hand = hands[1];

    // playing the game
    for (let i = 0; i < this.player1.hand.length; i++) {
      // conditional for awarding points based on compared card value.
      if (this.player1.hand[i].value > this.player2.hand[i].value) {
        this.player1.score++;
        alert(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Player 1 wins a point!
                Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}
        `);
      } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
        this.player2.score++;
        alert(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Player 2 wins a point!
                Current Score: P1: ${this.player1.score}, P2 ${this.player2.score}
        `);
      } else {
        alert(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Tie: No points Awarded
                Current Score: P1: ${this.player1.score}, P2 ${this.player2.score}
        `);
      }
    }
    // calculate score and alert
    if (this.player1.score > this.player2.score) {
      alert(`Player 1 wins!
            Final Score: Player 1: ${this.player1.score} 
                         Player 2: ${this.player2.score}
            `);
    } else if (this.player2.score > this.player1.score) {
      alert(`Player 2 wins!
            Final Score: Player 1: ${this.player1.score} 
                         Player 2: ${this.player2.score}
            `);
    } else {
      alert(`Tie`);
    }
  }

  fourPlayerGame() {
    let deck = new Deck();
    deck.createDeck();
    deck.shuffle();
    let hands = deck.dealToPlayers(4, 13);
    // actually dealing to players
    this.player1.hand = hands[0];
    this.player2.hand = hands[1];
    this.player3.hand = hands[2];
    this.player4.hand = hands[3];

    // playing the game
    for (let i = 0; i < this.player1.hand.length; i++) {
      // conditional for awarding points based on compared card value.
      if (
        this.player1.hand[i].value > this.player2.hand[i].value &&
        this.player3.hand[i].value &&
        this.player4.hand[i].value
      ) {
        this.player1.score++;
        alert(`
                    P1 Card: ${this.player1.hand[i].name}
                    P2 Card: ${this.player2.hand[i].name}
                    P3 Card: ${this.player3.hand[i].name}
                    P4 Card: ${this.player4.hand[i].name}
                    Player 1 wins a point!
                    Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}, P3: ${this.player3.score}, P4: ${this.player4.score}
            `);
      } else if (
        this.player2.hand[i].value > this.player1.hand[i].value &&
        this.player3.hand[i].value &&
        this.player4.hand[i].value
      ) {
        this.player2.score++;
        alert(`
                    P1 Card: ${this.player1.hand[i].name}
                    P2 Card: ${this.player2.hand[i].name}
                    P3 Card: ${this.player3.hand[i].name}
                    P4 Card: ${this.player4.hand[i].name}
                    Player 2 wins a point!
                    Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}, P3: ${this.player3.score}, P4: ${this.player4.score}
            `);
      } else if (
        this.player3.hand[i].value > this.player1.hand[i].value &&
        this.player2.hand[i].value &&
        this.player4.hand[i].value
      ) {
        alert(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                P3 Card: ${this.player3.hand[i].name}
                P4 Card: ${this.player4.hand[i].name}
                Player 3 wins a point!
                Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}, P3: ${this.player3.score}, P4: ${this.player4.score}
            `);
      } else if (
        this.player4.hand[i].value > this.player1.hand[i].value &&
        this.player2.hand[i].value &&
        this.player3.hand[i].value
      ) {
        alert(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                P3 Card: ${this.player3.hand[i].name}
                P4 Card: ${this.player4.hand[i].name}
                Player 4 wins a point!
                Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}, P3: ${this.player3.score}, P4: ${this.player4.score}
            `);
      } else {
        alert(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Tie: No points Awarded
                Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}, P3: ${this.player3.score}, P4: ${this.player4.score} 
            `);
      }
    }

    if (
      this.player1.hand[i].value > this.player2.hand[i].value &&
      this.player3.hand[i].value &&
      this.player4.hand[i].value
    ) {
      alert(`Player 1 wins!
                Final Score: Player 1: ${this.player1.score} 
                            Player 2: ${this.player2.score}
                            Player 3: ${this.player3.score}
                            player 4: ${this.player4.score}
                `);
    } else if (
      this.player2.hand[i].value > this.player1.hand[i].value &&
      this.player3.hand[i].value &&
      this.player4.hand[i].value
    ) {
      alert(`Player 2 wins!
                Final Score: Player 1: ${this.player1.score} 
                            Player 2: ${this.player2.score}
                            Player 3: ${this.player3.score}
                            player 4: ${this.player4.score}
                `);
    } else if (
      this.player3.hand[i].value > this.player1.hand[i].value &&
      this.player2.hand[i].value &&
      this.player4.hand[i].value
    ) {
      alert(`Player 2 wins!
                Final Score: Player 1: ${this.player1.score} 
                            Player 2: ${this.player2.score}
                            Player 3: ${this.player3.score}
                            player 4: ${this.player4.score}
                `);
    } else if (
      this.player4.hand[i].value > this.player1.hand[i].value &&
      this.player2.hand[i].value &&
      this.player3.hand[i].value
    ) {
      alert(`Player 2 wins!
                Final Score: Player 1: ${this.player1.score} 
                            Player 2: ${this.player2.score}
                            Player 3: ${this.player3.score}
                            player 4: ${this.player4.score}
                `);
    } else {
      alert(`Tie`);
    }
  }
}

// Menu Class
class Menu {
  constructor() {
    this.wins = [];
  }

  //   handle selection of players

  start() {
    let selection = this.showMenuOpt();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.twoPlayers();
          break;
        case "2":
          this.fourPlayers();
          break;
        default:
          selection = 0;
      }

      selection = this.showMenuOpt();
    }

    alert("Goodbye!");
  }

  //   Prompt user to select number of players
  showMenuOpt() {
    return prompt(`
        How many players would you like to simulate?
        ---------------------------------------------
        0) Exit
        1) Two Players
        2) Four Players
        `);
  }

  twoPlayers() {
    let game = new warGame();
    game.twoPlayerGame();
  }

  fourPlayers() {
    let game = new warGame();
    game.fourPlayerGame();
  }
}

let menu = new Menu();
menu.start();
