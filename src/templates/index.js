import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import '../scss/_style.scss';
import '../scss/_queries.scss';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateUser, apiRequest } from '../actions/user-action'
import { createSelector } from 'reselect'

class IndexText extends PureComponent {

  constructor(props) {
    super(props)
    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  componentDidMount() {
    this.props.apiRequest()
  }

  handleChange = event => {
    this.props.textChange(event);
  };

  onUpdateUser(event) {
    this.props.onUpdateUsers(event.target.value)
  }

  render() {
    console.log(this.props)

    return (
      <div className="hero-text-box">
          <input type="text" onChange={this.onUpdateUser} placeholder="Enter your Plate Number ..." required />
          <div>{this.props.user}</div>
      </div>
    );
  }

}

IndexText.propTypes = {
  textChange: PropTypes.func
};

// const mapState = (state, props) => {
//   return {
//       products: state.products,
//       user: state.user,
//       randomProps: props.randomProps
//     }

// }

const productsSelector = createSelector(
    state => state.products,
    products => products
  )

const userSelector = createSelector(
    state => state.user,
    user => user
  )

const mapState = createSelector( 
    productsSelector,
    userSelector,
    (products, user) => ({
      products, user
    })
  );
    
const mapAction = {
    onUpdateUsers: updateUser,
    apiRequest: apiRequest
}

// const mergeProps = (fromState,fromDispatch, ownProps) => {

//   console.log(fromState)
//   console.log(fromDispatch)
//   console.log(ownProps)

//   return {};
// }

export default connect(mapState, mapAction)(IndexText)
