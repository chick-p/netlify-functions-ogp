const rp = require('request-promise');
const cheerio = require('cheerio');

const extractData = ($meta, propKey, contentKey) => {
  let prop = $meta.attr(propKey);
  const content = $meta.attr(contentKey);
  if (!prop || !content) {
    return;
  } else {
    return {
      prop: prop,
      content: content
    };
  }
};

const getFaviconUrl = ($) => {
  const $links = $('head link');
  $links.each((index, value) => {
    const link = extractData($(value), 'rel', 'href');
    if (link && link.prop === 'icon') {
      return link.content;
    }
  });
  return;
};

module.exports = function parse(url) {
  var options = {
    uri: url,
    timeout: 10*1000,
    transform: (body) => {
      return cheerio.load(body);
    }
  };

  return new Promise((resolve, reject) => {
    rp(options)
      .then($ => {
        let data = {};
        data.title = $('head title').text();
        const favicon = getFaviconUrl($);
        if (favicon) {
          data.favicon = url + favicon;
        }

        const $metas = $('head meta');
        const prefix = 'og:';
        $metas.each((index, value) => {
          const ogp = extractData($(value), 'property', 'content');
          if (ogp) {
            if (ogp.prop.indexOf(prefix) === 0) {
              const prop = ogp.prop.replace(prefix, '');
              data[prop] = ogp.content;
            }
          }
        });
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
