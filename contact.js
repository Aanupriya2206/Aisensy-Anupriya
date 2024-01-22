// Add a new route for contact download
router.get('/contacts/download', async (req, res) => {
    try {
      const contacts = await Contact.find();  
      res.attachment('contacts.csv'); // Set the filename for download
      res.status(200).send('CSV or Excel file content goes here');
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error downloading contacts' });
    }
  });
  