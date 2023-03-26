import React, { useEffect } from 'react'
import Footer from '../../containers/Footer'
import { prerenderApiCall } from '../../containers/functions'
import HousingAuthPage from './HousingAuthPage'


const Housingauthoritywaitlist = () => {



    useEffect(() => {
        prerenderApiCall();
    }, [])

    return (
        <>
            <HousingAuthPage />
            <Footer />
        </>
    )
}
export default Housingauthoritywaitlist