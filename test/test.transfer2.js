// const Loans = artifacts.require('Loans')
// contract("Loans", (accounts) => {
//     console.log(accounts)
// })
const Web3 = require("web3")
const fs = require('fs')
const path = require('path')
describe('Transfer 测试', function () {
    // 合约abi
    let loansAbi;
    // 合约实例
    let instance;
    // 链上账户信息
    let accounts;
    // 合约地址,可以从链上查看或者从 Ganche 客户端查看
    const loansAddress = '0xA07E289d98D5d544c5Fe262d89BE7A5E663A0D10' //ionc--100
    //创建一个 web3 示例
    const web3 = new Web3(new Web3.providers.HttpProvider('https://api.ionchain.org'))
    this.timeout(50000);
    it('获取合约 abi 0 ', async function () {
        //合约生成的Abi，一般为json文件
        loansAbi = require("../build/contracts/Transfer.json").abi;
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
    let owner = "0x04d9ce25cfbe1cef5d8161f9a2a3f17b6aa8b1a2";

    // it('上传企业数据 -- 1', async function () {
    //     // 调用 send 方法,消耗以太币
    //     let result = await instance.methods.setCount(112).send({from: owner});
    //     console.log(result)
    // });
    it('审核--1 ', async function () {
        let value = await instance.methods.getBalance().call({from: owner});
        console.log(web3.utils.fromWei(value.toString(), 'ether'), 'ether');
    });
    it('set', async function () {
        let value = await instance.methods.setCount().sendTransaction(18,{from: accounts[4]});
        console.log(value)
    });
    it('get', async function () {
        let value = await instance.methods.getCount().call({from: accounts[4]});
        console.log(value.toString())
    });

});