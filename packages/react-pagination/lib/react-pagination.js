import React, { useState, useEffect } from "react";

export const Pagination = ({ limit, skip, results, pagesToBottom, marginTop, marginRight, marginBottom, marginLeft, ...args }) => {
	const childElements = args.children ? [...args.children, ...args.child] : [...args.child],
		elements = childElements.length,
		pages = elements / limit > parseInt(elements / limit) ? parseInt(elements / limit) + 1 : elements / limit,
		[pagesArray, setPagesArray] = useState([]),
		[selectedPage, setSelectedPage] = useState("1"),
		[startIndex, setStartIndex] = useState(0),
		[endIndex, setEndIndex] = useState(pages >= 5 ? 5 : pages),
		[pageClickCounter, setPageClickCounter] = useState(0),
		[elementsStartIndex, setElementsStartIndex] = useState(0),
		[elementsEndIndex, setElementsEndIndex] = useState(limit);

	useEffect(() => {
		var pagesArray = [];
		for (let i = 1; i <= pages; ++i) pagesArray.push(i);
		setPagesArray(pagesArray);
	}, []);

	useEffect(() => {
		selectedPage >= endIndex && incrementIndexes();
		selectedPage <= startIndex + 1 && decrementIndexes();
	}, [pageClickCounter]);

	useEffect(() => {
		if (selectedPage !== "1") {
			setElementsStartIndex(selectedPage * limit - limit);
			setElementsEndIndex(selectedPage * limit);
		}
	}, [selectedPage]);

	const handleSkipToFirstPage = () => {
		setSelectedPage(1);
		setStartIndex(0);
		setEndIndex(pages >= 5 ? 5 : pages);
	};

	const handleSkipToLastPage = () => {
		setSelectedPage(pages);
		setStartIndex(pages >= 5 ? pages - 5 : 0);
		setEndIndex(pages);
	};

	const handlePreviousPage = () => {
		selectedPage > 1 && setSelectedPage(selectedPage - 1);
		decrementIndexes();
	};

	const handleNextPage = () => {
		selectedPage < pages && setSelectedPage(parseInt(selectedPage) + 1);
		incrementIndexes();
	};

	const decrementIndexes = () => {
		if (selectedPage - 1 <= startIndex + 1 && startIndex !== 0) {
			setStartIndex(startIndex - 1);
			setEndIndex(endIndex - 1);
		}
	};
	const incrementIndexes = () => {
		if (selectedPage + 1 >= endIndex && endIndex !== pages) {
			setStartIndex(startIndex + 1);
			setEndIndex(endIndex + 1);
		}
	};

	const handlePreviousEllipsis = () => {
		setSelectedPage(startIndex >= 5 ? endIndex - 6 : endIndex - startIndex - 1);
		setStartIndex(startIndex >= 5 ? startIndex - 5 : 0);
		setEndIndex(startIndex >= 5 ? endIndex - 5 : endIndex - startIndex);
	};
	const handleNextEllipsis = () => {
		setSelectedPage(pages - endIndex >= 5 ? startIndex + 7 : pages - endIndex + startIndex + 2);
		setStartIndex(pages - endIndex >= 5 ? startIndex + 5 : pages - endIndex + startIndex);
		setEndIndex(pages - endIndex >= 5 ? endIndex + 5 : pages);
	};

	const handlePageClick = async page => {
		setSelectedPage(page);
		setPageClickCounter(pageClickCounter + 1);
	};

	return (
		<>
			{pagesToBottom && React.Children.map(childElements, child => React.cloneElement(child)).slice(elementsStartIndex, elementsEndIndex)}
			<div className="sui-pagination-wrap" style={{marginTop:marginTop,marginRight:marginRight,marginBottom:marginBottom,marginLeft:marginLeft}}>
				{results && <span className="sui-pagination-results">{elements} results</span>}
				<ul className="sui-pagination">
					{skip && (
						<li onClick={handleSkipToFirstPage}>
							<a disabled={selectedPage <= 1} title="go to first page">
								<span className="sui-icon-arrow-skip-back"></span>
							</a>
						</li>
					)}
					<li onClick={handlePreviousPage}>
						<a disabled={selectedPage <= 1}>
							<span className="sui-icon-chevron-left"></span>
						</a>
					</li>
					{startIndex > 0 && (
						<li onClick={handlePreviousEllipsis}>
							<a>...</a>
						</li>
					)}
					{pagesArray?.slice(startIndex, endIndex)?.map((data, index) => {
						return (
							<li onClick={() => handlePageClick(parseInt(data))} key={index}>
								<a aria-selected={selectedPage === data} className={selectedPage === data ? "sui-active" : ""}>
									{data}
								</a>
							</li>
						);
					})}
					{endIndex < pages && (
						<li onClick={handleNextEllipsis}>
							<a>...</a>
						</li>
					)}
					<li onClick={handleNextPage}>
						<a disabled={selectedPage >= pages}>
							<span className="sui-icon-chevron-right"></span>
						</a>
					</li>
					{skip && (
						<li onClick={handleSkipToLastPage}>
							<a disabled={selectedPage >= pages} title="go to last page">
								<span className="sui-icon-arrow-skip-forward"></span>
							</a>
						</li>
					)}
				</ul>
			</div>
			{!pagesToBottom && React.Children.map(childElements, child => React.cloneElement(child)).slice(elementsStartIndex, elementsEndIndex)}
		</>
	);
};
