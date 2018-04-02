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
      title: { type: DataTypes.STRING, unique: "theTitle", notEmpty: true },
      description: { type: DataTypes.TEXT, is: ["^[a-z]{10,}$", "i"] },
      active: { type: DataTypes.INTEGER },
      datePublication: { type: DataTypes.DATE, isDate: true },
      note: { type: DataTypes.INTEGER, isInt: true, min: 1, max: 5 },
      category_id: { type: DataTypes.INTEGER }
    },
    {
      getterMethods: {
        dateFr() {
          function pad(s) {
            return s < 10 ? "0" + s : s;
          }
          var d = new Date(this.datePublication);
          return [
            pad(d.getDate()),
            pad(d.getMonth() + 1),
            d.getFullYear()
          ].join("/");
        }
      }
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
