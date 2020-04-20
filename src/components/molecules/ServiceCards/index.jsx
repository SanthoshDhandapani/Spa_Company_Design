/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo } from "react";
import ClientsImg from "../../../assets/images/clients.png";
import OperationsImg from "../../../assets/images/operations.png";
import ProfessionalsImg from "../../../assets/images/professionals.png";
import TinyCard from "../../atoms/Card/TinyCard";
import "./ServiceCards.scss";

const serviceList = [
  { image: { source: ClientsImg, alt: "clientsImage" }, title: "Clients" },
  {
    image: { source: ProfessionalsImg, alt: "professionalsImage" },
    title: "Professionals",
  },
  {
    image: { source: OperationsImg, alt: "operationsImage" },
    title: "Operations",
  },
];

const ServiceCards = memo(() => (
  <div className="service-cards">
    {serviceList.map((service) => (
      <TinyCard {...service} key={service.title} />
    ))}
  </div>
));

export default ServiceCards;
