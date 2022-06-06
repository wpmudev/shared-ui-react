import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const PaginationList = styled.li`
	flex: 0 0 30px !important;
	a {
		min-width: 30px !important;
		cursor: pointer;
		&.sui-active {
			background: #E1F6FF !important;
			color: #17A8E3 !important;
		}
	}
`;

export const Pagination = ({ limit, skip, results, skipToFirstLabel, previousLabel, nextLabel, skipToLastLabel, pagesToBottom, ...args }) => {
	const componentWrapper = args.children,
		componentChildren = componentWrapper?.props?.children ? (componentWrapper?.props?.children?.length>1 ? [...componentWrapper.props.children] : [componentWrapper.props.children]) : [],
		childElements = [...componentChildren],
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
	const properties = {
		componentWrapper,
		childElements,
		elementsStartIndex,
		elementsEndIndex,
		handlePageClick,
		handleNextEllipsis,
		handlePreviousEllipsis,
		handleNextPage,
		handlePreviousPage,
		handleSkipToLastPage,
		handleSkipToFirstPage,
		pagesArray,
		selectedPage,
		startIndex,
		endIndex,
		pages,
		results,
		skipToFirstLabel,
		previousLabel,
		nextLabel,
		skipToLastLabel,
		skip,
		results,
		elements,
	};
	if (args?.paginationContent) return <>{args?.paginationContent({ ...properties })}</>;
	else
		return (
			<>
				{pagesToBottom && PaginationResults({ ...properties })}
				{PaginationNav({ ...properties })}
				{!pagesToBottom && PaginationResults({ ...properties })}
			</>
		);
};

export const PaginationResults = ({ ...properties }) => {
	const items = React.Children.map(properties.childElements, data => React.cloneElement(data))?.slice(properties.elementsStartIndex, properties.elementsEndIndex);
	return React.Children.map(properties.componentWrapper, data => React.cloneElement(data, '', items));
};

export const PaginationNav = ({ ...properties }) => {
	return (
		properties.pagesArray.length>1 &&
		<div className="sui-pagination-wrap">
			{properties.results && <span className="sui-pagination-results">{properties.elements} results</span>}
			<ul className="sui-pagination">
				{properties.skip && (
					<PaginationList onClick={properties.handleSkipToFirstPage}>
						<a disabled={properties.selectedPage <= 1}>
							<span aria-hidden="false" className="sui-screen-reader-text">
								{properties.skipToFirstLabel || "Go to first page"}
							</span>
							<span aria-hidden="true" title={properties.skipToFirstLabel || "Go to first page"} className="sui-icon-arrow-skip-back"></span>
						</a>
					</PaginationList>
				)}
				{properties.startIndex > 0 && (
					<PaginationList onClick={properties.handlePreviousEllipsis}>
						<a><span aria-hidden="true" className="sui-icon-arrow-skip-back"></span></a>
					</PaginationList>
				)}
				<PaginationList onClick={properties.handlePreviousPage}>
					<a disabled={properties.selectedPage <= 1}>
						<span aria-hidden="false" className="sui-screen-reader-text">
							{properties.previousLabel || "Go to previous page"}
						</span>
						<span aria-hidden="true" title={properties.previousLabel || "Go to previous page"} className="sui-icon-chevron-left"></span>
					</a>
				</PaginationList>
				{properties.pagesArray?.slice(properties.startIndex, properties.endIndex)?.map((data, index) => {
					return (
						<PaginationList onClick={() => properties.handlePageClick(parseInt(data))} key={index}>
							<a aria-selected={properties.selectedPage === data} className={properties.selectedPage == data ? "sui-active" : ""}>
								{data}
							</a>
						</PaginationList>
					);
				})}
				<PaginationList onClick={properties.handleNextPage}>
					<a disabled={properties.selectedPage >= properties.pages}>
						<span aria-hidden="false" className="sui-screen-reader-text">
							{properties.nextLabel || "Go to next page."}
						</span>
						<span aria-hidden="true" title={properties.nextLabel || "Go to next page."} className="sui-icon-chevron-right"></span>
					</a>
				</PaginationList>
				{properties.endIndex < properties.pages && (
					<PaginationList onClick={properties.handleNextEllipsis}>
						<a><span aria-hidden="true" className="sui-icon-arrow-skip-forward"></span></a>
					</PaginationList>
				)}
				{properties.skip && (
					<PaginationList onClick={properties.handleSkipToLastPage}>
						<a disabled={properties.selectedPage >= properties.pages}>
							<span aria-hidden="false" className="sui-screen-reader-text">
								{properties.skipToLastLabel || "Go to last page."}
							</span>
							<span aria-hidden="true" title={properties.skipToLastLabel || "Go to last page"} className="sui-icon-arrow-skip-forward"></span>
						</a>
					</PaginationList>
				)}
			</ul>
		</div>
	);
};