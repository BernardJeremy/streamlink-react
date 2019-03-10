import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'


class LinksList extends React.Component {
  render() {
    let linksText = this.props.linksPlaceholder;

    if (this.props.linksList.length > 0) {
      linksText = this.props.linksList.map((link, i) => 
        <p key={i}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.type}</a></p>
      );
    }

    return (
      <div className="links">{linksText}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    linksList: state.videoLinks.linksList,
    linksPlaceholder: state.videoLinks.linksPlaceholder,

  };
}

const mapDispatchToProps = dispatch => {
  return {};
}

LinksList.propTypes = {
  linksList: PropTypes.array.isRequired,
  linksPlaceholder: PropTypes.string.isRequired,
}

const LinksListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinksList)


export default LinksListContainer; 