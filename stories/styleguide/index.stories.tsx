import * as React from 'react';
// import { setup } from '../../src/jss-setup';
import { setAddon, storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import JSXAddon from 'storybook-addon-jsx';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { CryptoPriceList } from './crypto-price-list';
import { TokenList } from './token-list';
import { CryptoChartBox } from '../../src/price/crypto-chart-box';
import { CryptoPriceTable } from '../../src/price/crypto-price-table';
import { PriceSummary } from '../../src/price/price-summary';
import { NumberFormat } from '../../src/price/number-format';
import { TransferPriceWrapper } from './transfer-price';
import { TransactionNoGasError } from '../../src/transaction/transaction-no-gas-error';
import { TransactionFeeSelector } from '../../src/transaction/transaction-fee-selector';
import { TransactionFeeSliderSelector } from '../../src/transaction/transaction-fee-slider-selector';
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
	LWSAuthErrorWrapper
} from './lws';
import { AddressBook } from '../../src/address-book/address-book';
import { AddressBookAdd } from '../../src/address-book/address-book-add';
import { AddressBookEdit } from '../../src/address-book/address-book-edit';
import { ModalBox } from '../../src/common/modal-box';
import { Card, CardContent } from '@material-ui/core';
import { SelfkeyDarkTheme } from '../../src/theme/selfkey-dark-theme';
import TableStories from './materialui/story-tables';
import ButtonStories from './materialui/story-buttons';
import InputStories from './materialui/story-input';
import ListStories from './materialui/story-lists';
import TypographyStories from './materialui/story-typography';
import ColorStories from './materialui/story-colors';
import TabStories from './materialui/story-tabs';
import AccordionStories from './materialui/story-accordion';
import PaginationStories from './materialui/story-pagination';
import FileUploadInProgressStory from './materialui/story-fileUploadInProgress';
import FileUploadStory from './materialui/story-fileUpload';
import ModalStories from './materialui/story-modals';
import DatePickerStories from './materialui/story-datepickers';
import SliderStory from './materialui/story-sliders';
import { IconsStory } from './icons';
import StatusStories from './materialui/story-statuses';

// setup();

setAddon(JSXAddon);

const lightOnDark = host({
	title: 'Light on Dark',
	align: 'center',
	background: '#222b34',
	width: '1400px'
});

const transferModal = host({
	title: 'Light on Dark',
	align: 'center',
	background: '#222b34',
	width: '700px'
});

const commonStory = storiesOf('Common', module).addDecorator(lightOnDark) as any & {
	addWithJSX: Function;
};

// commonStory.addWithJSX('Slider', () => {});

commonStory.addWithJSX('Icons', () => (
	<SelfkeyDarkTheme>
		<IconsStory />
	</SelfkeyDarkTheme>
));

const priceStory = storiesOf('Prices', module).addDecorator(lightOnDark) as any & {
	addWithJSX: Function;
};

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
priceStory.addWithJSX('NumberFormat', () => (
	<SelfkeyDarkTheme>
		<NumberFormat
			locale={'en'}
			fractionDigits={3}
			value={10.23123123123123}
			priceStyle="decimal"
			showCurrency
			currency="KEY"
		/>
	</SelfkeyDarkTheme>
));
priceStory.addWithJSX('NumberFormat fiat', () => (
	<SelfkeyDarkTheme>
		<NumberFormat
			locale={'en'}
			value={10.23123123123123}
			priceStyle="currency"
			currency="USD"
		/>
	</SelfkeyDarkTheme>
));
priceStory.addWithJSX('PriceSummary', () => (
	<PriceSummary
		locale={'en'}
		priceStyle="decimal"
		currency="KEY"
		fractionDigits={3}
		value={30.1231231}
		appendCurrency
	/>
));

priceStory.addWithJSX('CryptoPriceTable', () => (
	<CryptoPriceTable
		locale="en"
		fiatCurrency="USD"
		showCurrency
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
				isCustom: false
			},
			{
				name: 'Ethereum',
				symbol: 'ETH',
				price: 400,
				balance: 0.00548,
				balanceInFiat: 20.52,
				hidden: false,
				isCustom: false
			},
			{
				name: 'Other token',
				symbol: 'OTHR',
				price: 500,
				balance: 0.00548,
				balanceInFiat: 20.52,
				address: 'dsadsadsa',
				hidden: false,
				isCustom: true
			},
			{
				name: 'Ethereum',
				symbol: 'OTHR',
				price: 400,
				balance: 0.00548,
				balanceInFiat: 20.52,
				address: 'dsadsadsa',
				hidden: true,
				isCustom: true
			},
			{
				name: 'Ethereum',
				symbol: 'OTHR',
				price: 400,
				balance: 0.00548,
				balanceInFiat: 20.52,
				address: 'dsadsadsa',
				hidden: false,
				isCustom: false
			}
		]}
	/>
));

