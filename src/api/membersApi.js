import axios from 'axios'

const urlBase = 'https://opendata.somenergia.coop/v0.2/';
const publicMembersUrl = 'publicmembers';
const entityMembersUrl = 'entitymembers';

const memberApi = {
    getPublicMembers: () => axios.get(urlBase+publicMembersUrl+'?format=json'),
    getEntityMembers: () => axios.get(urlBase+entityMembersUrl+'?format=json')
}

export default memberApi;