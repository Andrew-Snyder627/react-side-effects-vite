// Step 1: Accept `joke` and `loading` as props

const JokeDisplay = ({ joke, loading, error }) => {
  return (
    <div className="joke-container">
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <p>joke</p>}
    </div>
  );
};

export default JokeDisplay;
