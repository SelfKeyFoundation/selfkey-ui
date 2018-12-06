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
	TableHeader,
	TableText,
	TableSmallText,
	MuiEditIcon,
	LargeTableHeadRow,
	SmallTableHeadRow,
	SmallTableCell,
	SmallTableRow,
    TableSmallTextDisabled,
    Tag,
    TagTableCell,
} from '../../../src/theme/selfkey-dark-theme';
import DeleteIcon from '../../../src/icons/delete';
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
                        <TableCell><TableHeader>Name</TableHeader></TableCell>
                        <TableCell><TableHeader>Type</TableHeader></TableCell>
                        <TableCell><TableHeader>Role</TableHeader></TableCell>
                        <TableCell><TableHeader>Residency/Domicile</TableHeader></TableCell>
                        <TableCell><TableHeader>Shares</TableHeader></TableCell>
                        <TableCell><TableHeader>Actions</TableHeader></TableCell>
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
                                        <DeleteIcon />
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
                        <SmallTableCell><TableHeader>Type</TableHeader></SmallTableCell>
                        <SmallTableCell><TableHeader>Role</TableHeader></SmallTableCell>
                        <SmallTableCell><TableHeader>Name</TableHeader></SmallTableCell>
                        <SmallTableCell><TableHeader>E-Mail</TableHeader></SmallTableCell>
                        <SmallTableCell><TableHeader>Citizensip / Incorporation</TableHeader></SmallTableCell>
                        <SmallTableCell><TableHeader>Residency / Domicile</TableHeader></SmallTableCell>
                        <SmallTableCell><TableHeader>Shares</TableHeader></SmallTableCell>
                        <SmallTableCell><TableHeader>Selfkey User</TableHeader></SmallTableCell>
                        <SmallTableCell><TableHeader>Actions</TableHeader></SmallTableCell>
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
                                                    <DeleteIcon/>
                                                </IconButton>
                                            :  <IconButton aria-label="Delete">
                                                    <DeleteIcon/>
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
                        <TableCell><TableHeader></TableHeader></TableCell>
                        <TableCell><TableHeader>Name</TableHeader></TableCell>
                        <TableCell><TableHeader>Type</TableHeader></TableCell>
                        <TableCell><TableHeader>Good for</TableHeader></TableCell>
                        <TableCell><TableHeader>Shares</TableHeader></TableCell>
                        <TableCell><TableHeader>Actions</TableHeader></TableCell>
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
                                        <DeleteIcon />
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