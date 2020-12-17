import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/styles';
import { ClassNameMap } from '@material-ui/styles/withStyles';
import {
	Grid,
	Button,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	IconButton,
	Typography
} from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AddressBookIcon from '../icons/address-book';
import CopyIcon from '../icons/copy';
import DeleteIcon from '../icons/delete';
import EditTransparentIcon from '../icons/edit-transparent';

const styles = createStyles({
	addressBook: {
		width: '1140px'
	},
	button: {
		height: '44px',
		width: '180px',
		border: '2px solid #1CA9BA',
		borderRadius: '3px',
		boxShadow: 'inset 3px 3px 10px 0 rgba(0,0,0,0.1)',
		color: '#1CA9BA',
		fontSize: '16px',
		fontWeight: 'bold',
		letterSpacing: '0.67px',
		lineHeight: '19px',
		textAlign: 'center'
	},
	descriptionText: {
		color: '#93B0C1',
		fontSize: '18px',
		lineHeight: '28px',
		textAlign: 'center'
	},
	table: {
		borderSpacing: '0px',
		minWidth: '900px',
		'& tbody tr:nth-child(odd)': {
			background: '#262f39'
		}
	},
	headerTableRow: {
		height: '38px',
		'& th': {
			fontSize: '12px',
			fontWeight: 600,
			textAlign: 'left',
			color: '#7f8fa4',
			textTransform: 'uppercase',
			borderBottom: '0px',
			paddingLeft: '0px'
		},
		'& th:first-child': {
			paddingLeft: '24px !important'
		}
	},
	bodyTableRow: {
		height: '74px',
		cursor: 'pointer',
		'& td': {
			padding: '0px',
			fontSize: '15px',
			textAlign: 'left',
			color: '#ffffff',
			borderBottom: '0px'
		},
		'& td:first-child': {
			paddingLeft: '24px !important'
		}
	}
});

export type AddressBook = {
	id: number;
	label: string;
	address: string;
};

export type AddressBookProps = {
	addresses: AddressBook[];
	onEdit: (id: number) => void;
	onDelete: (id: number) => void;
	onAdd: () => void;
};

const renderAddresses = (
	addresses: AddressBook[],
	classes: Partial<ClassNameMap<string>>,
	onEdit: (id: number) => void,
	onDelete: (id: number) => void
) => {
	return addresses.map((address, index) => {
		return (
			<TableRow key={index} className={classes.bodyTableRow}>
				<TableCell id={address.label}>{address.label}</TableCell>
				<TableCell>{address.address}</TableCell>
				<TableCell>
					<Grid container direction="row" justify="flex-start" alignItems="center">
						<Grid item>
							<IconButton>
								<CopyToClipboard text={address.address}>
									<CopyIcon />
								</CopyToClipboard>
							</IconButton>
						</Grid>
						<Grid item>
							<IconButton id="editButton" onClick={() => onEdit(address.id)}>
								<EditTransparentIcon />
							</IconButton>
						</Grid>
						<Grid item>
							<IconButton id="deleteButton" onClick={() => onDelete(address.id)}>
								<DeleteIcon />
							</IconButton>
						</Grid>
					</Grid>
				</TableCell>
			</TableRow>
		);
	});
};

export const AddressBook = withStyles(styles)(
	({
		classes,
		addresses,
		onEdit,
		onDelete,
		onAdd
	}: AddressBookProps & WithStyles<typeof styles>) => (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			className={classes.addressBook}
			spacing={2}
		>
			<Grid item>
				<AddressBookIcon />
			</Grid>
			<Grid item>
				<Typography variant="h1">Address Book</Typography>
			</Grid>
			<Grid item>
				<Typography variant="body1" className={classes.descriptionText}>
					Create and assign labels to save commonly used Ethereum addresses when sending
					assets from the SelfKey Identity Wallet.
				</Typography>
			</Grid>
			<Grid item>
				<Button id="addAddressButton" className={classes.button} onClick={onAdd}>
					ADD ADDRESS
				</Button>
			</Grid>
			<Grid item>
				<Table className={classes.table}>
					<TableHead>
						<TableRow className={classes.headerTableRow}>
							<TableCell>LABEL</TableCell>
							<TableCell>ETH ADDRESS</TableCell>
							<TableCell align="right">ACTIONS</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>{renderAddresses(addresses, classes, onEdit, onDelete)}</TableBody>
				</Table>
			</Grid>
		</Grid>
	)
);

export default AddressBook;
