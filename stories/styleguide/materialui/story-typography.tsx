import * as React from 'react';
import { Typography } from '@material-ui/core';
import { Tag } from '../../../src';

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
            <Typography variant="h4" gutterBottom>
                H2 - Notifications Unread
            </Typography>
            <Typography variant="h3" gutterBottom>
                H3 - Heading 3
            </Typography><br/>

            <Typography variant="h3" style={underlineStyle} gutterBottom>
                Body Text
            </Typography>
            <Typography variant="body1" gutterBottom>
                Paragraph Large 18px
            </Typography>
            <Typography variant="body2" gutterBottom>
                Paragraph 16px
            </Typography>
            <Typography variant="body2" color="secondary" gutterBottom>
                Definition Title 16px
            </Typography>
            <Typography variant="h5" gutterBottom>
                Definition description Title 16px
            </Typography>
            <Typography variant="body1" color="secondary" gutterBottom>
                Explanatory Large 18px
            </Typography>
            <Typography variant="subtitle2" color="secondary" gutterBottom>
                Explanatory 13/19px
            </Typography><br/>

            <Typography variant="h3" style={underlineStyle} gutterBottom>
                Tables
            </Typography>
            <Typography variant="overline" gutterBottom>
                Table Header 12/15px
            </Typography>
            <Typography variant="h6" gutterBottom>
                Table Text 15/18px
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Table Small Text 14/17px
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                Table Small Text Disabled 14/17px
            </Typography>
            <Typography variant="subtitle1" color="primary" gutterBottom>
                Table Small Link 14/17px
            </Typography>
            <Tag gutterBottom>
                First tag
            </Tag>
            <Tag gutterBottom>
                Second tag
            </Tag>
            <Tag gutterBottom>
                Third tag
            </Tag><br/><br/>

            <Typography variant="h3" style={underlineStyle} gutterBottom>
                Forms
            </Typography>
            <Typography variant="subtitle1" color="secondary" gutterBottom>
                Form Placeholder 14/21px
            </Typography>
            <Typography variant="overline" gutterBottom>
                Form Label 12/15px
            </Typography>
            <Typography variant="subtitle2" color="error" gutterBottom>
                Error Message 13/19px
            </Typography>
            <Typography variant="caption" gutterBottom>
                Warning Message 16/24px
            </Typography><br/>
        </div>
    )
}