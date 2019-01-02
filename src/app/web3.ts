import { InjectionToken } from '@angular/core';
import Web3 from 'web3';

export const WEB3 = new InjectionToken<Web3>('', {
    factory: () => new Web3(window.web3.currentProvider)
});
