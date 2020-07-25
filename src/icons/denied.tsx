import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({});

export const DeniedIcon = withStyles(styles)((props: SvgIconProps & WithStyles<typeof styles>) => (
    <SvgIcon style={{ width: props.width || '16px', height: props.height || '16px' }} {...props} viewBox={props.viewBox || '0 0 16 16'}>
        <title>icon-denied</title>
        <g id="💻-ID-Dashboard-icon-denied-ma" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="410-Marketplace-Applications" transform="translate(-1188.000000, -940.000000)" fill="#FE4B61">
                <g id="Content" transform="translate(150.000000, 264.000000)">
                    <g id="Collapse-box-3" transform="translate(0.000000, 655.000000)">
                        <g id="Area-Header'" transform="translate(19.000000, 14.000000)">
                            <g id="Status" transform="translate(1019.000000, 4.000000)">
                                <path d="M15.5526003,3.41106392 C15.0038326,2.86297869 14.114828,2.86297869 13.5660603,3.41106392 L8,8.97712423 L2.43393969,3.41106392 C1.88012652,2.89501543 1.01710612,2.91024242 0.481842134,3.44550641 C-0.053421854,3.9807704 -0.0686488419,4.8437908 0.447399651,5.39760397 L6.01345996,10.9636643 L0.447399651,16.5297246 C0.0713566584,16.8801251 -0.0834360482,17.4078419 0.0437468174,17.9058513 C0.170929683,18.4038607 0.559803568,18.7927346 1.05781298,18.9199175 C1.55582239,19.0471003 2.08353918,18.8923076 2.43393969,18.5162646 L8,12.9502043 L13.5660603,18.5162646 C13.9164608,18.8923076 14.4441776,19.0471003 14.942187,18.9199175 C15.4401964,18.7927346 15.8290703,18.4038607 15.9562532,17.9058513 C16.083436,17.4078419 15.9286433,16.8801251 15.5526003,16.5297246 L9.98654004,10.9636643 L15.5526003,5.39760397 C16.1006856,4.84883625 16.1006856,3.95983164 15.5526003,3.41106392 L15.5526003,3.41106392 Z" id="icon-denied-ma"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </SvgIcon>
));

export default DeniedIcon;
