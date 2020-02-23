var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Game = mongoose.model('Game');

router.route('/games')

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
        game.gameType = req.body.gameType;
		game.gameNumber = req.body.gameNumber;
		game.Player1Name = req.body.Player1Name;
		game.Player2Name = req.body.Player2Name;
		game.WinnerName= req.body.WinnerName;

		game.save(function(err,game){

			if(err){
				return res.send(500, err);
			}
			return res.json(game);
		});

	})





router.route('/games/:id')

        //updates specified post
    .put(function(req, res){
        Game.findById(req.params.id, function(err, game){
            if(err)
                res.send(err);

            game.gameNumber = req.body.gameNumber;
            game.Player1Name = req.body.Player1Name;
            game.Player2Name = req.body.Player2Name;
            game.WinnerName= req.body.WinnerName;

            game.save(function(err, game){
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
            res.json(post);
        });
    }) 

   /*  .get(function(req,res){
        Game.find({Player2Name: 'Computer'}, function(err, data){
            if(err){
                return res.send(500, err);
            }
            //returns all the games that are stored
                return res.send(data);
        });    
    }) */


    

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
