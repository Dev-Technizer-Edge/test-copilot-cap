/**
 * Routes index
 * Aggregates and exports all route modules
 */

const express = require('express');
const router = express.Router();
const taskRoutes = require('./taskRoutes');

// Mount task routes
router.use('/tasks', taskRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
