'use strict';
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define('movies', {
    movie_name: DataTypes.STRING,
    movie_rating: DataTypes.INTEGER,
    duration: DataTypes.INTEGER
  }, {});
  movies.associate = function(models) {
    // associations can be defined here
  };
  return movies;
};