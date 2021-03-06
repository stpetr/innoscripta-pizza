import React from 'react';
import ProductList from "./ProductList";
import CartWidget from "./CartWidget";

export class HomePage extends React.Component {
    render() {
        return (
            <div className="page page__home">
                <h1 className="page__heading">Welcome to our Pizza restaurant!</h1>
                <h2 className="page__home__menu-heading">Here's what we've got for you:</h2>
                <div className="with-sidebar">
                    <ProductList />
                    <div className="sidebar">
                        <CartWidget navigateToOrderPage={() => this.props.history.push('/order')} />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage
