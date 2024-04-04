import FeedbackPage from './FeedbackPage';
const feedbackList = [
  {
    customerUsername: 'John Doe',
    rating: 5,
    comment: 'Excellent rate and fast response!',
  },
  {
    customerUsername: 'Jane Smith',
    rating: 2,
    comment: 'well i will go for another vendor',
  },
  {
    customerUsername: 'Kachi Erugo',
    rating: 4,
    comment: 'Great rates, will definitely order again.',
  },
  {
    customerUsername: 'Shedrack Erugo',
    rating: 5,
    comment: 'Great person, will come back again.',
  },
  {
    customerUsername: 'Jenifer John',
    rating: 3,
    comment: 'Hmmm the rate was fair.',
  },
  
];

const Reviews = () => {
  return (
    <div>
      <FeedbackPage feedbackList={feedbackList} />
    </div>
  )
}

export default Reviews