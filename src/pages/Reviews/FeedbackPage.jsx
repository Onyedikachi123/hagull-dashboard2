import { useState } from 'react';
import PropTypes from 'prop-types';
import { Star } from 'lucide-react';

const FeedbackPage = ({ feedbackList }) => {
  const [search, setSearch] = useState('');
  const [filteredFeedback, setFilteredFeedback] = useState(feedbackList);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
    const filtered = feedbackList.filter((feedback) =>
      feedback.customerUsername.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredFeedback(filtered);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Customer Feedback</h1>
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search by customer name..."
        />
      </div>
      <div className="space-y-4">
        {filteredFeedback.map((feedback, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">{feedback.customerUsername}</h2>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < feedback.rating ? 'fill-current text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
            </div>
            <p className="text-gray-600">{feedback.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

FeedbackPage.propTypes = {
  feedbackList: PropTypes.arrayOf(
    PropTypes.shape({
      customerUsername: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeedbackPage;
