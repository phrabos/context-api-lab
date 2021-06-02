export const getCharacters = async (page) => {
  const res = await fetch(`https://swapi.dev/api/people/${page}`);
  const data = await res.json();
  console.log(page);
  console.log(data);
  
  return {
    name: data.name,
    birthYear: data.birth_year,
  };
};
