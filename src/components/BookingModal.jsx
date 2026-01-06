import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = ({ isOpen, onClose, selectedLocation, initialMessage = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: selectedLocation || 'Stockholm',
    message: initialMessage
  });
  
  // Update message when initialMessage changes
  React.useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', location: selectedLocation || 'Stockholm', message: '' });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-12">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif mb-2">Request Received</h3>
                  <p className="text-text-dim">Our concierge will contact you within 24 hours to confirm your private viewing.</p>
                </div>
              ) : (
                <>
                  <span className="section-tag mb-4">Concierge</span>
                  <h2 className="text-3xl font-serif mb-8">Book a Private Consultation</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-text-dim mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full border-b border-black/10 py-3 focus:border-black outline-none transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-text-dim mb-2">Email</label>
                        <input 
                          type="email" 
                          required
                          className="w-full border-b border-black/10 py-3 focus:border-black outline-none transition-colors"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-text-dim mb-2">Phone</label>
                        <input 
                          type="tel" 
                          className="w-full border-b border-black/10 py-3 focus:border-black outline-none transition-colors"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-text-dim mb-2">Location Preference</label>
                      <select 
                        className="w-full border-b border-black/10 py-3 focus:border-black outline-none transition-colors bg-transparent"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                      >
                        <option value="Stockholm">Stockholm Flagship</option>
                        <option value="Göteborg">Göteborg Gallery</option>
                        <option value="Malmö">Malmö Boutique</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-text-dim mb-2">Message (Optional)</label>
                      <textarea 
                        rows="3"
                        className="w-full border-b border-black/10 py-3 focus:border-black outline-none transition-colors resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-primary w-full mt-4">
                      Request Appointment
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
