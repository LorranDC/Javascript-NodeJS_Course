const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {

    queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Lorran',
          email: 'lorran1@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
        {
          nome: 'Lorran 2',
          email: 'lorran2@gmail.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),

        },
        {
          nome: 'Lorran 3',
          email: 'lorran3@gmail.com',
          password_hash: await bcryptjs.hash('123456789', 8),
          created_at: new Date(),
          updated_at: new Date(),

        }
      ],
      {}
    );
  },

  async down() {

  }
};
