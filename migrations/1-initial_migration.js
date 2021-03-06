'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Posts", deps: []
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2019-06-22T00:01:54.431Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Posts",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "pet_id": {
                    "type": Sequelize.INTEGER.UNSIGNED,
                    "field": "pet_id",
                    "allowNull": false
                },
                "post_body": {
                    "type": Sequelize.TEXT,
                    "field": "post_body"
                },
                "img_url": {
                    "type": Sequelize.TEXT,
                    "field": "img_url"
                },
                "link_url": {
                    "type": Sequelize.TEXT,
                    "field": "link_url"
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "users",
            {
                "users_id": {
                    "type": Sequelize.INTEGER,
                    "field": "users_id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "owner_first_name": {
                    "type": Sequelize.STRING,
                    "field": "owner_first_name",
                    "allowNull": false
                },
                "owner_last_name": {
                    "type": Sequelize.STRING,
                    "field": "owner_last_name",
                    "allowNull": false
                },
                "Email_User_Name": {
                    "type": Sequelize.STRING,
                    "field": "Email_User_Name",
                    "allowNull": true,
                    "unique": true
                },
                "Password": {
                    "type": Sequelize.STRING,
                    "field": "Password",
                    "allowNull": false
                },
                "pets_name": {
                    "type": Sequelize.STRING,
                    "field": "pets_name",
                    "allowNull": true
                },
                "fav_toy": {
                    "type": Sequelize.STRING,
                    "field": "fav_toy",
                    "allowNull": false
                },
                "breed": {
                    "type": Sequelize.STRING,
                    "field": "breed",
                    "allowNull": false
                },
                "hometown": {
                    "type": Sequelize.STRING,
                    "field": "hometown",
                    "allowNull": false
                },
                "fav_place": {
                    "type": Sequelize.STRING,
                    "field": "fav_place",
                    "allowNull": false
                },
                "join_date": {
                    "type": Sequelize.DATE,
                    "field": "join_date",
                    "defaultValue": Sequelize.Literal,
                    "allowNull": false
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
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
