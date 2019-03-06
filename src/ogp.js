import ogp from 'ogp-parser';

exports.handler = async (event, context) => {
  const url = event.queryStringParameters.url;
  return ogp(url, true)
    .then(resp => {
      let data = {'title': resp['title']}
      data['image'] = getOgpProperties(resp, 'image');
      if(getOgpProperties(resp, 'title') !== ''){
        data['title'] = getOgpProperties(resp, 'title');
      }
      data['site_name'] = getOgpProperties(resp, 'title');
      data['description'] = getOgpProperties(resp, 'description');
      data['url'] = getOgpProperties(resp, 'url');
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };
    })
    .catch(error => ({ statusCode: 422, body: String(error) }));
};

function getOgpProperties(data, property){
  let key = 'og:' + property;
  if (!!data['ogp'][key]) {
    return data['ogp'][key][0];
  }
  return '';
}
