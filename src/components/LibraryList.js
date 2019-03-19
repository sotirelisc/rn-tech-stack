import React, { Component } from 'React';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    console.log(this.props);

    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id}
      />
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