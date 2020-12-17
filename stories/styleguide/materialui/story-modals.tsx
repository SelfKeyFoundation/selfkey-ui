import * as React from 'react';
import { Typography } from '@material-ui/core';
import ModalWithBackButton from '../../../src/materialui/modal-with-back-button';
import SimpleModalStory from './story-simplemodal';

const underlineStyle = {
	textDecoration: 'underline'
};

export default function ModalStories() {
	return (
		<div>
			<Typography variant="h3" style={underlineStyle} gutterBottom>
				With Close Button
			</Typography>
			<SimpleModalStory />
			<br />
			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Inline with Back Button
			</Typography>

			<ModalWithBackButton />
		</div>
	);
}
