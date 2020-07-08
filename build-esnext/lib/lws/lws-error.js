import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import CommonStyle from '../common/common-style';
const styles = createStyles({
    form: CommonStyle.form,
    lwsError: {
        fontFamily: 'Lato, arial, sans-serif'
    },
    formSubmitRow: {
        marginTop: '15px',
        '& button': {
            marginTop: '30px',
            fontWeight: 700
        },
    },
    supportText: {
        textAlign: 'center',
        lineHeight: '22px',
        fontFamily: 'Lato, arial, sans-serif',
        color: '#C5DCE9',
        padding: '0 0 30px',
        fontSize: '16px'
    },
    areaTitle: {
        textAlign: 'center',
        '& h2': {
            textTransform: 'uppercase',
            fontWeight: 'normal',
            fontSize: '16px',
            padding: '25px 0',
            margin: 0,
            color: '#D97300',
        },
        '& h3': {
            fontWeight: 'normal',
            fontSize: '21px',
            padding: '0 0 45px',
            margin: 0,
            color: '#93B0C1',
        },
    },
});
export const LWSError = withStyles(styles)(({ classes, actionButton, actionName, errorName, actionIcon, supportText }) => (React.createElement("div", { className: classes.lwsError },
    React.createElement("div", { className: classes.areaTitle },
        actionIcon,
        React.createElement("h2", null, actionName),
        React.createElement("h3", null, errorName)),
    React.createElement("div", { className: classes.form },
        React.createElement("p", { className: classes.supportText }, supportText),
        actionButton ? React.createElement("div", { className: classes.formSubmitRow }, actionButton) : null))));
export default LWSError;
//# sourceMappingURL=lws-error.js.map