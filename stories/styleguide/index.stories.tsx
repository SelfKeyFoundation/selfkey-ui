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
import { TransactionSendProgressBox } from '../../src/transaction/send/transaction-send-progress-box';
import { LWSModalHeader } from '../../src/lws/lws-modal-header';
import { LWSLoading } from '../../src/lws/lws-loading';
import { TransactionHistory, StatusIconName } from '../../src/transaction/transaction-history';
import { SendTransaction } from './send-transaction';
import { TransactionErrorBox } from '../../src/transaction/transaction-error-box';
import { TransactionError } from '../../src/transaction/transaction-error';
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
import { AddressBook } from '../../src/address-book/address-book';
import { AddressBookAdd } from '../../src/address-book/address-book-add';
import { AddressBookEdit } from '../../src/address-book/address-book-edit';
import { ModalBox } from '../../src/common/modal-box';
import { Card, CardContent, Typography, ListItem, List } from '@material-ui/core';
import { 
	SelfkeyDarkTheme,
	ParagraphLarge,
	Paragraph,
	Definition,
	DefinitionDescription,
	ExplanatoryLarge,
	Explanatory,
	TableHeader,
	TableText,
	TableSmallText,
	TableSmallTextDisabled,
	FormPlaceholder,
	FormLabel,
	ErrorMessage, 
	WarningMessage,  
} from '../../src/theme/selfkey-dark-theme';
import { GreenTick, DefaultBullet } from '../../src/lists/lists-materialui';

setup();
import { UnlockBox } from '../../src/marketplace/unlock-box'
import { WithoutBalance } from '../../src/marketplace/without-balance'
import { Unlock } from '../../src/marketplace/unlock';
import { Return } from '../../src/marketplace/return';
import { UnlockProgress } from '../../src/marketplace/unlock-progress';


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

const commonStory = storiesOf('Common', module).addDecorator(lightOnDark) as Story & { addWithJSX: Function };

commonStory.addWithJSX('Slider', () => {});

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
			{ name: 'Selfkey', symbol: 'KEY', balance: 30, balanceInFiat: 0 },
			{ name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 0 },
			{ name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 0 },
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
	<TransactionNoGasError publicKey="0x4184288c556524df9cb9e58b73265ee66dca4efe" />
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

transactionrStory.addWithJSX('SendTransaction', () => <SendTransaction/>);
transactionrStory.addWithJSX('TransactionNoGasError', () => <TransactionNoGasError publicKey="0x4184288c556524df9cb9e58b73265ee66dca4efe"/>);
transactionrStory.addWithJSX('TransactionErrorBox', () => <TransactionErrorBox publicKey="0x4184288c556524df9cb9e58b73265ee66dca4efe"/>);
transactionrStory.addWithJSX('TransactionError', () => <TransactionError message="Returned error: intrinsic gas too low" publicKey="0x4184288c556524df9cb9e58b73265ee66dca4efe"/>);

transactionrStory.addWithJSX('TransactionSendProgressBox', () => <TransactionSendProgressBox locale='en' status='Pending' cryptoCurrency='KEY' address='0x4184288c556524df9cb9e58b73265ee66dca4efe' transactionHash='0x052170c7f12041cae71895d8ea37ae3ce8ac87f9448d3861ab6c4f5585d521fd' amount={0.00001}/>);

transactionrStory.addWithJSX('TransactionSendProgressBox', () => (
	<TransactionSendProgressBox
		locale="en"
		status="Pending"
		cryptoCurrency="KEY"
		address="0x4184288c556524df9cb9e58b73265ee66dca4efe"
		transactionHash="0x052170c7f12041cae71895d8ea37ae3ce8ac87f9448d3861ab6c4f5585d521fd"
		amount={0.00001}
	/>
));

const lws = storiesOf('LWS', module).addDecorator(transferModal) as Story & { addWithJSX: Function };

