import React, {PropTypes} from 'react';
import {connect} from 'redux/react';

export default
class OfferForm {
  static propTypes = {
    price: PropTypes.number
  }

  getInitialState() {
    return {
      offer: this.props.price
    };
  }

  submit(event) {
    event.preventDefault();

    const { offer } = this.state;
    alert(`Submit ${offer}`);
  }

  render() {
    const {offer} = this.state;
    return (
      <div>
        <h3>Make an offer</h3>
        <form method='post' onSubmit={this.submit}>
          <label for='price'>Price</label>
          <input name='price' value={offer} type='number'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

// @connect(state => ({
//   time: state.info.data.time
// }))
// export default
// class MiniInfoBarContainer {
//   static propTypes = {
//     time: PropTypes.number,
//     dispatch: PropTypes.func.isRequired
//   }

//   render() {
//     const { time, dispatch } = this.props;
//     return <MiniInfoBar time={time}/>;
//     // no bindActionCreators() because this component is display-only
//   }
// }
