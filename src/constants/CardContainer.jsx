import cardData from './data.json';
import Card from '../components/Card';

function CardContainer() {
  return (
    <div>
      {cardData.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          amount={item.amount}
          icon={item.icon}
          status={item.status}
        />
      ))}
    </div>
  );
}

export default CardContainer;
