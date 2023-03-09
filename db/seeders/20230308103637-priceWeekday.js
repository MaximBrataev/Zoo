'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'priceWeekdays',
      [
        {
          category: 'Взрослый',
          price: '500 рублей',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: 'Детский',
          price: '150 рублей',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: 'Льготный',
          price: '50 рулей',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: 'Дети до 5 лет и ветераны ВОВ',
          price: 'Бесплатно',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('priceWeekdays', null, {});
  },
};
