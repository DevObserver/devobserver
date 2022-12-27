import React from 'react';

import { ReactComponent as Github } from '../assets/social/github.svg';
import { ReactComponent as Google } from '../assets/social/google.svg';
import { ReactComponent as Twitter } from '../assets/social/twitter.svg';
import { Button, Heading, Text, VStack } from '../ui';
import { NativeLink } from '../ui/NativeLink';
import { signIn } from '../utils/sign-in';

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
		<VStack className="min-h-680 w-full" alignItems="center" justifyContent="center">
			<VStack className="gap-24 max-w-480">
				<VStack className="gap-24">
					<Heading as="h1" align="center">
						Sign In
					</Heading>
					<Heading as="h3" variant="h5" align="center">
						Stay tuned with the latest developer news, articles, tutorials, releases, fun and much more.
					</Heading>
				</VStack>

				<VStack as="ul" className="gap-12" alignItems="center">
					{providers.map((provider) => {
						return (
							<li key={provider.id}>
								<Button intent="primary" state="active" onClick={() => signIn(provider.id)}>
									{provider.icon}
									<span>
										Sign in with <span style={{ textTransform: 'capitalize' }}>{provider.id}</span>
									</span>
								</Button>
							</li>
						);
					})}
				</VStack>
			</VStack>

			<div className="absolute bottom-0 left-1/2 p-24 -translate-x-1/2">
				<Text align="center">
					By signing in You accept DevObserver's <br />
					<NativeLink
						className="underline hover:no-underline"
						href="https://devobserver.com/terms-of-use"
						target="_blank"
						rel="noreferrer">
						Terms of Service
					</NativeLink>{' '}
					and{' '}
					<NativeLink
						className="underline hover:no-underline"
						href="https://devobserver.com/privacy policy"
						target="_blank"
						rel="noreferrer">
						Privacy Policy
					</NativeLink>
					.
				</Text>
			</div>
		</VStack>
	);
};
