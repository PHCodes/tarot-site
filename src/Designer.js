import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Designer.css';
import { HuePicker } from 'react-color'
import HeadshotResult from './HeadshotResultDesigner';
import Headshot from './Headshot';
import * as AffiliationList from './affiliations.json';
import * as RaceList from './races.json';
import * as SubraceList from './subraces.json';


class Designer extends Component {
    //Should have item in props.
    constructor(props) {
        super(props)
        this.state = {
            preppedCode: null,
            showCode: false,
            backgroundColor: "#000",
            foregroundColor: "#000",
            textBackgroundColor: "#000",
            customFlag: false
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
        let subraceStorage = null;
        let example = {};
        //setup subrace.

        for (var exampleFieldToRender2 of event.currentTarget) {
            if (exampleFieldToRender2.name == "Subrace") {
                subraceStorage = exampleFieldToRender2.value;
            }
        }
        for (var exampleFieldToRender of event.currentTarget) {
            let tempStore = null;
            if (exampleFieldToRender.name == "Race") {
                if (subraceStorage) {
                    tempStore = `${subraceStorage} ${exampleFieldToRender.value}`;
                }
            }
            if ((exampleFieldToRender.type == "text" || exampleFieldToRender.type == "select-one") && exampleFieldToRender.name != "Subrace") {
                if (tempStore) {
                    const preppedValue = exampleFieldToRender.name.toLowerCase().replace(/ /g, "");
                    example[preppedValue] = tempStore;
                    newPreppedCode = newPreppedCode + `\"${preppedValue}\" : \"${exampleFieldToRender.value}\",\n`;
                    tempStore = null;
                }
                else if (exampleFieldToRender.value) {
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
        this.setState({ presentSetup: example });
        this.setState({ preppedCode: newPreppedCode });

        ReactDOM.render(<HeadshotResult item={example} match={this.props.match} tempField={true} getOwner={(trait, traitName) => this.props.getItemByTrait(trait, traitName)} leftLink={() => { return null }} rightLink={() => { return null }} />, document.getElementById('example'))
        ReactDOM.render(<Headshot item={example} match={this.props.match} />, document.getElementById("example-headshot"));
        return false;
    }
    selectCode = () => {
        document.getElementById("code-area").focus();
        document.getElementById("code-area").select();
    }

    changeBackgroundInput = (color, event) => {
        this.setState({ backgroundColor: color.hex });
        document.getElementById('Background Color').value = color.hex;
    }

    changeForegroundInput = (color, event) => {
        this.setState({ foregroundColor: color.hex });
        document.getElementById('Foreground Color').value = color.hex;
    }

    changeTextBackgroundInput = (color, event) => {
        this.setState({ textBackgroundColor: color.hex });
        document.getElementById('Text Background Color').value = color.hex;
    }

    render() {
        /*
        let affiliationList = {};
        affiliationList.name = AffiliationList.name;
        affiliationList.list = AffiliationList.list;

        let raceList = {};
        raceList.name = RaceList.name;
        raceList.list = RaceList.list;

        let subraceList = {};
        subraceList.name = SubraceList.name;
        subraceList.list = SubraceList.list;

        */ 
        let blackTextCheck = {
            name: "Should Have Black Text",
            list: ['Yes', 'No']
        }

        let statusSet = {
            name: "Activity",
            list: ["Active", "Inactive", "Incomplete"]
        } 

        let propertiesToExemplify = [
            "Name",
            "Title",
            //Must have raceList above subraceList for ordering.
            "Race",
            "Affiliation",
            "Background Color",
            "Foreground Color",
            "Text Background Color",
            blackTextCheck,
            "Traits",
            "Power",
            "Picture",
            "Headshot",
            "Player",
            "Application Link",
            statusSet];

        let objectsForInformation = [];
        for (var property of propertiesToExemplify) {
            if (!property.name) {
                if (property.includes("Color")) {
                    if(this.state.customFlag){
                        objectsForInformation.push(<div className="example-section"><span className="example-header">{property}: </span><input type="text" className="example-input" name={property} /></div>)
                    }else{
                        let currentState;
                        let handleChangeCompleteFunc;
                        let stateToChange = property.replace(/ /g, '');
                        if (property == "Background Color") {
                            currentState = this.state.backgroundColor;
                            handleChangeCompleteFunc = this.changeBackgroundInput;
                        }
                        if (property == "Foreground Color") {
                            currentState = this.state.foregroundColor;
                            handleChangeCompleteFunc = this.changeForegroundInput;
                        }
                        if (property == "Text Background Color") {
                            currentState = this.state.textBackgroundColor
                            handleChangeCompleteFunc = this.changeTextBackgroundInput;
                        }
                        let persistentName = {
                            name: property.toString(),
                        }
                        objectsForInformation.push(<div className="example-section"><span className="example-header">{property}: </span><input id={persistentName.name} type="text" className="example-input" name={property} defaultValue={currentState} /></div>)
                        objectsForInformation.push(<div className="" style={{ 'display': 'flex', 'justify-content': 'center', 'padding-top': '1vh' }}><HuePicker onChange={handleChangeCompleteFunc} color="#000"/></div>);
                       

                    }} else {
                    objectsForInformation.push(<div className="example-section"><span className="example-header">{property}: </span><input type="text" className="example-input" name={property} /></div>)
                }
            } else {
                let dropboxContents = [];
                for (var item of property.list) {
                    dropboxContents.push(<option value={item}>{item}</option>)
                }
                objectsForInformation.push(<div className="example-section"><span className="example-header">{property.name}: </span><select id={"select-" + property.name} className="example-input designer-select" name={property.name} >{dropboxContents}</select></div>)
            }
        }

        return (
            <Router>
                <div>
                    <span className="designer-page-outer">
                        <span className="designer-page-inner">
                            <form onSubmit={(event) => this.handleExample(event)}>
                                {objectsForInformation}
                                <input className="basic-button example-button" type="submit" value="Display Preview" />
                            </form>
                            <button id="display-code" onClick={() => this.setState({ showCode: true })} className={"basic-button" + (!this.state.showCode ? "" : " disappear-button")} style={{ 'display': this.state.preppedCode ? 'flex' : 'none' }}>Generate Code</button>
                            <textarea readOnly id="code-area" style={{ 'display': this.state.showCode ? 'flex' : 'none' }} className="prepped-code" value={this.state.preppedCode}></textarea>
                            <button id="select-text" style={{ 'display': this.state.showCode ? 'flex' : 'none' }} className="basic-button" onClick={() => this.selectCode()}>Select Code</button>
                        </span>
                    </span>

                    <div id="example-headshot">
                    </div>

                    <div id="example">
                    </div>
                </div>
            </Router>
        );
    }
}

export default Designer;