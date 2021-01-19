'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('blogs', [
     
    {
      title: 'Sequelize',
      body: 'dhfhfdzf',
      userID: 1,
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      title: 'Prototypes',
      body: 'bfdghdghx',
      userID: 2,
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      title: 'PG Promise',
      body: 'bfdbngx',
      userID: 3,
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      title: 'React',
      body: 'fngxmfxh',
      userID: 4,
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      title: 'Redux',
      body: ' mhgmjxdhgx',
      userID: 1,
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      title: 'Bootstrap',
      body: 'hdfhxg',
      userID: 2,
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      title: 'HTML',
      body: 'gnfkjxdh',
      userID: 3,
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      title: 'jQuery',
      body: 'mdxhgdf',
      userID: 4,
      createdAt: new Date(),
      updatedAt: new Date()

    }
    ], {});

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
