const express = require('express');
const router = express.Router();

const users = [
  {
    username: "tung",
    password: "abc123"
  },
  {
    username: "hoaianh",
    password: "abc123"
  }
]
router.post('/login', (req, res) => {
  const {username, password} = req.body;
  if (!username || password) {
    return res.json({
      msg: "Missing field"
    })
  }
  const user = users.find
})

router.post('/register', (req, res) => {

})

module.exports = router;