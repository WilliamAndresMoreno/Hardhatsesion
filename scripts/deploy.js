const { ethers } = require("hardhat");

async function main() {
  const AlmacenEntero = await ethers.getContractFactory("AlmacenEntero");
  const almacenEntero = await AlmacenEntero.deploy();

  console.log("AlmacenEntero deployed to:", almacenEntero.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });