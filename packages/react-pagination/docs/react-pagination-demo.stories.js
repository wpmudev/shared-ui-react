import React from "react";
import { Pagination, PaginationResults, PaginationNav } from "../lib/react-pagination";
import { Box, BoxHeader, BoxBody, BoxFooter } from '@wpmudev/react-box';
import { Accordion, AccordionItem } from '@wpmudev/react-accordion';
import { Button } from '@wpmudev/react-button';

export default {
	title: "Components/Pagination",
	component: Pagination,
	args: {
		limit: 2,
		results: true,
		skip: true,
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
			<Pagination { ...args }>
				<Accordion>
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
					<AccordionItem title="Children Item D">
						<Box>
							<BoxBody>
								<h4>Children Item A</h4>
								<p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.</p>
							</BoxBody>
						</Box>
					</AccordionItem>
					<AccordionItem title="Children Item E">
						<Box>
							<BoxBody>
								<h4>Children Item B</h4>
								<p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.</p>
							</BoxBody>
						</Box>
					</AccordionItem>
					<AccordionItem title="Children Item F">
						<Box>
							<BoxBody>
								<h4>Children Item C</h4>
								<p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.</p>
							</BoxBody>
						</Box>
					</AccordionItem>
					<AccordionItem title="Children Item G">
						<Box>
							<BoxBody>
								<h4>Children Item A</h4>
								<p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.</p>
							</BoxBody>
						</Box>
					</AccordionItem>
					<AccordionItem title="Children Item H">
						<Box>
							<BoxBody>
								<h4>Children Item B</h4>
								<p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.</p>
							</BoxBody>
						</Box>
					</AccordionItem>
					<AccordionItem title="Children Item I">
						<Box>
							<BoxBody>
								<h4>Children Item C</h4>
								<p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.</p>
							</BoxBody>
						</Box>
					</AccordionItem>
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
					<AccordionItem title="Children Item D">
						<Box>
							<BoxBody>
								<h4>Children Item A</h4>
								<p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.</p>
							</BoxBody>
						</Box>
					</AccordionItem>
					<AccordionItem title="Children Item E">
						<Box>
							<BoxBody>
								<h4>Children Item B</h4>
								<p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.</p>
							</BoxBody>
						</Box>
					</AccordionItem>
					<AccordionItem title="Children Item F">
						<Box>
							<BoxBody>
								<h4>Children Item C</h4>
								<p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.</p>
							</BoxBody>
						</Box>
					</AccordionItem>
					<AccordionItem title="Children Item G">
						<Box>
							<BoxBody>
								<h4>Children Item A</h4>
								<p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.</p>
							</BoxBody>
						</Box>
					</AccordionItem>
					<AccordionItem title="Children Item H">
						<Box>
							<BoxBody>
								<h4>Children Item B</h4>
								<p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.</p>
							</BoxBody>
						</Box>
					</AccordionItem>
					<AccordionItem title="Children Item I">
						<Box>
							<BoxBody>
								<h4>Children Item C</h4>
								<p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.</p>
							</BoxBody>
						</Box>
					</AccordionItem>
				</Accordion>
			</Pagination>
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
