import React from 'react'
import Footer from '../../containers/Footer'
import BannerListWithUs from './BannerListWithUs'
import DetailsSection from './DetailsSection'

const ListWithUs = () => {
    document.title = "List With Us - Rental Housing Deals"

    return (
        <>


            <BannerListWithUs />
            <DetailsSection />

            <Footer />
        </>
    )
}


export default ListWithUs