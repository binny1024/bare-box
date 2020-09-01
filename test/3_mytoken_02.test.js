// const Loans = artifacts.require('Loans')
// contract("Loans", (accounts) => {
//     console.log(accounts)
// })
const Web3 = require("web3")
const fs = require('fs')
const path = require('path')
describe('MyToken 测试', function () {
    // 合约abi
    let loansAbi;
    // 合约实例
    let instance;
    // 链上账户信息
    let accounts;
    // 合约地址,可以从链上查看或者从 Ganche 客户端查看
    const loansAddress = '0xf6c1C61052e0e98b786179a2b524F31Bbb01e943' //ionc--100
    //创建一个 web3 示例
    // const web3 = new Web3(new Web3.providers.HttpProvider('https://api.ionchain.org'))
    // const web3 = new Web3(new Web3.providers.HttpProvider('http://192.168.31.68:7545'))
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'))
    // it('账户信息 ', async function () {
    //     accounts = await web3.eth.getAccounts();
    //     console.log(accounts)
    // });

    it('获取合约 abi 0 ', async function () {
        //合约生成的Abi，一般为json文件
        loansAbi = require("../build/contracts/MyToken.json").abi;
        console.log(loansAbi)
    });
    // it('获取合约 abi ', async function () {
    //     //合约生成的Abi，一般为json文件
    //     loansAbi = require("../build/contracts/Loans.json").abi;
    //     loansAbi = fs.readFileSync(path.join(__dirname, "../contracts/Loans_sol_Loans.abi")).toString();
    //     console.log(loansAbi)
    //     console.log(JSON.parse(loansAbi))
    //     loansAbi = JSON.parse(loansAbi)
    // });
    it('获取合约实例', async function () {
        instance = new web3.eth.Contract(loansAbi, loansAddress);
    });
    it('合约实例信息 ', async function () {
        console.log(instance)
    });
    // let owner = "0x28a8746e75304c0780e011bed21c72cd78cd535e";
    let owner = "0x35c898931e252299B272c5f09A11710245651942";//私链合约创建者

    // it('上传企业数据 -- 1', async function () {
    //     // 调用 send 方法,消耗以太币
    //     let result = await instance.methods.setCount(112).send({from: owner});
    //     console.log(result)
    // });

    /*
    * methods: {
    allowance: [Function: bound _createTxObject],
    '0xdd62ed3e': [Function: bound _createTxObject],
    'allowance(address,address)': [Function: bound _createTxObject],
    approve: [Function: bound _createTxObject],
    '0x095ea7b3': [Function: bound _createTxObject],
    'approve(address,uint256)': [Function: bound _createTxObject],
    balanceOf: [Function: bound _createTxObject],
    '0x70a08231': [Function: bound _createTxObject],
    'balanceOf(address)': [Function: bound _createTxObject],
    contractAddrBindChainId: [Function: bound _createTxObject],
    '0xd88c2999': [Function: bound _createTxObject],
    'contractAddrBindChainId(uint64)': [Function: bound _createTxObject],
    decimals: [Function: bound _createTxObject],
    '0x313ce567': [Function: bound _createTxObject],
    'decimals()': [Function: bound _createTxObject],
    decreaseAllowance: [Function: bound _createTxObject],
    '0xa457c2d7': [Function: bound _createTxObject],
    'decreaseAllowance(address,uint256)': [Function: bound _createTxObject],
    increaseAllowance: [Function: bound _createTxObject],
    '0x39509351': [Function: bound _createTxObject],
    'increaseAllowance(address,uint256)': [Function: bound _createTxObject],
    manager: [Function: bound _createTxObject],
    '0x481c6a75': [Function: bound _createTxObject],
    'manager()': [Function: bound _createTxObject],
    minter: [Function: bound _createTxObject],
    '0x07546172': [Function: bound _createTxObject],
    'minter()': [Function: bound _createTxObject],
    name: [Function: bound _createTxObject],
    '0x06fdde03': [Function: bound _createTxObject],
    'name()': [Function: bound _createTxObject],
    symbol: [Function: bound _createTxObject],
    '0x95d89b41': [Function: bound _createTxObject],
    'symbol()': [Function: bound _createTxObject],
    totalSupply: [Function: bound _createTxObject],
    '0x18160ddd': [Function: bound _createTxObject],
    'totalSupply()': [Function: bound _createTxObject],
    transfer: [Function: bound _createTxObject],
    '0xa9059cbb': [Function: bound _createTxObject],
    'transfer(address,uint256)': [Function: bound _createTxObject],
    transferFrom: [Function: bound _createTxObject],
    '0x23b872dd': [Function: bound _createTxObject],
    'transferFrom(address,address,uint256)': [Function: bound _createTxObject],
    mint: [Function: bound _createTxObject],
    '0x40c10f19': [Function: bound _createTxObject],
    'mint(address,uint256)': [Function: bound _createTxObject],
    burn: [Function: bound _createTxObject],
    '0x42966c68': [Function: bound _createTxObject],
    'burn(uint256)': [Function: bound _createTxObject],
    setMinter: [Function: bound _createTxObject],
    '0xfca3b5aa': [Function: bound _createTxObject],
    'setMinter(address)': [Function: bound _createTxObject],
    bindContractAddrWithChainId: [Function: bound _createTxObject],
    '0xb8527682': [Function: bound _createTxObject],
    'bindContractAddrWithChainId(uint64,bytes)': [Function: bound _createTxObject]
  }
  * */
    it('获取代币的名字及符号 ', async function () {
        let result = await instance.methods.name().call({from: owner});
        console.log('name',result.toString())
        result = await instance.methods.symbol().call({from: owner});
        console.log('symbol',result.toString())
    });






    // it('上传企业数据 -- 2', async function () {
    //     let result = await instance.methods.applicationSubmit(true, true, true).send({from: owner});
    //     console.log(result)
    // });
    // it('审核--1 ', async function () {
    //     let result = await instance.methods.offlineStuffSubmit(true, true, accounts[1]).send({from: owner});
    //     console.log(result)
    // });
    // it('审核--2 ', async function () {
    //     let result = await instance.methods.offlineStuffSubmit(true, true, accounts[2]).send({from: owner});
    //     console.log(result)
    // });
    // it('获取审核结果--1 ', async function () {
    //     // 调用 call 不消耗以太币
    //     this.timeout(20000);
    //     let result = await instance.methods.getApplicationResult().call({from: owner});
    //     console.log(result.toString())
    // });
    // it('获取审核结果--2 ', async function () {
    //     let result = await instance.methods.getApplicationResult().call({from: accounts[2]});
    //     console.log(result.toString())
    // });
    // it('Credit ', async function () {
    //     let result = await instance.methods.getApplicationCredit().call({from: accounts[2]});
    //     console.log(result.toString())
    // });
    // it('Dispute ', async function () {
    //     let result = await instance.methods.getApplicationDispute().call({from: accounts[2]});
    //     console.log(result.toString())
    // });
    // it('Overdue ', async function () {
    //     let result = await instance.methods.getApplicationOverdue().call({from: accounts[2]});
    //     console.log(result.toString())
    // });
    // it('Man ', async function () {
    //     let result = await instance.methods.getApplicationMan().call({from: accounts[2]});
    //     console.log(result.toString())
    // });
    // it('Mac ', async function () {
    //     let result = await instance.methods.getApplicationMac().call({from: accounts[2]});
    //     console.log(result.toString())
    // });
});