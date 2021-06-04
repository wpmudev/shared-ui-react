import React, { useState, useEffect } from 'react';

export const Pagination = ({ elements, limit, skip, ...props }) => {
	const [pages, setPages] = useState(elements/limit>parseInt(elements/limit) ? parseInt(elements/limit)+1 : elements/limit)
	const [pagesArray, setPagesArray] = useState([])
	const [selectedPage, setSelectedPage] = useState(1)
	const [startIndex, setStartIndex] = useState(0)
	const [endIndex, setEndIndex] = useState(pages>=5 ? 5 : pages)
	const [pageClickCounter,setPageClickCounter] = useState(0)

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
		(selectedPage < pages) && setSelectedPage(selectedPage+1)
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
	console.log(startIndex, endIndex)
	return (
		<>
			{props.children}
			<div className="sui-pagination-wrap">
				<ul className="sui-pagination">
					{skip && <li onClick={handleSkipToFirstPage}><a disabled={selectedPage<=1} title="go to first page"><span className="sui-icon-arrow-skip-back" ></span></a></li>}
					<li onClick={handlePreviousPage}><a disabled={selectedPage<=1}><span className="sui-icon-chevron-left" ></span></a></li>
					{/* {pages > 5
						?
						<>
							{startIndex !== 0 && <li><a>{pagesArray[0]}</a></li>}
							{(((pages / 2) > (startIndex + 1)||(pages<16)) && startIndex > 2) && <li><a>...</a></li>}
							{((parseInt(pages / 2) + 3) <= endIndex && (pages>=16)) && <li><a>{parseInt(pages / 2)}</a></li>}
							{((pages>=16)&&(startIndex > (pages / 2)+1)) && <li><a>...</a></li>}
							{pagesArray?.slice(startIndex, endIndex)?.map((data, index) => {
								return <li onClick={handlePageClick} key={index}><a>{data}</a></li>
							})}
							{((endIndex < ((pages / 2) - 1)||startIndex < (parseInt(pages / 2) - 3))&&(pages>=16)) && <li><a>...</a></li>}
							{(startIndex < (parseInt(pages / 2) - 3) && (pages>=16)) && <li><a>{parseInt(pages / 2)}</a></li>}
							{(endIndex < (pages - 2) && ((startIndex >= (pages / 2))||(pages<16))) && <li><a>...</a></li>}
							<li><a>{parseInt(pages)}</a></li>
						</>
						: pagesArray?.slice(0, 5)?.map((data, index) => {
							return <li onClick={handlePageClick} key={index}><a>{data}</a></li>
						})} */}
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