import { ChuckysWisdom } from "../types/ChuckysWisdom";

const BASE_URL = 'http://127.0.0.1:8080/api'


export async function getChuckysWisdom(): Promise<ChuckysWisdom> {
    try{
        const response = await fetch(`${BASE_URL}/chuck/`);
        if (!response.ok) {
            throw new Error(`Error fetching wisdom: ${response.statusText}`);
        }
        const data: ChuckysWisdom = await response.json();
    return data; 
    } catch (error) {
        console.error('Error fetching wisdom:', error);
        throw error;
      }
}