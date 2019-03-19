import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ResultsSection from './ResultsSection';
import HeadshotResult from './HeadshotResult';
import { spring, AnimatedRoute } from 'react-router-transition';
import Overview from './Overview';
import Designer from './Designer';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      searchedItemsList: []
    }
  }

  searchCompleted = (searchResultItems) => {
    this.setState({ searchedItemsList: searchResultItems });
  }

  getItemByTrait = (trait, traitName) => {
    let relatedInfo = []
    if (traitName == "player") {
      relatedInfo.push(this.props.ownerList.find(x => x.name === trait));} 
    if (traitName == "related"){
      for(let currentTrait of trait){
        let itemToCheck = this.props.itemList.find(x => x.name === currentTrait);
        if(itemToCheck){
          relatedInfo.push(itemToCheck);
        }
        itemToCheck = this.props.inactiveList.find(x => x.name === currentTrait);
        if(itemToCheck){
          relatedInfo.push(itemToCheck);
        }
        itemToCheck = this.props.incompleteList.find(x => x.name === currentTrait);
        if(itemToCheck){
          relatedInfo.push(itemToCheck);
        }
      }
    }
    return <ResultsSection makeSearchFunctionAvailable={(searchFunc) => this.searchFunctionAvailable(searchFunc)} searchCompletedFunc={(searchResultItems) => this.searchCompleted(searchResultItems)} haveSearched={this.state.searchedItemsList.length > 0 ? true : false} items={relatedInfo} />
  
  }


  searchFunctionAvailable = (searchFunc) => {
    this.searchFunctionByTrait = searchFunc;
  }

  searchFunctionByTrait;

  componentDidMount() {
  }
  //Should have itemList in props. 
  render() {

    // we need to map the `scale` prop we define below
    // to the transform style property
    function mapStyles(styles) {
      return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
      };
    }

    // wrap the `spring` helper to use a bouncy config
    function bounce(val) {

      return spring(val, {
        stiffness: 330,
        damping: 22,
        zIndex: 100,
      });
    }

    // child matches will...
    const bounceTransition = {

      // start in a transparent, upscaled state
      atEnter: {
        opacity: 0,
        scale: 1.2,
      },
      // leave in a transparent, downscaled state
      atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8),
      },
      // and rest at an opaque, normally-scaled state
      atActive: {
        opacity: bounce(1),
        scale: bounce(1),
      },
    };

    const Overview2 = () => (
      <div>
        <Overview />
      </div>
    )

    const Roster = ({ match }) => (
      <div className="roster-page">
        <h2>Roster</h2>
        <ResultsSection key={"roster"} mainSection={true} match={match} makeSearchFunctionAvailable={(searchFunc) => this.searchFunctionAvailable(searchFunc)} searchCompletedFunc={(searchResultItems) => this.searchCompleted(searchResultItems)} haveSearched={this.state.searchedItemsList.length > 0 ? true : false} items={this.state.searchedItemsList.length > 0 ? this.state.searchedItemsList : this.props.itemList} />
      </div>
    )

    const Designer2 = ({ match }) => (
      <div>
        <Designer key={"designer"} match={match} getItemByTrait={(trait, traitName) => this.getItemByTrait(trait, traitName)}/>
      </div>
    )

    const Owners2 = ({ match }) => (
      <div>
        <h2>Players</h2>
        <ResultsSection key={"owners"} match={match} makeSearchFunctionAvailable={(searchFunc) => this.searchFunctionAvailable(searchFunc)} searchCompletedFunc={(searchResultItems) => this.searchCompleted(searchResultItems)} haveSearched={this.state.searchedItemsList.length > 0 ? true : false} items={this.props.ownerList} />
      </div>
    )

    const InactiveRoster = ({ match }) => (
      <div>
        <h2>Inactive</h2>
        <ResultsSection key={"owners"} match={match} makeSearchFunctionAvailable={(searchFunc) => this.searchFunctionAvailable(searchFunc)} searchCompletedFunc={(searchResultItems) => this.searchCompleted(searchResultItems)} haveSearched={this.state.searchedItemsList.length > 0 ? true : false} items={this.props.inactiveList} />
      </div>
    )

    const IncompleteRoster = ({ match }) => (
      <div>
        <h2>Coming Soon!</h2>
        <ResultsSection key={"owners"} match={match} makeSearchFunctionAvailable={(searchFunc) => this.searchFunctionAvailable(searchFunc)} searchCompletedFunc={(searchResultItems) => this.searchCompleted(searchResultItems)} haveSearched={this.state.searchedItemsList.length > 0 ? true : false} items={this.props.incompleteList} />
      </div>
    )

    const Topic = ({ match }) => (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    )


    //For the linking lists.
    let fetchCurrentObj = (itemName) => {
      for (let newItem of this.props.itemList) {
        if (newItem.name == itemName) {
          return newItem;
        }
      }
    }

    //For the linking lists.
    let fetchCurrentObjOwner = (itemName) => {
      for (let newItem of this.props.ownerList) {
        if (newItem.name == itemName) {
          return newItem;
        }
      }
    }

    //For the other lists.
    let fetchCurrentObjInactive = (itemName) => {
      for (let newItem of this.props.inactiveList) {
        if (newItem.name == itemName) {
          return newItem;
        }
      }
    }

    //For the other lists.
    let fetchCurrentObjIncomplete = (itemName) => {
      for (let newItem of this.props.incompleteList) {
        if (newItem.name == itemName) {
          return newItem;
        }
      }
    }


    let resultPages = []
    let x = 0;


    for (let item of this.props.ownerList) {
      x = x + 1;
      let currentLink = `/${item.linkName}`;

      let getLeftLink = (item) => {
        let leftLink = null;
        let correctObj = fetchCurrentObjOwner(item);
        let x = this.props.ownerList.lastIndexOf(correctObj);
        if (this.props.ownerList[x - 1]) {
          leftLink = `/${this.props.ownerList[x - 1].linkName}`;
        }
        return leftLink;
      }

      let getRightLink = (item) => {
        let rightLink = null;
        let correctObj = fetchCurrentObjOwner(item);
        let x = this.props.ownerList.lastIndexOf(correctObj);
        if (this.props.ownerList[x + 1]) {
          rightLink = `/${this.props.ownerList[x + 1].linkName}`;
        }
        return rightLink;
      }

      resultPages.push(<AnimatedRoute
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper" path={currentLink} component={() => <HeadshotResult item={item} searchBySingleTrait={(traitNameAndValue) => this.searchFunctionByTrait(traitNameAndValue)} leftLink={(item) => getLeftLink(item)} rightLink={(item) => getRightLink(item)} />} />);
    }

    for (let owner of this.props.ownerList) {
      let itemList = [];
      if (owner.items[0]) {
        if (owner.items[0].name) {
          for (let ownedItem of owner.items) {
            itemList.push(ownedItem);
          }
          owner.items = <ResultsSection middleSection={true} makeSearchFunctionAvailable={(searchFunc) => this.searchFunctionAvailable(searchFunc)} searchCompletedFunc={(searchResultItems) => this.searchCompleted(searchResultItems)} haveSearched={this.state.searchedItemsList.length > 0 ? true : false} items={itemList} />
        }
      }
    }


    for (let item of this.props.itemList) {
      x = x + 1;
      let currentLink = `/${item.linkName}`;

      let getLeftLink = (item) => {
        let leftLink = null;
        let correctObj = fetchCurrentObj(item);
        let x = this.props.itemList.lastIndexOf(correctObj);
        if (this.state.searchedItemsList.length > 0) {
          x = this.state.searchedItemsList.lastIndexOf(correctObj);
          if (this.state.searchedItemsList[x - 1]) {
            leftLink = `/${this.state.searchedItemsList[x - 1].linkName}`;
          }
        } else {
          if (this.props.itemList[x - 1]) {
            leftLink = `/${this.props.itemList[x - 1].linkName}`;
          }
        }
        return leftLink;
      }

      let getRightLink = (item) => {
        let rightLink = null;
        let correctObj = fetchCurrentObj(item);
        let x = this.props.itemList.lastIndexOf(correctObj);
        if (this.state.searchedItemsList.length > 0) {
          x = this.state.searchedItemsList.lastIndexOf(correctObj);
          if (this.state.searchedItemsList[x + 1]) {
            rightLink = `/${this.state.searchedItemsList[x + 1].linkName}`;
          }
        } else {
          if (this.props.itemList[x + 1]) {
            rightLink = `/${this.props.itemList[x + 1].linkName}`;
          }
        }
        return rightLink;
      }

      resultPages.push(<AnimatedRoute
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper" path={currentLink} component={() => <HeadshotResult item={item} getOwner={(trait, traitName) => this.getItemByTrait(trait, traitName)} searchBySingleTrait={(traitNameAndValue) => this.searchFunctionByTrait(traitNameAndValue)} leftLink={(item) => getLeftLink(item)} rightLink={(item) => getRightLink(item)} />} />);
    }


    for (let item of this.props.inactiveList) {
      x = x + 1;
      let currentLink = `/${item.linkName}`;

      let getLeftLink = (item) => {
        let leftLink = null;
        let correctObj = fetchCurrentObjInactive(item);
        let x = this.props.inactiveList.lastIndexOf(correctObj);
        if (this.state.searchedItemsList.length > 0) {
          x = this.state.searchedItemsList.lastIndexOf(correctObj);
          if (this.state.searchedItemsList[x - 1]) {
            leftLink = `/${this.state.searchedItemsList[x - 1].linkName}`;
          }
        } else {
          if (this.props.inactiveList[x - 1]) {
            leftLink = `/${this.props.inactiveList[x - 1].linkName}`;
          }
        }
        return leftLink;
      }

      
    let getRightLink = (item) => {
      let rightLink = null;
      let correctObj = fetchCurrentObjInactive(item);
      let x = this.props.inactiveList.lastIndexOf(correctObj);
      if (this.state.searchedItemsList.length > 0) {
        x = this.state.searchedItemsList.lastIndexOf(correctObj);
        if (this.state.searchedItemsList[x + 1]) {
          rightLink = `/${this.state.searchedItemsList[x + 1].linkName}`;
        }
      } else {
        if (this.props.inactiveList[x + 1]) {
          rightLink = `/${this.props.inactiveList[x + 1].linkName}`;
        }
      }
      return rightLink;
    }

      resultPages.push(<AnimatedRoute
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper" path={currentLink} component={() => <HeadshotResult item={item} getOwner={(trait, traitName) => this.getItemByTrait(trait, traitName)} searchBySingleTrait={(traitNameAndValue) => this.searchFunctionByTrait(traitNameAndValue)} leftLink={(item) => getLeftLink(item)} rightLink={(item) => getRightLink(item)} />} />);
    }

    for (let item of this.props.incompleteList) {
      x = x + 1;
      let currentLink = `/${item.linkName}`;

      let getLeftLink = (item) => {
        let leftLink = null;
        let correctObj = fetchCurrentObjIncomplete(item);
        let x = this.props.incompleteList.lastIndexOf(correctObj);
        if (this.state.searchedItemsList.length > 0) {
          x = this.state.searchedItemsList.lastIndexOf(correctObj);
          if (this.state.searchedItemsList[x - 1]) {
            leftLink = `/${this.state.searchedItemsList[x - 1].linkName}`;
          }
        } else {
          if (this.props.incompleteList[x - 1]) {
            leftLink = `/${this.props.incompleteList[x - 1].linkName}`;
          }
        }
        return leftLink;
      }

      
    let getRightLink = (item) => {
      let rightLink = null;
      let correctObj = fetchCurrentObjIncomplete(item);
      let x = this.props.incompleteList.lastIndexOf(correctObj);
      if (this.state.searchedItemsList.length > 0) {
        x = this.state.searchedItemsList.lastIndexOf(correctObj);
        if (this.state.searchedItemsList[x + 1]) {
          rightLink = `/${this.state.searchedItemsList[x + 1].linkName}`;
        }
      } else {
        if (this.props.incompleteList[x + 1]) {
          rightLink = `/${this.props.incompleteList[x + 1].linkName}`;
        }
      }
      return rightLink;
    }

      resultPages.push(<AnimatedRoute
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper" path={currentLink} component={() => <HeadshotResult item={item} getOwner={(trait, traitName) => this.getItemByTrait(trait, traitName)} searchBySingleTrait={(traitNameAndValue) => this.searchFunctionByTrait(traitNameAndValue)} leftLink={(item) => getLeftLink(item)} rightLink={(item) => getRightLink(item)} />} />);
    }

    return (

      <div className="App">
        <Router>
          <div className="App" id="main-color">
            <header className="App-header">
              <Link to="/" className="link-button" style={{ textDecoration: 'none' }}><button className="basic-button">Overview</button></Link>
              <Link to="/roster" className="link-button" style={{ textDecoration: 'none' }}><button className="basic-button" id="roster-link">Roster</button></Link>
              <Link to="/designer" className="link-button" style={{ textDecoration: 'none' }}><button className="basic-button">Designer</button></Link>
              <Link to="/players" className="link-button" style={{ textDecoration: 'none' }}><button className="basic-button">Players</button></Link>
              <Link to="/inactive" className="link-button" style={{ textDecoration: 'none' }}><button className="basic-button">Inactive</button></Link>
              <Link to="/incomplete" className="link-button" style={{ textDecoration: 'none' }}><button className="basic-button">Coming Soon</button></Link>

            </header>
            <div className="App-body">
              <AnimatedRoute
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="route-wrapper" exact path="/" component={Overview2} />
              <AnimatedRoute
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="route-wrapper" path="/roster" component={Roster} />
              <AnimatedRoute
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="route-wrapper" path="/designer" component={Designer2} />

              <AnimatedRoute
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="route-wrapper" path="/players" component={Owners2} />

              <AnimatedRoute
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="route-wrapper" path="/inactive" component={InactiveRoster} />
              <AnimatedRoute
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="route-wrapper" path="/incomplete" component={IncompleteRoster} />
              {resultPages}
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
