import { useEffect, useState, FC } from 'react';
import { IconButton } from '@material-ui/core';
import { ThumbUp, Person, ThumbDown, MoreVert } from '@material-ui/icons';
import { format } from 'timeago.js';
// import { useDispatch } from 'react-redux';

import { user } from '../NameInitials';
// import { likePost } from '../../redux/actions/posts';

import {
	PostBottomLeft,
	PostBottomRight,
	PostCenter,
	PostContainer,
	PostTopLeft,
	PostWrapper,
} from './Styles';
import axios from 'axios';
import { Posts } from '../../Interface';
// import { Popup } from '../nav/Popup';

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

interface PostProps {
  post: Posts
}

export const Post: FC<PostProps> = ({ post }) => {
	console.log(post);
	
	// const dispatch = useDispatch();
	const [like, setLike] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(false);

	useEffect(() => {
		// setIsLiked(post.likes.includes(user.results._id));
	}, [setIsLiked, post.likes]);

	// const posts = useSelector(state => postId !== null ? state.posts.posts.find(post => post._id): null)
	const likeHandler = async () => {
		// dispatch(likePost(postId, user.results._id))
		try {
			await axios.put(`/posts/${post.post_id}/like`, { userId: user.results?._id });
		} catch (err) {
			console.log(err);
		}
		// setLike(isLiked > 0 ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	// const fullName = `${post.postedBy?.firstName} ${post.postedBy?.lastName}`;
  const fullName = 'Jane Jack'
	return (
		<PostContainer>
			<PostWrapper>
				<PostTopLeft>
					{post.photo ? (
						<img
							src={post.photo}
							// src={`${PF}/${post?.photo}`}
							alt=''
							className='share__profile-img'
						/>
					) : (
						<Person />
					)}
					{/* {post.postedBy?.profilePicture ? (
						<img
							src={post.postedBy?.profilePicture}
							alt=''
							className='share__profile-img'
						/>
					) : (
						<Person />
					)} */}
					<span className='post__username'>{fullName}</span>
					{/* <span className='post__date'>{format(post.createdAt)}</span> */}
					<span className='post__date'>{format(post.date)}</span>
				</PostTopLeft>
				<div>
					<MoreVert />
					{/* {post.postedBy?._id === user.results?._id && <Popup post={post} />} */}
				</div>
			</PostWrapper>
			<PostCenter>
				<span>{post?.desc}</span>
				<img src={post.photo} alt='' />
				{/* <img src={`${PF}/${post?.photo}`} alt='' /> */}
			</PostCenter>
			<PostWrapper>
				<PostBottomLeft>
					{isLiked ? (
						<IconButton className='red__icon' onClick={likeHandler}>
							<ThumbDown htmlColor='white' />
						</IconButton>
					) : (
						<IconButton className='blue__icon' onClick={likeHandler}>
							<ThumbUp htmlColor='white' />
						</IconButton>
					)}

					<span className='post__like-counter'>{like} people like it</span>
				</PostBottomLeft>
				<PostBottomRight>
					<span>{post?.comment.length} comments</span>
				</PostBottomRight>
			</PostWrapper>
		</PostContainer>
	);
};
