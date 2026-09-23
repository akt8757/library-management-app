"use client";
import React, { useState } from "react";
import { produce } from "immer";
import { Button } from "@base-ui/react";

const FlightBookingForm = () => {
  const [formData, setFormData] = useState({
    category: "FLIGHT",
    name: "Sample Item",
    description: "Test booking",
    adult_count: 2,
    child_count: 1,
    kid_count: 0,
    infant_count: 0,
    status: "TICKETED",
    attachments: ["g", "h"],

    flight_details: {
      country_id: 1,
      supplier_id: 2,
      booking_date: "2024-06-01",
      ticketing_date: "2024-06-01",
      booking_id: "BK123456",
      pnr: "ABCD1234",
      gds_pnr: "XYZ9876",
      airline_pnr: ["A12345", "B98765"],
      trip_type: "ROUND_TRIP",
      fare_type: "CORPORATE",
      class_type: "BUSINESS",
      main_carrier_code: "EK",
      main_flight_number: "EK256",
      departure_date_time: "2024-06-10T08:00",
      return_date_time: "2024-06-20T20:30",
      ticket_status: "BOOKED",
      is_refundable: true,
      supplier_reference: "SUPPREF001",
      direct_flight: false,
      refund_charge: 25.5,
      refund_policy: "Refund available with 48h notice.",
      change_charge: 15.0,
      change_policy: "One date change allowed.",
      cancellation_charge: 50.0,
      cancellation_policy: "No refund after departure.",

      route_details: [
        {
          dep: "DAC",
          arr: "DXB",
          dep_date_time: "2026-03-28",
          arr_date_time: "2026-04-28",
          carrier_codes: ["BS", "VQ"],
          booking_classes: ["Y", "M"],
          flight_numbers: ["BS-192", "BS-23"],
        },
      ],
    },

    fare_infos: [
      {
        action_source_id: "8",
        total_base_price: 800,
        total_tax: 150,
        total_discount: 50,
        total_paid_amount: 1000,
        total_due_amount: 0,
        total_refund_amount: 0,
        type: "SELLING",
        description: "Main fare",

        markup_commissions: [
          {
            apply_to: "BASE_FARE",
            name: "7% Commission for supplier",
            action_type: "COMMISSION",
            value: 7,
            type: "PERCENTAGE",
            description: "This is Supplier default commission we get",
            is_compound: false,
          },
        ],

        taxes: [1, 2, 3],

        breakdowns: [
          {
            type: "SELLING",
            pax_type: "ADULT",
            base_fare: 400,
            tax: 50,
            total_fare: 450,
            pax_count: 2,

            travelers: [
              {
                title: "MR",
                first_name: "Masud",
                last_name: "Parvez",
                passport_number: "74927492",
                passport_expiry_date: "2028-08-24",
                passport_issuance_country_id: "13",
                email: "sajjadahmedpax@gmail.com",
                phone: "+8801818729249",
                address: "",
                city: "",
                state: "",
                zip: "",
                country_id: "13",
                docs: ["doc1", "doc2"],
              },
            ],
          },
        ],

        service_charges: [
          {
            name: "Flyrn service charges",
            price: 100,
            description: "This is test",
          },
        ],
      },
    ],
  });

  const [fareShow, setFareShow] = useState([true]);

  console.log(fareShow);

  //  add dynamic route

  const handleAddRoute = () => {
    setFormData((prev) =>
      produce(prev, (draft) => {
        draft.flight_details.route_details.push({
          dep: "",
          arr: "",
          dep_date_time: "",
          arr_date_time: "",
          carrier_codes: [],
          booking_classes: [],
          flight_numbers: [],
        });
      }),
    );
  };

  // remove dynamic route
  const handleRemoveRoute = (index) => {
    setFormData((prev) =>
      produce(prev, (draft) => {
        draft.flight_details.route_details.splice(index, 1);
      }),
    );
  };

  // add dynamic fareinfo
  const handleAddFare = () => {
    setFormData((prev) =>
      produce(prev, (draft) => {
        draft.fare_infos.push({
          action_source_id: "8",
          total_base_price: 800,
          total_tax: 150,
          total_discount: 50,
          total_paid_amount: 1000,
          total_due_amount: 0,
          total_refund_amount: 0,
          type: "SELLING",
          description: "Main fare",

          markup_commissions: [
            {
              apply_to: "BASE_FARE",
              name: "7% Commission for supplier",
              action_type: "COMMISSION",
              value: 7,
              type: "PERCENTAGE",
              description: "This is Supplier default commission we get",
              is_compound: false,
            },
          ],

          taxes: [1, 2, 3],

          breakdowns: [
            {
              type: "SELLING",
              pax_type: "ADULT",
              base_fare: 400,
              tax: 50,
              total_fare: 450,
              pax_count: 2,

              travelers: [
                {
                  title: "MR",
                  first_name: "Masud",
                  last_name: "Parvez",
                  passport_number: "74927492",
                  passport_expiry_date: "2028-08-24",
                  passport_issuance_country_id: "13",
                  email: "sajjadahmedpax@gmail.com",
                  phone: "+8801818729249",
                  address: "",
                  city: "",
                  state: "",
                  zip: "",
                  country_id: "13",
                  docs: ["doc1", "doc2"],
                },
              ],
            },
          ],

          service_charges: [
            {
              name: "Flyrn service charges",
              price: 100,
              description: "This is test",
            },
          ],
        });
      }),
    );
  };

  // remove fare info
  const handleRemoveInfo = (index) => {
    setFormData((prev) =>
      produce(prev, (draft) => {
        draft.fare_infos.splice(index, 1);
      }),
    );
  };

  // add dynamic markup
  const handleAddMarkup = (index) => {
    setFormData((prev) =>
      produce(prev, (draft) => {
        draft.fare_infos[index].markup_commissions.push({
          apply_to: "BASE_FARE",
          name: "7% Commission for supplier",
          action_type: "COMMISSION",
          value: 7,
          type: "PERCENTAGE",
          description: "This is Supplier default commission we get",
          is_compound: false,
        });
      }),
    );
  };

  // remove dynamic markup
  const handleRemoveMarkup = (infoIndex, index) => {
    setFormData((prev) =>
      produce(prev, (draft) => {
        draft.fare_infos[infoIndex].markup_commissions.splice(index, 1);
      }),
    );
  };

  //add dynamic breakDowns
  const handleAddBreakdown = (index) => {
    setFormData((prev) =>
      produce(prev, (draft) => {
        draft.fare_infos[index].breakdowns.push({
          type: "SELLING",
          pax_type: "ADULT",
          base_fare: 400,
          tax: 50,
          total_fare: 450,
          pax_count: 2,

          travelers: [
            {
              title: "MR",
              first_name: "Masud",
              last_name: "Parvez",
              passport_number: "74927492",
              passport_expiry_date: "2028-08-24",
              passport_issuance_country_id: "13",
              email: "sajjadahmedpax@gmail.com",
              phone: "+8801818729249",
              address: "",
              city: "",
              state: "",
              zip: "",
              country_id: "13",
              docs: ["doc1", "doc2"],
            },
          ],
        });
      }),
    );
  };

  //add dynamic breakDowns
  const handleRemoveBreakdown = (infoIndex, breakIndex) => {
    setFormData((prev) =>
      produce(prev, (draft) => {
        draft.fare_infos[infoIndex].breakdowns.splice(breakIndex, 1);
      }),
    );
  };

  //add dynamic Traveler
  const handleAddTraveler = (infoIndex, breakIndex) => {
    setFormData((prev) =>
      produce(prev, (draft) => {
        draft.fare_infos[infoIndex].breakdowns[breakIndex].travelers.push({
          title: "MR",
          first_name: "Masud",
          last_name: "Parvez",
          passport_number: "74927492",
          passport_expiry_date: "2028-08-24",
          passport_issuance_country_id: "13",
          email: "sajjadahmedpax@gmail.com",
          phone: "+8801818729249",
          address: "",
          city: "",
          state: "",
          zip: "",
          country_id: "13",
          docs: ["doc1", "doc2"],
        });
      }),
    );
  };

  //remove dynamic traveler
  const handleRemoveTraveler = (infoIndex, breakIndex, travelerIndex) => {
    setFormData((prev) =>
      produce(prev, (draft) => {
        draft.fare_infos[infoIndex].breakdowns[breakIndex].travelers.splice(
          travelerIndex,
          1,
        );
      }),
    );
  };

  // add service charge
  const handleAddCharge = (index) => {
    setFormData((prev) =>
      produce(prev, (draft) => {
        draft.fare_infos[index].service_charges.push({
          name: "Flyrn service charges",
          price: 100,
          description: "This is test",
        });
      }),
    );
  };

  // add service charge
  const handleRemoveCharge = (index, serviceIndex) => {
    setFormData((prev) =>
      produce(prev, (draft) => {
        draft.fare_infos[index].service_charges.splice(serviceIndex, 1);
      }),
    );
  };

  // basic handler
  const HandleBasic = (e) => {
    const { name, value } = e.target;
    if (name === "attachments") {
      const fillArray = value.split(",").map((item) => item.trim());
      setFormData((prev) => ({
        ...prev,
        attachments: fillArray,
      }));
      return;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // flight detail handler
  const handleFlightDetail = (e) => {
    const { name, value } = e.target;

    if (name === "airline_pnr") {
      const fillArray = value.split(",").map((item) => item.trim());
      setFormData((prev) => ({
        ...prev,
        flight_details: {
          ...prev.flight_details,
          airline_pnr: fillArray,
        },
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      flight_details: {
        ...prev.flight_details,
        [name]: value,
      },
    }));
  };

  // route detail handler
  const handleRouteChange = (e, index) => {
    const { name, value } = e.target;
    console.log("route change", index);
    setFormData((prev) =>
      produce(prev, (draft) => {
        if (
          name === "carrier_codes" ||
          name === "booking_classes" ||
          name === "flight_numbers"
        ) {
          const calculateValue = value.split(",").map((item) => item.trim());
          draft.flight_details.route_details[index][name] = calculateValue;
          return;
        }
        draft.flight_details.route_details[index][name] = value;
      }),
    );
  };

  // handle fare detail
  const handleFareDetail = (e, index) => {
    const { name, value } = e.target;

    setFormData((prev) =>
      produce(prev, (draft) => {
        if (name === "taxes") {
          const calculateValue = value.split(",").map((item) => item.trim());
          draft.fare_infos[index][name] = calculateValue;
          return;
        }
        draft.fare_infos[index][name] = value;
      }),
    );
  };

  //handle markup commission change

  const handleMarkupChange = (e, infoIndex, markupIndex) => {
    const { name, value } = e.target;
    setFormData((prev) =>
      produce(prev, (draft) => {
        draft.fare_infos[infoIndex].markup_commissions[markupIndex][name] =
          value;
      }),
    );
  };
  const handleBreakdownChange = (e, infoIndex, breakIndex) => {
    const { name, value } = e.target;
    setFormData((prev) =>
      produce(prev, (draft) => {
        draft.fare_infos[infoIndex].breakdowns[breakIndex][name] = value;
      }),
    );
  };

  // handle traveler change

  const handleTravelerChange = (e, infoIndex, breakIndex, travelerIndex) => {
    const { name, value } = e.target;
    setFormData((prev) =>
      produce(prev, (draft) => {
        if (name === "docs") {
          const calculateValue = value.split(",").map((item) => item.trim());
          draft.fare_infos[infoIndex].breakdowns[breakIndex].travelers[
            travelerIndex
          ][name] = calculateValue;
          return;
        }
        draft.fare_infos[infoIndex].breakdowns[breakIndex].travelers[
          travelerIndex
        ][name] = value;
      }),
    );
  };

  const handleServiceChargeChange = (e, infoIndex, serIndex) => {
    const { name, value } = e.target;
    setFormData((prev) =>
      produce(prev, (draft) => {
        draft.fare_infos[infoIndex].service_charges[serIndex][name] = value;
      }),
    );
  };

  // SUBMIT

  const handleSubmit = (e) => {
    e.preventDefault();

    // alert(JSON.stringify(formData, null, 2));
    console.log("Final json", formData);
  };

  // COMMON INPUT CLASS

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="min-h-screen bg-gray-100 pt-50">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">
          Flight Booking Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* BASIC INFO */}

          <div>
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Basic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={HandleBasic}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="flight">FLIGHT</option>
                  <option value="hotel">HOTEL</option>
                  <option value="tour">TOUR</option>
                </select>
              </div>

              <div>
                <label>Name</label>
                <input
                  className={inputClass}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={HandleBasic}
                  placeholder="Name"
                />
              </div>

              <div>
                <label>description</label>
                <input
                  className={inputClass}
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={HandleBasic}
                  placeholder="Description"
                />
              </div>

              <div>
                <label>Adults</label>
                <input
                  className={inputClass}
                  type="number"
                  name="adult_count"
                  value={formData.adult_count}
                  onChange={HandleBasic}
                  placeholder="Adults"
                />
              </div>

              <div>
                <label>Children</label>
                <input
                  className={inputClass}
                  type="number"
                  name="children_count"
                  value={formData.child_count}
                  onChange={HandleBasic}
                  placeholder="Children"
                />
              </div>

              <div>
                <label>Kids</label>
                <input
                  className={inputClass}
                  type="number"
                  name="kids_count"
                  value={formData.kid_count}
                  onChange={HandleBasic}
                  placeholder="Kids"
                />
              </div>

              <div>
                <label>Infants</label>
                <input
                  className={inputClass}
                  type="number"
                  name="infant_count"
                  value={formData.infant_count}
                  onChange={HandleBasic}
                  placeholder="Infants"
                />
              </div>

              <div>
                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={HandleBasic}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="TICKETED">TICKETED</option>
                  <option value="VOID">VOID</option>
                </select>
              </div>

              <div>
                <label>attachments</label>
                <input
                  className={inputClass}
                  type="text"
                  name="attachments"
                  value={formData.attachments.join(",")}
                  onChange={HandleBasic}
                  placeholder="attachments"
                />
              </div>
            </div>
          </div>

          {/* FLIGHT DETAILS AREA */}

          <div>
            <h2 className="text-xl font-semibold mb-4 border-b py-3">
              Flight Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label>Country id</label>
                <input
                  className={inputClass}
                  type="number"
                  name="country_id"
                  value={formData.flight_details.country_id}
                  onChange={handleFlightDetail}
                  placeholder="Country Id"
                />
              </div>

              <div>
                <label>supplier_id</label>
                <input
                  className={inputClass}
                  type="number"
                  name="supplier_id"
                  value={formData.flight_details.supplier_id}
                  onChange={handleFlightDetail}
                  placeholder="SupplierId"
                />
              </div>

              <div>
                <label>ticketing_date</label>
                <input
                  className={inputClass}
                  type="date"
                  name="ticketing_date"
                  value={formData.flight_details.ticketing_date}
                  onChange={handleFlightDetail}
                  placeholder="Ticketing Date"
                />
              </div>

              <div>
                <label>booking_date</label>
                <input
                  className={inputClass}
                  type="date"
                  name="booking_date"
                  value={formData.flight_details.booking_date}
                  onChange={handleFlightDetail}
                  placeholder="Booking Date"
                />
              </div>

              <div>
                <label>Booking id</label>
                <input
                  className={inputClass}
                  type="text"
                  name="booking_id"
                  value={formData.flight_details.booking_id}
                  onChange={handleFlightDetail}
                  placeholder="Booking Id"
                />
              </div>

              <div>
                <label>pnr</label>
                <input
                  className={inputClass}
                  type="text"
                  name="pnr"
                  value={formData.flight_details.pnr}
                  onChange={handleFlightDetail}
                  placeholder="PNR"
                />
              </div>

              <div>
                <label>Gds Pnr</label>
                <input
                  className={inputClass}
                  type="text"
                  name="gds_pnr"
                  value={formData.flight_details.gds_pnr}
                  onChange={handleFlightDetail}
                  placeholder="Gds Pnr"
                />
              </div>

              <div>
                <label>Airlines Pnr</label>
                <input
                  className={inputClass}
                  type="text"
                  name="airline_pnr"
                  value={formData.flight_details.airline_pnr.join(",")}
                  onChange={handleFlightDetail}
                  placeholder="Airlines Pnr"
                />
              </div>

              <div>
                <label>Trip types</label>
                <select
                  name="trip_type"
                  value={formData.flight_details.trip_type}
                  onChange={handleFlightDetail}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="ROUND_TRIP">ROUND_TRIP</option>
                  <option value="ONE_WAY">ONE_WAY</option>
                  <option value="MULTI_CITY">MULTI_CITY</option>
                </select>
              </div>

              <div>
                <label>Fare types</label>
                <select
                  name="fare_type"
                  value={formData.flight_details.fare_type}
                  onChange={handleFlightDetail}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="CORPORATE">CORPORATE</option>
                  <option value="BUSINESS">BUSINESS</option>
                  <option value="LOCAL">LOCAL</option>
                </select>
              </div>

              <div>
                <label>Class types</label>
                <select
                  name="class_type"
                  value={formData.flight_details.class_type}
                  onChange={handleFlightDetail}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="ECONOMY">ECONOMY</option>
                  <option value="BUSINESS">BUSINESS</option>
                  <option value="FIRST">FIRST</option>
                </select>
              </div>

              <div>
                <label>Main Care Code</label>
                <select
                  name="main_carrier_code"
                  value={formData.flight_details.main_care_code}
                  onChange={handleFlightDetail}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="EK">EK</option>
                  <option value="BA">BA</option>
                  <option value="LH">LH</option>
                </select>
              </div>

              <div>
                <label>Main Flight Number</label>
                <input
                  className={inputClass}
                  type="text"
                  name="main_flight_number"
                  value={formData.flight_details.main_flight_number}
                  onChange={handleFlightDetail}
                  placeholder="Main Flight Number"
                />
              </div>

              <div>
                <label>Departure Date</label>
                <input
                  className={inputClass}
                  type="date"
                  name="departure_date_time"
                  value={formData.flight_details.departure_date_time}
                  onChange={handleFlightDetail}
                  placeholder="Departure Date"
                />
              </div>

              <div>
                <label>Return Date</label>
                <input
                  className={inputClass}
                  type="date"
                  name="return_date_time"
                  value={formData.flight_details.return_date_time}
                  onChange={handleFlightDetail}
                  placeholder="Return Date"
                />
              </div>

              <div>
                <label>Ticket Status</label>
                <select
                  name="ticket_status"
                  value={formData.flight_details.ticket_status}
                  onChange={handleFlightDetail}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="BOOKED">BOOKED</option>
                  <option value="CANCELLED">CANCELLED</option>
                  <option value="VOID">VOID</option>
                </select>
              </div>

              <div>
                <label>Refundable</label>
                <select
                  name="is_refundable"
                  value={formData.flight_details.is_refundable}
                  onChange={handleFlightDetail}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>

              <div>
                <label>Supplier Reference</label>
                <input
                  className={inputClass}
                  type="text"
                  name="supplier_reference"
                  value={formData.flight_details.supplier_reference}
                  onChange={handleFlightDetail}
                  placeholder="Supplier Reference"
                />
              </div>

              <div>
                <label>direct flight</label>
                <select
                  name="direct_flight"
                  value={formData.flight_details.direct_flight}
                  onChange={handleFlightDetail}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>

              <div>
                <label>Refund Charge</label>
                <input
                  className={inputClass}
                  type="number"
                  name="refund_charge"
                  value={formData.flight_details.refund_charge}
                  onChange={handleFlightDetail}
                  placeholder="Refund Charge"
                />
              </div>

              <div>
                <label>Refund Policy</label>
                <input
                  className={inputClass}
                  type="text"
                  name="refund_policy"
                  value={formData.flight_details.refund_policy}
                  onChange={handleFlightDetail}
                  placeholder="Refund Policy"
                />
              </div>
              <div>
                <label>Change Charge</label>
                <input
                  className={inputClass}
                  type="number"
                  name="change_charge"
                  value={formData.flight_details.change_charge}
                  onChange={handleFlightDetail}
                  placeholder="Change Charge"
                />
              </div>

              <div>
                <label>Change Policy</label>
                <input
                  className={inputClass}
                  type="text"
                  name="change_policy"
                  value={formData.flight_details.change_policy}
                  onChange={handleFlightDetail}
                  placeholder="Change Policy"
                />
              </div>

              <div>
                <label>Cancellation Charge</label>
                <input
                  className={inputClass}
                  type="number"
                  name="cancellation_charge"
                  value={formData.flight_details.cancellation_charge}
                  onChange={handleFlightDetail}
                  placeholder="Cancellation Charge"
                />
              </div>

              <div>
                <label>Cancellation Policy</label>
                <input
                  className={inputClass}
                  type="text"
                  name="cancellation_policy"
                  value={formData.flight_details.cancellation_policy}
                  onChange={handleFlightDetail}
                  placeholder="Cancellation Policy"
                />
              </div>
            </div>
          </div>

          {/* ROUTE DETAILS */}
          {formData.flight_details.route_details.map((route, index) => (
            <div key={index}>
              <div className="text-xl font-semibold mb-4 border-b p-4 flex justify-between items-center">
                Route Details
                <div>
                  {index === 0 ? (
                    <button
                      type="button"
                      onClick={handleAddRoute}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Add Route {formData.flight_details.route_details.length}
                    </button>
                  ) : (
                    <button
                      className="bg-brandColor cursor-pointer text-white font-bold py-2 px-4 rounded"
                      type="button"
                      onClick={() => handleRemoveRoute(index)}
                    >
                      Remove Route
                    </button>
                  )}
                </div>
              </div>

              <div className=" border-gray-300 rounded-xl p-5 mb-5 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label>Departure</label>
                    <input
                      className={inputClass}
                      type="text"
                      name="dep"
                      value={route.dep}
                      onChange={(e) => handleRouteChange(e, index)}
                      placeholder="Departure"
                    />
                  </div>

                  <div>
                    <label>Arrival</label>
                    <input
                      name="arr"
                      className={inputClass}
                      type="text"
                      value={route.arr}
                      onChange={(e) => handleRouteChange(e, index)}
                      placeholder="Arrival"
                    />
                  </div>
                  <div>
                    <label>Departure Date</label>
                    <input
                      name="dep_date_time"
                      className={inputClass}
                      type="date"
                      value={route.dep_date_time}
                      onChange={(e) => handleRouteChange(e, index)}
                    />
                  </div>
                  <div>
                    <label>Arrival Date</label>
                    <input
                      name="arr_date_time"
                      className={inputClass}
                      type="date"
                      value={route.arr_date_time}
                      onChange={(e) => handleRouteChange(e, index)}
                    />
                  </div>
                  <div>
                    <label>Carrier Codes</label>
                    <input
                      name="carrier_codes"
                      className={inputClass}
                      type="text"
                      value={route.carrier_codes.join(",")}
                      onChange={(e) => handleRouteChange(e, index)}
                      placeholder="Carrier Codes"
                    />
                  </div>

                  <div>
                    <label>Booking Classes</label>
                    <input
                      name="booking_classes"
                      className={inputClass}
                      type="text"
                      value={route.booking_classes.join(",")}
                      onChange={(e) => handleRouteChange(e, index)}
                      placeholder="Booking Classes"
                    />
                  </div>

                  <div>
                    <label>Flight Numbers</label>
                    <input
                      name="flight_numbers"
                      className={inputClass}
                      type="text"
                      value={route.flight_numbers.join(",")}
                      onChange={(e) => handleRouteChange(e, index)}
                      placeholder="Flight Numbers"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* fare info */}
          {formData.fare_infos.map((info, index) => {
            const infoIndex = index;

            return (
              <div key={index}>
                <div className="py-20">
                  <div className="text-xl font-semibold mb-4 border-b p-4 flex justify-between items-center">
                    Fare Info
                    <div>
                      {index === 0 ? (
                        <button
                          type="button"
                          onClick={handleAddFare}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Add Fare Info {formData.fare_infos.length}
                        </button>
                      ) : (
                        <button
                          className="bg-brandColor cursor-pointer text-white font-bold py-2 px-4 rounded"
                          type="button"
                          onClick={() => handleRemoveInfo(index)}
                        >
                          Remove Fare Info
                        </button>
                      )}
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          let isFareShow = !fareShow[index];
                          setFareShow((prev) => {
                            let newArray = [...prev];
                            // updating current index with opposite value
                            newArray[index] = isFareShow;

                            return newArray;
                          });
                        }}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                      >
                        {fareShow[index] ? "Hide" : "Show"} Collapsible
                      </button>
                    </div>
                  </div>
                  {fareShow[index] && (
                    <div>
                      {" "}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label>Action Source id</label>
                          <input
                            name="action_source_id"
                            className={inputClass}
                            type="number"
                            value={info.action_source_id}
                            onChange={(e) => handleFareDetail(e, infoIndex)}
                            placeholder="Source Id"
                          />
                        </div>

                        <div>
                          <label>Total Base Price</label>
                          <input
                            className={inputClass}
                            type="number"
                            value={info.total_base_price}
                            name="total_base_price"
                            onChange={(e) => handleFareDetail(e, infoIndex)}
                            placeholder="Base Price"
                          />
                        </div>
                        <div>
                          <label>Total Discount</label>
                          <input
                            className={inputClass}
                            type="number"
                            value={info.total_discount}
                            name="total_discount"
                            onChange={(e) => handleFareDetail(e, infoIndex)}
                            placeholder="Total Discount"
                          />
                        </div>

                        <div>
                          <label>Taxes</label>
                          <input
                            className={inputClass}
                            type="text"
                            name="taxes"
                            value={info.taxes.join(",")}
                            onChange={(e) => handleFareDetail(e, infoIndex)}
                            placeholder="Taxes"
                          />
                        </div>
                        <div>
                          <label>Total Paid Amount</label>
                          <input
                            className={inputClass}
                            type="number"
                            value={info.total_paid_amount}
                            name="total_paid_amount"
                            onChange={(e) => handleFareDetail(e, infoIndex)}
                          />
                        </div>
                        <div>
                          <label>Total Due Amount</label>
                          <input
                            className={inputClass}
                            type="number"
                            value={info.total_due_amount}
                            name="total_due_amount"
                            onChange={(e) => handleFareDetail(e, infoIndex)}
                            placeholder="Total Due Amount"
                          />
                        </div>

                        <div>
                          <label>Total Refund Amount</label>
                          <input
                            className={inputClass}
                            type="number"
                            value={info.total_refund_amount}
                            name="total_refund_amount"
                            onChange={(e) => handleFareDetail(e, infoIndex)}
                            placeholder="Total Refund Amount"
                          />
                        </div>

                        <div>
                          <label>Type</label>
                          <select
                            name="type"
                            value={info.type}
                            onChange={(e) => handleFareDetail(e, infoIndex)}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option value="SEELING">SEELING</option>
                            <option value="PURCHASING">PURCHASING</option>
                          </select>
                        </div>

                        <div>
                          <label>Description</label>
                          <input
                            className={inputClass}
                            type="text"
                            value={info.description}
                            name="description"
                            onChange={(e) => handleFareDetail(e, infoIndex)}
                            placeholder="Description"
                          />
                        </div>
                      </div>
                      <div>
                        {/* markup commissions */}
                        {info.markup_commissions.map((mark, mIndex) => {
                          const markupIndex = mIndex;
                          return (
                            <div key={index}>
                              <div className="text-xl font-semibold mb-4 border-b p-4 flex justify-between items-center">
                                Markup Commission
                                <div>
                                  {index === 0 ? (
                                    <button
                                      type="button"
                                      onClick={() => handleAddMarkup(index)}
                                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                      Add Markup{" "}
                                      {
                                        formData.fare_infos[index]
                                          .markup_commissions.length
                                      }
                                    </button>
                                  ) : (
                                    <button
                                      className="bg-brandColor cursor-pointer text-white font-bold py-2 px-4 rounded"
                                      type="button"
                                      onClick={() =>
                                        handleRemoveCharge(infoIndex, index)
                                      }
                                    >
                                      Remove Markup
                                    </button>
                                  )}
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                  <label>Apply To</label>
                                  <select
                                    value={mark.apply_to}
                                    name="apply_to"
                                    onChange={(e) =>
                                      handleMarkupChange(
                                        e,
                                        infoIndex,
                                        markupIndex,
                                      )
                                    }
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  >
                                    <option value="BASE_FARE">BASE_FARE</option>
                                    <option value="TOTAL_FARE">
                                      TOTAL_FARE
                                    </option>
                                  </select>
                                </div>

                                <div>
                                  <label>name</label>
                                  <input
                                    className={inputClass}
                                    type="text"
                                    value={mark.name}
                                    name="name"
                                    onChange={(e) =>
                                      handleMarkupChange(
                                        e,
                                        infoIndex,
                                        markupIndex,
                                      )
                                    }
                                    placeholder="Name"
                                  />
                                </div>

                                <div>
                                  <label>Action_type</label>
                                  <select
                                    name="action_type"
                                    value={mark.action_type}
                                    onChange={(e) =>
                                      handleMarkupChange(
                                        e,
                                        infoIndex,
                                        markupIndex,
                                      )
                                    }
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  >
                                    <option value="COMMISSION">
                                      COMMISSION
                                    </option>
                                    <option value="DISCOUNT">DISCOUNT</option>
                                  </select>
                                </div>

                                <div>
                                  <label>Value</label>
                                  <input
                                    name="value"
                                    className={inputClass}
                                    type="number"
                                    value={mark.value}
                                    onChange={(e) =>
                                      handleMarkupChange(
                                        e,
                                        infoIndex,
                                        markupIndex,
                                      )
                                    }
                                    placeholder="Value"
                                  />
                                </div>
                                <div>
                                  <label>Is Compound</label>
                                  <select
                                    value={mark.is_compound}
                                    name="is_compound"
                                    onChange={(e) =>
                                      handleMarkupChange(
                                        e,
                                        infoIndex,
                                        markupIndex,
                                      )
                                    }
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  >
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                  </select>
                                </div>

                                <div>
                                  <label>Type</label>
                                  <select
                                    value={mark.type}
                                    name="type"
                                    onChange={(e) =>
                                      handleMarkupChange(
                                        e,
                                        infoIndex,
                                        markupIndex,
                                      )
                                    }
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                  >
                                    <option value="PERCENTAGE">
                                      PERCENTAGE
                                    </option>
                                    <option value="FIXED">FIXED</option>
                                  </select>
                                </div>

                                <div>
                                  <label>Description</label>
                                  <input
                                    className={inputClass}
                                    type="text"
                                    value={mark.description}
                                    onChange={(e) =>
                                      handleMarkupChange(
                                        e,
                                        infoIndex,
                                        markupIndex,
                                      )
                                    }
                                    name="description"
                                    placeholder="Description"
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}

                        {/* breakdown section */}
                        {info.breakdowns.map((breakDown, breakIndex) => {
                          return (
                            <div key={breakIndex}>
                              <div>
                                <div className="text-xl font-semibold mb-4 border-b p-4 flex justify-between items-center">
                                  BreakDowns
                                  <div>
                                    {breakIndex === 0 ? (
                                      <button
                                        type="button"
                                        onClick={() =>
                                          handleAddBreakdown(index)
                                        }
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                      >
                                        Add BreakDowns{" "}
                                        {
                                          formData.fare_infos[infoIndex]
                                            .breakdowns.length
                                        }
                                      </button>
                                    ) : (
                                      <button
                                        className="bg-brandColor cursor-pointer text-white font-bold py-2 px-4 rounded"
                                        type="button"
                                        onClick={() =>
                                          handleRemoveBreakdown(
                                            infoIndex,
                                            breakIndex,
                                          )
                                        }
                                      >
                                        Remove BreakDowns
                                      </button>
                                    )}
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div>
                                    <label>Type</label>
                                    <select
                                      name="type"
                                      value={breakIndex.type}
                                      onChange={(e) =>
                                        handleBreakdownChange(
                                          e,
                                          infoIndex,
                                          breakIndex,
                                        )
                                      }
                                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                      <option value="SEELING">SEELING</option>
                                      <option value="PURCHASING">
                                        PURCHASING
                                      </option>
                                    </select>
                                  </div>

                                  <div>
                                    <label>Pax Type</label>
                                    <select
                                      name="pax_type"
                                      value={breakIndex.pax_type}
                                      onChange={(e) =>
                                        handleBreakdownChange(
                                          e,
                                          infoIndex,
                                          breakIndex,
                                        )
                                      }
                                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                      <option value="ADULT">ADULT</option>
                                      <option value="CHILD">CHILD</option>
                                      <option value="INFANT">INFANT</option>
                                    </select>
                                  </div>

                                  <div>
                                    <label>Base Fare</label>
                                    <input
                                      className={inputClass}
                                      type="number"
                                      value={breakIndex.base_fare}
                                      name="base_fare"
                                      onChange={(e) =>
                                        handleBreakdownChange(
                                          e,
                                          infoIndex,
                                          breakIndex,
                                        )
                                      }
                                      placeholder="Base Fare"
                                    />
                                  </div>

                                  <div>
                                    <label>Tax</label>
                                    <input
                                      className={inputClass}
                                      type="number"
                                      value={breakIndex.tax}
                                      name="tax"
                                      onChange={(e) =>
                                        handleBreakdownChange(
                                          e,
                                          infoIndex,
                                          breakIndex,
                                        )
                                      }
                                      placeholder="Tax"
                                    />
                                  </div>

                                  <div>
                                    <label>Total Fare</label>
                                    <input
                                      className={inputClass}
                                      type="number"
                                      value={breakIndex.total_fare}
                                      name="total_fare"
                                      onChange={(e) =>
                                        handleBreakdownChange(
                                          e,
                                          infoIndex,
                                          breakIndex,
                                        )
                                      }
                                      placeholder="Total Fare"
                                    />
                                  </div>

                                  <div>
                                    <label>Pax Count</label>
                                    <input
                                      className={inputClass}
                                      type="number"
                                      value={breakIndex.pax_count}
                                      name="pax_count"
                                      onChange={(e) =>
                                        handleBreakdownChange(
                                          e,
                                          infoIndex,
                                          breakIndex,
                                        )
                                      }
                                      // onChange={(e) => handleRouteChange(e, index, "breakdowns")}
                                      placeholder="Pax Count"
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* travelers section */}
                              {breakDown.travelers.map(
                                (traveler, travelerIndex) => {
                                  return (
                                    <div key={travelerIndex}>
                                      <div className="text-xl font-semibold mb-4 border-b p-4 flex justify-between items-center">
                                        Travelers
                                        <div>
                                          {travelerIndex === 0 ? (
                                            <button
                                              type="button"
                                              onClick={() =>
                                                handleAddTraveler(
                                                  infoIndex,
                                                  breakIndex,
                                                )
                                              }
                                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                              Add Traveler{" "}
                                              {
                                                formData.fare_infos[infoIndex]
                                                  .breakdowns[breakIndex]
                                                  .travelers.length
                                              }
                                            </button>
                                          ) : (
                                            <button
                                              className="bg-brandColor cursor-pointer text-white font-bold py-2 px-4 rounded"
                                              type="button"
                                              onClick={() =>
                                                handleRemoveTraveler(
                                                  infoIndex,
                                                  breakIndex,
                                                  travelerIndex,
                                                )
                                              }
                                            >
                                              Remove Traveler
                                            </button>
                                          )}
                                        </div>
                                      </div>
                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                          <label>Title</label>
                                          <select
                                            name="title"
                                            value={traveler.title}
                                            onChange={(e) =>
                                              handleTravelerChange(
                                                e,
                                                infoIndex,
                                                breakIndex,
                                                travelerIndex,
                                              )
                                            }
                                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                          >
                                            <option value="MR">MR</option>
                                            <option value="CHILD">CHILD</option>
                                            <option value="INFANT">
                                              INFANT
                                            </option>
                                          </select>
                                        </div>

                                        <div>
                                          <label>First Name</label>
                                          <input
                                            name="first_name"
                                            className={inputClass}
                                            type="text"
                                            value={traveler.first_name}
                                            onChange={(e) =>
                                              handleTravelerChange(
                                                e,
                                                infoIndex,
                                                breakIndex,
                                                travelerIndex,
                                              )
                                            }
                                            placeholder="First Name"
                                          />
                                        </div>

                                        <div>
                                          <label>Last Name</label>
                                          <input
                                            className={inputClass}
                                            type="text"
                                            value={traveler.last_name}
                                            onChange={(e) =>
                                              handleTravelerChange(
                                                e,
                                                infoIndex,
                                                breakIndex,
                                                travelerIndex,
                                              )
                                            }
                                            name="last_name"
                                            placeholder="Last Name"
                                          />
                                        </div>

                                        <div>
                                          <label>Passport Number</label>
                                          <input
                                            className={inputClass}
                                            type="text"
                                            value={traveler.passport_number}
                                            name="passport_number"
                                            onChange={(e) =>
                                              handleTravelerChange(
                                                e,
                                                infoIndex,
                                                breakIndex,
                                                travelerIndex,
                                              )
                                            }
                                            placeholder="Passport Number"
                                          />
                                        </div>

                                        <div>
                                          <label>Passport Expiry Date</label>
                                          <input
                                            className={inputClass}
                                            type="date"
                                            value={
                                              traveler.passport_expiry_date
                                            }
                                            name="passport_expiry_date"
                                            onChange={(e) =>
                                              handleTravelerChange(
                                                e,
                                                infoIndex,
                                                breakIndex,
                                                travelerIndex,
                                              )
                                            }
                                            placeholder="Passport Expiry Date"
                                          />
                                        </div>

                                        <div>
                                          <label>
                                            Passport Issuance Country ID
                                          </label>
                                          <input
                                            name="passport_issuance_country_id"
                                            className={inputClass}
                                            type="number"
                                            value={
                                              traveler.passport_issuance_country_id
                                            }
                                            onChange={(e) =>
                                              handleTravelerChange(
                                                e,
                                                infoIndex,
                                                breakIndex,
                                                travelerIndex,
                                              )
                                            }
                                            placeholder="Passport Issuance Country ID"
                                          />
                                        </div>

                                        <div>
                                          <label>Email</label>
                                          <input
                                            name="email"
                                            className={inputClass}
                                            type="email"
                                            value={traveler.email}
                                            onChange={(e) =>
                                              handleTravelerChange(
                                                e,
                                                infoIndex,
                                                breakIndex,
                                                travelerIndex,
                                              )
                                            }
                                            placeholder="Email"
                                          />
                                        </div>

                                        <div>
                                          <label>Phone</label>
                                          <input
                                            name="phone"
                                            className={inputClass}
                                            type="tel"
                                            value={traveler.phone}
                                            onChange={(e) =>
                                              handleTravelerChange(
                                                e,
                                                infoIndex,
                                                breakIndex,
                                                travelerIndex,
                                              )
                                            }
                                            placeholder="Phone"
                                          />
                                        </div>

                                        <div>
                                          <label>Address</label>
                                          <input
                                            name="address"
                                            className={inputClass}
                                            type="text"
                                            value={traveler.address}
                                            onChange={(e) =>
                                              handleTravelerChange(
                                                e,
                                                infoIndex,
                                                breakIndex,
                                                travelerIndex,
                                              )
                                            }
                                            placeholder="Address"
                                          />
                                        </div>

                                        <div>
                                          <label>City</label>
                                          <input
                                            name="city"
                                            className={inputClass}
                                            type="text"
                                            value={traveler.city}
                                            onChange={(e) =>
                                              handleTravelerChange(
                                                e,
                                                infoIndex,
                                                breakIndex,
                                                travelerIndex,
                                              )
                                            }
                                            placeholder="City"
                                          />
                                        </div>

                                        <div>
                                          <label>State</label>
                                          <input
                                            name="state"
                                            className={inputClass}
                                            type="text"
                                            value={traveler.state}
                                            onChange={(e) =>
                                              handleTravelerChange(
                                                e,
                                                infoIndex,
                                                breakIndex,
                                                travelerIndex,
                                              )
                                            }
                                            placeholder="State"
                                          />
                                        </div>

                                        <div>
                                          <label>Zip Code</label>
                                          <input
                                            name="zip_code"
                                            className={inputClass}
                                            type="text"
                                            value={traveler.zip_code}
                                            onChange={(e) =>
                                              handleTravelerChange(
                                                e,
                                                infoIndex,
                                                breakIndex,
                                                travelerIndex,
                                              )
                                            }
                                            placeholder="Zip Code"
                                          />
                                        </div>

                                        <div>
                                          <label>Country Id</label>
                                          <input
                                            name="country_id"
                                            className={inputClass}
                                            type="text"
                                            value={traveler.country_id}
                                            onChange={(e) =>
                                              handleTravelerChange(
                                                e,
                                                infoIndex,
                                                breakIndex,
                                                travelerIndex,
                                              )
                                            }
                                            placeholder="Country Id"
                                          />
                                        </div>

                                        <div>
                                          <label>Docs</label>
                                          <input
                                            name="docs"
                                            className={inputClass}
                                            type="text"
                                            value={traveler.docs.join(",")}
                                            onChange={(e) =>
                                              handleTravelerChange(
                                                e,
                                                infoIndex,
                                                breakIndex,
                                                travelerIndex,
                                              )
                                            }
                                            placeholder="Docs"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  );
                                },
                              )}
                            </div>
                          );
                        })}
                        {/* service charge section */}
                        {info.service_charges.map((service, serIndex) => {
                          return (
                            <div key={serIndex}>
                              <div className="text-xl font-semibold mb-4 border-b p-4 flex justify-between items-center">
                                Service Charges
                                <div>
                                  {serIndex === 0 ? (
                                    <button
                                      type="button"
                                      onClick={() => handleAddCharge(infoIndex)}
                                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                      Add Service Charges{" "}
                                      {formData.fare_infos.length}
                                    </button>
                                  ) : (
                                    <button
                                      className="bg-brandColor cursor-pointer text-white font-bold py-2 px-4 rounded"
                                      type="button"
                                      onClick={() =>
                                        handleRemoveCharge(infoIndex, serIndex)
                                      }
                                    >
                                      Remove Service Charges
                                    </button>
                                  )}
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                  <label>Name</label>
                                  <input
                                    name="name"
                                    className={inputClass}
                                    type="text"
                                    value={service.name}
                                    onChange={(e) =>
                                      handleServiceChargeChange(
                                        e,
                                        infoIndex,
                                        serIndex,
                                      )
                                    }
                                    placeholder="Name"
                                  />
                                </div>

                                <div>
                                  <label>Price</label>
                                  <input
                                    name="price"
                                    className={inputClass}
                                    type="number"
                                    value={service.price}
                                    onChange={(e) =>
                                      handleServiceChargeChange(
                                        e,
                                        infoIndex,
                                        serIndex,
                                      )
                                    }
                                    placeholder="Price"
                                  />
                                </div>

                                <div>
                                  <label>Description</label>
                                  <input
                                    name="description"
                                    className={inputClass}
                                    type="text"
                                    value={service.description}
                                    onChange={(e) =>
                                      handleServiceChargeChange(
                                        e,
                                        infoIndex,
                                        serIndex,
                                      )
                                    }
                                    placeholder="Description"
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <div>
            <button className=" mt-5 px-3  py-2 bg-black text-white rounded-xl">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlightBookingForm;
