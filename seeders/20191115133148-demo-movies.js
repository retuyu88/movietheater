'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('movies', [{
        movie_name: 'Si Buta Dari Goa Hantu',
        movie_rating: 8,
        duration: 120,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        movie_name: 'Si Hantu Dari Goa Buta',
        movie_rating: 6,
        duration: 112,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        movie_name: 'Si Buta Hantu Dari Goa',
        movie_rating: 8,
        duration: 90,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        movie_name: 'Si Goa Buta Dari Hantu',
        movie_rating: 8,
        duration: 120,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        movie_name: 'Dari Hantu Si Buta Goa',
        movie_rating: 8,
        duration: 120,
        createdAt : new Date(),
        updatedAt : new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
