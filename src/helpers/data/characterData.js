import axios from 'axios';

const getAllCharacters = () => new Promise((resolve, reject) => {
  axios.get('https://cors-anywhere.herokuapp.com/https://swgoh.gg/api/characters/')
    .then((res) => {
      const rawCharacters = res.data;
      const newCharacters = rawCharacters.map((char) => {
        const newChar = char;
        delete newChar.ability_classes;
        delete newChar.activate_shard_count;
        delete newChar.alignment;
        delete newChar.categories;
        delete newChar.combat_type;
        delete newChar.description;
        delete newChar.gear_levels;
        delete newChar.pk;
        delete newChar.power;
        delete newChar.role;
        delete newChar.ship;
        delete newChar.ship_slot;
        delete newChar.url;
        return newChar;
      });
      resolve(newCharacters);
    })
    .catch(err => reject(err));
});

export default { getAllCharacters };
