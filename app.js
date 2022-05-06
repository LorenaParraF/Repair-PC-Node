const express = require('express');

// Routers
const { usersRouter } = require('./routers/users.routes');
const { repairsRouter } = require('./routers/repairs.routes');
const { Repair } = require('./models/repair.model');
const { User } = require('./models/user.model');

// // Utils
const { db } = require('./utils/database');

const app = express();

// app.use(express.json());
User.hasMany(Repair);
Repair.belongsTo(User);

// Endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

// Authenticate db credentials
db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch(err => console.log(err));

db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

// // Spin up server
// const PORT = process.env.PORT || 4001;

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});

module.exports = { app };
