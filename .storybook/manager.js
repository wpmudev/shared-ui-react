import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import Logo from '../assets/logo.svg';
import '../assets/global.css';

const customTheme = create({
	base: 'light',
	brandTitle: 'Shared UI React',
	brandUrl: 'https://wpmudev.github.io/shared-ui-react/',
  	brandImage: Logo,
	appBg: '#091A2F',
	fontBase: 'Roboto,Arial,sans-serif',
});

addons.setConfig({
	theme: customTheme
});