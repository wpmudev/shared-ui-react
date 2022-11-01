import React from "react";
import { Pagination } from "../lib/react-pagination";

export default {
	title: "Components/Pagination",
	component: Pagination,
	parameters: {
		actions: {
			disabled: true,
		},
		notes: {
			disabled: true,
		},
	},
};

export const Demo = args => {
	// Array numbers from 1 to n.
	const createList = ( topNumber ) => {
		const listNumbers = [];
		topNumber = topNumber + 1;

		for ( let i = 1; i < topNumber; i++ ) {
			listNumbers.push( i );
		}

		return listNumbers;
	}

	const items = createList( 100 );

	return (
		<div className="sui-box">
			<div className="sui-box-body">
				<Pagination { ...args }>
					<ul>
						{ items.map( ( item, key ) => (
							<li key={ key }>User #{ item }</li>
						) ) }
					</ul>
				</Pagination>
			</div>
		</div>
	);
};
Demo.args = {
	limit: 10,
	skip: false,
	results: false,
	pagesToBottom: false,
};
Demo.argTypes = {
	limit: {
		type: {
			required: true,
		},
		description: "Use this property to set a maximum number of items per page. If empty or zero, the pagination won't show.",
		table: {
			type: {
				summary: 'number',
			},
		},
		control: {
			type: 'number',
		},
	},
	skip: {
		description: 'Enable this property to show skip buttons on pagination. Those will help you move directly to first and last page.',
		table: {
			type: {
				summary: 'boolean',
			},
		},
		control: {
			type: 'boolean',
		},
	},
	results: {
		description: 'When enabled, it shows the total number of results.',
		table: {
			type: {
				summary: 'boolean',
			},
		},
		control: {
			type: 'boolean',
		},
	},
	pagesToBottom: {
		description: 'If you need to show the pagination at the bottom of the list, enable this property.',
		table: {
			type: {
				summary: 'boolean',
			},
		},
		control: {
			type: 'boolean',
		},
	},
	children: {
		type: {
			required: true,
		},
		description: 'Place the content you would like to display inside the component.',
		table: {
			type: {
				summary: 'element[]',
			},
		},
		control: {
			type: null,
		},
	},
	previousLabel: {
		description: 'By default, the "previous" button will have as label **"Go to previous page"**. You can change that using this property.',
		table: {
			category: 'Source Language',
			type: {
				summary: 'string',
			},
		},
		control: {
			type: 'text',
		},
	},
	nextLabel: {
		description: 'By default, the "next" button will have as label **"Go to next page"**. You can change that using this property.',
		table: {
			category: 'Source Language',
			type: {
				summary: 'string',
			},
		},
		control: {
			type: 'text',
		},
	},
	skipToFirstLabel: {
		description: 'By default, the "skip to first" button will have as label **"Go to first page"**. You can change that using this property.',
		table: {
			category: 'Source Language',
			type: {
				summary: 'string',
			},
		},
		control: {
			type: 'text',
		},
	},
	skipToLastLabel: {
		description: 'By default, the "skip to last" button will have as label **"Go to last page"**. You can change that using this property.',
		table: {
			category: 'Source Language',
			type: {
				summary: 'string',
			},
		},
		control: {
			type: 'text',
		},
	},
};
