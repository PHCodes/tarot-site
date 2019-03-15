import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './HeadshotResult.css';

class HeadshotResult extends Component {

    leftLinkButton;
    rightLinkButton;
    x0 = null;
    unify = (e) => { return e.changedTouches ? e.changedTouches[0] : e };
    lock = (e) => {
        this.x0 = this.unify(e).clientX;
    }
    move = (e) => {
        if (this.x0 || this.x0 === 0) {
            let dx = this.unify(e).clientX - this.x0, s = Math.sign(dx);
            //Significant move?
            if (Math.abs(dx) > 50) {
                //Leftmove
                if (dx > 0) {
                    if (this.leftLinkButton) {
                        this.leftLinkButton.click();
                    }
                }
                //Rightmove
                if (dx < 0) {
                    if (this.rightLinkButton) {
                        this.rightLinkButton.click();
                    }

                }

            }
        }
    }

    reload = () => {

        document.getElementById(this.props.item.name).style.backgroundColor = this.props.item.foregroundcolor;
        document.getElementById('main-color').style.backgroundColor = this.props.item.backgroundcolor;
        document.getElementById('inner-info-' + this.props.item.name).style.backgroundColor = this.props.item.textbackgroundcolor;
        let buttonsToColor = document.getElementsByClassName('basic-button');
        for (let button of buttonsToColor) {
            button.style.backgroundColor = this.props.item.backgroundcolor;
        }
        if (!this.props.item.shouldhaveblacktext || this.props.item.shouldhaveblacktext == "false" || this.props.item.shouldhaveblacktext == "No" || this.props.item.shouldhaveblacktext == "no" || this.props.item.shouldhaveblacktext == "white") {
            let textToColor = document.getElementsByClassName('info-field');
            if (!this.props.item.textbackgroundcolor.match(/^(?:white|#fff(?:fff)?|rgba?\(\s*255\s*,\s*255\s*,\s*255\s*(?:,\s*1\s*)?\))$/i)) {
                for (let text of textToColor) {
                    text.style.color = 'white';
                }
                let textToColor2 = document.getElementsByClassName('owner-field');
                for (let text of textToColor2) {
                    text.style.color = 'white';
                }
            }
        } else {
            let textToColor = document.getElementsByClassName('info-field');
            if (this.props.item.textbackgroundcolor.match(/^(?:black|#000(?:000)?|rgba?\(\s*0\s*,\s*0\s*,\s*0\s*(?:,\s*1\s*)?\))$/i)) {
                for (let text of textToColor) {
                    text.style.color = 'white';
                }
                let textToColor2 = document.getElementsByClassName('owner-field');
                for (let text of textToColor2) {
                    text.style.color = 'white';
                }
            }
        }
        if (!this.props.item.shouldhaveblacktext || this.props.item.shouldhaveblacktext == "false" || this.props.item.shouldhaveblacktext == "No" || this.props.item.shouldhaveblacktext == "no") {
            let textToColor = document.getElementsByClassName('basic-button');
            for (let text of textToColor) {
                text.style.color = 'white';
            }

        }
        let newImg = new Image();
        newImg.src = this.props.item.picture;
        newImg.onload = () => {

            console.log(newImg.height);
            console.log(newImg.width);
            console.log(newImg);
            if (document.getElementById('inner-info-' + this.props.item.name)) {
                if (newImg.width > newImg.height) {
                    let currentImage = document.getElementById('img-' + this.props.item.name);
                    currentImage.classList.replace('relevant-image-vertical', 'relevant-image-horizontal');
                    if (Math.abs(newImg.width - newImg.height) < 50) {
                        let currentImage = document.getElementById('img-' + this.props.item.name);
                        currentImage.classList.replace('relevant-image-horizontal', 'relevant-image-square');

                    }
                }
                else if (Math.abs(newImg.width - newImg.height) < 50) {
                    let currentImage = document.getElementById('img-' + this.props.item.name);
                    currentImage.classList.replace('relevant-image-vertical', 'relevant-image-square');

                }
            }
        }
    }

    componentDidMount() {
        this.reload();
        let scroller = document.getElementById("main-color");

        scroller.scrollTop = 0;
        let container = document.getElementById("full-page" + this.props.item.name);
        this.leftLinkButton = document.getElementById('leftLink-' + this.props.item.name);
        this.rightLinkButton = document.getElementById('rightLink-' + this.props.item.name);

        container.addEventListener('touchstart', this.lock, false);
        container.addEventListener('touchend', this.move, false);

        container.addEventListener('mousedown', this.lock, false);
        container.addEventListener('mouseup', this.move, false);
    }

    componentDidUpdate() {
        this.reload();
        document.getElementById('main-color').style.backgroundColor = '#1b5181';
        let buttonsToColor = document.getElementsByClassName('basic-button');
        for (let button of buttonsToColor) {
            button.style.backgroundColor = '#1b5181';
        }
        if (!this.props.item.shouldhaveblacktext || this.props.item.shouldhaveblacktext == "false" || this.props.item.shouldhaveblacktext == "No" || this.props.item.shouldhaveblacktext == "no") {
            let textToColor = document.getElementsByClassName('basic-button');
            for (let text of textToColor) {
                text.style.color = 'black';
            }
        }
    }


    componentWillUnmount() {
        let container = document.getElementById("full-page" + this.props.item.name);
        container.removeEventListener('touchstart', this.lock);
        container.removeEventListener('touchend', this.move);
        container.removeEventListener('mousedown', this.lock);
        container.removeEventListener('mouseup', this.move);
    }

    funcForTraitSearch = (filter, value) => {
        //Mount roster.
        let docLink = document.getElementById("roster-link");
        docLink.click()

        setTimeout(() => {
            this.props.searchBySingleTrait([[filter, value]]);
        }, 100);
    }

    capitalizeFirstLetter(trait) {
        return trait.charAt(0).toUpperCase() + trait.slice(1);
    }

    //Should have item in props.
    render() {

        let leftLinkButton = null;
        let rightLinkButton = null;
        let inactive = ''
        if (this.props.leftLink(this.props.item.name)) {
            leftLinkButton = <Link id={"leftLink-" + this.props.item.name} to={this.props.leftLink(this.props.item.name)} style={{ textDecoration: 'none' }}><div className="link-container left-link"></div><div className="left-link side-link"></div></Link>;
        }
        if (this.props.rightLink(this.props.item.name)) {
            rightLinkButton = <Link id={"rightLink-" + this.props.item.name} to={this.props.rightLink(this.props.item.name)} style={{ textDecoration: 'none' }}><div className="link-container right-link"></div><div className="right-link side-link"></div></Link>
        }
        let setOfValues = [];
        let applicationLinkVal = null;
        for (let trait in this.props.item) {
            if (trait != "activity" && trait != "incomplete" && trait != "inactive"  && trait != "related" && trait != "inactive" && trait != "backgroundcolor" && trait != "foregroundcolor" && trait != "textbackgroundcolor" && trait != "shouldhaveblacktext" && trait != "picture" && trait != "headshot" && trait != "items" && trait != "player") {
                if (trait == "applicationlink") {
                    let nameShortened = this.props.item.name;
                    if(this.props.item.name.indexOf(' ') != -1){
                        nameShortened = this.props.item.name.substring(0, this.props.item.name.indexOf(' '));
                    }
                    applicationLinkVal = (
                        <div className="info-field">
                            <br />
                            {<a style={{ 'cursor': 'pointer' }} target="_self" style={{ color: "inherit", fontSize: "18px" }} href={this.props.item[trait.toString()]}>{nameShortened + "'s Application"}</a>}
                            <br />
                        </div>
                    );
                } else {
                    let getsSearchClick = trait=="affiliation" || trait=="race";
                    setOfValues.push(
                        <div className="info-field">
                            <br />
                            <span style={{}}>{this.capitalizeFirstLetter(trait) + ': '}</span>
                            {(this.props.item[trait.toString()] ? <span style={getsSearchClick ? { 'cursor': 'pointer' } : null} onClick={getsSearchClick ? (filter, name) => this.funcForTraitSearch(trait.toString(), this.props.item[trait.toString()]) : () => {return null} }>{this.props.item[trait.toString()]}</span> : <span>'N/A'</span>)}
                        </div>
                    );
                }
            } else if (trait == "items") {
                setOfValues.push(<div className="info-field">
                    Characters:
                    <br />
                    {(this.props.item[trait.toString()] ? <span style={{ 'display': 'inline-block', 'cursor': 'pointer' }} >{this.props.item[trait]}</span> : <span>'N/A'</span>)}
                </div>);
            } else if (trait == "player") {
                if (!this.props.tempField) {
                    setOfValues.push(<div className="owner-field " >
                        <div><div>{this.capitalizeFirstLetter(trait) + ': ' + this.props.item[trait.toString()]}</div></div>
                        <div className="owner-headshot">{this.props.getOwner(this.props.item[trait], trait)}</div>
                    </div>);
                }
            } else if (trait == "related") {
                let relatedElements = [];
                relatedElements.push(<div className="owner-headshot">{this.props.getOwner(this.props.item[trait], trait)}</div>)
                setOfValues.push(<div className="owner-field ">
                    <div><div>{this.capitalizeFirstLetter(trait)}</div></div>
                    {relatedElements}
                </div>);
            } else if (trait == "inactive") {
                if (this.props.item[trait.toString()]) {
                    inactive = " inactive";
                }
            }
        }
        if (applicationLinkVal) {
            setOfValues.push(applicationLinkVal);
        }

        return (
            <div id={"full-page" + this.props.item.name} className="full-results-page">

                <span className="result-page" id={this.props.item.name}>

                    <div className="inner-information" >
                        <center>
                            <img src={this.props.item.picture} id={"img-" + this.props.item.name} className={"relevant-image-vertical" + inactive}>
                            </img>
                        </center>
                        <br />
                        <div className="text-field" id={'inner-info-' + this.props.item.name}>

                            {setOfValues}

                        </div>
                    </div>
                </span>

                {leftLinkButton ? leftLinkButton : null}
                {rightLinkButton ? rightLinkButton : null}
            </div>
        );
    }
}

export default HeadshotResult; 