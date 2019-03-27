exports.seed = function(knex) {
    return knex('students').insert([
      { name: 'Frodo Baggins', cohort_id: 1 }, // 1
      { name: 'Samwise Gamgee', cohort_id: 2 }, // 2
      { name: 'Meriadoc Brandybuck', cohort_id: 3 }, // 3
      { name: 'Peregrin Took', cohort_id: 4 }, // 4
      { name: 'Mithrandir', cohort_id: 5 }, // 5
      { name: 'Boromir', cohort_id: 6 }, // 6
      { name: 'Legolas', cohort_id: 1 }, // 7
      { name: 'Gimli', cohort_id: 1 }, // 8
      { name: 'Aragorn', cohort_id: 1 }, // 9
    ]);
  };