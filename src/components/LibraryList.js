import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const datasource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = datasource.cloneWithRows(this.props.libraries);
  }

  render() {
    return (
      <ListView
        dataSource={ this.dataSource }
        renderRow={ this.renderRow } />
    );
  }

  renderRow(library) {
    return (<ListItem library={ library } />);
  }
}

LibraryList.propTypes = {
  libraries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }))
};

LibraryList.defaultProps = {
  libraries: []
};

function mapStateToProps(state) {
  return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);
