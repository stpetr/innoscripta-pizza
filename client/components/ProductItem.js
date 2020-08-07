import React from 'react'
import { connect } from 'react-redux'
import { cartAddItem } from "../actions/cart";

export class ProductItem extends React.Component {
    onAddToCart = (product) => {
        this.props.cartAddItem(product)
    }
    render() {
        const { product } = this.props
        return (
            <div className="product-item">
                <div className="product-item__top">
                    { product.image &&
                    <img src={`/uploads/products/${product.image}`} className="product-item__image" />
                    }
                    <div className="product-item__content">

                        <h3 className="product-item__title">{product.title}</h3>
                        <p className="product-item__description">{product.description}</p>
                    </div>
                </div>
                <div className="product-item__bottom">
                    <button className="btn -pill" onClick={() => this.onAddToCart(product)}>Add to cart</button>
                    <span className="product-item__price">{product.price}</span>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    cartAddItem: (product) => dispatch(cartAddItem(product))
})

export default connect(undefined, mapDispatchToProps)(ProductItem)
