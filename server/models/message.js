module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    send_to: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Message.associate = (models) => {
    Message.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Message;
};
