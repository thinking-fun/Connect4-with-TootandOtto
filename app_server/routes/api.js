var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Game = mongoose.model('Game');


router.route('/posts')

	.get(function(req,res){

		Game.find(function(err, data){

			if(err){
				return res.send(500, err);
			}

			//returns all the games that are stored
			return res.send(data);

		});		
		
	})

	.post(function(req,res){

		var game = new Game();
		game.gameNumber = req.body.gameNumber;
		game.Player1Name = req.body.Player1Name;
		game.Player2Name = req.body.Player2Name;
		game.WinnerName= req.body.WinnerName;

		console.log("Player1Name"+game.Player1Name);

		game.save(function(err,game){

			if(err){
				return res.send(500, err);
			}
			return res.json(game);
		});

	})


router.route('/posts/:id')

        //updates specified post
    .put(function(req, res){
        Game.findById(req.params.id, function(err, post){
            if(err)
                res.send(err);

            game.created_by = req.body.created_by;
            game.text = req.body.text;

            game.save(function(err, post){
                if(err)
                    res.send(err);

                res.json(game);
            });
        });
    })

    .get(function(req, res){
        Game.findById(req.params.id, function(err, post){
            if(err)
                res.send(err);
            res.json(game);
        });
    })

    //deletes the post
    .delete(function(req, res) {
        Game.remove({
            _id: req.params.id
        }, function(err) {
            if (err)
                res.send(err);
            res.json("deleted :(");
        });
    });


module.exports = router;
