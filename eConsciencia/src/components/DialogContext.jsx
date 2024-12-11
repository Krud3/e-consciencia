import React from "react";
import PropTypes from "prop-types";

const DialogContext = ({ title, text}) => {
  return (
    <div className="absolute top-20 left-20 z-50 pointer-events-auto">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6  mt-20">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-6">{text}</p>
        <div className="flex justify-between">
        </div>
      </div>
    </div>
  );
};

DialogContext.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,

};

export default DialogContext;
