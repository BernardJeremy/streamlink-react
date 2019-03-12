import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import DecoderApi from '../../webservices/Decoder';
import LinksList from './LinksList/LinksList';
import { updateLinksList } from '../../actions/VideoLinks';

const TWITCH_URL_PLACEOLDER = 'https://twitch.tv/';

class TwitchLinkInput extends React.Component {
  constructor(props) {;
    super(props);
    this.state = {
      twitchUrl: TWITCH_URL_PLACEOLDER,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.onUpdateLinksList([], 'Processing...');
    DecoderApi.getDecodedContentUrl(this.state.twitchUrl).then(
      (result) => {
        if (result && !result.error) {
          this.props.onUpdateLinksList(result);
        } else {
          this.props.onUpdateLinksList([], 'Links not found')
        }
      },
      (error) => {
        this.props.onUpdateLinksList([], 'An error occured')
      }
    );
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ twitchUrl: event.target.value });
  }

  render() {
    return (
      <form id="linkForm" onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="head">
            <h2>Video Direct Links</h2>
          </div>
          <input id="linkInput" type="text" value={this.state.twitchUrl} onChange={this.handleChange} />
          <br />
          <LinksList />
          <button id="submit" type="submit">Send</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateLinksList: (newLink, placeholder) => {
      dispatch(updateLinksList(newLink, placeholder))
    }
  };
}

TwitchLinkInput.propTypes = {
  onUpdateLinksList: PropTypes.func.isRequired,
}

const TwitchLinkInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TwitchLinkInput)


export default TwitchLinkInputContainer; 