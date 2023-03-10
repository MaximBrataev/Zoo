'use strict';
const bcrypt = require('bcrypt');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const passwordEntrance = 'admin';
    const hashPass = await bcrypt.hash(passwordEntrance, 10);

    await queryInterface.bulkInsert(
      'Admins',
      [
        {
          email: 'admin@admin',
          password: hashPass,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Admins', null, {});
  },
};
