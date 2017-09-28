var hfBookshelf  = require('./base'),
    Basetoken       = require('./base/token'),

    Refreshtoken,
    Refreshtokens;

Refreshtoken = Basetoken.extend({
    tableName: 'refreshtokens'
});

Refreshtokens = hfBookshelf.Collection.extend({
    model: Refreshtoken
});

module.exports = {
    Refreshtoken: hfBookshelf.model('Refreshtoken', Refreshtoken),
    Refreshtokens: hfBookshelf.collection('Refreshtokens', Refreshtokens)
};
