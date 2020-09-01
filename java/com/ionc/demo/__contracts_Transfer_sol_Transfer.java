package com.ionc.demo;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;
import org.web3j.abi.TypeReference;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.Type;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.RemoteCall;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.tx.Contract;
import org.web3j.tx.TransactionManager;

/**
 * <p>Auto generated code.
 * <p><strong>Do not modify!</strong>
 * <p>Please use the <a href="https://docs.web3j.io/command_line.html">web3j command line tools</a>,
 * or the org.web3j.codegen.SolidityFunctionWrapperGenerator in the 
 * <a href="https://github.com/web3j/web3j/tree/master/codegen">codegen module</a> to update.
 *
 * <p>Generated with web3j version 3.3.1.
 */
public class __contracts_Transfer_sol_Transfer extends Contract {
    private static final String BINARY = "60806040523480156100115760006000fd5b505b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b61005a565b610156806100696000396000f3fe60806040526004361061002d5760003560e01c806312065fe01461003357806312514bba1461005f5761002d565b60006000fd5b3480156100405760006000fd5b5061004961008e565b6040518082815260200191505060405180910390f35b61008c600480360360208110156100765760006000fd5b81019080803590602001909291905050506100b2565b005b60003373ffffffffffffffffffffffffffffffffffffffff163190506100af565b90565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561011b573d600060003e3d6000fd5b505b5056fea26469706673582212200969769169098cb2e75b74da66836980da9fa1b35af8a85c211156839fe54b4764736f6c634300060b0033";

    protected __contracts_Transfer_sol_Transfer(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    protected __contracts_Transfer_sol_Transfer(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    public static RemoteCall<__contracts_Transfer_sol_Transfer> deploy(Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(__contracts_Transfer_sol_Transfer.class, web3j, credentials, gasPrice, gasLimit, BINARY, "");
    }

    public static RemoteCall<__contracts_Transfer_sol_Transfer> deploy(Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(__contracts_Transfer_sol_Transfer.class, web3j, transactionManager, gasPrice, gasLimit, BINARY, "");
    }

    public RemoteCall<TransactionReceipt> getBalance() {
        final Function function = new Function(
                "getBalance", 
                Arrays.<Type>asList(), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteCall<TransactionReceipt> transfer(BigInteger amount) {
        final Function function = new Function(
                "transfer", 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(amount)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public static __contracts_Transfer_sol_Transfer load(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return new __contracts_Transfer_sol_Transfer(contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    public static __contracts_Transfer_sol_Transfer load(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return new __contracts_Transfer_sol_Transfer(contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }
}
