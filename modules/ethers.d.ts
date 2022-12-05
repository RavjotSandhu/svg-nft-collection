declare namespace hre {
    namespace ethers {
        function getContractFactory(name: string): Promise<ContractFactory>
    }
}

declare class ContractFactory {
    deploy(): Promise<Contract>
}

declare class Contract {
    deployed(): Promise<void>
    address: string
}
