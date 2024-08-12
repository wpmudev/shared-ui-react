import React from "react";
import { Box, BoxHeader } from '../lib/box';
import { Button } from '@wpmudev/react-button';

// Import documentation.
import DocsHeader from "./notes/docs-header.md";

export default {
	title: "Containers/Box/Elements/Header",
	component: BoxHeader
};

const Template = args => {
	return (
		<Box>
			<BoxHeader {...args} />
		</Box>
	);
};

export const SimpleHeader = Template.bind({});
SimpleHeader.storyName = 'Title Only';
SimpleHeader.args = {
    title: 'Box Title'
};
SimpleHeader.argTypes = {
	title: {
		type: {
			name: 'string',
			required: false
		},
		description: 'Assign a title to your box.',
		control: {
			type: 'text'
		}
	},
	titleIcon: {
		type: {
			name: 'string',
			required: false
		},
		description: 'Enter the icon name you can find listed [here](https://wpmudev.github.io/shared-ui/icons/).',
		control: {
			type: 'text'
		}
	},
	tagLabel: {
		type: {
			name: 'string',
			required: false
		},
		description: 'Some boxes might contain title followed by a tag to highlight some content as "beta" feature or items count.',
		control: {
			type: 'text'
		}
	},
	tagColor: {
        type: {
            name: 'string',
            required: false
        },
        description: 'By default **tags background** color is a subtle `light gray` but you can change this for any of the options suggested in the control selector: red, yellow, green, blue, purple. You can also leave this option empty, or simply not include it, to get default color.',
		control: {
			type: 'select',
			options: {
				default: '',
				red: 'red',
				yellow: 'yellow',
				green: 'green',
				blue: 'blue',
				purple: 'purple'
			}
		}
	},
	tagSize: {
        type: {
            name: 'string',
            required: false
        },
        description: 'By default ',
		control: {
			type: 'select',
			options: {
				default: '',
				small: 'small',
			}
		}
	},
	display: {
        type: {
            name: 'string',
            required: false
        },
        description: 'Description goes here...',
        control: {
            type: 'select',
            options: {
                block: 'block',
                inline: 'inline'
            }
        },
    },
    alignment: {
        type: {
            name: 'string',
            required: false
        },
        description: 'Description goes here...',
        control: {
            type: 'select',
            options: {
                default: '',
                center: 'center',
                right: 'right',
            }
        },
    },
	paddingTop: {
		type: {
			name: 'string',
			required: false
		},
		description: 'Description goes here...',
		control: {
			type: 'number',
			min: 0
		}
	},
	paddingRight: {
		type: {
			name: 'string',
			required: false
		},
		description: 'Description goes here...',
		control: {
			type: 'number',
			min: 0
		}
	},
	paddingBottom: {
		type: {
			name: 'string',
			required: false
		},
		description: 'Description goes here...',
		control: {
			type: 'number',
			min: 0
		}
	},
	paddingLeft: {
		type: {
			name: 'string',
			required: false
		},
		description: 'Description goes here...',
		control: {
			type: 'number',
			min: 0
		}
	},
	border: {
		type: {
			name: 'string',
			required: false
		},
		description: 'Description goes here...',
		control: {
			type: 'number',
			min: 0
		}
	},
};
SimpleHeader.parameters = {
    notes: DocsHeader
};

export const IconHeader = Template.bind({});
IconHeader.storyName = 'Title with Icon';
IconHeader.args = {
    ...SimpleHeader.args,
    titleIcon: 'hummingbird'
};
IconHeader.argTypes = {
    ...SimpleHeader.argTypes
};

export const TagHeader = Template.bind({});
TagHeader.storyName = 'Title with Tag';
TagHeader.args = {
    ...SimpleHeader.args,
    titleIcon: '',
    tagLabel: 'Pro',
    tagColor: 'purple',
    tagSize: 'sm'
};
TagHeader.argTypes = {
    ...SimpleHeader.argTypes
};

export const ActionHeader = Template.bind({});
ActionHeader.storyName = 'Title with Content';
ActionHeader.args = {
	...SimpleHeader.args
};
ActionHeader.argTypes = {
    ...SimpleHeader.argTypes,
    children: {
        defaultValue: <Button label="Right Action" color="blue" />
    }
};

export const UntitledHeader = Template.bind({});
UntitledHeader.storyName = 'Content Only';
UntitledHeader.args = {
	alignment: 'right'
};
UntitledHeader.argTypes = {
    ...SimpleHeader.argTypes,
    children: {
        defaultValue: <Button label="Right Action" color="blue" />
    }
};