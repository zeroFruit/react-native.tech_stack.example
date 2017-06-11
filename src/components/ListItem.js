import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CardSection } from './common';

import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={ () => this.props.selectLibrary(id) }>
        <View>
          <CardSection>
            <Text style={ titleStyle }>
              { title }
            </Text>
          </CardSection>
          { this.renderDescription() }
        </View>
      </TouchableWithoutFeedback>
    );
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={ { flex: 1 } }>
            { library.description }
          </Text>
        </CardSection>
      );
    }
  }
}

ListItem.propTypes = {
  library: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  selectLibrary: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

function mapStateToProps(state, ownProps) {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);
