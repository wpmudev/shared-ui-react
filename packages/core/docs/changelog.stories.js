import React, { Children } from 'react';
import { WelcomePage, Article } from './components';

import './css/log.css';

export default {
	title: "Changelog",
	parameters: {
		notes: {
			disable: true,
		},
		previewTabs: {
			'storybook/docs/panel': {
				hidden: true,
			},
		},
	},
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

export const Changelog = () => {
	return (
		<WelcomePage>
			<Article
				heading="Latest Releases"
				subheading={
					[
						"SUI React parts are versioned and released using Node Package Manager. NPM's ",
						<a href="https://www.npmjs.com/org/wpmudev" target="_blank" rel="nofollow">organization page</a>,
						' lists all packages available and their most recent versions.'
					]
				}
			>
				<Log
					title="1.8.0"
					date="2022-01-30"
					link="https://github.com/wpmudev/shared-ui/compare/v1.7.0...v1.8.0"
					isLatest={ true }>
					<LogList label="new">
						<div
							packages={[ 'progress-bar' ]}
							name="Create new component." />

						<div
							packages={[ 'button' ]}
							name="Allow icon to be placed at left or right of label." />

						<div
							packages={[ 'input' ]}
							name="Allow error class/state." />
					</LogList>

					<LogList label="improvement">
						<div
							packages={[ 'modal' ]}
							name="Trap focus without external library" />
					</LogList>

					<LogList label="bug">
						<div
							packages={[ 'post' ]}
							name={
								[
									'Misaligned description when ',
									<code>reading time</code>,
									' is missing.'
								]
							} />
					</LogList>

					<LogList label="internal">
						<div name="Update change log file to new structure." />
						<div name="Styled components can't be loaded multiple times." />
						<div name="Update change log labels." />
					</LogList>
				</Log>
			</Article>
		</WelcomePage>
	);
};

// export const Intro = () => {
// 	return (
// 		<WelcomePage>
// 			<Article
// 				heading="What's New"
// 				subheading={
// 					[
// 						'This section is updated regularly with new content to help you stay up to date with the latest ',
// 						<a href="">roadmap updates</a>,
// 						' and ',
// 						<a href="">releases</a>,
// 						' from the SUI React team. In the future we plan to include ',
// 						<strong>articles</strong>,
// 						' with helpful tips.'
// 					]
// 				}
// 			>
// 				<Section>
// 					<LinkBannerList>
// 						<div
// 							title="Monthly updates"
// 							subtitle="?path=/story/what-s-new--updates"
// 							link="updates" />

// 						<div
// 							title="Latest releases (changelog)"
// 							subtitle="?path=/story/what-s-new--changelog"
// 							link="changelog" />

// 						<div
// 							title="Our roadmap"
// 							subtitle="?path=/story/what-s-new--roadmap"
// 							link="roadmap" />
// 					</LinkBannerList>
// 				</Section>
// 			</Article>
// 		</WelcomePage>
// 	);
// };