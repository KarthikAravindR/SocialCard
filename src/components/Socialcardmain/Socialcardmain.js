import React from 'react'
import classes from './Socialcardmain.module.css'

const socialcardmain = (props) => {
    return (
        <main className={classes.post}>
            <div className={classes.image}>
                <img src={props.postpicture} alt="" width="100%" height="208px" style={{ borderRadius: '7px' }} />
                <div className={classes.h2}>
                    <img alt={props.cardauthor} src={props.profilepicture} />
                </div>
                <div className={classes.mainTitle}>{props.cardtitle}</div>
                <div className={classes.mainauthor}>
                    <p>{props.cardauthor}</p>
                    <div className={classes.authorDp}>
                        <img alt={props.cardauthor} src={props.authorprofilepicture} />
                    </div>
                </div>
            </div>
            <div className={classes.mainPosttwo}>
                <p className={classes.profilename}>{props.cardtitle}</p>
                <p className={classes.profileusername}>
                    {props.description}
                </p>
                <p className={classes.url}>{props.url}</p>
            </div>
        </main>
    )
}

export default socialcardmain