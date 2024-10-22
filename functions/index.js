const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();


exports.saveUserConfiguration = functions.https.onRequest(async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(403).send('Forbidden! This function only accepts POST requests.');
    }

 
    const { userId, configuration } = req.body;

    try {
  
        await admin.firestore().collection('userConfigurations').doc(userId).set(configuration);
        return res.status(200).send('Configuration saved successfully.');
    } catch (error) {
        console.error('Error saving configuration:', error);
        return res.status(500).send('Error saving configuration.');
    }
});


exports.fetchUserConfiguration = functions.https.onRequest(async (req, res) => {

    if (req.method !== 'GET') {
        return res.status(403).send('Forbidden! This function only accepts GET requests.');
    }

    const { userId } = req.query;

    try {
    
        const doc = await admin.firestore().collection('userConfigurations').doc(userId).get();
        if (!doc.exists) {
            return res.status(404).send('No configuration found.');
        }
        return res.status(200).json(doc.data());
    } catch (error) {
        console.error('Error fetching configuration:', error);
        return res.status(500).send('Error fetching configuration.');
    }
});

