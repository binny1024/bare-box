pragma solidity >=0.5.0 <0.7.0;
/*
场景说明：
银行提供企业贷款服务，申请企业需要提交公司授信资质（法人征信正常 与否）以及其供应链上交易信息（是否有合约纠纷和违约逾期），
银行需要通过 银行人工审核和机审才可以给企业放款。机审时若碰到法人征信不正常、企业产 生供应链上有合约纠纷、违约逾期等情况，则判断审核不通过。
*/
contract Loans {
    address  company;//申请企业的地址
    address owner;//合约的创建者,即审核人员的地址信息
    struct Application {
        bool credit;//法人征信是否正常
        bool dispute;//是否有合约纠纷
        bool offlineMac;//是否通过线下机审
        bool offlineMan;//是否通过线下人工审核
        bool overdue;//是否逾期
    }
    constructor () public {
        owner = msg.sender;
    }
    mapping(address => Application)   applicationInfo;

    event ApplicationSubmit(address addr, bool credit, bool dispute, bool overdue);
    //申请企业提交信息
    function applicationSubmit(bool credit, bool dispute, bool overdue) public {
        applicationInfo[msg.sender].credit = credit;
        applicationInfo[msg.sender].dispute = dispute;
        applicationInfo[msg.sender].overdue = overdue;
        emit ApplicationSubmit(msg.sender, credit, dispute, overdue);
    }

    event OffLineStuffSubmit(address addr, bool offlineMan, bool offlineMac);

    function offlineStuffSubmit(bool offlineMan, bool offlineMac, address addr) public {
        require(msg.sender == owner, 'you dont have access to do this');
        applicationInfo[addr].offlineMan = offlineMan;
        applicationInfo[addr].offlineMac = offlineMac;
        emit OffLineStuffSubmit(addr, offlineMan, offlineMac);
    }

    function getApplicationResult() public view returns (bool){
        if (applicationInfo[msg.sender].credit == true
        && applicationInfo[msg.sender].overdue == true
        && applicationInfo[msg.sender].offlineMac == true
        && applicationInfo[msg.sender].offlineMan == true
            && applicationInfo[msg.sender].dispute == true) {
            return true;
        }
        return false;
    }

    function getApplicationCredit() public view returns (bool){
        return applicationInfo[msg.sender].credit;
    }

    function getApplicationDispute() public view returns (bool){
        return applicationInfo[msg.sender].dispute;
    }

    function getApplicationOverdue() public view returns (bool){
        return applicationInfo[msg.sender].overdue;
    }

    function getApplicationMan() public view returns (bool){
        return applicationInfo[msg.sender].offlineMan;
    }

    function getApplicationMac() public view returns (bool){
        return applicationInfo[msg.sender].offlineMac;
    }

}

