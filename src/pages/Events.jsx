import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EventBar from '../components/EventBar';
import EventList from '../components/EventList';

function Events() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const categoryFromURL = queryParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL || null);

  useEffect(() => {
    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL);
    }
  }, [categoryFromURL]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    navigate(`/events?category=${category}`);  // Update the URL with the selected category
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
    navigate('/events'); // Clear the category from the URL
  };

  return (
    <div>
      {!selectedCategory ? (
        <div>
          <div className="bg-gray-700 w-full mt-[50px] mb-[150px] h-[500px] flex items-center justify-center text-gray-400">
            <h1 className="text-5xl text-center font-bold text-gold-500 mb-8">A cool banner</h1>
          </div>
          <EventBar onCategorySelect={handleCategorySelect} />
        </div>
      ) : (
        <div>
          <EventList category={selectedCategory} onBackClick={handleBackClick} />
        </div>
      )}
    </div>
  );
}

export default Events;
