const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session : false });
const requireSignin = passport.authenticate('local', { sessions: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res, next) {
    res.send({ message : 'super secret code is ABC123'});
  });
  app.post('/signup', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
}
