var hfBookshelf = require('./base'),

    ClientTrustedDomain,
    ClientTrustedDomains;

ClientTrustedDomain = hfBookshelf.Model.extend({
    tableName: 'client_trusted_domains'
});

ClientTrustedDomains = hfBookshelf.Collection.extend({
    model: ClientTrustedDomain
});

module.exports = {
    ClientTrustedDomain: hfBookshelf.model('ClientTrustedDomain', ClientTrustedDomain),
    ClientTrustedDomains: hfBookshelf.collection('ClientTrustedDomains', ClientTrustedDomains)
};
