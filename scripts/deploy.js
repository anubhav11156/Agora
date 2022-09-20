//scripts/deploy.js 

const { ethers } = require("hardhat"); 
const fs = require("fs"); 
async function main() { 
  const contract = await ethers.getContractFactory("Agora"); 
  const deployedContract = await contract.deploy(); 
  // 10 is value passed to constructor 
   
  await deployedContract.deployed(); 
  // Wait for it to finish deploying 
  console.log("Address:", deployedContract.address); 
  fs.writeFileSync('./src/address.js', `export const contractAddress = "${deployedContract.address}"`) 
} 

// Call the main function and catch if there is any error 
main() 
  .then(() => process.exit(0)) 
  .catch((error) => { 
    console.error(error); 
    process.exit(1); 
  });