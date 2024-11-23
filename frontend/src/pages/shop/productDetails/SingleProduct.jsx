import React from 'react';
import { Link, useParams } from 'react-router-dom';
import RatingStars from '../../../components/RatingStars';
import { useDispatch } from 'react-redux';
import { useFetchProductByIdQuery } from '../../../redux/features/products/productsApi';
import { addToCart } from '../../../redux/features/cart/cartSlice';
import ReviewsCard from '../reviews/ReviewsCard';

import trend1 from '../../../assets/trend1.avif';
import trend2 from '../../../assets/trend2.png';
import trend3 from '../../../assets/trend3.avif';
import trend4 from '../../../assets/trend4.avif';
import trend5 from '../../../assets/trend5.avif';
import trend6 from '../../../assets/trend6.avif';
import trend7 from '../../../assets/trend7.avif';
import trend8 from '../../../assets/trend8.png';
import trend9 from '../../../assets/trend9.avif';
import trend10 from '../../../assets/trend10.png';
import placeholder from '../../../assets/header.jpeg';

// Function to map image paths
const getImageSrc = (imagePath) => {
    switch (imagePath) {
        case '/assets/trend1.avif':
            return trend1;
        case '/assets/trend2.png':
            return trend2;
        case '/assets/trend3.avif':
            return trend3;
        case '/assets/trend4.avif':
            return trend4;
        case '/assets/trend5.avif':
            return trend5;
        case '/assets/trend6.avif':
            return trend6;
        case '/assets/trend7.avif':
            return trend7;
        case '/assets/trend8.png':
            return trend8;
        case '/assets/trend9.avif':
            return trend9;
        case '/assets/trend10.png':
            return trend10;
        default:
            return placeholder; // Default placeholder image
    }
};

const SingleProduct = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const { data, error, isLoading } = useFetchProductByIdQuery(id);

    const singleProduct = data?.product || {};
    const productReviews = data?.reviews || [];

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading product details.</p>;

    const productImage = getImageSrc(singleProduct.image);

    return (
        <>
            <section className="section__container bg-primary-light">
                <h2 className="section__header capitalize">Single Product Page</h2>
                <div className="section__subheader space-x-2">
                    <span className="hover:text-primary">
                        <Link to="/">home</Link>
                    </span>
                    <i className="ri-arrow-right-s-line"></i>
                    <span className="hover:text-primary">
                        <Link to="/shop">shop</Link>
                    </span>
                    <i className="ri-arrow-right-s-line"></i>
                    <span className="hover:text-primary">{singleProduct.name}</span>
                </div>
            </section>

            <section className="section__container mt-8">
                <div className="flex flex-col items-center md:flex-row gap-8">
                    {/* Product image */}
                    <div className="md:w-1/2 w-full">
                        <img
                            src={productImage}
                            alt={singleProduct?.name || 'Product Image'}
                            className="rounded-md w-full h-auto"
                        />
                    </div>

                    <div className="md:w-1/2 w-full">
                        <h3 className="text-2xl font-semibold mb-4">{singleProduct?.name}</h3>
                        <p className="text-xl text-primary mb-4 space-x-1">
                            ${singleProduct?.price}
                            {singleProduct?.oldPrice && (
                                <s className="ml-1">${singleProduct?.oldPrice}</s>
                            )}
                        </p>
                        <p className="text-gray-400 mb-4">{singleProduct?.description}</p>

                        {/* Additional product info */}
                        <div className="flex flex-col space-y-2">
                            <p>
                                <strong>Category:</strong> {singleProduct?.category}
                            </p>
                            <p>
                                <strong>Color:</strong> {singleProduct?.color}
                            </p>
                            <div className="flex gap-1 items-center">
                                <strong>Rating: </strong>
                                <RatingStars rating={singleProduct?.rating} />
                            </div>
                        </div>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleAddToCart(singleProduct);
                            }}
                            className="mt-6 px-6 py-3 bg-primary text-white rounded-md"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </section>

            {/* Display Reviews */}
            <section className="section__container mt-8">
                <ReviewsCard productReviews={productReviews} />
            </section>
        </>
    );
};

export default SingleProduct;
