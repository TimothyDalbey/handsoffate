function handler(event) {
  var authHeaders = event.request.headers.authorization;

  // The Base64-encoded Auth string that should be present.
  // It is an encoding of `Basic base64([username]:[password])`
  // The username and password are:
  //      Username: handsoffate
  //      Password: coffeesandwiches
  var expected = 'Basic aGFuZHNvZmZhdGU6Y29mZmVlc2FuZHdpY2hlcw==';

  // If an Authorization header is supplied and it's an exact match, pass the
  // request on through to CF/the origin without any modification.
  var isDev = (event.context.distributionDomainName === 'dt0j47v74tr2z.cloudfront.net');
  if (isDev && authHeaders && authHeaders.value === expected) {
    return event.request;
  }

  // If the request is to the /protected directory
  // AND the Authorization header is a exact match, pass the request
  var protectedDirectory  = ((event.request.uri).match(/^\/protected\/.*/i) !== null);
  if(!isDev){
    if(!protectedDirectory){
      return event.request;
    }
    if(authHeaders && authHeaders.value === expected){
      return event.request
    }
  }

  // But if we get here, we must either be missing the auth header or the
  // credentials failed to match what we expected.
  // Request the browser present the Basic Auth dialog.
  var response = {
    statusCode: 401,
    statusDescription: "Unauthorized",
    headers: {
      "www-authenticate": {
        value: 'Basic realm="Enter credentials for this super secure site"',
      },
    },
  };

  return response;
}
