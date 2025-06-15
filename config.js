// config.js
const fs = require('fs');

fs.readFile('./package.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading package.json", err);
    return;
  }
  const config = JSON.parse(data);
  console.log("🧾 Project Name:", config.name);
  console.log("📦 Version:", config.version);
});
