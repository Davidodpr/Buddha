import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import BookingModal from '../components/BookingModal';

const Showroom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');

  const locations = [
    {
      city: 'Stockholm',
      address: 'Strandvägen 42, 114 56 Stockholm',
      hours: 'Mon-Fri: 10:00-18:00, Sat: 11:00-16:00',
      phone: '+46 8 123 45 67'
    },
    {
      city: 'Göteborg',
      address: 'Avenyn 28, 411 36 Göteborg',
      hours: 'Mon-Fri: 10:00-18:00, Sat: 11:00-16:00',
      phone: '+46 31 123 45 67'
    },
    {
      city: 'Malmö',
      address: 'Stortorget 12, 211 22 Malmö',
      hours: 'Mon-Fri: 10:00-17:00, Sat: 11:00-15:00',
      phone: '+46 40 123 45 67'
    }
  ];

  const handleBook = (city) => {
    setSelectedLocation(city);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <main className="page-content">
        <section className="page-hero showroom-hero">
          <div className="container">
            <span className="section-tag">Visit Us</span>
            <h1 className="page-title">Showroom</h1>
            <p className="page-subtitle">Experience our collection in person. Book a private consultation with our design experts.</p>
          </div>
        </section>

        <section className="showroom-section">
          <div className="container">
            <div className="showroom-grid">
              {locations.map((location, index) => (
                <div key={index} className="showroom-card">
                  <h3 className="showroom-city">{location.city}</h3>
                  <div className="showroom-details">
                    <p className="showroom-address">{location.address}</p>
                    <p className="showroom-hours">{location.hours}</p>
                    <p className="showroom-phone">{location.phone}</p>
                  </div>
                  <button 
                    className="btn-outline"
                    onClick={() => handleBook(location.city)}
                  >
                    Book Appointment
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="consultation-cta">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Private Design Consultation</h2>
              <p className="cta-text">Let our experts guide you through the perfect selection for your sanctuary.</p>
              <button 
                className="btn-primary"
                onClick={() => handleBook('General')}
              >
                Request Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedLocation={selectedLocation}
      />
    </>
  );
};

export default Showroom;
