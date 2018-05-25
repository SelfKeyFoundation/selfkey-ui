import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import jssInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles } from 'react-with-styles';

import MyTheme from './my-theme';

ThemedStyleSheet.registerTheme(MyTheme);
ThemedStyleSheet.registerInterface(jssInterface);

export { css, withStyles, ThemedStyleSheet }; 