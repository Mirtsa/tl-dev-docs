---
layout: contracts
title: Trustlines Network Token contracts.json
---

```json
"TrustlinesNetworkToken": {
        "abi": [
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "burn",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "decimals",
                        "type": "uint8"
                    },
                    {
                        "name": "preMintAddress",
                        "type": "address"
                    },
                    {
                        "name": "preMintAmount",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            }
        ],
        "devdoc": {
            "methods": {
                "allowance(address,address)": {
                    "details": "Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default.    * This value changes when {approve} or {transferFrom} are called."
                },
                "approve(address,uint256)": {
                    "details": "Sets `amount` as the allowance of `spender` over the caller's tokens.    * Returns a boolean value indicating whether the operation succeeded.    * Approve with a value of `MAX_UINT = 2 ** 256 - 1` will symbolize an approval of infinite value.    * IMPORTANT:to prevent the risk that someone may use both the old and the new allowance by unfortunate transaction ordering, the approval must be set to 0 before it can be changed to any different desired value.    * see: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729    * Emits an {Approval} event."
                },
                "balanceOf(address)": {
                    "details": "Returns the amount of tokens owned by `account`."
                },
                "totalSupply()": {
                    "details": "Returns the amount of tokens in existence."
                },
                "transfer(address,uint256)": {
                    "details": "Moves `amount` tokens from the caller's account to `recipient`.    * Returns a boolean value indicating whether the operation succeeded.    * Emits a {Transfer} event."
                },
                "transferFrom(address,address,uint256)": {
                    "details": "Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance unless the allowance is `MAX_UINT = 2 ** 256 - 1`.    * Returns a boolean value indicating whether the operation succeeded.    * Emits a {Transfer} event."
                }
            }
        },
        "bytecode": "0x60806040523480156200001157600080fd5b5060405162000f0b38038062000f0b833981018060405260a08110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b820160208101848111156200006457600080fd5b81516401000000008111828201871017156200007f57600080fd5b505092919060200180516401000000008111156200009c57600080fd5b82016020810184811115620000b057600080fd5b8151640100000000811182820187101715620000cb57600080fd5b50506020808301516040840151606090940151875193965090945091620000f99160009190880190620002d8565b5083516200010f906001906020870190620002d8565b506002805460ff191660ff85161790556200013282826200013d602090811b901c565b50505050506200037d565b6001600160a01b038216620001b357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620001cf816003546200025c60201b62000a021790919060201c565b6003556001600160a01b0382166000908152600460209081526040909120546200020491839062000a026200025c821b17901c565b6001600160a01b03831660008181526004602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600082820183811015620002d157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200031b57805160ff19168380011785556200034b565b828001600101855582156200034b579182015b828111156200034b5782518255916020019190600101906200032e565b50620003599291506200035d565b5090565b6200037a91905b8082111562000359576000815560010162000364565b90565b610b7e806200038d6000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c806342966c681161007657806395d89b411161005b57806395d89b411461025a578063a9059cbb14610262578063dd62ed3e1461029b576100be565b806342966c681461020857806370a0823114610227576100be565b806318160ddd116100a757806318160ddd1461018d57806323b872dd146101a7578063313ce567146101ea576100be565b806306fdde03146100c3578063095ea7b314610140575b600080fd5b6100cb6102d6565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101055781810151838201526020016100ed565b50505050905090810190601f1680156101325780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101796004803603604081101561015657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561036c565b604080519115158252519081900360200190f35b610195610412565b60408051918252519081900360200190f35b610179600480360360608110156101bd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610418565b6101f261048c565b6040805160ff9092168252519081900360200190f35b6102256004803603602081101561021e57600080fd5b5035610495565b005b6101956004803603602081101561023d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166104a2565b6100cb6104ca565b6101796004803603604081101561027857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561052a565b610195600480360360408110156102b157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610537565b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103625780601f1061033757610100808354040283529160200191610362565b820191906000526020600020905b81548152906001019060200180831161034557829003601f168201915b5050505050905090565b60008115806103a9575033600090815260056020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152902054155b6103fe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610ac36026913960400191505060405180910390fd5b61040933848461056f565b50600192915050565b60035490565b60006104258484846106b6565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600560209081526040808320338452909152902054600019811015610481576000610472828563ffffffff61086f16565b905061047f86338361056f565b505b506001949350505050565b60025460ff1690565b61049f33826108e6565b50565b73ffffffffffffffffffffffffffffffffffffffff1660009081526004602052604090205490565b60018054604080516020601f600260001961010087891615020190951694909404938401819004810282018101909252828152606093909290918301828280156103625780601f1061033757610100808354040283529160200191610362565b60006104093384846106b6565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205490565b73ffffffffffffffffffffffffffffffffffffffff83166105db576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180610b2f6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610647576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610aa16022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260056020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610722576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610b0a6025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661078e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610a7e6023913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152600460205260409020546107c4908263ffffffff61086f16565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152600460205260408082209390935590841681522054610806908263ffffffff610a0216565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526004602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000828211156108e057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b73ffffffffffffffffffffffffffffffffffffffff8216610952576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610ae96021913960400191505060405180910390fd5b600354610965908263ffffffff61086f16565b60035573ffffffffffffffffffffffffffffffffffffffff821660009081526004602052604090205461099e908263ffffffff61086f16565b73ffffffffffffffffffffffffffffffffffffffff83166000818152600460209081526040808320949094558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b600082820183811015610a7657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a20617070726f7665206f6e6c7920746f206f722066726f6d20302076616c756545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a72305820f56f74b3f386b29bcbfa5f1114da3d3e3d43f988c13ac77d86c83a829067047a0029",
        "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100be5760003560e01c806342966c681161007657806395d89b411161005b57806395d89b411461025a578063a9059cbb14610262578063dd62ed3e1461029b576100be565b806342966c681461020857806370a0823114610227576100be565b806318160ddd116100a757806318160ddd1461018d57806323b872dd146101a7578063313ce567146101ea576100be565b806306fdde03146100c3578063095ea7b314610140575b600080fd5b6100cb6102d6565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101055781810151838201526020016100ed565b50505050905090810190601f1680156101325780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101796004803603604081101561015657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561036c565b604080519115158252519081900360200190f35b610195610412565b60408051918252519081900360200190f35b610179600480360360608110156101bd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610418565b6101f261048c565b6040805160ff9092168252519081900360200190f35b6102256004803603602081101561021e57600080fd5b5035610495565b005b6101956004803603602081101561023d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166104a2565b6100cb6104ca565b6101796004803603604081101561027857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561052a565b610195600480360360408110156102b157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610537565b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103625780601f1061033757610100808354040283529160200191610362565b820191906000526020600020905b81548152906001019060200180831161034557829003601f168201915b5050505050905090565b60008115806103a9575033600090815260056020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152902054155b6103fe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610ac36026913960400191505060405180910390fd5b61040933848461056f565b50600192915050565b60035490565b60006104258484846106b6565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600560209081526040808320338452909152902054600019811015610481576000610472828563ffffffff61086f16565b905061047f86338361056f565b505b506001949350505050565b60025460ff1690565b61049f33826108e6565b50565b73ffffffffffffffffffffffffffffffffffffffff1660009081526004602052604090205490565b60018054604080516020601f600260001961010087891615020190951694909404938401819004810282018101909252828152606093909290918301828280156103625780601f1061033757610100808354040283529160200191610362565b60006104093384846106b6565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205490565b73ffffffffffffffffffffffffffffffffffffffff83166105db576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180610b2f6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610647576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610aa16022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260056020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610722576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610b0a6025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661078e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610a7e6023913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152600460205260409020546107c4908263ffffffff61086f16565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152600460205260408082209390935590841681522054610806908263ffffffff610a0216565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526004602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000828211156108e057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b73ffffffffffffffffffffffffffffffffffffffff8216610952576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610ae96021913960400191505060405180910390fd5b600354610965908263ffffffff61086f16565b60035573ffffffffffffffffffffffffffffffffffffffff821660009081526004602052604090205461099e908263ffffffff61086f16565b73ffffffffffffffffffffffffffffffffffffffff83166000818152600460209081526040808320949094558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b600082820183811015610a7657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a20617070726f7665206f6e6c7920746f206f722066726f6d20302076616c756545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a72305820f56f74b3f386b29bcbfa5f1114da3d3e3d43f988c13ac77d86c83a829067047a0029",
        "metadata": {
            "compiler": {
                "version": "0.5.8+commit.23d335f2"
            },
            "language": "Solidity",
            "output": {
                "abi": [
                    {
                        "constant": true,
                        "inputs": [],
                        "name": "name",
                        "outputs": [
                            {
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "payable": false,
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": false,
                        "inputs": [
                            {
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "approve",
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "payable": false,
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [],
                        "name": "totalSupply",
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "payable": false,
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": false,
                        "inputs": [
                            {
                                "name": "sender",
                                "type": "address"
                            },
                            {
                                "name": "recipient",
                                "type": "address"
                            },
                            {
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "transferFrom",
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "payable": false,
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [],
                        "name": "decimals",
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint8"
                            }
                        ],
                        "payable": false,
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": false,
                        "inputs": [
                            {
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "burn",
                        "outputs": [],
                        "payable": false,
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "balanceOf",
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "payable": false,
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [],
                        "name": "symbol",
                        "outputs": [
                            {
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "payable": false,
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": false,
                        "inputs": [
                            {
                                "name": "recipient",
                                "type": "address"
                            },
                            {
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "transfer",
                        "outputs": [
                            {
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "payable": false,
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [
                            {
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "name": "spender",
                                "type": "address"
                            }
                        ],
                        "name": "allowance",
                        "outputs": [
                            {
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "payable": false,
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "name": "symbol",
                                "type": "string"
                            },
                            {
                                "name": "decimals",
                                "type": "uint8"
                            },
                            {
                                "name": "preMintAddress",
                                "type": "address"
                            },
                            {
                                "name": "preMintAmount",
                                "type": "uint256"
                            }
                        ],
                        "payable": false,
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Approval",
                        "type": "event"
                    }
                ],
                "devdoc": {
                    "methods": {
                        "allowance(address,address)": {
                            "details": "Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default.    * This value changes when {approve} or {transferFrom} are called."
                        },
                        "approve(address,uint256)": {
                            "details": "Sets `amount` as the allowance of `spender` over the caller's tokens.    * Returns a boolean value indicating whether the operation succeeded.    * Approve with a value of `MAX_UINT = 2 ** 256 - 1` will symbolize an approval of infinite value.    * IMPORTANT:to prevent the risk that someone may use both the old and the new allowance by unfortunate transaction ordering, the approval must be set to 0 before it can be changed to any different desired value.    * see: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729    * Emits an {Approval} event."
                        },
                        "balanceOf(address)": {
                            "details": "Returns the amount of tokens owned by `account`."
                        },
                        "totalSupply()": {
                            "details": "Returns the amount of tokens in existence."
                        },
                        "transfer(address,uint256)": {
                            "details": "Moves `amount` tokens from the caller's account to `recipient`.    * Returns a boolean value indicating whether the operation succeeded.    * Emits a {Transfer} event."
                        },
                        "transferFrom(address,address,uint256)": {
                            "details": "Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance unless the allowance is `MAX_UINT = 2 ** 256 - 1`.    * Returns a boolean value indicating whether the operation succeeded.    * Emits a {Transfer} event."
                        }
                    }
                },
                "userdoc": {
                    "methods": {}
                }
            },
            "settings": {
                "compilationTarget": {
                    "contracts/token/TrustlinesNetworkToken.sol": "TrustlinesNetworkToken"
                },
                "evmVersion": "petersburg",
                "libraries": {},
                "optimizer": {
                    "enabled": true,
                    "runs": 5000
                },
                "remappings": []
            },
            "sources": {
                "contracts/lib/SafeMath.sol": {
                    "keccak256": "0x5507b51bb4039ad2d45625f6289d8c4ff460f86270057d0e9971ef2720c92233",
                    "urls": [
                        "bzzr://1c0c2c679ae48dbaaffc67da8cac3096cf8aa13dbd0811226015b37ec68db3ed"
                    ]
                },
                "contracts/token/TrustlinesNetworkToken.sol": {
                    "keccak256": "0x9d510b2a26ea6dcb13cbeec4321100ce018f129b84725922b32d5a125cc7ee1f",
                    "urls": [
                        "bzzr://ee81a4dbaa366e098be555b5381c43c4990042411d0f108c5088919b43ef5f78"
                    ]
                }
            },
            "version": 1
        },
        "userdoc": {
            "methods": {}
        }
```
