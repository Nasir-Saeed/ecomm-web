import React from 'react'
import classes from "./LoadingUI.module.css"
export default function LoadingUI() {
    return (
        <>
            <div className={classes.background_loader}>
                <div className={classes.loader}>
                    <span className={`${classes.spinner} ${classes.spinner1}`}></span>
                    <span className={`${classes.spinner} ${classes.spinner2}`}></span>
                    <span className={`${classes.spinner} ${classes.spinner3}`}></span>
                    <br />
                    <span className={classes.loader_text} >LOADING...</span>
                </div>
            </div >
        </>
    )
}


