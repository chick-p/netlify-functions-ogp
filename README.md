# README
This repository is Netlify Lambda Function for HUGO website.

## Settings
1. In the Netlify web interface, go to [Settings] > [Build & deploy].
2. Set [Environment variables] in [Enviroment] section as the follows:

    |Parameter |Value
    |:--|:--
    |AWS_LAMBDA_JS_RUNTIME |nodejs10.x

## The features
* Open Graph Protocol
  `https://{YOUR_SITE_NAME}.netlify.com/.netlify/functions/ogp?url={GET_OGP_URL}`

