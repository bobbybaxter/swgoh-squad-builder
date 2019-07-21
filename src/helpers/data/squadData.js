import axios from 'axios';
import fbKeys from '../apiKeys.json';

const baseUrl = fbKeys.firebaseKeys.databaseURL;

const deleteSquad = squadId => axios.delete(`${baseUrl}/squads/${squadId}.json`);

const getSquadsBySquadList = squadListId => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/squads.json`)
    .then((res) => {
      const squads = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        squads.push(res.data[fbKey]);
      });
      const targetedSquads = squads.filter(x => x.squadListId === squadListId);
      resolve(targetedSquads);
    })
    .catch(err => reject(err));
});

const postSquad = newSquad => axios.post(`${baseUrl}/squads.json`, newSquad);

const putSquad = squadId => axios.put(`${baseUrl}/squads/${squadId}.json`);

export default {
  deleteSquad, getSquadsBySquadList, postSquad, putSquad,
};
