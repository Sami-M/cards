// card.js
export class Card {
	constructor(rank, suit) {
		this.rank = rank;
		this.suit = suit;
	}
}

if (require.main === module) {
    let card = new Card(7,'D');
    console.log(`My card: ${JSON.stringify(card)}`);
}