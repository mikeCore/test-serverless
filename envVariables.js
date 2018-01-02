'use strict';

module.exports.handler = (event, context, callback) => {


  const response = {
    statusCode: 200,
    body: JSON.stringify({
      variable: 'the value of the variable is: ' + process.env.OTHER_API_KEY
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
