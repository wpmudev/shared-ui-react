import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import logo from './logo.png';
import '../assets/global.css';

const customTheme = create({
	// Base theme.
	base: 'light',
	colorPrimary: 'hsl(213, 68%, 11%)',
	colorSecondary: 'hsl(214, 84%, 56%)',

	// Branding.
	brandTitle: 'Shared UI React',
	brandImage: logo,
	brandUrl: 'https://github.com/wpmudev/shared-ui-react/',

	// Main UI.
	appBg: 'hsl(213, 68%, 11%)',
	appBorderColor: 'hsl(0, 0%, 90%)',

	// Toolbar UI.
	barTextColor: 'hsl(0, 0%, 67%)',
	barSelectedColor: 'hsl(214, 84%, 56%)',
	barBg: 'hsl(0, 0%, 100%)',
});

addons.setConfig({
	theme: customTheme,
	isFullscreen: false,
	showNav: true,
	showPanel: true,
	panelPosition: 'bottom',
	initialActive: 'canvas',
});