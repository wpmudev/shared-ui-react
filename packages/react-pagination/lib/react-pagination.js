import React, { useState, useEffect } from 'react';
export const Pagination = ({ limit, skip, results, ...props }) => {
	
	const childElements=props.children
	const elements=React.Children.map(childElements, child => React.cloneElement(child)).length;
	const [pages, setPages] = useState(elements/limit>parseInt(elements/limit) ? parseInt(elements/limit)+1 : elements/limit)
	const [pagesArray, setPagesArray] = useState([])
	const [selectedPage, setSelectedPage] = useState("1")
	const [startIndex, setStartIndex] = useState(0)
	const [endIndex, setEndIndex] = useState(pages>=5 ? 5 : pages)
	const [pageClickCounter,setPageClickCounter] = useState(0)
	const [elementsStartIndex,setElementsStartIndex]=useState(0)
	const [elementsEndIndex,setElementsEndIndex]=useState(limit)
	
	useEffect(() => {
		var pagesArray = []
		for (let i = 1; i <= pages; ++i)
			pagesArray.push(i)
		setPagesArray(pagesArray)
	}, [])
	useEffect(() => {
		(selectedPage>=endIndex) && incrementIndexes();
		(selectedPage<=startIndex+1) && decrementIndexes()
	}, [pageClickCounter])
	useEffect(() => {
		console.log("elementsStartIndex,elementsEndIndex",elementsStartIndex,elementsEndIndex)
		if(selectedPage!=="1"){
			setElementsStartIndex(selectedPage*limit-limit)
			setElementsEndIndex(selectedPage*limit)
		}
	}, [selectedPage])

	const handleSkipToFirstPage = () => {
		setSelectedPage(1)
		setStartIndex(0)
		setEndIndex(pages>=5 ? 5 : pages)
	}

	const handleSkipToLastPage = () => {
		setSelectedPage(pages)
		setStartIndex(pages>=5 ? pages-5 : 0)
		setEndIndex(pages)
	}
	
	const handlePreviousPage = () => {
		((selectedPage > 1)) && setSelectedPage(selectedPage-1)
		console.log("decrementIndexes",selectedPage-1<startIndex+1,"selectedPage",selectedPage)
		decrementIndexes()
	}

	const handleNextPage = () => {
		(selectedPage < pages) && setSelectedPage(parseInt(selectedPage)+1)
		console.log("incrementIndexes",selectedPage+1>endIndex,"selectedPage",selectedPage)
		incrementIndexes()
	}

	const decrementIndexes =()=>{
		if((selectedPage-1<=startIndex+1) && (startIndex !== 0))
		{
			setStartIndex(startIndex - 1)
			setEndIndex(endIndex - 1)
		}
	}
	const incrementIndexes =()=>{
		if((selectedPage+1>=endIndex) && (endIndex !== pages))
		{
			setStartIndex(startIndex + 1)
			setEndIndex(endIndex + 1)
		}
	}
	
	const handlePreviousEllipsis = () =>{
		setSelectedPage(startIndex>=5?endIndex-6:endIndex-startIndex-1)
		setStartIndex(startIndex>=5?startIndex-5:0)
		setEndIndex(startIndex>=5?endIndex-5:endIndex-startIndex)
	}
	const handleNextEllipsis = () =>{
		setSelectedPage(pages-endIndex>=5?startIndex+7:pages-endIndex+startIndex+2)
		setStartIndex(pages-endIndex>=5?startIndex+5:pages-endIndex+startIndex)
		setEndIndex(pages-endIndex>=5?endIndex+5:pages)
	}

	const handlePageClick = async (page) => {
		setSelectedPage(page)
		setPageClickCounter(pageClickCounter+1)
		console.log("Click",selectedPage)
	}
	console.log(startIndex, endIndex,"elements:",elements)

	return (
		<>
			{/* {childElements.slice(elementsStartIndex,elementsEndIndex)} */}
			{ React.Children.map(childElements, child => React.cloneElement(child)).slice(elementsStartIndex,elementsEndIndex)}
			<div className="sui-pagination-wrap">
				{results && <span className="sui-pagination-results">{elements} results</span>}
				<ul className="sui-pagination">
					{skip && <li onClick={handleSkipToFirstPage}><a disabled={selectedPage<=1} title="go to first page"><span className="sui-icon-arrow-skip-back" ></span></a></li>}
					<li onClick={handlePreviousPage}><a disabled={selectedPage<=1}><span className="sui-icon-chevron-left" ></span></a></li>
					{(startIndex>1) && <li onClick={handlePreviousEllipsis}><a>...</a></li>}
					{pagesArray?.slice(startIndex, endIndex)?.map((data, index) => {
							return <li onClick={()=>handlePageClick(parseInt(data))} key={index}><a className={selectedPage===data ? "sui-active" : ""}>{data}</a></li>
						})}
					{(endIndex<pages-1) && <li onClick={handleNextEllipsis}><a>...</a></li>}
					<li onClick={handleNextPage}><a disabled={selectedPage>=pages}><span className="sui-icon-chevron-right"></span></a></li>
					{skip && <li onClick={handleSkipToLastPage}><a disabled={selectedPage>=pages} title="go to last page"><span className="sui-icon-arrow-skip-forward"></span></a></li>}
				</ul>
			</div>
		</>
	);
};