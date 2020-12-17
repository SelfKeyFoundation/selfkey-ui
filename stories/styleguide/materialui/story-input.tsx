import * as React from 'react';
import {
	Typography,
	Grid,
	InputAdornment,
	FormControlLabel,
	Checkbox,
	Radio,
	Input,
	TextField
} from '@material-ui/core';
import {
	DecimalInput,
	FileUploadWidget,
	ArrayFileUploadWidget,
	MultilineSelect
} from '../../../src/materialui/inputs';

import DropdownStories from './story-dropdowns';

const underlineStyle = {
	textDecoration: 'underline'
};

export default class InputStories extends React.Component {
	state: any = {
		files: null,
		multilineSelect: {
			items: [],
			selected: []
		}
	};
	handlePDFOpen: any = (file: any) => {
		console.log('XXX', file);
		window.open(file.url);
	};
	handleFileChange: any = async (files: any, multiple: boolean) => {
		const filesData = await Promise.all(
			files.map((f: any) => {
				if (!f) {
					return null;
				}
				const url: any = URL.createObjectURL(f);
				const data: any = {
					mimeType: f.type,
					name: f.name,
					size: f.size,
					url
				};

				// eslint-disable-next-line
				const reader: any = new FileReader();
				reader.readAsDataURL(f);
				return new Promise((resolve, reject) => {
					reader.onload = () => {
						data.content = reader.result;
						resolve(data);
					};
					reader.onerror = () => {
						reject(null);
					};
				});
			})
		);

		const filteredData: any = filesData.filter((f: any) => !!f);

		const mergedData = multiple ? [...(this.state.files || []), ...filteredData] : filteredData;

		this.setState({ files: mergedData });
	};
	render() {
		return (
			<div>
				<Typography variant="h3" style={underlineStyle} gutterBottom>
					Text Input
				</Typography>

				<Grid container spacing={8}>
					<Grid item>
						<Typography variant="overline" gutterBottom>
							Normal / Focused
						</Typography>
						<Input disableUnderline placeholder="First Name" />
					</Grid>

					<Grid item>
						<Typography variant="overline" gutterBottom>
							Disabled
						</Typography>
						<Input disabled disableUnderline placeholder="First Name" />
					</Grid>

					<Grid item>
						<Typography variant="overline" gutterBottom>
							Error
						</Typography>
						<Input error disableUnderline placeholder="First Name" />
						<Typography variant="subtitle2" color="error" gutterBottom>
							Error Message
						</Typography>
					</Grid>
				</Grid>

				<Typography variant="h3" style={underlineStyle} gutterBottom>
					Text Field
				</Typography>
				<Grid container spacing={8}>
					<Grid item>
						<Typography variant="overline" gutterBottom>
							Multiline
						</Typography>
						<TextField multiline />
					</Grid>
				</Grid>
				<Typography variant="h3" style={underlineStyle} gutterBottom>
					File upload
				</Typography>

				<FileUploadWidget
					file={this.state.files && this.state.files.length ? this.state.files[0] : null}
					onChange={this.handleFileChange}
					accept="image/*,.pdf"
					onClearForm={() => {
						this.setState({ files: null });
					}}
				/>
				<Typography variant="h3" style={underlineStyle} gutterBottom>
					Array File upload
				</Typography>

				<ArrayFileUploadWidget
					files={this.state.files}
					onChange={this.handleFileChange}
					mimeTypes={['image/jpeg', 'image/png', 'application/pdf']}
					isError={true}
					uploadError="Super upload error, ignore, for testing only"
					errorFiles={{ 1: ['super file error 1', 'super file error 2'] }}
					onPDFOpen={this.handlePDFOpen}
					onClearForm={(file: any) => {
						let { files } = this.state;
						if (files) {
							files = files.filter((f: any) => f !== file);
						}

						this.setState({ files });
					}}
				/>

				<br />

				<Typography variant="h3" style={underlineStyle} gutterBottom>
					Dropdown
				</Typography>
				<Typography variant="overline" gutterBottom>
					Normal/Selection
				</Typography>
				<DropdownStories />
				<br />
				<br />
				<Typography variant="h3" style={underlineStyle} gutterBottom>
					Multiline Select
				</Typography>
				<MultilineSelect
					items={this.state.multilineSelect.items}
					selected={this.state.multilineSelect.selected}
					multiselect
					onAdd={() => {
						const newItem = Math.random();
						this.setState({
							multilineSelect: {
								...this.state.multilineSelect,
								items: [
									...this.state.multilineSelect.items,
									{ key: newItem, value: newItem }
								]
							}
						});
					}}
					onSelectUpdated={(selected: any) =>
						this.setState({
							multilineSelect: { ...this.state.multilineSelect, selected }
						})
					}
				/>
				<br />
				<br />

				<Typography variant="h3" style={underlineStyle} gutterBottom>
					Specific
				</Typography>
				<Grid container spacing={8}>
					<Grid item>
						<Typography variant="overline" gutterBottom>
							Decimal
						</Typography>

						<DecimalInput
							disableUnderline
							placeholder="0"
							type="number"
							endAdornment={
								<InputAdornment position="end">
									<Typography variant="h4" gutterBottom>
										%
									</Typography>
								</InputAdornment>
							}
						/>
					</Grid>

					<Grid item>
						<Typography variant="overline" gutterBottom>
							Date
						</Typography>

						<Input disableUnderline type="date" />
					</Grid>

					<Grid item>
						<Typography variant="overline" gutterBottom>
							Numeric
						</Typography>

						<Input disableUnderline placeholder="0" type="number" />
					</Grid>
				</Grid>
				<br />

				<br />
				<br />

				<Typography variant="h3" style={underlineStyle} gutterBottom>
					Checkboxes
				</Typography>

				<Grid container spacing={8} direction="column">
					<Grid item>
						<FormControlLabel control={<Checkbox />} label="Default" />

						<FormControlLabel control={<Checkbox checked />} label="Selected" />

						<FormControlLabel
							control={<Checkbox color="primary" />}
							label="Unselected, Error"
						/>

						<FormControlLabel
							control={<Checkbox color="primary" checked />}
							label="Selected, Error"
						/>

						<FormControlLabel
							control={<Checkbox indeterminate checked />}
							label="Bulk"
						/>

						<FormControlLabel
							control={<Checkbox disabled />}
							label="Unselected, Disabled"
						/>

						<FormControlLabel
							control={<Checkbox disabled checked />}
							label="Selected, Disabled"
						/>
					</Grid>
				</Grid>

				<br />
				<br />

				<Typography variant="h3" style={underlineStyle} gutterBottom>
					Radio buttons
				</Typography>

				<Grid container spacing={8} direction="column">
					<Grid item>
						<FormControlLabel
							label="Default"
							value="end"
							labelPlacement="end"
							control={<Radio />}
						/>

						<FormControlLabel
							label="Selected"
							value="end"
							labelPlacement="end"
							control={<Radio checked />}
						/>

						<FormControlLabel
							label="Unselected, Error"
							value="end"
							labelPlacement="end"
							control={<Radio color="primary" />}
						/>

						<FormControlLabel
							label="Selected, Error"
							value="end"
							labelPlacement="end"
							control={<Radio color="primary" checked />}
						/>

						<FormControlLabel
							label="Unselected, Disabled"
							value="end"
							labelPlacement="end"
							control={<Radio disabled />}
						/>

						<FormControlLabel
							label="Selected, Disabled"
							value="end"
							labelPlacement="end"
							control={<Radio disabled checked />}
						/>
					</Grid>
				</Grid>
				<br />
				<br />
			</div>
		);
	}
}
