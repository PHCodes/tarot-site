import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Designer.css';
import HeadshotResult from './HeadshotResultDesigner';

class Designer extends Component {
    //Should have item in props.
    constructor(props) {
        super(props)
        this.state = {
            preppedCode: null,
            showCode: false
        }
    }

    componentDidMount() {
        let scroller = document.getElementById("main-color");

        scroller.scrollTop = 0;
    }

    componentWillUnmount() {          
        document.getElementById('main-color').style.backgroundColor = '#1b5181';
        
    }

    componentDidUpdate(prevProps, prevState) {
        let buttonsToColor = document.getElementsByClassName('basic-button');
        for (let button of buttonsToColor) {
            button.style.backgroundColor = '#1b5181';
        }
        let textToColor = document.getElementsByClassName('basic-button');
        for (let text of textToColor) {
            text.style.color = 'black';
        }
    }

    handleExample = (event) => {
        event.preventDefault();
        let filterNamesAndValues = [];
        let contentToSearch = false;
        let newPreppedCode = "{\n";
        let example = {};
        for (var exampleFieldToRender of event.currentTarget) {
            if (exampleFieldToRender.type == "text" || exampleFieldToRender.type == "select-one") {
                if (exampleFieldToRender.value) {
                    const preppedValue = exampleFieldToRender.name.toLowerCase().replace(/ /g, "");
                    example[preppedValue] = exampleFieldToRender.value;
                    newPreppedCode = newPreppedCode + `\"${preppedValue}\" : \"${exampleFieldToRender.value}\",\n`;
                } else {
                    const preppedValue = exampleFieldToRender.name.toLowerCase().replace(/ /g, "");
                    example[preppedValue] = 'N/A';
                    newPreppedCode = newPreppedCode + `\"${preppedValue}\" : \"N\\A\",\n`;
                }
            }
        }
        newPreppedCode = newPreppedCode.substring(0, newPreppedCode.length - 2);
        newPreppedCode = newPreppedCode + `\n}`
        this.setState({ presentSetup: example});
        this.setState({ preppedCode: newPreppedCode });

        ReactDOM.render(<HeadshotResult item={example} match={this.props.match} tempField={true} getOwner={(trait, traitName) => this.props.getItemByTrait(trait, traitName)} leftLink={() => { return null }} rightLink={() => { return null }} />, document.getElementById('example'))

        return false;
    }

    selectCode = () => {
        document.getElementById("code-area").focus();
        document.getElementById("code-area").select();
    }

    render() {
        let affiliationList = {
            name: "Affiliation",
            list: ['', 'Rogue', 'Gotei United', 'Grand Sueki Army', 'Hebi Laboratories', 'Iramasha Union', 'Kokuryuteishi Empire', 'Lux Orior', 'Shadow Fall', 'Vandenreich', 'Vastime']
        }

        let raceList = {
            name: "Race",
            list: ['', 'Arrancar', 'Demon', 'Hollow', 'Human', 'Iramasha', 'Plus', 'Quincy', 'Shinigami', 'Sueki', 'Sugiura', 'Visored', 'Ziamichi']
        }

        let blackTextCheck = {
            name: "Should Have Black Text",
            list: ['Yes', 'No']
        }
        
        let propertiesToExemplify = [
            "Name",
            "Title",
            raceList,
            affiliationList,
            "Primary Color",
            "Secondary Color",
            "Text Background Color",
            blackTextCheck,
            "Traits",
            "Power",
            "Picture",
            "Headshot",
            "Player",
            "Application Link"];
        let objectsForInformation = [];
        for (var property of propertiesToExemplify) {
            if(!property.name){
                objectsForInformation.push(<div className="example-section"><span className="example-header">{property}: </span><input type="text" className="example-input" name={property} /></div>)    
            } else{
                let dropboxContents = [];
                for(var item of property.list){
                    dropboxContents.push(<option value={item}>{item}</option>)
                }
                objectsForInformation.push(<div className="example-section"><span className="example-header">{property.name}: </span><select id={"select-"+property.name} className="example-input designer-select" name={property.name} >{dropboxContents}</select></div>)
            }}

        return (
            <Router>
            <div>
                <span className="designer-page-outer">
                    <span className="designer-page-inner">
                        <form onSubmit={(event) => this.handleExample(event)}>
                            {objectsForInformation}
                            <input className="basic-button example-button" type="submit" value="Submit" />
                        </form>
                        <button id="display-code" onClick={() => this.setState({ showCode: true })} className={"basic-button" + (!this.state.showCode ? "" : " disappear-button")} style={{ 'display': this.state.preppedCode ? 'flex' : 'none' }}>Generate Code</button>
                        <textarea readOnly id="code-area" style={{ 'display': this.state.showCode ? 'flex' : 'none' }} className="prepped-code" value={this.state.preppedCode}></textarea>
                        <button id="select-text" style={{ 'display': this.state.showCode ? 'flex' : 'none' }} className="basic-button" onClick={() => this.selectCode()}>Select Code</button>
                    </span>
                </span>

                <div id="example">
                </div>
            </div>
            </Router>
        );
    }
}

export default Designer;