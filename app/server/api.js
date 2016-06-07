
/**
 * Register your development apis as router middlewars
 */

var express = require('express');
var router = express.Router();

router.get('/translations', function (req, res) {
    res.send([
    	{
    		key: 'path/something',
    		translations: {
                en: 'translate me',
                sv: ''
         	},
         },
         {
            key: 'path/something/else',
            translations:{
                en: 'translate me as well',
                sv: 'översatt'
            },
        },

    	]);
});

router.get('/languages', function(req, res) {
    res.send([
        {"id":1,"iso":"en","name":"English"},{"id":2,"iso":"sv","name":"Swedish"}
        ])
});

router.post('/translations', function (req, res) {
    res.send({
        data: true
    })
});

router.post('/translations/uploadYML', function (req, res) {
    res.send({
        data: true
    })
});

router.get('/translations/downloadYML', function (req, res) {
    res.send({
        yml: "---\nen:\n  contact:\n    title: \"'Contact us'\"\n    thank_you: \"'Thank you for your message. We will be in touch as soon as possible.'\"\n  common:\n    send: \"'Send'\"\n    all: \"'Show all'\"\n  products:\n    listing:\n      title: \"'Our products'\"\n      categories: \"'Categories'\"\n      no_products: \"'No products found'\"\n    attributes:\n      article_number: \"'Article number'\"\n      effect: \"'Effect'\"\n      material: \"'Material'\"\n      dimensions: \"'Dimensions'\"\n      connection: \"'Connection'\"\n      capacity: \"'Performance'\"\n      description: \"'Description'\"\n      mount: \"'Mount'\"\n      misc: \"'Other info'\"\n      approvals: \"'Approvals'\"\n"
    })
});

router.post('/users/login', function (req, res) {
    res.send({
        data: {
            attributes: {
                user_id: '12',
                token: 'secret_token'
            }
        }
    })
});

router.get('/users/verify', function(req, res) {
    res.send({
        data: true
    })
});

router.delete('/users/logout', function(req, res) {
    res.send({
        data: true
    })
});

module.exports = router;
