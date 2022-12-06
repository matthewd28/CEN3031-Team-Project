module.exports = (sequelize, DataTypes) => {
    const Hours = sequelize.define("Hours", {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      orgName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
     });
  
    return Hours;
  };