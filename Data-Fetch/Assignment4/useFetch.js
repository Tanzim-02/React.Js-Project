import React, { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url) {

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const errorMessage = new Error("Data is not Fetched");

        axios.get(url)
            .then((res) => {
                setData(res.data);
                setLoading(false);
                setError(null);
            })
            .catch((error) => {
                setError(errorMessage);
                // setLoading(false);
            });
    }, [url])
    
    return { data, isLoading, error };

}

export default useFetch