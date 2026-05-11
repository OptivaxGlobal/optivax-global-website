import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "13074301006"; // with country code
  const message = "Hello Optivax Global, I need your services.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-5 z-40 group"
    >
      {/* PULSE */}
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></span>

      {/* BUTTON */}
      <div
        className="relative flex items-center gap-2 
        bg-green-500 text-white 
        px-4 py-2.5 
        rounded-full shadow-lg 
        hover:bg-green-600 
        transition-all duration-300 
        hover:scale-105"
      >
        {/* ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.77 11.77 0 0012.01 0C5.38 0 .01 5.37.01 12c0 2.12.56 4.19 1.62 6.02L0 24l6.15-1.61A11.96 11.96 0 0012.01 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.49-8.52zM12 21.83a9.8 9.8 0 01-4.99-1.37l-.36-.21-3.65.96.98-3.56-.23-.37A9.82 9.82 0 012.18 12c0-5.41 4.41-9.82 9.82-9.82 2.62 0 5.08 1.02 6.93 2.87A9.72 9.72 0 0121.82 12c0 5.41-4.41 9.83-9.82 9.83zm5.39-7.39c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.58-.49-.5-.66-.51h-.56c-.2 0-.52.07-.8.37-.27.29-1.05 1.03-1.05 2.52s1.08 2.92 1.23 3.12c.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.72-.7 1.96-1.37.24-.66.24-1.23.17-1.35-.07-.12-.27-.2-.56-.35z" />
        </svg>

        {/* TEXT (desktop only) */}
        <span className="hidden sm:block text-sm font-medium">
          Chat on WhatsApp
        </span>
      </div>
    </a>
  );
};

export default WhatsAppButton;