const transactionrStory = storiesOf('Transaction', module).addDecorator(transferModal) as any & {
	addWithJSX: Function;
};

transactionrStory.addWithJSX('TransferPrice', () => (
	<SelfkeyDarkTheme>
		<TransferPriceWrapper />
	</SelfkeyDarkTheme>
));
transactionrStory.addWithJSX('TransactionWithoutGasError', () => (
	<SelfkeyDarkTheme>
		<TransactionNoGasError publicKey="0x4184288c556524df9cb9e58b73265ee66dca4efe" />
	</SelfkeyDarkTheme>
));
transactionrStory.addWithJSX('TransactionFeeSelector', () => (
	<SelfkeyDarkTheme>
		<TransactionFeeSelector
			minGasPrice={100000000000}
			maxGasPrice={10000000000000}
			gasLimit={100}
			fiat={'USD'}
			fiatRate={200}
			onChange={x => console.log('feeSelector', x)}
		/>
	</SelfkeyDarkTheme>
));

transactionrStory.addWithJSX('TransactionFeeSelector - New', () => (
	<SelfkeyDarkTheme>
		<TransactionFeeSliderSelector
			minGasPrice={100000000000}
			maxGasPrice={10000000000000}
			slowPrice={1000000000000}
			mediumPrice={2300000000000}
			fastPrice={10000000000000}
			gasLimit={100}
			fiat={'USD'}
			fiatRate={200}
			onChange={x => console.log('feeSelector', x)}
		/>
	</SelfkeyDarkTheme>
));

const txList = [
	{
		statusText: 'sented',
		date: '1995/45/45',
		cryptoCurrency: 'eth',
		value: '+1578',
		statusIconName: 'failed' as StatusIconName,
		externalLink:
			'https://etherscan.io/tx/0x3360ee6307e5a0dd05add1a3e7550948a2f2b323a22037a79b58fa17808ad49b'
	},
	{
		statusText: 'received',
		date: '1995/45/41',
		cryptoCurrency: 'key',
		value: '+15',
		statusIconName: 'receive' as StatusIconName,
		externalLink:
			'https://etherscan.io/tx/0x3360ee6307e5a0dd05add1a3e7550948a2f2b323a22037a79b58fa17808ad49b'
	}
];

transactionrStory.addWithJSX('History', () => (
	<SelfkeyDarkTheme>
		<TransactionHistory openLink={() => {}} list={txList} />
	</SelfkeyDarkTheme>
));

transactionrStory.addWithJSX('SendTransaction', () => <SendTransaction />);
transactionrStory.addWithJSX('TransactionNoGasError', () => (
	<SelfkeyDarkTheme>
		<TransactionNoGasError publicKey="0x4184288c556524df9cb9e58b73265ee66dca4efe" />
	</SelfkeyDarkTheme>
));
transactionrStory.addWithJSX('TransactionErrorBox', () => (
	<SelfkeyDarkTheme>
		<TransactionErrorBox publicKey="0x4184288c556524df9cb9e58b73265ee66dca4efe" />
	</SelfkeyDarkTheme>
));
transactionrStory.addWithJSX('TransactionError', () => (
	<SelfkeyDarkTheme>
		<TransactionError
			message="Returned error: intrinsic gas too low"
			publicKey="0x4184288c556524df9cb9e58b73265ee66dca4efe"
		/>
	</SelfkeyDarkTheme>
));

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

transactionrStory.addWithJSX('TransactionSendProgressBox', () => (
	<SelfkeyDarkTheme>
		<TransactionSendProgressBox
			locale="en"
			status="Pending"
			cryptoCurrency="KEY"
			address="0x4184288c556524df9cb9e58b73265ee66dca4efe"
			transactionHash="0x052170c7f12041cae71895d8ea37ae3ce8ac87f9448d3861ab6c4f5585d521fd"
			amount={0.00001}
		/>
	</SelfkeyDarkTheme>
));

const lws = storiesOf('LWS', module).addDecorator(transferModal) as any & { addWithJSX: Function };

