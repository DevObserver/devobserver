import React, { ReactNode } from 'react';

import { Flex } from '../Elements';
import { ViewLayout } from '../Layouts/ViewLayout';
import { animatedText } from './Loader.css';

interface AnimatedTextProps {
	children: ReactNode;
	delay: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, delay }) => {
	const style = {
		animationDelay: delay,
	};

	return (
		<p className={animatedText} style={style}>
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
				<Flex gap={4}>
					<AnimatedText delay=".1s">
						<b>DevObserver:~</b>
					</AnimatedText>
					<AnimatedText delay=".2s">do ls {title}</AnimatedText>
				</Flex>
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
