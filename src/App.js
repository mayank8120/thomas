import './App.css';

import Navbar from './containers/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios';

// import { Scrollbar } from "react-scrollbars-custom";
// import SimpleBar from 'simplebar-react';
// import SimpleBar from 'simplebar';

// import 'simplebar/dist/simplebar.min.css';



import Housingauthoritywaitlist from './views/HousingAuthority/Housingauthoritywaitlist.js';
import Index from './views/Index/Index.js';
import Section8housing from './views/Section8housing/Section8housing.js';
import Seniorhousing from './views/SeniorHousing/Seniorhousing.js';
import Footer from './containers/Footer';
// import AgencyDetail from './views/AgencyDetail/AgencyDetail.js'
import SavedProperties from './views/SavedProperties/SavedProperties.js'
import AgencyState from './views/AgencyState/AgencyState.js'
import AgencyDetail from './views/AgencyDetail/AgencyDetail.js';
import BasicInfoPage from './views/BasicInfoPage/BasicInfoPage.js'
import GeneralProperty from './views/GeneralProperty/GeneralProperty.js'
import IncomeLimits from './views/IncomeLimits/IncomeLimits.js'
import Listhub from './views/Listhub/Listhub.js'
import ListhubForm from './views/ListhubForm/ListhubForm.js'
import ListhubSearch from './views/ListhubSearch/ListhubSearch.js'
import ListWithUs from './views/ListWithUs/ListWithUs.js'
import PropertyDetail from './views/PropertyDetail/PropertyDetail.js'
import PropertySearch from './views/PropertySearch/PropertySearch.js'
import PublicHousing from './views/PublicHousing/PublicHousing.js'
import { CompareProperties } from './views/CompareProperties/CompareProperties';
import { Premium } from './views/Premium/Premium';
// import { Trial } from './views/Trial/Trial';
import { AboutUs } from './views/AboutUs/AboutUs';
import { Terms } from './views/TermsOfUse/Terms';
import { PrivacyPolicy } from './views/PrivacyPolicy/PrivacyPolicy';
import { EqualOppo } from './views/EqualOppo/EqualOppo';
import { IncomeBasedFAQ } from './views/IncomeBasedFAQ/IncomeBasedFAQ';
import { Disclaimer } from './views/Disclaimer/Disclaimer';
import HousingChoice from './views/HousingChoiceVoucher/HousingChoice';
import LowIncomeHousingChoice from './views/LowIncomeHousingChoice/LowIncomeHousingChoice';
import RuralDevelopment from './views/RuralDevelopment/RuralDevelopment';
import EnterpriseIncome from './views/Enterprise/EnterpriseIncome';
import GoodPlaceToLive from './views/GoodPlaceToLive/GoodPlaceToLive';
import FairMarketRents from './views/FairMarketRents/FairMarketRents';
import SiteMap from './views/SiteMap/SiteMap';
import ErrorPage from './views/ErrorPage/ErrorPage';
import Inspections from './views/Inspections/Inspections';
import Payments from './views/PaymentStandards/Payment';
import { ContactUs } from './views/ContactUS/ContactUs';

import ScrollToTop from './containers/ScrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPropListAccordingToMap } from './actions';
import PropertySearchFullMap from './views/PropertySearchFULLMAP/PropertySearchFullMap';
import Trial from './views/Trial/trial';
import DetailPageGreatRd from './views/PropertyDetail/NEWLISTHUBPAGE';