lws.addWithJSX('LWSHeader', () => (
	<SelfkeyDarkTheme>
		<LWSModalHeader />
	</SelfkeyDarkTheme>
));
lws.addWithJSX('LWSSelectWallet', () => (
	<SelfkeyDarkTheme>
		<LWSSelectWalletWrapper />
	</SelfkeyDarkTheme>
));
lws.addWithJSX('LWSRequiredInfo', () => (
	<SelfkeyDarkTheme>
		<LWSRequiredInfoWrapper />
	</SelfkeyDarkTheme>
));
lws.addWithJSX('LWSWalletConnectionError', () => (
	<SelfkeyDarkTheme>
		<LWSWalletConnectionErrorWrapper />
	</SelfkeyDarkTheme>
));
lws.addWithJSX('LWSSelfkeyIdError', () => (
	<SelfkeyDarkTheme>
		<LWSSelfkeyIdErrorWrapper />
	</SelfkeyDarkTheme>
));
lws.addWithJSX('LWSExtensionError', () => (
	<SelfkeyDarkTheme>
		<LWSExtensionErrorWrapper />
	</SelfkeyDarkTheme>
));
lws.addWithJSX('LWSSuccess', () => (
	<SelfkeyDarkTheme>
		<LWSSuccessWrapper />
	</SelfkeyDarkTheme>
));
lws.addWithJSX('LWSWalletConnectionErrorModal', () => (
	<SelfkeyDarkTheme>
		<LWSWalletConnectionErrorWrapper />
	</SelfkeyDarkTheme>
));
lws.addWithJSX('LWSAuthError', () => (
	<SelfkeyDarkTheme>
		<LWSAuthErrorWrapper />
	</SelfkeyDarkTheme>
));
lws.addWithJSX('LWSLoading', () => (
	<SelfkeyDarkTheme>
		<LWSLoading />
	</SelfkeyDarkTheme>
));

const addressBook = storiesOf('AddressBook', module).addDecorator(lightOnDark) as any & {
	addWithJSX: Function;
};

addressBook.addWithJSX('AddressBook', () => (
	<SelfkeyDarkTheme>
		<AddressBook
			addresses={[
				{
					id: 1,
					label: 'John',
					address: '0x4184288c556524df9cb9e58b73265ee66dca4efe'
				}
			]}
			onEdit={id => alert('onEdit' + id)}
			onDelete={id => alert('onDelete' + id)}
			onAdd={() => alert('onAdd')}
		/>
	</SelfkeyDarkTheme>
));

addressBook.addWithJSX('AddressBookAdd', () => (
	<ModalBox headerText="Add Address">
		<AddressBookAdd
			onSave={(label, address) => alert('onEdit' + label + address)}
			onCancel={() => alert('onCancel')}
			onLabelChange={label => alert('onLabelChange ' + label)}
			onAddressChange={address => alert('onAddressChange ' + address)}
			labelError="hey"
		/>
	</ModalBox>
));

addressBook.addWithJSX('AddressBookEdit', () => (
	<ModalBox headerText="Edit Label">
		<AddressBookEdit
			label="Test"
			onSave={label => alert('onEdit' + label)}
			onCancel={() => alert('onCancel')}
			onLabelChange={label => alert('onLabelChange ' + label)}
			labelError="hey"
		/>
	</ModalBox>
));

const theme = storiesOf('Selfkey Dark Theme', module).addDecorator(lightOnDark) as any & {
	addWithJSX: Function;
};

theme.addWithJSX('Colors', () => (
	<SelfkeyDarkTheme>
		<Card>
			<CardContent>
				<ColorStories />
			</CardContent>
		</Card>
	</SelfkeyDarkTheme>
));

theme.addWithJSX('Typography', () => (
	<SelfkeyDarkTheme>
		<Card>
			<CardContent>
				<TypographyStories />
				<ListStories />
			</CardContent>
		</Card>
	</SelfkeyDarkTheme>
));

theme.addWithJSX('Forms', () => (
	<SelfkeyDarkTheme>
		<Card>
			<CardContent>
				<InputStories />
				<ButtonStories />
			</CardContent>
		</Card>
	</SelfkeyDarkTheme>
));

theme.addWithJSX('Tables', () => (
	<SelfkeyDarkTheme>
		<Card>
			<CardContent>
				<TableStories />
			</CardContent>
		</Card>
	</SelfkeyDarkTheme>
));

theme.addWithJSX('UI Elements', () => (
	<SelfkeyDarkTheme>
		<Card>
			<CardContent>
				<TabStories />
				<AccordionStories />
				<SliderStory />
				<PaginationStories />
				<br />
				<FileUploadInProgressStory />
				<FileUploadStory />
			</CardContent>
		</Card>
	</SelfkeyDarkTheme>
));

theme.addWithJSX('Modals', () => (
	<SelfkeyDarkTheme>
		<Card>
			<CardContent>
				<ModalStories />
			</CardContent>
		</Card>
	</SelfkeyDarkTheme>
));

theme.addWithJSX('Date Picker', () => (
	<SelfkeyDarkTheme>
		<Card>
			<CardContent>
				<DatePickerStories />
			</CardContent>
		</Card>
	</SelfkeyDarkTheme>
));

theme.addWithJSX('Statuses', () => (
	<SelfkeyDarkTheme>
		<StatusStories />
	</SelfkeyDarkTheme>
));
