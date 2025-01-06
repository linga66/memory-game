import shuffle from 'shuffle-array';

class MemoryCards {
    constructor() {
        this.cards = [];
        this.NUM_IMAGES = 10;
    }

    generateCardSet() {
        // Generate a set of cards with image pairs
        this.cards = [];
        let id = 1;
        for (let i = 1; i <= this.NUM_IMAGES; i++) {
            const card1 = {
                id: id,
                image: i,
                imageUp: false,
                matched: false
            };
            id++;
            const card2 = {
                id: id,
                image: i,
                imageUp: false,
                matched: false
            };
            id++;
            this.cards.push(card1, card2);
        }
        shuffle(this.cards);
    }
    flipCard(id) {
        const card = this.cards.find(card => card.id === id);
        if (card) {
            card.imageUp = !card.imageUp;
        }
    }
    getCard(id) {
        return this.cards.find(card => card.id === id);
    }
    setCardAsMatched(id, matched) {
        this.getCard(id).matched = matched;
    }
    cardsHaveIdenticalImages(id1, id2) {
        const card1 = this.cards.find(card => card.id === id1);
        const card2 = this.cards.find(card => card.id === id2);
        return card1 && card2 && card1.image === card2.image;
    }
}

export default MemoryCards;
