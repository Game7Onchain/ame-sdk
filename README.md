## ame-sdk
ame-sdk is a Javascript SDK used to interact with [Ame Network](https://ame.network/)

### Quick start
Install with npm:
```
npm i ame-sdk
```
Install with yarn:
```
yarn add ame-sdk
```
Install dependencies
```
npm i
```
Create an .env file in the root directory
```
PRIVATE_KEY=<Your Private Key>
```
Run test
```
yarn test
```

### Example
```javascript
    const account="0xa0ee7a142d267c1f36714e4a8f75612f20a79720"
    const ameWorldAddress="0xeD1DB453C3156Ff3155a97AD217b3087D5Dc5f6E"
    const componentAddress="0x0C8E79F3534B00D9a3D4a856B665Bf4eBC22f2ba"

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
    var postResult=await ame.sendPostRequestWeb3js(componentAddress,"createUser",encodeSendParams,account);
    console.log("postResult",postResult)

    //Send Put request
    var encodePutParams=ame.encodeRequestParams(['address', 'string'],[account, 'Bob']);
    ame.web3.eth.accounts.wallet.add(process.env.PRIVATE_KEY)
    var putResult=await ame.sendPutRequestWeb3js(componentAddress,"updateUserName",encodePutParams,account);
    console.log("putResult",putResult)
```