import { useContext } from 'react';

import { Context } from '../../../context/export/export-context';

import Layout from '../../../templates/layout';
import WizardStep from '../../../ui/wizard-step/wizard-step';
import InlineLink from '../../../ui/inline-link/inline-link';
import WizardFooter from 'elementor-app/organisms/wizard-footer';
import DashboardButton from 'elementor-app/molecules/dashboard-button';

export default function ExportComplete() {
	const exportContext = useContext( Context ),
		getFooter = () => (
			<WizardFooter separator justify="end">
				<DashboardButton />
			</WizardFooter>
		),
		getDownloadLink = () => (
			<InlineLink url={ exportContext.data.downloadURL } target="_self" download>
				{ __( 'Click Here', 'elementor' ) }
			</InlineLink>
		);

	return (
		<Layout type="export" footer={ getFooter() }>
			<WizardStep
				image={ elementorAppConfig.assets_url + 'images/go-pro.svg' }
				heading={ __( 'Your export is ready!', 'elementor' ) }
				description={
					<>
						{ __( 'The download should start in a few seconds.', 'elementor' ) }
						<br />
						{ __( 'You can then import the file and use it on other sites.', 'elementor' ) }
					</>
				}
				notice={ (
					<>
						{ __( 'Download not working?', 'elementor' ) } { getDownloadLink() } { __( 'to dawnload', 'elementor' ) }
					</>
				) }
			/>
		</Layout>
	);
}
