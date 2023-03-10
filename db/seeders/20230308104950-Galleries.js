'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Galleries',
      [
        {
          animalId: 1,
          photo: '/img/tiger1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 1,
          photo: '/img/tiger2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 1,
          photo: '/img/tiger3.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 1,
          photo: '/img/tiger4.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 2,
          photo: '/img/ziraf1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 2,
          photo: '/img/ziraf2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 2,
          photo: '/img/ziraf3.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 2,
          photo: '/img/ziraf4.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 3,
          photo: '/img/bober1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 3,
          photo: '/img/bober2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 3,
          photo: '/img/bober3.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 3,
          photo: '/img/bober4.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 4,
          photo: '/img/bear1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 4,
          photo: '/img/bear2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 4,
          photo: '/img/bear3.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 4,
          photo: '/img/bear4.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 5,
          photo: '/img/kazuar1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 5,
          photo: '/img/kazuar2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 5,
          photo: '/img/kazuar3.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 5,
          photo: '/img/kazuar4.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 6,
          photo: '/img/zebra1.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 6,
          photo: '/img/zebra2.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 6,
          photo: '/img/zebra3.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 6,
          photo: '/img/zebra4.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 7,
          photo: '/img/elephant1.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 7,
          photo: '/img/elephant2.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 7,
          photo: '/img/elephant3.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 7,
          photo: '/img/elephant4.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 8,
          photo: '/img/rhinoceros1.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 8,
          photo: '/img/rhinoceros2.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 8,
          photo: '/img/rhinoceros3.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 8,
          photo: '/img/rhinoceros4.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 9,
          photo: '/img/panda1.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 9,
          photo: '/img/panda2.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 9,
          photo: '/img/panda3.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 9,
          photo: '/img/panda4.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 10,
          photo: '/img/barhCat1.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 10,
          photo: '/img/barhCat2jpeg.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 10,
          photo: '/img/barhCat3.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          animalId: 10,
          photo: '/img/barhCat4.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Galleries', null, {});
  },
};
