/**
 * Author:      Hansol Lee
 * Description: About Controller that handles rendering for the About webpage
 */

const about = (req, res) => {
    res.render('about', { title: 'Travlr Getaways', about });
};

module.exports = {
    about
};