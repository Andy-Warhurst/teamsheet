import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLocaleLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}

      {options.map((name) => ({ name }))}

      {/* <select
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={options.length === 0}
      >
        <option>All</option>
        {options.map((item) => (
          <option key={item.id} value={item}>
            {item}
          </option>
        ))}
      </select> */}
    </label>
  );
  return [state, Dropdown, setState];
};

export default useDropdown;
