const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    nickname:  { type: String, required: true },
    img: { type: String, required: true },
    city: { type: String, required: true },
    faveGenre: { type: String, required: true },
    drinkOrder: { type: String, required: true },
    songList: [{type: String, required: false }] // how should I setup the schema so each member can save "notes" about specific songs?
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;