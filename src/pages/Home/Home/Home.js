import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import ShowReview from '../ShowReview/ShowReview';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <ShowReview></ShowReview>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;