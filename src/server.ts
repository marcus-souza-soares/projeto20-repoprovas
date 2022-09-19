import app from "./index.js";

import chalk from "chalk";

const port = process.env.PORT || 5000;
console.log("banco de dados se encontra em: " + process.env.DATABASE_URL)

app.listen(port, () => {
  console.log(chalk.green.bold(`\nServer running on port ${port}...`));
});