lws.addWithJSX('LWSHeader', () => <LWSModalHeader />);
lws.addWithJSX('LWSSelectWallet', () => <LWSSelectWalletWrapper />);
lws.addWithJSX('LWSRequiredInfo', () => <LWSRequiredInfoWrapper />);
lws.addWithJSX('LWSWalletConnectionError', () => <LWSWalletConnectionErrorWrapper />);
lws.addWithJSX('LWSSelfkeyIdError', () => <LWSSelfkeyIdErrorWrapper />);
lws.addWithJSX('LWSExtensionError', () => <LWSExtensionErrorWrapper />);
lws.addWithJSX('LWSSuccess', () => <LWSSuccessWrapper />);
lws.addWithJSX('LWSWalletConnectionErrorModal', () => <LWSWalletConnectionErrorWrapper />);
lws.addWithJSX('LWSAuthError', () => <LWSAuthErrorWrapper />);
lws.addWithJSX('LWSLoading', () => <LWSLoading />);

const marketplaceStory = storiesOf('Marketplace', module).addDecorator(lightOnDark) as Story & { addWithJSX: Function };

marketplaceStory.addWithJSX('Marketplace', () => <MarketplaceWrapper />);

marketplaceStory.addWithJSX('Exchanges', () => <ExchangesWrapper />);

marketplaceStory.addWithJSX('ItemDetails', () => (
	<ItemDetails
		item={{
			name: 'Gatecoin',
			logo: [
				{
					filename: 'full_GatecoinLogo.png',
					url: 'https://dl.airtable.com/yCvftEABT2qwcCDlAma2_full_GatecoinLogo.png',
				},
			],
			status: 'Active',
			integration: 'Unlock Marketplace',
			description:
				'Founded in 2013 by investment bankers, Gatecoin is a bitcoin and ethereum token exchange designed for both professional traders and retail investors. Through our intuitive trading platform, we enable individuals and institutions around the world to trade and invest in a wide variety of cryptocurrencies and blockchain assets. fiodfdsoifdsiofn fisdhfposdinfps fidhfid ifdhif fisdhofisd iovdsioew[few. vdsivdsioevcs iovdsiovds vsdiobvsio',
			location: 'Hong Kong',
			year_launched: 2013,
			coin_pairs: '72',
			maker_fee: '0.25%',
			taker_fee: '0.35%',
			fiat_payments: 'Bank trasnfer',
			fiat_supported: ['EUR', 'USD', 'HKD'],
			margin_trading: 'no',
			kyc_aml: 'yes',
			excluded_residents: ['United States'],
			url: 'http://www.gatecoin.com',
			email: 'support@gatecoin.com',
			kyc_template: [
				{ name: 'First Name', type: 'metadata', isEntered: true },
				{ name: 'Last Name', type: 'metadata', isEntered: true },
				{ name: 'Country Of Residence', type: 'metadata', isEntered: true },
				{ name: 'National ID', type: 'document', isEntered: false },
				{ name: 'National ID Self', type: 'document', isEntered: false },
			],
		}}
		hasBalance={false}
	/>
));

const addressBook = storiesOf('AddressBook', module).addDecorator(lightOnDark) as Story & { addWithJSX: Function };

addressBook.addWithJSX('AddressBook', () => <AddressBook addresses={
	[
		{
			id: 1,
			label: 'John',
			address: '0x4184288c556524df9cb9e58b73265ee66dca4efe'
		}
	]
}

onEdit={id => alert('onEdit' + id)}
onDelete={id =>alert('onDelete' + id)}
onAdd={() =>alert('onAdd')}
/>);

addressBook.addWithJSX('AddressBookAdd', () => (<ModalBox headerText='Add Address'><AddressBookAdd 
onSave={(label, address) => alert('onEdit' + label +  address)}
onCancel={() => alert('onCancel')}
onLabelChange={label => alert('onLabelChange ' + label)}
onAddressChange={address => alert('onAddressChange ' + address)}
labelError='hey'
/></ModalBox>));

addressBook.addWithJSX('AddressBookEdit', () => (<ModalBox headerText='Edit Label'><AddressBookEdit
label='Test'
onSave={(label) => alert('onEdit' + label)}
onCancel={() => alert('onCancel')}
onLabelChange={label => alert('onLabelChange ' + label)}
labelError='hey'
/></ModalBox>));


const theme = storiesOf('Theme', module).addDecorator(lightOnDark) as Story & { addWithJSX: Function };

const underlineStyle = {
	textDecoration: 'underline',
}


