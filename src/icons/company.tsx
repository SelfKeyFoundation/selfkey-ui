import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
  root: {
    width: '38px !important',
    height: '35px !important'
  }
};

export const CompanyIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps)=> (
  <SvgIcon {...props} viewBox='0 0 38 35'>
    <g id="Corporate-Vault-company" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="802---Add-New-Member" transform="translate(-755.000000, -594.000000)" fill="#23E6FE" fillRule="nonzero">
            <g id="Modal" transform="translate(240.000000, 142.000000)">
                <g id="Type" transform="translate(250.000000, 378.000000)">
                    <g id="Radio-button-replace" transform="translate(0.000000, 51.000000)">
                        <g id="Btn-harware" transform="translate(245.000000, 0.000000)">
                            <path d="M56.3113157,31.4904839 L40.2873492,23.3377286 C39.4008376,22.8874238 37.9176514,22.8874238 37.0307252,23.3377286 L21.0071734,31.4904839 C20.432475,31.7823942 20,32.4881204 20,33.1316499 L20,34.7126923 C20,35.5681055 20.6966041,36.2651242 21.5524319,36.2651242 L24.2161131,36.2651242 L24.2161131,38.6829208 C24.2161131,39.2360576 24.6664179,39.6859477 25.2195547,39.6859477 L25.3849981,39.6859477 L25.3849981,48.3084961 L25.2195547,48.3084961 C24.6664179,48.3084961 24.2161131,48.7583862 24.2161131,49.3119376 L24.2161131,51.7313928 L22.6081188,51.7313928 C21.170129,51.7313928 20,52.9011071 20,54.3395115 L20,55.3918812 C20,56.829871 21.170129,58 22.6081188,58 L54.7099556,58 C56.1479454,58 57.3180744,56.829871 57.3180744,55.3918812 L57.3180744,54.3395115 C57.3180744,52.9011071 56.1479454,51.7313928 54.7099556,51.7313928 L53.1019613,51.7313928 L53.1019613,49.3119376 C53.1019613,48.7583862 52.6516565,48.3084961 52.0985197,48.3084961 L51.9330763,48.3084961 L51.9330763,39.6859477 L52.0985197,39.6859477 C52.6516565,39.6859477 53.1019613,39.2360576 53.1019613,38.6829208 L53.1019613,36.2651242 L55.7660571,36.2651242 C56.6214703,36.2651242 57.3180744,35.5681055 57.3180744,34.7126923 L57.3180744,33.1316499 C57.3180744,32.4881204 56.8855994,31.7823942 56.3113157,31.4904839 Z M54.7099556,52.9346934 C55.4840984,52.9346934 56.1143592,53.5649542 56.1143592,54.3395115 L56.1143592,55.3918812 C56.1143592,56.166024 55.4840984,56.7966994 54.7099556,56.7966994 L22.6081188,56.7966994 C21.833976,56.7966994 21.2037152,56.166024 21.2037152,55.3918812 L21.2037152,54.3395115 C21.2037152,53.5649542 21.833976,52.9346934 22.6081188,52.9346934 L54.7099556,52.9346934 Z M25.5856864,38.4822325 L25.4206576,38.4822325 L25.4206576,36.2651242 L30.4615002,36.2651242 L30.4615002,38.4163039 L30.2964714,38.4163039 C29.7433346,38.4163039 29.2930298,38.8670233 29.2930298,39.4197454 L29.2930298,48.4440851 C29.2930298,48.9976365 29.7433346,49.4475266 30.2964714,49.4475266 L30.4615002,49.4475266 L30.4615002,51.7313928 L25.420243,51.7313928 L25.420243,49.5122113 L25.5852718,49.5122113 C26.1379939,49.5122113 26.5887134,49.0623212 26.5887134,48.5091844 L26.5887134,39.485674 C26.589128,38.9321226 26.1384086,38.4822325 25.5856864,38.4822325 Z M35.9373056,39.6204337 L36.1023345,39.6204337 L36.1023345,48.2433968 L35.9373056,48.2433968 C35.3845835,48.2433968 34.9342787,48.6932869 34.9342787,49.2468383 L34.9342787,51.7313928 L31.6648008,51.7313928 L31.6648008,49.2468383 C31.6648008,48.6932869 31.2153253,48.2433968 30.6621885,48.2433968 L30.496745,48.2433968 L30.496745,39.6204337 L30.6621885,39.6204337 C31.2153253,39.6204337 31.6648008,39.1705436 31.6648008,38.6174068 L31.6648008,36.2651242 L34.9342787,36.2651242 L34.9342787,38.6174068 C34.9342787,39.1705436 35.3845835,39.6204337 35.9373056,39.6204337 Z M36.3030228,38.4167185 L36.1375793,38.4167185 L36.1375793,36.2655388 L41.1788365,36.2655388 L41.1788365,38.4826471 L41.014637,38.4826471 C40.4610855,38.4826471 40.0116101,38.9325372 40.0116101,39.4860887 L40.0116101,48.5100137 C40.0116101,49.0631505 40.4610855,49.5130406 41.014637,49.5130406 L41.1788365,49.5130406 L41.1788365,51.7322221 L36.1375793,51.7322221 L36.1375793,49.4483559 L36.3030228,49.4483559 C36.8565742,49.4483559 37.3060497,48.9984658 37.3060497,48.4449144 L37.3060497,39.4201601 C37.3060497,38.8674379 36.8565742,38.4167185 36.3030228,38.4167185 Z M46.6558859,39.6859477 L46.8209147,39.6859477 L46.8209147,48.3084961 L46.6558859,48.3084961 C46.1027491,48.3084961 45.6532736,48.7583862 45.6532736,49.3119376 L45.6532736,51.7313928 L42.3825517,51.7313928 L42.3825517,49.3119376 C42.3825517,48.7583862 41.932247,48.3084961 41.3791102,48.3084961 L41.2153253,48.3084961 L41.2153253,39.6859477 L41.3791102,39.6859477 C41.932247,39.6859477 42.3825517,39.2360576 42.3825517,38.6829208 L42.3825517,36.2651242 L45.6532736,36.2651242 L45.6532736,38.6829208 C45.6532736,39.2360576 46.1027491,39.6859477 46.6558859,39.6859477 Z M47.021603,38.4822325 L46.8569888,38.4822325 L46.8569888,36.2651242 L51.8978314,36.2651242 L51.8978314,38.4822325 L51.7328026,38.4822325 C51.1796658,38.4822325 50.729361,38.9321226 50.729361,39.485674 L50.729361,48.509599 C50.729361,49.0627358 51.1796658,49.5126259 51.7328026,49.5126259 L51.8978314,49.5126259 L51.8978314,51.7318074 L46.8569888,51.7318074 L46.8569888,49.5126259 L47.021603,49.5126259 C47.5751545,49.5126259 48.0250446,49.0627358 48.0250446,48.509599 L48.0250446,39.485674 C48.0250446,38.9321226 47.5751545,38.4822325 47.021603,38.4822325 Z M56.1143592,34.7126923 C56.1143592,34.9042584 55.9580379,35.061409 55.7660571,35.061409 L21.5524319,35.061409 C21.3600365,35.061409 21.2037152,34.9042584 21.2037152,34.7126923 L21.2037152,33.1316499 C21.2037152,32.9417423 21.3832566,32.6494174 21.5524319,32.5631712 L37.576813,24.4112452 C37.8504789,24.272339 38.2443919,24.1927271 38.6590372,24.1927271 C39.0736825,24.1927271 39.4680101,24.272339 39.7408467,24.4112452 L55.7656425,32.5631712 C55.9348178,32.6494174 56.1139445,32.9413277 56.1139445,33.1316499 L56.1139445,34.7126923 L56.1143592,34.7126923 Z" id="icon-company-cv"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
  </SvgIcon>
));

export default CompanyIcon;
