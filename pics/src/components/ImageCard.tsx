import React from 'react';

interface Props {
    image: any
}

interface State {
    spans:number
}

class ImageCard extends React.Component<Props, State> {
    imageRef:any = React.createRef();
    state:State = { spans: 0 }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);
        this.setState({spans});
    }

    render() {
        const {alt_description, urls} = this.props.image; 

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
            </div>
        );
    }
}

export default ImageCard;