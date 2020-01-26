import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

interface Image {
    [key:string]:string
}

interface Images {
    [key:string]:any
}

interface Props {
    images: Array<Images>
}

const ImageList = (props:Props) => {

    const images = props.images.map((image) => {
        return <ImageCard image={image} key={image.id} />//<img key={id} src={urls.regular} alt={alt_description} />
    });

    return  <div className="image-list">{images}</div>
}

export default ImageList;