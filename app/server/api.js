
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
