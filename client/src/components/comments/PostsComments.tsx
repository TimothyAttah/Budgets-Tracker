import React, { FC, useEffect } from 'react';
import { Divider } from '@material-ui/core';
import styled from 'styled-components';
// import { images } from '../Images';
import { PostList } from '../../redux/InterfaceRedux';
import { CommentsForm } from '../forms/PostCommentsForm';
import { PostCommentLists } from './PostCommentLists';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../redux/reducers';
import { allPostComment } from '../../redux/actions/posts';

interface CommentProps {
  post: PostList;
}

const Comments = styled.div`
	padding: 20px;
	height: calc(50vh - 100px);
	overflow-y: scroll;
	::-webkit-scrollbar {
		width: 5px;
	}

	::-webkit-scrollbar-track {
		background-color: #f1f1f1;
	}
	::-webkit-scrollbar-thumb {
		background-color: rgb(179, 179, 179);
	}
	h5 {
		margin: 10px 0;
	}
`;

export const PostsComments: FC<CommentProps> = ({ post }) => {
	 const dispatch = useDispatch();
		useEffect(() => {
			dispatch(allPostComment(post?._id));
		}, [dispatch, post?._id]);
	
		const { posts } = useSelector((state: StoreState) => state.posts);
	console.log(posts);
	
	return (
		<Comments>
			<Divider />
			<h5>Recent comments</h5>
			{/* {post ? (
				post.comments.map(item => {
					console.log('this is post.comment.item', item)
					// return (
					// 	<PostCommentLists
					// 		key={item._id}
					// 		text={item.text}
					// 		commentId={item._id}
					// 		firstName={item.postedBy?.firstName}
					// 		lastName={item.postedBy?.lastName}
					// 		profilePicture={item.postedBy?.profilePicture}
					// 	/>
					// );
				})
			) : (
				<h2>loading...</h2>
			)}
		 */}
			{/* {post ? (
				post.comments?.map(item => (
					<CommentsLists
						key={item._id}
						content={item.comment}
						commentId={item._id}
						// name={item.name}
						// profilePicture={item.profilePicture}
						// date={item.createdAt}
					/>
				))
			) : (
				<h2>loading...</h2>
			)} */}
			{/* <h4 className='view'>View more comments...</h4> */}
			<CommentsForm post={post} />
		</Comments>
	);
};
