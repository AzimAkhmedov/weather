import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../../pages/mainPage'

const AppRouter: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<MainPage />} />
                {/* <Route /> */}
                
            </Routes>
        </div>
    )
}

export default AppRouter