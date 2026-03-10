const Song = require("../models/Song");

exports.getSongs = async (req, res) => {
  try {
    const songs = await Song.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSongById = async (req, res) => {
  try {
    const song = await Song.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    res.json(song);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSong = async (req, res) => {
  try {
    const { title, artist, key, bpm } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const song = await Song.create({
      title,
      artist,
      key,
      bpm,
      user: req.user._id
    });

    res.status(201).json(song);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSong = async (req, res) => {
  try {
    const song = await Song.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    song.title = req.body.title ?? song.title;
    song.artist = req.body.artist ?? song.artist;
    song.key = req.body.key ?? song.key;
    song.bpm = req.body.bpm ?? song.bpm;

    const updatedSong = await song.save();
    res.json(updatedSong);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteSong = async (req, res) => {
  try {
    const deletedSong = await Song.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

    if (!deletedSong) {
      return res.status(404).json({ message: "Song not found" });
    }

    res.json({ message: "Song deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.deleteSong = async (req, res) => {
  try {
    const deletedSong = await Song.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!deletedSong) {
      return res.status(404).json({ message: 'Song not found' });
    }

    res.json({ message: 'Song deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
