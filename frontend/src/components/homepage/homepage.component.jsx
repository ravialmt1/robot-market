import React from 'react';

import CollectionPage from '../collection/collection.component'

import './homepage.styles.scss';
import './container.styles.scss'
import './cart.styles.scss'
import { connect } from "react-redux";
import { fetchProducts } from '../../redux/shop/shop.actions';
import CartComponent from '../cart/cart.component';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, items } = this.props;
    
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    console.log(error,loading,items);
    console.log(this.props);
    return (
  <div style={{display:'flex'}} >
     
    <div className='homepage'>
      <CollectionPage collections={items} />
    </div>
    <div className='cart'>
      <CartComponent />
      </div>
    
  </div>
);
  
    }
  }
  const mapStateToProps = state => ({
    items: state.shop.items,
    loading: state.shop.loading,
    error: state.shop.error
  });
  
  export default connect(mapStateToProps)(HomePage);
  
