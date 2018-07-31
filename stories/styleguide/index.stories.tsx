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

setAddon(JSXAddon);

const lightOnDark = host({
	title: 'Light on Dark',
	align: 'center',
	background: '#222b34',
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
		]}
		topTokenListSize={5}
		viewAll={false}
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

const transferStory = storiesOf('Transfer', module).addDecorator(transferModal) as Story & { addWithJSX: Function };

transferStory.addWithJSX('TransferPrice', () => <TransferPriceWrapper />);
