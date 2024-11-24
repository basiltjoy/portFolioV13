const fs = require('fs');
const path = './dist/portFolioV13/.nojekyll';

fs.writeFileSync(path, '', 'utf8');
console.log('.nojekyll file created');
