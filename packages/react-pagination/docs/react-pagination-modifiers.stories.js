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

const paginationContent = ({ ...properties }) => {
	const styles = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	};

	return (
		<Box>
			<BoxHeader title="Lorem Justo" />
			<BoxBody>
				<p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
				<div style={ styles }>
					<Button label="Bulk Delete" icon="trash" disabled />
					{ PaginationNav({ ...properties }) }
				</div>
				<Accordion>
					{ PaginationResults({ ...properties }) }
				</Accordion>
				{ PaginationNav({ ...properties }) }
			</BoxBody>
			<BoxFooter
				paddingTop="0"
				border="0"
				alignment="center"
			>
				<p className="sui-description">Donec id elit non mi porta gravida at eget metus? <a href="#">Check again</a></p>
			</BoxFooter>
		</Box>
	);
};

export default {
	title: "Components/Pagination",
	component: Pagination,
	args: {
		limit: 5,
		results: true,
		skip: true,
		child: accordionItems,
		skipToFirstLabel: '',
		previousLabel: '',
		nextLabel: '',
		skipToLastLabel: ''
	},
	argTypes: {
		limit: {
			type: {
				name: 'number',
				required: true
			},
			description: '',
			control: {
				type: 'number'
			},
			table: {
				category: 'Basic Controls'
			}
		},
		results: {
			type: {
				name: 'boolean',
				required: false
			},
			description: '',
			control: {
				type: 'boolean'
			},
			table: {
				category: 'Basic Controls'
			}
		},
		skip: {
			type: {
				name: 'boolean',
				required: false
			},
			description: '',
			control: {
				type: 'boolean'
			},
			table: {
				category: 'Basic Controls'
			}
		},
		child: {
			type: {
				name: 'object',
				required: false
			},
			description: '',
			control: {
				type: 'object'
			},
			table: {
				category: 'Additional Controls'
			}
		},
		skipToFirstLabel: {
			type: {
				name: 'text',
				required: false
			},
			description: '',
			control: {
				type: 'text'
			},
			table: {
				category: 'Labels'
			}
		},
		previousLabel: {
			type: {
				name: 'text',
				required: false
			},
			description: '',
			control: {
				type: 'text'
			},
			table: {
				category: 'Labels'
			}
		},
		nextLabel: {
			type: {
				name: 'text',
				required: false
			},
			description: '',
			control: {
				type: 'text'
			},
			table: {
				category: 'Labels'
			}
		},
		skipToLastLabel: {
			type: {
				name: 'text',
				required: false
			},
			description: '',
			control: {
				type: 'text'
			},
			table: {
				category: 'Labels'
			}
		},
	}
};

export const simple = args => {
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
simple.storyName = "Simple";
simple.args = {
	pagesToTop: false,
	pagesToBottom: false,
};
simple.argTypes = {
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

export const compound = args => {
	return (
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
	);
};
compound.storyName = "Compound";
compound.args = {
	paginationContent
};
compound.argTypes = {
	paginationContent: {
		table: {
			category: 'Additional Controls'
		}
	}
};
