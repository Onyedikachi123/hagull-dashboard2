import cardData from '../constants/data.json';
import Card from './Card';

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
