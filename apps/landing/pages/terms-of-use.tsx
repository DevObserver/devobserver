import { x } from '@xstyled/emotion';

import { Container } from '@/components/elements/Container';

const TermsOfUsePage = () => {
	return (
		<x.section minHeight="640px" py={120}>
			<Container>
				<x.div maxWidth={640} mx="auto">
					<x.h1 fontSize={48} mb={24}>
						Terms Of Use
					</x.h1>
					<x.h3 fontSize={24} mb={8}>
						1. Terms
					</x.h3>
					<x.p mb={24}>
						By accessing the DevObserver App, you are agreeing to be bound by these terms of service, all
						applicable laws and regulations, and agree that you are responsible for compliance with any
						applicable local laws. If you do not agree with any of these terms, you are prohibited from using
						or accessing this site. The materials contained in this website are protected by applicable
						copyright and trademark law.
					</x.p>
					<x.h3 fontSize={24} mb={8}>
						2. Use License
					</x.h3>
					<x.p mb={24}>
						Permission is granted to temporarily download one copy of the materials (information or software)
						at DevObserver App for personal, non-commercial transitory viewing only. This is the grant of a
						license, not a transfer of title, and under this license you may not:
					</x.p>
					<x.ul mb={24}>
						<li>- modify or copy the materials;</li>
						<li>
							- use the materials for any commercial purpose, or for any public display (commercial or
							non-commercial);
						</li>
						<li>- attempt to decompile or reverse engineer any software contained on DevObserver App;</li>
						<li>- remove any copyright or other proprietary notations from the materials; or</li>
						<li>- transfer the materials to another person or "mirror" the materials on any other server.</li>
					</x.ul>
					<x.p mb={24}>
						This license shall automatically terminate if you violate any of these restrictions and may be
						terminated by DevObserver at any time. Upon terminating your viewing of these materials or upon
						the termination of this license, you must destroy any downloaded materials in your possession
						whether in electronic or printed format.
					</x.p>
					<x.h3 fontSize={24} mb={8}>
						3. Disclaimer
					</x.h3>
					<x.p mb={24}>
						The materials at DevObserver App are provided on an 'as is' basis. DevObserver App makes no
						warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
						without limitation, implied warranties or conditions of merchantability, fitness for a particular
						purpose, or non-infringement of intellectual property or other violation of rights.
					</x.p>
					<x.p mb={24}>
						Further, DevObserver App does not warrant or make any representations concerning the accuracy,
						likely results, or reliability of the use of the materials on its website or otherwise relating to
						such materials or on any sites linked to this site.
					</x.p>
					<x.h3 fontSize={24} mb={8}>
						4. Limitations
					</x.h3>
					<x.p mb={24}>
						In no event shall DevObserver App or its suppliers be liable for any damages (including, without
						limitation, damages for loss of data or profit, or due to business interruption) arising out of
						the use or inability to use the materials at DevObserver App, even if DevObserver App or a
						DevObserver App authorized representative has been notified orally or in writing of the
						possibility of such damage. Because some jurisdictions do not allow limitations on implied
						warranties, or limitations of liability for consequential or incidental damages, these limitations
						may not apply to you.
					</x.p>
					<x.h3 fontSize={24} mb={8}>
						5. Accuracy of materials
					</x.h3>
					<x.p mb={24}>
						The materials appearing at DevObserver App could include technical, typographical, or photographic
						errors. DevObserver App does not warrant that any of the materials on its website are accurate,
						complete or current. DevObserver App may make changes to the materials contained on its website at
						any time without notice. However DevObserver App does not make any commitment to update the
						materials.
					</x.p>
					<x.h3 fontSize={24} mb={8}>
						6. Links
					</x.h3>
					<x.p mb={24}>
						DevObserver App has not reviewed all of the sites linked to its website and is not responsible for
						the contents of any such linked site. The inclusion of any link does not imply endorsement by
						DevObserver App of the site. Use of any such linked website is at the user's own risk.
					</x.p>
					<x.h3 fontSize={24} mb={8}>
						7. Modifications
					</x.h3>
					<x.p mb={24}>
						DevObserver App may revise these terms of service for its website at any time without notice. By
						using this website you are agreeing to be bound by the then current version of these terms of
						service.
					</x.p>
					<x.h3 fontSize={24} mb={8}>
						8. Governing Law
					</x.h3>
					<x.p mb={24}>
						These terms and conditions are governed by and construed in accordance with the laws of Hungary
						and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
					</x.p>
				</x.div>
			</Container>
		</x.section>
	);
};

export default TermsOfUsePage;
