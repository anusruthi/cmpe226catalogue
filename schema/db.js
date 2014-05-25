var mongoose = require('mongoose');
moongose.connect(' mongodb://sruthi:sruthi123@ds033559.mongolab.com:33559/cat')
//var db = mongoose.connection;

var catSchema = mongoose.Schema({
  category: String,
  title: String,
  price: String,
  attr: []
}, {
  collection: 'categories'
});

module.exports = mongoose.model('cat', catSchema);
//module.exports = mongoose.connection;


/*
db.categories.insert({category: 'Books', title: 'Capital in the Twenty-First Century' , price: 24.26, 
attr: {author: 'Thomas Piketty', language: 'English', pages: 696, ISBN: '067443000X'} })

db.categories.insert({category: 'Books', title: 'The Fault in Our Stars' , price: 9.99, 
attr: {author: 'John Green', language: 'English', pages: 352, ISBN: '014242417X'} })

db.categories.insert({category: 'Books', title: 'Oh, The Places You\'ll Go!' , price: 11.00, 
attr: {author: 'Dr. Seuss', language: 'English', pages: 56, ISBN: '0679805273'} })

db.categories.insert({category: 'Books', title: 'Flash Boys: A Wall Street Revolt' , price: 16.77, 
attr: {author: 'Michael Lewis', language: 'English', pages: 288, ISBN: '0393244660'} })

db.categories.insert({category: 'Books', title: 'Allegiant (Divergent Series)' , price: 11.29, 
attr: {author: 'Veronica Roth', language: 'English', pages: 544, ISBN: '006202406X'} })

db.categories.insert({category: 'Books', title: 'A Fighting Chance' , price: 17.33, 
attr: {author: 'Elizabeth Warren', language: 'English', pages: 384, ISBN: '1627790527'} })

db.categories.insert({category: 'Books', title: 'StrengthsFinder 2.0 ' , price: 15.50, 
attr: {author: 'Tom Rath', language: 'English', pages: 183, ISBN: '9781595620156'} })

db.categories.insert({category: 'Books', title: 'Gone Girl: A Novel' , price: 8.99, 
attr: {author: 'Gillian Flynn', language: 'English', pages: 432, ISBN: '0307588378'} })

db.categories.insert({category: 'Books', title: 'The One (The Selection)' , price: 10.99, 
attr: {author: 'Kiera Cass', language: 'English', pages: 336, ISBN: '0062059998'} })

db.categories.insert({category: 'Books', title: 'The Book Thief ' , price: 7.57, 
attr: {author: 'Markus Zusak', language: 'English', pages: 576, ISBN: '0375842209'} })

db.categories.insert({category: 'Nail Polish', title: 'China Glaze up & Away Collection ' , price: 5.85, 
attr: {brand: 'China Glaze', color: 'Re-fresh Mint'} })
db.categories.insert({category: 'Nail Polish', title: 'OPI Nail Envy Original ' , price: 12.79, 
attr: {brand: 'OPI', color: 'Shinny'} })
db.categories.insert({category: 'Nail Polish', title: 'Lacquer NLS86 Bubble Bath ' , price: 6.85, 
attr: {brand: 'OPI', color: 'Bubble Bath'} })


db.categories.insert({category: 'Refrigerators', title: 'China Glaze up & Away Collection ' , price: 5.85, 
attr: { brand: 'String', meterial: 0, weight: 0, height: 0, width: 0, depth: 0} })
db.categories.insert({category: 'Refrigerators', title: 'OPI Nail Envy Original ' , price: 12.79, 
attr: { brand: 'String', meterial: 0, weight: 0, height: 0, width: 0, depth: 0} })
db.categories.insert({category: 'Refrigerators', title: 'Lacquer NLS86 Bubble Bath ' , price: 6.85, 
attr: { brand: 'String', meterial: 0, weight: 0, height: 0, width: 0, depth: 0} })


db.categories.insert({category: 'TVs', title: 'China Glaze up & Away Collection ' , price: 5.85, 
attr: { type: 'String', screenSize: 'String', brand: 'String'} })
db.categories.insert({category: 'TVs', title: 'OPI Nail Envy Original ' , price: 12.79, 
attr: {type: 'String', screenSize: 'String', brand: 'String'} })
db.categories.insert({category: 'TVs', title: 'Lacquer NLS86 Bubble Bath ' , price: 6.85, 
attr: {type: 'String', screenSize: 'String', brand: 'String'} })

*/