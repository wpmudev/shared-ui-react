import React from "react";
import { Snippets } from "../lib/react-snippets";

export default {
	title: "Components/Snippets"
};

const Template = ({ ...props }) => {
	return <Snippets {...props} />;
};

export const primary = Template.bind({});
primary.storyName = "Default";
primary.args = {
	content: `<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>`,
	copy: true
};

export const secondary = Template.bind({});
secondary.storyName = "No-Copy Button";
secondary.args = {
	...primary.args,
	copy: false
};
