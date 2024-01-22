// Example ContactList component
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/ContactList.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await axios.get(`/api/contacts?page=${currentPage}&pageSize=${pageSize}`);
      setContacts(response.data);
    };

    fetchContacts();
  }, [currentPage, pageSize]);

  const handleDownload = async () => {
    try {
      // Trigger the backend endpoint for downloading contacts
      const response = await axios.get('/api/contacts/download', { responseType: 'blob' });

      // Create a download link for the file and trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'contacts.csv');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* Display contacts */}
      {contacts.map((contact) => (
        // Display contact details here
        <div key={contact._id}>{/* Contact details go here */}</div>
      ))}

      {/* Pagination */}
      <div>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage}</span>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>

      {/* Button for downloading contacts */}
      <button onClick={handleDownload}>Download Contacts</button>
    </div>
  );
};

export default ContactList;
