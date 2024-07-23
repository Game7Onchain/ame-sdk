import dotenv from 'dotenv/config'
import Ame from "./src/index"
async function ameTest(){

    const account="0xa0ee7a142d267c1f36714e4a8f75612f20a79720"
    const ameWorldAddress="0xb19b36b1456E65E3A6D514D3F715f204BD59f431"
    const componentAddress="0xD18E3F31bD50B5c6e4cC740CB9Ca637F6eCC2944"

    //Initialize Ame World
    var ame=new Ame("http://127.0.0.1:8545",ameWorldAddress);

    //Check if an address is registered
    var isRegisteredAmeWorld=await ame.isRegistered(account);
    console.log("isRegisteredAmeWorld",isRegisteredAmeWorld)
    
    //Check if an address owns a component
    var isOwnComponent=await ame.hasComponent(account,componentAddress);
    console.log("isOwnComponent",isOwnComponent)

    //Query the details of a component
    var component=await ame.queryComponent(componentAddress);
    console.log("component",component)

    //Query the components owned by an address
    var components=await ame.queryAccount(account)
    console.log("components",components)

    //Encode request parameters
    var encode=ame.encodeRequestParams(['address'],[account]);
    console.log("encode",encode)

    //Send Get request
    var requestResult=await ame.sendGetRequest(componentAddress, "getUser", encode)
    console.log("requestResult",requestResult)

    //Decode response data
    var decode=ame.decodeResponseData(["string","uint256"],requestResult)
    console.log("decode",decode)

    //Send Post request
    var encodeSendParams=ame.encodeRequestParams(['string', 'uint256'],['alice', '100']);
    ame.web3.eth.accounts.wallet.add(process.env.PRIVATE_KEY)
    var postResult=await ame.sendPostRequestWeb3js(componentAddress,"createUser",encodeSendParams,account,0);
    console.log("postResult",postResult)

    //Send Put request
    var encodePutParams=ame.encodeRequestParams(['address', 'string'],[account, 'Bob']);
    ame.web3.eth.accounts.wallet.add(process.env.PRIVATE_KEY)
    var putResult=await ame.sendPutRequestWeb3js(componentAddress,"updateUserName",encodePutParams,account,0);
    console.log("putResult",putResult)
}

ameTest();