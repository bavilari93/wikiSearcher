import React, { useState, useEffect } from 'react';
const Form = () => {
    const [hasError, setErrors] = useState(false),
          [results, setResults] = useState('');

     useEffect (()=>{
     	fetch('https://en.wikipedia.org/w/api.php?action=opensearch&search=bianca&format=json')
     		.then(res => res.json())
     		.then(res => setResults(res))
     		.catch(()=> setErrors(true))
     },[])

return [hasError, results]

}

export default Form;