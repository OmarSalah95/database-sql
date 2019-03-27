exports.seed = function(knex) {
    return knex('cohorts').insert([
      { name: 'Web 17' }, // 1
      { name: 'DS 3' }, // 2
      { name: 'Web 18' }, // 3
      { name: 'iOS 2' }, // 4
      { name: 'UX/UI 1' }, // 5
      { name: 'Java Backend' }, // 6
      { name: 'Android APK' }, // 7
    ]);
  };