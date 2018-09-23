import * as React from 'react';
import injectSheet, { StyleSheet } from 'react-jss';
import { LWSButton } from './lws-button';
import CommonStyle from '../common/common-style';
import { ShieldIcon } from '../icons/shield';
import { LWSError } from './lws-error';

const styles: StyleSheet = {
	buttonPrimary: { ...CommonStyle.buttonPrimary, fontWeight: 700 },
	buttonSecondary: { ...CommonStyle.buttonSecondary, fontWeight: 700 },
};

export type LWSWssErrorProps = {
	retryAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};

export const LWSWssError = injectSheet(styles)<LWSWssErrorProps>(({ classes, children, retryAction }) => (
	<LWSError
		actionIcon={<ShieldIcon />}
		actionName="Action Required"
		errorName="Secure Websocket Connection"
		supportText="A secure websocket connection required to communication with the SelfKey Identity Wallet. Please follow the prompts to allow a certificate to be installed and try again."
		actionButton={
			<LWSButton className={classes.buttonSecondary} onClick={retryAction}>
				Retry
			</LWSButton>
		}
	/>
));

export default LWSWssError;
