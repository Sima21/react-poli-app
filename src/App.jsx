import React, { useState } from 'react';
import RandomButton from './components/RandomButton';
import DisplayProfile from './components/DisplayProfile';

function App() {
  const [profile, setProfile] = useState(null);
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={handleSearch} 
        placeholder="Politiker suchen..." 
      />
      <RandomButton setProfile={setProfile} query={query} />
      <DisplayProfile profile={profile} />
    </div>
  );
}

export default App;
