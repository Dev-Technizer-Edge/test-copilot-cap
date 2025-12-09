/**
 * Application configuration
 * Loads environment variables and exports configuration object
 */

const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  // Add more configuration variables as needed
};

module.exports = config;
