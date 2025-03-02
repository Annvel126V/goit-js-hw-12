

import axios from "axios";

const URL = "https://pixabay.com/api/"; 
const API_KEY = "45110935-91aa782eb5f23a60393d7a38c";

export const searchImages = async (query, page = 1, perPage = 15) => {
    
    try {
        const response = await axios.get(URL, {
  
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: page,
                per_page: perPage
            },
    
   
        });

        return response.data
    } catch (error) {
        throw new Error(error.response ? error.response.data : error.message);
       
        
    }
};