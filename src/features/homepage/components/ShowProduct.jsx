import React from 'react';
import Header from '../../homepage/components/Header';
import ProductsList from '../../homepage/components/ProductList';
import InfoSection from '../../homepage/components/InfoSection';

const ShowProduct = () => {
  return (
    <section id="showProduct">
      <div className="bg-[#B93052] text-white pt-14 pb-12 px-8 md:px-24 lg:px-48">
        <Header />
        <ProductsList />
      </div>
      <InfoSection />
    </section>
  );
};

export default ShowProduct;
