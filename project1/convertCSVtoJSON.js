const fs = require("fs");
const readline = require("readline");

async function wrapAsync() {
  const filePath = [""];
  const data = [];
  const duplicates = [];
  for (let i = 0; i < filePath.length; i++) {
    const fileStream = fs.createReadStream(filePath[i]);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    for await (const line of rl) {
      if (!data.includes(line)) {
        data.push(line);
      } else {
        duplicates.push(line);
      }
    }
  }
  console.log(data.length);
  console.log(duplicates.length);

  fs.writeFileSync("./csv/stuff/444.json", JSON.stringify(data));
}

wrapAsync()
  .then(() => 1)
  .catch((err) => console.log(err));
