"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { SiWhatsapp } from "react-icons/si";



const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false); // animation visibility
  const widgetRef = useRef<HTMLDivElement>(null);


  const phoneNumber = "+2349022149874";
  const message =
    "Hi Juliet, I saw your portfolio and I'm interested in working with you.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  // ✅ Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Animate widget appearance
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={widgetRef}
      className={`fixed bottom-6 right-6 z-50 transition-all duration-700  ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Chat Box */}
      {open && (
        <div className="mb-4 w-72 rounded-2xl shadow-2xl bg-white overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-green-500 text-white p-2 flex items-center gap-3">
            <Image
              src="/images/khenny3.jpeg"
              alt="profile"
              width={40}
              height={40}
              className="rounded-full"
            />

            <div>
              <p className="font-semibold text-sm">Juliet</p>
              <p className="text-xs opacity-90">Online • replies instantly</p>
            </div>
          </div>

          {/* Message */}
          <div className="p-4 bg-gray-50">
            <div className="bg-white p-1 rounded-xl text-sm shadow">
              Hi there 👋 <br /> How can I help you?
            </div>
          </div>

          {/* Start Chat */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white p-3 font-medium"
          >
            <SiWhatsapp size={18} />
            Start Chat
          </a>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-linear-to-tr from-green-500 to-green-400 text-white shadow-2xl hover:scale-110 transition-all duration-300"
      >
        {/* Pulse ring */}
        <span className="absolute w-full h-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

        {/* Notification dot */}
        <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>

        {/* Icon */}
        <SiWhatsapp size={26} className="relative z-10" />
      </button>
    </div>
  );
};

export default WhatsAppWidget;
