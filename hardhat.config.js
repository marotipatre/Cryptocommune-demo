require ('@nomiclabs/hardhat-waffle');

task("accounts","Prints the list of the accounts",async (taskArgs , hre )=>{
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }
})

module.exports = {
  solidity: "0.8.19",

  defaultNetwork: "mantleTest",
  networks:{
    hardhat:{},
    mantleTest :{
      url : "https://rpc.testnet.mantle.xyz",
      accounts: ["e34df8c092901b15a7d6c27691ae13ae1da4afb49ba02bc186dda8b086c57dc0"]
    }
  },
  etherscan: {
    apiKey: "FS85WFY3Y97UEH6SMNDAFU3C489V4D63YY",
    customChains: [
        {
            network: "mantleTest",
            chainId: 5001,
            urls: {
            apiURL: "https://explorer.testnet.mantle.xyz/api",
            browserURL: "https://explorer.testnet.mantle.xyz"
            }
        }
    ]
},
    
};


// 0x35D6322d1FaaFA277dd69Cf36732454305e2CE4A