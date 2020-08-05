import data from '../assets/data';

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
          {/* add your link here */}
          <img src={meal.imageUrl} />
        </div>
      ))}
    </div>
  );
}
