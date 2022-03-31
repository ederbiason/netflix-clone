/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */

import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";

const API_KEY = 'a703f14bf6141e745c37b3f0f09a2454';
const API_BASE = 'https://api.themoviedb.org/3';

/* 
- Netflix originals
- Treding
- Top rated
- Action
- Comedy
- Horror
- Romance 
- Documentaries
*/

// vai pegar o json de resultado e retornar ele
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Netflix originals',
                items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}`)
            },
            {
                slug: 'treding',
                title: 'Trending for you',
                items: await basicFetch(`/trending/all/week?&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Top Rated',
                items: await basicFetch(`/movie/top_rated?&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentaries',
                items: await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
            }
        ]
    },

    // get more information about the featuredmovie
    getMovieInfo: async(movieId, type) => {
        let info = {}

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?&api_key=${API_KEY}`)
                break;

                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?&api_key=${API_KEY}`)
                break;

                default:
                    info = null;
                break;
            }
        }

        return info;
    }
}