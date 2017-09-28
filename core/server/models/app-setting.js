var hfBookshelf = require('./base'),
    AppSetting,
    AppSettings;

AppSetting = hfBookshelf.Model.extend({
    tableName: 'app_settings',

    app: function app() {
        return this.belongsTo('App');
    }
});

AppSettings = hfBookshelf.Collection.extend({
    model: AppSetting
});

module.exports = {
    AppSetting: hfBookshelf.model('AppSetting', AppSetting),
    AppSettings: hfBookshelf.collection('AppSettings', AppSettings)
};
