const Web3 = require("web3");

(async () => {
    // 合约abi
    let loansAbi;
    // 合约实例
    let instance;
    // 链上账户信息
    let accounts;
    // 合约地址,可以从链上查看或者从 Ganche 客户端查看
    const loansAddress = '0x8ebce3764E3b0442af914C4b6d9587512839901A'
    //创建一个 web3 示例
    const web3 = new Web3(new Web3.providers.WebsocketProvider('http://localhost:7545'))
    accounts = await web3.eth.getAccounts();
    console.log(accounts);
    loansAbi = require("./build/contracts/Loans.json").abi;
    instance = new web3.eth.Contract(loansAbi, loansAddress);
    // console.log(instance);
    instance.events.ApplicationSubmit({fromBlock:0},function (error, result) {
        if (error) {
            console.error(error);
        } else {
            console.log(result)
        }
    })
})()