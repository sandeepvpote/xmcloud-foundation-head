import { connect } from 'react-redux';

import ALink from '../custom-link';

import { cartActions } from '../../../store/cart';

import { getTotalPrice, getCartCount, toDecimal } from '../../../utils';

function CartMenu(props) {
  const { cartList, removeFromCart } = props;

  const removeCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div className="dropdown cart-dropdown type2">
      <ALink href="#" className="cart-toggle link">
        <i className="d-icon-bag">
          <span className="cart-count">{getCartCount(cartList)}</span>
        </i>
      </ALink>
      <div className="dropdown-box">
        {cartList.length > 0 ? (
          <>
            <div className="products scrollable">
              {cartList.map((item, index) => (
                <div className="product product-cart" key={'cart-menu-product-' + index}>
                  <figure className="product-media pure-media">
                    <ALink href={'/product/default/' + item.slug}>
                      <img
                        src={process.env.NEXT_PUBLIC_ASSET_URI + item.pictures[0].url}
                        alt="product"
                        width="80"
                        height="88"
                      />
                    </ALink>
                    <button
                      className="btn btn-link btn-close"
                      onClick={() => {
                        removeCart(item);
                      }}
                    >
                      <i className="fas fa-times"></i>
                      <span className="sr-only">Close</span>
                    </button>
                  </figure>
                  <div className="product-detail">
                    <ALink href={'/product/default/' + item.slug} className="product-name">
                      {item.name}
                    </ALink>
                    <div className="price-box">
                      <span className="product-quantity">{item.qty}</span>
                      <span className="product-price">${toDecimal(item.price)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <label>Subtotal:</label>
              <span className="price">${toDecimal(getTotalPrice(cartList))}</span>
            </div>

            <div className="cart-action">
              <ALink href="/pages/cart" className="btn btn-dark btn-link">
                View Cart
              </ALink>
              <ALink href="/pages/checkout" className="btn btn-dark">
                <span>Go To Checkout</span>
              </ALink>
            </div>
          </>
        ) : (
          <p className="m-0 text-center font-weight-semi-bold ls-normal text-body">
            No products in the cart.
          </p>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cartList: state.cart.data,
  };
}

export default connect(mapStateToProps, { removeFromCart: cartActions.removeFromCart })(CartMenu);
