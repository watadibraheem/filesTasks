const fs = require("fs");
const path = require("path");

// Define file paths
const inputPath = path.join(__dirname, "users.json");
const countPath = path.join(__dirname, "user_count.txt");
const namesPath = path.join(__dirname, "user_names.txt");

// Read the JSON file
const data = fs.readFileSync(inputPath, "utf8");
const users = JSON.parse(data);

// Count users and get their names
const userCount = users.length;
const userNames = users.map((user) => user.name);

// Write the user count to user_count.txt
fs.writeFileSync(countPath, `Total Users: ${userCount}`, "utf8");

// Write all user names to user_names.txt
fs.writeFileSync(namesPath, userNames.join("\n"), "utf8");

console.log("User count and names have been saved successfully.");
