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
import { 
	Card, 
	CardContent, 
	Typography, 
	ListItem, 
	List, 
	Grid,
	FormControlLabel,
	// Checkbox,
	Radio, 
	// FormControl, 
	// InputLabel, 
	// MenuItem,
} from '@material-ui/core';
import { 
	SelfkeyDarkTheme,
	UnreadNotification,
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
	GreenTick, 
	DefaultBullet, 
	CheckedIcon, 
	InputField,
	// DropdownInputField,
	// DropdownSelect,
	FullButton,
	OutlineButton,
	OutlineSecondaryButton,
	DefaultCheckbox,
	PrimaryCard,
	PrimaryTintCard,
	TypographyCard,
	GreyCard,
	BaseLightCard,
	BaseDarkCard,
	BaseCard,
	SuccessCard,
	WarningCard,
	ErrorCard,
	WhiteCard,
} from '../../src/theme/selfkey-dark-theme';

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
			{ name: 'Selfkey', symbol: 'KEY', balance: 30, balanceInFiat: 0 },
			{ name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 0 },
			{ name: 'Ethereum', symbol: 'ETH', balance: 0.00548, balanceInFiat: 0 }
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

			<Typography variant="h5" color="error" gutterBottom>
				Colors
			</Typography>
			<Grid container spacing={24}>
				<Grid item >
					<Typography color="textSecondary" gutterBottom>
						Primary
					</Typography>
					<PrimaryCard>
						<CardContent>
						</CardContent>
					</PrimaryCard>
				</Grid>

				<Grid item >
					<Typography color="textSecondary" gutterBottom>
						Primary Tint
					</Typography>
					<PrimaryTintCard>
						<CardContent>
						</CardContent>
					</PrimaryTintCard>
				</Grid>

				<Grid item >
					<Typography color="textSecondary" gutterBottom>
						Typography
					</Typography>
					<TypographyCard>
						<CardContent>
						</CardContent>
					</TypographyCard>
				</Grid>

				<Grid item >
					<Typography color="textSecondary" gutterBottom>
						White
					</Typography>
					<WhiteCard>
						<CardContent>
						</CardContent>
					</WhiteCard>
				</Grid> 
			</Grid>

			<Grid container spacing={24}>
				<Grid item >
					<Typography color="textSecondary" gutterBottom>
						Grey
					</Typography>
					<GreyCard>
						<CardContent>
						</CardContent>
					</GreyCard>
				</Grid>

				<Grid item >
					<Typography color="textSecondary" gutterBottom>
						Base Light
					</Typography>
					<BaseLightCard>
						<CardContent>
						</CardContent>
					</BaseLightCard>
				</Grid>
				
				<Grid item >
					<Typography color="textSecondary" gutterBottom>
						Base Dark
					</Typography>
					<BaseDarkCard>
						<CardContent>
						</CardContent>
					</BaseDarkCard>
				</Grid>

				<Grid item >
					<Typography color="textSecondary" gutterBottom>
						Base
					</Typography>
					<BaseCard>
						<CardContent>
						</CardContent>
					</BaseCard>
				</Grid>
			</Grid>

			<Grid container spacing={24} justify="flex-start">
				<Grid item >
					<Typography color="textSecondary" gutterBottom>
						Success
					</Typography>
					<SuccessCard>
						<CardContent>
						</CardContent>
					</SuccessCard>
				</Grid>

				<Grid item >
					<Typography color="textSecondary" gutterBottom>
						Warning
					</Typography>
					<WarningCard>
						<CardContent>
						</CardContent>
					</WarningCard>
				</Grid>

				<Grid item >
					<Typography color="textSecondary" gutterBottom>
						Error
					</Typography>
					<ErrorCard>
						<CardContent>
						</CardContent>
					</ErrorCard>
				</Grid>
			</Grid> <br/>


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
			<UnreadNotification gutterBottom>
				H2 - Notifications Unread
			</UnreadNotification>
			<Typography variant="h3" gutterBottom>
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
			<Definition gutterBottom>
				Definition Title 16px
			</Definition>
			<DefinitionDescription gutterBottom>
				Definition description Title 16px
			</DefinitionDescription>
			<ExplanatoryLarge gutterBottom>
				Explanatory Large 18px
			</ExplanatoryLarge>
			<Explanatory gutterBottom>
				Explanatory 13/19px
			</Explanatory> <br/>


			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Tables
			</Typography>
			<TableHeader gutterBottom>
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
			<FormPlaceholder gutterBottom>
				Form Placeholder 14/21px
			</FormPlaceholder>
			<FormLabel gutterBottom>
				Form Label 12/15px
			</FormLabel>
			<ErrorMessage gutterBottom>
				Error Message 13/19px
			</ErrorMessage>
			<WarningMessage gutterBottom>
				Warning Message 16/24px
			</WarningMessage> <br/>


			<Grid container spacing={24}>
				<Grid item xs>
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
				</Grid>

				<Grid item xs>
					<Typography variant="h3" style={underlineStyle} gutterBottom>
						Definition Lists
					</Typography>
					<List>
						{['United States', 'LLC', '08/08/2016'].map(item => (
							<ListItem key={item}>
								<Definition>
									Jurisdiction
								</Definition>
								<GreenTick />
								<DefinitionDescription>
									{item}
								</DefinitionDescription>
							</ListItem>
						))}
					</List> <br/>
				</Grid>

				<Grid item xs>
					<Typography variant="h3" style={underlineStyle} gutterBottom>
						Check Lists
					</Typography>
					<List>
						{['Full Legal Name', 'Country of Residency', 'National ID Document', 'National ID with Selfie'].map(item => (
							<ListItem key={item}>
								<CheckedIcon />
								<Definition>
									{item}
								</Definition>
							</ListItem>
						))}
					</List> <br/>
				</Grid>
			</Grid>



			<Typography variant="h5" color="error" gutterBottom>
				Forms
			</Typography>
			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Text Input
			</Typography>

			<Grid container spacing={24}>
				<Grid item>
					<TableHeader gutterBottom>
						Normal / Focused
					</TableHeader>
					<InputField
						disableUnderline={ true }
						placeholder="First Name"
					/>
				</Grid>

				<Grid item>
					<TableHeader gutterBottom>
						Disabled
					</TableHeader>
					<InputField
						disabled
						disableUnderline={ true }
						placeholder="First Name"
					/>
				</Grid>

				<Grid item>
					<TableHeader gutterBottom>
						Error
					</TableHeader>
					<InputField
						error
						disableUnderline={ true }
						placeholder="First Name"
					/>
				</Grid>
			</Grid> <br/>



			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Buttons
			</Typography>
			<TableHeader gutterBottom>
				Full Primary
			</TableHeader>
			<FullButton size="large">Large</FullButton>
			<FullButton disabled size="large">
				Disabled
			</FullButton> 
			<FullButton>Medium</FullButton> 
			<FullButton size="small">Small</FullButton>
			<br/><br/>

			<TableHeader gutterBottom>
				Shell Primary
			</TableHeader>
			<OutlineButton size="large">Large</OutlineButton>
			<OutlineButton disabled size="large">
				Disabled
			</OutlineButton> 
			<OutlineButton>Medium</OutlineButton> 
			<OutlineButton size="small">Small</OutlineButton>
			<br/><br/>

			<TableHeader gutterBottom>
				Shell Secondary
			</TableHeader>
			<OutlineSecondaryButton size="large">Large</OutlineSecondaryButton>
			<OutlineSecondaryButton disabled size="large">
				Disabled
			</OutlineSecondaryButton> 
			<OutlineSecondaryButton>Medium</OutlineSecondaryButton> 
			<OutlineSecondaryButton size="small">Small</OutlineSecondaryButton>
			<br/><br/>



			<Grid container spacing={8} justify="flex-start">
				<Grid item xs={3}>
					<Typography variant="h3" style={underlineStyle} gutterBottom>
						Checkboxes
					</Typography>
					<FormControlLabel
						control={
							<DefaultCheckbox icon />
						}
						label="Default"
					/> <br/>
					<FormControlLabel
						checked
						control={
							<DefaultCheckbox icon />
						}
						label="Selected"
					/> <br/>
					<FormControlLabel
						control={
							<DefaultCheckbox icon/>
						}
						label="Unselected, Error"
					/> <br/>
					<FormControlLabel
						checked
						color="primary"
						control={
							<DefaultCheckbox color="primary" />
						}
						label="Selected, Error"
					/> <br/>
					<FormControlLabel
						control={
							<DefaultCheckbox indeterminate />
						}
						label="Bulk"
					/> <br/>
					<FormControlLabel
						disabled
						control={
							<DefaultCheckbox />
						}
						label="Unselected, Disabled"
					/> <br/>
					<FormControlLabel
						disabled
						checked
						control={
							<DefaultCheckbox />
						}
						label="Selected, Disabled"
					/> <br/>
				</Grid>


				<Grid item xs={3}>
					<Typography variant="h3" style={underlineStyle} gutterBottom>
						Radio buttons
					</Typography>
					<FormControlLabel
						control={
							<Radio icon />
						}
						label="Default"
					/> <br/>
					<FormControlLabel
						checked
						control={
							<Radio icon />
						}
						label="Selected"
					/> <br/>
					<FormControlLabel
						control={
							<Radio icon/>
						}
						label="Unselected, Error"
					/> <br/>
					<FormControlLabel
						checked
						color="primary"
						control={
							<Radio color="primary" />
						}
						label="Selected, Error"
					/> <br/>
					<FormControlLabel
						control={
							<Radio />
						}
						label="Bulk"
					/> <br/>
					<FormControlLabel
						disabled
						control={
							<Radio />
						}
						label="Unselected, Disabled"
					/> <br/>
					<FormControlLabel
						disabled
						checked
						control={
							<Radio />
						}
						label="Selected, Disabled"
					/> <br/>
				</Grid>
			</Grid>

		</CardContent>
	</Card>
</SelfkeyDarkTheme>));

