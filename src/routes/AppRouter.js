import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DetailScreen } from '../components/DetailScreen'
import { SearchScreen } from '../components/SearchScreen'
import { ViewScreen } from '../components/ViewScreen'

export const AppRouter = () => {
    const [response, setResponse] = useState({});
    const [dataResponse, setDataResponse] = useState({});

    return (
        <div className=' '>
            <BrowserRouter>
                <Routes>
                    <Route path="/items" element={<ViewScreen response={response} setDataResponse={setDataResponse} />} />
                    <Route path="/items/:id" element={<DetailScreen dataResponse={dataResponse} />} />
                    <Route path="/" element={<SearchScreen setResponse={setResponse} />} />
                    <Route path="*" element={<SearchScreen setResponse={setResponse} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
