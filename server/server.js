require("dotenv").config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();
const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());
app.use("/api/v1", routes);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
})