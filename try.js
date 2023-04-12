function decodeReqBody(contentEncoding, contentType, reqBodyBuf) {
  return new Promise(resolve => {
    if (!contentType)
      throw new Error('123')

    resolve({
      type: 'text',
      data: reqBodyBuf.toString()
    })
  })
}


function handle(reqURL, reqMethod, reqHeaders, reqBody) {
  return new Promise(resolve => {
    resolve({
      code: 200,
      headers: {},
      body: 'OK OK'
    })
  })
}

function writeResponse(resp) {
  console.log(resp)
}

decodeReqBody(null, 'a', Buffer.from('ahihi'))
  .then(reqBody => handle('/login', 'GET', {}, reqBody))
  .then(resp => writeResponse(resp))
  .catch(err => console.log(err.message))

console.log('Continue working')