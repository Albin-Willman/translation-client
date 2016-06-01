
/**
 * Register your development apis as router middlewars
 */

var express = require('express');
var router = express.Router();

router.get('/translations', function (req, res) {
    res.send({ data: [
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

    	] });
});

router.post('/translations', function (req, res) {
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
