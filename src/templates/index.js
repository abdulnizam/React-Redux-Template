import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// import '../scss/_style.scss';
// import '../scss/_queries.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

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

  onUpdateUser(event) {
    this.props.onUpdateUsers(event.target.value)
  }

  render() {
    console.log(this.props)

    return (
      <div className="container">
        <h2>React + Redux Template</h2>
        <p>Here the example template for react + redux.</p>
        <div className="form-group">
          <input type="text" onChange={this.onUpdateUser} className="form-control" id="usr" />
          <label for="usr">{this.props.user}</label>
        </div>
    

        <ul className="list-group">
        {this.props.products.map(item => (
            <li className="list-group-item">{item.name}</li>
          ))}
        </ul>
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
