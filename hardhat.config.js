require ('@nomiclabs/hardhat-waffle');

task("accounts","Prints the list of the accounts",async (taskArgs , hre )=>{
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }
})

module.exports = {
  solidity: "0.8.10",

  defaultNetwork: "alfajores",
  networks:{
    hardhat:{},
    alfajores :{
      url : "https://celo-alfajores.infura.io/v3/b208399f926f487093f45debc86299bb",
      accounts: ["949924cc6116138ccde9765e0829bc13e1f60f98a73606190b4975f2c673f373"]
    }
  }
};


// 0x35D6322d1FaaFA277dd69Cf36732454305e2CE4A