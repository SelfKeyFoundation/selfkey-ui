import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import { LWSButton } from './lws-button';
import CommonStyle from '../common/common-style';
import { ShieldIcon } from '../icons/shield';
import { LWSError } from './lws-error';
import { Website } from './lws-common';

const styles: StyleSheet = {
	buttonPrimary: CommonStyle.buttonPrimary,

	buttonSecondary: CommonStyle.buttonSecondary,
};

export type LWSAuthErrorProps = {
	website: Website;
	retryAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};

export const LWSAuthError = injectSheet(styles)<LWSAuthErrorProps>(({ classes, website, retryAction }) => (
	<LWSError
		actionIcon={<ShieldIcon />}
		actionName="Authentication Error"
		errorName={`We can't connect you with ${website.name}`}
		supportText="There’s seems to be a problem with the authentication process at the moment. Please try again!"
		actionButton={
			<LWSButton className={classes.buttonSecondary} onClick={retryAction}>
				Retry
			</LWSButton>
		}
	/>
));

export default LWSAuthError;
