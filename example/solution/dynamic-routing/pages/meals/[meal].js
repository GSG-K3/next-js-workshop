import { useRouter } from 'next/router';
import data from '../../assets/data';

const Meal = () => {
  const router = useRouter();
  // check if the meal from Query exists in data file
  const result = data.filter((meal) => router.query.meal === meal.name);
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      {result.length ? (
        <div>
          <img src={result[0].gif} />
          <h2>"{result[0].quote}"</h2>
        </div>
      ) : (
        <div>
          <h2>{router.query.meal}</h2>
          <img src='https://media1.tenor.com/images/923340f1c1385970b953ad2a88be83fb/tenor.gif?itemid=9361819' />
        </div>
      )}

      <button onClick={() => router.push('/')}>
        Back To Home
      </button>
    </div>
  );
};

export default Meal;