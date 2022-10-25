import { FETCH_POSTS,FETCH_SPECIFIC_POSTS } from "./enum";


export const GET_POSTS = () => {
    return {
        type:FETCH_POSTS
    }
}

export const GET_SPECIFIC_POSTS = () => {
    return {
        type:FETCH_SPECIFIC_POSTS
    }
}

