import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
    title:string,
    content: string,
    actions: any,
    onDismiss: () => void
}

const Modal = (props:Props) => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(event) => event.stopPropagation()} className="ui standard modal visible active">
                <h3 className="header">{props.title}</h3>
                <p className="content" style={{marginBottom: '0px'}}>{props.content}</p>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector('#modal') as HTMLInputElement
    );
};

export default Modal;