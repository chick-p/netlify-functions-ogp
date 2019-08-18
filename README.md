# README
This repository a netlify function to get ogp(open graph protocol) from any urls.

## How to development
To run the examples locally, here’s what you’ll need:

1. Install modules
    ```
    $ cd netlify-functions-ogp
    $ npm install
    ```

2. Create `.env` file to root directory
    ```
    TIMEOUT_SEC=SEC
    ```

3. Run Server
    ```
    $ npm run serve
    ```
    This will start the netlify-lambda server on http://localhost:9000.
    This function would be called from http://localhost:9000/ogp?url={GET_OGP_URL}


## Delopy
1. In the Netlify web interface, go to [Settings] > [Build & deploy].
2. Set [Environment variables] in [Enviroment] section as the follows:

    |Parameter |Value
    |:--|:--
    |AWS_LAMBDA_JS_RUNTIME |nodejs10.x
    |TIMEOUT_SEC |8

## The features
* Open Graph Protocol
  `https://{YOUR_SITE_NAME}.netlify.com/.netlify/functions/ogp?url={GET_OGP_URL}`

