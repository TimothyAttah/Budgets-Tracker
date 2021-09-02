import React, { FC } from 'react';
import { Divider } from '@material-ui/core';
import styled from 'styled-components';
// import { images } from '../Images';
import { PostList } from '../../redux/InterfaceRedux';
import { CommentsForm } from '../forms/PostCommentsForm';
import { PostCommentLists } from './PostCommentLists';

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
	// console.log(post);
	// console.log('this is post.comment', post);
	return (
		<Comments>
			<Divider />
			<h5>Recent comments</h5>
			{post ? (
				post.comments.map(item => {
					console.log('this is post.comment.item', item)
					return (
						<PostCommentLists
							key={item._id}
							text={item.text}
							commentId={item._id}
							firstName={item.postedBy.firstName}
							lastName={item.postedBy.lastName}
							profilePicture={item.postedBy.profilePicture}
						/>
					);
				})
			) : (
				<h2>loading...</h2>
			)}
		
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
