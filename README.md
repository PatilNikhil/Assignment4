# Assignment4 
# First HTTP REST API
#
# Provided a source.json file that contains student information in a JSON format.
# Created HTTP server where a client can submit a HTTP GET request with the following URL: /students/?q=Jan
# The query string “q” is an optional query parameter in your URL.
# If “q” is not specified in the request then returning all records from the source.json file back to the client.
# If “q” is specified as a valid string, then only returning records from the source.json where first name or last name matches the specified "q" parameter (i.e. Substring match, case sensitive). The records must be returned in sorted order; descending sort based on the score.
# The returned data from REST endpoint can be either of these formats:
# JSON
# XML
# Plain Text
# server first checks the “Accept” HTTP header in each request (where the client indicates the format that it “Accepts” or “Desires). Based on that, it decides to return either a JSON, XML or Plain Text.
#
#
#
