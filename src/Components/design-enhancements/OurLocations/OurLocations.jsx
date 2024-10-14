import React from 'react';
import './OurLocations.css'; // Import custom CSS

const OurLocations = () => {
  return (
    <div className='py-10 our-locations-container'>
      <h1 className='our-locations-heading'>Our Locations</h1>
      <p className='relative z-10 our-locations-subheading'>Property Availability</p>
      <img className='our-locations-map' src='/assets/our-location-bg.png' alt='Our Location Map' />
      <img className='map-image' src='/assets/our-location-map.png' alt='Our Location Map' />
    </div>
  );
};

export default OurLocations;