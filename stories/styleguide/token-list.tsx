import * as React from 'react';

import { TokenBox } from '../../src/price/token-box';
import { TokenPrice } from '../../src/price/token-price';
import { CustomTokenText } from '../../src/price/custom-token-text';
import { EthereumIcon } from '../../src/icons/ethereum';
import { SelfkeyIcon } from '../../src/icons/selfkey';
import { CustomIcon } from '../../src/icons/custom';

import { Grid } from '@material-ui/core'


export const TokenList = () => (
    <Grid container spacing={16}>
        <Grid item>
          <TokenBox  cryptoCurrencyShort='KEY' cryptoCurrencyName='Selfkey' CryptoCurrencyIconComponent={SelfkeyIcon} publicKey='0x4184288c556524df9cb9e58b73265ee66dca4efe'>
            <TokenPrice locale='en' cryptoCurrency='KEY' cryptoValue={4} toCurrency='USD' toValue={0.0174857}></TokenPrice>
          </TokenBox>
        </Grid>
        <Grid item>
          <TokenBox  cryptoCurrencyShort='ETH' cryptoCurrencyName='Ethereum' CryptoCurrencyIconComponent={EthereumIcon} publicKey='0x4184288c556524df9cb9e58b73265ee66dca4efe'>
            <TokenPrice locale='en' cryptoCurrency='ETH' cryptoValue={0.08212867} toCurrency='USD' toValue={38.89170316382}></TokenPrice>
          </TokenBox>
        </Grid>
        <Grid item>
          <TokenBox  cryptoCurrencyShort='' cryptoCurrencyName='Custom Tokens' CryptoCurrencyIconComponent={CustomIcon} publicKey='0x4184288c556524df9cb9e58b73265ee66dca4efe'>
            <CustomTokenText>Send or receive any custom ERC-20 token.</CustomTokenText>
          </TokenBox>
        </Grid>
    </Grid>
);