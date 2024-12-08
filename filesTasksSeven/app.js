const fs = require("fs");
const path = require("path");

// File paths
const dirPath = path.join(__dirname, "files");
const filePaths = [
  path.join(dirPath, "file1.txt"),
  path.join(dirPath, "file2.txt"),
  path.join(dirPath, "file3.txt"),
];
const outputPath = path.join(dirPath, "result.txt");

// Function to read lines from a file
function readLines(filePath) {
  return fs.readFileSync(filePath, "utf8").split("\n");
}

// Main function
function mergeFiles() {
  const files = filePaths.map(readLines); // Read all files
  const output = []; // Array to store the output lines
  let maxLines = Math.max(...files.map((lines) => lines.length)); // Longest file length

  let linesToCopy = 1; // Start with 1 line

  while (linesToCopy <= maxLines) {
    for (let i = 0; i < files.length; i++) {
      const lines = files[i].slice(0, linesToCopy); // Get n lines from file
      output.push(...lines); // Add lines to the output
      files[i] = files[i].slice(linesToCopy); // Remove the lines we just copied
    }
    linesToCopy++; // Increment the number of lines to copy
  }

  // Write to the result file
  fs.writeFileSync(outputPath, output.join("\n"), "utf8");
  console.log("Task completed! Check result.txt.");
}

mergeFiles();