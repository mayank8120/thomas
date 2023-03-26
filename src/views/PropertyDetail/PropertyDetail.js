import React, { useState, useEffect } from 'react'


import Modal from "react-modal";
import CheckAvailibilityForm from '../../containers/CheckAvailibilityForm';
import Emailsubs2 from '../../containers/Emailsubs2';
import PopularCities from '../../containers/PopularCities'
import AffordabilityCal from '../AgencyDetail/AffordabilityCal';
import { CityCountyQuickFacts } from '../AgencyDetail/CityCountyQuickFacts';
import { IncomeLimitsAccordion } from '../GeneralProperty/IncomeLimitsAccordion';
import { ManagementCompanyAccordion } from '../GeneralProperty/ManagementCompanyAccordion';
// import ImageCarousel from '../../containers/ImageCarousel';
import PropertiesNearby from '../Index/PropertiesNearby';
import ImageSliderCarousel from './ImageSliderCarousel';

import Starratingstatic from '../../containers/Starratingstatic';
// import CheckAvailForm from './CheckAvailForm';

import axios from 'axios'
import PropertyDetailPage from './PropertyDetailPage';
import Loader from '../../containers/Loader';
import Footer from '../../containers/Footer';
import { useParams } from 'react-router-dom';
import { prerenderApiCall } from '../../containers/functions';


const PropertyDetail = ({ location }) => {


    const [propid, setpropid] = useState();
    const [propertyDetailData, setpropertyDetailData] = useState([]);
    // const params = new URLSearchParams(location.search);
    // // get the q param
    // // const city = params.get('city');
    // // const states = params.get('state');
    // const idp = params.get('proid');
    // // set language in state to the q parameter
    // // setLanguage(state ? state : '');
    // // setcity(city ? city : '');
    // // setstatename(states ? states : '');
    // setpropid(idp)





    let parameters = useParams();

    useEffect(() => {
        const propertyDetailString = parameters.propertyDetailString;
        const propid = parameters.propid;
        setpropid(propid);
    }, [parameters]);





    useEffect(() => {
        prerenderApiCall();
    }, [])




    // let params = new URLSearchParams(window.location.search);

    // useEffect(() => {
    //     const idp = params.get('proid');
    //     setpropid(idp);
    // }, [params]);






    //  https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/property-details?property_id=5
    // const url = 'https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/property-details?property_id=5'
    // const url = 'https://ksglobaltech.com/api21/api/v1/property-details?property_id=5'
    // https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/property-details?property_id=3

    // const propertyDetailUrl = 'https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/property-details?property_id=10'


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios.post(propertyDetailUrl)
    //             .then(res => {
    //                 // let data = res.data;
    //                 // var datah = data.data;
    //                 console.log(res.data[0]);
    //                 setpropertyDetailData(res.data[0])
    //                 // console.log(res.data[0].data);
    //             }).catch(error => {
    //                 console.log('error', error);
    //             });
    //     };
    //     fetchData();
    // }, []);

    let propertyDetailUrl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/property-details?property_id=${propid}`
    const dummyu = 'https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/property-details?property_id=4'



    const abc = 'https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/property-details?property_id=5'


    useEffect(() => {
        const fetchData = async () => {
            if (propid == undefined || propid == '' || propid == null) {
            }
            else {
                const result = await axios.post(propertyDetailUrl)
                    .then(res => {
                        setpropertyDetailData(res.data);
                    }).catch(error => {
                        console.log('error', error);
                    });
            }
        };
        fetchData();
    }, [propertyDetailUrl]);





    // const dbdata = propertyDetailData;

    // console.log((propertyDetailData.property.id_property));




    const [isOpenAvailability, setIsOpenAvailability] = useState(false);
    function toggleModalAvailability() {
        setIsOpenAvailability(!isOpenAvailability);
    }

    const [isOpenQualify, setIsOpenQualify] = useState(false);
    function toggleModalQualify() {
        setIsOpenQualify(!isOpenQualify);
    }

    const [isOpenImage, setIsOpenImage] = useState(false);
    function toggleModalImage() {
        setIsOpenImage(!isOpenImage);
    }

    const [formData, setformData] = useState({ name: '', address: '', city: '', state: '', zip: '', emailid: '', phone: '', date: '', occupants: '', monthlyIncome: '', voucher: '', disclaimer: '' })
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(createPost(postData));
        // console.log(formData);
        // toggleModal();
        setformData({ name: '', address: '', city: '', state: '', zip: '', emailid: '', phone: '', date: '', occupants: '', monthlyIncome: '', voucher: '', disclaimer: '' })
    }

    let onValChange = (e) => {
        setformData({ ...formData, voucher: e.target.value })
    }

    return (
        <>
            {
                propertyDetailData == "" || propertyDetailData == undefined || propertyDetailData == null || propertyDetailData.length == 0
                    ?
                    <h1 style={{ "text-align": "center" }}>
                        <Loader />
                    </h1>
                    :
                    <>
                        <PropertyDetailPage post={propertyDetailData} />
                    </>
            }
            <Footer />
        </>

    )
}
export default PropertyDetail