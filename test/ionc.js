const Web3 = require('web3');



(async ()=>{
    const web3 = new Web3(new Web3.providers.HttpProvider('https://api.ionchain.org'))
    let hash = '0x0301b1b2cfb9cb64db5ab1f5ddaa76af86dd895b79eed56c246423c682b917e7'
    let transactionReceipt = await web3.eth.getTransactionReceipt(hash);
    console.log(transactionReceipt)
})()
