import * as React from 'react';
import { setup } from '../../src/jss-setup';
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

setup();
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

marketplaceStory.addWithJSX('ItemDetails', () => (
	<ItemDetails
		item={{
			name: 'Gatecoin',
			logo: 'https://dl.airtable.com/yCvftEABT2qwcCDlAma2_full_GatecoinLogo.png',
			status: 'Active',
			integration: 'Unlock Marketplace',
			description:
				'Founded in 2013 by investment bankers, Gatecoin is a bitcoin and ethereum token exchange designed for both professional traders and retail investors. Through our intuitive trading platform, we enable individuals and institutions around the world to trade and invest in a wide variety of cryptocurrencies and blockchain assets.',
			location: 'Hong Kong',
			year_launched: 2013,
			coin_pairs: '72',
			maker_fee: '0.25%',
			taker_fee: '0.35%',
			fiat_payments: 'Bank trasnfer',
			fiat_supported: ['EUR', 'USD', 'HKD'],
			margin_trading: 'no',
			kyc_aml: 'yes',
			excluded_residents: 'United States',
			url: 'http://www.gatecoin.com',
			email: 'support@gatecoin.com',
			kyc_template: ['First Name', 'Last Name', 'Country Of Residence', 'National ID', 'National ID Self'],
		}}
	/>
));
