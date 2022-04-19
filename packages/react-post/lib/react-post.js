import React, { Component } from "react";
import styled from "styled-components";

let aria = aria || {};

aria.KeyCode = {
	TAB: 9,
	RETURN: 13,
	ESC: 27,
	SPACE: 32,
	PAGE_UP: 33,
	PAGE_DOWN: 34,
	END: 35,
	HOME: 36,
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	DELETE: 46
};

const screen = {
	mobile: 480,
	tablet: 783,
	laptop: 1200,
	desktop: 1500
};

const device = {
	mobile: `(min-width: ${screen.mobile}px)`,
	tablet: `(min-width: ${screen.tablet}px)`,
	laptop: `(min-width: ${screen.laptop}px)`,
	desktop: `(min-width: ${screen.desktop}px)`
};

const PostWrapper = styled.div.attrs(props => ({
	tabIndex: 0,
	props
}))`
	${props => (props.banner ? "overflow: hidden;" : "")}
	cursor: pointer;
	${props => (props.banner ? "display: flex;" : "")}
	${props => (props.banner ? "flex-flow: column nowrap;" : "")}
	padding: ${props => (props.banner ? "20px 20px 30px" : "10px")};
	border-radius: 4px;
	background-color: #fff;
	${props => (props.banner ? "box-shadow: 0 0 0 1px #E6E6E6;" : "")}
	transition: 0.2s ease all;

	* {
		pointer-events: none;
	}

	&:hover,
	&:focus {
		${props =>
			props.banner ? "transform: scale(1.02);" : "background-color: #FAFAFA;"}

		${props =>
			props.banner
				? `@media ${device.tablet} {
				transform: scale(1.05);
			}`
				: ""}
	}

	&[disabled] {
		pointer-events: none;
		opacity: 0.5;
	}

	${props =>
		props.banner
			? `@media ${device.tablet} {
			box-shadow: 0 2px 7px 0 rgba(0,0,0,0.05);
		}`
			: ""}

	&:focus {
		outline: none;
		${props =>
			props.banner
				? "box-shadow: 0 2px 7px 0 rgba(0,0,0,0.05), 0 0 2px 0 #17A8E3;"
				: ""}
	}

	@media ${device.tablet} {
		${props => (props.banner ? "min-height: 100%;" : "padding: 15px;")}
	}
`;

const PostHeader = styled.div`
	display: flex;
	flex-flow: row wrap;

	+ div {
		margin-top: 20px;
	}
`;

const PostFooter = styled.div`
	display: flex;
	flex: 0 0 auto;
	flex-flow: row wrap;
	align-items: center;
	margin-top: 15px;
`;

const FeaturedImage = styled.div.attrs(() => ({
	tabIndex: "-1",
	"aria-hidden": true
}))`
	${props => (props.banner ? "" : "width: 66px;")}
	height: ${props => (props.banner ? "140px" : "54px")};
	margin: ${props => (props.banner ? "-20px -20px 20px" : "0 10px 0 0")};
	${props => (props.banner ? "" : "border-radius: 4px;")}
	display: block;
	${props => (props.banner ? "flex: 0 0 auto;" : "")}
	background-color: #FFF;
	background-image: url(${props => props.src || "none"});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

const PostTitle = styled.h3`
	overflow: hidden;
	display: -webkit-box !important;
	-webkit-box-orient: vertical;
	${props => (props.banner ? "flex: 1 1 auto;" : "")}
	margin: ${props => (props.banner ? "0 0 10px" : "0")} !important;
	padding: 0 !important;
	border: 0;
	font-size: 13px !important;
	line-height: 18px !important;
	font-weight: 500 !important;
	letter-spacing: -0.2px;
	${props => (props.banner ? "" : "-webkit-line-clamp: 2;")}

	${props =>
		props.banner
			? `@media ${device.tablet} {
			-webkit-line-clamp: 2;
		}`
			: ""}
`;

const PostTime = styled.p`
	${props => (props.banner ? "flex: 0 0 auto;" : "")}
	margin: 0 !important;
	padding: 0 !important;
	border: 0;
	color: #888 !important;
	font-size: 13px !important;
	line-height: 18px !important;
	letter-spacing: -0.2px;

	${props =>
		props.banner
			? `* + & {
			margin-left: 5px !important;
		}`
			: ""}
