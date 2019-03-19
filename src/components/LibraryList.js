import React, { Component } from 'React';
import { connect } from 'react-redux';
import { View } from 'react-native';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return (
      <View />
    );
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries
  };
};

// connect() is called, returns a function that is being called with
// LibraryList as an argument
export default connect(mapStateToProps)(LibraryList);