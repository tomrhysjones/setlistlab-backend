const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

const {
  createSetlist,
  getSetlists,
  updateSetlist,
  deleteSetlist,
  addSongsToSetlist,
  removeSongFromSetlist,
} = require('../controllers/setlistController')

router.post('/', protect, createSetlist)
router.get('/', protect, getSetlists)
router.put('/:id', protect, updateSetlist)
router.delete('/:id', protect, deleteSetlist)
router.put('/:id/songs', protect, addSongsToSetlist)
router.put('/:id/remove-song', protect, removeSongFromSetlist)

module.exports = router