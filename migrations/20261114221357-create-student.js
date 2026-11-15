'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        defaultValue:Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      firstName: {
        type: Sequelize.STRING,
          allowNull: false,
      },lastName:{
          type: Sequelize.STRING,
          allowNull: false,
      },email:{
         type: Sequelize.STRING,
          allowNull: false,
      },
      phoneNumber:{
          type: Sequelize.STRING,
          allowNull: false,
      },profileImage:{
           type: Sequelize.STRING,
          allowNull: false,
      },galleryImage:{
         type: Sequelize.JSON,
          allowNull: false,
          defaultValue:[]
      },passportImage:{
         type: Sequelize.STRING,
          allowNull: false,
           defaultValue:''
      },idCardImage:{
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue:''
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};