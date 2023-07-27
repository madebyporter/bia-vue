// refresh-contentful-data.js
const storeConfig = require('./store/index');
const contentful = require('contentful');

// Initialize your local data store (replace this with your actual store setup)
const store = {}; // Replace this with your actual store object or state

async function fetchDataAndUpdateLocalStore() {
  try {
    const client = contentful.createClient({
      space: 'ebblsgqwail2',
      accessToken: 'J61txm4RTic9l3shcCKOjEH_Oji6z8TsmFURK4l-Dvs',
      environment: 'staging',
      host: 'preview.contentful.com', // Use 'preview' host for staging environments
    });

    // Fetch new data from Contentful using the Preview API
    const response = await client.getEntries({
      content_type: 'journal',
      include: 9,
    });

    // Update your local data store with the new data (replace this with your store update logic)
    store.journalData = response.items;

    console.log('Journal data from Contentful has been fetched and updated in the local store.');
  } catch (error) {
    console.error('Error fetching journal data from Contentful:', error);
  }
}

// Call the function to fetch and update data from Contentful
fetchDataAndUpdateLocalStore();
