import * as React from 'react';

import { LWSModalBody } from '../../src/lws/lws-modal-body';
import { LWSModalHeader } from '../../src/lws/lws-modal-header';
import { LWSSelectWallet } from '../../src/lws/lws-select-wallet';
import { LWSRequiredInfo } from '../../src/lws/lws-required-info';
import { LWSWalletConnectionError } from '../../src/lws/lws-wallet-connection-error';
import { LWSSelfkeyIdError } from '../../src/lws/lws-selfkey-id-error';
import { LWSExtensionError } from '../../src/lws/lws-extension-error';
import { LWSSuccess } from '../../src/lws/lws-success';





export const LWSSelectWalletModal = () => (
  <div>
    <LWSModalHeader/>
    <LWSModalBody>
      <LWSSelectWallet wallets={[{publicKey: '0x4184288c556524df9cb9e58b73265ee66dca4efe'}]}/>
    </LWSModalBody>
  </div>
  
);

export const LWSRequiredInfoModal = () => (
  <div>
    <LWSModalHeader/>
    <LWSModalBody>
      <LWSRequiredInfo attributes={[{name: 'Name', value: 'Rodrigo Pavezi'}, {name: 'Country', value: ''}]} website={{name: 'PaveziCoin', url: 'http://www.pavezicoin.org', termsUrl: 'http://www.pavezicoin.org/terms', policyUrl: 'http://www.pavezicoin.org/privacy'}}/>
    </LWSModalBody>
  </div>
  
);

export const LWSWalletConnectionErrorModal = () => (
  <div>
    <LWSModalHeader/>
    <LWSModalBody>
      <LWSWalletConnectionError />
    </LWSModalBody>
  </div>
  
);

export const LWSSelfkeyIdErrorModal = () => (
  <div>
    <LWSModalHeader/>
    <LWSModalBody>
      <LWSSelfkeyIdError />
    </LWSModalBody>
  </div>
  
);

export const LWSExtensionErrorModal = () => (
  <div>
    <LWSModalHeader/>
    <LWSModalBody>
      <LWSExtensionError />
    </LWSModalBody>
  </div>
  
);

export const LWSSuccessrModal = () => (
  <div>
    <LWSModalHeader/>
    <LWSModalBody>
      <LWSSuccess />
    </LWSModalBody>
  </div>
  
);