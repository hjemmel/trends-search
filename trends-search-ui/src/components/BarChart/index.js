import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types';

class BarChart extends React.Component {
  render (props) {
    return (
      <ResponsiveBar
        data={this.props.data}
        keys={[
          'hot dog',
          'burger',
          'sandwich',
          'kebab',
          'fries',
          'donut'
        ]}
        indexBy='country'
        margin={{
          'top': 50,
          'right': 130,
          'bottom': 50,
          'left': 60
        }}
        padding={0.3}
        colors='nivo'
        colorBy='id'
        defs={[
          {
            'id': 'dots',
            'type': 'patternDots',
            'background': 'inherit',
            'color': '#38bcb2',
            'size': 4,
            'padding': 1,
            'stagger': true
          },
          {
            'id': 'lines',
            'type': 'patternLines',
            'background': 'inherit',
            'color': '#eed312',
            'rotation': -45,
            'lineWidth': 6,
            'spacing': 10
          }
        ]}
        fill={[
          {
            'match': {
              'id': 'fries'
            },
            'id': 'dots'
          },
          {
            'match': {
              'id': 'sandwich'
            },
            'id': 'lines'
          }
        ]}
        borderColor='inherit:darker(1.6)'
        axisBottom={{
          'orient': 'bottom',
          'tickSize': 5,
          'tickPadding': 5,
          'tickRotation': 0,
          'legend': 'country',
          'legendPosition': 'center',
          'legendOffset': 36
        }}
        axisLeft={{
          'orient': 'left',
          'tickSize': 5,
          'tickPadding': 5,
          'tickRotation': 0,
          'legend': 'food',
          'legendPosition': 'center',
          'legendOffset': -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor='inherit:darker(1.6)'
        animate
        motionStiffness={90}
        motionDamping={15}
        legends={[
          {
            'dataFrom': 'keys',
            'anchor': 'top',
            'direction': 'row',
            'translateY': -30,
            'itemWidth': 100,
            'itemHeight': 20,
            'itemsSpacing': 2,
            'symbolSize': 20
          }
        ]}
        theme={{
          'tooltip': {
            'container': {
              'fontSize': '13px'
            }
          },
          'labels': {
            'textColor': '#555'
          }
        }}
      />
    );
  }
}

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
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

export default BarChart;
