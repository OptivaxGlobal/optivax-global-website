import React from "react";
import { motion } from "framer-motion";

import logo1 from "../assets/clients/logo1.png";
import logo2 from "../assets/clients/logo2.png";
import logo3 from "../assets/clients/logo3.png";
import logo4 from "../assets/clients/logo4.png";
import logo5 from "../assets/clients/logo5.png";
import logo6 from "../assets/clients/logo6.png";
import logo7 from "../assets/clients/logo7.png";
import logo8 from "../assets/clients/logo8.png";
import logo9 from "../assets/clients/logo9.png";
import logo10 from "../assets/clients/logo10.png";
import logo11 from "../assets/clients/logo11.png";
import logo12 from "../assets/clients/logo12.png";
import logo13 from "../assets/clients/logo13.png";
import logo14 from "../assets/clients/logo14.png";
import logo15 from "../assets/clients/logo15.png";
import logo16 from "../assets/clients/logo16.png";
import logo17 from "../assets/clients/logo17.png";
import logo18 from "../assets/clients/logo18.png";
import logo19 from "../assets/clients/logo19.png";
import logo20 from "../assets/clients/logo20.png";
import logo21 from "../assets/clients/logo21.png";
import logo22 from "../assets/clients/logo22.png";
import logo23 from "../assets/clients/logo23.png";

const clientLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8,
  logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16,
  logo17, logo18, logo19, logo20, logo21, logo22, logo23,
];

const marqueeLogos = [...clientLogos, ...clientLogos];

const TrustedClients = () => {
  return (
    <section className="py-20 bg-[#0C0D0D] border-t border-b border-[#1E1E2A] overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-gray-400 mb-12 uppercase">
          WORKED WITH GLOBAL BRANDS AND STARTUPS
        </p>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex items-center gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            }}
          >
            {marqueeLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-24 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="max-w-full max-h-16 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;