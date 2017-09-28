var hfBookshelf = require('./base'),
    AppField,
    AppFields;

AppField = hfBookshelf.Model.extend({
    tableName: 'app_fields',

    post: function post() {
        return this.morphOne('Post', 'relatable');
    }
});

AppFields = hfBookshelf.Collection.extend({
    model: AppField
});

module.exports = {
    AppField: hfBookshelf.model('AppField', AppField),
    AppFields: hfBookshelf.collection('AppFields', AppFields)
};
