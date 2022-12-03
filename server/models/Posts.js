module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    orgName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Posts;
};
