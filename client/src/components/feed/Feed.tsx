import React from 'react';

import styled from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';
// import { Posts } from '../DummyData';
import { Share } from '../share/Share';
import { Post } from '../post/Post';
// import { listPosts } from '../../redux/actions/posts';
import { Posts } from '../DummyData';

const FeedContainer = styled.div`
	flex: 5.5;
	padding: 20px;
	@media (max-width: 800px) {
		flex: 2;
	}
`;

export const Feed = () => {
	// const dispatch = useDispatch();
	// const { posts } = useSelector(state => state.posts);
	// useEffect(() => {
	// 	dispatch(listPosts());
	// }, [dispatch]);

	return (
		<FeedContainer>
			<Share />
			{Posts.posts?.map(p => {
				return <Post key={p.post_id} post={p} />;
			})}
		</FeedContainer>
	);
};
