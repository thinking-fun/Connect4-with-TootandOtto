var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
	gameNumber: String,
	gameType: String,
	Player1Name: String,
	Player2Name: String,
	WinnerName: String,
	GameDate: {type: Date, default: Date.now}
});

mongoose.model("Game", gameSchema);