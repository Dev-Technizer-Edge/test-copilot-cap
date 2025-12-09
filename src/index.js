/**
 * Application entry point
 * Starts the Express server
 */

const app = require('./app');
const config = require('./config');

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${config.env}`);
  console.log(`API endpoints available at http://localhost:${PORT}/api`);
});
