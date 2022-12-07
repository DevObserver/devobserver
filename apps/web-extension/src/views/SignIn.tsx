import React from 'react';

import { ReactComponent as Github } from '../assets/social/github.svg';
import { ReactComponent as Google } from '../assets/social/google.svg';
import { ReactComponent as Twitter } from '../assets/social/twitter.svg';
import { Button, Flex, Heading, Text } from '../ui';
import { NativeLink } from '../ui/NativeLink';
import { signIn } from '../utils/sign-in';
import { container, content, footer, footerLink, list } from './SignIn.css';

const providers = [
	{
		id: 'github',
		icon: <Github />,
	},
	{
		id: 'google',
		icon: <Google />,
	},
	{
		id: 'twitter',
		icon: <Twitter />,
	},
];

export const SignIn = () => {
	return (
		<div className={container}>
			<div className={content}>
				<Flex flexDirection="column" gap={24}>
					<Heading as="h1" align="center">
						Sign In
					</Heading>
					<Heading as="h3" variant="h5" align="center">
						Stay tuned with the latest developer news, articles, tutorials, releases, fun and much more.
					</Heading>
				</Flex>

				<ul className={list}>
					{providers.map((provider) => {
						return (
							<li key={provider.id}>
								<Button variant="secondary" onClick={() => signIn(provider.id)}>
									{provider.icon}
									<span>
										Sign in with <span style={{ textTransform: 'capitalize' }}>{provider.id}</span>
									</span>
								</Button>
							</li>
						);
					})}
				</ul>
			</div>

			<div className={footer}>
				<Text align="center">
					By signing in You accept DevObserver's <br />
					<NativeLink
						className={footerLink}
						href="https://devobserver.com/terms-of-use"
						target="_blank"
						rel="noreferrer">
						Terms of Service
					</NativeLink>{' '}
					and{' '}
					<NativeLink
						className={footerLink}
						href="https://devobserver.com/privacy policy"
						target="_blank"
						rel="noreferrer">
						Privacy Policy
					</NativeLink>
					.
				</Text>
			</div>
		</div>
	);
};
