/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import messages from './messages';
import {
  makeSelectEmail,
  makeSelectIsLoading,
  makeSelectIsSuccess,
  makeSelectToken,
  makeSelectIsFailure,
} from './selectors';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <PageHeader>
          <FormattedMessage {...messages.header} />
        </PageHeader>
        <div className="jumbotron">
          <h1><FormattedMessage {...messages.h1} /></h1>
          <p className="lead"><FormattedMessage {...messages.p1} /></p>
        </div>
        <div className={(!this.props.isLoading && this.props.isSuccess) ? 'hidden' : ''}>
          <p><FormattedMessage {...messages.p2} /></p>
          <form onSubmit={this.props.onSubmitForm}>
            <p>
              <label htmlFor="email">
                <input
                  autoComplete="off"
                  className="form-control"
                  id="email"
                  onChange={this.props.onChangeEmail}
                  placeholder="Enter your email..."
                  type="text"
                  value={this.props.email}
                />
              </label>
            </p>
            <p className={this.props.isLoading ? 'hidden' : ''}>
              <button className="btn btn-primary" disabled={this.props.email === ''} type="submit">Submit</button>
            </p>
          </form>
        </div>
        <p className={!this.props.isLoading ? 'hidden' : ''}>
          Loading...
        </p>
        <p className={!this.props.isSuccess ? 'hidden' : 'alert alert-success'}>
          Success! We have sent you an email. Your emergency token is {this.props.token}.
        </p>
        <p className={!this.props.isSuccess ? 'hidden' : ''}>
          <button className="btn btn-info" onClick={this.props.onClick}>Try again</button>
        </p>
        <p className={!this.props.isFailure ? 'hidden' : 'alert alert-danger'}>
          Failure! An unknown error has occurred. Please try again.
        </p>
        <footer className="footer">
          <p>&copy; 2017 tronc, Inc.</p>
        </footer>
      </div>
    );
  }
}

HomePage.propTypes = {
  email: React.PropTypes.string,
  isLoading: React.PropTypes.bool,
  isSuccess: React.PropTypes.bool,
  token: React.PropTypes.string,
  isFailure: React.PropTypes.bool,
  onChangeEmail: React.PropTypes.func,
  onSubmitForm: React.PropTypes.func,
  onClick: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: (evt) => dispatch({
      type: 'UPDATE_EMAIL',
      email: evt.target.value,
    }),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch({
        type: 'REQUEST',
      });
    },
    onClick: () => {
      dispatch({
        type: 'RESET',
      });
    },
  };
}

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  isLoading: makeSelectIsLoading(),
  isSuccess: makeSelectIsSuccess(),
  token: makeSelectToken(),
  isFailure: makeSelectIsFailure(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
