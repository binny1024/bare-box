pragma solidity >=0.5.0 <0.7.0;

contract IoncTest {

    uint count = 0;

    function setCount(uint _count) external{
        count = _count;
    }

    function getCount()view public returns(uint){
        return count;
    }
}