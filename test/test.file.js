const fs = require('fs');
const path = require('path');
(async () => {
    let buffer = fs.readFileSync(path.join(__dirname, "../resources/en-mnemonic-word-list.txt"));
    let arr = buffer.toString().split('\n');
    console.log(arr.length);
    // for (const index in arr) {
    //     console.log('index = ',arr[index]);
    // }
    let mnemonics = []
    for (let i =0;i<12;i++){
        mnemonics.push(arr[Math.ceil(Math.random()*arr.length)])
    }
    console.log(mnemonics.toString());
    


})()