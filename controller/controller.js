const controller = {

    start:(req, res) => {
        res.render('vstart.ejs');
    },

    about:(req, res) => {
        res.render('vabout.ejs');
    },

    facts:(req, res) => {
        res.render('vfacts.ejs');
    },

    products:(req, res) => {
        res.render('vproducts.ejs');
    },

    service:(req, res) => {
        res.render('vservice.ejs');
    },

    team:(req, res) => {
        res.render('vteam.ejs');
    },
};
module.exports = controller;