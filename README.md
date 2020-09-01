Truffle Box for a bare-minimum Truffle project (`truffle init`)

three proof decorate oil solution injury knock weather proof copper join rabbit

```
geth attach http://192.168.31.68:7545
```
## 命令行编译合约
### 运行以下命令行，编译 hello.sol 合约并得到编译字节码结果：
```
solcjs --bin Loans.sol -o ../bin
solcjs --abi Loans.sol -o ../bin
```
### 运行以下命令行，编译 hello.sol 合约并得得到合约接口说明（ABI）：
```
solcjs --abi Loans.sol -o ../bin
```
### 合约生成 java 文件
```
web3j solidity generate -b  bin文件  -a  abi文件  -p 包名 -o 输出路径
```
```
web3j solidity generate --javaTypes  ./Loans_sol_Loans.bin  ./Loans_sol_Loans.abi  -p com.ionc.demo -o ./
```
```
web3j solidity generate --javaTypes  ../bin/IoncTest_sol_IoncTest.bin  ../bin/IoncTest_sol_IoncTest.abi  -p com.ionc.demo -o ../src/main/java/
```

```
solcjs --bin IoncTest.sol -o ../bin
solcjs --abi IoncTest.sol -o ../bin
```
solcjs --bin ./contracts/Transfer.sol -o ./bin

solcjs --abi ./contracts/Transfer.sol -o ./bin

web3j solidity generate --javaTypes ./