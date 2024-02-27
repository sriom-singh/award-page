/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import hero from "./assets/1.png";
import logo from "./assets/logo.png";
import person from "./assets/2.png";
import machines from "./assets/3.png";
import { FaPhone, FaFacebookF } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";

const App = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <div className="header flex-row padding-10">
        <div className="hero-image-container">
          <img src={hero} className="hero-image" />
        </div>
        <div className="hero-content flex-column">
          <div>
            <img src={logo} className="logo" />
          </div>
          <p className="bold">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>
          <ul className="list padding-10 semibold">
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <div className="flex-row">
            <div className="award-container display-none">
              <img src={hero} className="award-image" />
            </div>
            <img src={person} className="person-image" />
          </div>

          <p className="bold font-size-14">
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>

      <p className="semibold font-size-14 padding-10 text-center m-top-20">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <div className="flex-row justify-center machines-container">
        <img src={machines} className="machine-image" />
      </div>
      <p className="font-size-14 m-auto ">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <hr className="m-bottom-10" />
      <div className="flex-column gap padding-10">
        <p className="bold m-auto">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <p className="semibold padding-10 font-size-14 m-auto m-top-20 text-center">
          CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS
          & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD &
          BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING
          AGRICULTURE & RESIDENTIAL
        </p>
      </div>

      <footer className="flex-row m-top-20 m-bottom-10">
        <div className="flex-row">
          <span>
            <FaPhone color="red" />
          </span>

          <p>Toll free 1800 200 1234</p>
        </div>
        <div className="flex-row">
          <span>
            <FaFacebookF color="red" />
          </span>

          <p>www.facebook.com/cripumps</p>
        </div>
        <div className="flex-row">
          <BsGlobe size={24} />

          <p>www.crigroups.com</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
