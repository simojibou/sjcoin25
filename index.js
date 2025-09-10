const functions = require('firebase-functions');
const axios = require('axios');

exports.fetchEnvatoProducts = functions.https.onRequest(async (req, res) => {
    try {
        const response = await axios.get('https://api.envato.com/v3/market/catalog/search', {
            headers: {
                'Authorization': `Bearer grPmAjJjzDAK00K5B0F5AMj6XS6sMjuE`,
                'User-Agent': 'Marketplace-App'
            },
            params: {
                site: 'themeforest.net',
                term: '*',
                page_size: 20
            }
        });
        res.set('Access-Control-Allow-Origin', '*'); // Allow CORS for client
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching Envato products:', error);
        res.status(error.response?.status || 500).json({
            error: error.message,
            details: error.response?.data || 'Unknown error'
        });
    }
});
