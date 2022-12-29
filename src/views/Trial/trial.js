import React, { useState, useEffect } from 'react'
import { First } from 'react-bootstrap/esm/PageItem';
import { elementSearchInArray, findHighestCountCity } from '../../containers/functions';

const Trial = () => {


    // const data = [
    //     {
    //         "ordval": 1,
    //         "pt": "premium",
    //         "property": {
    //             "id_property": 34734,
    //             "property_title": "Las Palomas",
    //             "property_address": "2001 Hopewell Street",
    //             "property_city": "Santa Fe",
    //             "property_county": "Santa Fe",
    //             "property_type": "premium",
    //             "property_state": "NM",
    //             "property_zip": "87505",
    //             "prog_type": "affordablehousing",
    //             "phone": "(505) 984-8887 ",
    //             "description": "If you plan on settling down in Santa Fe, New Mexico then look no further! Stop by Las Palomas Apartments and check out one of the prized properties in downtown Santa Fe. Filled with vibrant and lively attractions, these apartments offer great amenities and affordable living for anyone who is interested. Located at the heart of a bustling commercial and business center, these apartments will be sure to amaze.<br /><br />Las Palomas Apartments offers spacious Studio and two-bedroom garden-style apartments. Amenities include two resort-style swimming pools, four state of the art laundry facilities scattered throughout the community, and a great new management and leasing team that will be there to help you out with anything you need.<br /><br />There are boundless opportunities and attractions surrounding this property, and many of them offer a great way for you as a resident to get out and see Santa Fe! Within walking distance is the Santa Fe University of Art and Design, a strong and active campus that adds a modern touch to an already great community. Four local parks are also within walking distance for your public enjoyment as you please! Restaurants, auto shops, and grocery stores are among the other attractions and amenities that this community has to offer to you.",
    //             "lat": "35.661328732967",
    //             "lng": "-105.97195722163",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "0",
    //             "max_bath": "1",
    //             "min_bath": "1",
    //             "subsidized": "Yes",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "Common",
    //             "handicap": "Yes",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": {
    //             "rent_from": 0,
    //             "rent_to": 0
    //         },
    //         "property_photo": {
    //             "photo": "uploaded/Las Palomas.jpg"
    //         },
    //         "property_rating": {
    //             "vote_avg": 5
    //         },
    //         "property_deals": {
    //             "header_description": "1",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "a:1:{i:0;s:0:\"\";}",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14063,
    //             "property_title": "Redlands Apts",
    //             "property_address": "5901 Redlands Rd NW",
    //             "property_city": "Albuquerque",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87120",
    //             "prog_type": "",
    //             "phone": "505.839.5313",
    //             "description": "",
    //             "lat": "35.1188160000000000",
    //             "lng": "-106.7044870000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14144,
    //             "property_title": "La Cieneguita Elderly Housing",
    //             "property_address": "1601 LA CIENEQUITA",
    //             "property_city": "SANTA FE",
    //             "property_county": "Santa Fe",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87507",
    //             "prog_type": "",
    //             "phone": "505.988.2859",
    //             "description": "",
    //             "lat": "35.6650803000000000",
    //             "lng": "-105.9884975000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36685,
    //             "property_title": "La Villa Elena Apartments",
    //             "property_address": "201 Villa Elena Lane",
    //             "property_city": "Bernalillo",
    //             "property_county": "Sandoval",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87004",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "35.3172065",
    //             "lng": "-106.5467033",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/22416.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14047,
    //             "property_title": "Encino Gardens",
    //             "property_address": "412 ALVARADO ST SE",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87108",
    //             "prog_type": "",
    //             "phone": "(505) 266-7736",
    //             "description": "",
    //             "lat": "35.0736640000000000",
    //             "lng": "-106.5813770000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14048,
    //             "property_title": "Encino Terrace",
    //             "property_address": "609 ENCINO PL NE",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87102",
    //             "prog_type": "",
    //             "phone": "(505) 247-4185",
    //             "description": "",
    //             "lat": "35.0874730000000000",
    //             "lng": "-106.6341130000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14065,
    //             "property_title": "Saint Anthony's Plaza Apartments",
    //             "property_address": "1750 INDIAN SCHOOL ROAD, NW.",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87104",
    //             "prog_type": "",
    //             "phone": "(505) 766-5619",
    //             "description": "",
    //             "lat": "35.1079380000000000",
    //             "lng": "-106.6645270000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "4",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14145,
    //             "property_title": "Sangre De Cristo Apartments",
    //             "property_address": "1801 ESPINACITAS ST",
    //             "property_city": "SANTA FE",
    //             "property_county": "Santa Fe",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87505",
    //             "prog_type": "",
    //             "phone": "(505) 984-1856",
    //             "description": "",
    //             "lat": "35.6615556000000000",
    //             "lng": "-105.9673598000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "4",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36686,
    //             "property_title": "La Vista Del Rio Apartments",
    //             "property_address": "911 Avenida Canada",
    //             "property_city": "Espanola",
    //             "property_county": "Santa Fe",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87532",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "35.999433",
    //             "lng": "-106.039252",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "3",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/6950.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14049,
    //             "property_title": "Frank Gray House Apartments",
    //             "property_address": "1105 GEORGIA ST NE",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87110",
    //             "prog_type": "",
    //             "phone": "(505) 268-5295",
    //             "description": "",
    //             "lat": "35.0885970000000000",
    //             "lng": "-106.5722690000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "Yes",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14066,
    //             "property_title": "Sandia Vista Apartments",
    //             "property_address": "901 TRAMWAY BLVD NE",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87123",
    //             "prog_type": "",
    //             "phone": "(505) 298-4461",
    //             "description": "",
    //             "lat": "35.0811650000000000",
    //             "lng": "-106.4982460000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "3",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14146,
    //             "property_title": "Santa Fe Apartments",
    //             "property_address": "255 CAMINO ALIRE",
    //             "property_city": "SANTA FE",
    //             "property_county": "Santa Fe",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87501",
    //             "prog_type": "",
    //             "phone": "(505) 983-2260",
    //             "description": "",
    //             "lat": "35.6842560000000000",
    //             "lng": "-105.9657970000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "3",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36689,
    //             "property_title": "Las Vegas Apts",
    //             "property_address": "2505 Collins Drive",
    //             "property_city": "Las Vegas",
    //             "property_county": "San Miguel",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87701",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "35.621472",
    //             "lng": "-105.222182",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "3",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/6943.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14033,
    //             "property_title": "Agua Azul Apts",
    //             "property_address": "353 Camino Azul NW",
    //             "property_city": "Albuquerque",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87121",
    //             "prog_type": "",
    //             "phone": "505-831-7014",
    //             "description": "",
    //             "lat": "35.0847650000000000",
    //             "lng": "-106.7128110000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "Yes",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14050,
    //             "property_title": "Gene Gilbert Manor",
    //             "property_address": "1001 Valencia S.E.",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87108",
    //             "prog_type": "",
    //             "phone": "505.452-1553",
    //             "description": "",
    //             "lat": "35.0637079000000000",
    //             "lng": "-106.5808725000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "Yes",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14067,
    //             "property_title": "Solar Villas",
    //             "property_address": "1135 TEXAS ST NE",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87110",
    //             "prog_type": "",
    //             "phone": "(505) 266-1976",
    //             "description": "",
    //             "lat": "35.0902320000000000",
    //             "lng": "-106.5562700000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14147,
    //             "property_title": "Santa Fe Homeward Bound Apts",
    //             "property_address": "3454 Cerrillios Rd",
    //             "property_city": "Santa Fe",
    //             "property_county": "Santa Fe",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87507",
    //             "prog_type": "",
    //             "phone": "505.471.1174",
    //             "description": "",
    //             "lat": "35.6456190000000000",
    //             "lng": "-106.0045770000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36696,
    //             "property_title": "Mondel Apartments 1011 Main St",
    //             "property_address": "1011 Main Street",
    //             "property_city": "Los Lunas",
    //             "property_county": "Valencia",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87031",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "34.803559",
    //             "lng": "-106.706588",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/6956.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14034,
    //             "property_title": "Ahepa 501 - Iii Apartments",
    //             "property_address": "6620 Bluewater NW",
    //             "property_city": "Albuquerque",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87121",
    //             "prog_type": "",
    //             "phone": "505-839-9487",
    //             "description": "",
    //             "lat": "35.0856330000000000",
    //             "lng": "-106.7131409000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14051,
    //             "property_title": "Hibernian House Senior Housing",
    //             "property_address": "624 Coal Ave, SW",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87102",
    //             "prog_type": "",
    //             "phone": "505-830-9808",
    //             "description": "",
    //             "lat": "35.0791901000000000",
    //             "lng": "-106.6414509000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14068,
    //             "property_title": "Vern Jolly House Apartments",
    //             "property_address": "1600 BOATRIGHT DR NE",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87112",
    //             "prog_type": "",
    //             "phone": "(505) 268-5295",
    //             "description": "",
    //             "lat": "35.0982970000000000",
    //             "lng": "-106.5480300000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "Yes",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14148,
    //             "property_title": "Villa Consuelo Apartments",
    //             "property_address": "1200 CAMINO CONSUELO",
    //             "property_city": "SANTA FE",
    //             "property_county": "Santa Fe",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87505",
    //             "prog_type": "",
    //             "phone": "(505) 471-0565",
    //             "description": "",
    //             "lat": "35.6510691000000000",
    //             "lng": "-105.9963814000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36697,
    //             "property_title": "Mountain Vista Apts",
    //             "property_address": "600 San Ildefonso Rd",
    //             "property_city": "Los Alamos",
    //             "property_county": "Los Alamos",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87544",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "35.892002",
    //             "lng": "-106.287656",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/6965.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14035,
    //             "property_title": "Ahepa 501 Apts",
    //             "property_address": "6800 LOS VOLCANES RD",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87121",
    //             "prog_type": "",
    //             "phone": "(505) 839-6909",
    //             "description": "",
    //             "lat": "35.0898480000000000",
    //             "lng": "-106.7167270000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14052,
    //             "property_title": "La Resolana Apartments",
    //             "property_address": "1025 CHELWOOD PARK BLVD NE",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87112",
    //             "prog_type": "",
    //             "phone": "(505) 296-1425",
    //             "description": "",
    //             "lat": "35.0893439000000000",
    //             "lng": "-106.5072670000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14069,
    //             "property_title": "Villa Esperanza",
    //             "property_address": "3901 LAFAYETTE DR NE",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87107",
    //             "prog_type": "",
    //             "phone": "(505) 881-7991",
    //             "description": "",
    //             "lat": "35.1265240000000000",
    //             "lng": "-106.6094020000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "4",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36702,
    //             "property_title": "North Star Apts",
    //             "property_address": "333 Chico Drive",
    //             "property_city": "Las Vegas",
    //             "property_county": "San Miguel",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87701",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "35.623262",
    //             "lng": "-105.219963",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "3",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/6949.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14036,
    //             "property_title": "Ahepa 501 Ii",
    //             "property_address": "6700 Los Volcanes Rd NW",
    //             "property_city": "Albuquerque",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87121",
    //             "prog_type": "",
    //             "phone": "505- 833-3139",
    //             "description": "",
    //             "lat": "35.0901090000000000",
    //             "lng": "-106.7155630000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14053,
    //             "property_title": "Mesa Hills Apartments",
    //             "property_address": "1000 Louisiana Blvd NE",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87110",
    //             "prog_type": "",
    //             "phone": "(505) 255-0674",
    //             "description": "",
    //             "lat": "35.0901351000000000",
    //             "lng": "-106.5683777000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14070,
    //             "property_title": "Westwood Village Apartments",
    //             "property_address": "901 68TH STREET, NW",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87121",
    //             "prog_type": "",
    //             "phone": "(505) 831-1177",
    //             "description": "",
    //             "lat": "35.0989069000000000",
    //             "lng": "-106.7154470000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "3",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36643,
    //             "property_title": "Casa Alegre Apts",
    //             "property_address": "408 Mtn View Drive",
    //             "property_city": "Las Vegas",
    //             "property_county": "San Miguel",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87701",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "35.61643",
    //             "lng": "-105.2201934",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/6946.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36710,
    //             "property_title": "Q U Max Apartments",
    //             "property_address": "47 Miera  P O Box 608",
    //             "property_city": "Cuba",
    //             "property_county": "Sandoval",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87013",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "36.021095",
    //             "lng": "-106.888683",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "3",
    //             "min_bed": "2",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/6932.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14037,
    //             "property_title": "Albuquerque Silvercrest Residences",
    //             "property_address": "4400 PAN AMERICAN FWY NE",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87107",
    //             "prog_type": "",
    //             "phone": "(505) 883-1068",
    //             "description": "",
    //             "lat": "35.1300389000000000",
    //             "lng": "-106.6102080000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14054,
    //             "property_title": "Montgomery Manor Apartments",
    //             "property_address": "4301 MORRIS STREET, NE.",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87111",
    //             "prog_type": "",
    //             "phone": "(505) 296-9023",
    //             "description": "",
    //             "lat": "35.1314260000000000",
    //             "lng": "-106.5255990000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "4",
    //             "min_bed": "2",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14097,
    //             "property_title": "Villa Del Norte",
    //             "property_address": "710 LA JOYA ST",
    //             "property_city": "ESPANOLA",
    //             "property_county": "Rio Arriba",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87532",
    //             "prog_type": "",
    //             "phone": "(505) 753-9611",
    //             "description": "",
    //             "lat": "36.0002497000000000",
    //             "lng": "-106.0629119000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36644,
    //             "property_title": "Casa Alegre II Apts LP",
    //             "property_address": "400 Mtn View Drive",
    //             "property_city": "Las Vegas",
    //             "property_county": "San Miguel",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87701",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "35.616429",
    //             "lng": "-105.22021",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/6947.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36718,
    //             "property_title": "San Miguel Sr Apts",
    //             "property_address": "333 Chico Dr  P O Box 499",
    //             "property_city": "Las Vegas",
    //             "property_county": "San Miguel",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87701",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "35.623159",
    //             "lng": "-105.21983",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/6948.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14038,
    //             "property_title": "Brentwood Gardens Apartments",
    //             "property_address": "6302 HARPER PL NE",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87109",
    //             "prog_type": "",
    //             "phone": "(505) 821-0818",
    //             "description": "",
    //             "lat": "35.1506260000000000",
    //             "lng": "-106.5827230000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14055,
    //             "property_title": "Mountain View Ii Apts",
    //             "property_address": "2323 KATHRYN AVE, SE.",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87106",
    //             "prog_type": "",
    //             "phone": "505-266-5455",
    //             "description": "",
    //             "lat": "35.0657079000000000",
    //             "lng": "-106.6207246000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "3",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14125,
    //             "property_title": "Monte Vista Apartments",
    //             "property_address": "500 MOUNTAIN VIEW DR",
    //             "property_city": "LAS VEGAS",
    //             "property_county": "San Miguel",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87701",
    //             "prog_type": "",
    //             "phone": "(505) 454-0098",
    //             "description": "",
    //             "lat": "35.6165428000000000",
    //             "lng": "-105.2201760000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "3",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36654,
    //             "property_title": "Collins Drive Apts",
    //             "property_address": "2505 Collins Drive",
    //             "property_city": "Las Vegas",
    //             "property_county": "San Miguel",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87701",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "35.621472",
    //             "lng": "-105.222182",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/6942.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36719,
    //             "property_title": "Sandia Vista Apts",
    //             "property_address": "492 Camino Don Tomas",
    //             "property_city": "Bernalillo",
    //             "property_county": "Sandoval",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87004",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "35.3196152",
    //             "lng": "-106.5518527",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "3",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/6933.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14039,
    //             "property_title": "Canyon Point Apartments",
    //             "property_address": "301 WESTERN SKIES DR SE",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87123",
    //             "prog_type": "",
    //             "phone": "(505) 294-3108",
    //             "description": "",
    //             "lat": "35.0667390000000000",
    //             "lng": "-106.5097840000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "3",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14056,
    //             "property_title": "Mountain View Iii Apartments",
    //             "property_address": "1333 Columbia Street SE",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87106",
    //             "prog_type": "",
    //             "phone": "505-266-5455",
    //             "description": "",
    //             "lat": "35.0681410000000000",
    //             "lng": "-106.6180930000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "3",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14126,
    //             "property_title": "Vista Gallinas Apartments",
    //             "property_address": "2525 Ridge Runner Road",
    //             "property_city": "Las Vegas",
    //             "property_county": "San Miguel",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87701",
    //             "prog_type": "",
    //             "phone": "505-255-3643",
    //             "description": "",
    //             "lat": "35.6206958000000000",
    //             "lng": "-105.2290209000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36657,
    //             "property_title": "Depot Apartments",
    //             "property_address": "701 West Maple",
    //             "property_city": "Moriarty",
    //             "property_county": "Torrance",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87035",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "34.988799",
    //             "lng": "-106.05434",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "3",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/6953.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36720,
    //             "property_title": "Santa Clara Apts",
    //             "property_address": "816 Chamisal",
    //             "property_city": "Espanola",
    //             "property_county": "Rio Arriba",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87532",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "36.0040518",
    //             "lng": "-106.0595995",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/6931.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14040,
    //             "property_title": "Canyon Ridge Apartments",
    //             "property_address": "200 Figueroa St NE",
    //             "property_city": "Albuquerque",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87123",
    //             "prog_type": "",
    //             "phone": "(505) 299-8066",
    //             "description": "",
    //             "lat": "35.0705830000000000",
    //             "lng": "-106.5075540000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "3",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14057,
    //             "property_title": "New Life Homes 2",
    //             "property_address": "330 Airport Dr SW",
    //             "property_city": "Albuquerque",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87121",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "35.0752370000000000",
    //             "lng": "-106.7126800000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "Yes",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14128,
    //             "property_title": "Los Alamos Group Home",
    //             "property_address": "2056 PEACH STREET",
    //             "property_city": "LOS ALAMOS",
    //             "property_county": "Los Alamos",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87544",
    //             "prog_type": "",
    //             "phone": "(505) 662-4703",
    //             "description": "",
    //             "lat": "35.8845260000000000",
    //             "lng": "-106.3024100000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "Yes",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36663,
    //             "property_title": "Encantada Apts",
    //             "property_address": "300 Canal Blvd.",
    //             "property_city": "Los Lunas",
    //             "property_county": "Valencia",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87031",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "34.8116383",
    //             "lng": "-106.7455204",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/6964.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14041,
    //             "property_title": "Center For Behavioral Services Homes",
    //             "property_address": "3024 SOL DE VIDA NW",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87120",
    //             "prog_type": "",
    //             "phone": "(505) 341-2000",
    //             "description": "",
    //             "lat": "35.1182740000000000",
    //             "lng": "-106.7060660000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "3",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "Yes",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14058,
    //             "property_title": "New Life Homes 3",
    //             "property_address": "6801 Gwin Rd SW",
    //             "property_city": "Albuquerque",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87121",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "35.0753770000000000",
    //             "lng": "-106.7115110000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14139,
    //             "property_title": "Casa Milagro",
    //             "property_address": "49 CAMINO BAJO ROAD",
    //             "property_city": "SANTA FE",
    //             "property_county": "Santa Fe",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87502",
    //             "prog_type": "",
    //             "phone": "505.474.7684",
    //             "description": "",
    //             "lat": "35.5856430000000000",
    //             "lng": "-106.0446730000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "Yes",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36673,
    //             "property_title": "Gallinas Valley",
    //             "property_address": "2612 7th Street",
    //             "property_city": "Las Vegas",
    //             "property_county": "San Miguel",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87701",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "35.620746",
    //             "lng": "-105.2254065",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "3",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/20871.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14042,
    //             "property_title": "Concha Ortiz Y Pino De Kleven Apartments",
    //             "property_address": "4139 MESA VERDE AVE NE",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87110",
    //             "prog_type": "",
    //             "phone": "(505) 268-5295",
    //             "description": "",
    //             "lat": "35.0886799000000000",
    //             "lng": "-106.5963630000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "Yes",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14059,
    //             "property_title": "New Life Homes 5",
    //             "property_address": "9901 Benavides Rd SW",
    //             "property_city": "Albuquerque",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87121",
    //             "prog_type": "",
    //             "phone": "505-830-9808",
    //             "description": "",
    //             "lat": "35.0526780000000000",
    //             "lng": "-106.7413550000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14140,
    //             "property_title": "Challenge New Mexico Grp Home One",
    //             "property_address": "1888 CALLE QUEDO",
    //             "property_city": "SANTA FE",
    //             "property_county": "Santa Fe",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87501",
    //             "prog_type": "",
    //             "phone": "(505) 988-7621",
    //             "description": "",
    //             "lat": "35.6523670000000000",
    //             "lng": "-105.9590080000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36678,
    //             "property_title": "Hillcrest Manor Apartments 383 Canal Blvd Sw",
    //             "property_address": "Hillcrest Manor Apts 383 Canal Blvd Sw  383 Canal Blvd Sw",
    //             "property_city": "Los Lunas",
    //             "property_county": "Valencia",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87031",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "34.811146",
    //             "lng": "-106.74699",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/6960.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14043,
    //             "property_title": "David Specter Shalom House Apts",
    //             "property_address": "5500 WYOMING BLVD., NE",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87109",
    //             "prog_type": "",
    //             "phone": "(505) 823-1433",
    //             "description": "",
    //             "lat": "35.1417100000000000",
    //             "lng": "-106.5503899000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14060,
    //             "property_title": "New Life Homes 6",
    //             "property_address": "9901 Benavides Rd SW",
    //             "property_city": "Albuquerque",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87121",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "35.0526780000000000",
    //             "lng": "-106.7413550000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14141,
    //             "property_title": "Challenge New Mexico Grp Home Two",
    //             "property_address": "1868 VISTA DEL SUR",
    //             "property_city": "SANTA FE",
    //             "property_county": "Santa Fe",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87505",
    //             "prog_type": "",
    //             "phone": "(505) 988-7621",
    //             "description": "",
    //             "lat": "35.6538040000000000",
    //             "lng": "-105.9587880000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "Yes",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36679,
    //             "property_title": "Hillside Apartments LTD",
    //             "property_address": "379 Canal Blvd Sw",
    //             "property_city": "Los Lunas",
    //             "property_county": "Valencia",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87031",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "34.8105887",
    //             "lng": "-106.74744",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/6959.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14044,
    //             "property_title": "Edward Romero Terrace",
    //             "property_address": "8100 Central Avenue SE",
    //             "property_city": "Albuquerque",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87108",
    //             "prog_type": "",
    //             "phone": "505-232-8880",
    //             "description": "",
    //             "lat": "35.0744165000000000",
    //             "lng": "-106.5565693000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14061,
    //             "property_title": "Plaza David Chavez",
    //             "property_address": "2821 MOUNTAIN RD NW",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87104",
    //             "prog_type": "",
    //             "phone": "(505) 242-1361",
    //             "description": "",
    //             "lat": "35.1003680000000000",
    //             "lng": "-106.6814860000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "4",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14142,
    //             "property_title": "Challenge New Mexico Svcs For Hdcp",
    //             "property_address": "631 AGUA FRIA ST",
    //             "property_city": "SANTA FE",
    //             "property_county": "Santa Fe",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87501",
    //             "prog_type": "",
    //             "phone": "(505) 988-7621",
    //             "description": "",
    //             "lat": "35.6857193000000000",
    //             "lng": "-105.9494637000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "Yes",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36680,
    //             "property_title": "Hilltop Terrace Apartments 393 Canal Blvd Sw",
    //             "property_address": "393 Canal Blvd Sw",
    //             "property_city": "Los Lunas",
    //             "property_county": "Valencia",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87031",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "34.8107431",
    //             "lng": "-106.7473327",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "3",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/22406.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14045,
    //             "property_title": "El Centro Familiar Senior Housing",
    //             "property_address": "2210 CENTRO FAMILIAR BLVD SW",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87105",
    //             "prog_type": "",
    //             "phone": "(505) 314-0200",
    //             "description": "",
    //             "lat": "35.0435010000000000",
    //             "lng": "-106.6835890000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "2",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14062,
    //             "property_title": "Ranchitos Village Apartments",
    //             "property_address": "6811 RANCHITOS RD NE",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87109",
    //             "prog_type": "",
    //             "phone": "(505) 822-9159",
    //             "description": "",
    //             "lat": "35.1707759000000000",
    //             "lng": "-106.5709540000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "Yes",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14143,
    //             "property_title": "Encino Villa",
    //             "property_address": "1501 MONTANO ST",
    //             "property_city": "SANTA FE",
    //             "property_county": "Santa Fe",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87501",
    //             "prog_type": "",
    //             "phone": "(505) 989-7271",
    //             "description": "",
    //             "lat": "35.6751621000000000",
    //             "lng": "-105.9668935000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "Yes",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 36682,
    //             "property_title": "Kristin Park Apartments 2351 Moreland Dr",
    //             "property_address": "2351 Moreland Dr",
    //             "property_city": "Las Vegas",
    //             "property_county": "San Miguel",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87701",
    //             "prog_type": "",
    //             "phone": "",
    //             "description": "",
    //             "lat": "35.6147172",
    //             "lng": "-105.2205788",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "3",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "Yes",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "Yes",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "No",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": {
    //             "photo": "images/usda/NM/23589.jpg"
    //         },
    //         "property_rating": null,
    //         "property_deals": null,
    //         "header_description": null
    //     },
    //     {
    //         "ordval": 3,
    //         "pt": "general",
    //         "property": {
    //             "id_property": 14046,
    //             "property_title": "El Paseo Village Apartments",
    //             "property_address": "420 COAL ST SE",
    //             "property_city": "ALBUQUERQUE",
    //             "property_county": "Bernalillo",
    //             "property_type": "general",
    //             "property_state": "NM",
    //             "property_zip": "87102",
    //             "prog_type": "",
    //             "phone": "(505) 842-1078",
    //             "description": "",
    //             "lat": "35.0794431000000000",
    //             "lng": "-106.6434022000000000",
    //             "property_description": "",
    //             "sq_ft": ""
    //         },
    //         "property_detail": {
    //             "max_bed": "",
    //             "min_bed": "1",
    //             "max_bath": "",
    //             "min_bath": "",
    //             "subsidized": "No",
    //             "seniorprop": "No",
    //             "seniorpropval": "",
    //             "pet_allowed": "No",
    //             "cats_ok": 0,
    //             "dogs_ok": 0,
    //             "parking_type": "",
    //             "handicap": "Yes",
    //             "coq": "No",
    //             "section8": "No",
    //             "max_rent": 0,
    //             "min_rent": 0
    //         },
    //         "property_floor_plan": null,
    //         "property_photo": null,
    //         "property_rating": {
    //             "vote_avg": 0
    //         },
    //         "property_deals": {
    //             "header_description": "5",
    //             "header_value": "",
    //             "special": "7",
    //             "special_value": "",
    //             "status": "Active"
    //         },
    //         "header_value": false
    //     }
    // ]

    // const [firstListofCityStates, setfirstListofCityStates] = useState([]);
    // const [uniQueCityStateList, setuniQueCityStateList] = useState([]);


    // const findUnique = (array) => {
    //     if (array == undefined || array == null || array.length == 0) {
    //     } else {
    //         let newarr = [];
    //         array.map(
    //             (item, index) => {
    //                 if (newarr == null || newarr.length == 0) {
    //                     let obj = {
    //                         city: item.city,
    //                         state: item.state,
    //                         count: 1
    //                     }
    //                     newarr.push(obj);
    //                 } else {
    //                     let idx = elementSearchInArray(newarr, item);
    //                     if (idx == 0) {
    //                         let obj = {
    //                             city: item.city,
    //                             state: item.state,
    //                             count: 1
    //                         }
    //                         newarr.push(obj);
    //                     } else {
    //                         newarr[idx].count += 1;
    //                     }
    //                 }
    //             }
    //         )
    //         setuniQueCityStateList(newarr);
    //     }
    // }





    // const generateFirstFilterList = (data) => {
    //     let tempArr = [];
    //     data.map(
    //         (item) => {
    //             let obj = {
    //                 state: item.property.property_state.toLowerCase(),
    //                 city: item.property.property_city.toLowerCase(),
    //             }
    //             tempArr.push(obj);
    //         }
    //     )
    //     setfirstListofCityStates(tempArr);
    // }






    // useEffect(() => {
    //     if (firstListofCityStates == undefined || firstListofCityStates.length == 0) {

    //     } else {
    //         findUnique(firstListofCityStates);
    //     }
    // }, [firstListofCityStates])



    // let adsbygoogle = (window.adsbygoogle || []).push({});





    return (
        <>


            <h1>trial </h1>

            <h1>trial </h1>


           

            <div>
                {/* <div style={{ color: 'red' }}> */}

                {/* </div> */}
                {/* <div id="ezoic-pub-ad-placeholder-108">
                    <ins class="adsbygoogle"
                        style={{ display: "inline-block", width: "728px", height: "90px" }}
                        data-ad-client="ca-pub-2836217214879103"
                        data-ad-slot="6662484805"></ins>
                </div> */}
            </div>



            <h1>trial page will start from here</h1>
            {/* <div id="ezoic-pub-ad-placeholder-105">
                <ins class="adsbygoogle" style={{ display: "inline-block" }}
                    data-ad-client="ca-pub-2836217214879103" data-ad-slot="6665520080"></ins>
              
            </div>


            <div>
                <div id="ezoic-pub-ad-placeholder-106">
                    <ins class="adsbygoogle" style={{ display: "inline-block", width: "580px", height: "400px" }}
                        data-ad-client="ca-pub-2836217214879103" data-ad-slot="6293112857"></ins>

                
                </div>
            </div>



            <div id="ezoic-pub-ad-placeholder-107">
                <ins class="adsbygoogle" style={{ display: "inline-block", width: "680px", height: "220px" }}
                    data-ad-client="ca-pub-2836217214879103" data-ad-slot="6665520080"></ins>

            </div>



            <div>
                <div id="ezoic-pub-ad-placeholder-108">
                    <ins class="adsbygoogle" style={{ display: "inline-block", width: "580px", height: "400px" }}
                        data-ad-client="ca-pub-2836217214879103" data-ad-slot="6293112857"></ins>

                 
                </div>
            </div>

            <div id="ezoic-pub-ad-placeholder-109">
                <ins class="adsbygoogle" style={{ display: "inline-block", width: "680px", height: "220px" }}
                    data-ad-client="ca-pub-2836217214879103" data-ad-slot="6665520080"></ins>

            </div>



            <div>
                <div id="ezoic-pub-ad-placeholder-100">
                    <ins class="adsbygoogle" style={{ display: "inline-block", width: "580px", height: "400px" }}
                        data-ad-client="ca-pub-2836217214879103" data-ad-slot="6293112857"></ins>

                 
                </div>
            </div>

            <div id="ezoic-pub-ad-placeholder-101">
                <ins class="adsbygoogle" style={{ display: "inline-block", width: "680px", height: "220px" }}
                    data-ad-client="ca-pub-2836217214879103" data-ad-slot="6665520080"></ins>

            
            </div>



            <div>
                <div id="ezoic-pub-ad-placeholder-102">
                    <ins class="adsbygoogle" style={{ display: "inline-block", width: "580px", height: "400px" }}
                        data-ad-client="ca-pub-2836217214879103" data-ad-slot="6293112857"></ins>

                </div>
            </div> */}



            {/* <h1 onClick={() => { findUnique() }}>uniQueCityStateList array generate </h1> */}

            {/* <h1 onClick={() => { generateFirstFilterList(data) }}>FIRST array generate </h1>
            <p>
                {JSON.stringify(firstListofCityStates)}
            </p>
            <h1>{firstListofCityStates.length}</h1>


            <p>{JSON.stringify(uniQueCityStateList)}</p>
            <h1>{
                uniQueCityStateList.length == 0 ?
                    "LLL"
                    :
                    uniQueCityStateList[findHighestCountCity(uniQueCityStateList)].city + " " + uniQueCityStateList[findHighestCountCity(uniQueCityStateList)].state
            }</h1> */}

        </>
    )
}

export default Trial