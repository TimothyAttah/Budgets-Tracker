import React, { FC, useState } from 'react';
import styled from 'styled-components';

interface ReadMoreProps {
	children: string;
	maxCharacterCount?: number
}

const ReadMoreWrapper = styled.div`
	p {
		padding: 20px 0;
		line-height: 22px;
	}
`;

export const ReadMore:FC<ReadMoreProps> = ({ children, maxCharacterCount = 150 }) => {
	const [isTruncated] = useState(true);
	const text = children;
	const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text;
	return (
		<ReadMoreWrapper>
			<p>{resultString}...</p>
		</ReadMoreWrapper>
	);
};
