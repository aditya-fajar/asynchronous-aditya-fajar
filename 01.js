const fs = require('fs')
const readDir = () => {
    return new Promise((resolve, reject) => {
         fs.readdir('/', (err, result) => err != null ? reject(err) : resolve(result))
    })
}

function errorHandler(err) {
   throw new Error(err.message);
}
function successHandler(result) {
   console.log(result);
}

readDir().then(successHandler).catch(errorHandler);