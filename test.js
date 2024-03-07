var {Web3}=require("web3");

var web3=new Web3();
var dataEncode =web3.eth.abi.encodeParameters(['string','uint256'], ['ame', '1']);
console.log("dataEncode",dataEncode)
var dataDecode = web3.eth.abi.decodeParameters(
    ["string","uint256"],
    dataEncode
);
console.log("dataDecode",dataDecode)