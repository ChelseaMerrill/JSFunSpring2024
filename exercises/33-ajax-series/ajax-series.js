(function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/api/character
   * To get an individual character, you must use this, where you plugin 2
   * with the character's ID:
   * https://rickandmortyapi.com/api/character/2
   *
   * You must make two AJAX request to solve this problem.
   */

const fetchCharacters = () => {
  return axios.get('https://rickandmortyapi.com/api/character')
    .then(response => response.data.results)
    .catch(error => console.error('Error fetching characters:', error));
};

// AJAX request to fetch individual character by ID
const fetchCharacterById = (id) => {
  return axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .catch(error => console.error('Error fetching character by ID:', error));
};

// Populate dropdown with character options
const populateDropdown = (characters) => {
  const dropdown = document.getElementById('dropdown');
  characters.forEach(character => {
    const option = document.createElement('option');
    option.text = character.name;
    option.value = character.id;
    dropdown.appendChild(option);
  });
};

// Update image and caption when a character is selected
const updateCharacterInfo = (character) => {
  const img = document.getElementById('get-schwifty');
  const caption = document.getElementById('photo-caption');
  img.src = character.image;
  img.alt = character.name;
  caption.innerHTML = `<em>${character.name}</em>`;
};

// Event listener for dropdown change
document.getElementById('dropdown').addEventListener('change', function() {
  const characterId = this.value;
  if (characterId !== "Select a character") {
    fetchCharacterById(characterId)
      .then(character => updateCharacterInfo(character));
  }
});

fetchCharacters()
  .then(characters => populateDropdown(characters));
})();
