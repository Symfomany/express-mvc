/**
 *  Model Articles
 * @param {*} sequelize
 * @param {*} DataTypes
 */
const Articles = require("./Articles");

const Categories = (sequelize, DataTypes) => {
  return sequelize.define(
    "Categories", // name of Model
    {
      // fields
      title: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      classMethods: {
        associate: models => {
          Categories.hasMany(models.Articles);
        }
      }
    }
  );
};

module.exports = Categories;
