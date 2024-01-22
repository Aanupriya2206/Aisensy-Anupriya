import React, { useState } from 'react';

const ContactFilter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    onFilterChange(value);
  };

  return (
    <div className="contact-filter">
      <label htmlFor="filter">Filter Contacts: </label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Enter name or email"
      />
    </div>
  );
};

export default ContactFilter;
