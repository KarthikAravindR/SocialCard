import React from 'react'
import './Socialcardfooter.css'
// import { faComments } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
// import { faMoneyBill } from '@fortawesome/pro-solid-svg-icons';
import { faComments as faCommentsRegular, faHeart as faHeartRegular, faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons';
import { faComments as faCommentsSolid, faHeart as faHeartSolid, faRetweet as faRetweetSolid, faEnvelope as faEnvelopeSolid } from '@fortawesome/free-solid-svg-icons';

library.add(

    faCommentsRegular,
    faCommentsSolid,
    faHeartRegular,
    faHeartSolid,
    faRetweetSolid,
    faEnvelopeRegular,
    faEnvelopeSolid,
    // more icons go here
);
const socialcardheader = (props) => {
    let addCommentSection = null
    let viewCommentSection = null
    if (props.addComment) {
        addCommentSection = (
            <div>
                <div className="line"></div>
                <div className="header">
                    <div className="headerProfilePicture">
                        <div className="profiledp">
                            <img alt={props.profileusername} src={props.authorprofilepicture} />
                        </div>
                    </div>
                    <input onKeyPress={props.commentadded} className="textarea" placeholder="Write a Comment" rows="1" />
                </div>
            </div>
        )
    }
    if (props.viewComment) {
        viewCommentSection = (
            <div>
                {props.comments.map(comment => {
                    return (
                        <div>
                            <div className="line"></div>
                            <div className="headerc">
                                <div className="headerProfilePicture">
                                    <div className="profiledp">
                                        <img alt={props.profileusername} src={props.authorprofilepicture} />
                                    </div>
                                </div>
                                <div className="commentsection">
                                    {comment}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <footer>
            <div className="footer">
                <div onClick={props.likeclicked} className="controls">
                    <FontAwesomeIcon icon={props.likedbyuser ? faHeartSolid : faHeartRegular} style={{ marginRight: "8px", color: "red", marginTop: "2px" }} />
                    {props.like}
                </div>
                <div onClick={props.retweetclicked} className="controls">
                    <FontAwesomeIcon icon={faRetweetSolid} style={{ marginRight: "8px", color: "green", marginTop: "2px" }} />
                    {props.retweet}
                </div>
                <div onClick={props.Commentclicked} className="controls">
                    <FontAwesomeIcon icon={faCommentsRegular} style={{ marginRight: "8px", color: "yellow", marginTop: "2px" }} />
                    Comment
                </div>
                <div onClick={props.viewComments} className="controls">
                    View Comments
                </div>
            </div>
            {addCommentSection}
            {viewCommentSection}
        </footer>
    )
}

export default socialcardheader