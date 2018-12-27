import * as React from 'react';
import { 
    Grid, 
    Typography,
    withStyles,
} from '@material-ui/core';
import HardDriveIcon from '../../../src/icons/hard-drive';
import { 
    TableSmallText, 
    Explanatory 
} from '../../../src/materialui/typography';
import { base } from '../../../src/colors';
import { FileUploadInput, FileUploadLabel } from '../../../src/materialui/inputs';
import { FullButton, OutlineButton } from '../../../src/materialui/buttons';

const underlineStyle = {
    textDecoration: 'underline',
}

export const FileUploadGrid = withStyles({
	container: {
        backgroundColor: base,
        border: '1px solid #303C49',
        borderRadius: '4px',
        height: '400px',
        width: '760px',
    },
})(Grid);

export const FileUploadHeaderGrid = withStyles({
	item: {
        marginLeft: '-210px',
        marginTop: '-150px',
        position: 'absolute',
    },
})(Grid);

export default function FileUploadStory () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
				File Upload
			</Typography>
            <br />
            <FileUploadGrid container direction='column' alignItems='center' justify='center' >
                <FileUploadHeaderGrid item>
                    <Typography variant='h2'>Upload Your National ID Document</Typography>
                </FileUploadHeaderGrid>

                <br />
                <Grid justify='center' alignItems='center' direction='column'>
                    <FileUploadLabel htmlFor="key-upload">
                        <HardDriveIcon />
                        <Grid item>
                            <TableSmallText>Select Document</TableSmallText>
                            <Explanatory>This is stored locally on your machine.</Explanatory>
                        </Grid>
                    </FileUploadLabel>
                    <FileUploadInput 
                        id="key-upload"
                        type="file"
                    />
                </Grid>
            </FileUploadGrid>
            <br/>
            <Grid container spacing={24}>
                <Grid item>
                    <FullButton size="large">Save</FullButton>
                </Grid>

                <Grid item>
                    <OutlineButton size="large">Cancel</OutlineButton>
                </Grid>
            </Grid>
            <br/>
            <br/>
        </div>
    )
}