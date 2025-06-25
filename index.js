import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

console.log("Starting prompt...");

inquirer
  .prompt([
    {
      type: "input",
      name: "URL",
      message: "Enter your URL: ",
    },
  ])
  .then((answers) => {
    const url = answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr-img.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment.");
    } else {
      console.error("An error occurred:", error);
    }
  });
