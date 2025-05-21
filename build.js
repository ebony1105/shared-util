const path = require('path');
const fs = require('fs-extra');
const dest_dir = path.resolve(__dirname, 'dist');

async function copyFiles({src, dest}) {
    try { 
        await fs.copy(src, dest)
    } catch (err) {
        console.error(`Error copying file: ${err}`);
    }
}

async function build() {
    await copyFiles({src: './package.json', dest: `${dest_dir}/package.json`});
}

build()