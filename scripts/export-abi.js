const fs = require("fs");
const path = require("path");

async function main() {
  const artifactsPath = path.join(__dirname, "..", "artifacts"); // Ruta a la carpeta de artifacts
  const AlmacenEntero = await ethers.getContractFactory("AlmacenEntero"); // Nombre del contrato a exportar la ABI
  //const almacenEntero = await AlmacenEntero.attach("DIRECCIÓN DEL CONTRATO"); // Dirección del contrato en la red
  const abi = await almacenEntero.interface.format("json"); // Formato de la ABI a exportar
  const almacenEntero = await AlmacenEntero.attach("0x3BC1E4C564b341be9b4c42262449a414f75E0EC2"); // Dirección del contrato en la red Goerli

  fs.writeFileSync(path.join(artifactsPath, "AlmacenEntero.abi.json"), abi); // Guarda la ABI en la carpeta de artifacts
}

main(          );
