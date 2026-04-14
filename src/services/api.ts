import axios from "axios";

const wordleApi = axios.create({baseURL: "http://localhost/"})

export type CharInfoType = {
    char: string,
    scoring: {
        in_word: boolean,
        correct_idx: boolean
    }
}

export type ApiData = {
    guess: string,
    is_correct: boolean,
    is_word_in_list: boolean,
    character_info?: CharInfoType[]
}

export async function sendGuess(guess: string){
    try{
        const response = await wordleApi.post(guess)
        return response.data as ApiData
    } catch (error){
        console.error("Something is wrong, I can feel it.", error);
    }
}