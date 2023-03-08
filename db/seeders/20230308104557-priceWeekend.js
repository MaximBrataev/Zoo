'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'priceWeekends',
      [
        {
          category: 'Взрослый',
          price: '700 рублей',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: 'Детский',
          price: '300 рублей',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: 'Льготный',
          price: '150 рулей',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: '*',
          price: 'Бесплатно',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('priceWeekends', null, {});
  },
};
