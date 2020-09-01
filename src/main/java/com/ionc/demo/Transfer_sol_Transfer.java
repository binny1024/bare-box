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
public class Transfer_sol_Transfer extends Contract {
    private static final String BINARY = "6080604052600d600160005090905534801561001b5760006000fd5b505b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b610064565b610131806100736000396000f3fe60806040526004361060335760003560e01c806312065fe0146039578063a87d942c146062578063d14e62b814608b576033565b60006000fd5b34801560455760006000fd5b50604c60b7565b6040518082815260200191505060405180910390f35b348015606e5760006000fd5b50607560da565b6040518082815260200191505060405180910390f35b60b56004803603602081101560a05760006000fd5b810190808035906020019092919050505060eb565b005b60003373ffffffffffffffffffffffffffffffffffffffff1631905060d7565b90565b6000600160005054905060e8565b90565b8060016000508190909055505b5056fea264697066735822122092194e9d575bf4c290aa368e010111ea9c20add54273968ba2b2003909b524c964736f6c634300060b0033";

    protected Transfer_sol_Transfer(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    protected Transfer_sol_Transfer(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    public static RemoteCall<Transfer_sol_Transfer> deploy(Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(Transfer_sol_Transfer.class, web3j, credentials, gasPrice, gasLimit, BINARY, "");
    }

    public static RemoteCall<Transfer_sol_Transfer> deploy(Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(Transfer_sol_Transfer.class, web3j, transactionManager, gasPrice, gasLimit, BINARY, "");
    }

    public RemoteCall<TransactionReceipt> getBalance() {
        final Function function = new Function(
                "getBalance", 
                Arrays.<Type>asList(), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteCall<TransactionReceipt> getCount() {
        final Function function = new Function(
                "getCount", 
                Arrays.<Type>asList(), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteCall<TransactionReceipt> setCount(BigInteger amount) {
        final Function function = new Function(
                "setCount", 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(amount)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public static Transfer_sol_Transfer load(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return new Transfer_sol_Transfer(contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    public static Transfer_sol_Transfer load(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return new Transfer_sol_Transfer(contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }
}