`;

const Excerpt = styled.div`
	display: block;
	${props => (props.banner ? "flex: 1 1 auto;" : "")}

	p {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		margin: 0 !important;
		padding: 0 !important;
		border: 0;
		color: #888 !important;
		font-size: 13px !important;
		line-height: 22px !important;
		letter-spacing: -0.2px;
		-webkit-line-clamp: ${props => (props.banner ? "3" : "2")};
	}
`;

const ReadMore = styled.p`
	min-width: 1px;
	flex: 1;
	${props => (props.banner ? "margin-bottom: 0 !important;" : "margin: 4px 0 0;")}
	color: #17A8E3 !important;
	font-size: 13px !important;
	line-height: 18px !important;
	font-weight: 500 !important;
	letter-spacing: -0.2px !important;
`;

export class Post extends Component {
	constructor(props) {
		super(props);

		this.state = {
			media: [],
			error: null,
			isLoaded: false
		};

		this.openLink = this.openLink.bind(this);
		this.handleKeydown = this.handleKeydown.bind(this);
	}

	openLink = e => {
		let ref = e.target !== null ? e.target : e.srcElement;

		if (ref) {
			window.open(ref.getAttribute("data-href"), "_blank");
		}
	};

	handleKeydown = e => {
		let key = e.which || e.keyCode;

		switch (key) {
			case aria.KeyCode.RETURN:
				this.openLink(e);
				break;
		}
	};

	componentDidMount() {
		const API_URL = "https://wpmudev.com/blog/wp-json/wp/v2/media/";
		const QUERY_ID = this.props.media;

		// GET media using fetch.
		fetch(API_URL + QUERY_ID)
			.then(response => response.json())
			.then(
				data => {
					this.setState({
						isLoaded: true,
						media: data.guid.rendered
					});
				},
				error => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}

	render() {
		const { media, error, isLoaded } = this.state;

		const translate = this.props.translate;

		const read_article =
			translate && translate[0].read_article
				? translate[0].read_article
				: "Read article";

		const min_read =
			translate && translate[0].min_read ? translate[0].min_read : "min read";

		// replace html entities from the title with character.
		const postTitle = this.props.title.replace(/&#(\d+);/g, function(match, dec) {return String.fromCharCode(dec);});

		let PostImage = ""; // Empty.

		if ( this.props.image ) {
			PostImage = <FeaturedImage src={this.props.image} alt="" {...this.props} title={postTitle} />;
		} else {
			if (error) {
				PostImage = error.message;
			} else if (!isLoaded) {
				PostImage = (
					<p style={ { textAlign: 'center' } }>
						<span className="sui-icon-loader sui-loading" aria-hidden="true"></span>
						<span className="sui-screen-reader-text">Image is loading</span>
					</p>
				);
			} else {
				PostImage = <FeaturedImage src={media} {...this.props} title={postTitle} />;
			}
		}

		if (this.props.banner) {
			return (
				<PostWrapper {...this.props} title={postTitle}>
					{PostImage}

					{this.props.title && "" !== this.props.title && (
						<PostTitle
							banner
							dangerouslySetInnerHTML={{
								__html: this.props.title
							}}
						/>
					)}

					{this.props.excerpt && "" !== this.props.excerpt && (
						<Excerpt
							banner
							dangerouslySetInnerHTML={{
								__html: this.props.excerpt
							}}
						/>
					)}

					<PostFooter banner>
						<ReadMore banner>{read_article}</ReadMore>

						{this.props.time && "" !== this.props.time && (
							<PostTime banner>
								<span
									className="sui-icon-clock sui-sm"
									style={{
										verticalAlign: "middle",
										marginRight: 5
									}}
									aria-hidden="true"
								/>
								{this.props.time} {min_read}
							</PostTime>
						)}
					</PostFooter>
				</PostWrapper>
			);
		}

		return (
			<PostWrapper {...this.props} title={postTitle}>
				<PostHeader>
					{PostImage}

					<div
						style={{
							minWidth: "1px",
							flex: 1
						}}>
						{this.props.title && "" !== this.props.title && (
							<PostTitle
								dangerouslySetInnerHTML={{
									__html: this.props.title
								}}
							/>
						)}
						{this.props.time && "" !== this.props.time && (
							<PostTime>
								*{this.props.time} {min_read}
							</PostTime>
						)}
					</div>
				</PostHeader>

				{this.props.excerpt && "" !== this.props.excerpt && (
					<Excerpt
						dangerouslySetInnerHTML={{
							__html: this.props.excerpt
						}}
					/>
				)}

				<ReadMore>{read_article}</ReadMore>
			</PostWrapper>
		);
	}
}
