import React from "react";
import { Toggle } from "../lib/react-toggle";

export default {
	title: 'Components/Toggle/Elements',
	component: Toggle,
	parameters: {
		actions: {
			disable: true,
		},
		controls: {
			disable: true,
		},
		previewTabs: {
			'storybook/docs/panel': {
				hidden: true,
			},
		},
	},
	decorators: [
		(Story) => (
			<div className="sui-box">
				<div className="sui-box-body">
					<Story />
				</div>
			</div>
		),
	],
};

// START: Documentation components

const StoryTitle = ({ children }) => {
	const customStyles = {
		margin: 0,
		marginBottom: 10 + 'px',
		color: '#333',
		fontSize: 14 + 'px',
		lineHeight: 22 + 'px',
	};

	return <h2 style={customStyles}>{children}</h2>;
};

const StoryDescription = ({ children }) => {
	const customStyles = {
		margin: 0,
		marginBottom: 10 + 'px',
	};

	return (
		<p className="sui-description" style={customStyles}>
			{children}
		</p>
	);
};

const StoryCode = ({ spaceTop = 5, spaceBottom = 20, children }) => {
	const customStyles = {
		display: 'block',
		margin: 0,
		marginTop: spaceTop + 'px',
		marginBottom: spaceBottom + 'px',
		padding: 5 + 'px ' + 10 + 'px',
	};

	return <code style={customStyles}>{children}</code>;
};

const StorySection = ({
	title,
	description,
	code,
	code2,
	isDefault = false,
	isLast = false,
	children,
}) => {
	return (
		<>
			{title && '' !== title && (
				<StoryTitle>
					{title}
					{isDefault && (
						<span
							className="sui-tag sui-tag-sm sui-tag-yellow"
							style={{ marginLeft: 10 + 'px' }}
							aria-hidden="true"
						>
							Default
						</span>
					)}
				</StoryTitle>
			)}
			{description && '' !== description && <StoryDescription>{description}</StoryDescription>}
			{code && '' !== code && (
				<StoryCode {...(code2 && '' !== code2 && { spaceBottom: 5 })}>{code}</StoryCode>
			)}
			{code2 && '' !== code2 && <StoryCode>{code2}</StoryCode>}
			{children}
			{!isLast && <hr />}
		</>
	);
};

// END: Documentation components

export const Primary = () => {
	return (
		<>
			<StorySection
				title="Visible"
				description={
					<>
						By default, the component visually shows the label to users. Remember this property is required, since all toggles need a label.
						<StoryCode>&lt;Toggle label=&quot;Toggle Label&quot; /&gt;</StoryCode>
					</>
				}
				isDefault={true}>
				<div className="sui-border-frame">
					<Toggle
						id="primary-toggle"
						label="Toggle Label" />
				</div>
			</StorySection>

			<StorySection
				title="Hidden"
				description={
					<>
						Keeping the label is important and a priority, but there are times when the design requires to show the toggle button with a visually hidden label.
						<StoryCode>&lt;Toggle label=&quot;Toggle Label&quot; hideLabel=&#123; true &#125; /&gt;</StoryCode>
					</>
				}
				isDefault={false}
				isLast={true}>
				<div className="sui-border-frame">
					<Toggle
						id="primary-toggle-aria"
						label="Toggle Label"
						hideLabel={ true } />
				</div>
			</StorySection>
		</>
	);
}
Primary.storyName = 'Label';

export const Secondary = () => {
	return (
		<>
			<StorySection
				title="Visible"
				description={
					<>
						By default, the component visually shows the description to users.
						<StoryCode>&lt;Toggle description=&quot;The quick brown fox...&quot; /&gt;</StoryCode>
					</>
				}
				isDefault={true}>
				<div className="sui-border-frame">
					<Toggle
						id="primary-toggle"
						description="The quick brown fox..." />
				</div>
			</StorySection>

			<StorySection
				title="Hidden"
				description={
					<>
						Some times the design requires to show the toggle button only but we need to show more info about it to screen reader users; for those cases, having a visually hidden description is helpful.
						<StoryCode>&lt;Toggle description=&quot;The quick brown fox...&quot; hideDescription=&#123; true &#125; /&gt;</StoryCode>
					</>
				}
				isDefault={false}
				isLast={true}>
				<div className="sui-border-frame">
					<Toggle
						id="primary-toggle-aria"
						description="The quick brown fox..."
						hideDescription={ true }/>
				</div>
			</StorySection>
		</>
	);
}
Secondary.storyName = 'Description';

export const Tertiary = () => {
	return (
		<>
			<StorySection
				title="Hidden"
				description={
					<StoryCode>&lt;Toggle checked=&#123; false &#125;&gt; ... &lt;/Toggle&gt;</StoryCode>
				}
				isDefault={true}>
				<div className="sui-border-frame">
					<Toggle
						id="primary-toggle-close"
						label="Toggle Label">
						<div className="sui-border-frame">
							<p>Lorem ipsum dolor sit amet...</p>
						</div>
					</Toggle>
				</div>
			</StorySection>

			<StorySection
				title="Visible"
				description={
					<StoryCode>&lt;Toggle checked=&#123; true &#125;&gt; ... &lt;/Toggle&gt;</StoryCode>
				}
				isDefault={false}
				isLast={true}>
				<div className="sui-border-frame">
					<Toggle
						id="primary-toggle-open"
						label="Toggle Label"
						checked={ true }>
						<div className="sui-border-frame">
							<p>Lorem ipsum dolor sit amet...</p>
						</div>
					</Toggle>
				</div>
			</StorySection>
		</>
	);
}
Tertiary.storyName = 'Content';