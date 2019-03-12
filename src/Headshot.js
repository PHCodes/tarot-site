import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Headshot.css';

class Headshot extends Component {
    constructor(props) {
        super(props);
        let itemsToDisplayInHeadshot = ["name", "title", "race", "organization", "power"];
        let renderedVersion = [];
        renderedVersion.push(<div className="filler"></div>);
        for(var currentItem of itemsToDisplayInHeadshot){
            renderedVersion.push(
                <Fragment>{this.props.item[currentItem]} <br /></Fragment>);
        }
        var currentContent = (<span id={"name-" + this.props.item.name} className="name-focus invisible">
            {renderedVersion}
        </span>)

        this.state = {
            textOfObject: currentContent,
            itemsToDisplay: itemsToDisplayInHeadshot
        }
    }
    componentDidMount() {
        if (!this.props.item.shouldhaveblacktext || this.props.item.shouldhaveblacktext == "false" || this.props.item.shouldhaveblacktext == "No" || this.props.item.shouldhaveblacktext == "no") {
            let textToColor = document.getElementById("name-" + this.props.item.name);
            if (!this.props.item.textbackgroundcolor.match(/^(?:white|#fff(?:fff)?|rgba?\(\s*255\s*,\s*255\s*,\s*255\s*(?:,\s*1\s*)?\))$/i)) {

                textToColor.style.color = 'white';

            }
        } else {
            let textToColor = document.getElementById("name-" + this.props.item.name);
            if (this.props.item.textbackgroundcolor.match(/^(?:black|#000(?:000)?|rgba?\(\s*0\s*,\s*0\s*,\s*0\s*(?:,\s*1\s*)?\))$/i)) {

                textToColor.style.color = 'white';
            } else {
                textToColor.style.color = 'black';
            }
        }
        let textToColor = document.getElementById("name-" + this.props.item.name);
        //Check if overflowing.
        function isEllipsisActive(e) {
            return (e.offsetHeight < e.scrollHeight);
        }
        let renderedVersion = [];
        for(var currentItem of this.state.itemsToDisplay){
            renderedVersion.push(
                <Fragment>{this.props.item[currentItem]} <br /></Fragment>);
        }

        if (isEllipsisActive(textToColor)) {
            var overflowingDealing = (
                <span id={"name-" + this.props.item.name} className="name-focus invisible">
                    <marquee className="marquee-headshot"
                        SCROLLAMOUNT="3"
                        DIRECTION="up"
                        LOOP="false"
                        behavior="scroll" 
                        height="80%">
                        {renderedVersion}
                    </marquee>
                </span>
            )
            this.setState({textOfObject: overflowingDealing});
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
        
        var inactive = '';
        if(this.props.item.inactive){
            inactive = "-inactive";
        }

        return (
            <span className={"headshot"+inactive}>
                <span id={"name-box-" + this.props.item.name} className="name-box invisible" style={{ 'background-color': this.props.item.textbackgroundcolor }}>
                    {this.state.textOfObject}
                </span>
                <img className={"image-box"+inactive}  id="imgFull" src={this.props.item.headshot} />
            </span>
        );
    }
}

export default Headshot; 