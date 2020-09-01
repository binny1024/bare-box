const Transfer = artifacts.require('Transfer');
const Web3 = require('web3');
const BN = require('bn.js');
const Tx = require('ethereumjs-tx').Transaction;
/**
 * sudo truffle test  test.transfer.js
 */

contract("Transfer", (accounts) => {
    console.log(accounts)
    // const web3 = new Web3(new Web3.providers.HttpProvider('http://192.168.31.68:7545'))
    const web3 = new Web3(new Web3.providers.HttpProvider('https://api.ionchain.org'))
    it('获取合约账户', async function () {

    });
    let instance;
    it('获取合约实例', async function () {
        instance = await Transfer.deployed();
        console.log(instance);
    });
    it('输出合约中的 methods', async function () {
        console.log("合约中的方法 \n", instance.methods);
    });
    it('调用合约中的方法--获取账户余额', async function () {
        // 以此方式测试合约,调用合约中的方法只需要方法名
        // let value =  await instance.methods.getBalance().call();
        let value = await instance.getBalance.call({from: accounts[0]});
        console.log(web3.utils.fromWei(value.toString(), 'ether'), 'ether');
        value = await instance.getBalance.call({from: accounts[1]});
        console.log(web3.utils.fromWei(value.toString(), 'ether'), 'ether');
    });
    it('调用合约中的方法--setCount', async function () {
        let value = await instance.setCount.sendTransaction(18,{from: accounts[4]});
        console.log(value)
        // console.log(web3.utils.fromWei(value.toString(), 'ether'), 'ether');
        // value = await instance.getBalance.call({from: accounts[1]});
        // console.log(web3.utils.fromWei(value.toString(), 'ether'), 'ether');
    });
    it('调用合约中的方法--getCount', async function () {
        let value = await instance.getCount.call({from: accounts[4]});
        console.log(value.toString())
        // console.log(web3.utils.fromWei(value.toString(), 'ether'), 'ether');
        // value = await instance.getBalance.call({from: accounts[1]});
        // console.log(web3.utils.fromWei(value.toString(), 'ether'), 'ether');
    });

    // it('以太币转账', async function () {
    //     /**
    //      * export interface TransactionConfig {
    //             from?: string | number;
    //             to?: string;
    //             value?: number | string | BN;
    //             gas?: number | string;
    //             gasPrice?: number | string | BN;
    //             data?: string;
    //             nonce?: number;
    //             chainId?: number;
    //             common?: Common;
    //             chain?: string;
    //             hardfork?: string;
    //         }
    //      */
    //     let from = accounts[0];
    //     let to = accounts[2];
    //     let gasPrice = await web3.eth.getGasPrice();
    //     // let gasPrice = '20000000000';
    //     let nonce = await web3.eth.getTransactionCount(from);
    //     let value = web3.utils.toWei(new BN(5), 'ether');
    //     let config = {
    //         from: from,
    //         to: to,
    //         value: value,
    //         gas: 21000,
    //         gasPrice: gasPrice,
    //         nonce: nonce
    //     }
    //     let result = await web3.eth.sendTransaction(config);
    //     console.log(result);
    // });
    //
    // it('离线签名', async function () {
    //     let from = accounts[0];
    //     let to = accounts[2];
    //     let gasPrice = await web3.eth.getGasPrice();
    //     // let gasPrice = '20000000000';
    //     let nonce = await web3.eth.getTransactionCount(from);
    //     let value = web3.utils.toWei(new BN(13), 'ether');
    //     const token_hex = '0x';
    //     let config = {
    //         from: from,
    //         to: to,
    //         value: token_hex+Number(value).toString(16),//16 进制
    //         gasLimit: 21000,
    //         gasPrice: token_hex+Number(gasPrice).toString(16),//16 进制
    //         nonce: nonce,
    //         data:'0x'
    //     }
    //     console.log(config);
    //     //使用私钥对原始的交易信息进行签名，得到签名后的交易数据
    //     const tx = new Tx(config);
    //     tx.sign(Buffer.from("f2cec71fe3ae2df8ec55d11eb1d6c666bfdd5f5f02e7d19b85d990fbcfdbf99c", 'hex'));
    //     const serializedTx = tx.serialize();
    //     // console.log("发起交易时间  : " + moment().format("HH:mm:ss")); //当前时间 （24小时制）
    //     let result = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
    //     // console.log("结束交易时间  : " + moment().format("HH:mm:ss")); //当前时间 （24小时制）
    //     // console.log(JSON.stringify(result));
    //     // console.log('to = ' + JSON.parse(JSON.stringify(result)).to);
    //     const hash = JSON.parse(JSON.stringify(result)).transactionHash;// 交易的hash
    // });
})