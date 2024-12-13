import { ChuckysWisdom } from "../types/ChuckysWisdom";
import { ChuckysWisdoms } from "../types/ChuckysWisdoms";

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

export async function getAllChuckysWisdoms(): Promise<ChuckysWisdoms> {
    try{
        const response = await fetch(`${BASE_URL}/chuck/all`);
        if (!response.ok) {
            throw new Error(`Error fetching wisdoms: ${response.statusText}`);
        }
        const data: ChuckysWisdom = await response.json();
    return data; 
    } catch (error) {
        console.error('Error fetching wisdoms:', error);
        throw error;
      }
}

export async function getAllChuckysWisdomsCount(): Promise<number> {
    try{
        const response = await fetch(`${BASE_URL}/chuck/count-wisdoms`);
        if (!response.ok) {
            throw new Error(`Error fetching wisdoms count: ${response.statusText}`);
        }
        const data: number = await response.json();
    return data; 
    } catch (error) {
        console.error('Error fetching wisdoms count:', error);
        throw error;
      }
}

export async function getWisdomAskedToday(): Promise<number> {
    try{
        const response = await fetch(`${BASE_URL}/chuck/wisdom-asked-today`);
        if (!response.ok) {
            throw new Error(`Error fetching wisdoms asked today count: ${response.statusText}`);
        }
        const data: number = await response.json();
        console.log(data);
    return data; 
    } catch (error) {
        console.error('Error fetching wisdoms asked today:', error);
        throw error;
      }
}

export async function getWisdomNeededMost(): Promise<string> {
    try{
        const response = await fetch(`${BASE_URL}/chuck/wisdom-needed-most`);
        if (!response.ok) {
            throw new Error(`Error fetching wisdoms needed most: ${response.statusText}`);
        }
        const data: string = await response.text();
        console.log(data);
    return data; 
    } catch (error) {
        console.error('Error fetching wisdoms needed most:', error);
        throw error;
      }
}

