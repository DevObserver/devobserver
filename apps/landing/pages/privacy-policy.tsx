import { x } from '@xstyled/emotion';

import { Container } from '@/components/elements/Container';

const PrivacyPolicyPage = () => {
	return (
		<x.section minHeight="640px" py={120}>
			<Container>
				<x.div maxWidth={640} mx="auto">
					<x.h1 fontSize={48} mb={24}>
						Privacy Policy
					</x.h1>
					<x.p mb={12}>
						Your privacy is important to us. It is our policy to respect your privacy regarding any
						information we may collect from you across our website, https://devobserver.com, and other sites
						we own and operate.
					</x.p>
					<x.p mb={12}>
						We only ask for personal information when we truly need it to provide a service to you. We collect
						it by fair and lawful means, with your knowledge and consent. We also let you know why we’re
						collecting it and how it will be used.
					</x.p>
					<x.p mb={12}>
						We only retain collected information for as long as necessary to provide you with your requested
						service. What data we store, we’ll protect within commercially acceptable means to prevent loss
						and theft, as well as unauthorised access, disclosure, copying, use or modification.
					</x.p>
					<x.p mb={12}>
						We don’t share any personally identifying information publicly or with third-parties, except when
						required to by law.
					</x.p>
					<x.p mb={12}>
						Our app/website may link to external sites that are not operated by us. Please be aware that we
						have no control over the content and practices of these sites, and cannot accept responsibility or
						liability for their respective privacy policies.
					</x.p>
					<x.p mb={12}>
						You are free to refuse our request for your personal information, with the understanding that we
						may be unable to provide you with some of your desired services.
					</x.p>
					<x.p mb={12}>
						Your continued use of our website will be regarded as acceptance of our practices around privacy
						and personal information. If you have any questions about how we handle user data and personal
						information, feel free to contact us.
					</x.p>
				</x.div>
			</Container>
		</x.section>
	);
};

export default PrivacyPolicyPage;
