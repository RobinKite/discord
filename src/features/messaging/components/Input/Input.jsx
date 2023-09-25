import { useRef } from "react";
import { BiSolidPlusCircle } from "react-icons/bi";
import PropTypes from "prop-types";

export function Input({ submitCallback }) {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedText = inputRef.current.value.trim();
    if (trimmedText) {
      submitCallback(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="px-4 pb-6">
      <form
        onSubmit={handleSubmit}
        className="flex items-center rounded-lg bg-[#383A3F] px-4 py-3 text-gray-300">
        <BiSolidPlusCircle className="mr-4 text-[#b5bac1]" size={24} />
        <input
          className="w-full bg-transparent text-[0.9rem] placeholder:text-gray-500 focus:outline-none"
          placeholder="Message"
          type="text"
          ref={inputRef}
        />
      </form>
    </div>
  );
}

Input.propTypes = {
  submitCallback: PropTypes.func.isRequired,
};
