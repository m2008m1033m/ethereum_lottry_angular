import { WEB3 } from '../web3';
import Web3 from 'web3';
import { Inject, Injectable } from '@angular/core';
import { Contract } from '../abstraction/contract';

@Injectable({
    providedIn: 'root'
})
export class LotteryContract extends Contract {

    private _address = '0x5e6De7E0197f155b28ae47133FABca342a8849ae';
    private _abi = [
        {
            'constant': true,
            'inputs': [],
            'name': 'manager',
            'outputs': [{
                'name': '',
                'type': 'address'
            }],
            'payable': false,
            'stateMutability': 'view',
            'type': 'function'
        },
        {
            'constant': false,
            'inputs': [],
            'name': 'pickWinner',
            'outputs': [],
            'payable': false,
            'stateMutability': 'nonpayable',
            'type': 'function'
        },
        {
            'constant': true,
            'inputs': [],
            'name': 'getPlayers',
            'outputs': [{
                'name': '',
                'type': 'address[]'
            }],
            'payable': false,
            'stateMutability': 'view',
            'type': 'function'
        },
        {
            'constant': false,
            'inputs': [],
            'name': 'enter',
            'outputs': [],
            'payable': true,
            'stateMutability': 'payable',
            'type': 'function'
        },
        {
            'constant': true,
            'inputs': [{
                'name': '',
                'type': 'uint256'
            }],
            'name': 'players',
            'outputs': [{
                'name': '',
                'type': 'address'
            }],
            'payable': false,
            'stateMutability': 'view',
            'type': 'function'
        },
        {
            'inputs': [],
            'payable': false,
            'stateMutability': 'nonpayable',
            'type': 'constructor'
        }
    ];
    private _lottery: any;

    constructor(@Inject(WEB3) web3: Web3) {
        super();
        this._lottery = new web3.eth.Contract(this._abi, this._address);
    }

    protected getContractInstance(): any {
        return this._lottery;
    }
}


