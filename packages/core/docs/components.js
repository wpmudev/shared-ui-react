import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Button } from '@wpmudev/react-button';

import './css/page.css';
import './css/banner.css';
import './css/article.css';

const WelcomePage = ({ children }) => {
	return (
		<div className="welcome-page">
			<div className="welcome-page__inner">
				{ children }
			</div>
		</div>
	);
};

const WelcomeBanner = ({ heading, subheading, ctaLabel, ctaLink }) => {
	const hasHeading = heading && '' !== heading;
	const hasSubheading = subheading && '' !== subheading;
	const hasCtaLabel = ctaLabel && '' !== ctaLabel;
	const hasCtaLink = ctaLink && '' !== ctaLink;
	const hasAction = hasCtaLabel && hasCtaLink;

	return (
		<div className="banner banner--gradient">
			<div className="banner__container">
				<div className="banner__inner-container">
					{ hasHeading && (
						<h1 className="banner__heading">{ heading }</h1>
					)}
					{ hasSubheading && (
						<h2 className="banner__subheading">{ subheading }</h2>
					)}
					{ hasAction && (
						<Button label={ ctaLabel } className="banner__action" onClick={ linkTo( ctaLink ) } />
					)}
				</div>
			</div>
		</div>
	);
};

const Article = ({ title, children }) => {
	return (
		<div className="article">
			<h1 className="article__title">{ title }</h1>
			{ children }
		</div>
	);
};

export {
	WelcomePage,
	WelcomeBanner,
	Article
};