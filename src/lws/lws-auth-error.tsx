import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { LWSButton } from './lws-button';
import CommonStyle from '../common/common-style';
import { ShieldIcon } from '../icons/shield';
import { LWSError } from './lws-error';
import { Website } from './lws-common';

const styles = createStyles({
    buttonPrimary: { ...CommonStyle.buttonPrimary, fontWeight: 700 },
    buttonSecondary: { ...CommonStyle.buttonSecondary, fontWeight: 700 },
});

export type LWSAuthErrorProps = {
    website: Website;
    retryAction?: ((event: React.MouseEvent<HTMLElement>) => void);
};

export const LWSAuthError = withStyles(styles)(({ classes, website, retryAction }: LWSAuthErrorProps & WithStyles<typeof styles>) => (
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