theme.addWithJSX('SelfkeyDarkTheme', () => (
<SelfkeyDarkTheme>
	<Card>
		<CardContent>
			{/* <Button color="primary" variant="contained">Primary</Button> <br/> <br/>
			<Button color="secondary" variant="contained">Secondary</Button> <br/><br/> */}
			<Typography variant="h5" color="error" gutterBottom>
				Typography
			</Typography>
			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Headings
			</Typography>
			<Typography variant="h1" gutterBottom>
				H1 - Heading
			</Typography>
			<Typography variant="h2" gutterBottom>
				H2 - Heading 2
			</Typography>
			<Typography variant="h2" gutterBottom>
				H2 - Notifications Unread (Bold)
			</Typography>
			<Typography variant="h3" color="textSecondary" gutterBottom>
				H3 - Heading 3
			</Typography> <br/>


			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Body Text
			</Typography>
			<ParagraphLarge gutterBottom>
				Paragraph Large 18px
			</ParagraphLarge>
			<Paragraph gutterBottom>
				Paragraph 16px
			</Paragraph>
			<Definition color="textSecondary" gutterBottom>
				Definition Title 16px
			</Definition>
			<DefinitionDescription gutterBottom>
				Definition description Title 16px
			</DefinitionDescription>
			<ExplanatoryLarge color="textSecondary" gutterBottom>
				Explanatory Large 18px
			</ExplanatoryLarge>
			<Explanatory color="textSecondary" gutterBottom>
				Explanatory 13/19px
			</Explanatory> <br/>


			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Tables
			</Typography>
			<TableHeader color="textSecondary" gutterBottom>
				Table Header 12/15px
			</TableHeader>
			<TableText gutterBottom>
				Table Text 15/18px 
			</TableText>
			<TableSmallText gutterBottom>
				Table Small Text 14/17px
			</TableSmallText>
			<TableSmallTextDisabled gutterBottom>
				Table Small Text Disabled 14/17px
			</TableSmallTextDisabled>
			<TableSmallText color="primary" gutterBottom>
				Table Small Link 14/17px
			</TableSmallText> <br/>
			

			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Forms
			</Typography>
			<FormPlaceholder color="textSecondary" gutterBottom>
				Form Placeholder 14/21px
			</FormPlaceholder>
			<FormLabel color="textSecondary" gutterBottom>
				Form Label 12/15px
			</FormLabel>
			<ErrorMessage color="error" gutterBottom>
				Error Message 13/19px
			</ErrorMessage>
			<WarningMessage color="secondary" gutterBottom>
				Warning Message 16/24px
			</WarningMessage> <br/>


			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Lists
			</Typography>
			<Paragraph>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit:
			</Paragraph>
			<List>
				{['Binance', 'KuCoin', 'IDEX'].map(item => (
					<ListItem key={item}>
						<DefaultBullet />
						<ParagraphLarge>{item}</ParagraphLarge>
					</ListItem>
				))}
			</List> <br/>

			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Definition Lists
			</Typography>
			<List>
				{['United States', 'LLC', '08/08/2016'].map(item => (
					<ListItem key={item}>
						<Definition color="textSecondary">
							Jurisdiction
						</Definition>
						<GreenTick />
						<DefinitionDescription>
							{item}
						</DefinitionDescription>
					</ListItem>
				))}
			</List> <br/>

			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Check Lists
			</Typography>
			<List>
				{['Full Legal Name', 'Country of Residency', 'National ID Document', 'National ID with Selfie'].map(item => (
					<ListItem key={item}>
						<GreenTick />
						<Definition color="textSecondary">
							{item}
						</Definition>
					</ListItem>
				))}
			</List> <br/>

		</CardContent>
	</Card>
</SelfkeyDarkTheme>));
marketplaceStory.addWithJSX('ItemDetails Pending', () => (
	<ItemDetails
		item={{
			name: 'Gatecoin',
			logo: [
				{
					filename: 'full_GatecoinLogo.png',
					url: 'https://dl.airtable.com/yCvftEABT2qwcCDlAma2_full_GatecoinLogo.png',
				},
			],
			status: 'pending',
			integration: 'PENDING KEY DEPOSIT',
			description:
				'Founded in 2013 by investment bankers, Gatecoin is a bitcoin and ethereum token exchange designed for both professional traders and retail investors. Through our intuitive trading platform, we enable individuals and institutions around the world to trade and invest in a wide variety of cryptocurrencies and blockchain assets. fiodfdsoifdsiofn fisdhfposdinfps fidhfid ifdhif fisdhofisd iovdsioew[few. vdsivdsioevcs iovdsiovds vsdiobvsio',
			location: 'Hong Kong',
			year_launched: 2013,
			coin_pairs: '72',
			maker_fee: '0.25%',
			taker_fee: '0.35%',
			fiat_payments: 'Bank trasnfer',
			fiat_supported: ['EUR', 'USD', 'HKD'],
			margin_trading: 'no',
			kyc_aml: 'yes',
			excluded_residents: ['United States'],
			url: 'http://www.gatecoin.com',
			email: 'support@gatecoin.com',
			kyc_template: [
				{ name: 'First Name', type: 'metadata', isEntered: true },
				{ name: 'Last Name', type: 'metadata', isEntered: true },
				{ name: 'Country Of Residence', type: 'metadata', isEntered: true },
				{ name: 'National ID', type: 'document', isEntered: false },
				{ name: 'National ID Self', type: 'document', isEntered: false },
			],
		}}
		hasBalance={false}
	/>
));

