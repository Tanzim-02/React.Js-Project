import React, { useState, useEffect } from 'react';

function Search(props) {
    const [searchText, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);

    };

    useEffect(() => {

        props.onSearch(searchText)

    }, [searchText])


    return (
        <div style={{ textAlign: "center" }}>
            <input type="text" placeholder='Search Country' value={searchText} onChange={handleChange} />
        </div>
    );
}

export default Search;
