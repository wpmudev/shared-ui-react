import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const customTheme = create({
	base: 'light',
	brandTitle: 'Shared UI React',
});

addons.setConfig({
	theme: customTheme,
});
