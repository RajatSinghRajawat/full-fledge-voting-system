const express = require('express')
const connectDB = require('./config/db.config')
const app = express()
const port = 3000
const adminRoutes = require('./routes/admin.routes')
app.use(express.json())


app.get('/ping', (req, res) => {
  res.send("ok");
})

app.use('/api/v1/admin', adminRoutes);

app.listen(port, () => {
  console.log(`Admin server started on : ${port}`);
  connectDB();
})