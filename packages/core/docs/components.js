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

const Log = ({ title, date, link, isLatest = false, children }) => {
	const hasTitle = title && '' !== title;
	const hasLink = link && '' !== link;
	const hasDate = date && '' !== date;

	return (
		<div className="log">
			{ hasTitle && !hasLink && (
				<h3 className="log__title">{ hasDate ? `${ title } (${ date })` : `${ title }` }{ isLatest && (
					<span className="sui-tag sui-tag-purple">Latest</span>
				)}</h3>
			)}
			{ hasTitle && hasLink && (
				<h3 className="log__title"><a href={ link } target="_blank" rel="nofollow">{ title }</a>{ hasDate && ` (${ date })`}{ isLatest && (
					<span className="sui-tag sui-tag-purple">Latest</span>
				)}</h3>
			)}
			<div className="log__group sui-box">{ children }</div>
		</div>
	);
};

const LogList = ({ label, children }) => {
	const logListItems = Children.map( children, ( child, key ) => {
		const packages = child.props.packages;
		const hasPackages = 'undefined' !== typeof packages;

		const listPackages = Children.map( packages, ( pack, idx ) => {
			idx++;
			return <><code key={ idx } className="log__package">react-{ pack }</code>{ idx < packages.length ? ', ' : '' }</>;
		});

		return (
			<>
				{ hasPackages && (
					<li className="log__list-folder">
						<span class="sui-icon-folder sui-sm" aria-hidden="true" /> { listPackages }
						<ul className="log__sublist">
							<li key={ key }>{ child.props.name }</li>
						</ul>
					</li>
				)}
				{ !hasPackages && (
					<li key={ key }>{ child.props.name }</li>
				)}
			</>
		);
	} );

	let logLabel = '';

	switch ( label ) {
		case 'break':
			logLabel = <h5 className="log__subtitle">Breaking Changes</h5>;
			break;

		case 'new':
			logLabel = <h5 className="log__subtitle">New Features</h5>;
			break;

		case 'improvement':
			logLabel = <h5 className="log__subtitle">Improvements</h5>;
			break;

		case 'accessibility':
			logLabel = <h5 className="log__subtitle">Accessibility</h5>;
			break;

		case 'bug':
			logLabel = <h5 className="log__subtitle">Bug Fixes</h5>;
			break;

		case 'documentation':
			logLabel = <h5 className="log__subtitle">Documentation</h5>;
			break;

		case 'internal':
			logLabel = <h5 className="log__subtitle">Internal</h5>;
			break;

		default:
			// nothing.
			break;
	}

	return (
		<div className="log__group-item">
			{ logLabel || '' }
			<ul className="log__list">
				{ logListItems }
			</ul>
		</div>
	);
};

export {
	WelcomePage,
	WelcomeBanner,
	Article,
	Section,
	LinkBanner,
	LinkBannerList,
	Log,
	LogList
};