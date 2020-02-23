# Markdown Report of The Project
#### Step 1: 
 1. Downloaded the data from the given link
 2. Converted the CSV to json for easier data handeling.
 
#### Step 2:
  1. Push the data from json to the SQS queue
  2. csvToSqsLambdaFunction.js this lambda function from this repo is used to upload the data converted to json to SQS queue
  
#### Step 3: 
  1. Push the data from SQS queue to DynamoDB.
  2. Create a table in DynamoDB, use 'identyfikator' as the primary key since this key is non-repeating in the dataset.
  3. Wrote a lambda function "pushDataFromSqsToDynamoDb.js" that pushed the data from SQS to DynamoDB table.
  
#### Step 4: 
  1. Create an endpoint that returns the data as group of hotspots that are under 3km radius.
  2. Wrote a lambda function "returnHotspots.js". Added the AWS API gateway as a trigger and created a HTTP GET API. API endpoint trigghers this lambda function and returns the hotspots.
  3. To calculate the distance between points a function is used that is based on " Haversine formula".
  
  #### Step 5: 
    1. A small python Application reads the data from the ENDPOINT that we created.
    2. AFter reading the data it does some necessary conversions.
    3. After getting the data ready it plots the hotspots on a graph.
    4. The code of python application is in "plot.py" file
    
    
  #### PLOT:
    
    ![alt text](https://imgur.com/QYoU1w5 "Plot")
    
    
    <img src="https://imgur.com/QYoU1w5"
     alt="Markdown Monster icon"
     style="float: left; margin-right: 10px;" />
