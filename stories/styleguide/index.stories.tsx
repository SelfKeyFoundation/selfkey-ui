import * as React from 'react';

import { setAddon, storiesOf, Story } from '@storybook/react';
import { host } from 'storybook-host';
import JSXAddon from 'storybook-addon-jsx';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import { H1 } from '../../src/typography/headings';
import { P } from '../../src/typography/paragraph';
import { Logo } from '../../src/images/logo';
import { CryptoPriceList } from './crypto-price-list';
import { TokenList } from './token-list';
import { CryptoChartBox } from '../../src/price/crypto-chart-box';
import { CryptoPriceTable } from '../../src/price/crypto-price-table';
import { TransferPriceWrapper } from './transfer-price';
import { TransactionNoGasError } from '../../src/transaction/transaction-no-gas-error';
import { LWSModalHeader } from '../../src/lws/lws-modal-header';
import { LWSLoading } from '../../src/lws/lws-loading';
import { TransactionHistory, StatusIconName } from '../../src/transaction/transaction-history';

import {
	LWSSelectWalletWrapper,
	LWSRequiredInfoWrapper,
	LWSWalletConnectionErrorWrapper,
	LWSSelfkeyIdErrorWrapper,
	LWSExtensionErrorWrapper,
	LWSSuccessWrapper,
	LWSAuthErrorWrapper,
} from './lws';

import { ItemDetails } from '../../src/marketplace/items/item-details';

import { MarketplaceWrapper } from './marketplace';
import { ExchangesWrapper } from './exchanges';

import { UnlockBox } from '../../src/marketplace/unlock-box'
import { WithoutBalance } from '../../src/marketplace/without-balance'

setAddon(JSXAddon);

const lightOnDark = host({
	title: 'Light on Dark',
	align: 'center',
	background: '#222b34',
	width: '1400px',
});

const transferModal = host({
	title: 'Light on Dark',
	align: 'center',
	background: '#222b34',
	width: '700px',
});

const tStory = storiesOf('Typography', module).addDecorator(lightOnDark) as Story & { addWithJSX: Function };

tStory.addWithJSX('Primary Heading (H1)', () => <H1>Primary Heading</H1>);

tStory.addWithJSX('Paragraph', () => (
	<P>
		Create a new SelfKey ID to start building your identity profile. If you were previously whitelisted for the KEY
		token sale, simply import the zip file we provided as your SelfKey ID. This data is stored locally on your
		device, not in a server or on the blockchain.
	</P>
));

const iStory = storiesOf('Images', module).addDecorator(lightOnDark) as Story & { addWithJSX: Function };

iStory.addWithJSX('SelfKey Logo', () => <Logo />);

const priceStory = storiesOf('Prices', module).addDecorator(lightOnDark) as Story & { addWithJSX: Function };

