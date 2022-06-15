import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (search) => { 

    const [data, setData] = useState({ 
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        //apiKey de pruebas
        // b8fcc2749f2c4e55805a615bddc9e64c
        // 34ddc7746fef4243ad20f6213bb2f2ae
        // e6297cd5e1ef449989228de09e5c98de
        // c723c822ba9f4054afd2f984fb451bac
        axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=q=${encodeURI(search)}&number=4&apiKey=c723c822ba9f4054afd2f984fb451bac`)
            .then(response => {
                setData({
                    data: response,
                    loading: false,
                    error: null
                });
            })
            .catch(error => {
                setData({
                    data: null,
                    loading: false,
                    error: error
                });
            });
    }, [search])
    return data;
}