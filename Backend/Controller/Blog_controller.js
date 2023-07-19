const Blogs = require('../Models/Blog_model'); // Import the Artwork model

// Create a new artwork
const createBlogs = async (req, res) => {
  try {
    const { title, description, author, date, image } = req.body;
    const newArtwork = await Blogs.create({ title, description, author, date, image });
    res.status(201).json(newArtwork);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the artwork.' });
  }
};

// Get all artworks
const getAllBlogs = async (req, res) => {
  try {
    const artworks = await Blogs.find();
    res.json(artworks);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the artworks.' });
  }
};

// Get a single artwork by ID
const getArtworkById = async (req, res) => {
  try {
    const { id } = req.params;
    const artwork = await Artwork.findById(id);
    
    if (!artwork) {
      return res.status(404).json({ error: 'Artwork not found.' });
    }
    
    res.json(artwork);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the artwork.' });
  }
};

// Update an artwork by ID
const updateBlogs = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, author, date, image } = req.body;
    const updatedArtwork = await Blogs.findByIdAndUpdate(id, { title, description, author, date, image }, { new: true });
    
    if (!updatedArtwork) {
      return res.status(404).json({ error: 'Artwork not found.' });
    }
    
    res.json(updatedArtwork);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the artwork.' });
  }
};

// Delete an artwork by ID
const deleteBlogs= async (req, res) => {
  try {
    const { id } = req.params;
    const deletedArtwork = await Blogs.findByIdAndRemove(id);
    
    if (!deletedArtwork) {
      return res.status(404).json({ error: 'Artwork not found.' });
    }
    
    res.json({ message: 'Artwork deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the artwork.' });
  }
};

module.exports = {
    createBlogs,
    getAllBlogs,
    updateBlogs,
  deleteBlogs,
};
