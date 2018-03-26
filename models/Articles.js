const Categories = require("./Categories");
/**
 *  Model Articles
 * @param {*} sequelize
 * @param {*} DataTypes
 */
const Articles = (sequelize, DataTypes) => {
  const Articles = sequelize.define(
    "Articles", // name of Model
    {
      // fields
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      category_id: DataTypes.INTEGER
    },
    {
      classMethods: {
        associate: models => {
          Articles.belongsTo(models.Categories, {
            as: "category"
          });
        }
      }
    }
  );
  return Articles;
};

module.exports = Articles;
