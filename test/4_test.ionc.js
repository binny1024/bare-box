// const Loans = artifacts.require('Loans')
// contract("Loans", (accounts) => {
//     console.log(accounts)
// })
const Web3 = require("web3")
const fs = require('fs')
const path = require('path')
describe('IONC 测试', function () {
    // 合约abi
    let loansAbi;
    // 合约实例
    let instance;
    // 链上账户信息
    let accounts;
    // 合约地址,可以从链上查看或者从 Ganche 客户端查看
    // const loansAddress = '0x4Df27ef349fD014bc30f2e195922Ed716AA5CCBc' //ionc
    const loansAddress = '0x4d6d35cfb3b0191b8cb9986c32a25ef9fb19af00' //ionc--100
    // const loansAddress = '0xf6c1C61052e0e98b786179a2b524F31Bbb01e943'
    //创建一个 web3 示例
    const web3 = new Web3(new Web3.providers.HttpProvider('https://api.ionchain.org'))
    // const web3 = new Web3(new Web3.providers.HttpProvider('http://192.168.31.68:7545'))
    // const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
    // it('账户信息 ', async function () {
    //     accounts = await web3.eth.getAccounts();
    //     console.log(accounts)
    // });

    it('获取合约 abi 0 ', async function () {
        //合约生成的Abi，一般为json文件
        loansAbi = require("../build/contracts/IoncTest.json").abi;
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
    let owner = "0x28a8746e75304c0780e011bed21c72cd78cd535e";
    // let owner = "0x35c898931e252299B272c5f09A11710245651942";

    // it('上传企业数据 -- 1', async function () {
    //     // 调用 send 方法,消耗以太币
    //     let result = await instance.methods.setCount(112).send({from: owner});
    //     console.log(result)
    // });
    it('审核--1 ', async function () {
        let result = await instance.methods.getCount().call({from: owner});
        console.log(result.toString())
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