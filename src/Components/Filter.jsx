import React, { useState } from 'react'
import { user } from './user'
import '../Styles/filter.css'
import Table from './Table'


const Filter = () => {

    const [search, setSearch] = useState('')
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    console.log(search)

    const keys = ["first_name", "last_name", "email", "gender"]

    const aaa = (data) => {
        return data.filter((name) => keys.some((key) => name[key].toLowerCase().includes(search)))
    }

    return (
        <>
            <div className='container'>

                <h1 className='title'>Filter User Api Data</h1>
                <input placeholder='Search ...' className='input-search' value={search} onChange={handleChange} />
                <h2 className='employee'>Employee Details</h2>

                <Table data={aaa(user)} />
            </div>
        </>

    )
}

export default Filter