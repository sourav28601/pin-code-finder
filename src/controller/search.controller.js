const axios = require('axios');

exports.getSearchPage = (req, res) => {
    res.render('search', { results: [], error: null });
};

exports.performSearch = async (req, res) => {
    const { searchType, query } = req.body;
    const url = searchType === 'code'
        ? `http://www.postalpincode.in/api/pincode/${query}`
        : `http://www.postalpincode.in/api/postoffice/${query}`;

    try {
        const response = await axios.get(url);
        const results = response.data.PostOffice || [];
        res.render('search', { results, error: null });
    } catch (error) {
        res.render('search', { results: [], error: 'Error fetching data from API.' });
    }
};
