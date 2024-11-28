const { Favourite } = require('../models');

exports.addFavourite = async (req, res) => {
    try {
        await Favourite.create(req.body);
        res.redirect('/api/search/favourite/all');
    } catch (error) {
        console.log("error",error)
        res.status(500).send('Error saving favourite.');
    }
};

exports.getFavouritesPage = async (req, res) => {
    try {
        const favourites = await Favourite.findAll();
        res.render('favourites', { favourites });
    } catch (error) {
        res.status(500).send('Error retrieving favourites.');
    }
};
