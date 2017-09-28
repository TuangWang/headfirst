var hfBookshelf = require('./base'),

    Permission,
    Permissions;

Permission = hfBookshelf.Model.extend({

    tableName: 'permissions',

    roles: function roles() {
        return this.belongsToMany('Role');
    },

    users: function users() {
        return this.belongsToMany('User');
    },

    apps: function apps() {
        return this.belongsToMany('App');
    }
});

Permissions = hfBookshelf.Collection.extend({
    model: Permission
});

module.exports = {
    Permission: hfBookshelf.model('Permission', Permission),
    Permissions: hfBookshelf.collection('Permissions', Permissions)
};