function App() {



    useEffect(() => {
        // var axios = require('axios');

        var config = {
            method: 'get',
            url: 'http://52.8.148.148:5200/check',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data), ":HELLO");
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])


    // const dispatch = useDispatch();

    // const propResult = useSelector((state) => state.search_result);

    // let minlat = '33.0';
    // let maxlat = '34.0';
    // let minlng = '-118.0';
    // let maxlng = '-117.0';

    // useEffect(() => {
    //     dispatch(getPropListAccordingToMap(minlat, maxlat, minlng, maxlng));
    // }, []);

    return (
        <>

            {/* <div>
                <h1>App34</h1>
                <h2>{JSON.stringify(propResult)}</h2>
                {console.log((JSON.stringify(propResult)).slice(0, 10), "POSTS")}
            </div> */}


            <Router>
                <Navbar />
                <ScrollToTop>
                    <Switch>
                        <Route path="/" exact component={Index} />
                        <Route path="/senior-housing" exact component={Seniorhousing} />
                        <Route path="/section-8-housing" component={Section8housing} />
                        <Route path="/income-limits" component={IncomeLimits} />




                        {/* <Route path="/agencyDetail" component={AgencyDetail} /> */}
                        <Route path="/housing-authority-waiting-lists/:agencyNameParam/:agencyCityState/:agencyHAID" component={AgencyDetail} />
                        {/* housing-authority-waiting-lists/Pomona-Housing-Authority/pomona-ca-12345 */}




                        <Route path="/public-housing" component={PublicHousing} />
                        <Route path="/basic-info-page" component={BasicInfoPage} />
                        {/* <Route path="/generalProperty" component={GeneralProperty} /> */}






                        <Route path="/housing-authority-waiting-lists/:searchText" component={AgencyState} />
                        <Route path="/housing-authority-waitlists" exact component={Housingauthoritywaitlist} />







                        <Route path="/savedProperties" component={SavedProperties} />
                        <Route path="/list-with-us" component={ListWithUs} />





                        {/* <Route path="/propertyDetail" component={PropertyDetail} /> */}


                        <Route path="/apartments-for-rent/:propertyDetailString/:propid" component={PropertyDetail} />


                        {/* <Route path="/affordable-apartments-for-rent/:propertyDetailString/:propid" component={PropertyDetail} />
                        <Route path="/senior-housing-listing/:propertyDetailString/:propid" component={PropertyDetail} />
                        <Route path="/section-8-housing-listing/:propertyDetailString/:propid" component={PropertyDetail} /> */}
                        {/* affordable-apartments-for-rent/   annandale-terrace-apartments-linda-vista-pasadena-ca-12345/   12342 */}







                        <Route path="/listhub" component={Listhub} />
                        <Route path="/listhubform" component={ListhubForm} />
                        {/* <Route path="/propertySearch" component={PropertySearch} /> */}
                        <Route path="/listhubSearch" component={ListhubSearch} />
                        <Route path="/compareProperties" component={CompareProperties} />
                        <Route path="/premium" component={Premium} />
                        {/* <Route path="/trial" component={Trial} /> */}

                        <Route path="/about" component={AboutUs} />
                        <Route path="/terms" component={Terms} />
                        <Route path="/privacy" component={PrivacyPolicy} />
                        <Route path="/equal-opportunity-housing" component={EqualOppo} />
                        <Route path="/income-based-housing-faq" component={IncomeBasedFAQ} />
                        <Route path="/disclaimer" component={Disclaimer} />
                        <Route path="/housing-choice-voucher" component={HousingChoice} />
                        <Route path="/low-income-housing-choice" component={LowIncomeHousingChoice} />
                        <Route path="/rural-development-rental-assistance" component={RuralDevelopment} />
                        <Route path="/enterprise-income-verification" component={EnterpriseIncome} />
                        <Route path="/a-good-place-to-live" component={GoodPlaceToLive} />
                        <Route path="/fair-market-rents" component={FairMarketRents} />
                        <Route path="/sitemap" component={SiteMap} />
                        <Route path="/error404" component={ErrorPage} />

                        <Route path="/inspections" component={Inspections} />
                        <Route path="/payment-standards" component={Payments} />
                        <Route path="/contact" component={ContactUs} />
                        <Route path="/advertise-with-us" component={ContactUs} />



                        <Route path="/propertySearch/:cityname/:statename/:feature?" component={PropertySearch} />
                        <Route path="/propertySearch" component={PropertySearch} />



                        <Route path="/affordable-apartments-for-rent/:searchText" component={PropertySearch} />
                        <Route path="/senior-housing-for-rent/:searchText" component={PropertySearch} />
                        <Route path="/section-8-housing-for-rent/:searchText" component={PropertySearch} />
                        {/* <Route path="/propertySearch/:cityname/:statename/:feature?" component={PropertySearchFullMap} />
                        <Route path="/propertySearch" component={PropertySearchFullMap} /> */}


                        <Route path='/trial' component={Trial} />


                        <Route path="/listHubDetailMock" component={DetailPageGreatRd} />


                    </Switch>
                </ScrollToTop>
            </Router>
        </>
    );
}

export default App;
