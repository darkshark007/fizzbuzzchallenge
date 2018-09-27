/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.fizzbuzz = (req, res) => {
  
  res.set('Access-Control-Allow-Origin', "*")
  res.set('Access-Control-Allow-Methods', 'GET, POST')
  //res.addHeader("Access-Control-Allow-Headers", "Content-Type");

  // Should probably not do this in a real app.
  headers = req.headers['access-control-request-headers']; 
  if (headers) res.setHeader('Access-Control-Allow-Headers', headers); 
  
  var range = req.body.max_range;
  
  if (range) {
    if (isNaN(parseInt(range))) {
	  res.status(400).send("Error");
    }
  } else {
    range = 100;
  }

  var message = "", subMessage = "";
  for ( var i = 0; i <= range; i++ ) {
    subMessage = "";
    if ( i % 3 === 0 ) subMessage+= "Fizz";
    if ( i % 5 === 0 ) subMessage+= "Buzz";
	if (subMessage === "") subMessage+= i;
    message+= subMessage+", ";
  }
    
  
  res.status(200).send(message);
};
