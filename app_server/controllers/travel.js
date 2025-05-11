/* GET travel view */
const travel = (req, res) => {
    res.rnder('travel', { title: 'Travlr Getaways'});
};

module.exports = {
    travel
};