// const Loans = artifacts.require('Loans')
// contract("Loans", (accounts) => {
//     console.log(accounts)
// })
const Web3 = require("web3")

describe('Loans 测试', function () {
    // 合约地址,可以从链上查看或者从 Ganche 客户端查看
    const loansAddress = '0x49Cb0E70aAa1Ef71e4b872dF43030FB6a5C26297'
    //创建一个 web3 示例
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
    // 合约abi
    let loansAbi;
    // 合约实例
    let instance;
    // 链上账户信息
    let accounts;
    it('获取合约 abi ', async function () {
        //合约生成的Abi，一般为json文件
        loansAbi = require("../build/contracts/Loans.json").abi;
        console.log(loansAbi)
    });
    it('获取合约实例', async function () {
        instance = new web3.eth.Contract(loansAbi, loansAddress);
    });
    it('合约实例信息 ', async function () {
        console.log(instance)
    });
    it('账户信息 ', async function () {
        accounts = await web3.eth.getAccounts();
        console.log(accounts)
    });
    it('上传企业数据 -- 1', async function () {
        // 调用 send 方法,消耗以太币
        let result = await instance.methods.applicationSubmit(true, true, true).send({from: accounts[1]});
        console.log(result)
    });
    it('上传企业数据 -- 2', async function () {
        let result = await instance.methods.applicationSubmit(true, true, true).send({from: accounts[2]});
        console.log(result)
    });
    it('审核--1 ', async function () {
        let result = await instance.methods.offlineStuffSubmit(true, true, accounts[1]).send({from: accounts[0]});
        console.log(result)
    });
    it('审核--2 ', async function () {
        let result = await instance.methods.offlineStuffSubmit(true, true, accounts[2]).send({from: accounts[0]});
        console.log(result)
    });
    it('获取审核结果--1 ', async function () {
        // 调用 call 不消耗以太币
        let result = await instance.methods.getApplicationResult().call({from: accounts[1]});
        console.log(result.toString())
    });
    it('获取审核结果--2 ', async function () {
        let result = await instance.methods.getApplicationResult().call({from: accounts[2]});
        console.log(result.toString())
    });
    it('Credit ', async function () {
        let result = await instance.methods.getApplicationCredit().call({from: accounts[2]});
        console.log(result.toString())
    });
    it('Dispute ', async function () {
        let result = await instance.methods.getApplicationDispute().call({from: accounts[2]});
        console.log(result.toString())
    });
    it('Overdue ', async function () {
        let result = await instance.methods.getApplicationOverdue().call({from: accounts[2]});
        console.log(result.toString())
    });
    it('Man ', async function () {
        let result = await instance.methods.getApplicationMan().call({from: accounts[2]});
        console.log(result.toString())
    });
    it('Mac ', async function () {
        let result = await instance.methods.getApplicationMac().call({from: accounts[2]});
        console.log(result.toString())
    });
});