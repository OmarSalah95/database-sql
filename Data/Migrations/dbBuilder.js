exports.up = function(knex) {
    return knex.schema
      .createTable('cohorts', function(cohorts) {
        cohorts.increments('id');

        cohorts
          .string('name')
          .notNullable()
      })
      .createTable('students', function(students) {
        students.increments('id');
            
        students.string('name')
            .notNullable();
  
        students
          .integer('cohort_id')
          .notNullable()
          .references('id')
          .inTable('cohorts');
      });
  };

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cohorts')
                      .dropTableIfExists('students');
  };