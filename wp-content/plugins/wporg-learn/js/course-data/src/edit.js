/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Placeholder } from '@wordpress/components';

import { useGetCurrentPostType, useIsBlockInSidebar } from '../../hooks';
import { getBlockPlaceholderMessage } from '../../utils';

export default function Edit( { clientId } ) {
	const message = getBlockPlaceholderMessage(
		'lesson-plan',
		useGetCurrentPostType(),
		useIsBlockInSidebar( clientId, 'wporg-learn-courses' ),
		__( 'This will be dynamically populated based on the current course data.', 'wporg-learn' )
	);

	return (
		<Placeholder label={ __( 'Course Data', 'wporg-learn' ) }>
			<p>{ message }</p>
		</Placeholder>
	);
}
