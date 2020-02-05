import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
    resource: string
}

interface Resource {
    title: string,
    id: string
}

const ResourceList = ({resource}:{resource:string}) => {
    const [resources, setResources] = useState([]);

    const fetchResource = async (resource:string) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    }

    useEffect(() => {
        fetchResource(resource);
    }, [resource]);

    return (
        <ul>
            {resources.map((item:Resource) => <li key={item.id}>{item.title}</li>)}
        </ul>
    );
};

export default ResourceList;