// Filename: api-routes.js
// Initialize express router
import express from 'express'
const router = express.Router()
// Set default API response
router.get('/', function (req, res) {
res.json({
status: 'API is Working',
message: 'Welcome to my REST API!'
});
});
// Import controllers here
import * as loginController from "../Controllers/UnitsControllers.js"
import verifyToken from '../auth/auth.js'
// define routes here
router.route('/login')
    .post(loginController.login);

router.route('/admin')
    .get([verifyToken, loginController.admin]);
// Export API routes. As it is the only export, we make it the default.
export default router;