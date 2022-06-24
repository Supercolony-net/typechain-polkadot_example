import { ApiPromise, WsProvider, Keyring, } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';
// import type { QueryCallError } from '@supercolony-net/typechain-polkadot';
import type { QueryCallError } from './generated/_sdk/types';
import MockPSP22 from './generated/contracts/mock_psp22';


//////

const contractAddress = "{contract address goes here}";
// const callerAddress = "{caller address goes here}";
const ecdsa_keyring = new Keyring({ type:'ecdsa' });
const aliceKeyringPair = ecdsa_keyring.addFromUri('//Alice');
const callerAddress = aliceKeyringPair.address;

const nativeApi = await ApiPromise.create({
	provider: new WsProvider(),
});

const contract = new MockPSP22(contractAddress, aliceKeyringPair, nativeApi);


//// [ contract.query ]

try {
	var { value, gasConsumed } = await contract.query['PSP22::balance_of'](
		'{arg1}',
		{ gasLimit: -1 }
	);
	// Returned value here means 'success' for our query call, no matter what its type is.
}
catch(_error) {
	var error : QueryCallError = _error;
	switch(error.issue) {
		case 'METHOD_DOESNT_EXIST':
		case 'OUTPUT_IS_NULL':
		// ...
		case 'FAIL_AT_CALL':
		default: console.error(error.issue, error.texts);
	}
}


//// [ contract.tx ]

try {
	const successResponse = await contract.tx['PSP22::approve'](
		'{arg1}', '{arg2}',
		{ gasLimit:'100' }
	);
	// Returned value here means 'success' for our tx call.
}
catch(_error) {  }


//// [ contract.methods ]

var { value, gasConsumed } = await contract.methods['PSP22::balance_of']('{arg1}');

var successResponse = await contract.methods['PSP22::approve']('{arg1}', '{arg2}');