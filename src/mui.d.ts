import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

declare module '@material-ui/core/styles/createMuiTheme' {
	interface Theme {
		'@global': any;
	}
	// allow configuration using `createMuiTheme`
	interface ThemeOptions {
		'@global'?: any;
	}
}
