function RandomButton({ setProfile, query }) {
    async function handleRandomizer() {
      const result = await fetch(`https://freetestapi.com/api/v1/politicians?name=${query}`);
      const data = await result.json();
      const randomProfile = data[0];
      setProfile(randomProfile);
    }
  
    return (
      <div>
        <button onClick={handleRandomizer}>Suchen</button>
      </div>
    );
  }
  
  export default RandomButton;
  