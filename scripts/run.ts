const main = async (): Promise<void> => {
    const nftContractFactory = (await hre.ethers.getContractFactory(
        'MyEpicNFT'
    )) as ContractFactory
    const nftContract = (await nftContractFactory.deploy()) as Contract
    await nftContract.deployed()
    console.log('Contract deployed to:', nftContract.address)
}

const runMain = async (): Promise<void> => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

runMain()
