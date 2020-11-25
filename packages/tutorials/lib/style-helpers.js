const screen = {
	mobile: '480px',
	tablet: '783px',
	laptop: '1200px',
	desktop: '1500px',
};

export const device = {
	mobile: `(min-width: ${screen.mobile})`,
	tablet: `(min-width: ${screen.tablet})`,
	laptop: `(min-width: ${screen.laptop})`,
	desktop: `(min-width: ${screen.desktop})`,
};