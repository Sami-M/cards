// spec/card.spec.js
import '../auto_mock_off';
import { Card } from '../card';

describe('Card', () => {
	it('sets up new card properties correctly', () => {
		let card = new Card(3, 'H');
		expect(card.rank).toBe(3);
		expect(card.suit).toBe('H');
	});
});