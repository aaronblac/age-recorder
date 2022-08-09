import React from "react";
import Button from "./Button";
import classes from '../../Styles/Modal.module.css'
import Card from "./Card";

const Modal = (props)=> {

    

    return(
        <div>
            <div className={classes.backdrop} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button value="close" onClick={props.handleClose}>Close</Button>
                </footer>
            </Card>
        </div>
    )
}

export default Modal;