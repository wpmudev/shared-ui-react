import React, { Children } from 'react';
import { linkTo } from '@storybook/addon-links';
import { Button } from '@wpmudev/react-button';

import './css/page.css';
import './css/banner.css';
import './css/article.css';
import './css/section.css';
import './css/actions.css';

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

const Article = ({ heading, subheading, children }) => {
	return (
		<div className="article">
			<h1 className="article__heading">{ heading }</h1>

			<div className="article__content">
				<h2 className="article__subheading">{ subheading }</h2>

				<div className="article__inner-content">
					{ children }
				</div>
			</div>

			<div className="article__footer">
				<p>© 2021-2022 Project by <a href="http://incsub.com/" target="_blank" rel="nofollow">Incsub</a></p>
			</div>
		</div>
	);
};

const Section = ({ title, children }) => {
	return (
		<div className="section">
			<h3 className="section__title">{ title }</h3>
			{ children }
		</div>
	);
};

const LinkBanner = ({ title, subtitle, link }) => {
	const hasTitle = title && '' !== title;
	const hasSubtitle = subtitle && '' !== subtitle;
	const hasLink = link && '' !== link;

	return (
		<>
			{ hasTitle && hasLink && (
				<button className="link-banner" onClick={ linkTo( link ) }>
					<span className="link-banner__title">{ title }</span>

					{ hasSubtitle && (
						<span className="link-banner__subtitle">{ subtitle }</span>
					)}

					<span className="link-banner__icon sui-icon-chevron-right sui-lg" aria-hidden="true" />
				</button>
			)}
		</>
	);
};

const LinkBannerList = ({ children }) => {
	const bannerItems = Children.map( children, ( child, key ) => {

		return (
			<LinkBanner
				key={ key }
				title={ child.props.title }
				subtitle={ child.props.subtitle }
				link={ child.props.link }
			/>
		);
	} );

	return (
		<div className="link-banner__container">
			{ bannerItems }
		</div>
	);
};

export {
	WelcomePage,
	WelcomeBanner,
	Article,
	Section,
	LinkBanner,
	LinkBannerList
};