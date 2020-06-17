import * as React from 'react';
import {
    Typography,
    TableRow,
    TableCell,
    TableHead,
    TableBody,
    IconButton,
    Table,
    Grid,
} from '@material-ui/core';
import {
    MuiEditIcon,
    MuiDeleteIcon,
    LargeTableHeadRow,
    SmallTableHeadRow,
    SmallTableCell,
    SmallTableRow,
    Tag,
    TagTableCell,
    FilePdfIcon,
    FileImageIcon,
    PersonIcon,
    CorporateIcon,
    SelfkeyLogo
} from '../../../src/index';

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
                        <TableCell><Typography variant="overline" >Name</Typography></TableCell>
                        <TableCell><Typography variant="overline" >Type</Typography></TableCell>
                        <TableCell><Typography variant="overline" >Role</Typography></TableCell>
                        <TableCell><Typography variant="overline" >Residency/Domicile</Typography></TableCell>
                        <TableCell><Typography variant="overline" >Shares</Typography></TableCell>
                        <TableCell><Typography variant="overline" >Actions</Typography></TableCell>
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
                                <Typography variant="h6" >{row.name}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6" >{row.type}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6" >{row.role}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6" >{row.residency}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6" >{row.shares}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6" >
                                    <IconButton aria-label="Edit">
                                        <MuiEditIcon/>
                                    </IconButton>
                                    <IconButton aria-label="Delete">
                                        <MuiDeleteIcon />
                                    </IconButton>
                                </Typography>
                            </TableCell>
                        </TableRow>
                        );
                    })}
                </TableBody>
            </Table><br/>

            <Typography variant="h3" style={underlineStyle} >
                Small Table
            </Typography>
            <Table>
                <TableHead>
                    <SmallTableHeadRow>
                        <SmallTableCell><Typography variant="overline" >Type</Typography></SmallTableCell>
                        <SmallTableCell><Typography variant="overline" >Role</Typography></SmallTableCell>
                        <SmallTableCell><Typography variant="overline" >Name</Typography></SmallTableCell>
                        <SmallTableCell><Typography variant="overline" >E-Mail</Typography></SmallTableCell>
                        <SmallTableCell><Typography variant="overline" >Citizensip / Incorporation</Typography></SmallTableCell>
                        <SmallTableCell><Typography variant="overline" >Residency / Domicile</Typography></SmallTableCell>
                        <SmallTableCell><Typography variant="overline" >Shares</Typography></SmallTableCell>
                        <SmallTableCell><Typography variant="overline" >Selfkey User</Typography></SmallTableCell>
                        <SmallTableCell><Typography variant="overline" >Actions</Typography></SmallTableCell>
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
                            name: 'Big Things Limited2',
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
                            name: 'Big Things Limited3',
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
                                        ? <Typography variant="subtitle1" color="secondary" >{row.type}</Typography>
                                        : <Typography variant="subtitle1" >{row.type}</Typography>
                                    }
                                </SmallTableCell>
                                <SmallTableCell>
                                    { row.disabled
                                        ? <Typography variant="subtitle1" color="secondary" >{row.role}</Typography>
                                        : <Typography variant="subtitle1" >{row.role}</Typography>
                                    }
                                </SmallTableCell>
                                <SmallTableCell>
                                    { row.disabled
                                        ? <Typography variant="subtitle1" color="secondary" >{row.name}</Typography>
                                        : <Typography variant="subtitle1" >{row.name}</Typography>
                                    }
                                </SmallTableCell>
                                <SmallTableCell>
                                    { row.disabled
                                        ? <Typography variant="subtitle1" color="secondary" >{row.email}</Typography>
                                        : <Typography variant="subtitle1" >{row.email}</Typography>
                                    }
                                </SmallTableCell>
                                <SmallTableCell>
                                    { row.disabled
                                        ? <Typography variant="subtitle1" color="secondary" >{row.citizensip}</Typography>
                                        : <Typography variant="subtitle1" >{row.citizensip}</Typography>
                                    }
                                </SmallTableCell>
                                <SmallTableCell>
                                    { row.disabled
                                        ? <Typography variant="subtitle1" color="secondary" >{row.residency}</Typography>
                                        : <Typography variant="subtitle1" >{row.residency}</Typography>
                                    }
                                </SmallTableCell>
                                <SmallTableCell>
                                    { row.disabled
                                        ? <Typography variant="subtitle1" color="secondary" >{row.shares}</Typography>
                                        : <Typography variant="subtitle1" >{row.shares}</Typography>
                                    }
                                </SmallTableCell>
                                <SmallTableCell>
                                    <Typography variant="subtitle1" color="primary" >
                                        { row.user === 'logo' ? <SelfkeyLogo/> : row.user}
                                    </Typography>
                                </SmallTableCell>
                                <SmallTableCell>
                                    <Typography variant="subtitle1" >
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
                                    </Typography>
                                </SmallTableCell>
                            </SmallTableRow>
                        );
                    })}
                </TableBody>
            </Table><br/>

            <Typography variant="h3" style={underlineStyle} >
                Multi-Line Table
            </Typography>
            <Table>
                <TableHead>
                    <LargeTableHeadRow>
                        <TableCell><Typography variant="overline" ></Typography></TableCell>
                        <TableCell><Typography variant="overline" >Name</Typography></TableCell>
                        <TableCell><Typography variant="overline" >Type</Typography></TableCell>
                        <TableCell><Typography variant="overline" >Good for</Typography></TableCell>
                        <TableCell><Typography variant="overline" >Shares</Typography></TableCell>
                        <TableCell><Typography variant="overline" >Actions</Typography></TableCell>
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
                            name: 'Big Things Limited4',
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
                                <Typography variant="h6" >{row.name}</Typography>
                                <Typography variant="subtitle1" color="secondary" >{row.role}</Typography>
                            </TableCell>
                            <TableCell>
                                <Grid container>
                                    <Grid item xs={3}>
                                        { row.type === 'Person' ? <FilePdfIcon /> : <FileImageIcon /> }
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="h6" >{row.name}</Typography>
                                        <Typography variant="subtitle1" color="secondary" >{row.role}</Typography>
                                    </Grid>
                                </Grid>
                            </TableCell>
                            <TagTableCell>
                                <Grid container>
                                    {
                                        row.tags.map(tag => {
                                            return (
                                                <Tag key={tag}>{tag}</Tag>
                                                )
                                            })
                                    }
                                </Grid>
                            </TagTableCell>
                            <TableCell>
                                <Typography variant="h6" >{row.shares}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6" >
                                    <IconButton aria-label="Edit">
                                        <MuiEditIcon/>
                                    </IconButton>
                                    <IconButton aria-label="Delete">
                                        <MuiDeleteIcon />
                                    </IconButton>
                                </Typography>
                            </TableCell>
                        </TableRow>
                        );
                    })}
                </TableBody>
            </Table><br/><br/>

        </div>
    )
}