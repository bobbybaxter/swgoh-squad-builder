import axios from 'axios';
import fbKeys from '../apiKeys.json';

const baseUrl = fbKeys.firebaseKeys.databaseURL;

const getSquadLists = uid => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/squadLists.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const squadLists = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        squadLists.push(res.data[fbKey]);
      });
      resolve(squadLists);
    })
    .catch(err => reject(err));
});

const getSquadListById = squadListId => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/squadLists/${squadListId}.json`)
    .then((res) => {
      const squadList = res.data;
      resolve(squadList);
    })
    .catch(err => reject(err));
});

export default { getSquadLists, getSquadListById };
