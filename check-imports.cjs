const fs = require("fs");
const path = require("path");

const SRC_DIR = path.join(__dirname, "src");

// Recursive function to scan all files
function getAllFiles(dir, extList, files = []) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, extList, files);
    } else if (extList.includes(path.extname(file))) {
      files.push(fullPath);
    }
  });
  return files;
}

// Normalize filenames in a directory
function getDirFiles(dir) {
  return fs.readdirSync(dir);
}

// Check imports inside files
function checkImports(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const regex = /from\s+['"](.+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const importPath = match[1];

    // Only check relative imports (./ or ../)
    if (importPath.startsWith(".")) {
      const absPath = path.resolve(path.dirname(filePath), importPath);
      const dir = path.dirname(absPath);
      const base = path.basename(absPath);

      if (fs.existsSync(dir)) {
        const filesInDir = getDirFiles(dir);
        const exactMatch = filesInDir.find(
          (f) => f.replace(/\.[jt]sx?$/, "") === base
        );

        if (!exactMatch) {
          console.log(
            `❌ Case mismatch or missing file:\n   Import "${importPath}" in ${filePath}`
          );
          console.log(`   Files in directory: ${filesInDir.join(", ")}`);
          console.log("");
        }
      }
    }
  }
}

// Run the scan
const files = getAllFiles(SRC_DIR, [".js", ".jsx", ".ts", ".tsx"]);
files.forEach(checkImports);

console.log("✅ Scan complete!");
