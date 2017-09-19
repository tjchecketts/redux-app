import React from 'react';
import { connect } from 'react-redux';

const styles = {
  link: { textDecoration: 'underline', cursor: 'pointer', color: 'blue' }
}

const FilterLink = ({ filter, children, dispatch }) => {
  if (children === filter) {
    return (
      <span>{children}</span>
    )
  } else {
    return (
      <span 
        style={styles.link}
        onClick={ () => dispatch({ type: 'SET_FILTER', filter: children }) }
      >
        {children}
      </span>
    )
  }
}

const mapStateToProps = (state) => {
  return { filter: state.filter }
}

export default connect(mapStateToProps)(FilterLink);
