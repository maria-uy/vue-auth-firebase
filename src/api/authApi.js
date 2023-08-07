
import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyDQl7A9-EtkvchCpp2zAjJNo4WVZKTDDQA'
    }
})

export default authApi