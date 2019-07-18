import axios from 'axios';

const baseUrl = '';

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

export default { getSquadLists };
