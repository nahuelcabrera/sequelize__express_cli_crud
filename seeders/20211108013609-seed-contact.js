'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [
      { firstName: 'Hei', lastName: 'Juiol', phone: '993203042', email: 'giiu@exit.com', createdAt: new Date(), updatedAt: new Date()},
      { firstName: 'Yual', lastName: 'Retret', phone: '73728282', email: 'frak@juot.com', createdAt: new Date(), updatedAt: new Date()},
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
