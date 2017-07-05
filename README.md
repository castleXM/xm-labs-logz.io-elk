# Logz.io
Logz.io provides the world’s most popular open-source log management platform, ELK (Elasticsearch, Logstash and Kibana), as a fast, secure and scalable cloud-based service with enterprise-grade enhancements. This xM Labs Integration allows you to connect up a Logz.io trial instance to an xMatters On Demand account to showcase the ease of passing log alerts (based on specified triggers) to xMatters. 

# Pre-Requisites
* logz.io account (https://logz.io/)
* xMatters account

# Files
* [Logz-io_IB.js](Logz-io_IB.js) - The Integration Builder JS to setup the inbound integration into xM, should you need it standalone to the Comm Plan.
* [LogzioElkAlert.zip](LogzioElkAlert.zip) - The comm plan
* [CURL.txt](CURL.txt) - A simple CURL command that'll allow you to force a log file (below) into Logz.io to mimmick a log file being read by Logz.io off a real server (You'll need to amend with the filepath of the SQL file AND your Logz.io Token Key)
* [mysqllogfile.sql](mysqllogfile.sql) - an example MySQL log file that you can upload into Logz.io using the above CURL script
* [media/Logz-io.mp4](Logz-io.mp4) - Video example of the integration in action

# Installation

## Application (Logz.io) set up

1. Create a free trial at https://logz.io/ if you need an account
2. Once logged in, goto Alerts and click ALERT ENDPOINTS
3. ADD ENDPOINT, selecting a CUSTOM type
4. Give it a Name (xMatters is usually useful) and a Description
5. Add in the Integration URL from the Comm Plan's Inbound Integration
6. Select POST Method
7. Add in the following Code to the BODY (You can amend this as you see fit, but this will get you started):

``
{
  "alert_title": "{{alert_title}}",
  "alert_description": "{{message}}",
  "alert_severity": "{{alert_severity}}",
  "alert_event_samples": "{{alert_event_samples}}",
  "text": "{{text}}"
}
``

8. Save it.
9. Now, add an ALERT DEFINITION
10. Within CONDITIONS, you can specify a QUERY (if you just want to test the integration, put * here for now)
11. Under TRIGGER IF condition, select how you want the alert to trigger (# of events is a good starting point)
12. GROUP BY can be left as 'None'
13. CONDITION can, for testing, be set as GREATER THAN, with a THRESHOLD of 0 OVER A PERIOD of 5 Minutes
14. SAVE ALERT and goto DEFINITIONS to Name, Describe and set a Severity Level. 
15. TRIGGERS will allow you to manage how often you're notified (SUPPRESS NOTIFICATIONS FOR x) and also specify the NOTIFICATIONS ENDPOINTS (use the one you setup earlier). You can also opt in your email here - it's a good way of checking that Logz.io is actually having the Alert triggered based on your setup above. 
   
## xMatters set up

1. Load in the [LogzioElkAlert.zip](LogzioElkAlert.zip) Comm Plan
2. Review the Form's (Elk Alert from Logz.io) configuration - add a default group or user in the recipients section

# Testing
To test, simply open a Terminal/Command Prompt and run the (edited) CURL file provided (You'll need to amend your CURL script to the relevant path of your MySQL log). That should upload your MySQL.log file into the KIBANA tab within Logz.io (It can take a minute or two) - keep refreshing the screen. 
(Not working? Did you amend the TOKEN in the CURL command with the TOKEN from your Logz.io account?)

That should then show up, trigger your alert threshold and send the info to xMatters (where you can monitor the IB Activity Stream or Reports tab to see what's happening, or not happening)

# Troubleshooting
If using the curl command, verify any errors printed. the `-v` option will put curl into verbose mode and more information will be printed to the terminal. 

If the curl command exits ok, check the Activity Stream for the `Logz.io integration` inbound integration and inspect for any errors. 

If the activity stream does not contain errors, check to see if an event was created and check the event log for more details. 
