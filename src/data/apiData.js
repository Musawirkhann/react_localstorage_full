import axios from 'axios';


export const addDatatoLocalStorage = async () => {
    try{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos');
       return data;
    }catch(error) {
        throw error;
    }
}