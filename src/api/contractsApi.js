import axios from 'axios'

const urlBase = 'https://opendata.somenergia.coop/v0.2/';
const publicContractUrl = 'publiccontracts';
const entityContractUrl = 'entitycontracts';

const contractApi = {
    getPublicContracts: () => axios.get(urlBase+publicContractUrl+'?format=json'),
    getEntityContracts: () => axios.get(urlBase+entityContractUrl+'?format=json')
}

export default contractApi;