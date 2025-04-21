const express = require('express');
const router = express.Router();
const Note = require('../models/note');

router.get('/notes', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

router.post('/notes', async (req, res) => {
  const newNote = new Note({ content: req.body.content });
  await newNote.save();
  res.json(newNote);
});

module.exports = router;