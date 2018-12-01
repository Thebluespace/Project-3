module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('user', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        username: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        isLoggedIn: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        lastLogIn: {
            type: Sequelize.DATE,
            allowNull: false
        },
        expires: {
            type: Sequelize.DATE,
            allowNull: false
        }
    });
    return User; 
}