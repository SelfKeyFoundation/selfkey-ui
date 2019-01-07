import * as React from 'react';
import { Typography } from '@material-ui/core';
import { 
    Paragraph,
    ParagraphLarge,
    Definition,
    DefinitionDescription,
    UnreadNotification,
    ExplanatoryLarge,
    Explanatory,
    TableText,
    TableSmallText,
    TableSmallTextDisabled,
    FormPlaceholder,
    ErrorMessage,
    WarningMessage,
	Tag, 
} from '../../../src/theme/selfkey-dark-theme';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function TypographyStories () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
				Headings
			</Typography>
			<Typography variant="h1" gutterBottom>
				H1 - Heading
			</Typography>
			<Typography variant="h2" gutterBottom>
				H2 - Heading 2
			</Typography>
			<UnreadNotification gutterBottom>
				H2 - Notifications Unread
			</UnreadNotification>
			<Typography variant="h3" gutterBottom>
				H3 - Heading 3
			</Typography> <br/>

			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Body Text
			</Typography>
			<ParagraphLarge gutterBottom>
				Paragraph Large 18px
			</ParagraphLarge>
			<Paragraph gutterBottom>
				Paragraph 16px
			</Paragraph>
			<Definition gutterBottom>
				Definition Title 16px
			</Definition>
			<DefinitionDescription gutterBottom>
				Definition description Title 16px
			</DefinitionDescription>
			<ExplanatoryLarge gutterBottom>
				Explanatory Large 18px
			</ExplanatoryLarge>
			<Explanatory gutterBottom>
				Explanatory 13/19px
			</Explanatory> <br/>


			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Tables
			</Typography>
			<Typography variant="overline" gutterBottom>
				Table Header 12/15px
			</Typography>
			<TableText gutterBottom>
				Table Text 15/18px 
			</TableText>
			<TableSmallText gutterBottom>
				Table Small Text 14/17px
			</TableSmallText>
			<TableSmallTextDisabled gutterBottom>
				Table Small Text Disabled 14/17px
			</TableSmallTextDisabled>
			<TableSmallText color="primary" gutterBottom>
				Table Small Link 14/17px
			</TableSmallText> 
			<Tag gutterBottom>
				First tag
			</Tag> 
			<Tag gutterBottom>
				Second tag
			</Tag>
			<Tag gutterBottom>
				Third tag
			</Tag> <br/><br/>
			

			<Typography variant="h3" style={underlineStyle} gutterBottom>
				Forms
			</Typography>
			<FormPlaceholder gutterBottom>
				Form Placeholder 14/21px
			</FormPlaceholder>
			<Typography variant="overline" gutterBottom>
				Form Label  12/15px
			</Typography>
			<ErrorMessage gutterBottom>
				Error Message 13/19px
			</ErrorMessage>
			<WarningMessage gutterBottom>
				Warning Message 16/24px
			</WarningMessage> 
			<br/>
        </div>
    )
}