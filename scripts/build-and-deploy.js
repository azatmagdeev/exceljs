const { execSync } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
(async () => {
    try {

        execSync("npm run build")
        const distPath = path.join(__dirname, '../dist');
        const files = await fs.readdir(distPath);

        console.log(files)
        const prodFiles = {};
        for (const file of files) {
            const filePath = path.join(distPath, file);
            const fileContent = await fs.readFile(filePath, 'utf8');

            prodFiles[file] = fileContent
        }

        execSync("git checkout prod");


    } catch (e) {

        console.error(e)

    }
})()
