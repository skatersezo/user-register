import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Card from './Card';

import classes from './ErrorModal.module.css';

function Backdrop(props) {
    return <div className={classes.backdrop} />;
}

function Modal(props) {
    
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>
                    {props.message}
                </p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onToggle}>Ok</Button>
            </footer>
        </Card>
    );
}

function ErrorModal(props) {

        return (
            <>
                {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
                {ReactDOM.createPortal(<Modal 
                    title={props.title} 
                    message={props.message} 
                    onToggle={props.onToggle} />,
                 document.getElementById('overlay-root'))}
            </>
        );
}

export default ErrorModal;