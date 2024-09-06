import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

function MuiTable() {

    const data = [
        { id: 1, name: "Elmin", surname: "Qasimov", email: "test@gmail.az", age: 29 },
        { id: 2, name: "Merry", surname: "Stuard", email: "merry@example.com", age: 25 },
        { id: 3, name: "Murad", surname: "Aliyev", email: "murad@example.com", age: 32 },
        { id: 4, name: "Leyla", surname: "Ibrahimova", email: "leyla@example.com", age: 28 },
        { id: 5, name: "Ramil", surname: "Nuriyev", email: "ramil@example.com", age: 35 },
        { id: 6, name: "Nigar", surname: "Mammadova", email: "nigar@example.com", age: 26 },
        { id: 7, name: "Kamran", surname: "Mikayilov", email: "kamran@example.com", age: 31 }
    ];


    return (
        <div className='container'>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell>SURNAME</TableCell>
                        <TableCell>EMAIL</TableCell>
                        <TableCell>AGE</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((user, index) => (
                            <TableRow key={index}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.surname}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.age}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default MuiTable