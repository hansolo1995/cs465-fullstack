/**
 * Author:      Hansol Lee
 * Description: Contact Controller that handles rendering for the Contact webpage
 */

const contact = (req, res) => {
    res.render('contact', { title: 'Travlr Getaways', contact });
};

module.exports = {
    contact
};