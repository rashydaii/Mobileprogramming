
// ==================== FIREBASE CONFIG ====================
const firebaseConfig = {
  apiKey: "AIzaSyCxPMwQbp3Krwpn5-Y05kFikpzGgzC9K84",
  authDomain: "hellbound-mc.firebaseapp.com",
  projectId: "hellbound-mc",
  storageBucket: "hellbound-mc.firebasestorage.app",
  messagingSenderId: "122527408194",
  appId: "1:122527408114:web:2a5230da25f65a9c1f0ddb",
  measurementId: "G-8K5GK4ZZFL",
  databaseURL: "https://hellbound-mc-default-rtdb.firebaseio.com"
};

// ==================== INITIALIZE FIREBASE ====================
console.log('Contact.js loaded');
console.log('Firebase object available:', typeof firebase !== 'undefined');

let db = null;

function initializeFirebase() {
  if (typeof firebase === 'undefined') {
    console.error('Firebase SDK not loaded! Make sure to load firebase scripts before Contact.js');
    return false;
  }

  try {
    if (!firebase.apps || firebase.apps.length === 0) {
      console.log('Initializing Firebase app...');
      firebase.initializeApp(firebaseConfig);
      console.log('✓ Firebase app initialized');
    } else {
      console.log('✓ Firebase app already initialized');
    }

    db = firebase.database();
    console.log('✓ Database reference obtained');
    console.log('Database URL:', db.ref().toString());
    return true;
  } catch (error) {
    console.error('✗ Error initializing Firebase:', error);
    return false;
  }
}

