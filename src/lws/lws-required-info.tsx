import * as React from 'react';
import * as _ from 'lodash';
import injectSheet, { StyleSheet, ClassNameMap } from 'react-jss';
import CommonStyle from '../common/common-style';
import { CheckIcon } from '../icons/check';
import { WarningIcon } from '../icons/warning';
import { EditIcon } from '../icons/edit';
import { LWSButton } from './lws-button';
import { Website } from './lws-common';

const styles: StyleSheet = {
	form: CommonStyle.form,

	buttonPrimary: CommonStyle.buttonPrimary,

	buttonSecondary: CommonStyle.buttonSecondary,

	requiredInfo: {
		'& a': {
			color: '#23E6FE',
			textDecoration: 'none',
			'&:hover': {
				textDecoration: 'underline',
			},
		},
	},

	areaTitle: {
		textAlign: 'center',
		'& h4': {
			fontSize: '16px',
			fontWeight: 'normal',
			padding: '0 0 40px',
			margin: '0',
			lineHeight: '22px',
			textAlign: 'left',
			color: '#FFF',
		},
	},

	attribute: {
		display: 'flex',
		flexDirection: 'row',
		padding: '0 0 30px',
		color: '#FFF',
		'& svg': {
			flex: '20px',
		},
		'& dl': {
			display: 'flex',
			justifyContent: 'space-between',
			width: '100%',
			margin: '0 0 0 15px',
			'& dd': {
				color: '#93B0C1',
				wordBreak: 'break-word',
				textAlign: 'right',
			},
		},
	},

	waringMessage: {
		color: '#FFA700',
		fontSize: '13px',
		marginTop: '-20px',
		padding: '0 0 20px 35px',
	},

	formSubmitColumn: {
		flexDirection: 'row',
		display: 'flex',
		justifyContent: 'space-between',
		'& button': {
			maxWidth: '215px',
			marginTop: '0px',
		},
	},

	tocMessage: {
		background: '#293743',
		padding: '20px',
		fontSize: '12px',
		lineHeight: '15px',
		fontFamily: 'ProximaNovaRegIt, arial, sans-serif',
		fontStyle: 'italic',
		margin: '30px 0 45px',
		color: '#FFF',
	},

	edit: {
		cursor: 'pointer',
	},
};

export type Attribute = {
	label: string;
	key: string;
	attribute?: string;
	data?: any;
	document?: boolean;
};

export type LWSRequiredInfoProps = {
	allowAction?: ((event: React.MouseEvent<HTMLElement>) => void);
	cancelAction?: ((event: React.MouseEvent<HTMLElement>) => void);
	editAction?: ((event: React.MouseEvent<HTMLElement>) => void);
	attributes: Array<Attribute>;
	required: Array<Attribute>;
	website: Website;
};

const getAttributeValue = (attribute: Attribute) => {
	if (!attribute.data) return null;
	if (attribute.document && attribute.data && attribute.data.value) {
		return 'document';
	}
	switch (attribute.key) {
		case 'birthdate':
			return new Date(Number(attribute.data.value)).toLocaleDateString('en-US');
		case 'work_place':
		case 'physical_address':
			let value = attribute.data.address1 + ', ';

			if (attribute.data.address2) {
				value += attribute.data.address2 + ', ';
			}

			value += attribute.data.city + ', ';
			value += attribute.data.region + ', ';
			value += attribute.data.zip + ', ';
			value += attribute.data.country;

			return value;
		case 'phonenumber_countrycode':
			return attribute.data.countryCode + ' ' + attribute.data.telephoneNumber;
		default:
			return attribute.data.value || null;
	}
};

const renderAttributes = (
	required: Array<Attribute>,
	attributes: Array<Attribute>,
	classes: Partial<ClassNameMap<string>>,
	editAction: ((event: React.MouseEvent<HTMLElement>) => void) | undefined
) => {
	let attrs = required.map(attr => {
		return _.find(attributes, { key: attr.key }) || attr;
	});
	return attrs.map((attribute, index) => {
		const attributeValue = getAttributeValue(attribute);
		if (attributeValue) {
			return (
				<div key={index}>
					<div className={classes.attribute}>
						<CheckIcon />
						<dl>
							<dt>{attribute.label}</dt>
							<dd>{attributeValue}</dd>
						</dl>
					</div>
				</div>
			);
		} else {
			return (
				<div key={index}>
					<div className={classes.attribute}>
						<WarningIcon />
						<dl>
							<dt>{attribute.label}</dt>
							{editAction ? (
								<dd>
									<a onClick={editAction} className={classes.edit}>
										<EditIcon />
									</a>
								</dd>
							) : null}
						</dl>
					</div>
					<div className={classes.waringMessage}>Please update your missing details.</div>
				</div>
			);
		}
	});
};

export const LWSRequiredInfo = injectSheet(styles)<LWSRequiredInfoProps>(
	({ classes, allowAction, required, cancelAction, editAction, attributes, website }) => (
		<div className={classes.requiredInfo}>
			<div className={classes.areaTitle}>
				<h4>
					<a href={website.url} target="_blank">
						<strong>{website.name}</strong>
					</a>{' '}
					would like to access this information:
				</h4>
			</div>
			<div className={classes.form}>
				{renderAttributes(required, attributes, classes, editAction)}

				<div className={classes.tocMessage}>
					By clicking "Allow", your information listed above will be used by{' '}
					<a href={website.url} target="_blank">
						{website.name}
					</a>{' '}
					with respect to their{' '}
					<a href={website.termsUrl} target="_blank">
						Terms of Service
					</a>{' '}
					and{' '}
					<a href={website.policyUrl} target="_blank">
						Privacy Policy
					</a>
					.
				</div>
				<div className={classes.formSubmitColumn}>
					<LWSButton className={classes.buttonSecondary} onClick={cancelAction}>
						Cancel
					</LWSButton>
					<LWSButton className={classes.buttonPrimary} onClick={allowAction}>
						Allow
					</LWSButton>
				</div>
			</div>
		</div>
	)
);

export default LWSRequiredInfo;
