'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2019-05-23T23:12:32.764Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "users",
        {
            " users_id": {
                " type": Sequelize.INTEGER(5).UNSIGNED,
                "allowNull": false,
                "primaryKey": true
            },
            "owner_first_name": {
                "type": Sequelize.STRING(45),
                "field": "first_name",
                "allowNull": false
            },
            "owner_last_name": {
                "type": Sequelize.STRING(45),
                "field": "last_name",
                "allowNull": false
            },
            "pets_name": {
                "type": Sequelize.STRING(45),
                "field": "pets_name",
                "allowNull": false
            },
            "fav_toy": {
                "type": Sequelize.STRING(45),
                "field": "fav_toy",
                "allowNull": false
            },
            "breed": {
                "type": Sequelize.STRING(45),
                "field": "breed",
                "allowNull": false
            },
            "hometown": {
                "type": Sequelize.STRING(45),
                "field": "hometown",
                "allowNull": false
            },
            "fav_place": {
                "type": Sequelize.STRING(45),
                "field": "fav_place",
                "allowNull": false
            },
            "join_date": {
                "type": Sequelize.DATE,
                "field": "join_date",
                "allowNull": false,
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function (queryInterface, Sequelize) {
        var index = this.pos;
        return new Promise(function (resolve, reject) {
            function next() {
                if (index < migrationCommands.length) {
                    let command = migrationCommands[index];
                    console.log("[#" + index + "] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