priceStory.addWithJSX('PriceList', () => <CryptoPriceList />);
priceStory.addWithJSX('TokenList', () => <TokenList />);
priceStory.addWithJSX('CryptoChartBox', () => (
	<CryptoChartBox
		locale="en"
		fiatCurrency="USD"
		tokens={[
			{ name: 'Selfkey', symbol: 'KEY', balance: 30, balanceInFiat: 0.42432 },
			{ name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
			{ name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
			{ name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
			{ name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
			{ name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
			{ name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 20.52 },
		]}
		topTokenListSize={5}
		viewAll={true}
	/>
));

priceStory.addWithJSX('CryptoPriceTable', () => (
	<CryptoPriceTable
		locale="en"
		fiatCurrency="USD"
		alwaysVisible={['test', '']}
		tokens={[
			{
				name: 'Selfkey',
				symbol: 'KEY',
				price: 0.01,
				balance: 30,
				balanceInFiat: 0.42432,
				address: 'test',
				hidden: false,
				isCustom: false,
			},
			{
				name: 'Ethereum',
				symbol: 'ETH',
				price: 400,
				balance: 0.00548,
				balanceInFiat: 20.52,
				hidden: false,
				isCustom: false,
			},
			{
				name: 'Other token',
				symbol: 'OTHR',
				price: 500,
				balance: 0.00548,
				balanceInFiat: 20.52,
				address: 'dsadsadsa',
				hidden: false,
				isCustom: true,
			},
			{
				name: 'Ethereum',
				symbol: 'OTHR',
				price: 400,
				balance: 0.00548,
				balanceInFiat: 20.52,
				address: 'dsadsadsa',
				hidden: true,
				isCustom: true,
			},
			{
				name: 'Ethereum',
				symbol: 'OTHR',
				price: 400,
				balance: 0.00548,
				balanceInFiat: 20.52,
				address: 'dsadsadsa',
				hidden: false,
				isCustom: false,
			},
		]}
	/>
));

const transactionrStory = storiesOf('Transaction', module).addDecorator(transferModal) as Story & {
	addWithJSX: Function;
};

transactionrStory.addWithJSX('TransferPrice', () => <TransferPriceWrapper />);

transactionrStory.addWithJSX('TransactionWithoutGasError', () => (
	<TransactionNoGasError cryptoCurrency="ITH" publicKey="0x4184288c556524df9cb9e58b73265ee66dca4efe" />
));

let txList = [{
	statusText: 'sented',
	date: '1995/45/45',
	cryptoCurrency: 'eth',
	value: '+1578',
	statusIconName: 'failed' as StatusIconName,
	externalLink: 'https://etherscan.io/tx/0x3360ee6307e5a0dd05add1a3e7550948a2f2b323a22037a79b58fa17808ad49b'
},{
	statusText: 'received',
	date: '1995/45/41',
	cryptoCurrency: 'key',
	value: '+15',
	statusIconName: 'receive' as StatusIconName,
	externalLink: 'https://etherscan.io/tx/0x3360ee6307e5a0dd05add1a3e7550948a2f2b323a22037a79b58fa17808ad49b'
}];

transactionrStory.addWithJSX('History', () => <TransactionHistory openLink= {()=>{}}list={txList}/>);


const lws = storiesOf('LWS', module).addDecorator(transferModal) as Story & { addWithJSX: Function };

lws.addWithJSX('LWSHeader', () => <LWSModalHeader />);

lws.addWithJSX('LWSSelectWallet', () => <LWSSelectWalletWrapper />);

lws.addWithJSX('LWSRequiredInfo', () => <LWSRequiredInfoWrapper />);

lws.addWithJSX('LWSWalletConnectionError', () => <LWSWalletConnectionErrorWrapper />);

lws.addWithJSX('LWSSelfkeyIdError', () => <LWSSelfkeyIdErrorWrapper />);

lws.addWithJSX('LWSExtensionError', () => <LWSExtensionErrorWrapper />);

lws.addWithJSX('LWSSuccess', () => <LWSSuccessWrapper />);

lws.addWithJSX('LWSAuthError', () => <LWSAuthErrorWrapper />);

lws.addWithJSX('LWSLoading', () => <LWSLoading />);

const marketplaceStory = storiesOf('Marketplace', module).addDecorator(lightOnDark) as Story & { addWithJSX: Function };

marketplaceStory.addWithJSX('Marketplace', () => <MarketplaceWrapper />);

marketplaceStory.addWithJSX('Exchanges', () => <ExchangesWrapper />); 

marketplaceStory.addWithJSX('ItemDetails', () => <ItemDetails item={
	{
		name: 'Gatecoin',
		logo: [{filename: 'full_GatecoinLogo.png', url:'https://dl.airtable.com/yCvftEABT2qwcCDlAma2_full_GatecoinLogo.png'}],
		status: 'Active',
		integration: 'Unlock Marketplace',
		description: 'Founded in 2013 by investment bankers, Gatecoin is a bitcoin and ethereum token exchange designed for both professional traders and retail investors. Through our intuitive trading platform, we enable individuals and institutions around the world to trade and invest in a wide variety of cryptocurrencies and blockchain assets. fiodfdsoifdsiofn fisdhfposdinfps fidhfid ifdhif fisdhofisd iovdsioew[few. vdsivdsioevcs iovdsiovds vsdiobvsio',
		location: 'Hong Kong',
		year_launched: 2013,
		coin_pairs: '72',
		maker_fee: '0.25%',
		taker_fee: '0.35%',
		fiat_payments: 'Bank trasnfer',
		fiat_supported:['EUR', 'USD', 'HKD'],
		margin_trading: 'no',
		kyc_aml: 'yes',
		excluded_residents: ['United States'],
		url: 'http://www.gatecoin.com',
		email: 'support@gatecoin.com',
		kyc_template: [{name: 'First Name', type: 'metadata', isEntered: true}, {name: 'Last Name', type: 'metadata', isEntered: true}, {name: 'Country Of Residence', type: 'metadata', isEntered: true}, {name: 'National ID', type: 'document', isEntered: false}, {name: 'National ID Self', type: 'document', isEntered: false}], 
	}
} hasBalance={false}
/>); 

marketplaceStory.addWithJSX('WithoutBalanceModal', () => (<UnlockBox><WithoutBalance exchanges={[
	{
			name: 'Gatecoin',
			url: 'https://gatecoin.com/'
	},
	{
			name: 'WandX',
			url: 'https://www.wandx.co/'
	},
	{
			name: 'Kyber Network',
			url: 'https://kyber.network/'
	},
	{
			name: 'TagCash',
			url: 'https://tagcash.com/'
	},
	{
			name: 'Gatecoin',
			url: 'https://gatecoin.com/'
	},
	{
			name: 'WandX',
			url: 'https://www.wandx.co/'
	},
	{
			name: 'Kyber Network',
			url: 'https://kyber.network/'
	},
	{
			name: 'TagCash',
			url: 'https://tagcash.com/'
	}
	
]} /></UnlockBox>)); 