// ==================== CONTACT FORM INITIALIZATION ====================
function initializeContactForm() {
  console.log('initializeContactForm() called');

  // Initialize Firebase first
  if (!initializeFirebase()) {
    console.error('Failed to initialize Firebase');
    return;
  }

  const contactForm = document.getElementById('contactForm');
  const statusDiv = document.getElementById('status');
  const contactsList = document.getElementById('contactsList');

  if (!contactForm) {
    console.error('✗ Contact form element not found');
    return;
  }

  console.log('✓ Form elements found');

  // ==================== FORM SUBMISSION HANDLER ====================
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('=== FORM SUBMITTED ===');

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    console.log('Form data:', { name, email, message });

    // Validation
    if (!name || !email || !message) {
      const errorMsg = '✗ Please fill in all fields';
      console.warn(errorMsg);
      if (statusDiv) {
        statusDiv.textContent = errorMsg;
        statusDiv.className = 'error';
        statusDiv.style.display = 'block';
      }
      return;
    }

    try {
      const contactsRef = db.ref('contacts');
      const newContactRef = contactsRef.push();
      
      console.log('Saving to:', contactsRef.toString());
      console.log('New key:', newContactRef.key);

      const timestamp = new Date().toISOString();
      const contactData = {
        name: name,
        email: email,
        message: message,
        timestamp: timestamp
      };

      console.log('Contact data:', contactData);

      await newContactRef.set(contactData);

      console.log('✓ Data saved successfully!');
      
      if (statusDiv) {
        statusDiv.textContent = '✓ Message sent successfully!';
        statusDiv.className = 'success';
        statusDiv.style.display = 'block';
        setTimeout(() => {
          statusDiv.style.display = 'none';
        }, 3000);
      }
      
      contactForm.reset();
    } catch (error) {
      console.error('✗ Error saving data:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      
      if (statusDiv) {
        statusDiv.textContent = '✗ Failed to send message: ' + error.message;
        statusDiv.className = 'error';
        statusDiv.style.display = 'block';
      }
    }
  });

  // ==================== REAL-TIME LISTENER ====================
  if (contactsList) {
    console.log('Setting up real-time listener...');
    
    db.ref('contacts').on('value', 
      (snapshot) => {
        console.log('=== DATABASE UPDATE ===');
        const data = snapshot.val();
        console.log('Data received:', data);

        contactsList.innerHTML = '';

        if (!data) {
          contactsList.innerHTML = '<p style="color: #999;">No messages yet.</p>';
          console.log('No data in database');
          return;
        }

        const contactsArray = [];
        snapshot.forEach((childSnapshot) => {
          contactsArray.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        console.log('Total contacts:', contactsArray.length);

        // Display newest first
        contactsArray.reverse().forEach((contact, index) => {
          console.log(`Displaying contact ${index + 1}:`, contact.name);
          
          const contactDiv = document.createElement('div');
          contactDiv.className = 'contact-item';
          
          const date = new Date(contact.timestamp);
          const formattedDate = date.toLocaleString();
          
          contactDiv.innerHTML = `
            <h3>${contact.name}</h3>
            <p><strong>Email:</strong> ${contact.email}</p>
            <p><strong>Message:</strong> ${contact.message}</p>
            <p style="color: #666; font-size: 12px;">Sent: ${formattedDate}</p>
          `;
          contactsList.appendChild(contactDiv);
        });
      },
      (error) => {
        console.error('✗ Error reading from database:', error);
        console.error('Error code:', error.code);
      }
    );
  }

  console.log('✓ Contact form initialized successfully');
}

// ==================== HELPER FUNCTIONS ====================
async function addContact(name, email, message) {
  if (!db) {
    console.error('Database not initialized');
    return { success: false, message: 'Database not initialized' };
  }

  try {
    const contactsRef = db.ref('contacts');
    const newContactRef = contactsRef.push();
    
    await newContactRef.set({
      name: name,
      email: email,
      message: message,
      timestamp: new Date().toISOString()
    });
    
    console.log('✓ Contact added with ID:', newContactRef.key);
    return {
      success: true,
      id: newContactRef.key,
      message: 'Message sent successfully!'
    };
  } catch (error) {
    console.error('✗ Error adding contact:', error);
    return {
      success: false,
      message: 'Failed to send message: ' + error.message
    };
  }
}

async function getAllContacts() {
  if (!db) {
    console.error('Database not initialized');
    return [];
  }

  try {
    const snapshot = await db.ref('contacts').once('value');
    const data = snapshot.val();
    
    if (!data) {
      return [];
    }

    const contactsArray = [];
    Object.keys(data).forEach(key => {
      contactsArray.push({
        id: key,
        ...data[key]
      });
    });

    return contactsArray.reverse();
  } catch (error) {
    console.error('✗ Error getting contacts:', error);
    return [];
  }
}

function listenToContacts(callback) {
  if (!db) {
    console.error('Database not initialized');
    return;
  }

  try {
    db.ref('contacts').on('value', (snapshot) => {
      const data = snapshot.val();

      if (!data) {
        callback([]);
        return;
      }

      const contactsArray = [];
      Object.keys(data).forEach(key => {
        contactsArray.push({
          id: key,
          ...data[key]
        });
      });

      callback(contactsArray.reverse());
    });
  } catch (error) {
    console.error('✗ Error listening to contacts:', error);
  }
}

function deleteContact(contactId) {
  if (!db) {
    console.error('Database not initialized');
    return;
  }

  try {
    db.ref(`contacts/${contactId}`).remove();
    console.log('✓ Contact deleted');
  } catch (error) {
    console.error('✗ Error deleting contact:', error);
  }
}

function updateContact(contactId, updates) {
  if (!db) {
    console.error('Database not initialized');
    return;
  }

  try {
    db.ref(`contacts/${contactId}`).update(updates);
    console.log('✓ Contact updated');
  } catch (error) {
    console.error('✗ Error updating contact:', error);
  }
}

// ==================== EXPORTS ====================
if (typeof window !== 'undefined') {
  window.contactManager = {
    firebaseConfig,
    initializeContactForm,
    initializeFirebase,
    addContact,
    getAllContacts,
    listenToContacts,
    deleteContact,
    updateContact
  };
  console.log('✓ contactManager exported to window');
}

/**
 * Add a new contact to Firebase Realtime Database
 * @param {string} name - Contact name
 * @param {string} email - Contact email
 * @param {string} message - Contact message
 * @returns {Promise} - Promise that resolves when message is sent
 */
async function addContact(name, email, message) {
  try {
    const contactsRef = firebase.database().ref('contacts');
    const newContactRef = contactsRef.push();
    
    await newContactRef.set({
      name: name,
      email: email,
      message: message,
      timestamp: new Date().toISOString()
    });
    
    console.log("Contact added successfully with ID:", newContactRef.key);
    return {
      success: true,
      id: newContactRef.key,
      message: "Message sent successfully!"
    };
  } catch (error) {
    console.error("Error adding contact:", error);
    return {
      success: false,
      message: "Failed to send message: " + error.message
    };
  }
}

/**
 * Get all contacts from Firebase Realtime Database
 * @returns {Promise<Array>} - Array of all contacts
 */
async function getAllContacts() {
  try {
    const snapshot = await firebase.database().ref('contacts').once('value');
    const data = snapshot.val();
    
    if (!data) {
      return [];
    }

    const contactsArray = [];
    Object.keys(data).forEach(key => {
      contactsArray.push({
        id: key,
        ...data[key]
      });
    });

    return contactsArray.reverse(); // Newest first
  } catch (error) {
    console.error("Error getting contacts:", error);
    return [];
  }
}

/**
 * Listen to contacts in real-time
 * @param {function} callback - Function called when data changes
 */
function listenToContacts(callback) {
  try {
    firebase.database().ref('contacts').on('value', (snapshot) => {
      const data = snapshot.val();

      if (!data) {
        callback([]);
        return;
      }

      const contactsArray = [];
      Object.keys(data).forEach(key => {
        contactsArray.push({
          id: key,
          ...data[key]
        });
      });

      callback(contactsArray.reverse()); // Newest first
    });
  } catch (error) {
    console.error("Error listening to contacts:", error);
  }
}

/**
 * Delete a contact from Firebase
 * @param {string} contactId - ID of contact to delete
 */
function deleteContact(contactId) {
  try {
    firebase.database().ref(`contacts/${contactId}`).remove();
    console.log("Contact deleted successfully");
  } catch (error) {
    console.error("Error deleting contact:", error);
  }
}

/**
 * Update a contact in Firebase
 * @param {string} contactId - ID of contact to update
 * @param {object} updates - Object containing fields to update
 */
function updateContact(contactId, updates) {
  try {
    firebase.database().ref(`contacts/${contactId}`).update(updates);
    console.log("Contact updated successfully");
  } catch (error) {
    console.error("Error updating contact:", error);
  }
}

// ==================== EXPORTS ====================
// For use in HTML
if (typeof window !== 'undefined') {
  window.contactManager = {
    firebaseConfig,
    initializeContactForm,
    addContact,
    getAllContacts,
    listenToContacts,
    deleteContact,
    updateContact
  };
}
