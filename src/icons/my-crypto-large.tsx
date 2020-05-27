import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import LinearGradient from './_linearGradient';

const styles: StyleSheet = {
	root: {
		transition: 'all 0.2s ease-out',
		'&:hover': {
			fill: 'white',
		},
	}
};

const linearGradientColor = 'url(#default-linear-gradient)';

export const MyCryptoLargeIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps) => (
	<SvgIcon style={{ width: props.width || '66px', height: props.height || '64px', fill: props.fill || linearGradientColor }} {...props} viewBox={props.viewBox || "0 0 66 64"}>
		<LinearGradient />
		<g id="🖥-Main-Dashboard" stroke="none" strokeWidth="1" fill="inherit" fillRule="evenodd">
			<g id="MMTokens" transform="translate(-687.000000, -146.000000)" fill="inherit" fillRule="nonzero" >
				<g id="Page-header" transform="translate(409.000000, 146.000000)">
					<g id="icon-my-crypto-large" transform="translate(279.000000, 0.000000)">
						<path
							d="M2.707031,0 L1.292969,1.414062 L10.808594,10.929687 C5.96875,16.113281 3,23.0625 3,30.707031 C3,38.351562 5.96875,45.300781 10.808594,50.484375 L1.292969,60 L2.707031,61.414062 L12.222656,51.898437 C17.40625,56.738281 24.355469,59.707031 32,59.707031 C39.644531,59.707031 46.59375,56.738281 51.777344,51.898437 L61.292969,61.414062 L62.707031,60 L53.191406,50.484375 C58.03125,45.300781 61,38.351562 61,30.707031 C61,23.0625 58.03125,16.113281 53.191406,10.929687 L62.707031,1.414062 L61.292969,0 L51.777344,9.515625 C46.59375,4.675781 39.644531,1.707031 32,1.707031 C24.355469,1.707031 17.40625,4.675781 12.222656,9.515625 L2.707031,0 Z M1,3.707031 C0.449219,3.707031 0,4.15625 0,4.707031 C0,5.257812 0.449219,5.707031 1,5.707031 C1.550781,5.707031 2,5.257812 2,4.707031 C2,4.15625 1.550781,3.707031 1,3.707031 Z M32,3.707031 C46.921875,3.707031 59,15.785156 59,30.707031 C59,45.628906 46.921875,57.707031 32,57.707031 C17.078125,57.707031 5,45.628906 5,30.707031 C5,15.785156 17.078125,3.707031 32,3.707031 Z M63,3.707031 C62.449219,3.707031 62,4.15625 62,4.707031 C62,5.257812 62.449219,5.707031 63,5.707031 C63.550781,5.707031 64,5.257812 64,4.707031 C64,4.15625 63.550781,3.707031 63,3.707031 Z M4,6.707031 C3.449219,6.707031 3,7.15625 3,7.707031 C3,8.257812 3.449219,8.707031 4,8.707031 C4.550781,8.707031 5,8.257812 5,7.707031 C5,7.15625 4.550781,6.707031 4,6.707031 Z M32,6.707031 C31.449219,6.707031 31,7.15625 31,7.707031 C31,8.257812 31.449219,8.707031 32,8.707031 C32.550781,8.707031 33,8.257812 33,7.707031 C33,7.15625 32.550781,6.707031 32,6.707031 Z M60,6.707031 C59.449219,6.707031 59,7.15625 59,7.707031 C59,8.257812 59.449219,8.707031 60,8.707031 C60.550781,8.707031 61,8.257812 61,7.707031 C61,7.15625 60.550781,6.707031 60,6.707031 Z M27.515625,7.148437 C27.449219,7.148437 27.382813,7.15625 27.316406,7.167969 C26.777344,7.277344 26.425781,7.800781 26.53125,8.34375 C26.640625,8.886719 27.167969,9.238281 27.707031,9.128906 C28.25,9.019531 28.601563,8.496094 28.496094,7.953125 C28.402344,7.488281 27.992188,7.152344 27.515625,7.148437 Z M36.511719,7.148437 C36.023438,7.136719 35.601563,7.476562 35.503906,7.953125 C35.398438,8.496094 35.75,9.019531 36.292969,9.128906 C36.550781,9.179687 36.820313,9.128906 37.042969,8.980469 C37.261719,8.832031 37.417969,8.605469 37.46875,8.34375 C37.519531,8.082031 37.464844,7.8125 37.320313,7.59375 C37.171875,7.371094 36.941406,7.21875 36.683594,7.167969 C36.625,7.15625 36.570313,7.148437 36.511719,7.148437 Z M23.203125,8.457031 C23.070313,8.457031 22.941406,8.480469 22.816406,8.535156 C22.304688,8.746094 22.0625,9.328125 22.277344,9.839844 C22.488281,10.347656 23.070313,10.589844 23.578125,10.378906 C23.824219,10.28125 24.019531,10.085937 24.121094,9.839844 C24.222656,9.59375 24.222656,9.320312 24.125,9.074219 C23.96875,8.703125 23.605469,8.460937 23.203125,8.457031 Z M40.824219,8.457031 C40.410156,8.449219 40.035156,8.691406 39.875,9.074219 C39.664063,9.585937 39.90625,10.167969 40.417969,10.378906 C40.929688,10.59375 41.511719,10.351562 41.722656,9.839844 C41.9375,9.328125 41.695313,8.746094 41.183594,8.535156 C41.070313,8.484375 40.945313,8.460937 40.824219,8.457031 Z M7,9.707031 C6.449219,9.707031 6,10.15625 6,10.707031 C6,11.257812 6.449219,11.707031 7,11.707031 C7.550781,11.707031 8,11.257812 8,10.707031 C8,10.15625 7.550781,9.707031 7,9.707031 Z M57,9.707031 C56.449219,9.707031 56,10.15625 56,10.707031 C56,11.257812 56.449219,11.707031 57,11.707031 C57.550781,11.707031 58,11.257812 58,10.707031 C58,10.15625 57.550781,9.707031 57,9.707031 Z M19.234375,10.582031 C19.03125,10.578125 18.832031,10.636719 18.667969,10.75 C18.207031,11.058594 18.082031,11.675781 18.390625,12.136719 C18.695313,12.597656 19.316406,12.71875 19.777344,12.414062 C20,12.265625 20.152344,12.039062 20.203125,11.777344 C20.253906,11.515625 20.199219,11.246094 20.050781,11.023437 C19.871094,10.75 19.5625,10.585937 19.234375,10.582031 Z M44.796875,10.582031 C44.453125,10.574219 44.132813,10.742187 43.945313,11.023437 C43.636719,11.484375 43.761719,12.105469 44.21875,12.410156 C44.441406,12.558594 44.710938,12.613281 44.972656,12.5625 C45.234375,12.511719 45.460938,12.359375 45.609375,12.136719 C45.914063,11.675781 45.792969,11.054687 45.332031,10.75 C45.171875,10.644531 44.988281,10.585937 44.796875,10.582031 Z M15.75,13.441406 C15.480469,13.441406 15.21875,13.546875 15.03125,13.738281 C14.640625,14.125 14.640625,14.761719 15.03125,15.148437 C15.417969,15.539062 16.054688,15.539062 16.441406,15.148437 C16.832031,14.761719 16.832031,14.125 16.441406,13.738281 C16.257813,13.550781 16.011719,13.445312 15.75,13.441406 Z M48.277344,13.441406 C48.007813,13.441406 47.746094,13.546875 47.558594,13.738281 C47.167969,14.125 47.167969,14.761719 47.558594,15.148437 C47.945313,15.539062 48.582031,15.539062 48.96875,15.148437 C49.359375,14.761719 49.359375,14.125 48.96875,13.738281 C48.785156,13.550781 48.539063,13.445312 48.277344,13.441406 Z M51.136719,16.925781 C50.933594,16.925781 50.734375,16.984375 50.566406,17.097656 C50.109375,17.402344 49.984375,18.023437 50.292969,18.484375 C50.601563,18.941406 51.21875,19.066406 51.679688,18.757812 C52.136719,18.449219 52.261719,17.832031 51.953125,17.371094 C51.773438,17.097656 51.464844,16.929687 51.136719,16.925781 Z M12.894531,16.925781 C12.554688,16.921875 12.234375,17.089844 12.046875,17.375 C11.738281,17.832031 11.863281,18.453125 12.320313,18.757812 C12.78125,19.066406 13.402344,18.941406 13.707031,18.484375 C14.015625,18.023437 13.890625,17.402344 13.433594,17.097656 C13.273438,16.988281 13.085938,16.929687 12.894531,16.925781 Z M10.773438,20.90625 C10.359375,20.894531 9.984375,21.140625 9.828125,21.519531 C9.617188,22.03125 9.859375,22.617187 10.371094,22.828125 C10.878906,23.039062 11.464844,22.796875 11.675781,22.285156 C11.886719,21.777344 11.644531,21.191406 11.136719,20.980469 C11.019531,20.933594 10.898438,20.90625 10.773438,20.90625 Z M53.257813,20.90625 C53.125,20.902344 52.992188,20.929687 52.867188,20.980469 C52.355469,21.191406 52.113281,21.777344 52.328125,22.285156 C52.539063,22.796875 53.121094,23.039062 53.632813,22.828125 C54.144531,22.617187 54.386719,22.03125 54.171875,21.519531 C54.019531,21.152344 53.660156,20.90625 53.257813,20.90625 Z M9.46875,25.222656 C8.980469,25.207031 8.554688,25.546875 8.460938,26.023437 C8.351563,26.566406 8.703125,27.09375 9.246094,27.203125 C9.789063,27.308594 10.3125,26.957031 10.421875,26.414062 C10.472656,26.15625 10.421875,25.886719 10.273438,25.664062 C10.125,25.445312 9.898438,25.289062 9.636719,25.238281 C9.582031,25.226562 9.523438,25.222656 9.46875,25.222656 Z M54.5625,25.222656 C54.496094,25.21875 54.429688,25.226562 54.363281,25.238281 C54.105469,25.289062 53.875,25.441406 53.726563,25.664062 C53.582031,25.882812 53.527344,26.152344 53.578125,26.414062 C53.628906,26.675781 53.78125,26.902344 54.003906,27.050781 C54.222656,27.199219 54.492188,27.253906 54.753906,27.203125 C55.015625,27.148437 55.242188,26.996094 55.390625,26.777344 C55.539063,26.554687 55.59375,26.285156 55.542969,26.023437 C55.449219,25.558594 55.039063,25.222656 54.5625,25.222656 Z M9,29.707031 C8.449219,29.707031 8,30.15625 8,30.707031 C8,31.257812 8.449219,31.707031 9,31.707031 C9.550781,31.707031 10,31.257812 10,30.707031 C10,30.15625 9.550781,29.707031 9,29.707031 Z M55,29.707031 C54.449219,29.707031 54,30.15625 54,30.707031 C54,31.257812 54.449219,31.707031 55,31.707031 C55.550781,31.707031 56,31.257812 56,30.707031 C56,30.15625 55.550781,29.707031 55,29.707031 Z M54.582031,34.191406 C54.097656,34.179687 53.671875,34.519531 53.578125,35 C53.46875,35.539062 53.820313,36.066406 54.363281,36.175781 C54.90625,36.28125 55.429688,35.929687 55.539063,35.390625 C55.648438,34.847656 55.296875,34.320312 54.753906,34.210937 C54.699219,34.203125 54.640625,34.195312 54.582031,34.191406 Z M9.449219,34.195312 C9.378906,34.195312 9.3125,34.199219 9.25,34.210937 C8.988281,34.265625 8.757813,34.417969 8.609375,34.636719 C8.464844,34.859375 8.410156,35.128906 8.460938,35.390625 C8.511719,35.648437 8.664063,35.878906 8.886719,36.027344 C9.105469,36.171875 9.375,36.226562 9.636719,36.175781 C9.898438,36.125 10.125,35.972656 10.273438,35.75 C10.421875,35.53125 10.476563,35.261719 10.421875,35 C10.332031,34.535156 9.921875,34.199219 9.449219,34.195312 Z M10.761719,38.507812 C10.625,38.507812 10.492188,38.53125 10.371094,38.582031 C9.859375,38.796875 9.617188,39.378906 9.828125,39.890625 C10.039063,40.402344 10.625,40.644531 11.136719,40.429687 C11.644531,40.21875 11.886719,39.636719 11.675781,39.125 C11.523438,38.753906 11.160156,38.511719 10.761719,38.507812 Z M53.269531,38.507812 C52.859375,38.5 52.484375,38.742187 52.328125,39.125 C52.113281,39.636719 52.355469,40.21875 52.867188,40.429687 C53.113281,40.53125 53.386719,40.53125 53.632813,40.429687 C53.878906,40.328125 54.074219,40.132812 54.171875,39.890625 C54.386719,39.378906 54.144531,38.792969 53.632813,38.582031 C53.519531,38.535156 53.394531,38.511719 53.269531,38.507812 Z M51.140625,42.484375 C50.800781,42.476562 50.480469,42.644531 50.292969,42.925781 C49.984375,43.386719 50.109375,44.007812 50.566406,44.316406 C50.789063,44.460937 51.058594,44.515625 51.320313,44.464844 C51.582031,44.410156 51.808594,44.257812 51.957031,44.035156 C52.261719,43.578125 52.140625,42.957031 51.679688,42.648437 C51.519531,42.542969 51.335938,42.484375 51.140625,42.484375 Z M12.890625,42.484375 C12.6875,42.480469 12.488281,42.539062 12.324219,42.652344 C11.863281,42.957031 11.738281,43.578125 12.046875,44.039062 C12.351563,44.5 12.972656,44.621094 13.433594,44.316406 C13.652344,44.167969 13.804688,43.941406 13.859375,43.679687 C13.910156,43.417969 13.855469,43.148437 13.707031,42.925781 C13.527344,42.652344 13.21875,42.488281 12.890625,42.484375 Z M15.75,45.972656 C15.480469,45.96875 15.21875,46.074219 15.03125,46.265625 C14.640625,46.652344 14.640625,47.289062 15.03125,47.675781 C15.417969,48.066406 16.054688,48.066406 16.441406,47.675781 C16.832031,47.289062 16.832031,46.652344 16.441406,46.265625 C16.257813,46.078125 16.011719,45.972656 15.75,45.972656 Z M48.277344,45.972656 C48.007813,45.964844 47.746094,46.070312 47.554688,46.265625 C47.164063,46.652344 47.164063,47.289062 47.554688,47.675781 C47.945313,48.066406 48.578125,48.066406 48.96875,47.675781 C49.359375,47.289062 49.359375,46.652344 48.96875,46.265625 C48.785156,46.078125 48.539063,45.976562 48.277344,45.972656 Z M19.238281,48.828125 C18.898438,48.820312 18.578125,48.988281 18.390625,49.273437 C18.085938,49.734375 18.207031,50.355469 18.667969,50.660156 C19.128906,50.96875 19.746094,50.84375 20.054688,50.382812 C20.203125,50.164062 20.257813,49.894531 20.203125,49.632812 C20.152344,49.371094 20,49.144531 19.78125,48.996094 C19.621094,48.890625 19.433594,48.832031 19.238281,48.828125 Z M44.792969,48.828125 C44.589844,48.824219 44.390625,48.886719 44.222656,49 C43.765625,49.304687 43.640625,49.925781 43.949219,50.382812 C44.253906,50.84375 44.875,50.96875 45.332031,50.660156 C45.792969,50.355469 45.917969,49.734375 45.609375,49.273437 C45.429688,49 45.121094,48.832031 44.792969,48.828125 Z M23.21875,50.957031 C22.808594,50.945312 22.433594,51.191406 22.277344,51.570312 C22.0625,52.082031 22.304688,52.667969 22.816406,52.878906 C23.328125,53.089844 23.910156,52.847656 24.125,52.335937 C24.335938,51.828125 24.09375,51.242187 23.582031,51.03125 C23.46875,50.984375 23.34375,50.957031 23.21875,50.957031 Z M40.808594,50.957031 C40.675781,50.953125 40.542969,50.980469 40.421875,51.03125 C40.175781,51.132812 39.980469,51.328125 39.878906,51.570312 C39.777344,51.816406 39.777344,52.09375 39.875,52.335937 C40.089844,52.847656 40.671875,53.089844 41.183594,52.878906 C41.695313,52.667969 41.9375,52.082031 41.722656,51.570312 C41.570313,51.203125 41.210938,50.957031 40.808594,50.957031 Z M27.539063,52.265625 C27.050781,52.253906 26.625,52.59375 26.53125,53.070312 C26.480469,53.332031 26.535156,53.601562 26.679688,53.820312 C26.828125,54.042969 27.058594,54.195312 27.316406,54.246094 C27.859375,54.355469 28.386719,54.003906 28.496094,53.460937 C28.601563,52.917969 28.25,52.394531 27.707031,52.285156 C27.652344,52.273437 27.597656,52.265625 27.539063,52.265625 Z M36.492188,52.265625 C36.425781,52.265625 36.359375,52.273437 36.292969,52.285156 C35.75,52.394531 35.398438,52.917969 35.507813,53.460937 C35.617188,54.003906 36.140625,54.355469 36.683594,54.246094 C37.226563,54.136719 37.578125,53.613281 37.46875,53.070312 C37.375,52.605469 36.96875,52.269531 36.492188,52.265625 Z M32,52.707031 C31.449219,52.707031 31,53.15625 31,53.707031 C31,54.257812 31.449219,54.707031 32,54.707031 C32.550781,54.707031 33,54.257812 33,53.707031 C33,53.15625 32.550781,52.707031 32,52.707031 Z M13,54.707031 C12.449219,54.707031 12,55.15625 12,55.707031 C12,56.257812 12.449219,56.707031 13,56.707031 C13.550781,56.707031 14,56.257812 14,55.707031 C14,55.15625 13.550781,54.707031 13,54.707031 Z M51,54.707031 C50.449219,54.707031 50,55.15625 50,55.707031 C50,56.257812 50.449219,56.707031 51,56.707031 C51.550781,56.707031 52,56.257812 52,55.707031 C52,55.15625 51.550781,54.707031 51,54.707031 Z M10,57.707031 C9.449219,57.707031 9,58.15625 9,58.707031 C9,59.257812 9.449219,59.707031 10,59.707031 C10.550781,59.707031 11,59.257812 11,58.707031 C11,58.15625 10.550781,57.707031 10,57.707031 Z M54,57.707031 C53.449219,57.707031 53,58.15625 53,58.707031 C53,59.257812 53.449219,59.707031 54,59.707031 C54.550781,59.707031 55,59.257812 55,58.707031 C55,58.15625 54.550781,57.707031 54,57.707031 Z M7,60.707031 C6.449219,60.707031 6,61.15625 6,61.707031 C6,62.257812 6.449219,62.707031 7,62.707031 C7.550781,62.707031 8,62.257812 8,61.707031 C8,61.15625 7.550781,60.707031 7,60.707031 Z M57,60.707031 C56.449219,60.707031 56,61.15625 56,61.707031 C56,62.257812 56.449219,62.707031 57,62.707031 C57.550781,62.707031 58,62.257812 58,61.707031 C58,61.15625 57.550781,60.707031 57,60.707031 Z"
							id="Shape"
						/>
					</g>
				</g>
			</g>
		</g>
	</SvgIcon>
));

export default MyCryptoLargeIcon;
