const express = require('express');
const app = express();
const port = 3000;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const usermodel = require('./model/user');
const cors = require('cors');
// Import Item model
const itemmodel = require('./model/item');
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// POST route to handle signup
app.post('/signup', async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields.' });
      }
  
      let user = await usermodel.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already registered.' });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
  
      let newUser = await usermodel.create({
        username,
        email,
        password: hash,
      });
  
      const token = jwt.sign({ email }, 'shh', { expiresIn: '1h' }); // Added expiry for token
      res.cookie('token', token, { httpOnly: true });
  
      res.status(200).json({ message: 'User registered successfully!' });
    } catch (error) {
      console.error('Error in /signup route:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide email and password.' });
        }

        const user = await usermodel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not registered.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = jwt.sign({ email, username: user.username }, "shh", { expiresIn: '1h' });
            res.cookie("token", token, { httpOnly: true });
            res.status(200).json({ message: 'Login successful!', token, username: user.username });
        } else {
            res.status(400).json({ message: 'Incorrect password.' });
        }
    } catch (error) {
        console.error('Error in /login route:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET route to get random items
app.get('/items',(req,res)=>{
  itemmodel.find()
  .then(item => res.json(item))
  .catch(err => res.json(err))
})
/* Server ko listen karna
app.get('/itemss', (req, res) => {
  const cuisine = req.query.cuisine;
  itemmodel.find({ cuisine: { $regex: new RegExp(cuisine, 'i') } }) // Case-insensitive query
    .then(items => res.json(items))
    .catch(err => res.status(500).json({ error: err.message }));
});*/
app.get('/itemss', (req, res) => {
  const cuisine = req.query.cuisine;
  itemModel.find({ cuisine }) // Ensure the query matches your database structure
    .then(items => res.json(items))
    .catch(err => res.status(500).json({ error: err.message }));
});
app.get('/itemes/:category', async (req, res) => {
  const category = req.params.category;
  try {
      // Find items where category matches the selected category
      const items = await itemmodel.find({ category: category });
      res.json(items);
  } catch (error) {
      res.status(500).json({ message: "Error fetching items by category" });
  }
});
//add to card...
// Assuming you have an Item model
app.post('/add-to-cart', async (req, res) => {
  const { userId, itemId } = req.body; // Expecting userId and itemId from frontend

  try {
    // Find the user by ID
    const user = await usermodel.findById(userId);

    // Check if the item is already in the cart
    if (!user.cart.includes(itemId)) {
      // Add item to the cart
      user.cart.push(itemId);
      await user.save();
      return res.status(200).json({ message: 'Item added to cart successfully.' });
    } else {
      return res.status(400).json({ message: 'Item already in cart.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to add item to cart.' });
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
