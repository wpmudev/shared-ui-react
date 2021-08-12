import React from "react";
import { ReactBulkActions } from "../lib/react-bulk-actions";
import { Pagination, PaginationResults, PaginationNav } from "@wpmudev/react-pagination";
import { AccordionItem } from "@wpmudev/react-accordion";

export default {
	title: "Components/Bulk Actions",
	component: ReactBulkActions,
};

let childItems = new Array();
for (let i = 1; i <= 15; ++i)
	childItems.push(
		<AccordionItem key={i} title={`Child Item #${i}`}>
			<h4>Child Item #{i}</h4>
			<p>
				Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed
				posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
		</AccordionItem>
	);

const archiveAll = () => {
	console.log("Archived ALL");
};
const deleteAll = () => {
	console.log("Deleted ALL");
};
const sendSelectedData = ids => {
	console.log("sendSelectedData IDS", ids);
};

export const primary = args => <ReactBulkActions {...args} />;
primary.storyName = "Bulk Actions";
primary.args = {
	description: "Bulk Actions",
	bulkActions: { "delete": deleteAll, "archive": archiveAll, "sendSelectedData": sendSelectedData },
	items: childItems,
};
primary.argTypes = {
	description: "string",
};
