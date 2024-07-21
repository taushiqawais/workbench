exports.getHomePage = (req, res, next) => {
    res.render('home', { name: "Taushiq"});
}