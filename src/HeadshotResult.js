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

        document.getElementById(this.props.item.name).style.backgroundColor = this.props.item.primarycolor;
        document.getElementById('main-color').style.backgroundColor = this.props.item.secondarycolor;
        document.getElementById('inner-info-' + this.props.item.name).style.backgroundColor = this.props.item.textbackgroundcolor;
        let buttonsToColor = document.getElementsByClassName('basic-button');
        for (let button of buttonsToColor) {
            button.style.backgroundColor = this.props.item.secondarycolor;
        }
        if (!this.props.item.textdark) {
            let textToColor = document.getElementsByClassName('info-field');
            for (let text of textToColor) {
                text.style.color = 'white';
            }
        }
        if (!this.props.item.textdark) {
            let textToColor = document.getElementsByClassName('basic-button');
            for (let text of textToColor) {
                text.style.color = 'white';
            }
        }
        let newImg = document.createElement('img');
        newImg.src = this.props.item.picture;
        console.log(newImg.height);
        console.log(newImg.width);
        console.log(newImg);
        if (newImg.width > newImg.height) {
            let currentImage = document.getElementById('img-' + this.props.item.name);
            currentImage.classList.replace('relevant-image-vertical', 'relevant-image-horizontal');

        }
    }

    componentDidMount() {
        this.reload();
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
        document.getElementById('main-color').style.backgroundColor = '#61dafb';
        let buttonsToColor = document.getElementsByClassName('basic-button');
        for (let button of buttonsToColor) {
            button.style.backgroundColor = '#61dafb';
        }
        if (!this.props.item.textdark) {
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
        if (this.props.leftLink(this.props.item.name)) {
            leftLinkButton = <Link id={"leftLink-" + this.props.item.name} to={this.props.leftLink(this.props.item.name)} style={{ textDecoration: 'none' }}><div className="link-container left-link"></div><div className="left-link side-link"></div></Link>;
        }
        if (this.props.rightLink(this.props.item.name)) {
            rightLinkButton = <Link id={"rightLink-" + this.props.item.name} to={this.props.rightLink(this.props.item.name)} style={{ textDecoration: 'none' }}><div className="link-container right-link"></div><div className="right-link side-link"></div></Link>
        }
        let setOfValues = [];
        for (let trait in this.props.item) {
            if (trait != "primarycolor" && trait != "secondarycolor" && trait != "textbackgroundcolor" && trait != "textdark" && trait != "picture" && trait != "headshot" && trait != "items") {
                setOfValues.push(
                    <div className="info-field">
                        <br />
                        <span style={{ 'display': 'inline-flex' }}>{this.capitalizeFirstLetter(trait) + ': '}</span>
                        {(this.props.item[trait.toString()] ? <span style={{ 'display': 'inherit', 'cursor': 'pointer' }} onClick={(filter, name) => this.funcForTraitSearch(trait.toString(), this.props.item[trait.toString()])} >{this.props.item[trait.toString()]}</span> : <span>'N/A'</span>)}
                    </div>
                );
            } else if (trait == "items") {
                setOfValues.push(<div className="info-field">
                    <br />
                    {(this.props.item[trait.toString()] ? <span style={{ 'display': 'inline-block', 'cursor': 'pointer' }} >{this.props.item[trait]}</span> : <span>'N/A'</span>)}
                </div>);

            }
        }

        return (
            <div id={"full-page" + this.props.item.name} className="full-results-page">

                <span className="result-page" id={this.props.item.name}>

                    <div className="inner-information" >
                        <center>
                            <img src={this.props.item.picture} id={"img-" + this.props.item.name} className="relevant-image-vertical">
                            </img>
                        </center>
                        <br />
                        <div className="text-field" id={'inner-info-' + this.props.item.name}>

                            <div className="text-field">
                                {setOfValues}
                            </div>

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