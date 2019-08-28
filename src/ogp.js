const ogpParser = require('./utils/ogpParser');

const createResponse = (status, body) => {
  return {
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    statusCode: status,
    body: JSON.stringify(body)
  };
}

exports.handler = async (event, context, callback) => {
  const url = event.queryStringParameters.url;
  try {
    const resp = await ogpParser(url);
    callback(null, createResponse(200, resp));
  } catch(err) {
    callback(null, createResponse(200, {
      error: String(err)
    }));
  }
};
