import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Headshot.css';

class Headshot extends Component {
    componentDidMount() {
        if (!this.props.item.textDark) {
            let textToColor = document.getElementsByClassName('name-focus');
            for (let text of textToColor) {
                text.style.color = 'white';
            }
        }
    }
    //Should have item in props.
    render() {

        let name = this.props.item.name
        window.setTimeout(function () {
            let nameBox = document.getElementById("name-box-" + name);
            let nameElement = document.getElementById("name-" + name);
            if (nameBox && nameElement) {
                nameElement.classList.remove('invisible');
                nameBox.classList.remove('invisible');

            }
        }, 500);

        return (
            <span className="headshot">
                <span id={"name-box-" + this.props.item.name} className="name-box invisible" style={{ 'background-color': this.props.item.textBackgroundColor }}>
                    <span id={"name-" + this.props.item.name} className="name-focus invisible">
                        {this.props.item.name}
                        <br />
                        {this.props.item.title}
                        <br />
                        {this.props.item.race}
                        <br />
                        {this.props.item.organization}
                    </span>
                </span>
                <img className="image-box" id="imgFull" src={this.props.item.headshot} />
            </span>
        );
    }
}

export default Headshot; 