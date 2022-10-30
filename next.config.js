const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy()({
  env: {
    API_URL: process.env.API_URL,
  },
});
