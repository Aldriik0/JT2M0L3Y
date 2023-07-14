require("isomorphic-unfetch");
const { promises: fs } = require("fs");
const path = require("path");

async function main() {
  const readmeTemplate = (
    await fs.readFile(path.join(process.cwd(), "./README.template.md"))
  ).toString("utf-8");

  // add api calls here as such:
  /*
  const office_quote = await (
    await fetch("https://officeapi.dev/api/quotes/random")
  ).json();
  
  const readme = readmeTemplate
    .replace("{office_quote}", office_quote.data.content)
    .replace("{office_character}", `- ${office_quote.data.character.firstname} ${office_quote.data.character.lastname}`)
  */
  
  // await fs.writeFile("README.md", readme);
  await fs.writeFile("README.md", readmeTemplate);
}

main();