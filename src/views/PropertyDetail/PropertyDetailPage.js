import React, { useState, useEffect } from 'react'
import Modal from "react-modal";
import CheckAvailibilityForm from '../../containers/CheckAvailibilityForm';
import Emailsubs2 from '../../containers/Emailsubs2';
import PopularCities from '../../containers/PopularCities';
import AffordabilityCal from '../AgencyDetail/AffordabilityCal';
import { CityCountyQuickFacts } from '../AgencyDetail/CityCountyQuickFacts';
import { IncomeLimitsAccordion } from '../GeneralProperty/IncomeLimitsAccordion';
import { ManagementCompanyAccordion } from '../GeneralProperty/ManagementCompanyAccordion';
import PropertiesNearby from '../Index/PropertiesNearby';
import ImageSliderCarousel from './ImageSliderCarousel';
import Starratingstatic from '../../containers/Starratingstatic';
import SinglePointMap from '../../containers/SinglePointMap.js';
import SchoolItem from './SchoolItem';
import Amenities from './Amenities';
// import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { buildStyles } from "react-circular-progressbar";
// import { Carousel, CarouselItem } from 'react-bootstrap';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FloorPlan from './FloorPlan';
import CircularBar from './CircularBar';
import HousingAuthorityforGeneral from './HousingAuthorityforGeneral';
import FloorPlanForGeneral from './FloorPlanForGeneral';
import userEvent from '@testing-library/user-event';
import AffordableHousingAccordian from './AffordableHousingAccordian';
import ReCAPTCHA from 'react-google-recaptcha';

import axios from 'axios';

import { capitaliseFirstLetterOfWord, commaInNumber, decimalRoundOff, isItNull, removelastcomma, replaceSpace, toggleHeart } from '../../containers/functions';
import { addOrRemoveProp } from '../../containers/functions';
import { getAllProp } from '../../containers/functions';
import FloorPlanItemMobile from './FloorPlanItemMobile';
import { Link } from 'react-router-dom';
import { statelist } from '../../assets/JSONs/jsons';
import { numberofoccupants } from '../../constants/arraysLists';
import GoogleADS from '../../containers/GoogleADS';
import { Helmet } from 'react-helmet';
import { captchaSecretKey, captchaSiteKey, GOOGLEADSCLIENTID } from '../../constants/constants';


