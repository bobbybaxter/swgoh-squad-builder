import axios from 'axios';
import fbKeys from '../apiKeys.json';

const baseUrl = fbKeys.firebaseKeys.databaseURL;

const getSquads = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/squads.json"`)
    .then((res) => {
      const squads = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        squads.push(res.data[fbKey]);
      });
      resolve(squads);
    })
    .catch(err => reject(err));
});

export default { getSquads };
