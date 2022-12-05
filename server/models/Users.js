//Constructing a database schema for user logins
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Users;
};
