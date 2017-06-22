
var data = JSON.parse(request.body);
properties = {};
properties.alert_name = data.alert_name;

console.log(properties.alert_name);

var trigger = JSON.stringify({
	"properties": {
  "alert_title": data.alert_title,
  "message": data.message,
  "alert_severity": data.alert_severity,
  "alert_event_samples": data.alert_event_samples,
  "text": data.text,
}
		
	
});

//"recipients" : [ {"targetName": callback.recipient } ]
console.log( 'Response payload: ' + JSON.stringify( trigger ) );
var req = http.request({
method: 'POST',
endpoint: 'xMatters',
path: '/reapi/2015-04-01/forms/205b29cc-d87f-4d07-b89d-04b112504da2/triggers',
headers: {
'Content-Type': 'application/json'
}
});
req.write(trigger);
 
