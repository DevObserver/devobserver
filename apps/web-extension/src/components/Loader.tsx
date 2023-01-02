import React, { ReactNode } from 'react';

import { ViewLayout } from '../layouts/ViewLayout';
import { HStack } from '../ui';

interface AnimatedTextProps {
	children: ReactNode;
	delay: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, delay }) => {
	const style = {
		animationDelay: delay,
		fontFamily: 'monospace',
	};

	return (
		<p className="animate-fade-in opacity-0" style={style}>
			{children}
		</p>
	);
};

interface LoaderProps {
	title: string;
}

export const Loader: React.FC<LoaderProps> = ({ title }) => {
	return (
		<ViewLayout>
			<div>
				<HStack className="gap-4" alignItems="center">
					<AnimatedText delay=".1s">
						<b>DevObserver:~</b>
					</AnimatedText>
					<AnimatedText delay=".2s">do ls {title}</AnimatedText>
				</HStack>
				<AnimatedText delay=".3s">Connecting to the DevObserver Backend API...</AnimatedText>
				<AnimatedText delay=".4s">Connection successful!</AnimatedText>
				<AnimatedText delay=".6s">Authenticating request...</AnimatedText>
				<AnimatedText delay=".8s">Authentication successful!</AnimatedText>
				<AnimatedText delay="1.1s">Requesting data...</AnimatedText>
				<AnimatedText delay="1.2s">Data received!</AnimatedText>
				<AnimatedText delay="1.4s">Processing response...</AnimatedText>
			</div>
		</ViewLayout>
	);
};