marketplaceStory.addWithJSX('ItemDetails Locked', () => (
	<ItemDetails
		item={{
			name: 'Gatecoin',
			logo: [
				{
					filename: 'full_GatecoinLogo.png',
					url: 'https://dl.airtable.com/yCvftEABT2qwcCDlAma2_full_GatecoinLogo.png',
				},
			],
			status: 'locked',
			integration: 'KEY DEPOSIT',
			releaseDate: Date.now() + 2 * 24 * 60 * 60 * 1000,
			description:
				'Founded in 2013 by investment bankers, Gatecoin is a bitcoin and ethereum token exchange designed for both professional traders and retail investors. Through our intuitive trading platform, we enable individuals and institutions around the world to trade and invest in a wide variety of cryptocurrencies and blockchain assets. fiodfdsoifdsiofn fisdhfposdinfps fidhfid ifdhif fisdhofisd iovdsioew[few. vdsivdsioevcs iovdsiovds vsdiobvsio',
			location: 'Hong Kong',
			year_launched: 2013,
			coin_pairs: '72',
			maker_fee: '0.25%',
			taker_fee: '0.35%',
			fiat_payments: 'Bank trasnfer',
			fiat_supported: ['EUR', 'USD', 'HKD'],
			margin_trading: 'no',
			kyc_aml: 'yes',
			excluded_residents: ['United States'],
			url: 'http://www.gatecoin.com',
			email: 'support@gatecoin.com',
			kyc_template: [
				{ name: 'First Name', type: 'metadata', isEntered: true },
				{ name: 'Last Name', type: 'metadata', isEntered: true },
				{ name: 'Country Of Residence', type: 'metadata', isEntered: true },
				{ name: 'National ID', type: 'document', isEntered: false },
				{ name: 'National ID Self', type: 'document', isEntered: false },
			],
		}}
		hasBalance={false}
	/>
));

marketplaceStory.addWithJSX('ItemDetails unlocked', () => (
	<ItemDetails
		item={{
			name: 'Gatecoin',
			logo: [
				{
					filename: 'full_GatecoinLogo.png',
					url: 'https://dl.airtable.com/yCvftEABT2qwcCDlAma2_full_GatecoinLogo.png',
				},
			],
			status: 'unlocked',
			integration: 'Unlock Marketplace',
			description:
				'Founded in 2013 by investment bankers, Gatecoin is a bitcoin and ethereum token exchange designed for both professional traders and retail investors. Through our intuitive trading platform, we enable individuals and institutions around the world to trade and invest in a wide variety of cryptocurrencies and blockchain assets. fiodfdsoifdsiofn fisdhfposdinfps fidhfid ifdhif fisdhofisd iovdsioew[few. vdsivdsioevcs iovdsiovds vsdiobvsio',
			location: 'Hong Kong',
			year_launched: 2013,
			coin_pairs: '72',
			maker_fee: '0.25%',
			taker_fee: '0.35%',
			fiat_payments: 'Bank trasnfer',
			fiat_supported: ['EUR', 'USD', 'HKD'],
			margin_trading: 'no',
			kyc_aml: 'yes',
			excluded_residents: ['United States'],
			url: 'http://www.gatecoin.com',
			email: 'support@gatecoin.com',
			kyc_template: [
				{ name: 'First Name', type: 'metadata', isEntered: true },
				{ name: 'Last Name', type: 'metadata', isEntered: true },
				{ name: 'Country Of Residence', type: 'metadata', isEntered: true },
				{ name: 'National ID', type: 'document', isEntered: false },
				{ name: 'National ID Self', type: 'document', isEntered: false },
			],
		}}
		hasBalance={false}
	/>
));

