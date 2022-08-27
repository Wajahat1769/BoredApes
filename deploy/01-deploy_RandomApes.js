

module.exports = async (hre) => {
    const { deployments, getNamedAccounts } = hre
    const { deploy, log } = deployments
    const deployer = await getNamedAccounts()
    //const chainId = network.config.chainId

    const metadata = [" ", " ", " "]
    //args = [metadata]
    log("------------Hold tight here we Go-------------")
    const randomApes = await deploy("RandomApes", {
        contract: "RandomApes",
        from: deployer,
        log: true,
        args: [metadata]
    })
    log("----------------Deployed-----------------")
    log(randomApes.address)
}
module.exports.tags = ["all"]