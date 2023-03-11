const fs = require("fs");
const readline = require("readline");
//const data = [1,2,3,4,5]
//const duplicates = [1,2,3]
async function wrapAsync() {
  const filePath = ['txt/1.txt'];
  const data = [];
  const duplicates = [];
  for (let i = 0; i < filePath.length; i++) {
    const fileStream = fs.createReadStream(filePath[i]);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    for (const line of rl) {
      if (!data.includes(line)) {
        data.push(line);
      } else {
        duplicates.push(line);
      }
    }
  }
  console.log(data.length);
  console.log(duplicates.length);

  fs.writeFileSync("./json/data.json", JSON.stringify(data));
  fs.writeFileSync("./json/dublicates.json", JSON.stringify(duplicates));
}

wrapAsync()
  .then(() => 1)
  .catch((err) => console.log(err));
