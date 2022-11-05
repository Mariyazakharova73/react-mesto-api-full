const router = require('express').Router();
const {
  getUsers,
  updateProfile,
  getUser,
  getUserMe,
} = require('../controllers/usersController');
const { validateUserId, validateUserInfo, validateUserAvatar } = require('../utils/validation');

router.get('/users', getUsers);
router.get('/users/me', getUserMe);
router.get('/users/:userId', validateUserId, getUser);
router.patch('/users/me', validateUserInfo, updateProfile);
router.patch('/users/me/avatar', validateUserAvatar, updateProfile);

module.exports = router;
