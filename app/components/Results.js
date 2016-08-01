var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;

var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('../containers/MainContainer');
var Loading = require('./Loading');

function Startover() {
  return(
    <div className="col-sm-8 col-sm-offset-2">
      <div className="col-sm-12">
        <Link to="/playerOne">
          <button type="button" className="btn btn-lg btn-danger" style={styles.spaced}>
            Start Over
          </button>
        </Link>
      </div>
    </div>
  )
}

function getHeader(position, scores) {
  var header;

  if(position === 0){
    header = scores[position] > scores[1] ? "Winner" : "Loser"
  }else{
    header = scores[position] > scores[0] ? "Winner" : "Loser"
  };

  return header;
}

function Results (props) {
  if (props.isLoading){
    return(
      <Loading />
    )
  }

  return (
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-12">
        <UserDetailsWrapper header={getHeader(0, props.scores)}>
          <UserDetails info={props.playersInfo[0]} score={props.scores[0]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header={getHeader(1, props.scores)}>
          <UserDetails info={props.playersInfo[1]} score={props.scores[1]} />
        </UserDetailsWrapper>
      </div>
      <Startover />
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
