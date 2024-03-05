/* Amplify Params - DO NOT EDIT
	API_WORKINGMBOL_GRAPHQLAPIENDPOINTOUTPUT
	API_WORKINGMBOL_GRAPHQLAPIIDOUTPUT
	API_WORKINGMBOL_LINETABLE_ARN
	API_WORKINGMBOL_LINETABLE_NAME
	API_WORKINGMBOL_NODETABLE_ARN
	API_WORKINGMBOL_NODETABLE_NAME
	AUTH_WORKINGMBOL6105CF64_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */exports.handler = async function (event) {
  console.log('Received S3 event:', JSON.stringify(event, null, 2));
  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;
  console.log(`Bucket: ${bucket}`, `Key: ${key}`);
};