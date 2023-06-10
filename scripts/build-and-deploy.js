const { execSync } = require('child_process');
const path = require('path');
const { copySync } = require('fs-extra');


(async () => {
    try {

        execSync("npm run build")

        const currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
        const lastCommitMessage = execSync('git log -1 --pretty=%B').toString().trim();
        const lastCommitId = execSync('git rev-parse HEAD').toString().trim();

        execSync("git checkout prod");

        const sourcePath = path.join(__dirname, '../dist');
        const targetPath = path.join(__dirname, '../');
        copySync(sourcePath, targetPath);

        execSync('git add .');
        const message = `Add built files from branch ${currentBranch} commit ${lastCommitMessage} ${lastCommitId}`
        execSync(`git commit -m "${message}"`);
        execSync('git push origin prod');
        execSync(`git checkout ${currentBranch}`);
    
    } catch (e) {

        console.error(e)
        
    }
})()
