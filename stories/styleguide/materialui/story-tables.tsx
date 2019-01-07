import * as React from 'react';
import { 
	Typography, 
	TableRow,
	TableCell,
	TableHead,
	TableBody,
	IconButton,
	Table,
} from '@material-ui/core';
import { 
	TableText,
	TableSmallText,
    MuiEditIcon,
    MuiDeleteIcon,
	LargeTableHeadRow,
	SmallTableHeadRow,
	SmallTableCell,
	SmallTableRow,
    TableSmallTextDisabled,
    Tag,
    TagTableCell,
} from '../../../src/theme/selfkey-dark-theme';
import PersonIcon from '../../../src/icons/person';
import CorporateIcon from '../../../src/icons/corporate';
import SelfkeyLogo from '../../../src/icons/selfkeyLogo';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function TableStories () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
                Large Table
            </Typography>
            <Table>
                <TableHead>
                    <LargeTableHeadRow>
                        <TableCell><Typography variant="overline" gutterBottom>Name</Typography></TableCell>
                        <TableCell><Typography variant="overline" gutterBottom>Type</Typography></TableCell>
                        <TableCell><Typography variant="overline" gutterBottom>Role</Typography></TableCell>
                        <TableCell><Typography variant="overline" gutterBottom>Residency/Domicile</Typography></TableCell>
                        <TableCell><Typography variant="overline" gutterBottom>Shares</Typography></TableCell>
                        <TableCell><Typography variant="overline" gutterBottom>Actions</Typography></TableCell>
                    </LargeTableHeadRow>
                </TableHead>

                <TableBody>
                    {[
                        {
                            name: 'Giacomo Guilizzoni',
                            type: 'Person',
                            role: 'Director, Shareholder',
                            residency: 'Singapore',
                            shares: '45%',
                            icons: 'icon, icon',
                        },
                        {
                            name: 'Marco Botton Ltd',
                            type: 'Corporate',
                            role: 'Shareholder',
                            residency: 'Hong Kong',
                            shares: '9%',
                            icons: 'icon, icon',
                        },
                        {
                            name: 'Big Things Limited',
                            type: 'Corporate',
                            role: 'Shareholder',
                            residency: 'Hong Kong',
                            shares: '53%',
                            icons: 'icon, icon',
                        },
                    ].map(row => {
                        return (
                        <TableRow key={row.name}>
                            <TableCell>
                                <TableText>{row.name}</TableText>
                            </TableCell>
                            <TableCell>
                                <TableText>{row.type}</TableText>
                            </TableCell>
                            <TableCell>
                                <TableText>{row.role}</TableText>
                            </TableCell>
                            <TableCell>
                                <TableText>{row.residency}</TableText>
                            </TableCell>
                            <TableCell>
                                <TableText>{row.shares}</TableText>
                            </TableCell>
                            <TableCell>
                                <TableText>
                                    <IconButton aria-label="Edit">
                                        <MuiEditIcon/>
                                    </IconButton>
                                    <IconButton aria-label="Delete">
                                        <MuiDeleteIcon />
                                    </IconButton>
                                </TableText>
                            </TableCell>
                        </TableRow>
                        );
                    })}
                </TableBody>
            </Table><br/>

            <Typography variant="h3" style={underlineStyle} gutterBottom>
                Small Table
            </Typography>
            <Table>
                <TableHead>
                    <SmallTableHeadRow>
                        <SmallTableCell><Typography variant="overline" gutterBottom>Type</Typography></SmallTableCell>
                        <SmallTableCell><Typography variant="overline" gutterBottom>Role</Typography></SmallTableCell>
                        <SmallTableCell><Typography variant="overline" gutterBottom>Name</Typography></SmallTableCell>
                        <SmallTableCell><Typography variant="overline" gutterBottom>E-Mail</Typography></SmallTableCell>
                        <SmallTableCell><Typography variant="overline" gutterBottom>Citizensip / Incorporation</Typography></SmallTableCell>
                        <SmallTableCell><Typography variant="overline" gutterBottom>Residency / Domicile</Typography></SmallTableCell>
                        <SmallTableCell><Typography variant="overline" gutterBottom>Shares</Typography></SmallTableCell>
                        <SmallTableCell><Typography variant="overline" gutterBottom>Selfkey User</Typography></SmallTableCell>
                        <SmallTableCell><Typography variant="overline" gutterBottom>Actions</Typography></SmallTableCell>
                    </SmallTableHeadRow>
                </TableHead>

                <TableBody>
                    {[
                        {
                            type: 'Person',
                            role: 'Director, Shareholder',
                            name: 'Giacomo Guilizzoni',
                            email: 'giacomo.guilizzoni@mail.com',
                            citizensip: 'Singapore',
                            residency: 'Singapore',
                            shares: '45%',
                            user: 'invite',
                            icons: 'icon, icon',
                        },
                        {
                            type: 'Corporate',
                            role: 'Shareholder',
                            name: 'Marco Botton Ltd',
                            email: 'giacomo.guilizzoni@mail.com',
                            citizensip: 'Hong Kong',
                            residency: 'Hong Kong',
                            shares: '9%',
                            user: 'logo',
                            icons: 'icon, icon',
                            disabled: true,
                        },
                        {
                            type: 'Corporate',
                            role: 'Shareholder',
                            name: 'Big Things Limited',
                            email: 'giacomo.guilizzoni@mail.com',
                            citizensip: 'Hong Kong',
                            residency: 'Hong Kong',
                            shares: '53%',
                            user: 'resend',
                            icons: 'icon, icon',
                        },
                        {
                            type: 'Corporate',
                            role: 'Shareholder',
                            name: 'Big Things Limited',
                            email: 'giacomo.guilizzoni@mail.com',
                            citizensip: 'Hong Kong',
                            residency: 'Hong Kong',
                            shares: '53%',
                            user: 'resend',
                            icons: 'icon, icon',
                            disabled: true,
                        },
                    ].map(row => {
                        return (
                            <SmallTableRow key={row.name}>
                                <SmallTableCell>
                                    { row.disabled 
                                        ? <TableSmallTextDisabled>{row.type}</TableSmallTextDisabled> 
                                        : <TableSmallText>{row.type}</TableSmallText>
                                    }
                                </SmallTableCell>
                                <SmallTableCell>
                                    { row.disabled 
                                        ? <TableSmallTextDisabled>{row.role}</TableSmallTextDisabled> 
                                        : <TableSmallText>{row.role}</TableSmallText>
                                    }
                                </SmallTableCell>
                                <SmallTableCell>
                                    { row.disabled 
                                        ? <TableSmallTextDisabled>{row.name}</TableSmallTextDisabled> 
                                        : <TableSmallText>{row.name}</TableSmallText>
                                    }
                                </SmallTableCell>
                                <SmallTableCell>
                                    { row.disabled 
                                        ? <TableSmallTextDisabled>{row.email}</TableSmallTextDisabled> 
                                        : <TableSmallText>{row.email}</TableSmallText>
                                    }
                                </SmallTableCell>
                                <SmallTableCell>
                                    { row.disabled 
                                        ? <TableSmallTextDisabled>{row.citizensip}</TableSmallTextDisabled> 
                                        : <TableSmallText>{row.citizensip}</TableSmallText>
                                    }
                                </SmallTableCell>
                                <SmallTableCell>
                                    { row.disabled 
                                        ? <TableSmallTextDisabled>{row.residency}</TableSmallTextDisabled> 
                                        : <TableSmallText>{row.residency}</TableSmallText>
                                    }
                                </SmallTableCell>
                                <SmallTableCell>
                                    { row.disabled 
                                        ? <TableSmallTextDisabled>{row.shares}</TableSmallTextDisabled> 
                                        : <TableSmallText>{row.shares}</TableSmallText>
                                    }
                                </SmallTableCell>
                                <SmallTableCell>
                                    <TableSmallText color="primary">
                                        { row.user === 'logo' ? <SelfkeyLogo/> : row.user}
                                    </TableSmallText>
                                </SmallTableCell>
                                <SmallTableCell>
                                    <TableSmallText>
                                        { row.disabled 
                                            ?  <IconButton aria-label="Edit" disabled>
                                                    <MuiEditIcon/>
                                                </IconButton>    
                                            :  <IconButton aria-label="Edit"> 
                                                    <MuiEditIcon/>
                                                </IconButton>    
                                        }

                                        { row.disabled 
                                            ?  <IconButton aria-label="Delete" disabled>
                                                    <MuiDeleteIcon/>
                                                </IconButton>
                                            :  <IconButton aria-label="Delete">
                                                    <MuiDeleteIcon/>
                                                </IconButton>
                                        }
                                    </TableSmallText>
                                </SmallTableCell>
                            </SmallTableRow>
                        );
                    })}
                </TableBody>
            </Table><br/>

            <Typography variant="h3" style={underlineStyle} gutterBottom>
                Multi-Line Table
            </Typography>
            <Table>
                <TableHead>
                    <LargeTableHeadRow>
                        <TableCell><Typography variant="overline" gutterBottom></Typography></TableCell>
                        <TableCell><Typography variant="overline" gutterBottom>Name</Typography></TableCell>
                        <TableCell><Typography variant="overline" gutterBottom>Type</Typography></TableCell>
                        <TableCell><Typography variant="overline" gutterBottom>Good for</Typography></TableCell>
                        <TableCell><Typography variant="overline" gutterBottom>Shares</Typography></TableCell>
                        <TableCell><Typography variant="overline" gutterBottom>Actions</Typography></TableCell>
                    </LargeTableHeadRow>
                </TableHead>

                <TableBody>
                    {[
                        {
                            name: 'Giacomo Guilizzoni',
                            role: 'Director',
                            type: 'Person',
                            tags: ['Territorial Tax', 'China Market Entry', 'ASEAN Market Entry', 'Structuring', 'Holding Company', 'Banking'],
                            shares: '45%',
                            icons: 'icon, icon',
                        },
                        {
                            name: 'Marco Botton Ltd',
                            role: 'Shareholder',
                            type: 'Corporate',
                            tags: ['TerritorialTax', 'ChinaMarketEntry', 'ASEANMarket', 'Structuring', 'HoldingCompany', 'Banking'],
                            shares: '9%',
                            icons: 'icon, icon',
                        },
                        {
                            name: 'Big Things Limited',
                            role: 'Shareholder',
                            type: 'Corporate',
                            tags: ['7th tag', '8th tag', '9th tag'],
                            shares: '53%',
                            icons: 'icon, icon',
                        },
                    ].map(row => {
                        return (
                        <TableRow key={row.name}>
                            <TableCell>
                                { row.type === 'Person' ? <PersonIcon/> : <CorporateIcon/> }
                            </TableCell>
                            <TableCell>
                                <TableText>{row.name}</TableText>
                                <TableSmallTextDisabled>{row.role}</TableSmallTextDisabled>
                            </TableCell>
                            <TableCell>
                                <TableText>{row.type}</TableText>
                            </TableCell>
                            <TagTableCell>
                                {
                                    row.tags.map(tag => {
                                        return (
                                            <Tag key={tag}>{tag}</Tag>
                                        )
                                    })
                                }
                            </TagTableCell>
                            <TableCell>
                                <TableText>{row.shares}</TableText>
                            </TableCell>
                            <TableCell>
                                <TableText>
                                    <IconButton aria-label="Edit">
                                        <MuiEditIcon/>
                                    </IconButton>
                                    <IconButton aria-label="Delete">
                                        <MuiDeleteIcon />
                                    </IconButton>
                                </TableText>
                            </TableCell>
                        </TableRow>
                        );
                    })}
                </TableBody>
            </Table><br/><br/>

        </div>
    )
}