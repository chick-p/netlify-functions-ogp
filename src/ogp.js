const ogpParser = require('./utils/ogpParser');

exports.handler = async (event) => {
  const url = event.queryStringParameters.url;
  return ogpParser(url).then((resp) => {
    return {
      statusCode: 200,
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify(resp)
    };
  }).catch((err) => {
    return {
      statusCode: 200,
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ error: String(err) })
    };
  });
};
