import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const CardSection = props => (
  <View style={ style.containerStyle }>
    { props.children }
  </View>
);

CardSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.array.isRequired
  ]).isRequired
};

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
