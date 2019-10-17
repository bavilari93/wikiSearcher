import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (url, query) => {

	console.log(url)
    const [results, setResults] = useState([])
    

    const fetchData = async () => {


        const data = await axios(
            url, {
                params: {
                    action: 'opensearch',
                    search: 'query',
                    format: 'json'
                }
            })
        setResults(data)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return results;

}

export default useForm;