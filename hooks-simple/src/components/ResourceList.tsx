import React from 'react';
import useResources from './useResources';

interface Props {
    resource: string
}

interface Resource {
    title: string,
    id: string
}

const ResourceList = ({resource}:{resource:string}) => {
    const resources = useResources(resource);

    return (
        <ul>
            {resources.map((item:Resource) => <li key={item.id}>{item.title}</li>)}
        </ul>
    );
};

export default ResourceList;