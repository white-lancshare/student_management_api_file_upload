'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  student.init( {
      id: {
        allowNull: false,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID
      },
      firstName: {
        type: DataTypes.STRING,
          allowNull: false,
      },lastName:{
          type: DataTypes.STRING,
          allowNull: false,
      },email:{
         type: DataTypes.STRING,
          allowNull: false,
      },
      phoneNumber:{
          type: DataTypes.STRING,
          allowNull: false,
      },profileImage:{
           type: DataTypes.STRING,
          allowNull: false,
      },galleryImage:{
         type: DataTypes.JSON,
          allowNull: false,
          defaultValue:[]
      },passportImage:{
         type: DataTypes.STRING,
          allowNull: false,
           defaultValue:''
      },idCardImage:{
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue:''
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }, {
    sequelize,
    modelName: 'student',
    timestamps:true
  });
  return student;
};