

import axios from "axios";

const BASE_URL = "https://pixabay.com/api/"; 
const API_KEY = "45110935-91aa782eb5f23a60393d7a38c";

export const fetchImages = async (query, page = 1, perPage = 15) => {
    
    try {
        const response = await axios.get(BASE_URL, {
  
            parms: {
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