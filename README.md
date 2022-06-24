Examples of `TypeChain-Polkadot` in use
============

> Repo: [@supercolony-net/typechain-polkadot](https://github.com/Supercolony-net/typechain-polkadot)

We have JSON ABIs put in `src/abi` folder. On running `npm run parse-abis`, generated code will land into `src/generated`.

Both ABIs and generated code are meant to be pushed with the rest of the source code. That is why, both are located in the `src` folder. Examples of usage are also located there.

You would only need to run `npm run parse-abis`, when new ABI's arrive. E.g. in the process of development of the contracts.

> (i) All examples are based on a PSP22 token contract ABI.

> (!) This code is not meant to be run. It only serves to display a type system and usage of the generated code.