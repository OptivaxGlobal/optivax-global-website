import fs from "fs";
import path from "path";

const pagesDir = "./src/pages";

// Clean text (remove JSX, tags etc)
const cleanText = (text) => {
  return text
    .replace(/<[^>]*>/g, "") // remove HTML tags
    .replace(/[{}()[\];,.]/g, " ") // remove symbols
    .replace(/\s+/g, " ") // extra spaces
    .trim();
};

const getStats = (text) => {
  const words = text.split(" ").filter(Boolean);
  const characters = text.replace(/\s/g, "");
  const alphabets = text.replace(/[^a-zA-Z]/g, "");

  return {
    words: words.length,
    characters: characters.length,
    alphabets: alphabets.length,
  };
};

const files = fs.readdirSync(pagesDir);

console.log("\n📊 PAGE ANALYSIS:\n");

files.forEach((file) => {
  if (file.endsWith(".jsx")) {
    const filePath = path.join(pagesDir, file);
    const content = fs.readFileSync(filePath, "utf-8");

    const cleaned = cleanText(content);
    const stats = getStats(cleaned);

    console.log(`📄 ${file}`);
    console.log(`Words: ${stats.words}`);
    console.log(`Characters: ${stats.characters}`);
    console.log(`Alphabets: ${stats.alphabets}`);
    console.log("---------------------------");
  }
});