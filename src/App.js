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
      <div>
        <h2>Roster</h2>
        <ResultsSection match={match} items={this.props.itemList} />
      </div>
    )

    const Designer2 = () => (
      <div>
        <Designer />
      </div>
    )

    const Topic = ({ match }) => (
      <div>
        <h3>{match.params.topicId}</h3>
      </div>
    )
    let resultPages = []
    let x = 0;
    for (let item of this.props.itemList) {
      x = x + 1;
      resultPages.push(<AnimatedRoute
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper" key={x} path={`/${item.name}`} component={() => <HeadshotResult item={item} />} />);
    }
    /* for (var x = 0; x < this.props.itemList.length - 1; x++) {
      var item = this.props.itemList[x];
      var rightMove;
      var leftMove;
      if (this.props.itemList[x - 1]) {
        leftMove = this.props.itemList[x - 1].name;
      }
      if (this.props.itemList[x + 1]) {
        rightMove = this.props.itemList[x + 1].name;
      }
      console.log(rightMove);
      console.log(leftMove);
      resultPages.push(<AnimatedRoute
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper" key={x} path={`/${item.name}`} component={() => <HeadshotResult item={item} />} />);
    } */

    return (

      <div className="App">
        <Router>
          <div className="App" id="main-color">
            <header className="App-header">
              <Link to="/" className="link-button" style={{ textDecoration: 'none' }}><button className="basic-button">Overview</button></Link>
              <Link to="/roster" className="link-button" style={{ textDecoration: 'none' }}><button className="basic-button">Roster</button></Link>
              <Link to="/designer" className="link-button" style={{ textDecoration: 'none' }}><button className="basic-button">Designer</button></Link>

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
              {resultPages}
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
