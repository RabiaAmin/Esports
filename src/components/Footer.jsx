import React from "react";
import { FaInstagram, FaTwitch, FaDiscord, FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 px-5 md:px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <h1 className="font-bold text-2xl font-general">
            Game<span className="font-MyFont">Zone</span>
          </h1>
          <p className="text-sm mt-2 text-gray-400">
            Dive into the world of competitive gaming.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#about" className="hover:text-primary transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-primary transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#cookies" className="hover:text-primary transition">
                Set Cookies
              </a>
            </li>
          </ul>
        </div>

        {/* Games */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Games</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#lol" className="hover:text-primary transition">
                League of Legends
              </a>
            </li>
            <li>
              <a href="#siege" className="hover:text-primary transition">
                Siege X
              </a>
            </li>
            <li>
              <a href="#valorant" className="hover:text-primary transition">
                Valorant
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <ul className="flex gap-4 text-white text-xl">
            <li>
              <a
                href="#"
                className="hover:text-primary transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary transition"
                aria-label="Twitch"
              >
                <FaTwitch />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary transition"
                aria-label="Discord"
              >
                <FaDiscord />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary transition"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="w-full border-t border-gray-700 mt-10 pt-5 text-center">
        <p className="text-sm text-gray-400">
          © 2024 GameZone. All rights reserved. |{" "}
          <a
            href="https://rabiadevportfolio.netlify.app"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            rabia.dev
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
