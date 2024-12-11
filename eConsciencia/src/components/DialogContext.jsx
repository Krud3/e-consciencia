import React from "react";
import PropTypes from "prop-types";

const DialogContext = ({ title, text, onCancel, onValidate }) => {
  return (
    <div className="absolute top-20 left-20 z-50 pointer-events-auto">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6  mt-20">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-6">{text}</p>
        <div className="flex justify-between">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Cancelar
          </button>
          <button
            onClick={onValidate}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Validar
          </button>
        </div>
      </div>
    </div>
  );
};

DialogContext.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onValidate: PropTypes.func.isRequired,
};

export default DialogContext;