marketplaceStory.addWithJSX('ItemDetails inactive', () => (
	<ItemDetails
		item={{
			name: 'Gatecoin',
			logo: [
				{
					filename: 'full_GatecoinLogo.png',
					url: 'https://dl.airtable.com/yCvftEABT2qwcCDlAma2_full_GatecoinLogo.png',
				},
			],
			status: 'Inactive',
			integration: 'Coming Soon',
			description:
				'Founded in 2013 by investment bankers, Gatecoin is a bitcoin and ethereum token exchange designed for both professional traders and retail investors. Through our intuitive trading platform, we enable individuals and institutions around the world to trade and invest in a wide variety of cryptocurrencies and blockchain assets. fiodfdsoifdsiofn fisdhfposdinfps fidhfid ifdhif fisdhofisd iovdsioew[few. vdsivdsioevcs iovdsiovds vsdiobvsio',
			location: 'Hong Kong',
			year_launched: 2013,
			coin_pairs: '72',
			maker_fee: '0.25%',
			taker_fee: '0.35%',
			fiat_payments: 'Bank trasnfer',
			fiat_supported: ['EUR', 'USD', 'HKD'],
			margin_trading: 'no',
			kyc_aml: 'yes',
			excluded_residents: ['United States'],
			url: 'http://www.gatecoin.com',
			email: 'support@gatecoin.com',
			kyc_template: [
				{ name: 'First Name', type: 'metadata', isEntered: true },
				{ name: 'Last Name', type: 'metadata', isEntered: true },
				{ name: 'Country Of Residence', type: 'metadata', isEntered: true },
				{ name: 'National ID', type: 'document', isEntered: false },
				{ name: 'National ID Self', type: 'document', isEntered: false },
			],
		}}
		hasBalance={false}
	/>
));

marketplaceStory.addWithJSX('WithoutBalanceModal', () => (
	<UnlockBox>
		<WithoutBalance
			exchanges={[
				{
					name: 'Gatecoin',
					url: 'https://gatecoin.com/',
				},
				{
					name: 'WandX',
					url: 'https://www.wandx.co/',
				},
				{
					name: 'Kyber Network',
					url: 'https://kyber.network/',
				},
				{
					name: 'TagCash',
					url: 'https://tagcash.com/',
				},
				{
					name: 'Gatecoin',
					url: 'https://gatecoin.com/',
				},
				{
					name: 'WandX',
					url: 'https://www.wandx.co/',
				},
				{
					name: 'Kyber Network',
					url: 'https://kyber.network/',
				},
				{
					name: 'TagCash',
					url: 'https://tagcash.com/',
				},
			]}
		/>
	</UnlockBox>
));

marketplaceStory.addWithJSX('UnlockModal', () => (
	<UnlockBox>
		<Unlock
			minGasPrice={11800000000}
			maxGasPrice={13000000000}
			gasLimit={45000}
			fiat="USD"
			fiatRate={217.73}
			onTransactionFeeChange={(value: number) => console.log(value)}
			onConfirm={(value: number) => alert(value)}
			onCancel={() => alert('Canceled')}
		/>
	</UnlockBox>
));

marketplaceStory.addWithJSX('ReturnModal', () => (
	<UnlockBox text="Return KEY Deposit">
		<Return
			minGasPrice={11800000000}
			maxGasPrice={13000000000}
			gasLimit={45000}
			fiat="USD"
			fiatRate={217.73}
			onTransactionFeeChange={(value: number) => console.log(value)}
			onConfirm={(value: number) => alert(value)}
			onCancel={() => alert('Canceled')}
		/>
	</UnlockBox>
));

marketplaceStory.addWithJSX('UnlockProgress', () => (
	<UnlockBox>
		<UnlockProgress />
	</UnlockBox>
));
