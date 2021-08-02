

'use strict';

const utill = {
    responseSuccessJSON(status, message, response) {
        return {
            "status": 200,
            "message": message,
            "response": response
        };
    },
    responseErrorJSON(status, message, error) {
        return {
            "status": 401,
            "message": message,
            "error": error
        };
    },
   };
   
module.exports = utill;
