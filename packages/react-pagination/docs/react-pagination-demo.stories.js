import React from "react";
import { Pagination, PaginationResults, PaginationNav } from "../lib/react-pagination";
import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Accordion, AccordionItem } from '@wpmudev/react-accordion';
import { Button } from '@wpmudev/react-button';

let accordionItems = new Array();
for (let i = 1; i <= 15; ++i)
	accordionItems.push(
		<AccordionItem key={i} title={ `Child Item #${i}` }>
			<Box>
				<BoxBody>
					<h4>Child Item #{i}</h4>
					<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</BoxBody>
			</Box>
		</AccordionItem>
	);

export default {
	title: "Components/Pagination",
	component: Pagination,
	args: {
		limit: 2,
		results: true,
		skip: true,
		child: accordionItems,
		pagesToBottom: false,
		skipToFirstLabel: '',
		previousLabel: '',
		nextLabel: '',
		skipToLastLabel: ''
	},
	argTypes: {
		limit: {
			description: 'The number of items to show per page',
			type: {
				name: 'number',
				required: true
			},
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '' },
			},
			control: {
				type: 'number',
			},
			table: {
				category: 'Basic Controls'
			}
		},
		results: {
			description: 'Show the total number of results',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: '' },
			},
			control: {
				type: 'boolean',
			},
			table: {
				category: 'Basic Controls'
			}
		},
		skip: {
			description: 'Show the skip to page input',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: '' },
			},
			control: {
				type: 'boolean',
			},
			table: {
				category: 'Basic Controls'
			}
		},
		child: {
			description: 'The children of the component',
			table: {
				type: { summary: 'object' },
				defaultValue: { summary: '' },
			},
			control: {
				type: 'object',
			},
			table: {
				category: 'Additional Controls'
			}
		},
		pagesToBottom: {
			description: 'Pagination will be shown at the bottom of the page',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: '' },
			},
			control: {
				type: 'boolean',
			},
			table: {
				category: 'Additional Controls'
			}
		},
		skipToFirstLabel: {
			description: 'The label for the skip to first page button',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
			control: {
				type: 'text',
			},
			table: {
				category: 'Labels'
			}
		},
		previousLabel: {
			description: 'The label for the previous page button',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
			control: {
				type: 'text',
			},
			table: {
				category: 'Labels'
			}
		},
		nextLabel: {
			description: 'The label for the next page button',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
			control: {
				type: 'text',
			},
			table: {
				category: 'Labels'
			}
		},
		skipToLastLabel: {
			description: 'The label for the skip to last page button',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
			control: {
				type: 'text',
			},
			table: {
				category: 'Labels'
			}
		},
	}
};

export const demo = args => {
	return (
		<Box>
			<Accordion>
				<Pagination { ...args }>
					<AccordionItem title="Children Item A">
						<Box>
							<BoxBody>
								<h4>Children Item A</h4>
								<p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.</p>
							</BoxBody>
						</Box>
					</AccordionItem>
					<AccordionItem title="Children Item B">
						<Box>
							<BoxBody>
								<h4>Children Item B</h4>
								<p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.</p>
							</BoxBody>
						</Box>
					</AccordionItem>
					<AccordionItem title="Children Item C">
						<Box>
							<BoxBody>
								<h4>Children Item C</h4>
								<p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.</p>
							</BoxBody>
						</Box>
					</AccordionItem>
				</Pagination>
			</Accordion>
		</Box>
	);
};
demo.storyName = "Demo";
demo.args = {
	pagesToTop: false,
	pagesToBottom: false,
};
demo.argTypes = {
	pagesToTop: {
		type: {
			name: 'boolean',
			required: false
		},
		description: '',
		control: {
			type: 'boolean'
		},
		table: {
			category: 'Additional Controls'
		}
	},
	pagesToBottom: {
		type: {
			name: 'boolean',
			required: false
		},
		description: '',
		control: {
			type: 'boolean'
		},
		table: {
			category: 'Additional Controls'
		}
	}
};
