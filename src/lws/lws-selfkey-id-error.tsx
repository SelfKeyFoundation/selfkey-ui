import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { LWSButton } from './lws-button';
import CommonStyle from '../common/common-style';
import { ShieldIcon } from '../icons/shield';
import { LWSError } from './lws-error';

const styles = createStyles({
    buttonPrimary: { ...CommonStyle.buttonPrimary, fontWeight: 700 },
    buttonSecondary: { ...CommonStyle.buttonSecondary, fontWeight: 700 },
});

export type LWSSelfkeyIdErrorProps = {
    retryAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};

export const LWSSelfkeyIdError = withStyles(styles)(({ classes, retryAction }: LWSSelfkeyIdErrorProps & WithStyles<typeof styles>) => (
    <LWSError
        actionIcon={<ShieldIcon />}
        actionName="Action Required"
        errorName="Create & Unlock Your SelfKey ID"
        supportText="A SelfKey ID is required to securely authenticate your identity with this website. Please create one in the SelfKey Identity Wallet and keep it open to proceed."
        actionButton={
            <LWSButton className={classes.buttonSecondary} onClick={retryAction}>
                Retry
            </LWSButton>
        }
    />
));

export default LWSSelfkeyIdError;
