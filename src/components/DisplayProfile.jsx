/*
{
    "id": 1,
    "name": "Angela Merkel",
    "dob": "July 17, 1954",
    "country": "Germany",
    "party": "Christian Democratic Union",
    "position": "Chancellor",
    "years_in_office": "2005 - 2021",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Angela_Merkel_2019_cropped.jpg/220px-Angela_Merkel_2019_cropped.jpg",
    "biography": "Angela Dorothea Merkel is a German politician who served as the Chancellor of Germany from 2005 to 2021. She is a member of the Christian Democratic Union and is known for her leadership in the European Union and handling of various global issues."
  },


*/
function DisplayProfile({ profile }) {
    if (!profile) return <div>No profile selected</div>;
  
    return (
      <div>
        <h2>{profile.name}</h2>
        <p>{profile.country}</p>
        <p>{profile.position}</p>
        <p>{profile.biography}</p>
      </div>
    );
  }
  
  export default DisplayProfile;
  