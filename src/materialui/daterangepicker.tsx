import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file

const styles = createStyles({
    sanyi: {
        '& .rdrDefinedRangesWrapper': {
            backgroundColor: '#1E262E',
            borderRight: '1px solid #313D49',
            fontFamily: 'Lato',
            width: '222px'
        },
        '& .rdrCalendarWrapper': {
            backgroundColor: '#1E262E',
            fontFamily: 'Lato',
            width: '300px'
        },
        '& .rdrStaticRange': {
            backgroundColor: 'transparent',
            border: 0,
            padding: '15px 22px 0'
        },
        '& .rdrStaticRangeLabel': {
            backgroundColor: '#313D49',
            borderRadius: '4px',
            color: '#93B0C1',
            display: 'flex',
            fontFamily: 'Lato',
            fontSize: '12px',
            padding: '5px 15px',
            textTransform: 'uppercase',
            width: '178px'
        },
        '& .rdrStaticRangeLabel:hover': {
            backgroundColor: '#09A8BA',
            color: '#fff',
            cursor: 'pointer'
        },
        '& .rdrInputRanges': {
            display: 'none'
        },
        '& .rdrInputRangeInput': {
            display: 'none'
        },
        '& .rdrMonth': {
            padding: '0 12px',
            width: 'inherit'
        },
        '& .rdrWeekDays': {
            marginBottom: '10px'
        },
        '& .rdrWeekDay': {
            color: '#93B0C1'
        },
        '& .rdrNextPrevButton': {
            // color: '#697C95',
            // verticalAlign: 'sub',
            // userSelect: 'none',
            // width: '40px',
            display: 'block',
            width: '24px',
            height: '24px',
            margin: '0 0.833em',
            padding: 0,
            border: 0,
            borderRadius: '5px',
            background: '#EFF2F7',
            // &:hover{
            //     background: #E1E7F0,
            // }
            // i {
                // }
        },
        '& .rdrNextButton i': {
            margin: '0 0 0 7px',
            borderWidth: '4px 4px 4px 6px',
            borderColor: 'transparent transparent transparent rgb(52, 73, 94)',
            transform: 'translate(3px, 0px)',
        },
        '& .NextPrevButton i': {
            display: 'block',
            width: 0,
            color: 'red',
            height: 0,
            padding: 0,
            textAlign: 'center',
            borderStyle: 'solid',
            margin: 'auto',
            transform: 'translate(-3px, 0px)',
        },
        '& .NextPrevButton:hover': {
            color: 'white',
        },
        '& .NextPrevButton span': {
            fontSize: '2.2em',
            verticalAlign: 'sub',
        },

        '& .rdrDays': {
            marginBottom: '20px'
        },        
        '& .rdrDay': {
            backgroundColor: 'transparent',
            border: 0,
            color: '#fff !important',
            cursor: 'pointer',
            fontWeight: 600,
            margin: '8px 0',
            padding: '4px 10px',
            textAlign: 'center',
        },
        '& .rdrDay:hover': {
            backgroundColor: '#00C0D9 !important',
            borderRadius: '3px',
            color: '#fff !important'
        },
        '& .rdrDayPassive': {
            color: 'rgba(147, 164, 175, 0.3) !important'
        },
        '& .rdrDayNumber span': {
            color: 'inherit'
        }
    }
});

export type KeyRangePickerProps = any;

export const KeyRangePicker = withStyles(styles)(
    ({ classes, ...props }: KeyRangePickerProps & WithStyles<typeof styles>) => {

        const selectionRange = {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }

        return (
            <div className={classes.sanyi}>
                <DateRangePicker
                    ranges={[selectionRange]}
                    // twoStepChange={false}
                    // weekdayDisplayFormat='EEEEEE'
                    // onChange={this.handleSelect}
                />
            </div>
        )
    }
);

export default KeyRangePicker;
