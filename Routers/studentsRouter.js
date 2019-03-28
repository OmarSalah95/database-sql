const studentsRouter = require('express').Router()
const db = require('../Data/dbConfig');

// Get an Array of students from the db
studentsRouter.get('/', (req, res) => {
    db('students')
    .then(students => { res.status(200).json(students) })
    .catch(err => {res.status(500).json({message: `Couldn't retrieve students list. ${err}`})})
  })
// Add New student to Db
  studentsRouter.post('/', (req, res) =>{
    req.body.name
        ? db('students').insert(req.body)
            .then(id =>{res.status(201).json(id)})
            .catch(err=>res.status(500).json({error: "Error inserting the submitted student."}))
        : res.status(400).json({message: "Please include a name for the submitted student."})
  })
// GET student by ID from DB
  studentsRouter.get('/:id', (req, res) => {
    db('students')
        .where({id: req.params.id})
            .then(student => {
                student   
                    ? res.status(200).json(student)
                    : res.status(404).json({message: "The student with the specified id does not exist."})
            })
            .catch(err => res.status(500).json({error: "An error occurred while retrieving this student."}))
  })

// Update and existing student in the DB.
  studentsRouter.put('/:id', (req, res) => {
  req.body.name
    ?  db('students')
        .where({id: req.params.id})
        .update(req.body)
            .then(count => {
                count
                    ? res.status(200).json(count)
                    : res.status(404).json({message: "The student with that ID does not exits."})
            })
            .catch(err => res.status(500).json({error: "An error occurred while updating this student."}))
    : res.status(400).json({message: "Please include the updated student's name."})
  })
// Delete Existing students in the DB
  studentsRouter.delete('/:id', (req, res) => {
    db('students')
        .where({id: req.params.id})
        .del()
        .then(count => {
            count
                ? res.status(200).json({count})
                :res.status(404).json({message: "That zoo doesn't exist in our Database"})
        })
        .catch(err=>res.status(500).json({error: "Could NOT delete this zoo."}))
  })

module.exports = studentsRouter