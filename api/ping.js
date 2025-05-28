const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const url = process.env.TARGET_URL;
  if (!url) return res.status(500).send("TARGET_URL not set");

  try {
    const response = await fetch(url);
    const text = await response.text();
    res.status(200).send(`Pinged target. Status: ${response.status}\nResponse: ${text}`);
  } catch (err) {
    res.status(500).send(`Ping failed: ${err.message}`);
  }
};