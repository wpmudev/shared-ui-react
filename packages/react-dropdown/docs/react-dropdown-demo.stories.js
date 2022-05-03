import React from 'react';
import { Dropdown } from '../lib/react-dropdown';

export default {
    title: 'Components/Dropdown',
	component: Dropdown,
	parameters: {
		notes: {
			disable: true,
		},
	},
}

const Template = ({ children, ...args }) => {
    return (
        <Dropdown { ...args }>
            { children.map( ( child, key ) => (
                <div key={ key } { ...child } />
            ) ) }
        </Dropdown>
    );
};

export const demo = Template.bind({});
demo.storyName = 'Demo';
demo.args = {
    position: 'left',
    children: [
        {
            name: 'Option 1'
        },
        {
            name: 'Option 2'
        },
        {
            name: 'Option 3'
        },
    ]
};
demo.argTypes = {
	position: {
		type: {
			name: 'string',
			required: false
		},
		description: 'This property will determine where the dropdown menu will be placed.',
		defaultValue: 'left',
		control: {
			type: 'select',
			options: [
				'left',
				'center',
				'right'
			]
		},
		table: {
			type: {
				summary: 'options',
				detail: '"left", "center", "right"'
			},
			defaultValue: {
				summary: 'left'
			}
		},
	},
	children: {
		data: {
			type: 'array'
		},
		control: {
			type: null
		}
	}
};

// export const DropdownIcon = Template.bind({});
// DropdownIcon.storyName = 'Option Icon';
// DropdownIcon.args = {
//     position: 'left',
//     children: [
//         {
//             name: 'Option 1',
//             icon: 'check'
//         },
//         {
//             name: 'Option 2',
//             icon: 'close'
//         },
//         {
//             name: 'Option 3',
//             icon: 'pencil'
//         },
//     ]
// };

// export const DropdownTag = Template.bind({});
// DropdownTag.storyName = 'Option Tag';
// DropdownTag.args = {
//     position: 'left',
//     children: [
//         {
//             name: 'Option 1',
//             tag: 'Coming Soon'
//         },
//         {
//             name: 'Option 2',
//             tag: 'Coming Soon'
//         },
//         {
//             name: 'Option 3',
//             tag: 'Coming Soon'
//         },
//     ]
// };

// export const DropdownColor = Template.bind({});
// DropdownColor.storyName = 'Option Color';
// DropdownColor.args = {
//     position: 'left',
//     children: [
//         {
//             name: 'Option 1',
//             color: 'blue'
//         },
//         {
//             name: 'Option 2',
//             color: 'green'
//         },
//         {
//             name: 'Option 3',
//             color: 'yellow'
//         },
//         {
//             name: 'Option 3',
//             color: 'red'
//         },
//         {
//             name: 'Option 3',
//             color: 'purple'
//         },
//     ]
// };