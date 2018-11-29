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
} from '../../../src/theme/selfkey-dark-theme';
import DeleteIcon from '../../../src/icons/delete';
import SelfkeyLogo from '../../../src/materialui/selfkeyLogo';

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
                    ].map(row => {
                        return (
                        <SmallTableRow key={row.name}>
                            <SmallTableCell>
                                <TableSmallText>{row.type}</TableSmallText>
                            </SmallTableCell>
                            <SmallTableCell>
                                <TableSmallText>{row.role}</TableSmallText>
                            </SmallTableCell>
                            <SmallTableCell>
                                <TableSmallText>{row.name}</TableSmallText>
                            </SmallTableCell>
                            <SmallTableCell>
                                <TableSmallText>{row.email}</TableSmallText>
                            </SmallTableCell>
                            <SmallTableCell>
                                <TableSmallText>{row.citizensip}</TableSmallText>
                            </SmallTableCell>
                            <SmallTableCell>
                                <TableSmallText>{row.residency}</TableSmallText>
                            </SmallTableCell>
                            <SmallTableCell>
                                <TableSmallText>{row.shares}</TableSmallText>
                            </SmallTableCell>
                            <SmallTableCell>
                                <TableSmallText color="primary">
                                    { row.user === 'logo' ? <SelfkeyLogo/> : row.user}
                                </TableSmallText>
                            </SmallTableCell>
                            <SmallTableCell>
                                <TableSmallText>
                                    <IconButton aria-label="Edit">
                                        <MuiEditIcon/>
                                    </IconButton>
                                    <IconButton aria-label="Delete">
                                        <DeleteIcon/>
                                    </IconButton>
                                </TableSmallText>
                            </SmallTableCell>
                        </SmallTableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    )
}