import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './HeadshotResult.css';

class HeadshotResult extends Component {

    componentDidMount() {
        document.getElementById(this.props.item.name).style.backgroundColor = this.props.item.primaryColor;
        document.getElementById('main-color').style.backgroundColor = this.props.item.secondaryColor;
        document.getElementById('inner-info-' + this.props.item.name).style.backgroundColor = this.props.item.textBackgroundColor;
        let buttonsToColor = document.getElementsByClassName('basic-button');
        for (let button of buttonsToColor) {
            button.style.backgroundColor = this.props.item.secondaryColor;
        }
        if (!this.props.item.textDark) {
            let textToColor = document.getElementsByClassName('info-field');
            for (let text of textToColor) {
                text.style.color = 'white';
            }
        }
        if (!this.props.item.textDark) {
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

        if (this.props.linkLeft) {
            let leftMove = document.getElementById('left-move-' + this.props.item.name);
        }
        if (this.props.linkRight) {
            let leftMove = document.getElementById('right-move-' + this.props.item.name);

        }
    }

    componentDidUpdate() {
        document.getElementById('main-color').style.backgroundColor = '#61dafb';
        let buttonsToColor = document.getElementsByClassName('basic-button');
        for (let button of buttonsToColor) {
            button.style.backgroundColor = '#61dafb';
        }
        if (!this.props.item.textDark) {
            let textToColor = document.getElementsByClassName('basic-button');
            for (let text of textToColor) {
                text.style.color = 'black';
            }
        }
    }

    //Should have item in props.
    render() {

        return (
            <div id={"full-page" + this.props.item.name} className="full-results-page">
            <span className="left-move" id={"left-move-"+this.props.item.name} />
            <span className="right-move" id={"right-move-"+this.props.item.name} />
            
            <span className="result-page" id={this.props.item.name}>

                <div className="inner-information" >
                    <center>
                        <img src={this.props.item.picture} id={"img-" + this.props.item.name} className="relevant-image-vertical">
                        </img>
                    </center>
                    <br />
                    <div className="text-field" id={'inner-info-' + this.props.item.name}>
                        <div className="info-field">
                            <br />
                            Name: {this.props.item.name ? this.props.item.name : "ERROR NO NAME GIVEN!"}
                        </div>
                        <div className="info-field">
                            {'Title'+(this.props.item.organization.includes(" ") ? "s" : "")}: {this.props.item.title ?this.props.item.title : "N/A"}
                        </div>
                        <div className="info-field">
                            Race: {this.props.item.race ? this.props.item.race : "N/A"}
                        </div>
                        <div className="info-field">
                            {'Organization'+(this.props.item.organization.includes(" ") ? "s" : "")} : {this.props.item.organization ? this.props.item.organization : "N/A"}
                        </div>
                        <br />
                        <div className="info-field">
                            {'Overall Power Concept'+(this.props.item.organization.includes(" ") ? "s" : "")}: {this.props.item.powers ? this.props.item.powers : "N/A"}
                        </div>
                        <br />
                        <div className="info-field">
                            Player: {this.props.item.player}
                        </div>
                        <br />

                    </div>
                </div>
            </span></div>
        );
    }
}

export default HeadshotResult; 