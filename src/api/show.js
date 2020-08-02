import axios from 'axios';

export default axios.create({
    baseURL:"https://api.themoviedb.org/3/tv/popular?api_key=aff15f781a9e5435cf7b0660d592e998&language=pt-BR&page=1",
})