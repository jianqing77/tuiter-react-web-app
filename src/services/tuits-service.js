/****************************************************************************
 *  Locally the SERVER application runs on localhost:4000
 *  the React application runs on localhost:3000
 *  integrating these two applications consists of exchanging HTTP messages.
 * **************************************************************************/
import axios from 'axios';

// const TUITS_API = 'https://tuiter-node-server-app-jq.herokuapp.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;
// async tags functions as asynchronous
console.log('TUITS_API');

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit);
    return response.data;
};

export const findTuits = async () => {
    const response = await axios.get(TUITS_API); // send HTTP GET request to TUITS_API
    const tuits = response.data; // extract JSON array from response from server
    return tuits;
};

export const updateTuit = async (tuit) => {
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
};

export const deleteTuit = async (tid) => {
    const response = await axios.delete(`${TUITS_API}/${tid}`);
    return response.data;
};
