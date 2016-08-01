var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('../containers/MainContainer');
var Loading = require('./Loading');

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <Loading speed={500} text='Wait a minute'/>
    : <MainContainer>
        <h1>Confirm Battle</h1>
        <div className="col-sm-12">
          <UserDetailsWrapper header="Player One">
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header="Player Two">
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className="col-sm-12">
          <button type="button" className="btn btn-lg btn-success"
            onClick={props.onInitializeBattle} style={styles.spaced}>
            Initiate Battle
          </button>
        </div>
        <div className="col-sm-12">
          <Link to="/playerOne">
            <button type="button" className="btn btn-lg btn-danger"
               style={styles.spaced}>
              Reselect Players
            </button>
          </Link>
        </div>
      </MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitializeBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
