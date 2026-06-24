import React from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const TawkToWidget = () => {
  const customStyle = {
    zIndex: "9998",
    visibility: {
      desktop: {
        position: "br",
        xOffset: 24,
        yOffset: 105,
      },
      mobile: {
        position: "br",
        xOffset: 24,
        yOffset: 105,
      },
    },
  };

  return (
    <TawkMessengerReact
      propertyId="6a399c1d351d6e1d434331dd"
      widgetId="1jrogjl6p"
      customStyle={customStyle}
      onLoad={() => {
        console.log("Tawk.to chat loaded successfully");
      }}
    />
  );
};

export default TawkToWidget;