import data from '../assets/data';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      {data.map((meal) => (
        <div key={meal.id}>
 <Link href='/meals/[meal]' as={`/meals/${meal.name}`}>
            <img src={meal.imageUrl} />
    </Link>
        </div>
      ))}
    </div>
  );
}
