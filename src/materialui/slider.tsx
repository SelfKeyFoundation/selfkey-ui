import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core';

export const KeySlider = withStyles({
    root: {
        margin: '20px 0 33px',
    },
    track: {
        borderRadius: '6px',
        height: '10px',
    },
    trackAfter: {
        backgroundColor: '#313D49',
        opacity: 1,
    },
    thumb: {
        height: '18px',
        width: '18px',
    }
})(Slider);
