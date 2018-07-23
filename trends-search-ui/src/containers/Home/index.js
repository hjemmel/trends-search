import React from 'react';
import './Home.css';
import BarChart from '../../components/BarChart';
import {connect} from 'react-redux';
import {loadTrends} from './actions';
import PropTypes from 'prop-types';

class Home extends React.Component {
  componentDidMount () {
    const {loadTrends} = this.props;
    loadTrends();
  }

  render (props) {
    return (
      <div className='home'>
        <div className='main'>
          <BarChart data={this.props.trends} />
        </div>
        <div className='options' />
      </div>);
  };
}

const mapStateToProps = state => {
  return {
    trends: state.home.trends
  };
};

const mapDispatchToProps = ({
  loadTrends: loadTrends
});

Home.propTypes = {
  loadTrends: PropTypes.func,
  trends: PropTypes.arrayOf(PropTypes.shape({
    'country': PropTypes.string,
    'hot dog': PropTypes.number,
    'hot dogColor': PropTypes.string,
    'burger': PropTypes.number,
    'burgerColor': PropTypes.string,
    'sandwich': PropTypes.number,
    'sandwichColor': PropTypes.string,
    'kebab': PropTypes.number,
    'kebabColor': PropTypes.string,
    'fries': PropTypes.number,
    'friesColor': PropTypes.string,
    'donut': PropTypes.number,
    'donutColor': PropTypes.string
  }))
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
