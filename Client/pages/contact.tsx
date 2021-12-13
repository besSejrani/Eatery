import React from "react";

// Maps
import GoogleMapReact from "google-map-react";

//===================================================================================

const AnyReactComponent = ({ text }) => <div style={{ fontSize: 20 }}>{text}</div>;

const Contact = () => (
  <div style={{ height: "100vh", width: "100%" }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyC7R39xeZppXxTJyrc_HOeEJcr5gPJjMDQ" }}
      yesIWantToUseGoogleMapApiInternals
      defaultCenter={[46.44223553312747, 6.8937066975976125]}
      defaultZoom={17}
    >
      {/* @ts-ignore*/}
      <AnyReactComponent lat={46.44223553312747} lng={6.8937066975976125} text="Eatery" />
    </GoogleMapReact>
  </div>
);

export default Contact;
