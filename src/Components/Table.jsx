import React from 'react'

const Table = ({ data, search }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email ID</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {data.map((element) => (
                    <tr key={element.id}>
                        <td>{element.first_name}</td>
                        <td>{element.last_name}</td>
                        <td>{element.email}</td>
                        <td>{element.gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table