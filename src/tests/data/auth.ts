export const context = {
    awsRequestId: 'ckcj704sr0002lh1e9grd9sla',
    callbackWaitsForEmptyEventLoop: true,
    clientContext: null,
    functionName: 'swamphacks-api-dev-login',
    functionVersion: '$LATEST',
    identity: undefined,
    invokedFunctionArn: 'offline_invokedFunctionArn_for_swamphacks-api-dev-login',
    logGroupName: 'offline_logGroupName_for_swamphacks-api-dev-login',
    logStreamName: 'offline_logStreamName_for_swamphacks-api-dev-login',
    memoryLimitInMB: '128',
    getRemainingTimeInMillis: () => 5,
    done: () => null,
    fail: () => null,
    succeed: () => null
}

export const loginEvent = {
    body: "{\n    \"test\": true\n}",
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'PostmanRuntime/7.26.1',
        'Accept': '*/*',
        'Cache-Control': 'no-cache',
        'Postman-Token': '80bd329b-dede-47ad-875e-a70337410976',
        'Host': 'localhost:1337',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Content-Length': '20'
    },
    httpMethod: 'POST',
    isBase64Encoded: false,
    multiValueHeaders: {
        'Content-Type': [
            'application/json'
        ],
        'User-Agent': [
            'PostmanRuntime/7.26.1'
        ],
        'Accept': [
            '*/*'
        ],
        'Cache-Control': [
            'no-cache'
        ],
        'Postman-Token': [
            '80bd329b-dede-47ad-875e-a70337410976'
        ],
        'Host': [
            'localhost:1337'
        ],
        'Accept-Encoding': [
            'gzip, deflate, br'
        ],
        'Connection': [
            'keep-alive'
        ],
        'Content-Length': [
            '20'
        ]
    },
    multiValueQueryStringParameters: null,
    path: '/login',
    pathParameters: null,
    queryStringParameters: null,
    requestContext: {
        'accountId': 'offlineContext_accountId',
        'apiId': 'offlineContext_apiId',
        'authorizer': {
            'principalId': 'offlineContext_authorizer_principalId'
        },
        'domainName': 'offlineContext_domainName',
        'domainPrefix': 'offlineContext_domainPrefix',
        'extendedRequestId': 'ckcj6wcuh0000fx1edcqp7rw5',
        'httpMethod': 'POST',
        'identity': {
            'accessKey': null,
            'accountId': 'offlineContext_accountId',
            'apiKey': 'offlineContext_apiKey',
            'caller': 'offlineContext_caller',
            'cognitoAuthenticationProvider': 'offlineContext_cognitoAuthenticationProvider',
            'cognitoAuthenticationType': 'offlineContext_cognitoAuthenticationType',
            'cognitoIdentityId': 'offlineContext_cognitoIdentityId',
            'cognitoIdentityPoolId': 'offlineContext_cognitoIdentityPoolId',
            'principalOrgId': null,
            'sourceIp': '127.0.0.1',
            'user': 'offlineContext_user',
            'userAgent': 'PostmanRuntime/7.26.1',
            'userArn': 'offlineContext_userArn',
            apiKeyId: ''
        },
        'path': '/login',
        'protocol': 'HTTP/1.1',
        'requestId': 'ckcj6wcuh0001fx1e162lb6a6',
        'requestTime': '12/Jul/2020:10:45:14 -0400',
        'requestTimeEpoch': 1594565114620,
        'resourceId': 'offlineContext_resourceId',
        'resourcePath': '/dev/login',
        'stage': 'dev'
    },
    resource: '/dev/login',
    stageVariables: {}
}