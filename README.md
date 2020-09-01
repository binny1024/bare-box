Truffle Box for a bare-minimum Truffle project (`truffle init`)

three proof decorate oil solution injury knock weather proof copper join rabbit

```
cnpm install openzeppelin-solidity 
```
 
 
```
geth attach http://192.168.31.68:7545
```
## 命令行编译合约
### 运行以下命令行，编译 hello.sol 合约并得到编译字节码结果和合约 ABI：
```
solcjs --bin Transfer.sol -o ../bin && solcjs --abi Transfer.sol -o ../bin
```

### 合约生成 java 文件
```
web3j solidity generate -b  bin文件  -a  abi文件  -p 包名 -o 输出路径
```
```
web3j solidity generate --javaTypes  ../bin/Transfer_sol_Transfer.bin  ../bin/Transfer_sol_Transfer.abi  -p com.ionc.demo -o ./
```
```
web3j solidity generate --javaTypes  ../bin/Transfer_sol_Transfer.bin  ../bin/Transfer_sol_Transfer.abi  -p com.ionc.demo -o ../src/main/java/ 
```

```
solcjs --bin IoncTest.sol -o ../bin
solcjs --abi IoncTest.sol -o ../bin
```
solcjs --bin ./contracts/Transfer.sol -o ./bin

solcjs --abi ./contracts/Transfer.sol -o ./bin

web3j solidity generate --javaTypes ./