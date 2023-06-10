const { execSync } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const { copySync } = require('fs-extra');


(async () => {
    try {

        execSync("npm run build")
        execSync("git checkout prod");
        const sourcePath = join(__dirname, '../dist');
        const targetPath = join(__dirname, '../');
        copySync(sourcePath, targetPath);
        execSync('git add .');
        execSync('git commit -m "Add built files"');
        execSync('git push origin prod');
        execSync('git checkout master');
        
    } catch (e) {

        console.error(e)

    }
})()
