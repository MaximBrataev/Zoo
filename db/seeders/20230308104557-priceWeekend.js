'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
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
          category: 'Дети до 5 лет и ветераны ВОВ',
          price: 'Бесплатно',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('priceWeekends', null, {});
  },
};
