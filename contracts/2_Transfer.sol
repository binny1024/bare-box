pragma solidity >=0.5.0 <0.7.0;

contract Transfer {
    address payable creator;//默认持久化存储
    uint256 count = 13;
    constructor() public {
        creator = msg.sender;
    }
    function setCount(uint256 amount) public payable {
        count = amount;
    }
    // 返回地址的账户余额
    function getBalance() public view returns (uint256){
        return msg.sender.balance;
    }
    function getCount()public view returns(uint256){
        return count;
    }
}
