import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import EventList from '../components/EventList';



function Events() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const categoryFromURL = queryParams.get('category');


  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL || null);

  useEffect(() => {
    if (categoryFromURL && categoryFromURL !== selectedCategory) {
      setSelectedCategory(categoryFromURL);
    }
  }, [categoryFromURL, selectedCategory]);

  const handleCategorySelect = (category) => {
    navigate(`/events?category=${category}`);
    setSelectedCategory(category);
  };


  const handleBackClick = () => {
    setSelectedCategory(null);
    navigate('/events');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Category Selection */}
      {!selectedCategory ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          {/* Tech Button */}
          <motion.button
            onClick={() => handleCategorySelect('tech')}
            className="bg-black bg-opacity-50 shadow rounded-lg border border-yellow-500 cursor-pointer overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-40 flex items-center justify-center">
              <span className="text-yellow-500">Tech Events</span>
            </div>
            <div className="p-4 sm:p-6">
              <p className="text-gray-300 text-sm sm:text-base text-center">Click to view Tech events.</p>
            </div>
          </motion.button>

          {/* Non-Tech Button */}
          <motion.button
            onClick={() => handleCategorySelect('non-tech')}
            className="bg-black bg-opacity-50 shadow rounded-lg border border-yellow-500 cursor-pointer overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-40 flex items-center justify-center">
              <span className="text-yellow-500">Non-Tech Events</span>
            </div>
            <div className="p-4 sm:p-6">
              <p className="text-gray-300 text-sm sm:text-base text-center">Click to view Non-Tech events.</p>
            </div>
          </motion.button>
        </motion.div>
      ) : (
        // Show the EventList for the selected category
        <EventList category={selectedCategory} onBackClick={handleBackClick} />
      )}
    </div>
  );
}

export default Events;
