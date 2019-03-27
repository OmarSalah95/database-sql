// Update with your config settings.

module.exports = {
  development: {
    useNullAsDefault: true,

    client: 'sqlite3',

    connection: {
      filename: './Data/lambda.sqlite3'
    },

    migrations: {
      directory: './Data/Migrations',
      tableName: 'knex_migrations'
    },

    seeds: {
      directory: './Data/Seeds',
    },
  }
}
