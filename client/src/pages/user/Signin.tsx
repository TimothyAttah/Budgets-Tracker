import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../components/images';
import { SigninForm } from '../../components/forms/SigninForm';
import { Modal } from '../../components/modal/Modal';
import { Backdrop } from '../../components/Backdrop';
import { UserContainer, GoogleBox, GoogleImg, Divider } from './Styles';


export const Signin = () => {
	return (
		<>
			<Backdrop />
			<Modal>
				<UserContainer>
					<h1>Note3Sixty</h1>
					<h3>Create your account</h3>
					<p>Enter your personal details to start your journey today</p>
					<GoogleBox>
						<Link to='/api/auth/google'>
							<GoogleImg>
								<img src={images.GoogleIcon} alt='' />
							</GoogleImg>
							<span>Log in with Google</span>
						</Link>
					</GoogleBox>
					<Divider>
						<img src={images.LineIcon} alt='' />
						<span>OR</span>
						<img src={images.LineIcon} alt='' />
					</Divider>
					<SigninForm />
					<small>
						Don't have an account?
						<span>
							<Link to='/users/signup'>Sign up here</Link>
						</span>
					</small>
				</UserContainer>
			</Modal>
		</>
	);
};
