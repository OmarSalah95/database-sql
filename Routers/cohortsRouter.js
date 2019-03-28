const cohortsRouter = require('express').Router()
const db = require('../Data/dbConfig');

// Get an Array of cohorts from the db
cohortsRouter.get('/', (req, res) => {
    db('cohorts')
    .then(cohorts => { res.status(200).json(cohorts) })
    .catch(err => {res.status(500).json({message: `Couldn't retrieve Cohorts list. ${err}`})})
  })
// Add New cohort to Db
  cohortsRouter.post('/', (req, res) =>{
    req.body.name
        ? db('cohorts').insert(req.body)
            .then(id =>{res.status(201).json(id)})
            .catch(err=>res.status(500).json({error: "Error inserting the submitted cohort."}))
        : res.status(400).json({message: "Please include a name for the submitted cohort."})
  })
// GET cohort by ID from DB
  cohortsRouter.get('/:id', (req, res) => {
    db('cohorts')
        .where({id: req.params.id})
            .then(cohort => {
                cohort   
                    ? res.status(200).json(cohort)
                    : res.status(404).json({message: "The cohort with the specified id does not exist."})
            })
            .catch(err => res.status(500).json({error: "An error occurred while retrieving this cohort."}))
  })
// Get Specified Cohorts students by ID.
cohortsRouter.get("/:id/students", (req, res) => {
    const cohortId = req.params.id;
    //Verify Cohort is in the Table
    db("cohorts")
      .where({ id: cohortId })
      .then(cohort => {
        cohort
            ?  db("students")
                .where({ cohort_id: cohortId })
                .then(students => {
                    // Check if the Array is populated
                    students.length
                        ?  res.status(200).json(students)
                        : res.status(404).json({message: "The cohort with that ID does not contain any students."});
                })
                .catch(err =>
                    res.status(500).json({error:"An error occurred while retrieving that cohort's students."})
                )
            : res
                .status(404)
                .json({ message: "The cohort with that ID does not exist." });
      });
  });
// Update and existing cohort in the DB.
  cohortsRouter.put('/:id', (req, res) => {
  req.body.name
    ?  db('cohorts')
        .where({id: req.params.id})
        .update(req.body)
            .then(count => {
                count
                    ? res.status(200).json(count)
                    : res.status(404).json({message: "The cohort with that ID does not exits."})
            })
            .catch(err => res.status(500).json({error: "An error occurred while updating this cohort."}))
    : res.status(400).json({message: "Please include the updated cohort's name."})
  })
// Delete Existing cohorts in the DB
  cohortsRouter.delete('/:id', (req, res) => {
    db('cohorts')
        .where({id: req.params.id})
        .del()
        .then(count => {
            count
                ? res.status(200).json({count})
                :res.status(404).json({message: "That zoo doesn't exist in our Database"})
        })
        .catch(err=>res.status(500).json({error: "Could NOT delete this zoo."}))
  })

module.exports = cohortsRouter