import React from 'react';
import styled from 'styled-components';
import { device } from './style-helpers';

export const Title = styled.h3`
	overflow: hidden;
	display: -webkit-box !important;
	-webkit-box-orient: vertical;
	margin: ${ props => props.slider ? '0' : '0 0 10px' } !important;
	padding: 0 !important;
	border: 0;
	color: #333;
	font-size: 13px !important;
	line-height: 18px !important;
	font-weight: 500 !important;
	letter-spacing: -0.2px;
	${ props => props.slider
		? '-webkit-line-clamp: 2;'
		: `@media ${ device.tablet } { -webkit-line-clamp: 2; }`
	}
`;

export const Excerpt = styled.div`
	display: block;

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
		-webkit-line-clamp: ${ props => props.slider ? '2' : '3' };
	}
`;

export const ReadMore = styled.p`
	min-width: 1px;
	flex: 1;
	margin: ${ props => props.slider ? '4px 0 0' : '0' };
	color: #17A8E3 !important;
	font-size: 13px !important;
	line-height: 18px !important;
	font-weight: 500 !important;
	letter-spacing: -0.2px !important;
`;

export const ReadTime = styled.p`
	${ props => props.slider ? '' : 'flex: 0 0 auto;' }
	margin: 0 !important;
	padding: 0 !important;
	border: 0;
	color: #888 !important;
	font-size: 13px !important;
	line-height: 18px !important;
	letter-spacing: -0.2px;

	* + & {
		margin-left: ${ props => props.slider ? '0' : '5px !important' };
	}
`;
