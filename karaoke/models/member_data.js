const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    artist: { type: String, required: true },
    title: { type: String, required: true },
    genre: { type: String, required: true },
    songId: { type: String, required: true }
});

const memberSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    nickname:  { type: String, required: true },
    img: { type: String, required: true },
    city: { type: String, required: true },
    faveGenre: { type: String, required: true },
    drinkOrder: { type: String, required: true },
    songList: [songSchema] // set default to empty string?
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;