import { apiService } from './api';

export const smartContractService = {
  getOneByAddress(address) {
    if (!address) {
      throw Error('Missing argument');
    }
    return apiService.get(`smartcontract/${address}`, {});
  },
  verifySourceCode(address, sourceCode, abi, version, versionFullName, optimizer, optimizerRuns, isSingleFile, libs, evm, viaIR) {
    if (!address) {
      throw Error('Missing argument');
    }
    return apiService.post(`smartcontract/verify/${address}`,
      { sourceCode, abi, version, versionFullName, optimizer, optimizerRuns, isSingleFile, libs, evm, viaIR })
  },
  getAbiByAddress(address) {
    if (!address) {
      throw Error('Missing argument');
    }
    return apiService.get(`smartcontract/abi/${address}`, {});
  }
};
