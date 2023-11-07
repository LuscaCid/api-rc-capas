const knex = require("knex")

exports.up = knex => knex.schema.creaTable('Clients', table => {
  table.increments('id').primary()
  table.text('name').notNullable()
  table.text('cpf').notNullable()
  table.text('email').notNullable()
  table.integer('created_by').references('id').inTable('users')
  table.timestamp('created_at').default(knex.fn.now())
  table.timestamp('updated_at').default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('OS')
