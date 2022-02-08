# Logz.io
Logz.io provides the world’s most popular open-source log management platform, ELK (Elasticsearch, Logstash and Kibana), as a fast, secure and scalable cloud-based service with enterprise-grade enhancements. This xM Labs Integration allows you to connect up a Logz.io trial instance to an xMatters On Demand account to showcase the ease of passing log alerts (based on specified triggers) to xMatters. 

Check out the video:

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/T6QuCnfr1vY/0.jpg)](https://www.youtube.com/watch?v=T6QuCnfr1vY)

---------

<kbd>
  <img src="https://github.com/xmatters/xMatters-Labs/raw/master/media/disclaimer.png">
</kbd>

---------

An updated version of this integration is available. You can install the new version right from the Workflow Templates directory within your xMatters instance. [Learn more](http://help.xmatters.com/integrations/#cshid=Logzio).

---------

# Pre-Requisites
* logz.io account (https://logz.io/)
* xMatters account

# Files
* [LogzioElkAlert.zip](LogzioElkAlert.zip) - The workflow
* [logzio.png](logzio.png) - Logz.io Logo

# Installation

## Application (Logz.io) set up

1. Create a free trial at https://logz.io/ if you need an account
2. Once logged in, goto Alerts and click ALERT ENDPOINTS
3. ADD ENDPOINT, selecting a CUSTOM type
    1. Give it a Name (xMatters is usually useful) and a Description
    2. Add in the Integration URL from the Workflows's Inbound Integration
    3. Select POST Method
    4. Under headers add `content-type=application/json`
4. Add in the following Code to the BODY (You can amend this as you see fit, but this will get you started):

```
{
  "alert_title": "{{alert_title}}",
  "alert_description": "{{message}}",
  "alert_severity": "{{alert_severity}}",
  "alert_event_samples": "{{alert_event_samples}}",
  "text": "{{text}}"
}
```

5. Save it.
6. Now, add an alert definition that uses the alert endpoint.
   
# xMatters set up

1. Load in the [LogzioElkAlert.zip](LogzioElkAlert.zip) workflow
2. Review the Form's (Elk Alert from Logz.io) configuration - add a default group or user in the recipients section
3. In the **Elk Alert** workflow, update the **Create Event** step to include any recipients.

# Testing
Test the notification endpoint by editing it and clicking Test at the bottom of the page. This should show up in the activity log inside of Flow Designer for the Elk Alert workflow in xMatters.

# Troubleshooting
If the activity stream does not contain errors, check to see if an event was created and check the event log for more details. 
