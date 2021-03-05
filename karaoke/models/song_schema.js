const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    artist: { type: String, required: true },
    title: { type: String, required: true },
    genre: { type: String, required: true },
    songId: { type: String, required: false }
});

const Song = mongoose.model('Song', memberSchema);

module.exports = Song;