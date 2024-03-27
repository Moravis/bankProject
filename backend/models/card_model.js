const db=require('../database');

const card={
    getAllCards(callback){
        return db.query("SELECT * FROM card",callback);
    },
    getOneCard(id,callback){
        return db.query("SELECT * FROM card WHERE card_id=?",[id],callback);
    },
    addCard(newCard,callback){
        return db.query("INSERT INTO card(card_customer_id, card_number, card_type, card_pin) VALUES(?,?,?,?)",[
            newCard.card_customer_id,
            newCard.card_number,
            newCard.card_type,
            newCard.card_pin],
            callback);
    },
    updateCard(id, updateCard,callback){
        return db.query("UPDATE card SET card_customer_id=?, card_number=?, card_type=?, card_pin=? WHERE card_id=?",[
            updateCard.card_customer_id,
            updateCard.card_number,
            updateCard.card_type,
            updateCard.card_pin,
            id],
            callback);
    },
    deleteCard(id,callback){
        return db.query("DELETE FROM card WHERE card_id=?",[id],callback);
    }
}

module.exports=card;