/**
 * Author:      Hansol Lee
 * Description: Main Controller that handles rendering for the Home webpage
 */

const index = (req, res) => {
    res.render('index', { title: "Travlr Getaways"});
};

module.exports ={
    index
};