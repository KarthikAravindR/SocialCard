import React, { Component } from 'react'
import classes from './Socialcardbuilder.module.css'
import logoimage from '../../assets/images/logo.jpg'
import cityimage from '../../assets/images/city.jpg'
import personimage from '../../assets/images/person.jpg'
import Socialcardheader from '../../components/Socialcardheader/Socialcardheader'
import Socialcardmain from '../../components/Socialcardmain/Socialcardmain'
import Socialcardfooter from '../../components/Socialcardfooter/Socialcardfooter'

class Socialcard extends Component {
    state = {
        profilepicture: logoimage,
        profilename: "The Practical Dev",
        profileusername: "ThePracticalDev",
        dateposted: "Sep 10",
        cardtitle: "Learning React? Start Small",
        authorprofilepicture: personimage,
        cardauthorid: "karthik12",
        cardauthor: "Karthik",
        postpicture: cityimage,
        description: "Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.",
        url: "dev.to",
        comments: [],
        addComment: false,
        viewComment: false,
        retweet: 0,
        like: 0,
        likedbyuser: false
    }
    Commentclicked = () => {
        this.setState({
            ...this.state,
            addComment: true
        })
    }
    commentadded = (event) => {
        const copystate= {...this.state}
        if(event.key === 'Enter'){
            copystate.comments.push(event.target.value)
            event.target.value=""
        }
        this.setState({
            state: copystate
        })
        console.log(this.state)
    }
    retweetclicked = () => {
        this.setState({
            ...this.state,
            retweet: this.state.retweet + 1
        })
    }
    likeclicked = () => {
        if (!this.state.likedbyuser) {
            this.setState((prevState, props) => {
                return {
                    like: prevState.like + 1,
                    likedbyuser: true
                };
            });
        } else {
            this.setState((prevState, props) => {
                return {
                    like: prevState.like - 1,
                    likedbyuser: false
                };
            });
        }
    }
    viewComments = () => {
        this.setState({
            ...this.state,
            viewComment: true
        })
    }
    render() {
        return (
            <div className={classes.aPost}>
                <Socialcardheader
                    profileusername={this.state.profileusername}
                    profilepicture={this.state.profilepicture}
                    profilename={this.state.profilename}
                    dateposted={this.state.dateposted}
                    cardtitle={this.state.cardtitle}
                    cardauthorid={this.state.cardauthorid} />
                <Socialcardmain
                    cardtitle={this.state.cardtitle}
                    postpicture={this.state.postpicture}
                    profilepicture={this.state.profilepicture}
                    cardauthor={this.state.cardauthor}
                    authorprofilepicture={this.state.authorprofilepicture}
                    description={this.state.description}
                    url={this.state.url} />
                <Socialcardfooter
                    comments={this.state.comments}
                    addComment={this.state.addComment}
                    viewComment={this.state.viewComment}
                    commentadded={this.commentadded}
                    authorprofilepicture={this.state.authorprofilepicture}
                    retweet={this.state.retweet}
                    like={this.state.like}
                    Commentclicked={this.Commentclicked}
                    retweetclicked={this.retweetclicked}
                    likeclicked={this.likeclicked}
                    viewComments={this.viewComments}
                    likedbyuser={this.state.likedbyuser}/>
            </div>
        )
    }
}

export default Socialcard