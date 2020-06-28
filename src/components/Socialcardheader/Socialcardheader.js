import React from 'react'
import classes from './Socialcardheader.module.css'

const socialcardheader = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.headerProfilePicture}>
                <div className={classes.profiledp}>
                <img alt={props.profileusername} src={props.profilepicture} />
                </div>
            </div>
            <div className={classes.headerPostDetails}>
                <div className={classes.headerPostDetailsone}>
                    <p className={classes.profilename}>{props.profilename}</p>
                    <p className={classes.profileusername}>@{props.profileusername}</p>
                    <p className={classes.dateposted}>{props.dateposted}</p>
                </div>
                {/* <div className={classes.headerPostDetailstwo}>
                    {props.cardtitle}
                    <p>author:<a href="/" style={{textDecoration: "none",padding: "0 4px", color:"rgb(1, 100, 248)"}}>@{props.cardauthorid}</a></p>
                </div> */}
            </div>
        </header>
    )
}

export default socialcardheader