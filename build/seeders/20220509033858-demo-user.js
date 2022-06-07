'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('pe_users', [{
                firstName: 'Demo',
                middleName: 'Demo',
                lastName: 'Demo',
                email: 'example@example.com',
                email_recovery: 'examplerecpvery@example.com',
                userName: 'user123',
                password: '123456',
                photoProfile: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y',
                photoBackground: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y',
            }]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('pe_users', null, {});
    }
};
