import React from 'react'
import ImageCarousel from './ImageCarousel'

const ProudPartners = () => {
    return (
        <section className="secPad proudPartners">
            <div className="container">
                <div className="sectionTitle">
                    <h2 className="font-weight700 colorBlue">Proud Partners</h2>
                </div>
                <div className="row marginTop">
                    <div className="col-lg-12">
                        <ImageCarousel />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ProudPartners