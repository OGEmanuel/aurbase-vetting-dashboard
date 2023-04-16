import { redirect } from "react-router-dom";

export const getAuthData = () =>{
    const rawData = sessionStorage.getItem('data');
    const data = JSON.parse(rawData);
    return data;
}

export const checkAuthLoader = () =>{
    const loggedIn = getAuthData();

    if(!loggedIn) return redirect('/');

    return null;
}