import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { ProductConsumer} from '../context';

class Product extends Component {
    render() {
        const { id, title, img, price, company, info, inCart } = this.props.product;
        return (
            <ProductWraper className="col-9 col-md-6 col-lg-3 mx-auto">
                <div className="card">
                    <ProductConsumer>
                        {
                            (value) => (
                                <div>
                                    <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                                        <Link to="/details">
                                            <img src={img} alt={title} className="card-img-top" />
                                        </Link>
                                        <button
                                            className="cart-btn"
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? (
                                                <p className="text-capitalize mb-0" disabled>
                                                    In Cart
                               </p>
                                            ) : (
                                                    <i className="fas fa-cart-plus" />
                                                )}
                                        </button>
                                    </div>

                                    <div className="card-footer d-flex justify-content-between">
                                        <p className="align-self-center mb-0">{title}</p>
                                        <h5 className="text-blue font-italic mb-0">
                                            <span className="mr-1">$</span>
                                            {price}
                                        </h5>
                                    </div>
                                </div>
                            )
                        }

                    </ProductConsumer>
                </div>

            </ProductWraper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};


const ProductWraper = styled.div`
    .card {
        border-color: transparent;
        transition: all 1s linear;
    }

    .card-footer: {
        border-top: transparent;
        background: transparent;
        transition: all 1s linear;
    }
    &:hover {
        .card {
          border: 0.04rem solid rgba(0,0,0,0.2);
          box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2)
        }
        .card-footer {
          background: rgba(247, 247, 247);
        }      
    }

    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top{
    transform: scale(1.2);
    }
}
    .cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2 rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color:var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
    }
    .img-container: hover .cart-btn {
    transform: translate(0,0);
    }
    .cart-btn:hover{
    color: var(--mainBlue);
    cursor: pointer;
    }
`;

export default Product;