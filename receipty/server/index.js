const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./models/User');
require('./services/passport')(passport);

mongoose.connect(keys.mongoURI)

const app = express()

app.use(cors());
app.use(bodyParser.json());

app.use(
  cookieSession({
    name: 'Session',
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())



//import routes
const expenseRoutes = require('./routes/expenseRoutes')
const reportRoutes = require('./routes/reportRoutes')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const messageRoutes = require('./routes/messageRoutes')

//use routes
app.use(expenseRoutes)
app.use(reportRoutes)
app.use(userRoutes)
app.use(messageRoutes)
app.use(authRoutes)

// app.use(require('./routes/fakeDataRoutes'));

//only in heroku
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
