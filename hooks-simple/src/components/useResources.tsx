import {useState, useEffect} from 'react';
import axios from 'axios';

const useResources = (resource:string) => {
    
    const [resources, setResources] = useState([]);
    
    const fetchResource = async (resource:string) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    }
    
    useEffect(() => {
        fetchResource(resource);
    }, [resource]);

    return resources;
}

export default useResources;