const PropertyDetailPage = ({ post }) => {

	// console.log(post);



	const propdata = post.property;
	const propdetails = post.details;
	const propimages = post.slider_images;
	const propfloor = post.floor_plan;
	const proputility = post.utility_allowance;
	const propcontact = post.contact;
	const proprating = post.rating;
	const proprent = post.Fair_Market_Rents;
	const propincome = post.Quick_facts;
	const propmancom = post.msgcompanylist;


	// console.log(propmancom, "YUYU");

	const schoolnearby = post.nearByschool;
	// const propertynearby = post.nearbyProperty;
	const propamenities = post.amenities;
	const propwalkscore = post.walk_score;
	const prophousingAuthority = post.Housing_Authorities;
	const proplocalinfo = post.Local_Information_of_state;
	const propcheckabove = post.rent;
	const propaffordable = post.Affordable_Housing;





	const [city, setcity] = useState("");
	const [statenames, setstatenames] = useState("");
	const [latlngdata, setlatlngdata] = useState();





	const [colorCHangeheart, setcolorCHangeheart] = useState();

	function colorChange(item) {

		if (toggleHeart(item) == true) {
			setcolorCHangeheart(true);
		} else {
			setcolorCHangeheart(false);
		}

	}









	let latlngurl = 'https://pro.ip-api.com/json?key=JQ2bhI11BHF1bzV';
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.post(latlngurl)
				.then(res => {
					// if (res.data.hasOwnProperty('lat') && res.data.hasOwnProperty('lon')) {
					//     setlatlngdata(res.data);
					// } else {
					//     setlatlngdata(staticlatlng);
					// }
					setlatlngdata(res.data);
					setcity(res.data.city);
					setstatenames(res.data.region);
				}).catch(error => {
					console.log('error', error);
				});
		};
		fetchData();
	}, [latlngurl]);








	let nearbypropurl;

	const [nearbypropdata, setnearbypropdata] = useState([]);

	if (latlngdata == undefined || latlngdata == [] || latlngdata == null) {
		nearbypropurl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/nearByproperty?state=&city=`;
	}
	else {
		nearbypropurl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/nearByproperty?state=${latlngdata.region}&city=${latlngdata.city}`;
	}


	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.post(nearbypropurl)
				.then(res => {
					setnearbypropdata(res.data.data);
				}).catch(error => {
					console.log('error', error);
				});
		};
		fetchData();
	}, [nearbypropurl]);











	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	const d = new Date();
	const [captchaValue, setcaptchaValue] = useState();

	const [isOpenThankYou, setIsOpenThankYou] = useState(false);
	let toggleModalThankYou = () => {
		setIsOpenThankYou(!isOpenThankYou);
	}

	let captchaHandle = (value) => {
		// console.log('Captcha value:', value);
		setcaptchaValue(true);
	}

	let captchacheck = () => {
		if (captchaValue == undefined || captchaValue !== true) { setcaptchaValue(false) }
	}



	let statelisturl = `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/selectallState`




	// useEffect(() => {
	//     const fetchData = async () => {
	//         const result = await axios.get(statelisturl)
	//             .then(res => {
	//                 // //console.log(res);
	//                 setstatelist(res.data.data);
	//             }).catch(error => {
	//                 console.log('error', error);
	//             });

	//     };
	//     fetchData();
	// }, [statelisturl]);


	// console.log(statelist);
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	const [isOpenAvailability, setIsOpenAvailability] = useState(false);
	let toggleModalAvailability = () => {
		setIsOpenAvailability(!isOpenAvailability);
	}




	// newModalFormDataQualifyNow, setnewModalFormDataQualifyNow

	const [isOpenQualify, setIsOpenQualify] = useState(false);
	function toggleModalQualify() {
		setIsOpenQualify(!isOpenQualify);
	}

	const [isOpenImage, setIsOpenImage] = useState(false);
	function toggleModalImage() {
		setIsOpenImage(!isOpenImage);
	}

	// const [isopenschool, setisopenschool] = useState(false);
	// function toggleisopenschool() {
	//     setisopenschool(!isopenschool);
	// }

	const [formData, setformData] = useState({ name: '', address: '', city: '', state: '', zip: '', emailid: '', phone: '', date: '', occupants: '', monthlyIncome: '', voucher: '', disclaimer: '' })


	const [radiobutton, setradiobutton] = useState();
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(formData);
		startCaptchaProcessModal();
		// submitAllData();
		// setformData({ name: '', lastname: '', address: '', city: '', state: '', zip: '', emailid: '', phone: '', date: '', occupants: '', monthlyIncome: '', voucher: '', disclaimer: "This is NOT an application for rental assistance. It is only being forwarded for review by the selected Housing Agency, Management Company or Property Owner who determine eligibility and approval. Receipt of your information does not guarantee acceptance in any rental assistance program, nor will it place you on any waiting list. Further information will be required to determine your eligibility for any Rental Assistance program and approval for a selected unit and you are responsibile for continuing the qualification process.By clicking on the Submit button below, you agree that you have read, understand, and accept these terms and conditions." })
	}

	const startCaptchaProcessModal = () => {
		// if (!isItNull(formData.move_date)) {
		// console.log("token startcaptchaprocess");
		const script = document.createElement("script");
		script.src = `https://www.google.com/recaptcha/api.js?render=${captchaSiteKey}`;
		script.addEventListener('load', loadCaptchaModal);
		document.body.appendChild(script);
		// }
	}


	const loadCaptchaModal = () => {
		// console.log("token Enter loadcaptcha");
		window.grecaptcha.ready(_ => {
			window.grecaptcha
				.execute(captchaSiteKey, { action: 'sdrefs' })
				.then(token => {
					// console.log(token, "token");

					if (!isItNull(token)) {
						var axios = require('axios');
						var data = '';

						var config = {
							method: 'post',
							url: `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/verifyCaptcha?secret=${captchaSecretKey}&response1=${token}`,
							headers: {},
							data: data
						};

						axios(config)
							.then(function (response) {
								if (response.data.success === true) {
									// console.log("Captcha Success");
									setcaptchaValue(true);

									submitAllData();
									setformData({ name: '', lastname: '', address: '', city: '', state: '', zip: '', emailid: '', phone: '', date: '', occupants: '', monthlyIncome: '', voucher: '', disclaimer: "This is NOT an application for rental assistance. It is only being forwarded for review by the selected Housing Agency, Management Company or Property Owner who determine eligibility and approval. Receipt of your information does not guarantee acceptance in any rental assistance program, nor will it place you on any waiting list. Further information will be required to determine your eligibility for any Rental Assistance program and approval for a selected unit and you are responsibile for continuing the qualification process.By clicking on the Submit button below, you agree that you have read, understand, and accept these terms and conditions." })

								} else {
									console.log("Captcha failed");
									setcaptchaValue(false);
								}
								// console.log(response.data.success, "token11");
							})
							.catch(function (error) {
								console.log("Captcha error");
								console.log(error);
							});
					}
				})
		});
	}


	function submitAllData() {



		let formatDate = (date) => {

			let newdate = new Date(date);
			let day = newdate.getDate();
			let month = newdate.getMonth() + 1;
			let year = newdate.getFullYear();

			return `${day}/${month}/${year}`

			// return date.replace(/-/g, '/');
		}


		let data =
			JSON.stringify(
				{
					"id_property": propdetails.id_property,
					"first_name": formData.name,
					"last_name": formData.lastname,
					"address": formData.address,
					"city": formData.city,
					"state": formData.state,
					"zip": formData.zip,
					"email_address": formData.emailid,
					"phone": formData.phone,
					"move_date": formatDate(formData.date),
					"occupants": formData.occupants,
					"yearly_income": formData.monthlyIncome,
					"voucher": formData.voucher,
					"ip_address": "210.232.32.12",
					"user_id": "9830"
				}
			);

		// console.log(data);

		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/text");


		var requestOptions = {
			method: 'POST',
			body: data,
			redirect: 'follow',
		};

		fetch("https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/applynowrenter", requestOptions)
			.then(response => response.json())
			.then(result => {
				// console.log(result);
				if (result.error == false) {
					toggleModalQualify();
					toggleModalThankYou();
				}

			})
			.catch(error => console.log('error', error));

	}



	let onradioChange = (e) => {
		setformData({ ...formData, voucher: e.target.value });
	};





	var stringg;
	var replaced;
	if (post == undefined || post == [] || post == '' || post == null) {

	} else {
		document.title = `${post.property.property_title} - Rental Housing Deals`
		stringg = propdata.description;
		replaced = stringg.replace("\r\n", "<br />").replace('\r\n\r\n', '<br /><br />');
	}




	const [specialtitle, setspecialtitle] = useState();
	const [specialtext, setspecialtext] = useState();
	const [thirdval, setthirdval] = useState();
	const [thirdvalint, setthirdvalint] = useState();
	const [bedbathinfo, setbedbathinfo] = useState();
	const [beds, setbeds] = useState();


	const [beddesc, setbeddesc] = useState();
	const [progdesc, setprogdesc] = useState();
	const [minbedr, setminbedr] = useState();
	const [maxbedr, setmaxbedr] = useState();
	const [bathinfogeneral, setbathinfogeneral] = useState();




	useEffect(() => {
		if (propdata.property_type == 'general') {

			if (propdetails.min_bed == propdetails.max_bed) {
				setbeddesc(`${propdetails.min_bed} Bd`);
			}
			if (propdetails.min_bed !== 0 && propdetails.min_bed !== '' && propdetails.max_bed == '' || propdetails.max_bed == '0') {
				setbeddesc(`${propdetails.min_bed} Bd`)
			}
			if (propdetails.min_bed !== propdetails.max_bed && propdetails.min_bed !== '0' && propdetails.max_bed !== '0' && propdetails.min_bed !== '' && propdetails.max_bed !== '') {
				setbeddesc(`${propdetails.min_bed} Bd-${propdetails.max_bed} Bd`);
			}
			if ((propdetails.min_bed == 0 || propdetails.min_bed == '') && (propdetails.max_bed !== '0' && propdetails.max_bed !== '')) {
				setbeddesc(`${propdetails.max_bed} Bd`);
			}
			if (propdetails.min_bed == '0' && propdetails.max_bed == '0') {
				setbeddesc(`1 Bd`);
			}
			if (propdetails.min_bed == '' && propdetails.max_bed == '') {
				setbeddesc(`1 Bd`);
			}

			if (propdata.prog_type == 'affordablehousing') {
				setprogdesc(' affordable housing apartments ');
			} else {
				setprogdesc(' apartments ');
			}


			if (propdetails.max_bath == null || propdetails.max_bath == "" || propdetails.max_bath == undefined) {
				// console.log("hello");
				// setbathinfogeneral(`${decimalRoundOff(propdetails.max_bath)} Bath`);
			}
			else {
				// console.log("hello");
				setbathinfogeneral(`${decimalRoundOff(propdetails.max_bath)} Ba`);
			}
			if (propdetails.min_bath == null || propdetails.min_bath == "" || propdetails.min_bath == undefined) {
			} else {
				// console.log("mayank");
				setbathinfogeneral(`${decimalRoundOff(propdetails.min_bath)} Ba`);
			}

		}
		colorChange(propdata.id_property);
	});



	const [bedfornongeneral, setbedfornongeneral] = useState("");
	const [bathfornongeneral, setbathfornongeneral] = useState("");
	useEffect(() => {

		if (propdetails.min_bed == 0 || propdetails.min_bed == '' && propdetails.max_bed == '' || propdetails.max_bed == '0') {
			setbedfornongeneral(" ");
		}
		else if (propdetails.min_bed == propdetails.max_bed) {
			setbedfornongeneral(`${propdetails.min_bed} Bd `);
		}
		if (propdetails.min_bed !== propdetails.max_bed && propdetails.min_bed !== '0' && propdetails.max_bed !== '0' && propdetails.min_bed !== '' && propdetails.max_bed !== '') {
			setbedfornongeneral(`${propdetails.min_bed}-${propdetails.max_bed} Bd `);
		}
		if ((propdetails.min_bed == 0 || propdetails.min_bed == '') && (propdetails.max_bed !== '0' && propdetails.max_bed !== '')) {
			setbedfornongeneral(`${propdetails.max_bed} Bd `);
		}



		if (propdetails.min_bath == 0 || propdetails.min_bath == '' && propdetails.max_bath == '' || propdetails.max_bath == '0') {
			setbathfornongeneral("");
		}
		else if (propdetails.min_bath == propdetails.max_bath) {
			setbathfornongeneral(`${decimalRoundOff(propdetails.min_bath)} Ba `);
		}
		if (propdetails.min_bath !== propdetails.max_bath && propdetails.min_bath !== '0' && propdetails.max_bath !== '0' && propdetails.min_bath !== '' && propdetails.max_bath !== '') {
			setbathfornongeneral(`${decimalRoundOff(propdetails.min_bath)}-${decimalRoundOff(propdetails.max_bath)} Ba `);
		}
		if ((propdetails.min_bath == 0 || propdetails.min_bath == '') && (propdetails.max_bath !== '0' && propdetails.max_bath !== '')) {
			setbathfornongeneral(`${decimalRoundOff(propdetails.max_bath)} Ba `);
		}




	});

	const [tagline, settagline] = useState("");



	useEffect(() => {


		if (propdata.property_type == 'general') {

			// console.log("GENERAL PROPERTY");
			// console.log(propdetails.seniorprop, propdetails.seniorpropval);

			settagline(
				"Low Income " +

				(propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '55') ? "Senior 55+ " : "")
				+
				(propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '') ? "Senior " : "")
				+
				(propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '62') ? "Senior 62+ " : "")
				+
				"Apartment for Rent at "

				+ propdata.property_address + ", "
				+ capitaliseFirstLetterOfWord(propdata.property_city) + ", "
				+ propdata.property_state + ", "
				+ propdata.property_zip + ""
				// + beddesc + " " 
				// + "Affordable Housing in " + capitaliseFirstLetterOfWord(propdata.property_city) + ", "
				// +
				// (propdetails.length !== 0 && ((propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '55') || propdetails.seniorpropval == '') ? "Senior 55+, " : "")
				// +
				// (propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '62') ? "Senior 62+, " : "")
				// +
				// (propdetails.length !== 0 && propdetails.pet_allowed == 'Yes' ? "Pets OK, " : "")
			)


		}

		else {

			// console.log("PREMIUM");

			if (propdetails.section8 == 'Yes') {

				// console.log("SECTION 8");
				settagline(

					(propfloor == null || propfloor.length == 0) ? "" : (propfloor[0].rent_from == 0 ? "Please Call for Rent" : `$${commaInNumber(propfloor[0].rent_from)}`)
						+ " "

						+
						"Low Income "
						+
						(propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '55') ? "Senior 55+ " : "")
						+
						(propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '') ? "Senior " : "")
						+
						(propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '62') ? "Senior 62+ " : "")
						+ "Apartments for Rent at "
						+
						propdata.property_address + ", " + capitaliseFirstLetterOfWord(propdata.property_city) + ", " + propdata.property_state + ", " + propdata.property_zip


					// bedfornongeneral + " " + bathfornongeneral + " " + " in " + ", "
					// +
					// (propdetails.length !== 0 && ((propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '55') || propdetails.seniorpropval == '') ? "Senior 55+, " : "")
					// +
					// (propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '62') ? "Senior 62+, " : "")
					// +
					// (propdetails.length !== 0 && propdetails.section8 == 'Yes' ? "Section 8, " : "")
					// +
					// (propdetails.length !== 0 && propdetails.pet_allowed == 'Yes' ? "Pets OK, " : "")
				)
			}
			else {

				// console.log("NO SECTION 8");

				settagline(
					(propfloor == null || propfloor.length == 0) ?
						"" :
						(propfloor[0].rent_from == 0 ? "Please Call for Rent - " : `$${commaInNumber(propfloor[0].rent_from)}`)

						// "$" + commaInNumber(propfloor[0].rent_from)

						// capitaliseFirstLetterOfWord(thirdval) 
						+
						" "
						+
						(propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '55') ? "Senior 55+ " : "")
						+
						(propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '') ? "Senior " : "")
						+
						(propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '62') ? "Senior 62+ " : "")
						+

						(propfloor[0].rent_from == 0 ? "" : "Apartments for Rent at ")




						+ propdata.property_address + ", " + propdata.property_city + ", " + propdata.property_state + ", " + propdata.property_zip + " "

					// bedfornongeneral + " " + bathfornongeneral + " " + " in " + capitaliseFirstLetterOfWord(propdata.property_city) + ", "
					// +

					// (propdetails.length !== 0 && propdetails.section8 == 'Yes' ? "Section 8, " : "")
					// +
					// (propdetails.length !== 0 && propdetails.pet_allowed == 'Yes' ? "Pets OK, " : "")
				)



			}


		}






		// console.log(propdata.property_type);
		// if (propdetails.section8 == 'Yes') {
		//     settagline(


		//         capitaliseFirstLetterOfWord(thirdval) + " "
		//         +
		//         (propdetails.length !== 0 && ((propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '55') || propdetails.seniorpropval == '') ? "Senior 55+, " : "")
		//         +
		//         (propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '62') ? "Senior 62+, " : "")
		//         +
		//         "Low Income Apartments for Rent at "
		//         +
		//         propdata.property_address + ", " + capitaliseFirstLetterOfWord(propdata.property_city) + ", " + propdata.property_state + ", " + propdata.property_zip


		//         // bedfornongeneral + " " + bathfornongeneral + " " + " in " + ", "
		//         // +
		//         // (propdetails.length !== 0 && ((propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '55') || propdetails.seniorpropval == '') ? "Senior 55+, " : "")
		//         // +
		//         // (propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '62') ? "Senior 62+, " : "")
		//         // +
		//         // (propdetails.length !== 0 && propdetails.section8 == 'Yes' ? "Section 8, " : "")
		//         // +
		//         // (propdetails.length !== 0 && propdetails.pet_allowed == 'Yes' ? "Pets OK, " : "")
		//     )
		// }

		// else {
		//     if (propdata.property_type == 'general') {

		//         settagline(
		//             capitaliseFirstLetterOfWord(thirdval) + ", "
		//             + propdata.property_address + ", "
		//             + propdata.property_city + ", "
		//             + propdata.property_state + ", "
		//             + propdata.property_zip + " "
		//             + beddesc + " " + "Affordable Housing in " + capitaliseFirstLetterOfWord(propdata.property_city) + ", " + (propdetails.length !== 0 && ((propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '55') || propdetails.seniorpropval == '') ? "Senior 55+, " : "")
		//             +
		//             (propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '62') ? "Senior 62+, " : "")
		//             +
		//             (propdetails.length !== 0 && propdetails.pet_allowed == 'Yes' ? "Pets OK, " : "")
		//         )

		//     }

		//     if (propdata.property_type == 'premium') {

		//         settagline(

		//             capitaliseFirstLetterOfWord(thirdval) + ", "
		//             + 
		//             (propdetails.length !== 0 && ((propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '55') || propdetails.seniorpropval == '') ? "Senior 55+, " : "")
		//             +
		//             (propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '62') ? "Senior 62+, " : "")
		//             + "Apartments for Rent at "
		//             + propdata.property_address + ", " + propdata.property_city + ", " + propdata.property_state + ", " + propdata.property_zip + " "

		//             // bedfornongeneral + " " + bathfornongeneral + " " + " in " + capitaliseFirstLetterOfWord(propdata.property_city) + ", "
		//             // +

		//             // (propdetails.length !== 0 && propdetails.section8 == 'Yes' ? "Section 8, " : "")
		//             // +
		//             // (propdetails.length !== 0 && propdetails.pet_allowed == 'Yes' ? "Pets OK, " : "")
		//         )


		//     }
		// }





	}, [beddesc, bedfornongeneral, bathfornongeneral]);



	useEffect(() => {
		if (propcheckabove == [] || propcheckabove == null || propcheckabove.length == 0) {
		}
		else {

			if (propcheckabove[0].header_description == 1 || propcheckabove[0].header_description == '1') {
				setspecialtitle('Affordable Housing');
				setspecialtext('If you qualify, the Federal Government may subsidize your rent.');
				setthirdval('SPECIAL');
				setthirdvalint(1);
				setbedbathinfo('');
			}
			if (propcheckabove[0].header_description == 2 || propcheckabove[0].header_description == '2') {
				setspecialtitle('Affordable Housing');
				setspecialtext(' If you qualify, you may pay');
				setthirdval(`$${commaInNumber(propcheckabove[0].header_value[0])}`);
				setbedbathinfo('');
			}
			if (propcheckabove[0].header_description == 3 || propcheckabove[0].header_description == '3') {
				setspecialtitle('Affordable Housing');
				setspecialtext(`If you qualify, you may pay for ${propcheckabove[0].header_value[0]} Bd, ${decimalRoundOff(propcheckabove[0].header_value[3])} Ba`);
				setthirdval(`$${commaInNumber(propcheckabove[0].header_value[2])}`);
				setbeds(propcheckabove[0].header_value[0]);
				setbedbathinfo(`${propcheckabove[0].header_value[0]} Bd, ${decimalRoundOff(propcheckabove[0].header_value[3])} Ba`);
			}
			if (propcheckabove[0].header_description == 4 || propcheckabove[0].header_description == '4') {
				setspecialtitle('Rental Deals');
				setspecialtext(`If you qualify, you may pay for ${propcheckabove[0].header_value[0]} Bd, 1 Ba`);
				setthirdval(`$${commaInNumber(propcheckabove[0].header_value[2])}`);
				setbeds(propcheckabove[0].header_value[0]);
				setbedbathinfo(`${propcheckabove[0].header_value[0]} Bd`)
			}
			if (propcheckabove[0].header_description == 5 || propcheckabove[0].header_description == '5') {
				setspecialtitle('Rental Deals');
				setspecialtext(`Find out the current specials at ${propdata.property_title}`);
				setthirdval('MOVE-IN SPECIALS');
				setbedbathinfo('');
				setthirdvalint(1);
			}
			if (propcheckabove[0].header_description == 6 || propcheckabove[0].header_description == '6') {
				setspecialtitle('Rental Deals');
				setspecialtext('If you qualify, you may pay');
				setthirdval(`$${commaInNumber(propcheckabove[0].header_value[0])}`);
				setbedbathinfo('');
			}
			if (propcheckabove[0].header_description == 7 || propcheckabove[0].header_description == '7') {
				setspecialtitle(propcheckabove[0].header_value[0]);
				setspecialtext(propcheckabove[0].header_value[1]);
				setthirdval(propcheckabove[0].header_value[2]);
			}
		}
		colorChange(propdata.id_property);
	}, []);






	const adsHeadScript = `var ezstandalone = ezstandalone || { };
    ezstandalone.cmd = ezstandalone.cmd || [];
    ezstandalone.cmd.push(function () {
    ezstandalone.define(618,632, 145,149);
    ezstandalone.enable();
    ezstandalone.display();
    });`




	return (
		<>
			{/* <Helmet>
                <script type="text/javascript">
                    {adsHeadScript}
                </script>
            </Helmet> */}


			<section className="detailPage secPad24 propertydetail-page agencyMarginTop">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 itemWebsite">
							<nav className="navbar resNavbarBread" aria-label="breadcrumb">
								<ol className="breadcrumb font-weight500 mb-0">
									<li className="breadcrumb-item fontSize14"><a href="/" className="purpleText">Home</a></li>
									<li className="breadcrumb-item fontSize14 purpleText">
										<a href={`/propertySearch/&state=${propdata.property_state}`} className={'purpleText'} >
											{propdata.property_state}
										</a>
									</li>
									<li className="breadcrumb-item fontSize14 purpleText">
										<a href={`/propertySearch/${propdata.property_city}&state=${propdata.property_state}`} className={'purpleText'} >
											{capitaliseFirstLetterOfWord(propdata.property_city)}
										</a>
									</li>
									<li className="breadcrumb-item fontSize14 active" aria-current="page">{propdata.property_title}</li>
								</ol>
							</nav>
						</div>
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="d-flex detailHeadSec align-items-end">
								<h1 className="font-weight700 mb-0 fontSize18">
									{removelastcomma(tagline)}
									{/* 
                                    {
                                        propdata.property_type == 'general' ?
                                            beddesc + " " + "Affordable Housing in " + capitaliseFirstLetterOfWord(propdata.property_city) + ", " + (propdetails.length !== 0 && ((propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '55') || propdetails.seniorpropval == '') ? "Senior 55+, " : "")
                                            +
                                            (propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '62') ? "Senior 62+, " : "")
                                            +
                                            (propdetails.length !== 0 && propdetails.pet_allowed == 'Yes' ? "Pets OK, " : "")
                                            :

                                            ""
                                    }
                                    {
                                        propdata.property_type == 'general' ?

                                            ""
                                            :
                                            bedfornongeneral + " " + bathfornongeneral + " " + thirdval + " in " + capitaliseFirstLetterOfWord(propdata.property_city) + ", "
                                            +
                                            (propdetails.length !== 0 && ((propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '55') || propdetails.seniorpropval == '') ? "Senior 55+ " : "")
                                            +
                                            (propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '62') ? "Senior 62+, " : "")
                                            +
                                            (propdetails.length !== 0 && propdetails.section8 == 'Yes' ? "Section 8, " : "")
                                            +
                                            (propdetails.length !== 0 && propdetails.pet_allowed == 'Yes' ? "Pets OK, " : "")

                                    } 
                                    */}







									{/* {propdata.property_address} {propdata.property_city}, {propdata.property_state} {propdata.property_zip} Rental Deals&nbsp;

                                   


                                    {beddesc}&nbsp;
                                    {
                                        bathinfogeneral == null || bathinfogeneral == '' || bathinfogeneral == undefined ?
                                            null :

                                            bathinfogeneral
                                    }&nbsp;


                                    {
                                        propdata.property_type == 'general' ?
                                            'CALL'
                                            :
                                            thirdval
                                    }

                                    &nbsp;{propdata.phone} */}
								</h1>
								<div className="ml-auto responsiveMarLeft">
									<ul className="noMarginPad listStyleNone sideActionIcon">






										<li className="brdrRadius4 itemWebsite"
											onClick={
												() => {
													addOrRemoveProp(propdata.id_property, new Date());
													getAllProp();
													// console.log(toggleHeart(propdata.id_property));
													colorChange(propdata.id_property);
												}
											}
										>
											{
												colorCHangeheart == true ?
													<>
														<i className="fas fa-heart redcolor"></i>
													</>
													:
													<>
														<i className="far fa-heart lightbluemodified"></i>
													</>
											}

										</li>
										<li className="brdrRadius4 itemWebsite">
											<img src={require('../../assets/img/share.svg').default} />

										</li>
										{/* <li className="brdrRadius4 arrowBlock d-flex align-items-center">
                                            <img src={require('../../assets/img/leftArrow.png').default} />
                                            <img className="ml-auto" src={require('../../assets/img/rightArrow.png').default} />
                                        </li> */}
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 responsive0">
							<div className="detailLeftSec">


								{/* {propdata.property_type == 'general' ?
                                    null
                                    : */}

								<div className="imageSec sliderImageBlock owl-carousel owl-theme propertyDetailSlider">
									<div className="item posRel">
										<ImageSliderCarousel propimages={propimages} type={propdata.property_type} />
										<span className="viewPhoto" onClick={toggleModalImage}>
											<i className="far fa-image font-weight500" onClick={toggleModalImage}></i>
											{propimages.length == 0 ? `No photos available` : `All ${propimages.length} Photos`}
										</span>
									</div>
								</div>

								{/* } */}

								{/* <div className="imageSec sliderImageBlock owl-carousel owl-theme propertyDetailSlider">
                                    <div className="item posRel">



                                        <ImageSliderCarousel propimages={propimages} />

                                        <span className="viewPhoto" onClick={toggleModalImage}>
                                            <i className="far fa-image font-weight500" onClick={toggleModalImage}></i>
                                            {propimages.length == 0 ? `No photos available` : `All ${propimages.length} Photos`}
                                        </span>

                                    </div>
                                </div> */}


								<div className="modal fade rentalModal availabilityModal" id="exampleModalPhoto" tabindex="-1"
									role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
									<div className="modal-dialog modal-dialog-centered widthModalProperty" role="document">
										<div className="modal-content">
											<div className="modal-header d-flex align-items-center posRel">
												<button type="button" className="close closeModl" data-dismiss="modal"
													aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
												<h5 className="modal-title fontSize16 font-weight400 ml-22" id="exampleModalLongTitle">
													{propdata.property_address} {propdata.property_city}, {propdata.property_state} {propdata.property_zip} Rental Deals&nbsp;

													{
														propdetails.length == 0 ? "" : ` ${propdetails.min_bed} Br. ${decimalRoundOff(propdetails.min_bath)} Ba $${propdetails.min_rent}`
													}
													{propdata.phone}
												</h5>
												<div className="ml-auto d-flex align-items-center mr-5">
													<a href="" className="modalCheck colorWhite">Check Availability</a>
													<ul className="noMarginPad listStyleNone sideActionIcon">
														<li className="brdrRadius4 itemWebsite">
															<i className="far fa-heart lightbluemodified"></i>
															{/* <img src={require('../../assets/img/redHeart.png').default} /> */}
														</li>
														<li className="brdrRadius4 itemWebsite mr-0">
															<img src={require('../../assets/img/share.svg').default} />
														</li>
													</ul>
												</div>
											</div>

										</div>
									</div>
								</div>


								<div className="detailTextSec itemWebsite">
									<div className="d-flex align-items-center topHeadSec">
										<div className="d-flex align-items-center">
											<h3 className="font-weight700 colorBlue mt-0 mb-0 fontSize24">
												{propdata.property_title}
											</h3>
											<ul className="noMarginPad listStyleNone">
												{
													proprating.length == 0 ?
														null
														:
														<Starratingstatic rating={proprating[0].vote_avg} />
												}
											</ul>
										</div>
										<div className="ml-auto priceTagDet">
											{/* <h2 className="font-weight700 colorBlue">${propdetails.min_rent} - ${propdetails.max_rent}</h2> */}

											<h2 className="font-weight700 colorBlue">
												{
													propdata.property_type == 'general' ?
														'CALL'
														:

														(thirdval !== null || thirdval !== '' ?
															thirdval :
															null)
												}


											</h2>
										</div>
									</div>
									<div className="d-flex">
										<div className="leftTopParaSec">
											<p className="mb-0 secondaryColor">
												{propdata.property_address} {propdata.property_city}, {propdata.property_state} {propdata.property_zip}
											</p>
											<div className="d-flex flex-wrap align-items-center detailTags detailTagList">
												<div className="row w-100">

													{
														propdetails.length !== 0 && propdetails.pet_allowed == 'Yes' ?
															<div className="col-lg-5 col-md-5240 col-sm-12 col-xs-12">
																<span className="brownTag">
																	<div className="d-flex align-items-center">
																		<img src={require('../../assets/img/detailImage1.svg').default} />
																		<p className="mb-0">Pets OK</p>
																	</div>
																</span>
															</div>
															:
															null
													}


													{
														propdetails.length !== 0 && propdetails.handicap == "Yes" ?

															<div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
																<span className="blueTag mt-0">
																	<span className="">
																		<div className="d-flex align-items-center">
																			<img src={require('../../assets/img/detailImage2.svg').default} />
																			<p className="mb-0">Handicap Accessible</p>
																		</div>
																	</span>
																</span>
															</div> :
															null

													}




													{
														propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '62') ?
															<div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
																<span className="orangeTag">
																	<div className="d-flex align-items-center">
																		<img src={require('../../assets/img/detailImage3.svg').default} />
																		<p className="mb-0">Seniors 62+</p>
																	</div>
																</span>
															</div>
															: null

													}


													{
														propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && (propdetails.seniorpropval == '55' || propdetails.seniorpropval == '')) ?
															<div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
																<span className="greenTag">
																	<div className="d-flex align-items-center">
																		<img src={require('../../assets/img/detailImage5.svg').default} />
																		<p className="mb-0">Seniors 55+</p>
																	</div>
																</span>
															</div>
															: null

													}


													{
														propdetails.length !== 0 && propdetails.section8 == 'Yes' ?

															<div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
																<span className="greenTag">
																	<div className="d-flex align-items-center">
																		<img src={require('../../assets/img/detailImage4.svg').default} />
																		<p className="mb-0">Section 8</p>
																	</div>
																</span>
															</div>
															: null
													}



												</div>
											</div>
										</div>
										<div className="ml-auto rightOtherDetail">
											<ul className="noMarginPad listStyleNone">

												{/* <li className="d-flex aligm-items-center">
                                                    <span className="imgBox">
                                                        <img src={require('../../assets/img/Union.svg').default} />
                                                    </span>
                                                    <p className="mb-0 secondaryColor">
                                                        <span className="colorBlue">
                                                            {propdetails.min_bed}-{propdetails.max_bed}
                                                        </span> Beds
                                                    </p>
                                                </li> */}

												{
													propdetails.min_bed && propdetails.max_bed ?
														<li className="d-flex aligm-items-center">
															<span className="imgBox">
																<img src={require('../../assets/img/Union.svg').default} />
															</span>
															<p className="mb-0 secondaryColor">
																<span className="colorBlue">
																	{propdetails.min_bed}-{propdetails.max_bed}
																</span> Beds
															</p>
														</li>
														:
														propdetails.min_bed || propdetails.max_bed ?
															<li className="d-flex aligm-items-center">
																<span className="imgBox">
																	<img src={require('../../assets/img/Union.svg').default} />
																</span>
																<p className="mb-0 secondaryColor">
																	<span className="colorBlue">
																		{propdetails.min_bed || propdetails.max_bed}
																	</span> Beds
																</p>
															</li>
															:
															<li className="d-flex aligm-items-center">
																<span className="imgBox">
																	<img src={require('../../assets/img/Union.svg').default} />
																</span>
																<p className="mb-0 secondaryColor">
																	<span className="colorBlue">
																		N/A
																	</span> Beds
																</p>
															</li>
												}




												{
													propdetails.min_bath && propdetails.max_bath ?


														<li className="d-flex aligm-items-center">
															<span className="imgBox">
																<img src={require('../../assets/img/shower.svg').default} />
															</span>
															<p className="mb-0 secondaryColor">
																<span className="colorBlue">{decimalRoundOff(propdetails.min_bath)} - {decimalRoundOff(propdetails.max_bath)}</span> Baths
															</p>
														</li>
														:
														propdetails.min_bath || propdetails.max_bath ?
															<li className="d-flex aligm-items-center">
																<span className="imgBox">
																	<img src={require('../../assets/img/shower.svg').default} />
																</span>
																<p className="mb-0 secondaryColor">
																	<span className="colorBlue">{decimalRoundOff(propdetails.min_bath) || decimalRoundOff(propdetails.max_bath)}</span> Baths
																</p>
															</li>
															:
															<li className="d-flex aligm-items-center">
																<span className="imgBox">
																	<img src={require('../../assets/img/shower.svg').default} />
																</span>
																<p className="mb-0 secondaryColor">
																	<span className="colorBlue">N/A</span> Baths
																</p>
															</li>
												}






												{
													propfloor.length == 0 ?

														<li className="d-flex aligm-items-center">
															<span className="imgBox">
																<img src={require('../../assets/img/area.svg').default} />
															</span>
															<p className="mb-0 secondaryColor">
																<span className="colorBlue">
																	N/A
																</span> Sq.Ft
															</p>
														</li>
														:
														propfloor[0].square_feet_from == propfloor[propfloor.length - 1].square_feet_to ?
															<li className="d-flex aligm-items-center">
																<span className="imgBox">
																	<img src={require('../../assets/img/area.svg').default} />
																</span>
																<p className="mb-0 secondaryColor">
																	<span className="colorBlue">
																		{propfloor[0].square_feet_from == 0 || propfloor[0].square_feet_from == '0' ?
																			'N/A' : propfloor[0].square_feet_from}
																	</span> Sq.Ft
																</p>
															</li>

															:
															<li className="d-flex aligm-items-center">
																<span className="imgBox">
																	<img src={require('../../assets/img/area.svg').default} />
																</span>
																<p className="mb-0 secondaryColor">
																	<span className="colorBlue">

																		{propfloor[0].square_feet_from} - {propfloor[propfloor.length - 1].square_feet_to}


																	</span> Sq.Ft
																</p>
															</li>
												}

											</ul>
										</div>
									</div>
									{/* href="tel:8665562570" */}

									<div className="d-flex align-items-center btnSection">

										{propdata.phone == '' || propdata.phone == null ?
											<a href="javascript:;" className="brdrRadius4 w-50 text-center d-flex align-items-center justify-content-center">
												No Phone Number
											</a>
											:
											<a href={`tel:${propdata.phone}`} className="brdrRadius4 w-50 text-center d-flex align-items-center justify-content-center">
												<img src={require('../../assets/img/phoneIcon.svg').default} />{propdata.phone}
											</a>
										}
										{/* <a href={`tel:${propdata.phone}`} className="brdrRadius4 w-50 text-center d-flex align-items-center justify-content-center">
                                            <img src={require('../../assets/img/phoneIcon.svg').default} />{propdata.phone}
                                        </a> */}
										<span className="brdrRadius4 w-50 text-center d-flex align-items-center justify-content-center" >
											{propdata.property_type == 'general' ? null : <img src={require('../../assets/img/qualifyIcon.svg').default} />}

											<button onClick={toggleModalQualify}>
												{propdata.property_type == 'general' ? 'Apply Now' : 'Qualify Now'}
												{/* Qualify Now */}
											</button>
										</span>

										{/* <div className="modal fade rentalModal preRentalModal" id="exampleModal" tabindex="-1"
                                            role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog boxscroll4" role="document">
                                                <div className="wrapperScroll">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title w-100 text-center font-weight700"
                                                                id="exampleModalLabel">Pre-Rental Qualify</h5>
                                                            <button type="button" className="close" data-dismiss="modal"
                                                                aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <form>
                                                                <div className="row">
                                                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label for="exampleInputEmail1">Full Name <span
                                                                                className="labelMark">*</span></label>
                                                                            <input type="email" className="form-control" id=""
                                                                                aria-describedby="emailHelp"
                                                                                placeholder="Email Address" value="Jonath" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label for="exampleInputEmail1">Address </label>
                                                                            <input type="email" className="form-control" id=""
                                                                                aria-describedby="emailHelp" placeholder=""
                                                                                value="4353 Norman Street" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label for="">City</label>
                                                                            <input type="email" className="form-control" id=""
                                                                                aria-describedby="emailHelp"
                                                                                placeholder="Email Address" value="Los Angeles" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <div className="row">
                                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                                <div className="form-group">
                                                                                    <label
                                                                                        for="exampleFormControlSelect1">State</label>
                                                                                    <select className="form-control"
                                                                                        id="exampleFormControlSelect1">
                                                                                        <option>CA</option>
                                                                                        <option>CA</option>
                                                                                        <option>CA</option>
                                                                                        <option>CA</option>
                                                                                        <option>CA</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                                <div className="form-group">
                                                                                    <label for="">ZIP</label>
                                                                                    <input type="email" className="form-control"
                                                                                        id="" aria-describedby="emailHelp"
                                                                                        placeholder="Email Address" value="90022" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label for="">Email Address <span
                                                                                className="labelMark">*</span></label>
                                                                            <input type="email" className="form-control" id=""
                                                                                aria-describedby="emailHelp"
                                                                                placeholder="Email Address"
                                                                                value="Jonathan@gmail.com" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label for="">Phone Number <span
                                                                                className="labelMark">*</span></label>
                                                                            <input type="email" className="form-control" id=""
                                                                                aria-describedby="emailHelp"
                                                                                placeholder="Enter phone" value="6261234123" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                                                        <div className="form-group">
                                                                            <label for="">Move-In Date</label>
                                                                            <div className="posRel calnderIcon">
                                                                                <input type="email" className="form-control" id=""
                                                                                    aria-describedby="emailHelp"
                                                                                    placeholder="Move-In Date" value="" />
                                                                                <span><img src={require('../../assets/img/calander.png').default} /></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <div className="row">
                                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                                <div className="form-group">
                                                                                    <label for="">Occupants</label>
                                                                                    <div className="posRel calnderIcon">
                                                                                        <input type="number" min="1" max="5"
                                                                                            className="form-control" id=""
                                                                                            aria-describedby="emailHelp"
                                                                                            placeholder="" value="1" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                                <div className="form-group">
                                                                                    <label for="">Monthly Income</label>
                                                                                    <input type="email" className="form-control"
                                                                                        id="" aria-describedby="emailHelp"
                                                                                        placeholder="" value="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <div className="radioSec">
                                                                            <div className="form-group mb-0">
                                                                                <label>Do you have a voucher?</label>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div>
                                                                                        <input type="radio" id="test1"
                                                                                            name="radio-group" checked />
                                                                                        <label for="test1">Yes</label>
                                                                                    </div>
                                                                                    <div>
                                                                                        <input type="radio" id="test2"
                                                                                            name="radio-group" checked />
                                                                                        <label for="test2">No</label>
                                                                                    </div>
                                                                                    <div>
                                                                                        <input type="radio" id="test3"
                                                                                            name="radio-group" checked />
                                                                                        <label for="test3">On Waiting
                                                                                            List</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <div className="brdrLine marLftRgt"></div>
                                                            <div>
                                                                <h5 className="fontSize14 font-weight700">Disclaimer/Terms of
                                                                    Conditions:</h5>
                                                                <div className="form-group">
                                                                    <textarea className="form-control"
                                                                        id="exampleFormControlTextarea1" rows="3"
                                                                        placeholder="This is NOT an application for rental assistance. It is only being forwarded for review by the selected Housing Agency, Management Company or Property Owner who determine eligibility and approval. Receipt of your information does not guarantee acceptance in any rental assistance program, nor will it place you on any waiting list. Further information will be required to determine your eligibility for any Rental Assistance program and approval for a selected unit and you are responsibile for continuing the qualification process.By clicking on the Submit button below, you agree that you have read, understand, and accept these terms and conditions."></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button"
                                                                className="btn w-100 modalSubmitBtn fontSize16 font-weight500 colorWhite">Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
									</div>
								</div>

								<div className="detailTextSec itemMobile responsive15">
									<div className="topHeadSec leftTopParaSec">
										<div className="d-flex align-items-center">
											<div className="maxWidth260">
												<h2 className="font-weight700 colorBlue mt-0 mb-0">{propdata.property_title}</h2>
												<p className="mb-0 secondaryColor">{propdata.property_address} {propdata.property_city}, {propdata.property_state} {propdata.property_zip}</p>
											</div>
											<div className="ml-auto">
												<ul className="noMarginPad listStyleNone sideActionIcon">
													<li className="brdrRadius4"

														onClick={() => {
															addOrRemoveProp(propdata.id_property, new Date());
															getAllProp();
															// console.log(toggleHeart(propdata.id_property));
															colorChange(propdata.id_property);
														}
														}

													>
														{
															colorCHangeheart == true ?
																<>
																	<i className="fas fa-heart redcolor"></i>
																</>
																:
																<>
																	<i className="far fa-heart lightbluemodified"></i>
																</>
														}
														{/* 1111 */}
														{/* <img src={require('../../assets/img/like.png').default} /> */}
													</li>
													<li className="brdrRadius4 mr-0">
														<img src={require('../../assets/img/share.svg').default} />
													</li>
												</ul>
											</div>
										</div>
										<div>
											{/* <ul className="noMarginPad listStyleNone">
                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                                <li><img src={require('../../assets/img/starRate.svg').default} /></li>
                                            </ul> */}

											{
												proprating.length == 0 ? null : <Starratingstatic rating={proprating[0].vote_avg} />
											}
										</div>
										<div className="d-flex align-items-center rightOtherDetail">
											<ul className="noMarginPad listStyleNone resRightList20">
												<li className="d-flex align-items-center mb-0">
													<span className="imgBox">
														<img src={require('../../assets/img/Union.svg').default} />
													</span>
													<p className="mb-0 secondaryColor">
														<span className="colorBlue">
															{
																propdetails.min_bed && propdetails.max_bed ?

																	`${propdetails.min_bed}-${propdetails.max_bed}`

																	:
																	propdetails.min_bed || propdetails.max_bed ?

																		`${propdetails.min_bed || propdetails.max_bed}`

																		:

																		'N/A'

															}

														</span>
													</p>
												</li>
												<li className="d-flex align-items-center mb-0">
													<span className="imgBox">
														<img src={require('../../assets/img/shower.svg').default} />
													</span>
													<p className="mb-0 secondaryColor">
														<span className="colorBlue">

															{
																propdetails.min_bath && propdetails.max_bath ?


																	`${decimalRoundOff(propdetails.min_bath)} - ${decimalRoundOff(propdetails.max_bath)}`
																	:
																	propdetails.min_bath || propdetails.max_bath ?
																		`${propdetails.min_bath || propdetails.max_bath}`
																		:
																		'N/A'
															}

														</span>
													</p>
												</li>
												<li className="d-flex align-items-center mb-0">
													<span className="imgBox">
														<img src={require('../../assets/img/area.svg').default} />
													</span>
													<p className="mb-0 secondaryColor">
														<span className="colorBlue">
															{
																propfloor.length == 0 ?

																	'N/A'

																	:
																	propfloor[0].square_feet_from == propfloor[propfloor.length - 1].square_feet_to ?

																		`${propfloor[0].square_feet_from == 0 || propfloor[0].square_feet_from == '0' ?
																			'N/A' : propfloor[0].square_feet_from}`


																		:

																		`${propfloor[0].square_feet_from} - ${propfloor[propfloor.length - 1].square_feet_to}`

															}
														</span>
													</p>
												</li>
											</ul>
										</div>
										<div className="d-flex align-items-center callSec">
											<ul className="noMarginPad listStyleNone mt-0">

												{
													propdetails.length !== 0 && propdetails.pet_allowed == 'Yes' ?
														<li>
															<img src={require('../../assets/img/detailImage1.svg').default} />
														</li> :
														null
												}
												{
													propdetails.length !== 0 && propdetails.handicap == "Yes" ?
														<li>
															<img src={require('../../assets/img/detailImage2.svg').default} />
														</li>
														:
														null

												}
												{
													propdetails.length !== 0 && (propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '62') ?
														<li>
															<img src={require('../../assets/img/detailImage3.svg').default} />
														</li>
														: null

												}

												{
													propdetails.length !== 0 && propdetails.section8 == 'Yes' ?
														<li>
															<img src={require('../../assets/img/detailImage4.svg').default} />
														</li>
														: null

												}

												{
													propdetails.length !== 0 && ((propdetails.seniorprop == 'Yes' && propdetails.seniorpropval == '55') || propdetails.seniorpropval == '') ?

														<li>
															<img src={require('../../assets/img/detailImage5.svg').default} />
														</li>
														: null

												}

											</ul>
											<div className="ml-auto itemwebsite mba">
												<a href="" className="lineBtn brdrRadius4 font-weight700 purpleText">
													<img src={require('../../assets/img/phoneColored.svg').default} />{propdata.phone}
												</a>
											</div>
											<div className="ml-auto itemwebsite mbab">

												{propdata.phone == '' || propdata.phone == null ?

													<a href="javascript:;" className="lineBtn brdrRadius4 font-weight700 purpleText">
														No Phone Number
													</a>
													:
													<a href={`tel:${propdata.phone}`} className="lineBtn brdrRadius4 font-weight700 purpleText">
														<img src={require('../../assets/img/phoneColored.svg').default} />Call
													</a>
												}


											</div>

										</div>
									</div>
								</div>
								<div className="brdrLine"></div>

								<div className="middleSection itemMobile1 responsive15">
									<div className="d-flex align-items-center">
										<div className="dealTag font-weight700 brdrRadius4 d-flex align-items-center">Affordable Housing</div>
										<h2 className="ml-auto font-weight700 mb-0">SPECIAL</h2>
									</div>
									<p className="mb-0 fontSize16 font-weight400">If you qualify, the Federal Government may subsidize your rent.</p>
								</div>

								<div className="brdrLine itemMobile1"></div>

								{/* About  */}
								<div className="SectionBlock responsive15">
									<h3 className="font-weight700 colorBlue fontSize18">About {propdata.property_title} {propdata.property_type == 'general' ? ' - Affordable Apartments for Low Income Residents' : null}</h3>
									<div className="truncate">
										<p>
											{
												propdata.description == '' || propdata.description == null ?

													propdetails.min_bed && propdetails.max_bed ?

														`${propdata.property_title} apartments is an affordable rental housing community located in ${propdata.property_city}, ${propdata.property_state}.
                                                         ${propdata.property_title} apartments is an affordable housing community 
                                                         with ${propdetails.max_bed} Bed apartments units.
                                                         Income restrictions may apply, please contact Harc apartments for rates,
                                                         availability and more information or compare to other apartments in ${propdata.property_city} from the results below.`

														:


														propdetails.min_bed || propdetails.max_bed ?
															`${propdata.property_title} apartments is an affordable rental housing community located in ${propdata.property_city}, ${propdata.property_state}.
                                                    ${propdata.property_title} apartments is an affordable housing community 
                                                    with ${propdetails.min_bed} ${propdetails.max_bed}  Bed apartments units.
                                                    Income restrictions may apply, please contact Harc apartments for rates,
                                                    availability and more information or compare to other apartments in ${propdata.property_city} from the results below.`

															: null
													:

													<span dangerouslySetInnerHTML={{ __html: replaced }} />
												// replaced
												// propdata.description
											}
										</p>
									</div>



									<div style={{ background: 'cyan', width: '100%', maxWidth: '100%', padding: 0, marginTop: '24px' }}>
										<a style={{ height: '100%', width: '100%', maxWidth: '100%' }} href='https://secure.rspcdn.com/xprr/red/PID/12463/SID/sid_here'>
											<img style={{ height: '100%', width: '100%', maxWidth: '100%' }} src={require('../../assets/img/property_detail_ad.png').default} alt="Image" />
										</a>
									</div>
									{/* 
									<div className="about_bottm_section">
										<ul>
											<li><a className="purpleText fontSize16 font-weight700">Save Listing |</a></li>
											<li> <a className="purpleText fontSize16 font-weight700">Share |</a></li>
											<li><a className="purpleText fontSize16 font-weight700">Affordable Rental Assistance Near {propdata.property_city} {propdata.property_state}</a></li>
										</ul>
										<div className="media rewards mt-4">
											<img className=""
												src={require('../../assets/img/rewards.png').default}
												alt="Image" />
											<div className="media-body ml-3" >
												<div className="d-flex align-items-top">
													<div className="headingSec">
														<h5 className="mt-0 mb-0 fontSize18 text-left font-weight700 colorBlue">Build your credit and earn rewards</h5>
														<p className="mb-0 mt-2 colorBlue text-left fontSize16 font-weight400 itemWebsite">Landlords often favor applicants with a high credit score.We have provided an opportunity that over 100,000 members are using to help build their credit - A debit card that builds credit and earn rewards.No credit checks.Keep your bank!
														</p>
														<button className="font-weight700 smallResponsiveBtn fontSize14 colorWhite transition brdrRadius4 itemWebsite"><a href="https://secure.rspcdn.com/xprr/red/PID/921/SID/rh,belowimage" target="_blank" className='colorWhite'>Check it out</a></button>
													</div>

												</div>
											</div>
										</div>
										<div className="rewards itemMobile">
											<p className="mb-0 mt-2 colorBlue text-left fontSize18 font-weight400 ">Landlords often favor applicants with a high credit score.We have provided an opportunity that over 100,000 members are using to help build their credit - A debit card that builds credit and earn rewards.No credit checks.Keep your bank!
											</p>
											<button className="font-weight700 smallResponsiveBtn fontSize14 colorWhite transition brdrRadius4 itemMobile"><a href="https://secure.rspcdn.com/xprr/red/PID/921/SID/rh,belowimage" target="_blank" className='colorWhite'>Check it out</a></button>
										</div>

									</div> */}
								</div>


								<div className="brdrLine"></div>

								{propdata.property_type == 'general' ?
									(

										propfloor == null || propfloor.length == 0 ?
											null :
											<FloorPlanForGeneral propfloor={propfloor} toggleModalAvailability={toggleModalAvailability} titletext={`Floorplans for ${propdata.property_title}, ${capitaliseFirstLetterOfWord(propdata.property_city)}, ${propdata.property_state}`} />
									)
									:


									(propfloor == null || propfloor.length == 0 ?
										null :
										<>
											<div className="SectionBlock responsive15">
												<h3 className="font-weight700 colorBlue fontSize18">Floorplans for {propdata.property_title}, {capitaliseFirstLetterOfWord(propdata.property_city)}, {propdata.property_state}</h3>
												<ul className="noMarginPad listStyleNone floorplanList itemWebsite">

													<table className="table  floorplantable">

														<thead>
															<tr>
																<th scope="col">Floorplans</th>
																<th scope="col">Beds</th>
																<th scope="col">Baths</th>
																<th scope="col">Sq.ft</th>
																<th scope="col">Deposit</th>
																<th scope="col">Rate</th>
															</tr>
														</thead>

														<tbody>



															{propfloor.map((data) => {

																return (
																	data.square_feet_to !== undefined && data.square_feet_from !== undefined ?
																		<>
																			<FloorPlan data={data} />
																		</>
																		:
																		null

																);
															})}

														</tbody>
													</table>


												</ul>





												<ul className="noMarginPad listStyleNone floorplanList itemMobile">

													{propfloor.map((data) => {
														return (

															data.square_feet_to !== undefined && data.square_feet_from !== undefined ?

																<>
																	<FloorPlanItemMobile data={data} />
																</>
																:
																null

														);
													})}

												</ul>




											</div>
											<div className="d-flex align-items-center availSec responsive15 flex-wrap">
												<div>
													{/* <p className="mb-0">Last updated: <span className="colorBlue font-weight700">Wed, 28 August
                                                        2020</span></p> */}
												</div>
												<div className="ml-auto Resnoauto itemWebsite">
													<button className="brdrRadius4 transition w-100 d-flex align-items-center justify-content-center" onClick={toggleModalAvailability}><img src={require('../../assets/img/mail.svg').default} /><span>Check
														Availability</span></button>
												</div>
											</div>

										</>
									)

								}


								{
									// (propfloor == null || propfloor.length == 0 ?
									//     null :
									//     <>
									//         <div className="SectionBlock responsive15">
									//             <h3 className="font-weight700 colorBlue">Floorplans</h3>
									//             <ul className="noMarginPad listStyleNone floorplanList">

									//                 {propfloor.map((data) => {
									//                     return (
									//                         <FloorPlan data={data} />
									//                     );
									//                 })}
									//             </ul>
									//         </div>
									//         <div className="d-flex align-items-center availSec responsive15 flex-wrap">
									//             <div>
									//                 <p className="mb-0">Last updated: <span className="colorBlue font-weight700">Wed, 28 August
									//                     2020</span></p>
									//             </div>
									//             <div className="ml-auto Resnoauto">
									//                 <button className="brdrRadius4 transition w-100 d-flex align-items-center justify-content-center" onClick={toggleModalAvailability}><img src={require('../../assets/img/mail.svg').default} /><span>Check
									//                     Availability</span></button>
									//             </div>
									//         </div>

									//     </>
									// )
								}



								<div className="modal fade rentalModal availabilityModal" id="exampleModal1" tabindex="-1"
									role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
									<div className="modal-dialog modal-dialog-centered widthModal" role="document">
										<div className="modal-content">
											<div className="modal-header d-flex align-items-center">
												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
												<h5 className="modal-title fontSize16 font-weight400 ml-22"
													id="exampleModalLongTitle">2882 Tyler St El Monte, CA 91157 Rental Deals 1
													Nr. 1 Ba $1,200 (626) 357-1855</h5>
											</div>
											<div className="modal-body rentalForm availBodyBlock">
												<div className="row">
													<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
														<div className="modalLeft">
															<div className="imageSecleftModal posRel">
																<img className="w-100" src={require('../../assets/img/modalLeft.png').default} />
																<div
																	className="sliderTagName brdrRadius4 colorWhite font-weight700">
																	Affordable Housing</div>
															</div>
															<div className="d-flex align-items-center">
																<div className="lefttitle">
																	<h5 className="mb-0 fontSize18 font-weight700 colorBlue">Blessed
																		Rock Apartments</h5>
																	<p className="mb-0 fontSize16 font-weight400 secondaryColor">
																		2882 Tyler St El Monte, CA 91157</p>
																</div>
																<div className="ml-auto">
																	<img src={require('../../assets/img/goodDeal.svg').default} />
																</div>
															</div>
															<div className="sliderListing">
																<ul className="clearfix d-flex align-items-center">
																	<li className="fontSize17"><b>1</b>Bd</li>
																	<li className="fontSize17"><b>1</b>Ba</li>
																	<li className="fontSize17"><b>880</b>Sq.Ft</li>
																	<li className="ml-auto boldTag greenText fontSize24">$1,200</li>
																</ul>
															</div>
															<p className="para fontSize14 font-weight400 secondaryColor">Blessed
																Rock Apartment is an affordable apartment community for 62 years
																of age or older in El Monte, CA.We currently have a waiting
																list. Please call today to find out how to get an application
																for this community or to verify income requirements</p>
														</div>
													</div>
													<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
														<div className="sideFormBlock">
															<div className="SectionBlock responsive15 availabilitySection">
																<div className="d-flex align-items-center">
																	<h2 className="colorBlue font-weight700 fontSize18">Check
																		Availability</h2>
																</div>
																<div className="ml-auto">
																	<p className="purpleText font-weight700 fontSize18"><img
																		src={require('../../assets/img/phoneColored.svg').default} />(626) 448-2699</p>
																</div>



															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>


								<div className="modal fade rentalModal availabilityModal" id="exampleModal2" tabindex="-1"
									role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
									<div className="modal-dialog modal-dialog-centered widthModal" role="document">
										<div className="modal-content">
											<div className="modal-header d-flex align-items-center">
												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
												<h5 className="modal-title fontSize16 font-weight400 ml-22"
													id="exampleModalLongTitle">Check Availability at These Popular Apartments
													Below</h5>
											</div>
											<div className="modal-body rentalForm availBodyBlock scrollModalList">
												<div className="custom-radios">
													<div className="labelRadio propertyList active">
														<label for="color-1">
															<div className="d-flex align-items-center">
																<img src={require('../../assets/img/modalleftImage1.png').default} />
																<div className="rightText flex1 borderRightBlock">
																	<div className="d-flex align-items-center propertyTitle">
																		<a href="#">
																			<h5 className="colorBlue font-weight700 mb-0">Blessed
																				Rock Apartments</h5>
																		</a>
																		<div className="topHeadSec mt-0">
																			<ul className="noMarginPad listStyleNone">
																				<li><i className="fas fa-star"></i></li>
																				<li><i className="fas fa-star"></i></li>
																				<li><i className="fas fa-star"></i></li>
																				<li><i className="fas fa-star"></i></li>
																				<li><i className="fas fa-star"></i></li>
																			</ul>
																		</div>
																	</div>
																	<p className="mb-0 secondaryColor fontSize14">2882 Tyler St El
																		Monte, CA 91157</p>
																	<div className="priceRange itemWebsite">
																		<h4 className="colorBlue mb-0 fontSize16 font-weight700">
																			$1,200-$1,800</h4>
																	</div>
																	<div className="itemMobile priceRangeMobile">
																		<div className="d-flex align-items-center">
																			<h4 className="fontSize16 font-weight700 mb-0">$1,200
																			</h4>
																			<span className="font-weight700"><img
																				src={require('../../assets/img/priceTagg.svg').default} />Good
																				Deal</span>
																		</div>
																	</div>
																	<div className="d-flex align-items-center listingBlockLine">
																		<ul className="noMarginPad listStyleNone">
																			<li className="d-flex align-items-center">
																				<img src={require('../../assets/img/beds.svg').default} /><span
																					className="colorBlue">1-2</span> Beds
																			</li>
																			<li className="d-flex align-items-center ml-12">
																				<img src={require('../../assets/img/shower.svg').default} /><span
																					className="colorBlue">1-2</span> Baths
																			</li>
																		</ul>
																		<ul className="noMarginPad listStyleNone listIcon ml-18">
																			<li>
																				<img src={require('../../assets/img/detailImage1.svg').default} />
																			</li>
																			<li>
																				<img src={require('../../assets/img/detailImage2.svg').default} />
																			</li>
																			<li>
																				<img src={require('../../assets/img/detailImage3.svg').default} />
																			</li>
																			<li>
																				<img src={require('../../assets/img/detailImage4.svg').default} />
																			</li>
																		</ul>
																	</div>
																	<p className="descriptionProperty mb-0 fontSize12"><img className=""
																		src={require('../../assets/img/file.svg').default} />Special Pricing for
																		Seniors - 2882 Tyler St...<a href=""
																			className="purpleText">More</a></p>
																</div>
																<div className="widthRadio">
																	<div className="text-center">
																		<a href=""
																			className="fontSize16 font-weight700 text-center requestTag">Request
																			for<br />
																			more info</a>
																		<input type="radio" id="color-1" name="color"
																			value="color-1" checked />
																		<span>
																			<div>
																				<img src={require('../../assets/img/check.png').default}
																					alt="Checked Icon" />
																			</div>
																		</span>
																	</div>
																</div>
															</div>
														</label>
													</div>
													<div className="labelRadio propertyList">
														<label for="color-2">
															<div className="d-flex align-items-center">
																<img src={require('../../assets/img/modalleftImage1.png').default} />
																<div className="rightText flex1 borderRightBlock">
																	<div className="d-flex align-items-center propertyTitle">
																		<a href="#">
																			<h5 className="colorBlue font-weight700 mb-0">Blessed
																				Rock Apartments</h5>
																		</a>
																		<div className="topHeadSec mt-0">
																			<ul className="noMarginPad listStyleNone">
																				<li><i className="fas fa-star"></i></li>
																				<li><i className="fas fa-star"></i></li>
																				<li><i className="fas fa-star"></i></li>
																				<li><i className="fas fa-star"></i></li>
																				<li><i className="fas fa-star"></i></li>
																			</ul>
																		</div>
																	</div>
																	<p className="mb-0 secondaryColor fontSize14">2882 Tyler St El
																		Monte, CA 91157</p>
																	<div className="priceRange itemWebsite">
																		<h4 className="colorBlue mb-0 fontSize16 font-weight700">
																			$1,200-$1,800</h4>
																	</div>
																	<div className="itemMobile priceRangeMobile">
																		<div className="d-flex align-items-center">
																			<h4 className="fontSize16 font-weight700 mb-0">$1,200
																			</h4>
																			<span className="font-weight700"><img
																				src={require('../../assets/img/priceTagg.svg').default} />Good
																				Deal</span>
																		</div>
																	</div>
																	<div className="d-flex align-items-center listingBlockLine">
																		<ul className="noMarginPad listStyleNone">
																			<li className="d-flex align-items-center">
																				<img src={require('../../assets/img/beds.svg').default} /><span
																					className="colorBlue">1-2</span> Beds
																			</li>
																			<li className="d-flex align-items-center ml-12">
																				<img src={require('../../assets/img/shower.svg').default} /><span
																					className="colorBlue">1-2</span> Baths
																			</li>
																		</ul>
																		<ul className="noMarginPad listStyleNone listIcon ml-18">
																			<li>
																				<img src={require('../../assets/img/detailImage1.svg').default} />
																			</li>
																			<li>
																				<img src={require('../../assets/img/detailImage2.svg').default} />
																			</li>
																			<li>
																				<img src={require('../../assets/img/detailImage3.svg').default} />
																			</li>
																			<li>
																				<img src={require('../../assets/img/detailImage4.svg').default} />
																			</li>
																		</ul>
																	</div>
																	<p className="descriptionProperty mb-0 fontSize12"><img className=""
																		src={require('../../assets/img/file.svg').default} />Special Pricing for
																		Seniors - 2882 Tyler St...<a href=""
																			className="purpleText">More</a></p>
																</div>
																<div className="widthRadio">
																	<div className="text-center">
																		<a href=""
																			className="fontSize16 font-weight700 text-center">Request
																			for<br />
																			more info</a>
																		<input type="radio" id="color-2" name="color"
																			value="color-2" checked />
																		<span>
																			<div>
																				<img src={require('../../assets/img/check.png').default}
																					alt="Checked Icon" />
																			</div>
																		</span>
																	</div>
																</div>
															</div>
														</label>
													</div>
													<div className="labelRadio propertyList">
														<label for="color-3">
															<div className="d-flex align-items-center">
																<img src={require('../../assets/img/modalleftImage1.png').default} />
																<div className="rightText flex1 borderRightBlock">
																	<div className="d-flex align-items-center propertyTitle">
																		<a href="#">
																			<h5 className="colorBlue font-weight700 mb-0">Blessed
																				Rock Apartments</h5>
																		</a>
																		<div className="topHeadSec mt-0">
																			<ul className="noMarginPad listStyleNone">
																				<li><i className="fas fa-star"></i></li>
																				<li><i className="fas fa-star"></i></li>
																				<li><i className="fas fa-star"></i></li>
																				<li><i className="fas fa-star"></i></li>
																				<li><i className="fas fa-star"></i></li>
																			</ul>
																		</div>
																	</div>
																	<p className="mb-0 secondaryColor fontSize14">2882 Tyler St El
																		Monte, CA 91157</p>
																	<div className="priceRange itemWebsite">
																		<h4 className="colorBlue mb-0 fontSize16 font-weight700">
																			$1,200-$1,800</h4>
																	</div>
																	<div className="itemMobile priceRangeMobile">
																		<div className="d-flex align-items-center">
																			<h4 className="fontSize16 font-weight700 mb-0">$1,200
																			</h4>
																			<span className="font-weight700"><img
																				src={require('../../assets/img/priceTagg.svg').default} />Good
																				Deal</span>
																		</div>
																	</div>
																	<div className="d-flex align-items-center listingBlockLine">
																		<ul className="noMarginPad listStyleNone">
																			<li className="d-flex align-items-center">
																				<img src={require('../../assets/img/beds.svg').default} /><span
																					className="colorBlue">1-2</span> Beds
																			</li>
																			<li className="d-flex align-items-center ml-12">
																				<img src={require('../../assets/img/shower.svg').default} /><span
																					className="colorBlue">1-2</span> Baths
																			</li>
																		</ul>
																		<ul className="noMarginPad listStyleNone listIcon ml-18">
																			<li>
																				<img src={require('../../assets/img/detailImage1.svg').default} />
																			</li>
																			<li>
																				<img src={require('../../assets/img/detailImage2.svg').default} />
																			</li>
																			<li>
																				<img src={require('../../assets/img/detailImage3.svg').default} />
																			</li>
																			<li>
																				<img src={require('../../assets/img/detailImage4.svg').default} />
																			</li>
																		</ul>
																	</div>
																	<p className="descriptionProperty mb-0 fontSize12"><img className=""
																		src={require('../../assets/img/file.svg').default} />Special Pricing for
																		Seniors - 2882 Tyler St...<a href=""
																			className="purpleText">More</a></p>
																</div>
																<div className="widthRadio">
																	<div className="text-center">
																		<a href=""
																			className="fontSize16 font-weight700 text-center">Request
																			for<br />
																			more info</a>
																		<input type="radio" id="color-3" name="color"
																			value="color-3" checked />
																		<span>
																			<div>
																				<img src={require('../../assets/img/check.png').default}
																					alt="Checked Icon" />
																			</div>
																		</span>
																	</div>
																</div>
															</div>
														</label>
													</div>
												</div>
											</div>
											<div className="bottomFooter d-flex align-items-center">
												<h3>2 properties Selected</h3>
												<div className="ml-auto">
													<a href="" className="checkBtnModall" data-toggle="modal"
														data-target="#exampleModal3" data-dismiss="modal"
														aria-label="Close">Check Availability</a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="modal fade rentalModal availabilityModal" id="exampleModal3" tabindex="-1"
									role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
									<div className="modal-dialog modal-dialog-centered widthModal" role="document">
										<div className="modal-content">
											<div className="modal-header d-flex align-items-center">
												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
												<h5 className="modal-title fontSize16 font-weight400 ml-22"
													id="exampleModalLongTitle" style={{ color: "#fff" }}>Title</h5>
											</div>
											<div className="modal-body rentalForm availBodyBlock">
												<div className="thankyouBlock text-center">
													<img src={require('../../assets/img/thankYou.png').default} />
													<h1 className="font-weight700 colorBlue">Thank You</h1>
													<p className="fontSize18 font-weight400 secondaryColor">Your request has been
														submitted successfully</p>
													<a href="" className="doneBtn brdrRadius4">Done</a>
												</div>
											</div>
										</div>
									</div>
								</div>


								<div className="brdrLine"></div>

								{
									propamenities == [] || (propamenities.unit_amenities == 0 && propamenities.property_amenities == 0) ?
										null :
										<>
											{
												propdata.property_type == 'general' ?
													null :
													<><Amenities propamenities={propamenities} />
														<div className="brdrLine"></div></>
											}
											{/* <Amenities propamenities={propamenities} /> */}
											{/* <div className="brdrLine"></div> */}
										</>
								}

								{
									proputility == null || proputility.length == 0 ?

										null :
										<>
											<div className="amenitiesListing responsive15">
												<div className="row">
													<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
														<h3 className="font-weight700 colorBlue">Utility Allowances</h3>
													</div>
													<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
														<div className="row d-flex">
															<div className="col-lg-6 col-md-6 col-sm-12 col-xs-6 w-50">
																<div>
																	<p className="font-weight500 paraHeading">PAID BY TENANT</p>
																	<ul className="noMarginPad listStyleNone detailListing">


																		{
																			proputility[0].electric == '' && proputility[0].water == ''
																				&& proputility[0].sewer == '' && proputility[0].hot_water == ''
																				&& proputility[0].cooling == '' && proputility[0].cooking == ''
																				&& proputility[0].heat == '' ?
																				<li className="d-flex align-items-center">
																					<p className="mb-0">N/A</p>
																				</li>
																				:
																				<>
																					{
																						proputility.length !== 0 ?
																							(proputility[0].electric == 'tenant' ?
																								<li className="d-flex align-items-center">
																									<span className="brdrRadius4">
																										<img src={require('../../assets/img/tenant1.png').default} />
																									</span>
																									<p className="mb-0">Electric</p>
																								</li> :
																								null)
																							:
																							null
																					}

																					{
																						proputility.length !== 0 ?
																							(
																								proputility[0].water == 'tenant' ?
																									<li className="d-flex align-items-center">
																										<span className="brdrRadius4">
																											<img src={require('../../assets/img/manager1.png').default} />
																										</span>
																										<p className="mb-0">Water</p>
																									</li> :
																									null) : null
																					}

																					{
																						proputility.length !== 0 ?
																							(
																								proputility[0].sewer == 'tenant' ?
																									<li className="d-flex align-items-center">
																										<span className="brdrRadius4">
																											<img src={require('../../assets/img/tenant2.png').default} />
																										</span>
																										<p className="mb-0">Sewer</p>
																									</li> :
																									null) : null
																					}

																					{
																						proputility.length !== 0 ?
																							(
																								proputility[0].hot_water == 'tenant' ?
																									<li className="d-flex align-items-center">
																										<span className="brdrRadius4">
																											<img src={require('../../assets/img/manager2.png').default} />
																										</span>
																										<p className="mb-0">Hot Water</p>
																									</li> :
																									null) : null
																					}

																					{proputility.length !== 0 ?
																						(
																							proputility[0].cooling == 'tenant' ?
																								<li className="d-flex align-items-center">
																									<span className="brdrRadius4">
																										<img src={require('../../assets/img/tenant3.png').default} />
																									</span>
																									<p className="mb-0">Cooling</p>
																								</li> :
																								null) : null
																					}
																					{
																						proputility.length !== 0 ?
																							(
																								proputility[0].cooking == 'tenant' ?
																									<li className="d-flex align-items-center">
																										<span className="brdrRadius4">
																											<img src={require('../../assets/img/tenant4.png').default} />
																										</span>
																										<p className="mb-0">Cooking</p>
																									</li> : null) : null
																					}
																					{
																						proputility.length !== 0 ?
																							(
																								proputility[0].heat == 'tenant' ?
																									<li className="d-flex align-items-center">
																										<span className="brdrRadius4">
																											<img src={require('../../assets/img/tenant5.png').default} />
																										</span>
																										<p className="mb-0">Heat</p>
																									</li> :
																									null) : null
																					}
																				</>
																		}
																	</ul>
																</div>
															</div>
															<div className="col-lg-6 col-md-6 col-sm-12 col-xs-6 w-50">
																<div>
																	<p className="font-weight500 paraHeading">PAID BY MANAGER</p>
																	<ul className="noMarginPad listStyleNone detailListing">

																		{
																			proputility[0].electric == '' && proputility[0].water == ''
																				&& proputility[0].sewer == '' && proputility[0].hot_water == ''
																				&& proputility[0].cooling == '' && proputility[0].cooking == ''
																				&& proputility[0].heat == '' ?
																				<li className="d-flex align-items-center">
																					<p className="mb-0">N/A</p>
																				</li>
																				:
																				<>


																					{
																						proputility.length !== 0 ?


																							(
																								proputility[0].electric == 'manager' ?
																									<li className="d-flex align-items-center">
																										<span className="brdrRadius4">
																											<img src={require('../../assets/img/tenant1.png').default} />
																										</span>
																										<p className="mb-0">Electric</p>
																									</li> :
																									null) : null
																					}

																					{proputility.length !== 0 ?


																						(
																							proputility[0].water == 'manager' ?
																								<li className="d-flex align-items-center">
																									<span className="brdrRadius4">
																										<img src={require('../../assets/img/manager1.png').default} />
																									</span>
																									<p className="mb-0">Water</p>
																								</li> :
																								null) : null
																					}

																					{proputility.length !== 0 ?


																						(
																							proputility[0].sewer == 'manager' ?
																								<li className="d-flex align-items-center">
																									<span className="brdrRadius4">
																										<img src={require('../../assets/img/tenant2.png').default} />
																									</span>
																									<p className="mb-0">Sewer</p>
																								</li> :
																								null) : null
																					}

																					{proputility.length !== 0 ?


																						(
																							proputility[0].hot_water == 'manager' ?
																								<li className="d-flex align-items-center">
																									<span className="brdrRadius4">
																										<img src={require('../../assets/img/manager2.png').default} />
																									</span>
																									<p className="mb-0">Hot Water</p>
																								</li> :
																								null) : null
																					}

																					{
																						proputility.length !== 0 ?


																							(
																								proputility[0].cooling == 'manager' ?
																									<li className="d-flex align-items-center">
																										<span className="brdrRadius4">
																											<img src={require('../../assets/img/tenant3.png').default} />
																										</span>
																										<p className="mb-0">Cooling</p>
																									</li> :
																									null) : null
																					}
																					{proputility.length !== 0 ?


																						(
																							proputility[0].cooking == 'manager' ?
																								<li className="d-flex align-items-center">
																									<span className="brdrRadius4">
																										<img src={require('../../assets/img/tenant4.png').default} />
																									</span>
																									<p className="mb-0">Cooking</p>
																								</li> : null) : null
																					}
																					{
																						proputility.length !== 0 ?
																							(
																								proputility[0].heat == 'manager' ?
																									<li className="d-flex align-items-center">
																										<span className="brdrRadius4">
																											<img src={require('../../assets/img/tenant5.png').default} />
																										</span>
																										<p className="mb-0">Heat</p>
																									</li> :
																									null) : null
																					}
																				</>
																		}
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="brdrLine"></div>
										</>
								}

								{
									propdata.property_type == 'general' ?
										null
										:

										<>
											<div className="SectionBlock responsive15 officeHoursBlock">
												<h3 className="font-weight700 colorBlue">Office Hours</h3>
												<ul className="noMarginPad listStyleNone">
													<li>
														<p className="d-flex align-items-center font-weight500 colorBlue">Monday<span
															className="ml-auto font-weight400 secondaryColor">
															{
																propdetails.lease_office_time_open_monday == 0 && propdetails.lease_office_time_close_monday == 0 ?
																	'Closed' :
																	propdetails.lease_office_time_open_monday == 'Call' ?
																		<>
																			<img src={require('../../assets/img/call.svg').default} />Call {propdata.phone}
																		</>
																		:
																		propdetails.lease_office_time_open_monday == 'By Appt' ? 'by Appointment' :
																			`${propdetails.lease_office_time_open_monday.charAt(0) == '0' ? propdetails.lease_office_time_open_monday.substring(1) : propdetails.lease_office_time_open_monday}-${propdetails.lease_office_time_close_monday.charAt(0) == '0' ? propdetails.lease_office_time_close_monday.substring(1) : propdetails.lease_office_time_close_monday}`

															}
															{/* {propdetails.lease_office_time_open_monday} - {propdetails.lease_office_time_close_monday} */}
														</span></p>
													</li>
													<li>
														<p className="d-flex align-items-center font-weight500 colorBlue">Tuesday<span
															className="ml-auto font-weight400 secondaryColor">
															{propdetails.lease_office_time_open_tuesday == 0 && propdetails.lease_office_time_close_tuesday == 0 ?
																'Closed' :
																propdetails.lease_office_time_open_tuesday == 'Call' ? <>
																	<img src={require('../../assets/img/call.svg').default} />Call {propdata.phone}
																</> :
																	propdetails.lease_office_time_open_tuesday == 'By Appt' ? 'by Appointment' :
																		`${propdetails.lease_office_time_open_tuesday.charAt(0) == '0' ? propdetails.lease_office_time_open_tuesday.substring(1) : propdetails.lease_office_time_open_tuesday}-${propdetails.lease_office_time_close_tuesday.charAt(0) == '0' ? propdetails.lease_office_time_close_tuesday.substring(1) : propdetails.lease_office_time_close_tuesday}`
															}
															{/* {propdetails.lease_office_time_open_tuesday} - {propdetails.lease_office_time_close_tuesday} */}
														</span></p>
													</li>
													<li>
														<p className="d-flex align-items-center font-weight500 colorBlue">Wednesday<span
															className="ml-auto font-weight400 secondaryColor">
															{propdetails.lease_office_time_open_wednesday == 0 && propdetails.lease_office_time_close_wednesday == 0 ?
																'Closed' :
																propdetails.lease_office_time_open_wednesday == 'Call' ? <>
																	<img src={require('../../assets/img/call.svg').default} />Call {propdata.phone}
																</> :
																	propdetails.lease_office_time_open_wednesday == 'By Appt' ? 'by Appointment' :
																		`${propdetails.lease_office_time_open_wednesday.charAt(0) == '0' ? propdetails.lease_office_time_open_wednesday.substring(1) : propdetails.lease_office_time_open_wednesday}-${propdetails.lease_office_time_close_wednesday.charAt(0) == '0' ? propdetails.lease_office_time_close_wednesday.substring(1) : propdetails.lease_office_time_close_wednesday}`
															}
															{/* {propdetails.lease_office_time_open_wednesday} - {propdetails.lease_office_time_close_wednesday} */}
														</span></p>
													</li>
													<li>
														<p className="d-flex align-items-center font-weight500 colorBlue">Thursday<span
															className="ml-auto font-weight400 secondaryColor">
															{propdetails.lease_office_time_open_thursday == 0 && propdetails.lease_office_time_close_thursday == 0 ?
																'Closed' :
																propdetails.lease_office_time_open_thursday == 'Call' ?
																	<>
																		<img src={require('../../assets/img/call.svg').default} />Call {propdata.phone}
																	</>
																	:
																	propdetails.lease_office_time_open_thursday == 'By Appt' ? 'by Appointment' :
																		`${propdetails.lease_office_time_open_thursday.charAt(0) == '0' ? propdetails.lease_office_time_open_thursday.substring(1) : propdetails.lease_office_time_open_thursday}-${propdetails.lease_office_time_close_thursday.charAt(0) == '0' ? propdetails.lease_office_time_close_thursday.substring(1) : propdetails.lease_office_time_close_thursday}`
															}
															{/* {propdetails.lease_office_time_open_thursday} - {propdetails.lease_office_time_close_thursday} */}
														</span></p>
													</li>
													<li>
														<p className="d-flex align-items-center font-weight500 colorBlue">Friday<span
															className="ml-auto font-weight400 secondaryColor">
															{propdetails.lease_office_time_open_friday == 0 && propdetails.lease_office_time_close_friday == 0 ?
																'Closed' :
																propdetails.lease_office_time_open_friday == 'Call' ?
																	<>
																		<img src={require('../../assets/img/call.svg').default} />Call {propdata.phone}
																	</>
																	:
																	propdetails.lease_office_time_open_friday == 'By Appt' ? 'by Appointment' :
																		`${propdetails.lease_office_time_open_friday.charAt(0) == '0' ? propdetails.lease_office_time_open_friday.substring(1) : propdetails.lease_office_time_open_friday}-${propdetails.lease_office_time_close_friday.charAt(0) == '0' ? propdetails.lease_office_time_close_friday.substring(1) : propdetails.lease_office_time_close_friday}`
															}
															{/* {propdetails.lease_office_time_open_friday} - {propdetails.lease_office_time_close_friday} */}

														</span></p>
													</li>
													<li>
														<p className="d-flex align-items-center font-weight500 colorBlue">Saturday<span
															className="ml-auto font-weight400 secondaryColor">
															{propdetails.lease_office_time_open_sturday == 0 && propdetails.lease_office_time_close_sturday == 0 ?
																'Closed' :
																propdetails.lease_office_time_open_sturday == 'Call' ?
																	<>
																		<img src={require('../../assets/img/call.svg').default} />Call {propdata.phone}
																	</>
																	:
																	propdetails.lease_office_time_open_sturday == 'By Appt' ? 'by Appointment' :
																		`${propdetails.lease_office_time_open_sturday.charAt(0) == '0' ? propdetails.lease_office_time_open_sturday.substring(1) : propdetails.lease_office_time_open_sturday}-${propdetails.lease_office_time_close_sturday.charAt(0) == '0' ? propdetails.lease_office_time_close_sturday.substring(1) : propdetails.lease_office_time_close_sturday}`
															}
															{/* {propdetails.lease_office_time_open_sturday} - {propdetails.lease_office_time_close_sturday} */}
														</span></p>
													</li>
													{/* <li>
                                            <p className="d-flex align-items-center font-weight500 colorBlue">Saturday<span
                                                className="ml-auto font-weight400 secondaryColor">by Appointment</span></p>
                                        </li> */}
													<li>
														<p className="d-flex align-items-center font-weight500 colorBlue">Sunday<span className="ml-auto font-weight400 secondaryColor">
															{propdetails.lease_office_time_open_sunday == 0 && propdetails.lease_office_time_close_sunday == 0 ?
																'Closed' :
																propdetails.lease_office_time_open_sunday == 'Call' ?
																	<>
																		<img src={require('../../assets/img/call.svg').default} />Call {propdata.phone}
																	</>
																	:
																	propdetails.lease_office_time_open_sunday == 'By Appt' ? 'by Appointment' :
																		`${propdetails.lease_office_time_open_sunday.charAt(0) == '0' ? propdetails.lease_office_time_open_sunday.substring(1) : propdetails.lease_office_time_open_sunday}-${propdetails.lease_office_time_close_sunday.charAt(0) == '0' ? propdetails.lease_office_time_close_sunday.substring(1) : propdetails.lease_office_time_close_sunday}`
															}
															{/* {propdetails.lease_office_time_open_sunday} - {propdetails.lease_office_time_close_sunday} */}
														</span>

															{/* <img
                                                    src={require('../../assets/img/call.svg').default} />Call (626) 448-2699</span> */}
														</p>
													</li>
												</ul>
											</div>
											<div className="brdrLine"></div>
										</>
								}


								{/* Lease Terms seatiocn  */}
								{
									propdata.property_type == 'general' ?
										null
										:

										<>

											<div className="SectionBlock responsive15 leaseSec">
												<div className="row">
													<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
														<h3 className="font-weight700 colorBlue">Lease Terms</h3>
														{propdetails.lease_length !== '' ?
															<p className="font-weight400 colorBlue">
																{propdetails.lease_length}
															</p>
															:
															null

														}

														{/* // <p className="font-weight400 colorBlue">
                                            //     {propdetails.lease_length}
                                            // </p> */}
														{
															propdetails.subsidized == 'Yes' || propdetails.section8 == 'Yes' || propdetails.handicap == 'Yes' ?
																<>
																	<ul className="noMarginPad listStyleNone floatLeftList clearfix">

																		{propdetails.subsidized == 'Yes' || propdetails.section8 == 'Yes' ?
																			<li>
																				<img src={require('../../assets/img/lease1.svg').default} />
																			</li>
																			:
																			null
																		}
																		{
																			propdetails.handicap == 'Yes' ?
																				<li>
																					<img src={require('../../assets/img/lease2.svg').default} />
																				</li>
																				:
																				null
																		}





																	</ul>
																	<p className="font-weight400 fontSize12">This institution is an equal opportunity
																		provider.</p>
																</>
																:
																null
														}

														{/* // <ul className="noMarginPad listStyleNone floatLeftList clearfix">


                                            //     <li>
                                            //         <img src={require('../../assets/img/lease1.svg').default} />
                                            //     </li>


                                            //     <li>
                                            //         <img src={require('../../assets/img/lease2.svg').default} />
                                            //     </li> 


                                            // </ul>*/}

													</div>
													<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

														{
															(propdetails.pet_allowed == 'Yes' || propdetails.pet_allowed == 'Contact') && propdetails.other_term !== '' ?
																<h3 className="font-weight700 colorBlue">
																	Pet Policy</h3>
																:
																(propdetails.subsidized == 'Yes' || propdetails.section8 == 'Yes' || propdetails.handicap == 'Yes' ?

																	<>

																		{
																			(propdetails.pet_allowed == 'Yes' || propdetails.pet_allowed == 'Contact')
																				&& propdetails.other_term !== '' ?
																				<h3 className="font-weight700 colorBlue">
																					Other Terms</h3>
																				:
																				null
																		}
																	</>
																	:
																	null
																)
														}

														{
															(propdetails.pet_allowed == 'Yes' || propdetails.pet_allowed == 'Contact')
																&& propdetails.other_term !== '' ?
																<p className="colorBlue fontSize14 mb-0">
																	{propdetails.other_term}
																</p>
																:
																null
														}


														{/* <h3 className="font-weight700 colorBlue">
                                                Pet Policy</h3> */}
														{/* <p className="colorBlue fontSize14 mb-0">
                                                {propdetails.other_term}
                                                Residents are permitted to keep common
                                                household pets in their apartments. Service or assistance animals are also
                                                welcome. 

                                            </p> */}
													</div>
												</div>
											</div>
											<div className="brdrLine"></div>
										</>
								}



								{
									proprent == null || proprent.length == 0 ?
										null :
										<div className="fairmarketRent">
											<div className="fairMarketTitle d-flex align-items-center">
												<h3 className="mb-0 fontSize18 font-weight700 colorBlue">Fair Market Rents {capitaliseFirstLetterOfWord(propdata.property_city)}, {propdata.property_state}</h3>
												<p className="mb-0 ml-auto fontSize14 font-weight400 secondaryColor">As of {monthNames[d.getMonth()]} {d.getFullYear()}</p>
											</div>
											<p className="mb-0 secondaryColor fontSize16 font-weight400 mt-1">Fair Market Rents are HUD's
												determination of the average rents in a particular area for each bedroom size. The FMRs
												are set each year based on the rental rates of unsubsidized units so that participants
												in HUD programs have equal access for affordable housing. Here are the Fair Market Rents
												for {propdata.property_city}, {propdata.property_state}.</p>
											<div className="bedroomBox itemWebsite">
												<div className="bedroomBoxFlex">
													<p className="mb-0 secondaryColor fontSize14 font-weight400">Efficiency</p>
													<h4 className="mb-0 colorBlue font-weight700 fontSize16">${commaInNumber(proprent[0].fmr0)}</h4>
												</div>
												<div className="bedroomBoxFlex">
													<p className="mb-0 secondaryColor fontSize14 font-weight400">One-Bedroom</p>
													<h4 className="mb-0 colorBlue font-weight700 fontSize16">${commaInNumber(proprent[0].fmr1)}</h4>
												</div>
												<div className="bedroomBoxFlex">
													<p className="mb-0 secondaryColor fontSize14 font-weight400">Two-Bedroom</p>
													<h4 className="mb-0 colorBlue font-weight700 fontSize16">${commaInNumber(proprent[0].fmr2)}</h4>
												</div>
												<div className="bedroomBoxFlex">
													<p className="mb-0 secondaryColor fontSize14 font-weight400">Three-Bedroom</p>
													<h4 className="mb-0 colorBlue font-weight700 fontSize16">${commaInNumber(proprent[0].fmr3)}</h4>
												</div>
												<div className="bedroomBoxFlex">
													<p className="mb-0 secondaryColor fontSize14 font-weight400">Four-Bedroom</p>
													<h4 className="mb-0 colorBlue font-weight700 fontSize16">${commaInNumber(proprent[0].fmr4)}</h4>
												</div>
											</div>


											<div className="itemMobile">
												<div className="bedroomBox2">
													<div className="d-flex align-items-top w-100">
														<div className="w-50 brdrRight">
															<ul className="noMarginPad listStyleNone">
																<li>
																	<p className="mb-0 fontSize14 font-weight400 secondaryColor">Efficiency
																	</p>
																	<h5 className="mb-0 colorBlue font-weight700">${commaInNumber(proprent[0].fmr0)}</h5>
																</li>
																<li>
																	<p className="mb-0 fontSize14 font-weight400 secondaryColor">One-Bedroom
																	</p>
																	<h5 className="mb-0 colorBlue font-weight700">${commaInNumber(proprent[0].fmr1)}</h5>
																</li>
																<li>
																	<p className="mb-0 fontSize14 font-weight400 secondaryColor">Two-Bedroom
																	</p>
																	<h5 className="mb-0 colorBlue font-weight700">${commaInNumber(proprent[0].fmr2)}</h5>
																</li>
															</ul>
														</div>
														<div className="w-50 padLeft16">
															<ul className="noMarginPad listStyleNone">
																<li>
																	<p className="mb-0 fontSize14 font-weight400 secondaryColor">
																		Three-Bedroom</p>
																	<h5 className="mb-0 colorBlue font-weight700">${commaInNumber(proprent[0].fmr3)}</h5>
																</li>
																<li>
																	<p className="mb-0 fontSize14 font-weight400 secondaryColor">
																		Four-Bedroom</p>
																	<h5 className="mb-0 colorBlue font-weight700">${commaInNumber(proprent[0].fmr4)}</h5>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>



										</div>
								}

								{/* <div className="fairmarketRent responsive15">
                                    <div className="d-flex align-items-center">
                                        <h5 className="mb-0 fontSize18 font-weight700 colorBlue">{propdata.property_city} Fair Market Rents</h5>
                                        <p className="mb-0 ml-auto fontSize14 font-weight400 secondaryColor">as of February 2021</p>
                                    </div>
                                    <p className="mb-0 secondaryColor fontSize16 font-weight400 mt-1">Fair Market Rents are HUD's
                                        determination of the average rents in a particular area for each bedroom size. The FMRs
                                        are set each year based on the rental rates of unsubsidized units so that participants
                                        in HUD programs have equal access for affordable housing. Here are the Fair Market Rents
                                        for {propdata.property_city}, {propdata.property_state}:</p>
                                    <div className="bedroomBox itemWebsite">
                                        <div className="bedroomBoxFlex">
                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">Efficiency</p>
                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">${proprent.fmr0}</h4>
                                        </div>
                                        <div className="bedroomBoxFlex">
                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">One-Bedroom</p>
                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">${proprent.fmr1}</h4>
                                        </div>
                                        <div className="bedroomBoxFlex">
                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">Two-Bedroom</p>
                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">${proprent.fmr2}</h4>
                                        </div>
                                        <div className="bedroomBoxFlex">
                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">Three-Bedroom</p>
                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">${proprent.fmr3}</h4>
                                        </div>
                                        <div className="bedroomBoxFlex">
                                            <p className="mb-0 secondaryColor fontSize14 font-weight400">Four-Bedroom</p>
                                            <h4 className="mb-0 colorBlue font-weight700 fontSize16">${proprent.fmr4}</h4>
                                        </div>
                                    </div>


                                    <div className="itemMobile">
                                        <div className="bedroomBox2">
                                            <div className="d-flex align-items-top w-100">
                                                <div className="w-50 brdrRight">
                                                    <ul className="noMarginPad listStyleNone">
                                                        <li>
                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">Efficiency
                                                            </p>
                                                            <h5 className="mb-0 colorBlue font-weight700">$200</h5>
                                                        </li>
                                                        <li>
                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">One-Bedroom
                                                            </p>
                                                            <h5 className="mb-0 colorBlue font-weight700">$600</h5>
                                                        </li>
                                                        <li>
                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">Two-Bedroom
                                                            </p>
                                                            <h5 className="mb-0 colorBlue font-weight700">$700</h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="w-50 padLeft16">
                                                    <ul className="noMarginPad listStyleNone">
                                                        <li>
                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                Three-Bedroom</p>
                                                            <h5 className="mb-0 colorBlue font-weight700">$900</h5>
                                                        </li>
                                                        <li>
                                                            <p className="mb-0 fontSize14 font-weight400 secondaryColor">
                                                                Four-Bedroom</p>
                                                            <h5 className="mb-0 colorBlue font-weight700">$1,200</h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
								{
									propdata.property_type == 'general' ?
										<>
											{
												prophousingAuthority == undefined || prophousingAuthority == [] || prophousingAuthority == null ?
													null
													:
													<>
														<div className="titleHeading res24Top marginTop24 responsive15">
															<h3 className="fontSize18 font-weight700">Housing Authorities near {capitaliseFirstLetterOfWord(propdata.property_city)}, {propdata.property_state}</h3>
														</div>
														<HousingAuthorityforGeneral prophousingAuthority={prophousingAuthority} />
														<div className="brdrLine"></div>
													</>
											}

										</>
										:
										<>
											<div className="fairmarketRent responsive15">
												<Emailsubs2 />
											</div>
										</>

								}

								<div className="brdrLine"></div>


								<div>
									<GoogleADS placeholderId='618' width='728px' height='90px' slotno='3956446321' />
									{/* <ins class="adsbygoogle"
                                        style={{
                                            display: "inline-block"
                                            // , width: `100%`, height: `100%`
                                        }}
                                        data-ad-client={GOOGLEADSCLIENTID}
                                        data-ad-slot={'3956446321'}></ins> */}

									{/* old rhd code  */}
									{/* <ins class="adsbygoogle"
                                        style="display:inline-block;width:728px;height:90px"
                                        data-ad-client="ca-pub-2836217214879103"
                                        data-ad-slot="6372819974"></ins> */}
								</div>


								<div className="SectionBlock responsive15 neighborhoodSec">
									<h3 className="font-weight700 colorBlue">Neighborhoods Nearby {propdata.property_title}, {capitaliseFirstLetterOfWord(propdata.property_city)}, {propdata.property_state}</h3>
									<ul className="noMarginPad listStyleNone">

										<li>
											<div className="media d-flex align-items-center ">

												{
													propwalkscore !== [] || propwalkscore !== null || propwalkscore !== '' || propwalkscore !== undefined ?
														propwalkscore.status == 1 ?
															<>
																<CircularBar propwalkscore={propwalkscore.walkscore} />
																<div className="media-body">
																	<div className="mt-0 d-flex align-items-center mb-0">
																		<span>
																			<img src={require('../../assets/img/walkScore.svg').default} />
																		</span>
																		<h6 className="font-weight500 mb-0">Walk Score</h6>
																	</div>
																	<p className="mb-0 para fontSize16">{propdata.property_title} is very walkable and have good walk score.
																		Most errands can be accomplished on foot.
																		{/* {
                                                                            propwalkscore.walkscore >= 90 && propwalkscore.walkscore <= 100 ?
                                                                            ("walker's paradise and have good walk score. Don't"
                                                                                'very walkable and have good walk score. Most errands can be accomplished on foot.' 

                                                                                // propwalkscore.walkscore >= 70 && propwalkscore.walkscore <= 89 ?
                                                                                
                                                                                 :
                                                                                null

                                                                        } */}


																	</p>
																</div>
															</>
															:
															<>
																<CircularBar propwalkscore={'N/A'} />
																<div className="media-body">
																	<div className="mt-0 d-flex align-items-center mb-0">
																		<span>
																			<img src={require('../../assets/img/walkScore.svg').default} />
																		</span>
																		<h6 className="font-weight500 mb-0">Walk Score</h6>
																	</div>
																	<p className="mb-0 para fontSize16">{propdata.property_title} is
																		{

																		}
																		very walkable
																		and
																		have good walk score.
																		Most errands can be accomplished on foot.

																	</p>
																</div>
															</>
														:
														null
												}
												{/* <div className="media-body">
                                                    <div className="mt-0 d-flex align-items-center mb-0">
                                                        <span>
                                                            <img src={require('../../assets/img/walkScore.svg').default} />
                                                        </span>
                                                        <h6 className="font-weight500 mb-0">Walk Score</h6>
                                                    </div>
                                                    <p className="mb-0 para fontSize16">{propdata.property_title} is
                                                        {

                                                        }
                                                        very walkable
                                                        and
                                                        have good walk score.
                                                        Most errands can be accomplished on foot.

                                                    </p>
                                                </div> */}

											</div>

										</li>

										<li>
											<div className="media d-flex align-items-center ">
												{
													propwalkscore !== [] || propwalkscore !== null || propwalkscore !== '' || propwalkscore !== undefined ?
														propwalkscore.transit_score == 'N/A' ?

															<CircularBar propwalkscore={'N/A'} />
															:
															<CircularBar propwalkscore={propwalkscore.transit_score} />

														:
														null
												}
												<div className="media-body">
													<div className="mt-0 d-flex align-items-center mb-0">
														<span>
															<img src={require('../../assets/img/transit.svg').default} />
														</span>
														<h6 className="font-weight500 mb-0">Transit Score</h6>
													</div>
													<p className="mb-0 para fontSize16">{propdata.property_title} has good transit
														score meaning many nearby public transportation options are available.</p>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div className="mapSection posRel">
									<SinglePointMap propdata={propdata} />
								</div>
								<div className="brdrLine"></div>

								{
									propdetails.seniorprop == 'Yes' ?

										null
										:
										<>

											<SchoolItem schoolnearby={schoolnearby} />

											{/* <div className="itemMobile responsive15">
                                                <ul className="noMarginPad listStyleNone agendtailList">
                                                    <li>
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <div className="d-flex align-items-center">
                                                                    <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella Vista
                                                                        Elementary</h5>
                                                                </div>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323) 721-4335</p>
                                                                <div className="d-flex align-items-center w-100 listTop12">
                                                                    <div className="w-50">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li>
                                                                                <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                                </h5>
                                                                                <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                    Urban Center</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="w-50">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li>
                                                                                <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                                    Monterey Park, CA</h5>
                                                                                <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                    City,State</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="brdrLinee"></li>
                                                    <li>
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <div className="d-flex align-items-center">
                                                                    <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella Vista
                                                                        Elementary</h5>
                                                                </div>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323) 721-4335</p>
                                                                <div className="d-flex align-items-center w-100 listTop12">
                                                                    <div className="w-50">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li>
                                                                                <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                                </h5>
                                                                                <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                    Urban Center</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="w-50">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li>
                                                                                <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                                    Monterey Park, CA</h5>
                                                                                <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                    City,State</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="brdrLinee"></li>
                                                    <li>
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <div className="d-flex align-items-center">
                                                                    <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella Vista
                                                                        Elementary</h5>
                                                                </div>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323) 721-4335</p>
                                                                <div className="d-flex align-items-center w-100 listTop12">
                                                                    <div className="w-50">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li>
                                                                                <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                                </h5>
                                                                                <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                    Urban Center</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="w-50">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li>
                                                                                <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                                    Monterey Park, CA</h5>
                                                                                <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                    City,State</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="brdrLinee"></li>
                                                    <li>
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <div className="d-flex align-items-center">
                                                                    <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella Vista
                                                                        Elementary</h5>
                                                                </div>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323) 721-4335</p>
                                                                <div className="d-flex align-items-center w-100 listTop12">
                                                                    <div className="w-50">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li>
                                                                                <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                                </h5>
                                                                                <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                    Urban Center</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="w-50">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li>
                                                                                <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                                    Monterey Park, CA</h5>
                                                                                <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                    City,State</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="brdrLinee"></li>
                                                    <li>
                                                        <div className="media">
                                                            <div className="media-body">
                                                                <div className="d-flex align-items-center">
                                                                    <h5 className="mt-0 mb-0 fontSize16 font-weight500 colorBlue">Bella Vista
                                                                        Elementary</h5>
                                                                </div>
                                                                <p className="mb-0 fontSize14 font-weight500 secondaryColor">(323) 721-4335</p>
                                                                <div className="d-flex align-items-center w-100 listTop12">
                                                                    <div className="w-50">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li>
                                                                                <h5 className="mb-0 fontSize16 font-weight500 colorBlue">N/A
                                                                                </h5>
                                                                                <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                    Urban Center</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="w-50">
                                                                        <ul className="noMarginPad listStyleNone">
                                                                            <li>
                                                                                <h5 className="mb-0 fontSize16 font-weight500 colorBlue">
                                                                                    Monterey Park, CA</h5>
                                                                                <p className="mb-0 secondaryColor font-weight500 fontSize12">
                                                                                    City,State</p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div> */}
										</>

								}

								{/* // <div className="responsive15">
                                //     <div className="titleHeading">
                                //         <h3 className="fontSize18 font-weight700">Schools Nearby</h3>
                                //     </div>
                                //     <SchoolItem schoolnearby={schoolnearby} />
                                // </div> */}


								<div className="SectionBlock responsive15 availabilitySection">
									<div className="d-flex mb-2 align-items-center">
										<h2 className="colorBlue font-weight700 mb-0">Check Availability

											{
												propdata.property_type == 'general' ?
													` in ${propdata.property_title} ${capitaliseFirstLetterOfWord(propdata.property_city)}, ${propdata.property_state}`
													:
													null
											}
										</h2>
										<div className="ml-auto">

											{
												propdata.phone == '' || propdata.phone == null ?
													null
													:
													<p className="purpleText font-weight700 fontSize18 mb-0 d-flex align-items-center">
														<img src={require('../../assets/img/phoneColored.svg').default} />
														<span>{propdata.phone}</span>
													</p>
											}

										</div>
									</div>
									<CheckAvailibilityForm
										isitdoubleModal={false}
										controlThankYouModal={toggleModalThankYou}
										controlAvailabilityModal={toggleModalAvailability}
										propid={propdetails.id_property}
										message={`Hi, I am interested in ${propdata.property_title}. Please send me current availability and any additional criteria that must be met to be considered for occupancy. Thanks!`} />
								</div>

							</div>
						</div>

						{/* Right side section  */}


						<div className="col-lg-4 col-md-8 col-sm-12 col-xs-12 itemWebsite">
							<div className="detailRightSec">
								<div className="checkAvailability">
									<div className="d-flex align-items-center">

										{
											propdata.property_type == 'general' ?
												<div className="dealTag font-weight700 brdrRadius4 d-flex align-items-center">
													Affordable Housing
												</div>

												:
												<div className="dealTag font-weight700 brdrRadius4 d-flex align-items-center">
													{specialtitle}
												</div>

										}


										{/* <div className="dealTag font-weight700 brdrRadius4 d-flex align-items-center">
                                            <img src={require('../../assets/img/goodDeal.svg').default} /> 
                                            {specialtitle}
                                        </div> */}



										{
											propdata.property_type == 'general' ?
												<div className="ml-auto">
													<h2 className="mb-0 font-weight700">
														CALL
													</h2>
												</div>
												:
												(
													(thirdval !== '' && thirdval !== 'MOVE-IN SPECIALS') || (thirdval == 'MOVE-IN SPECIALS') ?

														<div className="ml-auto">
															<h2 className="mb-0 font-weight700">
																{thirdval}
															</h2>
														</div>
														:
														null
												)
										}
										{/* <div className="ml-auto">
                                            <h2 className="mb-0 font-weight700">
                                                thirdval
                                            </h2>
                                        </div> */}
									</div>


									{
										propdata.property_type == 'general' ?
											<ul className="noMarginPad listStyleNone floatLeftList clearfix detailList">
												<li className="secondaryColor">
													<span className="colorBlue">
														{beddesc}
														{
															bathinfogeneral == null || bathinfogeneral == '' || bathinfogeneral == undefined ?
																null :

																bathinfogeneral
														}
														&nbsp;for estimated
													</span>
												</li>

											</ul> :
											<ul className="noMarginPad listStyleNone floatLeftList clearfix detailList">
												<li className="secondaryColor">
													<span className="colorBlue">{specialtext}</span>
												</li>
											</ul>
									}


									{/* <ul className="noMarginPad listStyleNone floatLeftList clearfix detailList">
                                        <li className="secondaryColor">
                                            <span className="colorBlue">{specialtext}</span>
                                        </li>
                                         <li className="secondaryColor">
                                            <span className="colorBlue">{decimalRoundOff(propdetails.min_bath)}</span> Ba
                                        </li>
                                        <li className="secondaryColor ml-16">
                                            <span className="colorBlue">
                                            </span> Sq.ft
                                        </li>
                                        <li className="secondaryColo ml-16">
                                            <span className="colorBlue">Affordable Housing</span>
                                        </li> 
                                    </ul>*/}
									<div className="brdrLine mar-15"></div>
									<div className="sideFormBlock">
										<div className="SectionBlock responsive15 availabilitySection">
											<div className="d-flex align-items-center">
												<h2 className="colorBlue font-weight700 fontSize18">Check Availability
													{
														propdata.property_type == 'general' ?
															` for ${propdata.property_title} ${capitaliseFirstLetterOfWord(propdata.property_city)}, ${propdata.property_state}`
															:
															null
													}
												</h2>
											</div>
											<div className="ml-auto">

												{
													propdata.phone == '' || propdata.phone == null ?
														null

														:

														<p className="colorGreen font-weight700 fontSize18">
															<img
																src={require('../../assets/img/callGreen.svg').default} className="twentyfourbytwentyfour" />{propdata.phone}</p>

												}
											</div>
											<CheckAvailibilityForm
												isitdoubleModal={false}
												controlThankYouModal={toggleModalThankYou}
												controlAvailabilityModal={toggleModalAvailability}
												propid={propdata.id_property}
												message={`Hi, I am interested in ${propdata.property_title}. Please send me current availability and any additional criteria that must be met to be considered for occupancy. Thanks!`} />
										</div>
									</div>
								</div>

								<div style={{ "margin-top": '24px' }}>
									{/* <ins class="adsbygoogle"
                                        style={{
                                            display: "inline-block"
                                            // , width: `100%`, height: `100%`
                                        }}
                                        data-ad-client={GOOGLEADSCLIENTID}
                                        data-ad-slot={'6857091773'}></ins> */}


									{/* old rhd code  */}
									{/* <ins class="adsbygoogle"
                                        style="display:inline-block;width:300px;height:600px"
                                        data-ad-client="ca-pub-2836217214879103"
                                        data-ad-slot="2072690303"></ins> */}

									<GoogleADS placeholderId='632' width='300px' height='250px' slotno='6857091773' />
								</div>

								<IncomeLimitsAccordion propdetails={propdetails} specialtitle={specialtitle} subsidized={propdetails.subsidized} />

								{
									propdata.property_type == 'general' ? null :
										<ManagementCompanyAccordion propmancom={propmancom} />
								}
								{
									propdata.property_type == 'general' ?
										<AffordableHousingAccordian propmancom={propaffordable} />
										:
										null
								}

								<div style={{ "margin-top": '24px' }}>
									<GoogleADS placeholderId='631' width='300px' height='250px' slotno='3854651772' />
								</div>

								<AffordabilityCal />
								<CityCountyQuickFacts propincome={propincome} />
								<div style={{ "margin-top": '24px' }}>
									{/* <ins class="adsbygoogle"
                                        style={{
                                            display: "inline-block"
                                            // , width: `100%`, height: `100%`
                                        }}
                                        data-ad-client={GOOGLEADSCLIENTID}
                                        data-ad-slot={'1505526895'}></ins> */}


									{/* old rhd code  */}
									{/* <ins class="adsbygoogle"
                                        style="display:inline-block;width:300px;height:600px"
                                        data-ad-client="ca-pub-2836217214879103"
                                        data-ad-slot="2072690303"></ins> */}

									<GoogleADS placeholderId='149' width='300px' height='600px' slotno='1505526895' />
								</div>
							</div>
						</div>
						<div className="brdrLine"></div>
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<section className="secPad24 housingNearby resPonsivePad">
								<div className="">

									<div className="row marginTop">
										<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pl-0 pr-0">
											<PropertiesNearby propertynearby={nearbypropdata} titletext={
												propdata.property_type == 'general' ?
													`Affordable Properties Nearby ${capitaliseFirstLetterOfWord(propdata.property_city)}, ${propdata.property_state}` : `Affordable Properties Nearby`} />
										</div>
									</div>
								</div>
							</section>
						</div>

						<div>
							{/* <ins class="adsbygoogle"
                                style={{
                                    display: "inline-block"
                                    // , width: `100%`, height: `100%`
                                }}
                                data-ad-client={GOOGLEADSCLIENTID}
                                data-ad-slot={'7791749557'}></ins> */}


							{/* old rhd code  */}
							{/* <ins class="adsbygoogle"
                                style="display:inline-block;width:728px;height:90px"
                                data-ad-client="ca-pub-2836217214879103"
                                data-ad-slot="6372819974"></ins> */}


							<GoogleADS placeholderId='145' width='970px' height='250px' slotno='7791749557' />
						</div>


						<div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
							<div className="titleHeading botttomDetailSec localAdd">
								<h3 className="fontSize24 font-weight700">

									Local Information for&nbsp;
									{proplocalinfo.city_name[0].hasOwnProperty('name') ?
										proplocalinfo.city_name[0].name :
										proplocalinfo.city_name[0].city_name
									}
								</h3>
								{/* <p className="Seminole Gardens Apartments" */}
								<p className="fontSize16 font-weight400 colorBlue" dangerouslySetInnerHTML={{ __html: replaceSpace(proplocalinfo.city_name[0].info) }} />

								{/* <p className="Seminole Gardens ApartmentsSeminole Gardens ApartmentsSeminole Gardens Apartments">Anaheim is a city inhabited by over 300 thousand
                                    individuals, making it the most populous in Orange County, California. When it comes to the
                                    land area, however, Anaheim comes in second in the county, next to Irvine.</p>
                                <p className="fontSize16 font-weight400 colorBlue">The city of Anaheim is quite famous for its theme
                                    parks, convention center, sports teams, and other various tourist attractions. To most of
                                    the locals and tourists though, the vibrancy of the city and its many diverse cultures and
                                    traditions is what made them fall in love with Anaheim.</p>
                                <p className="fontSize16 font-weight400 colorBlue">On the other hand, the housing condition in this
                                    rather beautiful city is really not as difficult as it may seem. Granted that the state of
                                    California was one of those that were hit quite hard during the housing crisis and the
                                    recession, the housing opportunities in the city of Anaheim has actually gotten better since
                                    then.</p>
                                <h3 className="fontSize18 font-weight700">Affordable Housing in Anaheim, CA</h3>
                                <p className="fontSize16 font-weight400 colorBlue">In this city, the Anaheim Housing Authority (AHA)
                                    is the agency responsible for the proper administration of public housing programs, rental
                                    assistance, and other community development projects aimed at the revitalization of the
                                    city’s neighborhoods.</p>
                                <p className="fontSize16 font-weight400 colorBlue">There are many housing programs managed by the
                                    housing authority and administered to the low income families, senior citizens, and the
                                    physically and mentally challenged individuals of the city. There are affordable apartment
                                    deals for people looking to rent and the downpayment assistance program for families looking
                                    to buy their first home.</p>
                                <p className="fontSize16 font-weight400 colorBlue">There are different ways to receive housing
                                    assistance in the city of Anaheim. You just have to know what they are, and whether or not
                                    you are eligible for the low income housing tax credit and other housing programs they might
                                    have available.</p>
                                <h3 className="fontSize18 font-weight700">Rental Assistance in Anaheim, CA</h3>
                                <p className="fontSize16 font-weight400 colorBlue">The Section 8 Voucher Program, or Housing Choice
                                    Voucher (HCV), is the main rental assistance program provided by the housing authority to
                                    the residents of Anaheim. Funded by the US Department of Housing and Urban Development
                                    (HUD), the HCV promotes equal housing opportunities to the economically-challenged families
                                    who participate in the program.</p>
                                <p className="fontSize16 font-weight400 colorBlue">If you qualify for the HCV program, you can opt
                                    for decent rental housing deals in the private sector. This means that if you receive rental
                                    assistance from the agency through the Section 8 Voucher program, you won’t have to stay in
                                    public housing. Your family deserves better, so find your place now and get your loved ones
                                    a good place to live in.</p> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="bottom-boxa" style={{ position: "fixed", bottom: 0, width: "100%", "z-index": 9999999, background: "#fff" }}>
				<div className="">
					<div className="bottom-box">
						<div className="checkAvailability newBoxBottom">
							{/* <div className="d-flex align-items-center">

                                {post.details == null ||
                                    post.details == "" ? null : post.details.subsidized == "Yes" &&
                                        post.details.section8 == "Yes" ?

                                    <>

                                        <div className="dealTag font-weight700 brdrRadius4 d-flex align-items-center">
                                            <img src={require('../../assets/img/goodDeal.svg').default} />Good Deal
                                        </div>
                                        <div className="ml-auto">
                                            <h2 className="mb-0 font-weight700" style={{ color: "#1BC47D" }}>
                                                {
                                                    propdata.property_type == 'general' ?
                                                        'CALL'
                                                        :
                                                        (thirdval !== null || thirdval !== '' ?
                                                            thirdval :
                                                            null)
                                                }
                                            </h2>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="ml-auto">
                                            <h2 className="mb-0 font-weight700" style={{ color: "#000" }}>
                                                {
                                                    propdata.property_type == 'general' ?
                                                        'CALL'
                                                        :
                                                        (thirdval !== null || thirdval !== '' ?
                                                            thirdval :
                                                            null)
                                                }
                                            </h2>
                                        </div>
                                    </>
                                }

                            </div> */}
							{/* <ul className="noMarginPad listStyleNone floatLeftList clearfix detailList d-flex align-items-center" style={{ "margin-top": "8px" }}>

                                {
                                    propdetails.min_bed && propdetails.max_bed ?

                                        <li className="secondaryColor">
                                            <span className="colorBlue">{propdetails.min_bed}-{propdetails.max_bed}</span> Bd
                                        </li>

                                        :
                                        propdetails.min_bed || propdetails.max_bed ?

                                            <li className="secondaryColor">
                                                <span className="colorBlue"> {propdetails.min_bed || propdetails.max_bed}</span> Bd
                                            </li>


                                            :

                                            <li className="secondaryColor">
                                                <span className="colorBlue"> N/A</span> Bd
                                            </li>

                                }



                                {
                                    propdetails.min_bath && propdetails.max_bath ?


                                        <li className="secondaryColor ml-2">
                                            <span className="colorBlue">{decimalRoundOff(propdetails.min_bath)}-{decimalRoundOff(propdetails.max_bath)}</span> Ba
                                        </li>

                                        :
                                        propdetails.min_bath || propdetails.max_bath ?

                                            <li className="secondaryColor ml-2">
                                                <span className="colorBlue">{decimalRoundOff(propdetails.min_bath) || decimalRoundOff(propdetails.max_bath)}</span> Ba
                                            </li>


                                            :

                                            <li className="secondaryColor ml-16">
                                                <span className="colorBlue">N/A</span> Ba
                                            </li>


                                }

                                {
                                    propfloor.length == 0 ?

                                        <li className="secondaryColor ml-16">
                                            <span className="colorBlue"> N/A</span> Sq.ft
                                        </li>


                                        :
                                        propfloor[0].square_feet_from == propfloor[propfloor.length - 1].square_feet_to ?
                                            <li className="secondaryColor ml-16">
                                                <span className="colorBlue">  {propfloor[0].square_feet_from == 0 || propfloor[0].square_feet_from == '0' ?
                                                    'N/A' : propfloor[0].square_feet_from}</span> Sq.ft
                                            </li>


                                            :


                                            <li className="secondaryColor ml-16">
                                                <span className="colorBlue"> {propfloor[0].square_feet_from} - {propfloor[propfloor.length - 1].square_feet_to}</span> Sq.ft
                                            </li>

                                }

                                {
                                    propdata.property_type == 'general' ?

                                        <li className="secondaryColo ml-auto">
                                            <span className="colorBlue">Affordable Housing</span>
                                        </li>


                                        :

                                        <li className="secondaryColo ml-auto">
                                            <span className="colorBlue">{specialtitle}</span>
                                        </li>


                                }


                            </ul> */}
							<div className="d-flex align-items-center responsive15 flex-wrap p-0 justify-content-center" style={{ "margin-top": "0px" }}>

								{propdata.phone == '' || propdata.phone == null ?
									<div className="lineBlueBtn">
										<a href="javascript:;" >Call</a>
									</div>
									:

									<div className="lineBlueBtn">
										<a href={`tel:${propdata.phone}`}>Call</a>
									</div>
								}

								<div className="Resnoauto emailFillBtn">

									<a href="javascript:;" onClick={() => { toggleModalAvailability() }} className="brdrRadius4 transition" >Email
									</a>
								</div>
							</div>


						</div>
					</div>
				</div>


				<Modal isOpen={isOpenQualify}
					onRequestClose={toggleModalQualify} className="prerental agencydetail-modal modalclassqualify">

					<div className='modal-content'>


						<div className="modal-header">
							<h5 className="modal-title w-100 text-center font-weight700"
								id="exampleModalLabel">Pre-Rental Qualify</h5>
							<button type="button" className="close"
								aria-label="Close" onClick={toggleModalQualify}>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>


						<div className="modal-body">
							<form onSubmit={handleSubmit}>
								<div className="row">
									<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pr-0">
										<div className="form-group">
											<label for="exampleInputEmail1">First Name <span
												className="labelMark">*</span></label>
											<input type="text" className="form-control" id=""
												aria-describedby="emailHelp"
												placeholder="First Name"
												value={formData.name} onChange={(e) => setformData({ ...formData, name: e.target.value })} required />
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pr-0">
										<div className="form-group">
											<label for="">Last Name<span
												className="labelMark">*</span></label>
											<input type="text" className="form-control"
												placeholder="Last Name"
												value={formData.lastname} onChange={(e) => setformData({ ...formData, lastname: e.target.value })} required />
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div className="form-group">
											<label for="">Email Address <span
												className="labelMark">*</span></label>
											<input type="email" className="form-control" id=""
												aria-describedby="emailHelp"
												placeholder="Email Address"
												value={formData.emailid} onChange={(e) => setformData({ ...formData, emailid: e.target.value })} required />
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-0">
										<div className="form-group">
											<label for="">Phone Number <span
												className="labelMark">*</span></label>
											<input type="number" className="form-control" id=""
												aria-describedby="emailHelp"
												placeholder="Phone Number"
												value={formData.phone} onChange={(e) => setformData({ ...formData, phone: e.target.value })} required />
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div className="form-group">
											<label for="exampleInputEmail1">Address </label>
											<input type="text" className="form-control" id=""
												aria-describedby="emailHelp" placeholder="Address"
												value={formData.address} onChange={(e) => setformData({ ...formData, address: e.target.value })} required />
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-0">
										<div className="form-group">
											<label for="">City</label>
											<input type="text" className="form-control" id=""
												aria-describedby="emailHelp"
												placeholder="City"
												value={formData.city} onChange={(e) => setformData({ ...formData, city: e.target.value })} required />
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pr-0">
										<div className="form-group">
											<label
												for="exampleFormControlSelect1">State</label>
											<select className="form-control"
												id="exampleFormControlSelect1"
												value={formData.state} onChange={(e) => setformData({ ...formData, state: e.target.value })} required >
												{statelist.length == 0 ?
													<option>No states found</option>
													:
													statelist.map((val) => {
														return (
															<option>{val.state_abbreviation}</option>
														);
													})
												}

											</select>
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
										<div className="form-group">
											<label for="">ZIP</label>
											<input type="number" className="form-control"
												id="" aria-describedby="emailHelp"
												placeholder="ZIP"
												value={formData.zip} onChange={(e) => setformData({ ...formData, zip: e.target.value })} required />
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-0">
										<div className="form-group">
											<label for="">Move-In Date</label>
											<div className="posRel calnderIcon">
												<input type="date" className="form-control" id=""
													aria-describedby="emailHelp"
													placeholder="Move-In Date"
													value={formData.date} onChange={(e) => setformData({ ...formData, date: e.target.value })} required />
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pr-0">
										<div className="form-group">
											<label for="">Occupants</label>
											<select className="form-control"
												id="exampleFormControlSelect1"
												value={formData.occupants} onChange={(e) => setformData({ ...formData, occupants: e.target.value })} required >
												{
													numberofoccupants.map((val) => {
														return (
															<option>{val}</option>
														);
													})
												}

											</select>

											{/* <div className="posRel calnderIcon">
                                                <input type="number"
                                                    className="form-control" id=""
                                                    aria-describedby="emailHelp"
                                                    placeholder="Number of occupants"
                                                    value={formData.occupants} onChange={(e) => setformData({ ...formData, occupants: e.target.value })} required />
                                            </div> */}
										</div>
									</div>
									<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
										<div className="form-group">
											<label for="">Monthly Income</label>
											<input type="number" className="form-control"
												id="" aria-describedby="emailHelp"
												placeholder="Income"
												value={formData.monthlyIncome} onChange={(e) => setformData({ ...formData, monthlyIncome: e.target.value })} required />
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<label>Do you have a voucher?</label>
										<div className="d-flex radioMarginBlock">
											<div className="form-check">
												<input
													type="radio"
													className="form-check-input"
													value={"Yes"}
													name="priority"
													onChange={onradioChange}
												/>
												<label className="form-check-label">Yes</label>
											</div>
											<div className="form-check">
												<input
													type="radio"
													value={"No"}
													className="form-check-input"
													name="priority"
													onChange={onradioChange}
												/>
												<label className="form-check-label">No</label>
											</div>
											<div className="form-check">
												<input
													type="radio"
													value={"On Waiting List"}
													className="form-check-input"
													name="priority"
													onChange={onradioChange}
												/>
												<label className="form-check-label">On waiting list</label>
											</div>
										</div>

										{/* <button onClick={onClick}> Click Value </button> */}
									</div>
									{/* <p>{radiobutton}</p> */}
								</div>
								<div className="brdrLine"></div>
								<div className="condiBlock form-group">
									<h5 className="fontSize14 font-weight700">Disclaimer/Terms of
										Conditions:</h5>

									<p className="secondaryColor fontSize14 mb-0 maxParaScroll">
										This is NOT an application for rental assistance. It is only being forwarded for review by the selected Housing Agency, Management Company or Property Owner who determine eligibility and approval. Receipt of your information does not guarantee acceptance in any rental assistance program, nor will it place you on any waiting list. Further information will be required to determine your eligibility for any Rental Assistance program and approval for a selected unit and you are responsibile for continuing the qualification process.By clicking on the Submit button below, you agree that you have read, understand, and accept these terms and conditions.
									</p>
									{/* <textarea className="form-control"
                                            id="exampleFormControlTextarea1" rows="3"
                                            value={formData.disclaimer}
                                            placeholder="This is NOT an application for rental assistance. It is only being forwarded for review by the selected Housing Agency, Management Company or Property Owner who determine eligibility and approval. Receipt of your information does not guarantee acceptance in any rental assistance program, nor will it place you on any waiting list. Further information will be required to determine your eligibility for any Rental Assistance program and approval for a selected unit and you are responsibile for continuing the qualification process.By clicking on the Submit button below, you agree that you have read, understand, and accept these terms and conditions."></textarea> */}

								</div>
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pl-0 pr-0">
									<div className="form-group">
										{/* <ReCAPTCHA */}
										{/* <div className="recaptcha_block">
											<ReCAPTCHA
												sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
												onChange={captchaHandle} />
										</div>
										{
											captchaValue == false
												?
												<span>Please Varify Captcha</span>
												:
												null

										} */}
										<div
											className="g-recaptcha"
											data-sitekey={'6Ld3X8ggAAAAAAKaJ5gDXpXHyJPQsE83lvQrI9Uh'}
											data-size="invisible"
										></div>
										{captchaValue === false ? (
											<span style={{ color: "red" }}>
												Our System Found a bot on your browser
											</span>
										) : null}
									</div>
								</div>
								<div className="modal-footer brdrNoneTop p-0">
									<button type="submit"
										// onClick={captchacheck}
										className="btn w-100 modalSubmitBtn fontSize16 font-weight500 colorWhite">Submit</button>
								</div>
							</form>
						</div>

					</div>
				</Modal>



				<Modal isOpen={isOpenImage}
					onRequestClose={toggleModalImage} className="allphotos">



					<div className="modal-header d-flex align-items-center posRel alignitemstart">
						<h5 className="modal-title fontSize16 font-weight400"
							id="exampleModalLongTitle">
							{propdata.property_address} {propdata.property_city}, {propdata.property_state} {propdata.property_zip} Rental Deals&nbsp;
							{
								propdetails.length == 0 ? "" : ` ${propdetails.min_bed} Br. ${decimalRoundOff(propdetails.min_bath)} Ba $${propdetails.min_rent}`
							}
							{propdata.phone}
						</h5>
						<div className="ml-auto d-flex align-items-center marginCross">
							{/* <a href="" className="modalCheck colorWhite">Check Availability</a> */}
							<ul className="noMarginPad listStyleNone sideActionIcon">
								<li className="brdrRadius4 itemWebsite">
									<i className="far fa-heart lightbluemodified"></i>
									{/* <img src={require('../../assets/img/redHeart.png').default} /> */}
								</li>
								<li className="brdrRadius4 itemWebsite mr-0">
									<img src={require('../../assets/img/share.svg').default} />
								</li>
							</ul>
						</div>

						<button type="button" className="close closeModl"
							aria-label="Close" onClick={toggleModalImage}>
							<span aria-hidden="true" >&times;</span>
						</button>
					</div>

					<div className="modal-body rentalForm availBodyBlock propertyDetlModal">
						<div className="">
							<div className="boxscroll4 scrollBodyPopUp">
								<div className="wrapperScroll">
									<div className="row justify-content-md-center">
										<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
											<div className="modalPop">
												{propimages.map((data) => (
													// <ImageSliderCarouselItem data={data} />
													// {console.log()}
													// console.log()
													<div className="modalListImage">
														<img src={`https://managers.rentalhousingdeals.com/${data.photo}`} />
													</div>
												))}

												{/* <div className="modalListImage">
                                                    <img
                                                        src={require('../../assets/img/propertyDetailModalPhoto.png').default} />
                                                </div>
                                                <div className="modalListImage">
                                                    <img
                                                        src={require('../../assets/img/propertyDetailModalPhoto2.png').default} />
                                                </div> */}
											</div>
										</div>
										{/* <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="modalLeft">
                                                <img src={require('../../assets/img/modalSidePopup.png').default} />
                                            </div>
                                        </div> */}
										<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
											<div className="sideFormBlock">
												<div
													className="SectionBlock responsive15 availabilitySection">
													<div className="d-flex align-items-center">
														<h2 className="colorBlue font-weight700 fontSize18">
															Check Availability</h2>
														<div className="ml-auto">

															{propdata.phone == null || propdata.phone == '' ?
																null
																:
																<p
																	className="purpleText font-weight700 fontSize18 itemWebsite">
																	<img
																		src={require('../../assets/img/phoneColored.svg').default} />
																	{propdata.phone}
																</p>

															}


														</div>
													</div>
													<CheckAvailibilityForm
														propid={propdetails.id_property}
														isitdoubleModal={'Image'}
														controlThankYouModal={toggleModalThankYou}
														controlAvailabilityModal={toggleModalAvailability}
														controlImageModal={toggleModalImage}
														message={`Hi, I am interested in ${propdata.property_title}. Please send me current availability and any additional criteria that must be met to be considered for occupancy. Thanks!`} />


												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Modal>



				<Modal isOpen={isOpenAvailability}
					onRequestClose={toggleModalAvailability} className="propertdetailmodal modaladjustment">
					<div className="modal-header d-flex align-items-center">
						{/* <h5 className="modal-title fontSize16 font-weight400 ml-22"
							id="exampleModalLongTitle">
							{propdata.property_address} {propdata.property_city}, {propdata.property_state} {propdata.property_zip} Rental Deals&nbsp;
							{
								propdetails.length == 0 ? "" : ` ${propdetails.min_bed} Br. ${decimalRoundOff(propdetails.min_bath)} Ba $${propdetails.min_rent}`
							}
							{propdata.phone}
						</h5> */}
						<button type="button" className="close" onClick={toggleModalAvailability} aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body rentalForm availBodyBlock">
						<div className="row">
							{/* <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
								<div className="modalLeft">
									<div className="imageSecleftModal posRel">
										{
											propimages == '' || propimages == null || propimages == undefined || propimages.length == 0 ?
												<img className="imgmodal" src={`https://managers.rentalhousingdeals.com/images/l_thumbs/affordable-no-image.jpg`} />

												:
												<img className="imgmodal" src={`https://managers.rentalhousingdeals.com/${propimages[0].photo}`} />

										}
										<div className="sliderTagName brdrRadius4 colorWhite font-weight700">
											{specialtitle}</div>
									</div>
									<div className="d-flex align-items-center">
										<div className="lefttitle">
											<h5 className="mb-0 fontSize18 font-weight700 colorBlue">
												{propdata.property_title}
											</h5>
											<p className="mb-0 fontSize16 font-weight400 secondaryColor">
												{propdata.property_address} {propdata.property_city}, {propdata.property_state} {propdata.property_zip}</p>
										</div>
										<div className="ml-auto">
											<img src={require('../../assets/img/goodDeal.svg').default} />
										</div>
									</div>
									<div className="sliderListing">
										<ul className="clearfix d-flex align-items-center">
											<li className="fontSize17"><b>{propdetails.min_bed == 0 || propdetails.min_bed == '' ? 'N/A' : propdetails.min_bed}</b>Bd </li>
											<li className="fontSize17"><b>{propdetails.min_bath == 0 || propdetails.min_bath == '' ? 'N/A' : decimalRoundOff(propdetails.min_bath)}</b>Ba </li>
											<li className="fontSize17"><b>

												{
													propfloor.length == 0 ? <>N/A</> :

														propfloor[0].square_feet_from

												}

											</b>Sq.Ft</li>
											<li className="ml-auto boldTag greenText fontSize24">${propdetails.min_rent}</li>
										</ul>
									</div>
									<p className="para fontSize14 font-weight400 secondaryColor" dangerouslySetInnerHTML={{ __html: replaced }} />


								</div>
							</div> */}
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div className="sideFormBlock">
									<div className="SectionBlock responsive15 availabilitySection">
										<div className="d-flex align-items-center">
											<h2 className="colorBlue font-weight700 fontSize18">Check
												Availability</h2>
										</div>
										<div className="ml-auto">
											{
												propdata.phone == '' || propdata.phone == null ?
													null
													:
													<p className="purpleText font-weight700 fontSize18"><img
														src={require('../../assets/img/phoneColored.svg').default} />{propdata.phone}</p>
											}

										</div>

										<CheckAvailibilityForm
											submitButtonFull="true"
											propid={propdetails.id_property}
											isitdoubleModal={true}
											controlThankYouModal={toggleModalThankYou}
											controlAvailabilityModal={toggleModalAvailability}
											message={`Hi, I am interested in ${propdata.property_title}. Please send me current availability and any additional criteria that must be met to be considered for occupancy. Thanks!`} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</Modal>



				<Modal isOpen={isOpenThankYou}
					onRequestClose={toggleModalThankYou} className="testmodala modalVertCentr mod">


					<div className="modal-header newlatter text-center">

						<img src={require('../../assets/img/logo-modal.png').default} className="" />

						<button type="button" className="close ml-auto newlatter" onClick={toggleModalThankYou} aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>



					<div className="modal-body">

						<div className="modal-body rentalForm availBodyBlock text-center">


							<h3 className="font-weight700 fontSize24">Thanks for submitting your inquiry!</h3>
							<p className="font-weight400 fontSize16 ">
								Your message has been sent</p>
							{/* <button onClick={() => {
        toggleModalThankYou();
    }} className=" brdrRadius4 ml-auto asd">Done</button> */}
						</div>

						<a className="recommendsection" href="https://secure.rspcdn.com/xprr/red/PID/921/SID/thankyou,detailspg" target="_blank" onClick={toggleModalThankYou}>

							<h3>Recommended Step:</h3>
							<p className="fontSize16 font-weight400 para">Landlords oftern favour applicants with high score. Do you know your credit score? Click below to see yours for free!
							</p>

							<button className="transition">SEE SCORES NOW</button>

						</a>

					</div>

				</Modal>







				{/* <Modal isOpen={isopenschool}
                    onRequestClose={toggleisopenschool} className="prerental">
                    <div className="modal-header">
                        <h5 className="modal-title w-100 text-center font-weight700"
                            id="exampleModalLabel">Pre-Rental Qualify</h5>
                        <button type="button" className="close"
                            aria-label="Close" onClick={toggleisopenschool}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        hellow
                    </div>
                </Modal> */}
			</section>

			{/* <Carousel 
                // swipeable={false}
                // draggable={false}
                // showDots
                responsive={responsive}
                // ssr={true} // means to render carousel on server-side.
                infinite
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={1000}
            // keyBoardControl={true}
            // customTransition="all .5"
            // transitionDuration={500}
            // containerclassName="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            // dotListclassName="custom-dot-list-style"
            // itemclassName="carousel-item-padding-40-px"
            >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel> */}



			<Helmet>
				<script type="text/javascript">
					{adsHeadScript}
				</script>
			</Helmet>


		</>
	)
}

export default PropertyDetailPage