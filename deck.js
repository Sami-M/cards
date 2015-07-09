// deck.js
import { Card } from 'card';
export class Deck {
	constructor(){
		this.inDeck = [];
		this.discard = [];
		var ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
		var suits = ['S','H','D','C'];
		for(var suit of suits){
			for (var rank of ranks){
				console.log(rank, suit);
				this.inDeck.push(new Card(rank, suit));
			}
		}
	}
	numberInDeck(){
		return this.inDeck.length;
	}
	numberInDiscard(){
		return this.discard.length;
	}
	draw(number){
		return this.inDeck.splice(0,number-1);
	}
	toDiscard(card){
		this.discard.push(card);
	}
	shuffle(){
		var cardsInDeck = this.inDeck.length;
		this.inDeck.forEach(function(element, index, inDeck){
			var randomPosition = Math.floor(Math.random() * cardsInDeck);
			var holdToSwap = inDeck[randomPosition];
			inDeck[index] = holdToSwap;
			inDeck[randomPosition] = element;
		});
	}
}
if (require.main === module){
	let deck = new Deck();
	console.log(deck.inDeck);
	deck.shuffle();
	console.log(deck.inDeck);
}