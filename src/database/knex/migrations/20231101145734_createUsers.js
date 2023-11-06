//table users that contains 

exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id')
    table.text("name").notNullable()
    table.text("password").notNullable()
    table.boolean('isActive')
    table.timestamp('created_at').default(knex.fn.now())
    table.timestamp('updated_at').default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('users')