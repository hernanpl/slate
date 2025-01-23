---
title: Sonatype Lifecycle Public REST API v1.177.0-01
language_tabs:
  - shell: cURL
  - java: Java
  - python: Python
  - javascript: JavaScript
language_clients:
  - shell: ""
  - java: ""
  - python: ""
  - javascript: ""
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="sonatype-lifecycle-public-rest-api">Sonatype Lifecycle Public REST API v1.177.0-01</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Sonatype Lifecycle API provides programmatic access to a comprehensive set of features for managing software components, security vulnerabilities, licenses, and policy evaluations. Integrate with Lifecycle to automate tasks, retrieve data, and customize your software development lifecycle.

<h1 id="sonatype-lifecycle-public-rest-api-advanced-search">Advanced Search</h1>

Use the Advanced Search REST API to perform searches on Lifecycle application scan reports.

## createSearchIndexAsync

<a id="opIdcreateSearchIndexAsync"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/search/advanced/index

```

```java
URL obj = new URL("/api/v2/search/advanced/index");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests

r = requests.post('/api/v2/search/advanced/index')

print(r.json())

```

```javascript

fetch('/api/v2/search/advanced/index',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/search/advanced/index`

Use this method to create or rebuild the index for Advanced Search. This is a resource intensive operation. Avoid creating indexes during peak usage hours.

Permissions required: System Administrator

<h3 id="createsearchindexasync-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Index created successfully.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getExportResults

<a id="opIdgetExportResults"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/search/advanced/export/csv?query=string

```

```java
URL obj = new URL("/api/v2/search/advanced/export/csv?query=string");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests

r = requests.get('/api/v2/search/advanced/export/csv', params={
  'query': 'string'
})

print(r.json())

```

```javascript

fetch('/api/v2/search/advanced/export/csv?query=string',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/search/advanced/export/csv`

Use this method to generate a csv file containing your search results. The default delimiter in the generated file is comma. Use the advancedSearchCSVExportDelimiter property of the Configuration REST API to change the delimiter in the generated file.

<h3 id="getexportresults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|A well-formed search query.|
|allComponents|query|boolean|false|Set to `true` to retrieve results that include components with no violations.|
|mode|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|sbomManager|

<h3 id="getexportresults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Downloadable csv file generated successfully.|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Search index does not exist or is unreadable.|None|

<aside class="success">
This operation does not require authentication
</aside>

## searchIndex

<a id="opIdsearchIndex"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/search/advanced \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/search/advanced");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/search/advanced', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/search/advanced',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/search/advanced`

Use this method to perform an Advanced Search. 

<h3 id="searchindex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|Enter your search query here|
|pageSize|query|integer(int32)|false|Enter the no. of results that should be visible per page|
|page|query|integer(int32)|false|Enter the page no. for the page containing results|
|allComponents|query|boolean|false|Set to `true` to retrieve results that include components with no violations|
|mode|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|sbomManager|

> Example responses

> 200 Response

```json
{
  "searchQuery": "string",
  "page": 0,
  "pageSize": 0,
  "totalNumberOfHits": 0,
  "isExactTotalNumberOfHits": true,
  "groupingByDTOS": [
    {
      "groupIdentifier": "itemType",
      "groupBy": "string",
      "additionalInfo": "string",
      "searchResultItemDTOS": [
        {
          "itemType": "string",
          "organizationId": "string",
          "organizationName": "string",
          "applicationId": "string",
          "applicationPublicId": "string",
          "applicationName": "string",
          "applicationVersion": "string",
          "sbomSpecification": "string",
          "policyEvaluationStage": "string",
          "reportId": "string",
          "componentHash": "string",
          "componentIdentifier": {
            "format": "string",
            "coordinates": {
              "property1": "string",
              "property2": "string"
            }
          },
          "componentName": "string",
          "vulnerabilityId": "string",
          "vulnerabilityDescription": "string",
          "vulnerabilityStatus": "string",
          "applicationCategoryId": "string",
          "applicationCategoryName": "string",
          "applicationCategoryColor": "string",
          "applicationCategoryDescription": "string",
          "componentLabelId": "string",
          "componentLabelName": "string",
          "componentLabelColor": "string",
          "componentLabelDescription": "string",
          "policyId": "string",
          "policyName": "string",
          "policyThreatCategory": "string",
          "policyThreatLevel": 0,
          "resultIndex": 0
        }
      ]
    }
  ]
}
```

<h3 id="searchindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response JSON containing the search query sent in the API call, and other response fields as follows: 
1. searchQuery: search query sent in the request 
2. page: page number of search results requested 
3. pageSize: requested number of results per page 
4. totalNumberOfHits: total number of results returned 
5. isExactTotalNumberOfHits 
    * `true` indicates that the search results in the JSON is the same no. of search results that logically      match the search query. 
    * `false` indicates that the search results in the JSON are lower bound because fetching all results is     too expensive to compute. 
6. groupingByDTOS: array of search results grouped on a field name 
7. groupIdentifier: field name that the search results have been grouped by 
8. groupBy: field value that the search results have been grouped by 
9. additionalInfo: shared information between groups, e.g. info if grouped by a security vulnerability 
10. searchResultItemDTOS: array of search results with each element containing an itemType, field names and values 
11. resultIndex: indicating the relevance of the search result w.r.t. the query|[SearchResultDTO](#schemasearchresultdto)|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Search index does not exist or is unreadable.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-components">Components</h1>

Use this REST API to retrieve a component's security vulnerability data, license data, age and popularity.

## getComponentDetails

<a id="opIdgetComponentDetails"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/components/details \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/components/details");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/components/details', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "components": [
    {
      "packageUrl": "string",
      "hash": "string",
      "sha256": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "proprietary": true,
      "thirdParty": true
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/components/details',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/components/details`

Use this method to retrieve data related to a component.

> Body parameter

```json
{
  "components": [
    {
      "packageUrl": "string",
      "hash": "string",
      "sha256": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "proprietary": true,
      "thirdParty": true
    }
  ]
}
```

<h3 id="getcomponentdetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiComponentDetailsRequestDTOV2](#schemaapicomponentdetailsrequestdtov2)|true|You can retrieve component data in any one of the 3 ways via:|

#### Detailed descriptions

**body**: You can retrieve component data in any one of the 3 ways via:
1. Component identifier
2. Package URL
3. Hash

> Example responses

> 200 Response

```json
{
  "componentDetails": [
    {
      "component": {
        "packageUrl": "string",
        "hash": "string",
        "sha256": "string",
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "displayName": "string",
        "proprietary": true,
        "thirdParty": true
      },
      "matchState": "string",
      "catalogDate": "2019-08-24T14:15:22Z",
      "relativePopularity": 0,
      "licenseData": {
        "declaredLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "observedLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "effectiveLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "overriddenLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "status": "string"
      },
      "integrityRating": "string",
      "hygieneRating": "string",
      "securityData": {
        "securityIssues": [
          {
            "source": "string",
            "reference": "string",
            "severity": 0.1,
            "status": "string",
            "url": "string",
            "threatCategory": "string",
            "cwe": "string",
            "cvssVector": "string",
            "cvssVectorSource": "string",
            "analysis": {
              "state": "string",
              "justification": "string",
              "response": "string",
              "detail": "string"
            }
          }
        ]
      },
      "policyData": {
        "policyViolations": [
          {
            "policyId": "string",
            "policyName": "string",
            "policyViolationId": "string",
            "threatLevel": 0,
            "constraintViolations": [
              {
                "constraintId": "string",
                "constraintName": "string",
                "reasons": [
                  {
                    "reason": "string",
                    "reference": {}
                  }
                ]
              }
            ]
          }
        ]
      },
      "projectData": {
        "firstReleaseDate": "2019-08-24T14:15:22Z",
        "lastReleaseDate": "2019-08-24T14:15:22Z",
        "projectMetadata": {
          "description": "string",
          "organization": "string"
        },
        "sourceControlManagement": {
          "scmUrl": "string",
          "scmMetadata": {
            "stars": 0,
            "forks": 0
          },
          "scmDetails": {
            "commitsPerMonth": 0,
            "uniqueDevsPerMonth": 0
          }
        }
      }
    }
  ]
}
```

<h3 id="getcomponentdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The response contains a detailed description of the component. The hash value returned here is truncated and not intended to be used as a checksum. It can be used as an identifier to pass to other REST API calls.|[ApiComponentDetailsResultDTOV2](#schemaapicomponentdetailsresultdtov2)|

<aside class="success">
This operation does not require authentication
</aside>

## setComponentLabel

<a id="opIdsetComponentLabel"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/components/{componentHash}/labels/{labelName}/{ownerType}s/{internalOwnerId}

```

```java
URL obj = new URL("/api/v2/components/{componentHash}/labels/{labelName}/{ownerType}s/{internalOwnerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests

r = requests.post('/api/v2/components/{componentHash}/labels/{labelName}/{ownerType}s/{internalOwnerId}')

print(r.json())

```

```javascript

fetch('/api/v2/components/{componentHash}/labels/{labelName}/{ownerType}s/{internalOwnerId}',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/components/{componentHash}/labels/{labelName}/{ownerType}s/{internalOwnerId}`

Use this method to assign an existing label to a component.

<h3 id="setcomponentlabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|Possible values: application or organization|
|internalOwnerId|path|string|true|Possible values : applicationId or organizationId|
|componentHash|path|string|true|Enter the SHA1 hash of the component.|
|labelName|path|string|true|Enter the label name to assign to this component.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

<h3 id="setcomponentlabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Component label assigned successfully.|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteComponentLabel

<a id="opIddeleteComponentLabel"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/components/{componentHash}/labels/{labelName}/{ownerType}s/{internalOwnerId}

```

```java
URL obj = new URL("/api/v2/components/{componentHash}/labels/{labelName}/{ownerType}s/{internalOwnerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests

r = requests.delete('/api/v2/components/{componentHash}/labels/{labelName}/{ownerType}s/{internalOwnerId}')

print(r.json())

```

```javascript

fetch('/api/v2/components/{componentHash}/labels/{labelName}/{ownerType}s/{internalOwnerId}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/components/{componentHash}/labels/{labelName}/{ownerType}s/{internalOwnerId}`

Use this method to un-assign a label from a component.

<h3 id="deletecomponentlabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|Possible values: application or organization|
|internalOwnerId|path|string|true|Possible values : applicationId or organizationId|
|componentHash|path|string|true|Enter the SHA1 hash of the component.|
|labelName|path|string|true|Enter the label name to un-assign from this component.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

<h3 id="deletecomponentlabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Label un-assigned from component successfully.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSuggestedRemediationForComponent

<a id="opIdgetSuggestedRemediationForComponent"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/components/remediation/{ownerType}/{ownerId} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/api/v2/components/remediation/{ownerType}/{ownerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/api/v2/components/remediation/{ownerType}/{ownerId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "packageUrl": "string",
  "hash": "string",
  "sha256": "string",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "displayName": "string",
  "proprietary": true,
  "thirdParty": true
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/v2/components/remediation/{ownerType}/{ownerId}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/components/remediation/{ownerType}/{ownerId}`

Use this method to obtain remediation suggestions for policy violations on a component basis. Remediations obtained from this method are same as those appearing on the Component Details Page in the UI.

> Body parameter

```json
{
  "packageUrl": "string",
  "hash": "string",
  "sha256": "string",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "displayName": "string",
  "proprietary": true,
  "thirdParty": true
}
```

<h3 id="getsuggestedremediationforcomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|Possible values: application, organization, repository. |
|ownerId|path|string|true|Possible values: applicationId, organizationId or repositoryId.|
|stageId|query|string|false|Enter the stageId to obtain next-non-failing and next-non-failing-with-dependencies remediation types in the response. Possible values are develop, build, stage-release, release and operate.|
|identificationSource|query|string|false|Enter the identification source if you want the remediation result based on third-party scan information (non-Sonatype). The identification source can be obtained from the Component Details Page in the UI.|
|scanId|query|string|false|Enter the scanId (reportId) if you want the remediation result based on third-party scan information (non-Sonatype).|
|body|body|[ApiComponentDTOV2](#schemaapicomponentdtov2)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

<h3 id="getsuggestedremediationforcomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The response returns details for components that can be used for remediation. Details for the recommended component are grouped under type in the response.<ul><li>Type <i>next-no-violations</i> indicates that the component version has no violations.</li><li>Type <i>next-non-failing</i> indicates that the component version does not fail policy violations. The response will contain this type only if stageId is provided in the method call.</li><li>Type <i>next-no-violations-with-dependencies</i> indicates that the component, along-with its dependencies does not any violate any policies.</li><li>Type <i>next-non-failing-with-dependencies</i> indicates that the component and its dependencies will not fail a build for the stageId provided.</li></ul><p>Hash values returned here are truncated and are not intended to be used as checksums. They can be used as identifiers to pass to other REST API calls.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getComponentVersions

<a id="opIdgetComponentVersions"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/components/versions \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/components/versions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/components/versions', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "format": "string",
  "coordinates": {
    "property1": "string",
    "property2": "string"
  },
  "packageUrl": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/components/versions',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/components/versions`

Use this method to retrieve all known versions of a component.

> Body parameter

```json
{
  "format": "string",
  "coordinates": {
    "property1": "string",
    "property2": "string"
  },
  "packageUrl": "string"
}
```

<h3 id="getcomponentversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiComponentOrPurlIdentifierDTOV2](#schemaapicomponentorpurlidentifierdtov2)|false|Possible values: Component identifier or packageURL (pURL) identifier in the correct format. Use a-name for JavaScript components.|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getcomponentversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Known versions of the component are returned in a string array of ascending order.|Inline|

<h3 id="getcomponentversions-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-cyclonedx">CycloneDX</h1>

Use the CycloneDX REST API to generate CycloneDX SBOMs in XML or JSON formats, containing coordinates and licenses for components found in a scan report.

## getByReportId

<a id="opIdgetByReportId"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/cycloneDx/{cdxVersion}/{applicationId}/reports/{reportId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/cycloneDx/{cdxVersion}/{applicationId}/reports/{reportId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/cycloneDx/{cdxVersion}/{applicationId}/reports/{reportId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/cycloneDx/{cdxVersion}/{applicationId}/reports/{reportId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/cycloneDx/{cdxVersion}/{applicationId}/reports/{reportId}`

Use this method to generate a CycloneDX SBOM for an application.<p>Permissions Required: View IQ Elements

<h3 id="getbyreportid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|Enter the internal applicationId for the application you want to generate the SBOM. You can also retrieve the applicationId using the Application REST API.|
|reportId|path|string|true|Enter the reportId to generate the SBOM for the application for a specific scan report.|
|cdxVersion|path|string|true|Possible values are 1.1|1.2|1.3|1.4|1.5.|

> Example responses

<h3 id="getbyreportid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A downloadable file will be generated.|None|

<h3 id="getbyreportid-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getLatest

<a id="opIdgetLatest"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/cycloneDx/{cdxVersion}/{applicationId}/stages/{stageId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/cycloneDx/{cdxVersion}/{applicationId}/stages/{stageId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/cycloneDx/{cdxVersion}/{applicationId}/stages/{stageId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/cycloneDx/{cdxVersion}/{applicationId}/stages/{stageId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/cycloneDx/{cdxVersion}/{applicationId}/stages/{stageId}`

Use this method to generate a CycloneDX SBOM for an application.<p>Permissions Required: View IQ Elements

<h3 id="getlatest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|Enter the internal applicationId for the application you want to generate the SBOM. You can also retrieve the applicationId using the Application REST API.|
|stageId|path|string|true|Enter the stageId to generate the SBOM based on the latest application policy evaluation at that stage. Allowed values for stageId are 'develop', 'source', 'build', 'stage-release', 'release', and, 'operate'.|
|cdxVersion|path|string|true|Possible values are 1.1|1.2|1.3|1.4|1.5.|

> Example responses

<h3 id="getlatest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A downloadable file will be generated.|None|

<h3 id="getlatest-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-data-retention-policies">Data Retention Policies</h1>

Set policies for automatic purging of obsolete application and Success Metrics reports. <p>Note that IQ Server has a preset limit of purging 5000 reports in one execution of its report purging job.

## getDataRetentionPolicies

<a id="opIdgetDataRetentionPolicies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/dataRetentionPolicies/organizations/{organizationId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/dataRetentionPolicies/organizations/{organizationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/dataRetentionPolicies/organizations/{organizationId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/dataRetentionPolicies/organizations/{organizationId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/dataRetentionPolicies/organizations/{organizationId}`

Data retention policies help to limit the disk space consumption by removing obsolete data. Use this method to inspect the retention policies that are in effect for an organization. Application reports created by continuous monitoring are not affected by the stage retention policy. They appear separately under the key continuous-monitoring in the response JSON<p>Permissions required: View IQ Elements

<h3 id="getdataretentionpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The organizationId assigned by IQ Server. Use the organization REST API to retrieve the organizationId.|

> Example responses

> 200 Response

```json
{
  "applicationReports": {
    "stages": {
      "property1": {
        "inheritPolicy": true,
        "enablePurging": true,
        "maxCount": 0,
        "maxAge": "string"
      },
      "property2": {
        "inheritPolicy": true,
        "enablePurging": true,
        "maxCount": 0,
        "maxAge": "string"
      }
    }
  },
  "successMetrics": {
    "inheritPolicy": true,
    "enablePurging": true,
    "maxAge": "string"
  }
}
```

<h3 id="getdataretentionpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The response JSON contains the policy settings for both applicationReports and successMetrics. Policy settings for application reports are shown for each stage of development. <ul><li>inheritPolicy IS a boolean flag indicating whether the policy is inherited from a parent organization.</li><li>enablePurging IS a boolean flag indicating if automatic purging is enabled or disabled.</li><li>maxCount IS the maximum no. of reports to retain.</li><li>maxAge IS the maximum age that a report is allowed to reach before it is purged. Possible values are days, weeks, months, years.</li></ul>The latest application report is always retained, regardless of its age.|[ApiDataRetentionPoliciesDTO](#schemaapidataretentionpoliciesdto)|

<aside class="success">
This operation does not require authentication
</aside>

## setDataRetentionPolicies

<a id="opIdsetDataRetentionPolicies"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/dataRetentionPolicies/organizations/{organizationId} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/api/v2/dataRetentionPolicies/organizations/{organizationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('/api/v2/dataRetentionPolicies/organizations/{organizationId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "applicationReports": {
    "stages": {
      "property1": {
        "inheritPolicy": true,
        "enablePurging": true,
        "maxCount": 0,
        "maxAge": "string"
      },
      "property2": {
        "inheritPolicy": true,
        "enablePurging": true,
        "maxCount": 0,
        "maxAge": "string"
      }
    }
  },
  "successMetrics": {
    "inheritPolicy": true,
    "enablePurging": true,
    "maxAge": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/v2/dataRetentionPolicies/organizations/{organizationId}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/dataRetentionPolicies/organizations/{organizationId}`

Data retention policies help to limit the disk space consumption by removing obsolete data. Use this method to set the retention policies for an organization. Application reports created by continuous monitoring are not affected by the stage retention policy. They appear separately under the key continuous-monitoring.<p>Permissions required: Edit IQ Elements

> Body parameter

```json
{
  "applicationReports": {
    "stages": {
      "property1": {
        "inheritPolicy": true,
        "enablePurging": true,
        "maxCount": 0,
        "maxAge": "string"
      },
      "property2": {
        "inheritPolicy": true,
        "enablePurging": true,
        "maxCount": 0,
        "maxAge": "string"
      }
    }
  },
  "successMetrics": {
    "inheritPolicy": true,
    "enablePurging": true,
    "maxAge": "string"
  }
}
```

<h3 id="setdataretentionpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The organizationId for the organization you want to set the data retention policy. Use the organization REST API to retrieve the organizationId.|
|body|body|[ApiDataRetentionPoliciesDTO](#schemaapidataretentionpoliciesdto)|true|The request JSON should include the retention policy settings for both application reports and success metrics.|

#### Detailed descriptions

**body**: The request JSON should include the retention policy settings for both application reports and success metrics.

Policy settings for application reports can be specified for each stage of development represented in the example below by additionalProp1. 
Example values for additionalProp1 are develop, build, stage-release, release, operate & continuous monitoring. For application reports created during continuous monitoring use the key continuous-monitoring instead of the stage name. <ul><li>inheritPolicy IS a boolean flag indicating whether the policy is inherited from a parent organization.</li><li>enablePurging IS a boolean flag indicating enabled or disabled status for automatic purging. </li><li>maxCount IS the maximum no. of reports to retain.</li><li>maxAge IS the maximum age that a report is allowed to reach before it is purged. Possible values are days, weeks, months, years.</li></ul>

<h3 id="setdataretentionpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The data retention policy has been set successfully.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getParentDataRetentionPolicies

<a id="opIdgetParentDataRetentionPolicies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/dataRetentionPolicies/organizations/{organizationId}/parent \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/dataRetentionPolicies/organizations/{organizationId}/parent");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/dataRetentionPolicies/organizations/{organizationId}/parent', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/dataRetentionPolicies/organizations/{organizationId}/parent',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/dataRetentionPolicies/organizations/{organizationId}/parent`

Data retention policies help to limit the disk space consumption by removing obsolete data. Use this method to inspect the retention policies that are in effect for the parent organization of the given organization. Application reports created by continuous monitoring are not affected by the stage retention policy. They appear separately under the key continuous-monitoring.<p>Permissions required: View IQ Elements

<h3 id="getparentdataretentionpolicies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|The organizationId assigned by IQ Server. Use the organization REST API to retrieve the parent organizationId|

> Example responses

> 200 Response

```json
{
  "applicationReports": {
    "stages": {
      "property1": {
        "inheritPolicy": true,
        "enablePurging": true,
        "maxCount": 0,
        "maxAge": "string"
      },
      "property2": {
        "inheritPolicy": true,
        "enablePurging": true,
        "maxCount": 0,
        "maxAge": "string"
      }
    }
  },
  "successMetrics": {
    "inheritPolicy": true,
    "enablePurging": true,
    "maxAge": "string"
  }
}
```

<h3 id="getparentdataretentionpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The response JSON contains the policy settings for both applicationReports and successMetrics. Policy settings for application reports are shown for each stage of development. <ul><li>inheritPolicy IS a boolean flag indicating whether the policy is inherited from a parent organization.</li><li>enablePurging IS a boolean flag indicating if automatic purging is enabled or disabled.</li><li>maxCount IS the maximum no. of reports to retain.</li><li>maxAge IS the maximum age that a report is allowed to reach before it is purged. Possible values are days, weeks, months, years.</li></ul>The latest application report is always retained, regardless of its age.|[ApiDataRetentionPoliciesDTO](#schemaapidataretentionpoliciesdto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-policy-evaluation">Policy Evaluation</h1>

Use this REST API to perform an application policy evaluation. Policy evaluations are executed asynchronously.<p>This is a 2-step process that involves: 
1. Requesting a policy evaluation (POST) 
2. Checking the status and response of the evaluation request (GET)

## evaluateComponents

<a id="opIdevaluateComponents"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/evaluation/applications/{applicationId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/evaluation/applications/{applicationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/evaluation/applications/{applicationId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "components": [
    {
      "packageUrl": "string",
      "hash": "string",
      "sha256": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "proprietary": true,
      "thirdParty": true
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/evaluation/applications/{applicationId}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/evaluation/applications/{applicationId}`

Use this method to request a component evaluation. This is step 1 of the 2 step policy evaluation for components process.

Permissions Required: Evaluate Components

> Body parameter

```json
{
  "components": [
    {
      "packageUrl": "string",
      "hash": "string",
      "sha256": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "proprietary": true,
      "thirdParty": true
    }
  ]
}
```

<h3 id="evaluatecomponents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|Enter the internal applicationId. Use the Applications REST API to retrieve the internal applicationId.|
|body|body|[ApiComponentEvaluationRequestDTOV2](#schemaapicomponentevaluationrequestdtov2)|false|The request JSON should contain component coordinates or the hash (SHA1) for each component. You can provide the packageURL instead of component information or hash.|

> Example responses

> 200 Response

```json
{
  "resultId": "string",
  "submittedDate": "2019-08-24T14:15:22Z",
  "applicationId": "string",
  "resultsUrl": "string"
}
```

<h3 id="evaluatecomponents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The JSON response contains resultId that will be assigned to the evaluation results, timestamp when the component evaluation was requested, the applicationId of the component and the results URL. The resultId obtained from here can be used to retrieve the evaluation result using the REST API or the result URL can be used in cURL.|[ApiComponentEvaluationTicketDTOV2](#schemaapicomponentevaluationticketdtov2)|

<aside class="success">
This operation does not require authentication
</aside>

## evaluateSourceControl

<a id="opIdevaluateSourceControl"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/evaluation/applications/{applicationId}/sourceControlEvaluation \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/evaluation/applications/{applicationId}/sourceControlEvaluation");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/evaluation/applications/{applicationId}/sourceControlEvaluation', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "stageId": "string",
  "branchName": "string",
  "scanTargets": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/evaluation/applications/{applicationId}/sourceControlEvaluation',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/evaluation/applications/{applicationId}/sourceControlEvaluation`

Use this method to request a source control evaluation for a specific application. This is step 1 of the 2 step source control evaluation process. 

Permissions Required: Evaluate Applications

> Body parameter

```json
{
  "stageId": "string",
  "branchName": "string",
  "scanTargets": [
    "string"
  ]
}
```

<h3 id="evaluatesourcecontrol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|Enter the internal applicationId. Use the Applications REST API to retrieve the internal applicationId.|
|body|body|[ApiSourceControlEvaluationRequestDTO](#schemaapisourcecontrolevaluationrequestdto)|false|The request JSON should include the 1. branch name (name of the target branch in the source control repository, 2. stageId (recommended values are 'develop' for feature branches, and 'source' for default branches. Other stageIds that can be used are 'build', 'stage-release', 'release', 'operate' but are not recommended), 3. scanTargets (optional, specify one or more paths inside the repository. If not specified, the entire repository will be evaluated by default). Ensure that the repository paths are not relative and do not contain '../' or '..\'.|

> Example responses

> 200 Response

```json
{
  "statusUrl": "string"
}
```

<h3 id="evaluatesourcecontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The response contains statusUrl. Use this statusUrl to check the evaluation status using the GET method (step 2 of the evaluation process).|[ApiApplicationEvaluationStatusDTOV2](#schemaapiapplicationevaluationstatusdtov2)|

<aside class="success">
This operation does not require authentication
</aside>

## getApplicationEvaluationStatus

<a id="opIdgetApplicationEvaluationStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/evaluation/applications/{applicationId}/status/{statusId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/evaluation/applications/{applicationId}/status/{statusId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/evaluation/applications/{applicationId}/status/{statusId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/evaluation/applications/{applicationId}/status/{statusId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/evaluation/applications/{applicationId}/status/{statusId}`

This is step 2 of the policy evaluation process. Use the statusUrl obtained from the POST response for the corresponding applicationId. 

Permissions Required: Evaluate Applications

<h3 id="getapplicationevaluationstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|Enter the applicationId, for the which policy evaluation was requested.|
|statusId|path|string|true|Enter the statusId value obtained as response of the POST call in step 1.|

> Example responses

> 200 Response

```json
{
  "status": "string",
  "reason": "string",
  "reportHtmlUrl": "string",
  "embeddableReportHtmlUrl": "string",
  "reportPdfUrl": "string",
  "reportDataUrl": "string"
}
```

<h3 id="getapplicationevaluationstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The response will include one of the 3 possible status values: PENDING (indicates that the evaluation is still in progress), FAILED or COMPLETED. For completed evaluations, the response will contain the URLs for evaluation report to view the evaluation results.|[ApiApplicationEvaluationResultDTOV2](#schemaapiapplicationevaluationresultdtov2)|

<aside class="success">
This operation does not require authentication
</aside>

## getComponentEvaluation

<a id="opIdgetComponentEvaluation"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/evaluation/applications/{applicationId}/results/{resultId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/evaluation/applications/{applicationId}/results/{resultId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/evaluation/applications/{applicationId}/results/{resultId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/evaluation/applications/{applicationId}/results/{resultId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/evaluation/applications/{applicationId}/results/{resultId}`

This is step 2 of the policy evaluation process for components. Use the resultId obtained from the POST response for the corresponding applicationId. 

Permissions Required: Evaluate Components 

<h3 id="getcomponentevaluation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|Enter the internal applicationId (same as that sent in the POST request (step 1))|
|resultId|path|string|true|Enter the resultId obtained from the POST response (step 1) used for component evaluation.|

> Example responses

> 200 Response

```json
{
  "submittedDate": "2019-08-24T14:15:22Z",
  "evaluationDate": "2019-08-24T14:15:22Z",
  "applicationId": "string",
  "results": [
    {
      "component": {
        "packageUrl": "string",
        "hash": "string",
        "sha256": "string",
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "displayName": "string",
        "proprietary": true,
        "thirdParty": true
      },
      "matchState": "string",
      "catalogDate": "2019-08-24T14:15:22Z",
      "relativePopularity": 0,
      "licenseData": {
        "declaredLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "observedLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "effectiveLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "overriddenLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "status": "string"
      },
      "integrityRating": "string",
      "hygieneRating": "string",
      "securityData": {
        "securityIssues": [
          {
            "source": "string",
            "reference": "string",
            "severity": 0.1,
            "status": "string",
            "url": "string",
            "threatCategory": "string",
            "cwe": "string",
            "cvssVector": "string",
            "cvssVectorSource": "string",
            "analysis": {
              "state": "string",
              "justification": "string",
              "response": "string",
              "detail": "string"
            }
          }
        ]
      },
      "policyData": {
        "policyViolations": [
          {
            "policyId": "string",
            "policyName": "string",
            "policyViolationId": "string",
            "threatLevel": 0,
            "constraintViolations": [
              {
                "constraintId": "string",
                "constraintName": "string",
                "reasons": [
                  {
                    "reason": "string",
                    "reference": {}
                  }
                ]
              }
            ]
          }
        ]
      },
      "projectData": {
        "firstReleaseDate": "2019-08-24T14:15:22Z",
        "lastReleaseDate": "2019-08-24T14:15:22Z",
        "projectMetadata": {
          "description": "string",
          "organization": "string"
        },
        "sourceControlManagement": {
          "scmUrl": "string",
          "scmMetadata": {
            "stars": 0,
            "forks": 0
          },
          "scmDetails": {
            "commitsPerMonth": 0,
            "uniqueDevsPerMonth": 0
          }
        }
      }
    }
  ],
  "isError": true,
  "errorMessage": "string"
}
```

<h3 id="getcomponentevaluation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The response contains details for the policy evaluation request including submitted date, evaluation date, applicationId and the results of the evaluation for the component(s).|[ApiComponentEvaluationResultDTOV2](#schemaapicomponentevaluationresultdtov2)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Response not ready|None|

<aside class="success">
This operation does not require authentication
</aside>

## promoteScan

<a id="opIdpromoteScan"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/evaluation/applications/{applicationId}/promoteScan \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/evaluation/applications/{applicationId}/promoteScan");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/evaluation/applications/{applicationId}/promoteScan', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "scanId": "string",
  "sourceStageId": "string",
  "targetStageId": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/evaluation/applications/{applicationId}/promoteScan',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/evaluation/applications/{applicationId}/promoteScan`

Use this method to rescan older scans. This is done when the binaries of a previous build are now moving to a new stage in the production pipeline. Using this method, you can avoid rebuilding the application and reuse the scan metadata at the newer stage. This new evaluation will evaluate the most recent security and license data against your current policies. 

Permissions Required: Evaluate Applications

> Body parameter

```json
{
  "scanId": "string",
  "sourceStageId": "string",
  "targetStageId": "string"
}
```

<h3 id="promotescan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|Enter the internal applicationId. Use the Applications REST API to retrieve the internal applicationId.|
|body|body|[ApiPromoteScanRequestDTOV2](#schemaapipromotescanrequestdtov2)|false|You can provide either the scanId (reportId) of the previous scan OR the source stageId (possible values are 'build', 'stage-release', 'release' or 'operate'). When using the stageId, the latest scanId for the application will be used. Enter the targetStageId for the new stage you want your scan to be promoted to (possible values are 'build', 'stage-release', 'release' or 'operate'). Using the same value for source and target stage will resubmit the latest scan report.|

> Example responses

> 200 Response

```json
{
  "statusUrl": "string"
}
```

<h3 id="promotescan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The response will contain the statusUrl to view the evaluation result using the GET method (step 2)|[ApiApplicationEvaluationStatusDTOV2](#schemaapiapplicationevaluationstatusdtov2)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-application-categories">Application Categories</h1>

## getTags

<a id="opIdgetTags"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/applicationCategories/organization/{organizationId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applicationCategories/organization/{organizationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/applicationCategories/organization/{organizationId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/applicationCategories/organization/{organizationId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/applicationCategories/organization/{organizationId}`

<h3 id="gettags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> default Response

```json
[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "organizationId": "string",
    "color": "string"
  }
]
```

<h3 id="gettags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|Inline|

<h3 id="gettags-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiApplicationCategoryDTO](#schemaapiapplicationcategorydto)]|false|none|none|
|» id|string|false|none|none|
|» name|string|false|none|none|
|» description|string|false|none|none|
|» organizationId|string|false|none|none|
|» color|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## updateTag

<a id="opIdupdateTag"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/applicationCategories/organization/{organizationId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applicationCategories/organization/{organizationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('/api/v2/applicationCategories/organization/{organizationId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "id": "string",
  "name": "string",
  "description": "string",
  "organizationId": "string",
  "color": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/applicationCategories/organization/{organizationId}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/applicationCategories/organization/{organizationId}`

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "organizationId": "string",
  "color": "string"
}
```

<h3 id="updatetag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|[ApiApplicationCategoryDTO](#schemaapiapplicationcategorydto)|false|none|

> Example responses

> default Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "organizationId": "string",
  "color": "string"
}
```

<h3 id="updatetag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiApplicationCategoryDTO](#schemaapiapplicationcategorydto)|

<aside class="success">
This operation does not require authentication
</aside>

## addTag

<a id="opIdaddTag"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/applicationCategories/organization/{organizationId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applicationCategories/organization/{organizationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/applicationCategories/organization/{organizationId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "id": "string",
  "name": "string",
  "description": "string",
  "organizationId": "string",
  "color": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/applicationCategories/organization/{organizationId}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/applicationCategories/organization/{organizationId}`

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "organizationId": "string",
  "color": "string"
}
```

<h3 id="addtag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|body|body|[ApiApplicationCategoryDTO](#schemaapiapplicationcategorydto)|false|none|

> Example responses

> default Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "organizationId": "string",
  "color": "string"
}
```

<h3 id="addtag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiApplicationCategoryDTO](#schemaapiapplicationcategorydto)|

<aside class="success">
This operation does not require authentication
</aside>

## deleteTag

<a id="opIddeleteTag"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/applicationCategories/organization/{organizationId}/{tagId} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/applicationCategories/organization/{organizationId}/{tagId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/applicationCategories/organization/{organizationId}/{tagId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/applicationCategories/organization/{organizationId}/{tagId}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/applicationCategories/organization/{organizationId}/{tagId}`

<h3 id="deletetag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|tagId|path|string|true|none|

> Example responses

<h3 id="deletetag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deletetag-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getApplicableTags

<a id="opIdgetApplicableTags"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/applicationCategories/organization/{organizationId}/applicable \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applicationCategories/organization/{organizationId}/applicable");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/applicationCategories/organization/{organizationId}/applicable', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/applicationCategories/organization/{organizationId}/applicable',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/applicationCategories/organization/{organizationId}/applicable`

<h3 id="getapplicabletags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> default Response

```json
{
  "applicationCategoriesByOwner": [
    {
      "ownerId": "string",
      "ownerName": "string",
      "ownerType": "application",
      "applicationCategories": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "organizationId": "string",
          "color": "string"
        }
      ]
    }
  ]
}
```

<h3 id="getapplicabletags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApplicableTagsDTO](#schemaapplicabletagsdto)|

<aside class="success">
This operation does not require authentication
</aside>

## getApplicableTagsByApplicationPublicId

<a id="opIdgetApplicableTagsByApplicationPublicId"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/applicationCategories/application/{applicationPublicId}/applicable \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applicationCategories/application/{applicationPublicId}/applicable");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/applicationCategories/application/{applicationPublicId}/applicable', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/applicationCategories/application/{applicationPublicId}/applicable',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/applicationCategories/application/{applicationPublicId}/applicable`

<h3 id="getapplicabletagsbyapplicationpublicid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationPublicId|path|string|true|none|

> Example responses

> default Response

```json
[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "organizationId": "string",
    "color": "string"
  }
]
```

<h3 id="getapplicabletagsbyapplicationpublicid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|Inline|

<h3 id="getapplicabletagsbyapplicationpublicid-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiApplicationCategoryDTO](#schemaapiapplicationcategorydto)]|false|none|none|
|» id|string|false|none|none|
|» name|string|false|none|none|
|» description|string|false|none|none|
|» organizationId|string|false|none|none|
|» color|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getApplicationApplicableTags

<a id="opIdgetApplicationApplicableTags"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/applicationCategories/application/{applicationPublicId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applicationCategories/application/{applicationPublicId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/applicationCategories/application/{applicationPublicId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/applicationCategories/application/{applicationPublicId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/applicationCategories/application/{applicationPublicId}`

<h3 id="getapplicationapplicabletags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationPublicId|path|string|true|none|

> Example responses

> default Response

```json
{
  "applicationCategoriesByOwner": [
    {
      "ownerId": "string",
      "ownerName": "string",
      "ownerType": "application",
      "applicationCategories": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "organizationId": "string",
          "color": "string"
        }
      ]
    }
  ]
}
```

<h3 id="getapplicationapplicabletags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApplicableTagsDTO](#schemaapplicabletagsdto)|

<aside class="success">
This operation does not require authentication
</aside>

## getAppliedPolicyTags

<a id="opIdgetAppliedPolicyTags"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/applicationCategories/organization/{organizationId}/policy \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applicationCategories/organization/{organizationId}/policy");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/applicationCategories/organization/{organizationId}/policy', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/applicationCategories/organization/{organizationId}/policy',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/applicationCategories/organization/{organizationId}/policy`

<h3 id="getappliedpolicytags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> default Response

```json
[
  {
    "id": "string",
    "policyId": "string",
    "tagId": "string"
  }
]
```

<h3 id="getappliedpolicytags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|Inline|

<h3 id="getappliedpolicytags-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PolicyTag](#schemapolicytag)]|false|none|none|
|» id|string|false|none|none|
|» policyId|string|false|none|none|
|» tagId|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getAppliedTags

<a id="opIdgetAppliedTags"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/applicationCategories/organization/{organizationId}/applied \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applicationCategories/organization/{organizationId}/applied");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/applicationCategories/organization/{organizationId}/applied', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/applicationCategories/organization/{organizationId}/applied',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/applicationCategories/organization/{organizationId}/applied`

<h3 id="getappliedtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> default Response

```json
{
  "applicationTagsByOwner": [
    {
      "ownerId": "string",
      "ownerName": "string",
      "ownerType": "application",
      "applicationTags": [
        {
          "id": "string",
          "applicationId": "string",
          "tagId": "string"
        }
      ]
    }
  ]
}
```

<h3 id="getappliedtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[AppliedTagsDTO](#schemaappliedtagsdto)|

<aside class="success">
This operation does not require authentication
</aside>

## getTagsUsedByApplications

<a id="opIdgetTagsUsedByApplications"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/applicationCategories/application \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applicationCategories/application");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/applicationCategories/application', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/applicationCategories/application',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/applicationCategories/application`

> Example responses

> default Response

```json
[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "organizationId": "string",
    "color": "string"
  }
]
```

<h3 id="gettagsusedbyapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|Inline|

<h3 id="gettagsusedbyapplications-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiApplicationCategoryDTO](#schemaapiapplicationcategorydto)]|false|none|none|
|» id|string|false|none|none|
|» name|string|false|none|none|
|» description|string|false|none|none|
|» organizationId|string|false|none|none|
|» color|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-applications">Applications</h1>

## getApplications

<a id="opIdgetApplications"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/applications \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applications");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/applications', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/applications',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/applications`

<h3 id="getapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|publicId|query|array[string]|false|none|
|includeCategories|query|boolean|false|none|

> Example responses

<h3 id="getapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="getapplications-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## addApplication

<a id="opIdaddApplication"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/applications \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applications");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/applications', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "id": "string",
  "publicId": "string",
  "name": "string",
  "organizationId": "string",
  "contactUserName": "string",
  "applicationTags": [
    {
      "id": "string",
      "tagId": "string",
      "applicationId": "string"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/applications',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/applications`

> Body parameter

```json
{
  "id": "string",
  "publicId": "string",
  "name": "string",
  "organizationId": "string",
  "contactUserName": "string",
  "applicationTags": [
    {
      "id": "string",
      "tagId": "string",
      "applicationId": "string"
    }
  ]
}
```

<h3 id="addapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiApplicationDTO](#schemaapiapplicationdto)|false|none|

> Example responses

> default Response

```json
{
  "id": "string",
  "publicId": "string",
  "name": "string",
  "organizationId": "string",
  "contactUserName": "string",
  "applicationTags": [
    {
      "id": "string",
      "tagId": "string",
      "applicationId": "string"
    }
  ]
}
```

<h3 id="addapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiApplicationDTO](#schemaapiapplicationdto)|

<aside class="success">
This operation does not require authentication
</aside>

## cloneApplication

<a id="opIdcloneApplication"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/applications/{sourceApplicationId}/clone \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applications/{sourceApplicationId}/clone");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.post('/api/v2/applications/{sourceApplicationId}/clone', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/applications/{sourceApplicationId}/clone',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/applications/{sourceApplicationId}/clone`

<h3 id="cloneapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceApplicationId|path|string|true|none|
|clonedApplicationName|query|string|false|none|
|clonedApplicationPublicId|query|string|false|none|

> Example responses

> default Response

```json
{
  "id": "string",
  "publicId": "string",
  "name": "string",
  "organizationId": "string",
  "contactUserName": "string",
  "applicationTags": [
    {
      "id": "string",
      "tagId": "string",
      "applicationId": "string"
    }
  ]
}
```

<h3 id="cloneapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiApplicationDTO](#schemaapiapplicationdto)|

<aside class="success">
This operation does not require authentication
</aside>

## getApplication

<a id="opIdgetApplication"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/applications/{applicationId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applications/{applicationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/applications/{applicationId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/applications/{applicationId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/applications/{applicationId}`

<h3 id="getapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|none|

> Example responses

> default Response

```json
{
  "id": "string",
  "publicId": "string",
  "name": "string",
  "organizationId": "string",
  "contactUserName": "string",
  "applicationTags": [
    {
      "id": "string",
      "tagId": "string",
      "applicationId": "string"
    }
  ]
}
```

<h3 id="getapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiApplicationDTO](#schemaapiapplicationdto)|

<aside class="success">
This operation does not require authentication
</aside>

## updateApplication

<a id="opIdupdateApplication"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/applications/{applicationId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applications/{applicationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('/api/v2/applications/{applicationId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "id": "string",
  "publicId": "string",
  "name": "string",
  "organizationId": "string",
  "contactUserName": "string",
  "applicationTags": [
    {
      "id": "string",
      "tagId": "string",
      "applicationId": "string"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/applications/{applicationId}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/applications/{applicationId}`

> Body parameter

```json
{
  "id": "string",
  "publicId": "string",
  "name": "string",
  "organizationId": "string",
  "contactUserName": "string",
  "applicationTags": [
    {
      "id": "string",
      "tagId": "string",
      "applicationId": "string"
    }
  ]
}
```

<h3 id="updateapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|none|
|body|body|[ApiApplicationDTO](#schemaapiapplicationdto)|false|none|

> Example responses

> default Response

```json
{
  "id": "string",
  "publicId": "string",
  "name": "string",
  "organizationId": "string",
  "contactUserName": "string",
  "applicationTags": [
    {
      "id": "string",
      "tagId": "string",
      "applicationId": "string"
    }
  ]
}
```

<h3 id="updateapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiApplicationDTO](#schemaapiapplicationdto)|

<aside class="success">
This operation does not require authentication
</aside>

## deleteApplication

<a id="opIddeleteApplication"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/applications/{applicationId} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/applications/{applicationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/applications/{applicationId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/applications/{applicationId}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/applications/{applicationId}`

<h3 id="deleteapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|none|

> Example responses

<h3 id="deleteapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deleteapplication-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getApplicationsByOrganizationId

<a id="opIdgetApplicationsByOrganizationId"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/applications/organization/{organizationId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applications/organization/{organizationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/applications/organization/{organizationId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/applications/organization/{organizationId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/applications/organization/{organizationId}`

<h3 id="getapplicationsbyorganizationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> default Response

```json
{
  "applications": [
    {
      "id": "string",
      "publicId": "string",
      "name": "string",
      "organizationId": "string",
      "contactUserName": "string",
      "applicationTags": [
        {
          "id": "string",
          "tagId": "string",
          "applicationId": "string"
        }
      ]
    }
  ]
}
```

<h3 id="getapplicationsbyorganizationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiApplicationListDTO](#schemaapiapplicationlistdto)|

<aside class="success">
This operation does not require authentication
</aside>

## moveApplication

<a id="opIdmoveApplication"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/applications/{applicationId}/move/organization/{organizationId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applications/{applicationId}/move/organization/{organizationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.post('/api/v2/applications/{applicationId}/move/organization/{organizationId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/applications/{applicationId}/move/organization/{organizationId}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/applications/{applicationId}/move/organization/{organizationId}`

<h3 id="moveapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|none|
|organizationId|path|string|true|none|

> Example responses

> default Response

```json
{
  "warnings": [
    "string"
  ],
  "errors": [
    "string"
  ]
}
```

<h3 id="moveapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiMoveApplicationResponseDTOV2](#schemaapimoveapplicationresponsedtov2)|

<aside class="success">
This operation does not require authentication
</aside>

## getData

<a id="opIdgetData"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/applications/{applicationPublicId}/reports/{scanId} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/applications/{applicationPublicId}/reports/{scanId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.get('/api/v2/applications/{applicationPublicId}/reports/{scanId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/applications/{applicationPublicId}/reports/{scanId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/applications/{applicationPublicId}/reports/{scanId}`

<h3 id="getdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationPublicId|path|string|true|none|
|scanId|path|string|true|none|

> Example responses

<h3 id="getdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="getdata-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getDependencyTree

<a id="opIdgetDependencyTree"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/applications/{applicationPublicId}/reports/{scanId}/dependencyTree \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applications/{applicationPublicId}/reports/{scanId}/dependencyTree");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/applications/{applicationPublicId}/reports/{scanId}/dependencyTree', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/applications/{applicationPublicId}/reports/{scanId}/dependencyTree',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/applications/{applicationPublicId}/reports/{scanId}/dependencyTree`

<h3 id="getdependencytree-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationPublicId|path|string|true|none|
|scanId|path|string|true|none|

> Example responses

> default Response

```json
{
  "dependencyTree": {
    "packageUrl": "string",
    "componentIdentifier": {
      "format": "string",
      "coordinates": {
        "property1": "string",
        "property2": "string"
      }
    },
    "children": [
      {}
    ],
    "direct": true
  }
}
```

<h3 id="getdependencytree-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiDependencyTreeResponseDTO](#schemaapidependencytreeresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## getPolicyViolationDiff

<a id="opIdgetPolicyViolationDiff"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/applications/{applicationPublicId}/reports/policyViolations/diff \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applications/{applicationPublicId}/reports/policyViolations/diff");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/applications/{applicationPublicId}/reports/policyViolations/diff', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/applications/{applicationPublicId}/reports/policyViolations/diff',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/applications/{applicationPublicId}/reports/policyViolations/diff`

<h3 id="getpolicyviolationdiff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationPublicId|path|string|true|none|
|fromCommit|query|string|false|none|
|toCommit|query|string|false|none|
|fromPolicyEvaluationId|query|string|false|none|
|toPolicyEvaluationId|query|string|false|none|

> Example responses

> default Response

```json
{
  "application": {
    "id": "string",
    "publicId": "string",
    "name": "string",
    "organizationId": "string",
    "contactUserName": "string",
    "applicationTags": [
      {
        "id": "string",
        "tagId": "string",
        "applicationId": "string"
      }
    ]
  },
  "fromCommit": {
    "commitHash": "string",
    "scanId": "string",
    "reportUrl": "string",
    "scanTime": "2019-08-24T14:15:22Z"
  },
  "toCommit": {
    "commitHash": "string",
    "scanId": "string",
    "reportUrl": "string",
    "scanTime": "2019-08-24T14:15:22Z"
  },
  "diffTime": "2019-08-24T14:15:22Z",
  "addedViolations": [
    {
      "policyId": "string",
      "policyName": "string",
      "policyViolationId": "string",
      "threatLevel": 0,
      "constraintViolations": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "reasons": [
            {
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              }
            }
          ]
        }
      ],
      "component": {
        "packageUrl": "string",
        "hash": "string",
        "sha256": "string",
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "displayName": "string",
        "proprietary": true,
        "thirdParty": true
      }
    }
  ],
  "sameViolations": [
    {
      "policyId": "string",
      "policyName": "string",
      "policyViolationId": "string",
      "threatLevel": 0,
      "constraintViolations": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "reasons": [
            {
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              }
            }
          ]
        }
      ],
      "component": {
        "packageUrl": "string",
        "hash": "string",
        "sha256": "string",
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "displayName": "string",
        "proprietary": true,
        "thirdParty": true
      }
    }
  ],
  "removedViolations": [
    {
      "policyId": "string",
      "policyName": "string",
      "policyViolationId": "string",
      "threatLevel": 0,
      "constraintViolations": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "reasons": [
            {
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              }
            }
          ]
        }
      ],
      "component": {
        "packageUrl": "string",
        "hash": "string",
        "sha256": "string",
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "displayName": "string",
        "proprietary": true,
        "thirdParty": true
      }
    }
  ]
}
```

<h3 id="getpolicyviolationdiff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiPolicyViolationDiffDTO](#schemaapipolicyviolationdiffdto)|

<aside class="success">
This operation does not require authentication
</aside>

## getPolicyViolations_1

<a id="opIdgetPolicyViolations_1"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/applications/{applicationPublicId}/reports/{scanId}/policy \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applications/{applicationPublicId}/reports/{scanId}/policy");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/applications/{applicationPublicId}/reports/{scanId}/policy', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/applications/{applicationPublicId}/reports/{scanId}/policy',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/applications/{applicationPublicId}/reports/{scanId}/policy`

<h3 id="getpolicyviolations_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationPublicId|path|string|true|none|
|scanId|path|string|true|none|

> Example responses

> default Response

```json
{
  "reportTime": "2019-08-24T14:15:22Z",
  "reportTitle": "string",
  "commitHash": "string",
  "initiator": "string",
  "application": {
    "id": "string",
    "publicId": "string",
    "name": "string",
    "organizationId": "string",
    "contactUserName": "string"
  },
  "counts": {
    "property1": 0,
    "property2": 0
  },
  "components": [
    {
      "packageUrl": "string",
      "hash": "string",
      "sha256": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "proprietary": true,
      "thirdParty": true,
      "matchState": "string",
      "pathnames": [
        "string"
      ],
      "dependencyData": {
        "directDependency": true,
        "innerSource": true,
        "parentComponentPurls": [
          "string"
        ],
        "innerSourceData": [
          {
            "ownerApplicationName": "string",
            "ownerApplicationId": "string",
            "innerSourceComponentPurl": "string"
          }
        ]
      },
      "violations": [
        {
          "policyId": "string",
          "policyName": "string",
          "policyThreatCategory": "string",
          "policyThreatLevel": 0,
          "policyViolationId": "string",
          "waived": true,
          "grandfathered": true,
          "legacyViolation": true,
          "constraints": [
            {
              "constraintId": "string",
              "constraintName": "string",
              "conditions": [
                {
                  "conditionSummary": "string",
                  "conditionReason": "string"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

<h3 id="getpolicyviolations_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiReportPolicyDataDTOV2](#schemaapireportpolicydatadtov2)|

<aside class="success">
This operation does not require authentication
</aside>

## getRawData

<a id="opIdgetRawData"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/applications/{applicationPublicId}/reports/{scanId}/raw \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/applications/{applicationPublicId}/reports/{scanId}/raw");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/applications/{applicationPublicId}/reports/{scanId}/raw', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/applications/{applicationPublicId}/reports/{scanId}/raw',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/applications/{applicationPublicId}/reports/{scanId}/raw`

<h3 id="getrawdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationPublicId|path|string|true|none|
|scanId|path|string|true|none|

> Example responses

> default Response

```json
{
  "components": [
    {
      "packageUrl": "string",
      "hash": "string",
      "sha256": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "proprietary": true,
      "thirdParty": true,
      "matchState": "string",
      "pathnames": [
        "string"
      ],
      "identificationSource": "string",
      "licenseData": {
        "declaredLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "observedLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "effectiveLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "overriddenLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "status": "string",
        "effectiveLicenseThreats": [
          {
            "licenseThreatGroupName": "string",
            "licenseThreatGroupLevel": 0,
            "licenseThreatGroupCategory": "string"
          }
        ]
      },
      "securityData": {
        "securityIssues": [
          {
            "source": "string",
            "reference": "string",
            "severity": 0.1,
            "status": "string",
            "url": "string",
            "threatCategory": "string",
            "cwe": "string",
            "cvssVector": "string",
            "cvssVectorSource": "string",
            "analysis": {
              "state": "string",
              "justification": "string",
              "response": "string",
              "detail": "string"
            }
          }
        ]
      },
      "dependencyData": {
        "directDependency": true,
        "innerSource": true,
        "parentComponentPurls": [
          "string"
        ],
        "innerSourceData": [
          {
            "ownerApplicationName": "string",
            "ownerApplicationId": "string",
            "innerSourceComponentPurl": "string"
          }
        ]
      },
      "cpe": "string",
      "swid": {
        "tagId": "string",
        "name": "string",
        "version": "string",
        "tagVersion": 0,
        "patch": true,
        "text": {
          "encoding": "string",
          "contentType": "string",
          "content": "string"
        }
      }
    }
  ],
  "matchSummary": {
    "totalComponentCount": 0,
    "knownComponentCount": 0
  },
  "globalInformation": {
    "dataVersionDate": "string"
  }
}
```

<h3 id="getrawdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiReportRawDataDTOV2](#schemaapireportrawdatadtov2)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-audit-logs">Audit Logs</h1>

## getAuditLogs

<a id="opIdgetAuditLogs"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/auditLogs \
  -H 'Accept: text/plain'

```

```java
URL obj = new URL("/api/v2/auditLogs");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/v2/auditLogs', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/v2/auditLogs',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/auditLogs`

<h3 id="getauditlogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startUtcDate|query|string|false|none|
|endUtcDate|query|string|false|none|

> Example responses

<h3 id="getauditlogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="getauditlogs-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-claim">Claim</h1>

## get

<a id="opIdget"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/claim/components/{hash} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/claim/components/{hash}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/claim/components/{hash}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/claim/components/{hash}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/claim/components/{hash}`

<h3 id="get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string|true|none|

> Example responses

> default Response

```json
{
  "hash": "string",
  "comment": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "packageUrl": "string"
}
```

<h3 id="get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiHashComponentIdentifierDTO](#schemaapihashcomponentidentifierdto)|

<aside class="success">
This operation does not require authentication
</aside>

## delete

<a id="opIddelete"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/claim/components/{hash} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/claim/components/{hash}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/claim/components/{hash}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/claim/components/{hash}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/claim/components/{hash}`

<h3 id="delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hash|path|string|true|none|

> Example responses

<h3 id="delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="delete-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getAll

<a id="opIdgetAll"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/claim/components \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/claim/components");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/claim/components', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/claim/components',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/claim/components`

> Example responses

> default Response

```json
{
  "componentClaims": [
    {
      "hash": "string",
      "comment": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "packageUrl": "string"
    }
  ]
}
```

<h3 id="getall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiHashComponentIdentifiersDTO](#schemaapihashcomponentidentifiersdto)|

<aside class="success">
This operation does not require authentication
</aside>

## set

<a id="opIdset"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/claim/components \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/claim/components");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/claim/components', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "hash": "string",
  "comment": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "packageUrl": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/claim/components',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/claim/components`

> Body parameter

```json
{
  "hash": "string",
  "comment": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "packageUrl": "string"
}
```

<h3 id="set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiHashComponentIdentifierDTO](#schemaapihashcomponentidentifierdto)|false|none|

> Example responses

> default Response

```json
{
  "hash": "string",
  "comment": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "packageUrl": "string"
}
```

<h3 id="set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiHashComponentIdentifierDTO](#schemaapihashcomponentidentifierdto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-composite-source-control">Composite Source Control</h1>

## getCompositeSourceControlByOwner

<a id="opIdgetCompositeSourceControlByOwner"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/compositeSourceControl/{ownerType}/{internalOwnerId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/compositeSourceControl/{ownerType}/{internalOwnerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/compositeSourceControl/{ownerType}/{internalOwnerId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/compositeSourceControl/{ownerType}/{internalOwnerId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/compositeSourceControl/{ownerType}/{internalOwnerId}`

<h3 id="getcompositesourcecontrolbyowner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|internalOwnerId|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "id": "string",
  "ownerId": "string",
  "repositoryUrl": "string",
  "provider": {
    "value": "string",
    "parentValue": "string",
    "parentName": "string"
  },
  "username": {
    "value": "string",
    "parentValue": "string",
    "parentName": "string"
  },
  "token": {
    "value": "string",
    "parentValue": "string",
    "parentName": "string"
  },
  "baseBranch": {
    "value": "string",
    "parentValue": "string",
    "parentName": "string"
  },
  "remediationPullRequestsEnabled": {
    "value": true,
    "parentValue": true,
    "parentName": "string"
  },
  "statusChecksEnabled": {
    "value": true,
    "parentValue": true,
    "parentName": "string"
  },
  "pullRequestCommentingEnabled": {
    "value": true,
    "parentValue": true,
    "parentName": "string"
  },
  "sourceControlEvaluationsEnabled": {
    "value": true,
    "parentValue": true,
    "parentName": "string"
  },
  "sourceControlScanTarget": {
    "value": "string",
    "parentValue": "string",
    "parentName": "string"
  },
  "sshEnabled": {
    "value": true,
    "parentValue": true,
    "parentName": "string"
  },
  "commitStatusEnabled": {
    "value": true,
    "parentValue": true,
    "parentName": "string"
  }
}
```

<h3 id="getcompositesourcecontrolbyowner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiCompositeSourceControlDTO](#schemaapicompositesourcecontroldto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-composite-source-control-config-validator">Composite Source Control Config Validator</h1>

## validateSourceControlConfig

<a id="opIdvalidateSourceControlConfig"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/compositeSourceControlConfigValidator/application/{applicationId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/compositeSourceControlConfigValidator/application/{applicationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/compositeSourceControlConfigValidator/application/{applicationId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/compositeSourceControlConfigValidator/application/{applicationId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/compositeSourceControlConfigValidator/application/{applicationId}`

<h3 id="validatesourcecontrolconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|none|

> Example responses

> default Response

```json
{
  "configurationComplete": {
    "valid": true,
    "message": "string"
  },
  "repoPrivate": {
    "valid": true,
    "message": "string"
  },
  "tokenPermissions": {
    "valid": true,
    "message": "string"
  },
  "sshConfiguration": {
    "valid": true,
    "message": "string"
  }
}
```

<h3 id="validatesourcecontrolconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ConfigurationValidationResult](#schemaconfigurationvalidationresult)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-config">Config</h1>

## enabledFeature

<a id="opIdenabledFeature"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/config/features/{feature} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/features/{feature}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.post('/api/v2/config/features/{feature}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/config/features/{feature}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/config/features/{feature}`

<h3 id="enabledfeature-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|feature|path|string|true|none|

> Example responses

<h3 id="enabledfeature-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="enabledfeature-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## disableFeature

<a id="opIddisableFeature"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/config/features/{feature} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/features/{feature}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/config/features/{feature}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/config/features/{feature}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/config/features/{feature}`

<h3 id="disablefeature-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|feature|path|string|true|none|

> Example responses

<h3 id="disablefeature-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="disablefeature-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getConfiguration

<a id="opIdgetConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/config \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/config");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/config', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/config',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/config`

<h3 id="getconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|property|query|array[string]|false|none|

> Example responses

> default Response

```json
{
  "property1": {},
  "property2": {}
}
```

<h3 id="getconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|Inline|

<h3 id="getconfiguration-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» **additionalProperties**|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## setConfiguration

<a id="opIdsetConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/config \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*'
}

r = requests.put('/api/v2/config', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "property1": {},
  "property2": {}
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/api/v2/config',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/config`

> Body parameter

```json
{
  "property1": {},
  "property2": {}
}
```

<h3 id="setconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» **additionalProperties**|body|object|false|none|

> Example responses

<h3 id="setconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="setconfiguration-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## deleteConfiguration

<a id="opIddeleteConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/config \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/config', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/config',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/config`

<h3 id="deleteconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|property|query|array[string]|false|none|

> Example responses

<h3 id="deleteconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deleteconfiguration-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-config-artifactory-connection">Config Artifactory Connection</h1>

## getOwnerArtifactoryConnection

<a id="opIdgetOwnerArtifactoryConnection"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}`

<h3 id="getownerartifactoryconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|internalOwnerId|path|string|true|none|
|inherit|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "artifactoryConnection": {
    "artifactoryConnectionId": "string",
    "ownerType": "application",
    "ownerId": "string",
    "isAnonymous": true,
    "baseUrl": "string",
    "username": "string",
    "password": "string"
  },
  "artifactoryConnectionStatus": {
    "enabled": true,
    "inheritedFromOrganizationId": "string",
    "inheritedFromOrganizationName": "string",
    "allowOverride": true,
    "inheritedFromOrgEnabled": true,
    "allowChange": true
  },
  "ownerDTO": {
    "ownerPublicId": "string",
    "ownerId": "string",
    "ownerName": "string",
    "ownerType": "string"
  }
}
```

<h3 id="getownerartifactoryconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiOwnerArtifactoryConnectionDTO](#schemaapiownerartifactoryconnectiondto)|

<aside class="success">
This operation does not require authentication
</aside>

## updateOwnerArtifactoryConnectionStatus

<a id="opIdupdateOwnerArtifactoryConnectionStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "enabled": true,
  "allowOverride": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}`

> Body parameter

```json
{
  "enabled": true,
  "allowOverride": true
}
```

<h3 id="updateownerartifactoryconnectionstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|internalOwnerId|path|string|true|none|
|body|body|[ApiArtifactoryConnectionStatusRequestDTO](#schemaapiartifactoryconnectionstatusrequestdto)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

<h3 id="updateownerartifactoryconnectionstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="updateownerartifactoryconnectionstatus-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## addArtifactoryConnection

<a id="opIdaddArtifactoryConnection"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "artifactoryConnectionId": "string",
  "ownerType": "application",
  "ownerId": "string",
  "isAnonymous": true,
  "baseUrl": "string",
  "username": "string",
  "password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}`

> Body parameter

```json
{
  "artifactoryConnectionId": "string",
  "ownerType": "application",
  "ownerId": "string",
  "isAnonymous": true,
  "baseUrl": "string",
  "username": "string",
  "password": "string"
}
```

<h3 id="addartifactoryconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|internalOwnerId|path|string|true|none|
|body|body|[ApiArtifactoryConnectionDTO](#schemaapiartifactoryconnectiondto)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "artifactoryConnectionId": "string",
  "ownerType": "application",
  "ownerId": "string",
  "isAnonymous": true,
  "baseUrl": "string",
  "username": "string",
  "password": "string"
}
```

<h3 id="addartifactoryconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiArtifactoryConnectionDTO](#schemaapiartifactoryconnectiondto)|

<aside class="success">
This operation does not require authentication
</aside>

## getArtifactoryConnection

<a id="opIdgetArtifactoryConnection"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId}`

<h3 id="getartifactoryconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|internalOwnerId|path|string|true|none|
|artifactoryConnectionId|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "artifactoryConnectionId": "string",
  "ownerType": "application",
  "ownerId": "string",
  "isAnonymous": true,
  "baseUrl": "string",
  "username": "string",
  "password": "string"
}
```

<h3 id="getartifactoryconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiArtifactoryConnectionDTO](#schemaapiartifactoryconnectiondto)|

<aside class="success">
This operation does not require authentication
</aside>

## updateArtifactoryConnection

<a id="opIdupdateArtifactoryConnection"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "artifactoryConnectionId": "string",
  "ownerType": "application",
  "ownerId": "string",
  "isAnonymous": true,
  "baseUrl": "string",
  "username": "string",
  "password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId}`

> Body parameter

```json
{
  "artifactoryConnectionId": "string",
  "ownerType": "application",
  "ownerId": "string",
  "isAnonymous": true,
  "baseUrl": "string",
  "username": "string",
  "password": "string"
}
```

<h3 id="updateartifactoryconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|internalOwnerId|path|string|true|none|
|artifactoryConnectionId|path|string|true|none|
|body|body|[ApiArtifactoryConnectionDTO](#schemaapiartifactoryconnectiondto)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "artifactoryConnectionId": "string",
  "ownerType": "application",
  "ownerId": "string",
  "isAnonymous": true,
  "baseUrl": "string",
  "username": "string",
  "password": "string"
}
```

<h3 id="updateartifactoryconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiArtifactoryConnectionDTO](#schemaapiartifactoryconnectiondto)|

<aside class="success">
This operation does not require authentication
</aside>

## deleteArtifactoryConnection

<a id="opIddeleteArtifactoryConnection"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId}`

<h3 id="deleteartifactoryconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|internalOwnerId|path|string|true|none|
|artifactoryConnectionId|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

<h3 id="deleteartifactoryconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deleteartifactoryconnection-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## testArtifactoryConnection

<a id="opIdtestArtifactoryConnection"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/test \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/test");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': '*/*',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/test', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "artifactoryConnectionId": "string",
  "ownerType": "application",
  "ownerId": "string",
  "isAnonymous": true,
  "baseUrl": "string",
  "username": "string",
  "password": "string"
}';
const headers = {
  'Content-Type':'*/*',
  'Accept':'application/json'
};

fetch('/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/test',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/test`

> Body parameter

<h3 id="testartifactoryconnection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|internalOwnerId|path|string|true|none|
|body|body|[ApiArtifactoryConnectionDTO](#schemaapiartifactoryconnectiondto)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="testartifactoryconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiStatusDTO](#schemaapistatusdto)|

<aside class="success">
This operation does not require authentication
</aside>

## testArtifactoryConnection_1

<a id="opIdtestArtifactoryConnection_1"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId}/test \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId}/test");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.post('/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId}/test', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId}/test',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/config/artifactoryConnection/{ownerType}/{internalOwnerId}/{artifactoryConnectionId}/test`

<h3 id="testartifactoryconnection_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|internalOwnerId|path|string|true|none|
|artifactoryConnectionId|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="testartifactoryconnection_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiStatusDTO](#schemaapistatusdto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-config-crowd">Config Crowd</h1>

## getCrowdConfiguration

<a id="opIdgetCrowdConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/config/crowd \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/config/crowd");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/config/crowd', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/config/crowd',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/config/crowd`

> Example responses

> default Response

```json
{
  "serverUrl": "string",
  "applicationName": "string",
  "applicationPassword": [
    "string"
  ]
}
```

<h3 id="getcrowdconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiCrowdConfigurationDTO](#schemaapicrowdconfigurationdto)|

<aside class="success">
This operation does not require authentication
</aside>

## insertOrUpdateCrowdConfiguration

<a id="opIdinsertOrUpdateCrowdConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/config/crowd \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/crowd");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*'
}

r = requests.put('/api/v2/config/crowd', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "serverUrl": "string",
  "applicationName": "string",
  "applicationPassword": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/api/v2/config/crowd',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/config/crowd`

> Body parameter

```json
{
  "serverUrl": "string",
  "applicationName": "string",
  "applicationPassword": [
    "string"
  ]
}
```

<h3 id="insertorupdatecrowdconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiCrowdConfigurationDTO](#schemaapicrowdconfigurationdto)|false|none|

> Example responses

<h3 id="insertorupdatecrowdconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="insertorupdatecrowdconfiguration-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## deleteCrowdConfiguration

<a id="opIddeleteCrowdConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/config/crowd \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/crowd");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/config/crowd', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/config/crowd',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/config/crowd`

> Example responses

<h3 id="deletecrowdconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deletecrowdconfiguration-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## testCrowdConfiguration

<a id="opIdtestCrowdConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/config/crowd/test \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/config/crowd/test");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/config/crowd/test', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "serverUrl": "string",
  "applicationName": "string",
  "applicationPassword": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/config/crowd/test',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/config/crowd/test`

> Body parameter

```json
{
  "serverUrl": "string",
  "applicationName": "string",
  "applicationPassword": [
    "string"
  ]
}
```

<h3 id="testcrowdconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiCrowdConfigurationDTO](#schemaapicrowdconfigurationdto)|false|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="testcrowdconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiStatusDTO](#schemaapistatusdto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-config-jira">Config JIRA</h1>

## getConfiguration_1

<a id="opIdgetConfiguration_1"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/config/jira \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/config/jira");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/config/jira', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/config/jira',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/config/jira`

> Example responses

> default Response

```json
{
  "url": "string",
  "username": "string",
  "password": [
    "string"
  ],
  "customFields": {
    "property1": {},
    "property2": {}
  }
}
```

<h3 id="getconfiguration_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiJiraConfigurationDTO](#schemaapijiraconfigurationdto)|

<aside class="success">
This operation does not require authentication
</aside>

## setConfiguration_1

<a id="opIdsetConfiguration_1"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/config/jira \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/jira");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*'
}

r = requests.put('/api/v2/config/jira', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/api/v2/config/jira',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/config/jira`

> Body parameter

```json
{}
```

<h3 id="setconfiguration_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[JsonNode](#schemajsonnode)|false|none|

> Example responses

<h3 id="setconfiguration_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="setconfiguration_1-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## deleteConfiguration_1

<a id="opIddeleteConfiguration_1"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/config/jira \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/jira");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/config/jira', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/config/jira',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/config/jira`

> Example responses

<h3 id="deleteconfiguration_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deleteconfiguration_1-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-config-mail">Config Mail</h1>

## getConfiguration_2

<a id="opIdgetConfiguration_2"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/config/mail \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/config/mail");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/config/mail', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/config/mail',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/config/mail`

> Example responses

> default Response

```json
{
  "hostname": "string",
  "port": 0,
  "username": "string",
  "password": [
    "string"
  ],
  "passwordIsIncluded": true,
  "sslEnabled": true,
  "startTlsEnabled": true,
  "systemEmail": "string"
}
```

<h3 id="getconfiguration_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiMailConfigurationDTO](#schemaapimailconfigurationdto)|

<aside class="success">
This operation does not require authentication
</aside>

## setConfiguration_2

<a id="opIdsetConfiguration_2"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/config/mail \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/mail");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*'
}

r = requests.put('/api/v2/config/mail', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "hostname": "string",
  "port": 0,
  "username": "string",
  "password": [
    "string"
  ],
  "passwordIsIncluded": true,
  "sslEnabled": true,
  "startTlsEnabled": true,
  "systemEmail": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/api/v2/config/mail',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/config/mail`

> Body parameter

```json
{
  "hostname": "string",
  "port": 0,
  "username": "string",
  "password": [
    "string"
  ],
  "passwordIsIncluded": true,
  "sslEnabled": true,
  "startTlsEnabled": true,
  "systemEmail": "string"
}
```

<h3 id="setconfiguration_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiMailConfigurationDTO](#schemaapimailconfigurationdto)|false|none|

> Example responses

<h3 id="setconfiguration_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="setconfiguration_2-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## deleteConfiguration_2

<a id="opIddeleteConfiguration_2"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/config/mail \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/mail");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/config/mail', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/config/mail',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/config/mail`

> Example responses

<h3 id="deleteconfiguration_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deleteconfiguration_2-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## testConfiguration

<a id="opIdtestConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/config/mail/test/{recipientEmail} \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/mail/test/{recipientEmail}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*'
}

r = requests.post('/api/v2/config/mail/test/{recipientEmail}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "hostname": "string",
  "port": 0,
  "username": "string",
  "password": [
    "string"
  ],
  "passwordIsIncluded": true,
  "sslEnabled": true,
  "startTlsEnabled": true,
  "systemEmail": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/api/v2/config/mail/test/{recipientEmail}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/config/mail/test/{recipientEmail}`

> Body parameter

```json
{
  "hostname": "string",
  "port": 0,
  "username": "string",
  "password": [
    "string"
  ],
  "passwordIsIncluded": true,
  "sslEnabled": true,
  "startTlsEnabled": true,
  "systemEmail": "string"
}
```

<h3 id="testconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|recipientEmail|path|string|true|none|
|body|body|[ApiMailConfigurationDTO](#schemaapimailconfigurationdto)|false|none|

> Example responses

<h3 id="testconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="testconfiguration-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-config-proxy-server">Config Proxy Server</h1>

## getConfiguration_3

<a id="opIdgetConfiguration_3"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/config/httpProxyServer \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/config/httpProxyServer");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/config/httpProxyServer', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/config/httpProxyServer',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/config/httpProxyServer`

> Example responses

> default Response

```json
{
  "hostname": "string",
  "port": 0,
  "username": "string",
  "password": [
    "string"
  ],
  "passwordIsIncluded": true,
  "excludeHosts": [
    "string"
  ]
}
```

<h3 id="getconfiguration_3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiProxyServerConfigurationDTO](#schemaapiproxyserverconfigurationdto)|

<aside class="success">
This operation does not require authentication
</aside>

## setConfiguration_3

<a id="opIdsetConfiguration_3"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/config/httpProxyServer \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/httpProxyServer");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*'
}

r = requests.put('/api/v2/config/httpProxyServer', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "hostname": "string",
  "port": 0,
  "username": "string",
  "password": [
    "string"
  ],
  "passwordIsIncluded": true,
  "excludeHosts": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/api/v2/config/httpProxyServer',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/config/httpProxyServer`

> Body parameter

```json
{
  "hostname": "string",
  "port": 0,
  "username": "string",
  "password": [
    "string"
  ],
  "passwordIsIncluded": true,
  "excludeHosts": [
    "string"
  ]
}
```

<h3 id="setconfiguration_3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiProxyServerConfigurationDTO](#schemaapiproxyserverconfigurationdto)|false|none|

> Example responses

<h3 id="setconfiguration_3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="setconfiguration_3-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## deleteConfiguration_3

<a id="opIddeleteConfiguration_3"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/config/httpProxyServer \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/httpProxyServer");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/config/httpProxyServer', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/config/httpProxyServer',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/config/httpProxyServer`

> Example responses

<h3 id="deleteconfiguration_3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deleteconfiguration_3-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-config-reverse-proxy-authentication">Config Reverse Proxy Authentication</h1>

## getConfiguration_4

<a id="opIdgetConfiguration_4"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/config/reverseProxyAuthentication \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/config/reverseProxyAuthentication");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/config/reverseProxyAuthentication', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/config/reverseProxyAuthentication',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/config/reverseProxyAuthentication`

> Example responses

> default Response

```json
{
  "enabled": true,
  "usernameHeader": "string",
  "csrfProtectionDisabled": true,
  "logoutUrl": "string"
}
```

<h3 id="getconfiguration_4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiReverseProxyAuthenticationConfigurationDTO](#schemaapireverseproxyauthenticationconfigurationdto)|

<aside class="success">
This operation does not require authentication
</aside>

## setConfiguration_4

<a id="opIdsetConfiguration_4"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/config/reverseProxyAuthentication \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/reverseProxyAuthentication");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*'
}

r = requests.put('/api/v2/config/reverseProxyAuthentication', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "enabled": true,
  "usernameHeader": "string",
  "csrfProtectionDisabled": true,
  "logoutUrl": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/api/v2/config/reverseProxyAuthentication',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/config/reverseProxyAuthentication`

> Body parameter

```json
{
  "enabled": true,
  "usernameHeader": "string",
  "csrfProtectionDisabled": true,
  "logoutUrl": "string"
}
```

<h3 id="setconfiguration_4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiReverseProxyAuthenticationConfigurationDTO](#schemaapireverseproxyauthenticationconfigurationdto)|false|none|

> Example responses

<h3 id="setconfiguration_4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="setconfiguration_4-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## deleteConfiguration_4

<a id="opIddeleteConfiguration_4"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/config/reverseProxyAuthentication \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/reverseProxyAuthentication");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/config/reverseProxyAuthentication', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/config/reverseProxyAuthentication',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/config/reverseProxyAuthentication`

> Example responses

<h3 id="deleteconfiguration_4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deleteconfiguration_4-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-config-saml">Config SAML</h1>

## getSamlConfiguration

<a id="opIdgetSamlConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/config/saml \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/config/saml");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/config/saml', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/config/saml',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/config/saml`

> Example responses

> default Response

```json
{
  "identityProviderName": "string",
  "entityId": "string",
  "firstNameAttributeName": "string",
  "lastNameAttributeName": "string",
  "emailAttributeName": "string",
  "usernameAttributeName": "string",
  "groupsAttributeName": "string",
  "validateResponseSignature": true,
  "validateAssertionSignature": true,
  "identityProviderMetadataXml": "string"
}
```

<h3 id="getsamlconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiSamlConfigurationResponseDTO](#schemaapisamlconfigurationresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

## insertOrUpdateSamlConfiguration

<a id="opIdinsertOrUpdateSamlConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/config/saml \
  -H 'Content-Type: multipart/form-data' \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/saml");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'multipart/form-data',
  'Accept': '*/*'
}

r = requests.put('/api/v2/config/saml', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "identityProviderXml": "string",
  "samlConfiguration": {
    "identityProviderName": "string",
    "entityId": "string",
    "firstNameAttributeName": "string",
    "lastNameAttributeName": "string",
    "emailAttributeName": "string",
    "usernameAttributeName": "string",
    "groupsAttributeName": "string",
    "validateResponseSignature": true,
    "validateAssertionSignature": true
  }
}';
const headers = {
  'Content-Type':'multipart/form-data',
  'Accept':'*/*'
};

fetch('/api/v2/config/saml',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/config/saml`

> Body parameter

```yaml
identityProviderXml: string
samlConfiguration:
  identityProviderName: string
  entityId: string
  firstNameAttributeName: string
  lastNameAttributeName: string
  emailAttributeName: string
  usernameAttributeName: string
  groupsAttributeName: string
  validateResponseSignature: true
  validateAssertionSignature: true

```

<h3 id="insertorupdatesamlconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» identityProviderXml|body|string|false|none|
|» samlConfiguration|body|[ApiSamlConfigurationDTO](#schemaapisamlconfigurationdto)|false|none|
|»» identityProviderName|body|string|false|none|
|»» entityId|body|string|false|none|
|»» firstNameAttributeName|body|string|false|none|
|»» lastNameAttributeName|body|string|false|none|
|»» emailAttributeName|body|string|false|none|
|»» usernameAttributeName|body|string|false|none|
|»» groupsAttributeName|body|string|false|none|
|»» validateResponseSignature|body|boolean|false|none|
|»» validateAssertionSignature|body|boolean|false|none|

> Example responses

<h3 id="insertorupdatesamlconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="insertorupdatesamlconfiguration-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## deleteSamlConfiguration

<a id="opIddeleteSamlConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/config/saml \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/saml");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/config/saml', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/config/saml',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/config/saml`

> Example responses

<h3 id="deletesamlconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deletesamlconfiguration-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getMetadata

<a id="opIdgetMetadata"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/config/saml/metadata \
  -H 'Accept: application/xml'

```

```java
URL obj = new URL("/api/v2/config/saml/metadata");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/xml'
}

r = requests.get('/api/v2/config/saml/metadata', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/xml'
};

fetch('/api/v2/config/saml/metadata',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/config/saml/metadata`

> Example responses

> default Response

<h3 id="getmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|string|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-config-source-control">Config Source Control</h1>

## getConfiguration_5

<a id="opIdgetConfiguration_5"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/config/sourceControl \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/config/sourceControl");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/config/sourceControl', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/config/sourceControl',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/config/sourceControl`

> Example responses

> default Response

```json
{
  "cloneDirectory": "string",
  "gitImplementation": "native",
  "prCommentPurgeWindow": 0,
  "prEventPurgeWindow": 0,
  "gitExecutable": "string",
  "gitTimeoutSeconds": 0,
  "commitUsername": "string",
  "commitEmail": "string",
  "useUsernameInRepositoryCloneUrl": true,
  "defaultBranchMonitoringStartTime": "string",
  "defaultBranchMonitoringIntervalHours": 0,
  "pullRequestMonitoringIntervalSeconds": 0
}
```

<h3 id="getconfiguration_5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiSourceControlConfigurationDTO](#schemaapisourcecontrolconfigurationdto)|

<aside class="success">
This operation does not require authentication
</aside>

## setConfiguration_5

<a id="opIdsetConfiguration_5"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/config/sourceControl \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/sourceControl");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*'
}

r = requests.put('/api/v2/config/sourceControl', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/api/v2/config/sourceControl',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/config/sourceControl`

> Body parameter

```json
{}
```

<h3 id="setconfiguration_5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[JsonNode](#schemajsonnode)|false|none|

> Example responses

<h3 id="setconfiguration_5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="setconfiguration_5-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## deleteConfiguration_5

<a id="opIddeleteConfiguration_5"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/config/sourceControl \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/config/sourceControl");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/config/sourceControl', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/config/sourceControl',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/config/sourceControl`

> Example responses

<h3 id="deleteconfiguration_5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deleteconfiguration_5-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-endpoints">Endpoints</h1>

## getOpenAPI

<a id="opIdgetOpenAPI"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/endpoints/{apiType} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/endpoints/{apiType}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/endpoints/{apiType}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/endpoints/{apiType}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/endpoints/{apiType}`

<h3 id="getopenapi-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiType|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|apiType|public|
|apiType|experimental|

> Example responses

> default Response

```json
"string"
```

<h3 id="getopenapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|string|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-firewall">Firewall</h1>

## getFirewallMetrics

<a id="opIdgetFirewallMetrics"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/firewall/metrics/embedded \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/firewall/metrics/embedded");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/firewall/metrics/embedded', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/firewall/metrics/embedded',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/firewall/metrics/embedded`

> Example responses

> default Response

```json
{
  "property1": {
    "firewallMetricsValue": 0,
    "latestUpdatedTime": "2019-08-24T14:15:22Z"
  },
  "property2": {
    "firewallMetricsValue": 0,
    "latestUpdatedTime": "2019-08-24T14:15:22Z"
  }
}
```

<h3 id="getfirewallmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|Inline|

<h3 id="getfirewallmetrics-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» **additionalProperties**|[ApiFirewallMetricsResultDTO](#schemaapifirewallmetricsresultdto)|false|none|none|
|»» firewallMetricsValue|integer(int32)|false|none|none|
|»» latestUpdatedTime|string(date-time)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getRepositoryManagers

<a id="opIdgetRepositoryManagers"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/firewall/repositoryManagers \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/firewall/repositoryManagers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/firewall/repositoryManagers', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/firewall/repositoryManagers',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/firewall/repositoryManagers`

> Example responses

> default Response

```json
{
  "repositoryManagers": [
    {
      "id": "string",
      "name": "string",
      "instanceId": "string",
      "productName": "string",
      "productVersion": "string"
    }
  ]
}
```

<h3 id="getrepositorymanagers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiRepositoryManagerListDTO](#schemaapirepositorymanagerlistdto)|

<aside class="success">
This operation does not require authentication
</aside>

## addRepositoryManager

<a id="opIdaddRepositoryManager"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/firewall/repositoryManagers \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/firewall/repositoryManagers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/firewall/repositoryManagers', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "id": "string",
  "name": "string",
  "instanceId": "string",
  "productName": "string",
  "productVersion": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/firewall/repositoryManagers',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/firewall/repositoryManagers`

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "instanceId": "string",
  "productName": "string",
  "productVersion": "string"
}
```

<h3 id="addrepositorymanager-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiRepositoryManagerDTO](#schemaapirepositorymanagerdto)|false|none|

> Example responses

> default Response

```json
{
  "id": "string",
  "name": "string",
  "instanceId": "string",
  "productName": "string",
  "productVersion": "string"
}
```

<h3 id="addrepositorymanager-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiRepositoryManagerDTO](#schemaapirepositorymanagerdto)|

<aside class="success">
This operation does not require authentication
</aside>

## getConfiguredRepositories

<a id="opIdgetConfiguredRepositories"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/firewall/repositories/configuration/{repositoryManagerId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/firewall/repositories/configuration/{repositoryManagerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/firewall/repositories/configuration/{repositoryManagerId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/firewall/repositories/configuration/{repositoryManagerId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/firewall/repositories/configuration/{repositoryManagerId}`

<h3 id="getconfiguredrepositories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryManagerId|path|string|true|none|
|sinceUtcTimestamp|query|integer(int64)|false|none|

> Example responses

> default Response

```json
{
  "repositories": [
    {
      "repositoryId": "string",
      "publicId": "string",
      "format": "string",
      "type": "string",
      "auditEnabled": true,
      "quarantineEnabled": true,
      "policyCompliantComponentSelectionEnabled": true,
      "namespaceConfusionProtectionEnabled": true
    }
  ]
}
```

<h3 id="getconfiguredrepositories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiRepositoryListDTO](#schemaapirepositorylistdto)|

<aside class="success">
This operation does not require authentication
</aside>

## configureRepositories

<a id="opIdconfigureRepositories"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/firewall/repositories/configuration/{repositoryManagerId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/firewall/repositories/configuration/{repositoryManagerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/firewall/repositories/configuration/{repositoryManagerId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "repositories": [
    {
      "repositoryId": "string",
      "publicId": "string",
      "format": "string",
      "type": "string",
      "auditEnabled": true,
      "quarantineEnabled": true,
      "policyCompliantComponentSelectionEnabled": true,
      "namespaceConfusionProtectionEnabled": true
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/firewall/repositories/configuration/{repositoryManagerId}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/firewall/repositories/configuration/{repositoryManagerId}`

> Body parameter

```json
{
  "repositories": [
    {
      "repositoryId": "string",
      "publicId": "string",
      "format": "string",
      "type": "string",
      "auditEnabled": true,
      "quarantineEnabled": true,
      "policyCompliantComponentSelectionEnabled": true,
      "namespaceConfusionProtectionEnabled": true
    }
  ]
}
```

<h3 id="configurerepositories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryManagerId|path|string|true|none|
|body|body|[ApiRepositoryListDTO](#schemaapirepositorylistdto)|false|none|

> Example responses

<h3 id="configurerepositories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="configurerepositories-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getRepositoryManager

<a id="opIdgetRepositoryManager"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/firewall/repositoryManagers/{repositoryManagerId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/firewall/repositoryManagers/{repositoryManagerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/firewall/repositoryManagers/{repositoryManagerId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/firewall/repositoryManagers/{repositoryManagerId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/firewall/repositoryManagers/{repositoryManagerId}`

<h3 id="getrepositorymanager-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryManagerId|path|string|true|none|

> Example responses

> default Response

```json
{
  "id": "string",
  "name": "string",
  "instanceId": "string",
  "productName": "string",
  "productVersion": "string"
}
```

<h3 id="getrepositorymanager-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiRepositoryManagerDTO](#schemaapirepositorymanagerdto)|

<aside class="success">
This operation does not require authentication
</aside>

## deleteRepositoryManager

<a id="opIddeleteRepositoryManager"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/firewall/repositoryManagers/{repositoryManagerId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/firewall/repositoryManagers/{repositoryManagerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('/api/v2/firewall/repositoryManagers/{repositoryManagerId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/firewall/repositoryManagers/{repositoryManagerId}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/firewall/repositoryManagers/{repositoryManagerId}`

<h3 id="deleterepositorymanager-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryManagerId|path|string|true|none|

> Example responses

<h3 id="deleterepositorymanager-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deleterepositorymanager-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## evaluateComponents_1

<a id="opIdevaluateComponents_1"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/firewall/components/{repositoryManagerId}/{repositoryId}/evaluate \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/firewall/components/{repositoryManagerId}/{repositoryId}/evaluate");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/firewall/components/{repositoryManagerId}/{repositoryId}/evaluate', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "format": "string",
  "components": [
    {
      "pathname": "string",
      "hash": "string",
      "packageUrl": "string"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/firewall/components/{repositoryManagerId}/{repositoryId}/evaluate',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/firewall/components/{repositoryManagerId}/{repositoryId}/evaluate`

> Body parameter

```json
{
  "format": "string",
  "components": [
    {
      "pathname": "string",
      "hash": "string",
      "packageUrl": "string"
    }
  ]
}
```

<h3 id="evaluatecomponents_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryManagerId|path|string|true|none|
|repositoryId|path|string|true|none|
|body|body|[ApiRepositoryComponentEvaluationRequestList](#schemaapirepositorycomponentevaluationrequestlist)|false|none|

> Example responses

> default Response

```json
{
  "repositoryManagerId": "string",
  "repositoryId": "string",
  "repositoryPublicId": "string",
  "repositoryType": "string",
  "results": [
    {
      "quarantined": true,
      "quarantineDate": "2019-08-24T14:15:22Z",
      "component": {
        "pathname": "string",
        "hash": "string",
        "packageUrl": "string"
      },
      "catalogDate": "2019-08-24T14:15:22Z",
      "policyViolations": [
        {
          "policyId": "string",
          "policyName": "string",
          "policyViolationId": "string",
          "threatLevel": 0,
          "constraintViolations": [
            {
              "constraintId": "string",
              "constraintName": "string",
              "reasons": [
                {
                  "reason": "string",
                  "reference": {
                    "value": "string",
                    "type": "SECURITY_VULNERABILITY_REFID"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

<h3 id="evaluatecomponents_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiRepositoryComponentEvaluationResultList](#schemaapirepositorycomponentevaluationresultlist)|

<aside class="success">
This operation does not require authentication
</aside>

## getFirewallAutoUnquarantineConfig

<a id="opIdgetFirewallAutoUnquarantineConfig"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/firewall/releaseQuarantine/configuration \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/firewall/releaseQuarantine/configuration");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/firewall/releaseQuarantine/configuration', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/firewall/releaseQuarantine/configuration',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/firewall/releaseQuarantine/configuration`

> Example responses

> default Response

```json
[
  {
    "id": "string",
    "name": "string",
    "autoReleaseQuarantineEnabled": true
  }
]
```

<h3 id="getfirewallautounquarantineconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|Inline|

<h3 id="getfirewallautounquarantineconfig-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiFirewallReleaseQuarantineConfigDTO](#schemaapifirewallreleasequarantineconfigdto)]|false|none|none|
|» id|string|false|none|none|
|» name|string|false|none|none|
|» autoReleaseQuarantineEnabled|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## setFirewallAutoUnquarantineConfig

<a id="opIdsetFirewallAutoUnquarantineConfig"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/firewall/releaseQuarantine/configuration \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/firewall/releaseQuarantine/configuration");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('/api/v2/firewall/releaseQuarantine/configuration', headers = headers)

print(r.json())

```

```javascript
const inputBody = '[
  {
    "id": "string",
    "name": "string",
    "autoReleaseQuarantineEnabled": true
  }
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/firewall/releaseQuarantine/configuration',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/firewall/releaseQuarantine/configuration`

> Body parameter

```json
[
  {
    "id": "string",
    "name": "string",
    "autoReleaseQuarantineEnabled": true
  }
]
```

<h3 id="setfirewallautounquarantineconfig-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiFirewallReleaseQuarantineConfigDTO](#schemaapifirewallreleasequarantineconfigdto)|false|none|

> Example responses

> default Response

```json
[
  {
    "id": "string",
    "name": "string",
    "autoReleaseQuarantineEnabled": true
  }
]
```

<h3 id="setfirewallautounquarantineconfig-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|Inline|

<h3 id="setfirewallautounquarantineconfig-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiFirewallReleaseQuarantineConfigDTO](#schemaapifirewallreleasequarantineconfigdto)]|false|none|none|
|» id|string|false|none|none|
|» name|string|false|none|none|
|» autoReleaseQuarantineEnabled|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getFirewallUnquarantineSummary

<a id="opIdgetFirewallUnquarantineSummary"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/firewall/releaseQuarantine/summary \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/firewall/releaseQuarantine/summary");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/firewall/releaseQuarantine/summary', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/firewall/releaseQuarantine/summary',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/firewall/releaseQuarantine/summary`

> Example responses

> default Response

```json
{
  "autoReleaseQuarantineCountMTD": 0,
  "autoReleaseQuarantineCountYTD": 0
}
```

<h3 id="getfirewallunquarantinesummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiFirewallReleaseQuarantineSummaryDTO](#schemaapifirewallreleasequarantinesummarydto)|

<aside class="success">
This operation does not require authentication
</aside>

## getQuarantineList

<a id="opIdgetQuarantineList"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/firewall/components/quarantined \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/firewall/components/quarantined");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/firewall/components/quarantined', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/firewall/components/quarantined',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/firewall/components/quarantined`

<h3 id="getquarantinelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|pageSize|query|integer(int32)|false|none|
|policyId|query|array[string]|false|none|
|componentName|query|string|false|none|
|sortBy|query|string|false|none|
|asc|query|boolean|false|none|

> Example responses

<h3 id="getquarantinelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="getquarantinelist-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getQuarantineSummary

<a id="opIdgetQuarantineSummary"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/firewall/quarantine/summary \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/firewall/quarantine/summary");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/firewall/quarantine/summary', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/firewall/quarantine/summary',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/firewall/quarantine/summary`

> Example responses

> default Response

```json
{
  "repositoryCount": 0,
  "quarantineEnabledRepositoryCount": 0,
  "quarantineEnabled": true,
  "totalComponentCount": 0,
  "quarantinedComponentCount": 0
}
```

<h3 id="getquarantinesummary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiFirewallQuarantineSummaryDTO](#schemaapifirewallquarantinesummarydto)|

<aside class="success">
This operation does not require authentication
</aside>

## getQuarantinedComponentViewAnonymousAccess

<a id="opIdgetQuarantinedComponentViewAnonymousAccess"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/firewall/quarantinedComponentView/configuration/anonymousAccess \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/firewall/quarantinedComponentView/configuration/anonymousAccess");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/firewall/quarantinedComponentView/configuration/anonymousAccess', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/firewall/quarantinedComponentView/configuration/anonymousAccess',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/firewall/quarantinedComponentView/configuration/anonymousAccess`

> Example responses

<h3 id="getquarantinedcomponentviewanonymousaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="getquarantinedcomponentviewanonymousaccess-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getRepositoryContainer

<a id="opIdgetRepositoryContainer"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/firewall/repositoryContainer \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/firewall/repositoryContainer");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/firewall/repositoryContainer', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/firewall/repositoryContainer',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/firewall/repositoryContainer`

> Example responses

> default Response

```json
{
  "id": "string",
  "name": "string"
}
```

<h3 id="getrepositorycontainer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiRepositoryContainerDTO](#schemaapirepositorycontainerdto)|

<aside class="success">
This operation does not require authentication
</aside>

## getUnquarantineList

<a id="opIdgetUnquarantineList"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/firewall/components/autoReleasedFromQuarantine \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/firewall/components/autoReleasedFromQuarantine");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/firewall/components/autoReleasedFromQuarantine', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/firewall/components/autoReleasedFromQuarantine',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/firewall/components/autoReleasedFromQuarantine`

<h3 id="getunquarantinelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|pageSize|query|integer(int32)|false|none|
|policyId|query|string|false|none|
|componentName|query|string|false|none|
|sortBy|query|string|false|none|
|asc|query|boolean|false|none|

> Example responses

<h3 id="getunquarantinelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="getunquarantinelist-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## setQuarantinedComponentViewAnonymousAccess

<a id="opIdsetQuarantinedComponentViewAnonymousAccess"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/firewall/quarantinedComponentView/configuration/anonymousAccess/{enabled} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/firewall/quarantinedComponentView/configuration/anonymousAccess/{enabled}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.put('/api/v2/firewall/quarantinedComponentView/configuration/anonymousAccess/{enabled}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/firewall/quarantinedComponentView/configuration/anonymousAccess/{enabled}',
{
  method: 'PUT',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/firewall/quarantinedComponentView/configuration/anonymousAccess/{enabled}`

<h3 id="setquarantinedcomponentviewanonymousaccess-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enabled|path|boolean|true|none|

> Example responses

<h3 id="setquarantinedcomponentviewanonymousaccess-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="setquarantinedcomponentviewanonymousaccess-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-labels">Labels</h1>

## getLabels

<a id="opIdgetLabels"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/labels/{ownerType}/{ownerId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/labels/{ownerType}/{ownerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/labels/{ownerType}/{ownerId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/labels/{ownerType}/{ownerId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/labels/{ownerType}/{ownerId}`

<h3 id="getlabels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|ownerId|path|string|true|none|
|inherit|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
[
  {
    "id": "string",
    "label": "string",
    "description": "string",
    "color": "string",
    "ownerId": "string",
    "ownerType": "string"
  }
]
```

<h3 id="getlabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|Inline|

<h3 id="getlabels-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiLabelDTO](#schemaapilabeldto)]|false|none|none|
|» id|string|false|none|none|
|» label|string|false|none|none|
|» description|string|false|none|none|
|» color|string|false|none|none|
|» ownerId|string|false|none|none|
|» ownerType|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## updateLabel

<a id="opIdupdateLabel"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/labels/{ownerType}/{ownerId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/labels/{ownerType}/{ownerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('/api/v2/labels/{ownerType}/{ownerId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "id": "string",
  "label": "string",
  "description": "string",
  "color": "string",
  "ownerId": "string",
  "ownerType": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/labels/{ownerType}/{ownerId}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/labels/{ownerType}/{ownerId}`

> Body parameter

```json
{
  "id": "string",
  "label": "string",
  "description": "string",
  "color": "string",
  "ownerId": "string",
  "ownerType": "string"
}
```

<h3 id="updatelabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|ownerId|path|string|true|none|
|body|body|[ApiLabelDTO](#schemaapilabeldto)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "id": "string",
  "label": "string",
  "description": "string",
  "color": "string",
  "ownerId": "string",
  "ownerType": "string"
}
```

<h3 id="updatelabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiLabelDTO](#schemaapilabeldto)|

<aside class="success">
This operation does not require authentication
</aside>

## addLabel

<a id="opIdaddLabel"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/labels/{ownerType}/{ownerId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/labels/{ownerType}/{ownerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/labels/{ownerType}/{ownerId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "id": "string",
  "label": "string",
  "description": "string",
  "color": "string",
  "ownerId": "string",
  "ownerType": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/labels/{ownerType}/{ownerId}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/labels/{ownerType}/{ownerId}`

> Body parameter

```json
{
  "id": "string",
  "label": "string",
  "description": "string",
  "color": "string",
  "ownerId": "string",
  "ownerType": "string"
}
```

<h3 id="addlabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|ownerId|path|string|true|none|
|body|body|[ApiLabelDTO](#schemaapilabeldto)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "id": "string",
  "label": "string",
  "description": "string",
  "color": "string",
  "ownerId": "string",
  "ownerType": "string"
}
```

<h3 id="addlabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiLabelDTO](#schemaapilabeldto)|

<aside class="success">
This operation does not require authentication
</aside>

## deleteLabel

<a id="opIddeleteLabel"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/labels/{ownerType}/{ownerId}/{labelId} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/labels/{ownerType}/{ownerId}/{labelId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/labels/{ownerType}/{ownerId}/{labelId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/labels/{ownerType}/{ownerId}/{labelId}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/labels/{ownerType}/{ownerId}/{labelId}`

<h3 id="deletelabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|ownerId|path|string|true|none|
|labelId|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

<h3 id="deletelabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deletelabel-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getApplicableContexts

<a id="opIdgetApplicableContexts"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/labels/{ownerType}/{ownerId}/applicable/context/{labelId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/labels/{ownerType}/{ownerId}/applicable/context/{labelId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/labels/{ownerType}/{ownerId}/applicable/context/{labelId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/labels/{ownerType}/{ownerId}/applicable/context/{labelId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/labels/{ownerType}/{ownerId}/applicable/context/{labelId}`

<h3 id="getapplicablecontexts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|ownerId|path|string|true|none|
|labelId|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "id": "string",
  "name": "string",
  "type": "application",
  "children": [
    {
      "id": "string",
      "name": "string",
      "type": "application",
      "children": []
    }
  ]
}
```

<h3 id="getapplicablecontexts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApplicableContext](#schemaapplicablecontext)|

<aside class="success">
This operation does not require authentication
</aside>

## getApplicableLabels

<a id="opIdgetApplicableLabels"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/labels/{ownerType}/{ownerId}/applicable \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/labels/{ownerType}/{ownerId}/applicable");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/labels/{ownerType}/{ownerId}/applicable', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/labels/{ownerType}/{ownerId}/applicable',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/labels/{ownerType}/{ownerId}/applicable`

<h3 id="getapplicablelabels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|ownerId|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "labelsByOwner": [
    {
      "ownerId": "string",
      "ownerName": "string",
      "ownerType": "application",
      "labels": [
        {
          "id": "string",
          "label": "string",
          "description": "string",
          "color": "string",
          "ownerId": "string",
          "ownerType": "string"
        }
      ]
    }
  ]
}
```

<h3 id="getapplicablelabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApplicableLabels](#schemaapplicablelabels)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-license-legal-metadata">License Legal Metadata</h1>

## getAttributionReportTemplateById

<a id="opIdgetAttributionReportTemplateById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/licenseLegalMetadata/report-template/{id} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/licenseLegalMetadata/report-template/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/licenseLegalMetadata/report-template/{id}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/licenseLegalMetadata/report-template/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/licenseLegalMetadata/report-template/{id}`

<h3 id="getattributionreporttemplatebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> default Response

```json
{
  "id": "string",
  "templateName": "string",
  "documentTitle": "string",
  "header": "string",
  "footer": "string",
  "includeTableOfContents": true,
  "includeAppendix": true,
  "includeStandardLicenseTexts": true,
  "includeSonatypeSpecialLicenses": true,
  "lastUpdatedAt": "2019-08-24T14:15:22Z",
  "includeInnerSource": true
}
```

<h3 id="getattributionreporttemplatebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[AttributionReportTemplateDTO](#schemaattributionreporttemplatedto)|

<aside class="success">
This operation does not require authentication
</aside>

## deleteAttributionReportTemplate

<a id="opIddeleteAttributionReportTemplate"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/licenseLegalMetadata/report-template/{id} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/licenseLegalMetadata/report-template/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/licenseLegalMetadata/report-template/{id}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/licenseLegalMetadata/report-template/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/licenseLegalMetadata/report-template/{id}`

<h3 id="deleteattributionreporttemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

<h3 id="deleteattributionreporttemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deleteattributionreporttemplate-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getAllAttributionReportTemplates

<a id="opIdgetAllAttributionReportTemplates"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/licenseLegalMetadata/report-template \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/licenseLegalMetadata/report-template");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/licenseLegalMetadata/report-template', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/licenseLegalMetadata/report-template',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/licenseLegalMetadata/report-template`

> Example responses

> default Response

```json
[
  {
    "id": "string",
    "templateName": "string",
    "documentTitle": "string",
    "header": "string",
    "footer": "string",
    "includeTableOfContents": true,
    "includeAppendix": true,
    "includeStandardLicenseTexts": true,
    "includeSonatypeSpecialLicenses": true,
    "lastUpdatedAt": "2019-08-24T14:15:22Z",
    "includeInnerSource": true
  }
]
```

<h3 id="getallattributionreporttemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|Inline|

<h3 id="getallattributionreporttemplates-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AttributionReportTemplateDTO](#schemaattributionreporttemplatedto)]|false|none|none|
|» id|string|false|none|none|
|» templateName|string|false|none|none|
|» documentTitle|string|false|none|none|
|» header|string|false|none|none|
|» footer|string|false|none|none|
|» includeTableOfContents|boolean|false|none|none|
|» includeAppendix|boolean|false|none|none|
|» includeStandardLicenseTexts|boolean|false|none|none|
|» includeSonatypeSpecialLicenses|boolean|false|none|none|
|» lastUpdatedAt|string(date-time)|false|none|none|
|» includeInnerSource|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## saveAttributionReportTemplate

<a id="opIdsaveAttributionReportTemplate"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/licenseLegalMetadata/report-template \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/licenseLegalMetadata/report-template");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/licenseLegalMetadata/report-template', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "id": "string",
  "templateName": "string",
  "documentTitle": "string",
  "header": "string",
  "footer": "string",
  "includeTableOfContents": true,
  "includeAppendix": true,
  "includeStandardLicenseTexts": true,
  "includeSonatypeSpecialLicenses": true,
  "lastUpdatedAt": "2019-08-24T14:15:22Z",
  "includeInnerSource": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/licenseLegalMetadata/report-template',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/licenseLegalMetadata/report-template`

> Body parameter

```json
{
  "id": "string",
  "templateName": "string",
  "documentTitle": "string",
  "header": "string",
  "footer": "string",
  "includeTableOfContents": true,
  "includeAppendix": true,
  "includeStandardLicenseTexts": true,
  "includeSonatypeSpecialLicenses": true,
  "lastUpdatedAt": "2019-08-24T14:15:22Z",
  "includeInnerSource": true
}
```

<h3 id="saveattributionreporttemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AttributionReportTemplateDTO](#schemaattributionreporttemplatedto)|false|none|

> Example responses

> default Response

```json
{
  "id": "string",
  "templateName": "string",
  "documentTitle": "string",
  "header": "string",
  "footer": "string",
  "includeTableOfContents": true,
  "includeAppendix": true,
  "includeStandardLicenseTexts": true,
  "includeSonatypeSpecialLicenses": true,
  "lastUpdatedAt": "2019-08-24T14:15:22Z",
  "includeInnerSource": true
}
```

<h3 id="saveattributionreporttemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[AttributionReportTemplateDTO](#schemaattributionreporttemplatedto)|

<aside class="success">
This operation does not require authentication
</aside>

## getLicenseLegalApplicationHTMLReport

<a id="opIdgetLicenseLegalApplicationHTMLReport"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}/report \
  -H 'Accept: text/html'

```

```java
URL obj = new URL("/api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}/report");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'text/html'
}

r = requests.get('/api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}/report', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'text/html'
};

fetch('/api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}/report',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}/report`

<h3 id="getlicenselegalapplicationhtmlreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|none|
|stageId|path|string|true|none|

> Example responses

> default Response

```
"string"
```

<h3 id="getlicenselegalapplicationhtmlreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|string|

<aside class="success">
This operation does not require authentication
</aside>

## getLicenseLegalCustomApplicationHTMLReport

<a id="opIdgetLicenseLegalCustomApplicationHTMLReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}/report \
  -H 'Content-Type: */*' \
  -H 'Accept: text/html'

```

```java
URL obj = new URL("/api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}/report");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': '*/*',
  'Accept': 'text/html'
}

r = requests.post('/api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}/report', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "contentDisposition": {
    "type": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "fileName": "string",
    "creationDate": "2019-08-24T14:15:22Z",
    "modificationDate": "2019-08-24T14:15:22Z",
    "readDate": "2019-08-24T14:15:22Z",
    "size": 0
  },
  "entity": {},
  "headers": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "mediaType": {
    "type": "string",
    "subtype": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "wildcardType": true,
    "wildcardSubtype": true
  },
  "messageBodyWorkers": {},
  "parent": {
    "contentDisposition": {
      "type": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "fileName": "string",
      "creationDate": "2019-08-24T14:15:22Z",
      "modificationDate": "2019-08-24T14:15:22Z",
      "readDate": "2019-08-24T14:15:22Z",
      "size": 0
    },
    "entity": {},
    "headers": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "mediaType": {
      "type": "string",
      "subtype": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "wildcardType": true,
      "wildcardSubtype": true
    },
    "messageBodyWorkers": {},
    "parent": {},
    "providers": {},
    "bodyParts": [
      {
        "contentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0
        },
        "entity": {},
        "headers": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "type": "string",
          "subtype": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "wildcardType": true,
          "wildcardSubtype": true
        },
        "messageBodyWorkers": {},
        "parent": {},
        "providers": {},
        "parameterizedHeaders": {
          "property1": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "property2": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ]
        }
      }
    ],
    "parameterizedHeaders": {
      "property1": [
        {
          "value": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "property2": [
        {
          "value": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      ]
    }
  },
  "providers": {},
  "bodyParts": [
    {
      "contentDisposition": {
        "type": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "fileName": "string",
        "creationDate": "2019-08-24T14:15:22Z",
        "modificationDate": "2019-08-24T14:15:22Z",
        "readDate": "2019-08-24T14:15:22Z",
        "size": 0
      },
      "entity": {},
      "headers": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "mediaType": {
        "type": "string",
        "subtype": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "wildcardType": true,
        "wildcardSubtype": true
      },
      "messageBodyWorkers": {},
      "parent": {
        "contentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0
        },
        "entity": {},
        "headers": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "type": "string",
          "subtype": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "wildcardType": true,
          "wildcardSubtype": true
        },
        "messageBodyWorkers": {},
        "parent": {},
        "providers": {},
        "bodyParts": [
          {}
        ],
        "parameterizedHeaders": {
          "property1": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "property2": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ]
        }
      },
      "providers": {},
      "parameterizedHeaders": {
        "property1": [
          {
            "value": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "property2": [
          {
            "value": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            }
          }
        ]
      }
    }
  ],
  "fields": {
    "property1": [
      {
        "contentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0
        },
        "entity": {},
        "headers": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "type": "string",
          "subtype": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "wildcardType": true,
          "wildcardSubtype": true
        },
        "messageBodyWorkers": {},
        "parent": {
          "contentDisposition": {
            "type": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "fileName": "string",
            "creationDate": "2019-08-24T14:15:22Z",
            "modificationDate": "2019-08-24T14:15:22Z",
            "readDate": "2019-08-24T14:15:22Z",
            "size": 0
          },
          "entity": {},
          "headers": {
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "mediaType": {
            "type": "string",
            "subtype": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "wildcardType": true,
            "wildcardSubtype": true
          },
          "messageBodyWorkers": {},
          "parent": {},
          "providers": {},
          "bodyParts": [
            {
              "contentDisposition": {
                "type": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                },
                "fileName": "string",
                "creationDate": "2019-08-24T14:15:22Z",
                "modificationDate": "2019-08-24T14:15:22Z",
                "readDate": "2019-08-24T14:15:22Z",
                "size": 0
              },
              "entity": {},
              "headers": {
                "property1": [
                  "string"
                ],
                "property2": [
                  "string"
                ]
              },
              "mediaType": {
                "type": "string",
                "subtype": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                },
                "wildcardType": true,
                "wildcardSubtype": true
              },
              "messageBodyWorkers": {},
              "parent": {},
              "providers": {},
              "parameterizedHeaders": {
                "property1": [
                  {
                    "value": "string",
                    "parameters": {}
                  }
                ],
                "property2": [
                  {
                    "value": "string",
                    "parameters": {}
                  }
                ]
              }
            }
          ],
          "parameterizedHeaders": {
            "property1": [
              {
                "value": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "property2": [
              {
                "value": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ]
          }
        },
        "providers": {},
        "simple": true,
        "name": "string",
        "value": "string",
        "formDataContentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0,
          "name": "string"
        },
        "parameterizedHeaders": {
          "property1": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "property2": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ]
        }
      }
    ],
    "property2": [
      {
        "contentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0
        },
        "entity": {},
        "headers": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "type": "string",
          "subtype": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "wildcardType": true,
          "wildcardSubtype": true
        },
        "messageBodyWorkers": {},
        "parent": {
          "contentDisposition": {
            "type": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "fileName": "string",
            "creationDate": "2019-08-24T14:15:22Z",
            "modificationDate": "2019-08-24T14:15:22Z",
            "readDate": "2019-08-24T14:15:22Z",
            "size": 0
          },
          "entity": {},
          "headers": {
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "mediaType": {
            "type": "string",
            "subtype": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "wildcardType": true,
            "wildcardSubtype": true
          },
          "messageBodyWorkers": {},
          "parent": {},
          "providers": {},
          "bodyParts": [
            {
              "contentDisposition": {
                "type": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                },
                "fileName": "string",
                "creationDate": "2019-08-24T14:15:22Z",
                "modificationDate": "2019-08-24T14:15:22Z",
                "readDate": "2019-08-24T14:15:22Z",
                "size": 0
              },
              "entity": {},
              "headers": {
                "property1": [
                  "string"
                ],
                "property2": [
                  "string"
                ]
              },
              "mediaType": {
                "type": "string",
                "subtype": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                },
                "wildcardType": true,
                "wildcardSubtype": true
              },
              "messageBodyWorkers": {},
              "parent": {},
              "providers": {},
              "parameterizedHeaders": {
                "property1": [
                  {
                    "value": "string",
                    "parameters": {}
                  }
                ],
                "property2": [
                  {
                    "value": "string",
                    "parameters": {}
                  }
                ]
              }
            }
          ],
          "parameterizedHeaders": {
            "property1": [
              {
                "value": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "property2": [
              {
                "value": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ]
          }
        },
        "providers": {},
        "simple": true,
        "name": "string",
        "value": "string",
        "formDataContentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0,
          "name": "string"
        },
        "parameterizedHeaders": {
          "property1": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "property2": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ]
        }
      }
    ]
  },
  "parameterizedHeaders": {
    "property1": [
      {
        "value": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "property2": [
      {
        "value": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  }
}';
const headers = {
  'Content-Type':'*/*',
  'Accept':'text/html'
};

fetch('/api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}/report',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}/report`

> Body parameter

<h3 id="getlicenselegalcustomapplicationhtmlreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|none|
|stageId|path|string|true|none|
|body|body|[FormDataMultiPart](#schemaformdatamultipart)|false|none|

> Example responses

> default Response

```
"string"
```

<h3 id="getlicenselegalcustomapplicationhtmlreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|string|

<aside class="success">
This operation does not require authentication
</aside>

## getLicenseLegalApplicationReport

<a id="opIdgetLicenseLegalApplicationReport"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/licenseLegalMetadata/application/{applicationId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/licenseLegalMetadata/application/{applicationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/licenseLegalMetadata/application/{applicationId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/licenseLegalMetadata/application/{applicationId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/licenseLegalMetadata/application/{applicationId}`

<h3 id="getlicenselegalapplicationreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|none|

> Example responses

> default Response

```json
{
  "components": [
    {
      "packageUrl": "string",
      "hash": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "licenseLegalData": {
        "declaredLicenses": [
          "string"
        ],
        "observedLicenses": [
          "string"
        ],
        "effectiveLicenses": [
          "string"
        ],
        "highestEffectiveLicenseThreatGroup": {
          "licenseThreatGroupName": "string",
          "licenseThreatGroupLevel": 0,
          "licenseThreatGroupCategory": "string"
        },
        "copyrights": [
          {
            "id": "string",
            "content": "string",
            "originalContentHash": "string",
            "status": "enabled"
          }
        ],
        "licenseFiles": [
          {
            "id": "string",
            "relPath": "string",
            "content": "string",
            "originalContentHash": "string",
            "status": "enabled"
          }
        ],
        "noticeFiles": [
          {
            "id": "string",
            "relPath": "string",
            "content": "string",
            "originalContentHash": "string",
            "status": "enabled"
          }
        ],
        "obligations": [
          {
            "id": "string",
            "name": "string",
            "status": "OPEN",
            "comment": "string",
            "componentIdentifier": {
              "format": "string",
              "coordinates": {
                "property1": "string",
                "property2": "string"
              }
            },
            "packageUrl": "string",
            "ownerId": "string",
            "lastUpdatedAt": "2019-08-24T14:15:22Z",
            "lastUpdatedByUsername": "string"
          }
        ],
        "attributions": [
          {
            "id": "string",
            "componentIdentifier": {
              "format": "string",
              "coordinates": {
                "property1": "string",
                "property2": "string"
              }
            },
            "packageUrl": "string",
            "ownerId": "string",
            "obligationName": "string",
            "content": "string",
            "lastUpdatedAt": "2019-08-24T14:15:22Z",
            "lastUpdatedByUsername": "string"
          }
        ],
        "sourceLinks": [
          {
            "id": "string",
            "content": "string",
            "originalContent": "string",
            "status": "enabled"
          }
        ],
        "effectiveLicenseStatus": "string",
        "componentCopyrightId": "string",
        "componentCopyrightScopeOwnerId": "string",
        "componentCopyrightLastUpdatedByUsername": "string",
        "componentCopyrightLastUpdatedAt": "2019-08-24T14:15:22Z",
        "componentLicensesId": "string",
        "componentLicensesScopeOwnerId": "string",
        "componentLicensesLastUpdatedByUsername": "string",
        "componentLicensesLastUpdatedAt": "2019-08-24T14:15:22Z",
        "componentNoticesId": "string",
        "componentNoticesScopeOwnerId": "string",
        "componentNoticesLastUpdatedByUsername": "string",
        "componentNoticesLastUpdatedAt": "2019-08-24T14:15:22Z"
      },
      "stageScans": [
        {
          "stageName": "string",
          "scanId": "string",
          "scanDate": "2019-08-24T14:15:22Z"
        }
      ]
    }
  ],
  "licenseLegalMetadata": [
    {
      "licenseId": "string",
      "licenseName": "string",
      "licenseText": "string",
      "obligations": [
        {
          "name": "string",
          "obligationTexts": [
            "string"
          ]
        }
      ],
      "threatGroup": {
        "name": "string",
        "threatLevel": 0
      },
      "isMulti": true,
      "singleLicenseIds": [
        "string"
      ]
    }
  ]
}
```

<h3 id="getlicenselegalapplicationreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiLicenseLegalApplicationReportDTO](#schemaapilicenselegalapplicationreportdto)|

<aside class="success">
This operation does not require authentication
</aside>

## getLicenseLegalApplicationReport_1

<a id="opIdgetLicenseLegalApplicationReport_1"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}`

<h3 id="getlicenselegalapplicationreport_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|none|
|stageId|path|string|true|none|

> Example responses

> default Response

```json
{
  "components": [
    {
      "packageUrl": "string",
      "hash": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "licenseLegalData": {
        "declaredLicenses": [
          "string"
        ],
        "observedLicenses": [
          "string"
        ],
        "effectiveLicenses": [
          "string"
        ],
        "highestEffectiveLicenseThreatGroup": {
          "licenseThreatGroupName": "string",
          "licenseThreatGroupLevel": 0,
          "licenseThreatGroupCategory": "string"
        },
        "copyrights": [
          {
            "id": "string",
            "content": "string",
            "originalContentHash": "string",
            "status": "enabled"
          }
        ],
        "licenseFiles": [
          {
            "id": "string",
            "relPath": "string",
            "content": "string",
            "originalContentHash": "string",
            "status": "enabled"
          }
        ],
        "noticeFiles": [
          {
            "id": "string",
            "relPath": "string",
            "content": "string",
            "originalContentHash": "string",
            "status": "enabled"
          }
        ],
        "obligations": [
          {
            "id": "string",
            "name": "string",
            "status": "OPEN",
            "comment": "string",
            "componentIdentifier": {
              "format": "string",
              "coordinates": {
                "property1": "string",
                "property2": "string"
              }
            },
            "packageUrl": "string",
            "ownerId": "string",
            "lastUpdatedAt": "2019-08-24T14:15:22Z",
            "lastUpdatedByUsername": "string"
          }
        ],
        "attributions": [
          {
            "id": "string",
            "componentIdentifier": {
              "format": "string",
              "coordinates": {
                "property1": "string",
                "property2": "string"
              }
            },
            "packageUrl": "string",
            "ownerId": "string",
            "obligationName": "string",
            "content": "string",
            "lastUpdatedAt": "2019-08-24T14:15:22Z",
            "lastUpdatedByUsername": "string"
          }
        ],
        "sourceLinks": [
          {
            "id": "string",
            "content": "string",
            "originalContent": "string",
            "status": "enabled"
          }
        ],
        "effectiveLicenseStatus": "string",
        "componentCopyrightId": "string",
        "componentCopyrightScopeOwnerId": "string",
        "componentCopyrightLastUpdatedByUsername": "string",
        "componentCopyrightLastUpdatedAt": "2019-08-24T14:15:22Z",
        "componentLicensesId": "string",
        "componentLicensesScopeOwnerId": "string",
        "componentLicensesLastUpdatedByUsername": "string",
        "componentLicensesLastUpdatedAt": "2019-08-24T14:15:22Z",
        "componentNoticesId": "string",
        "componentNoticesScopeOwnerId": "string",
        "componentNoticesLastUpdatedByUsername": "string",
        "componentNoticesLastUpdatedAt": "2019-08-24T14:15:22Z"
      },
      "stageScans": [
        {
          "stageName": "string",
          "scanId": "string",
          "scanDate": "2019-08-24T14:15:22Z"
        }
      ]
    }
  ],
  "licenseLegalMetadata": [
    {
      "licenseId": "string",
      "licenseName": "string",
      "licenseText": "string",
      "obligations": [
        {
          "name": "string",
          "obligationTexts": [
            "string"
          ]
        }
      ],
      "threatGroup": {
        "name": "string",
        "threatLevel": 0
      },
      "isMulti": true,
      "singleLicenseIds": [
        "string"
      ]
    }
  ]
}
```

<h3 id="getlicenselegalapplicationreport_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiLicenseLegalApplicationReportDTO](#schemaapilicenselegalapplicationreportdto)|

<aside class="success">
This operation does not require authentication
</aside>

## getLicenseLegalComponentReport

<a id="opIdgetLicenseLegalComponentReport"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/licenseLegalMetadata/{ownerType}/{ownerId}/component \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/licenseLegalMetadata/{ownerType}/{ownerId}/component");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/licenseLegalMetadata/{ownerType}/{ownerId}/component', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/licenseLegalMetadata/{ownerType}/{ownerId}/component',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/licenseLegalMetadata/{ownerType}/{ownerId}/component`

<h3 id="getlicenselegalcomponentreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|ownerId|path|string|true|none|
|componentIdentifier|query|[ComponentIdentifier](#schemacomponentidentifier)|false|none|
|packageUrl|query|string|false|none|
|hash|query|string|false|none|
|identificationSource|query|string|false|none|
|scanId|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "component": {
    "packageUrl": "string",
    "hash": "string",
    "componentIdentifier": {
      "format": "string",
      "coordinates": {
        "property1": "string",
        "property2": "string"
      }
    },
    "displayName": "string",
    "licenseLegalData": {
      "declaredLicenses": [
        "string"
      ],
      "observedLicenses": [
        "string"
      ],
      "effectiveLicenses": [
        "string"
      ],
      "highestEffectiveLicenseThreatGroup": {
        "licenseThreatGroupName": "string",
        "licenseThreatGroupLevel": 0,
        "licenseThreatGroupCategory": "string"
      },
      "copyrights": [
        {
          "id": "string",
          "content": "string",
          "originalContentHash": "string",
          "status": "enabled"
        }
      ],
      "licenseFiles": [
        {
          "id": "string",
          "relPath": "string",
          "content": "string",
          "originalContentHash": "string",
          "status": "enabled"
        }
      ],
      "noticeFiles": [
        {
          "id": "string",
          "relPath": "string",
          "content": "string",
          "originalContentHash": "string",
          "status": "enabled"
        }
      ],
      "obligations": [
        {
          "id": "string",
          "name": "string",
          "status": "OPEN",
          "comment": "string",
          "componentIdentifier": {
            "format": "string",
            "coordinates": {
              "property1": "string",
              "property2": "string"
            }
          },
          "packageUrl": "string",
          "ownerId": "string",
          "lastUpdatedAt": "2019-08-24T14:15:22Z",
          "lastUpdatedByUsername": "string"
        }
      ],
      "attributions": [
        {
          "id": "string",
          "componentIdentifier": {
            "format": "string",
            "coordinates": {
              "property1": "string",
              "property2": "string"
            }
          },
          "packageUrl": "string",
          "ownerId": "string",
          "obligationName": "string",
          "content": "string",
          "lastUpdatedAt": "2019-08-24T14:15:22Z",
          "lastUpdatedByUsername": "string"
        }
      ],
      "sourceLinks": [
        {
          "id": "string",
          "content": "string",
          "originalContent": "string",
          "status": "enabled"
        }
      ],
      "effectiveLicenseStatus": "string",
      "componentCopyrightId": "string",
      "componentCopyrightScopeOwnerId": "string",
      "componentCopyrightLastUpdatedByUsername": "string",
      "componentCopyrightLastUpdatedAt": "2019-08-24T14:15:22Z",
      "componentLicensesId": "string",
      "componentLicensesScopeOwnerId": "string",
      "componentLicensesLastUpdatedByUsername": "string",
      "componentLicensesLastUpdatedAt": "2019-08-24T14:15:22Z",
      "componentNoticesId": "string",
      "componentNoticesScopeOwnerId": "string",
      "componentNoticesLastUpdatedByUsername": "string",
      "componentNoticesLastUpdatedAt": "2019-08-24T14:15:22Z"
    },
    "stageScans": [
      {
        "stageName": "string",
        "scanId": "string",
        "scanDate": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "licenseLegalMetadata": [
    {
      "licenseId": "string",
      "licenseName": "string",
      "licenseText": "string",
      "obligations": [
        {
          "name": "string",
          "obligationTexts": [
            "string"
          ]
        }
      ],
      "threatGroup": {
        "name": "string",
        "threatLevel": 0
      },
      "isMulti": true,
      "singleLicenseIds": [
        "string"
      ]
    }
  ]
}
```

<h3 id="getlicenselegalcomponentreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiLicenseLegalComponentReportDTO](#schemaapilicenselegalcomponentreportdto)|

<aside class="success">
This operation does not require authentication
</aside>

## getLicenseLegalCustomApplicationHTMLReport_1

<a id="opIdgetLicenseLegalCustomApplicationHTMLReport_1"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}/report/templateId/{templateId} \
  -H 'Accept: text/html'

```

```java
URL obj = new URL("/api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}/report/templateId/{templateId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'text/html'
}

r = requests.post('/api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}/report/templateId/{templateId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'text/html'
};

fetch('/api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}/report/templateId/{templateId}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/licenseLegalMetadata/application/{applicationId}/stage/{stageId}/report/templateId/{templateId}`

<h3 id="getlicenselegalcustomapplicationhtmlreport_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|none|
|stageId|path|string|true|none|
|templateId|path|string|true|none|

> Example responses

> default Response

```
"string"
```

<h3 id="getlicenselegalcustomapplicationhtmlreport_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|string|

<aside class="success">
This operation does not require authentication
</aside>

## getLicenseLegalCustomMultiApplicationHTMLReport

<a id="opIdgetLicenseLegalCustomMultiApplicationHTMLReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/licenseLegalMetadata/customMultiApplication/report \
  -H 'Content-Type: multipart/form-data' \
  -H 'Accept: text/html'

```

```java
URL obj = new URL("/api/v2/licenseLegalMetadata/customMultiApplication/report");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'multipart/form-data',
  'Accept': 'text/html'
}

r = requests.post('/api/v2/licenseLegalMetadata/customMultiApplication/report', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "contentDisposition": {
    "type": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "fileName": "string",
    "creationDate": "2019-08-24T14:15:22Z",
    "modificationDate": "2019-08-24T14:15:22Z",
    "readDate": "2019-08-24T14:15:22Z",
    "size": 0
  },
  "entity": {},
  "headers": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "mediaType": {
    "type": "string",
    "subtype": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "wildcardType": true,
    "wildcardSubtype": true
  },
  "messageBodyWorkers": {},
  "parent": {
    "contentDisposition": {
      "type": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "fileName": "string",
      "creationDate": "2019-08-24T14:15:22Z",
      "modificationDate": "2019-08-24T14:15:22Z",
      "readDate": "2019-08-24T14:15:22Z",
      "size": 0
    },
    "entity": {},
    "headers": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "mediaType": {
      "type": "string",
      "subtype": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "wildcardType": true,
      "wildcardSubtype": true
    },
    "messageBodyWorkers": {},
    "parent": {},
    "providers": {},
    "bodyParts": [
      {
        "contentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0
        },
        "entity": {},
        "headers": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "type": "string",
          "subtype": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "wildcardType": true,
          "wildcardSubtype": true
        },
        "messageBodyWorkers": {},
        "parent": {},
        "providers": {},
        "parameterizedHeaders": {
          "property1": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "property2": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ]
        }
      }
    ],
    "parameterizedHeaders": {
      "property1": [
        {
          "value": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "property2": [
        {
          "value": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      ]
    }
  },
  "providers": {},
  "bodyParts": [
    {
      "contentDisposition": {
        "type": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "fileName": "string",
        "creationDate": "2019-08-24T14:15:22Z",
        "modificationDate": "2019-08-24T14:15:22Z",
        "readDate": "2019-08-24T14:15:22Z",
        "size": 0
      },
      "entity": {},
      "headers": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "mediaType": {
        "type": "string",
        "subtype": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "wildcardType": true,
        "wildcardSubtype": true
      },
      "messageBodyWorkers": {},
      "parent": {
        "contentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0
        },
        "entity": {},
        "headers": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "type": "string",
          "subtype": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "wildcardType": true,
          "wildcardSubtype": true
        },
        "messageBodyWorkers": {},
        "parent": {},
        "providers": {},
        "bodyParts": [
          {}
        ],
        "parameterizedHeaders": {
          "property1": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "property2": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ]
        }
      },
      "providers": {},
      "parameterizedHeaders": {
        "property1": [
          {
            "value": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "property2": [
          {
            "value": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            }
          }
        ]
      }
    }
  ],
  "fields": {
    "property1": [
      {
        "contentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0
        },
        "entity": {},
        "headers": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "type": "string",
          "subtype": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "wildcardType": true,
          "wildcardSubtype": true
        },
        "messageBodyWorkers": {},
        "parent": {
          "contentDisposition": {
            "type": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "fileName": "string",
            "creationDate": "2019-08-24T14:15:22Z",
            "modificationDate": "2019-08-24T14:15:22Z",
            "readDate": "2019-08-24T14:15:22Z",
            "size": 0
          },
          "entity": {},
          "headers": {
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "mediaType": {
            "type": "string",
            "subtype": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "wildcardType": true,
            "wildcardSubtype": true
          },
          "messageBodyWorkers": {},
          "parent": {},
          "providers": {},
          "bodyParts": [
            {
              "contentDisposition": {
                "type": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                },
                "fileName": "string",
                "creationDate": "2019-08-24T14:15:22Z",
                "modificationDate": "2019-08-24T14:15:22Z",
                "readDate": "2019-08-24T14:15:22Z",
                "size": 0
              },
              "entity": {},
              "headers": {
                "property1": [
                  "string"
                ],
                "property2": [
                  "string"
                ]
              },
              "mediaType": {
                "type": "string",
                "subtype": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                },
                "wildcardType": true,
                "wildcardSubtype": true
              },
              "messageBodyWorkers": {},
              "parent": {},
              "providers": {},
              "parameterizedHeaders": {
                "property1": [
                  {
                    "value": "string",
                    "parameters": {}
                  }
                ],
                "property2": [
                  {
                    "value": "string",
                    "parameters": {}
                  }
                ]
              }
            }
          ],
          "parameterizedHeaders": {
            "property1": [
              {
                "value": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "property2": [
              {
                "value": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ]
          }
        },
        "providers": {},
        "simple": true,
        "name": "string",
        "value": "string",
        "formDataContentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0,
          "name": "string"
        },
        "parameterizedHeaders": {
          "property1": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "property2": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ]
        }
      }
    ],
    "property2": [
      {
        "contentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0
        },
        "entity": {},
        "headers": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "type": "string",
          "subtype": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "wildcardType": true,
          "wildcardSubtype": true
        },
        "messageBodyWorkers": {},
        "parent": {
          "contentDisposition": {
            "type": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "fileName": "string",
            "creationDate": "2019-08-24T14:15:22Z",
            "modificationDate": "2019-08-24T14:15:22Z",
            "readDate": "2019-08-24T14:15:22Z",
            "size": 0
          },
          "entity": {},
          "headers": {
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "mediaType": {
            "type": "string",
            "subtype": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "wildcardType": true,
            "wildcardSubtype": true
          },
          "messageBodyWorkers": {},
          "parent": {},
          "providers": {},
          "bodyParts": [
            {
              "contentDisposition": {
                "type": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                },
                "fileName": "string",
                "creationDate": "2019-08-24T14:15:22Z",
                "modificationDate": "2019-08-24T14:15:22Z",
                "readDate": "2019-08-24T14:15:22Z",
                "size": 0
              },
              "entity": {},
              "headers": {
                "property1": [
                  "string"
                ],
                "property2": [
                  "string"
                ]
              },
              "mediaType": {
                "type": "string",
                "subtype": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                },
                "wildcardType": true,
                "wildcardSubtype": true
              },
              "messageBodyWorkers": {},
              "parent": {},
              "providers": {},
              "parameterizedHeaders": {
                "property1": [
                  {
                    "value": "string",
                    "parameters": {}
                  }
                ],
                "property2": [
                  {
                    "value": "string",
                    "parameters": {}
                  }
                ]
              }
            }
          ],
          "parameterizedHeaders": {
            "property1": [
              {
                "value": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "property2": [
              {
                "value": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ]
          }
        },
        "providers": {},
        "simple": true,
        "name": "string",
        "value": "string",
        "formDataContentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0,
          "name": "string"
        },
        "parameterizedHeaders": {
          "property1": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "property2": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ]
        }
      }
    ]
  },
  "parameterizedHeaders": {
    "property1": [
      {
        "value": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "property2": [
      {
        "value": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  }
}';
const headers = {
  'Content-Type':'multipart/form-data',
  'Accept':'text/html'
};

fetch('/api/v2/licenseLegalMetadata/customMultiApplication/report',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/licenseLegalMetadata/customMultiApplication/report`

> Body parameter

```yaml
contentDisposition:
  type: string
  parameters:
    property1: string
    property2: string
  fileName: string
  creationDate: 2019-08-24T14:15:22Z
  modificationDate: 2019-08-24T14:15:22Z
  readDate: 2019-08-24T14:15:22Z
  size: 0
entity: {}
headers:
  property1:
    - string
  property2:
    - string
mediaType:
  type: string
  subtype: string
  parameters:
    property1: string
    property2: string
  wildcardType: true
  wildcardSubtype: true
messageBodyWorkers: {}
parent:
  contentDisposition:
    type: string
    parameters:
      property1: string
      property2: string
    fileName: string
    creationDate: 2019-08-24T14:15:22Z
    modificationDate: 2019-08-24T14:15:22Z
    readDate: 2019-08-24T14:15:22Z
    size: 0
  entity: {}
  headers:
    property1:
      - string
    property2:
      - string
  mediaType:
    type: string
    subtype: string
    parameters:
      property1: string
      property2: string
    wildcardType: true
    wildcardSubtype: true
  messageBodyWorkers: {}
  parent: {}
  providers: {}
  bodyParts:
    - contentDisposition:
        type: string
        parameters:
          property1: string
          property2: string
        fileName: string
        creationDate: 2019-08-24T14:15:22Z
        modificationDate: 2019-08-24T14:15:22Z
        readDate: 2019-08-24T14:15:22Z
        size: 0
      entity: {}
      headers:
        property1:
          - string
        property2:
          - string
      mediaType:
        type: string
        subtype: string
        parameters:
          property1: string
          property2: string
        wildcardType: true
        wildcardSubtype: true
      messageBodyWorkers: {}
      parent: {}
      providers: {}
      parameterizedHeaders:
        property1:
          - value: string
            parameters:
              property1: string
              property2: string
        property2:
          - value: string
            parameters:
              property1: string
              property2: string
  parameterizedHeaders:
    property1:
      - value: string
        parameters:
          property1: string
          property2: string
    property2:
      - value: string
        parameters:
          property1: string
          property2: string
providers: {}
bodyParts:
  - contentDisposition:
      type: string
      parameters:
        property1: string
        property2: string
      fileName: string
      creationDate: 2019-08-24T14:15:22Z
      modificationDate: 2019-08-24T14:15:22Z
      readDate: 2019-08-24T14:15:22Z
      size: 0
    entity: {}
    headers:
      property1:
        - string
      property2:
        - string
    mediaType:
      type: string
      subtype: string
      parameters:
        property1: string
        property2: string
      wildcardType: true
      wildcardSubtype: true
    messageBodyWorkers: {}
    parent:
      contentDisposition:
        type: string
        parameters:
          property1: string
          property2: string
        fileName: string
        creationDate: 2019-08-24T14:15:22Z
        modificationDate: 2019-08-24T14:15:22Z
        readDate: 2019-08-24T14:15:22Z
        size: 0
      entity: {}
      headers:
        property1:
          - string
        property2:
          - string
      mediaType:
        type: string
        subtype: string
        parameters:
          property1: string
          property2: string
        wildcardType: true
        wildcardSubtype: true
      messageBodyWorkers: {}
      parent: {}
      providers: {}
      bodyParts:
        - {}
      parameterizedHeaders:
        property1:
          - value: string
            parameters:
              property1: string
              property2: string
        property2:
          - value: string
            parameters:
              property1: string
              property2: string
    providers: {}
    parameterizedHeaders:
      property1:
        - value: string
          parameters:
            property1: string
            property2: string
      property2:
        - value: string
          parameters:
            property1: string
            property2: string
fields:
  property1:
    - contentDisposition:
        type: string
        parameters:
          property1: string
          property2: string
        fileName: string
        creationDate: 2019-08-24T14:15:22Z
        modificationDate: 2019-08-24T14:15:22Z
        readDate: 2019-08-24T14:15:22Z
        size: 0
      entity: {}
      headers:
        property1:
          - string
        property2:
          - string
      mediaType:
        type: string
        subtype: string
        parameters:
          property1: string
          property2: string
        wildcardType: true
        wildcardSubtype: true
      messageBodyWorkers: {}
      parent:
        contentDisposition:
          type: string
          parameters:
            property1: string
            property2: string
          fileName: string
          creationDate: 2019-08-24T14:15:22Z
          modificationDate: 2019-08-24T14:15:22Z
          readDate: 2019-08-24T14:15:22Z
          size: 0
        entity: {}
        headers:
          property1:
            - string
          property2:
            - string
        mediaType:
          type: string
          subtype: string
          parameters:
            property1: string
            property2: string
          wildcardType: true
          wildcardSubtype: true
        messageBodyWorkers: {}
        parent: {}
        providers: {}
        bodyParts:
          - contentDisposition:
              type: string
              parameters:
                property1: string
                property2: string
              fileName: string
              creationDate: 2019-08-24T14:15:22Z
              modificationDate: 2019-08-24T14:15:22Z
              readDate: 2019-08-24T14:15:22Z
              size: 0
            entity: {}
            headers:
              property1:
                - string
              property2:
                - string
            mediaType:
              type: string
              subtype: string
              parameters:
                property1: string
                property2: string
              wildcardType: true
              wildcardSubtype: true
            messageBodyWorkers: {}
            parent: {}
            providers: {}
            parameterizedHeaders:
              property1:
                - value: string
                  parameters: {}
              property2:
                - value: string
                  parameters: {}
        parameterizedHeaders:
          property1:
            - value: string
              parameters:
                property1: string
                property2: string
          property2:
            - value: string
              parameters:
                property1: string
                property2: string
      providers: {}
      simple: true
      name: string
      value: string
      formDataContentDisposition:
        type: string
        parameters:
          property1: string
          property2: string
        fileName: string
        creationDate: 2019-08-24T14:15:22Z
        modificationDate: 2019-08-24T14:15:22Z
        readDate: 2019-08-24T14:15:22Z
        size: 0
        name: string
      parameterizedHeaders:
        property1:
          - value: string
            parameters:
              property1: string
              property2: string
        property2:
          - value: string
            parameters:
              property1: string
              property2: string
  property2:
    - contentDisposition:
        type: string
        parameters:
          property1: string
          property2: string
        fileName: string
        creationDate: 2019-08-24T14:15:22Z
        modificationDate: 2019-08-24T14:15:22Z
        readDate: 2019-08-24T14:15:22Z
        size: 0
      entity: {}
      headers:
        property1:
          - string
        property2:
          - string
      mediaType:
        type: string
        subtype: string
        parameters:
          property1: string
          property2: string
        wildcardType: true
        wildcardSubtype: true
      messageBodyWorkers: {}
      parent:
        contentDisposition:
          type: string
          parameters:
            property1: string
            property2: string
          fileName: string
          creationDate: 2019-08-24T14:15:22Z
          modificationDate: 2019-08-24T14:15:22Z
          readDate: 2019-08-24T14:15:22Z
          size: 0
        entity: {}
        headers:
          property1:
            - string
          property2:
            - string
        mediaType:
          type: string
          subtype: string
          parameters:
            property1: string
            property2: string
          wildcardType: true
          wildcardSubtype: true
        messageBodyWorkers: {}
        parent: {}
        providers: {}
        bodyParts:
          - contentDisposition:
              type: string
              parameters:
                property1: string
                property2: string
              fileName: string
              creationDate: 2019-08-24T14:15:22Z
              modificationDate: 2019-08-24T14:15:22Z
              readDate: 2019-08-24T14:15:22Z
              size: 0
            entity: {}
            headers:
              property1:
                - string
              property2:
                - string
            mediaType:
              type: string
              subtype: string
              parameters:
                property1: string
                property2: string
              wildcardType: true
              wildcardSubtype: true
            messageBodyWorkers: {}
            parent: {}
            providers: {}
            parameterizedHeaders:
              property1:
                - value: string
                  parameters: {}
              property2:
                - value: string
                  parameters: {}
        parameterizedHeaders:
          property1:
            - value: string
              parameters:
                property1: string
                property2: string
          property2:
            - value: string
              parameters:
                property1: string
                property2: string
      providers: {}
      simple: true
      name: string
      value: string
      formDataContentDisposition:
        type: string
        parameters:
          property1: string
          property2: string
        fileName: string
        creationDate: 2019-08-24T14:15:22Z
        modificationDate: 2019-08-24T14:15:22Z
        readDate: 2019-08-24T14:15:22Z
        size: 0
        name: string
      parameterizedHeaders:
        property1:
          - value: string
            parameters:
              property1: string
              property2: string
        property2:
          - value: string
            parameters:
              property1: string
              property2: string
parameterizedHeaders:
  property1:
    - value: string
      parameters:
        property1: string
        property2: string
  property2:
    - value: string
      parameters:
        property1: string
        property2: string

```

<h3 id="getlicenselegalcustommultiapplicationhtmlreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FormDataMultiPart](#schemaformdatamultipart)|false|none|

> Example responses

> default Response

```
"string"
```

<h3 id="getlicenselegalcustommultiapplicationhtmlreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|string|

<aside class="success">
This operation does not require authentication
</aside>

## getLicenseLegalCustomMultiApplicationHTMLReport_1

<a id="opIdgetLicenseLegalCustomMultiApplicationHTMLReport_1"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/licenseLegalMetadata/multiApplication/report/templateId/{templateId} \
  -H 'Accept: text/html'

```

```java
URL obj = new URL("/api/v2/licenseLegalMetadata/multiApplication/report/templateId/{templateId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'text/html'
}

r = requests.post('/api/v2/licenseLegalMetadata/multiApplication/report/templateId/{templateId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'text/html'
};

fetch('/api/v2/licenseLegalMetadata/multiApplication/report/templateId/{templateId}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/licenseLegalMetadata/multiApplication/report/templateId/{templateId}`

<h3 id="getlicenselegalcustommultiapplicationhtmlreport_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateId|path|string|true|none|

> Example responses

> default Response

```
"string"
```

<h3 id="getlicenselegalcustommultiapplicationhtmlreport_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|string|

<aside class="success">
This operation does not require authentication
</aside>

## getLicenseLegalMultiApplicationHTMLReport

<a id="opIdgetLicenseLegalMultiApplicationHTMLReport"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/licenseLegalMetadata/multiApplication/report \
  -H 'Accept: text/html'

```

```java
URL obj = new URL("/api/v2/licenseLegalMetadata/multiApplication/report");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'text/html'
}

r = requests.post('/api/v2/licenseLegalMetadata/multiApplication/report', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'text/html'
};

fetch('/api/v2/licenseLegalMetadata/multiApplication/report',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/licenseLegalMetadata/multiApplication/report`

> Example responses

> default Response

```
"string"
```

<h3 id="getlicenselegalmultiapplicationhtmlreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|string|

<aside class="success">
This operation does not require authentication
</aside>

## getLicenseLegalMultiApplicationReportFromActiveUserFilter

<a id="opIdgetLicenseLegalMultiApplicationReportFromActiveUserFilter"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/licenseLegalMetadata/multiApplication/activeUserFilter/report/templateId/{templateId} \
  -H 'Accept: text/html'

```

```java
URL obj = new URL("/api/v2/licenseLegalMetadata/multiApplication/activeUserFilter/report/templateId/{templateId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'text/html'
}

r = requests.post('/api/v2/licenseLegalMetadata/multiApplication/activeUserFilter/report/templateId/{templateId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'text/html'
};

fetch('/api/v2/licenseLegalMetadata/multiApplication/activeUserFilter/report/templateId/{templateId}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/licenseLegalMetadata/multiApplication/activeUserFilter/report/templateId/{templateId}`

<h3 id="getlicenselegalmultiapplicationreportfromactiveuserfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateId|path|string|true|none|

> Example responses

> default Response

```
"string"
```

<h3 id="getlicenselegalmultiapplicationreportfromactiveuserfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|string|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-organizations">Organizations</h1>

## getOrganizations

<a id="opIdgetOrganizations"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/organizations \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/organizations");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/organizations', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/organizations',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/organizations`

<h3 id="getorganizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationName|query|array[string]|false|none|

> Example responses

> default Response

```json
{
  "organizations": [
    {
      "id": "string",
      "name": "string",
      "parentOrganizationId": "string",
      "tags": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "color": "white"
        }
      ]
    }
  ]
}
```

<h3 id="getorganizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiOrganizationListDTO](#schemaapiorganizationlistdto)|

<aside class="success">
This operation does not require authentication
</aside>

## addOrganization

<a id="opIdaddOrganization"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/organizations \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/organizations");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/organizations', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "id": "string",
  "name": "string",
  "parentOrganizationId": "string",
  "tags": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "color": "white"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/organizations',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/organizations`

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "parentOrganizationId": "string",
  "tags": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "color": "white"
    }
  ]
}
```

<h3 id="addorganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiOrganizationDTO](#schemaapiorganizationdto)|false|none|

> Example responses

> default Response

```json
{
  "id": "string",
  "name": "string",
  "parentOrganizationId": "string",
  "tags": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "color": "white"
    }
  ]
}
```

<h3 id="addorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiOrganizationDTO](#schemaapiorganizationdto)|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganization

<a id="opIdgetOrganization"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/organizations/{organizationId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/organizations/{organizationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/organizations/{organizationId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/organizations/{organizationId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/organizations/{organizationId}`

<h3 id="getorganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

> default Response

```json
{
  "id": "string",
  "name": "string",
  "parentOrganizationId": "string",
  "tags": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "color": "white"
    }
  ]
}
```

<h3 id="getorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiOrganizationDTO](#schemaapiorganizationdto)|

<aside class="success">
This operation does not require authentication
</aside>

## deleteOrganization

<a id="opIddeleteOrganization"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/organizations/{organizationId} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/organizations/{organizationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/organizations/{organizationId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/organizations/{organizationId}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/organizations/{organizationId}`

<h3 id="deleteorganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|

> Example responses

<h3 id="deleteorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deleteorganization-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## moveOrganization

<a id="opIdmoveOrganization"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/organizations/{organizationId}/move/destination/{destinationId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/organizations/{organizationId}/move/destination/{destinationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.put('/api/v2/organizations/{organizationId}/move/destination/{destinationId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/organizations/{organizationId}/move/destination/{destinationId}',
{
  method: 'PUT',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/organizations/{organizationId}/move/destination/{destinationId}`

<h3 id="moveorganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string|true|none|
|destinationId|path|string|true|none|
|failEarlyOnError|query|boolean|false|none|

> Example responses

<h3 id="moveorganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="moveorganization-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-policies">Policies</h1>

## getPolicies

<a id="opIdgetPolicies"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/policies \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/policies");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/policies', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/policies',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/policies`

> Example responses

> default Response

```json
{
  "policies": [
    {
      "id": "string",
      "name": "string",
      "ownerId": "string",
      "ownerType": "APPLICATION",
      "threatLevel": 0,
      "policyType": "string"
    }
  ]
}
```

<h3 id="getpolicies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiPolicyListDTO](#schemaapipolicylistdto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-policy-violations">Policy Violations</h1>

## getApplicableWaivers

<a id="opIdgetApplicableWaivers"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/policyViolations/{violationId}/applicableWaivers \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/policyViolations/{violationId}/applicableWaivers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/policyViolations/{violationId}/applicableWaivers', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/policyViolations/{violationId}/applicableWaivers',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/policyViolations/{violationId}/applicableWaivers`

<h3 id="getapplicablewaivers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|violationId|path|string|true|none|

> Example responses

> default Response

```json
{
  "activeWaivers": [
    {
      "policyWaiverId": "string",
      "policyViolationId": "string",
      "comment": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "expiryTime": "2019-08-24T14:15:22Z",
      "isObsolete": true,
      "scopeOwnerType": "string",
      "scopeOwnerId": "string",
      "scopeOwnerName": "string",
      "hash": "string",
      "policyId": "string",
      "vulnerabilityId": "string",
      "policyName": "string",
      "constraintFacts": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "operatorName": "string",
          "conditionFacts": [
            {
              "conditionTypeId": "string",
              "conditionIndex": 0,
              "summary": "string",
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              },
              "triggerJson": "string"
            }
          ]
        }
      ],
      "constraintFactsJson": "string",
      "componentName": "string",
      "creatorId": "string",
      "creatorName": "string",
      "matcherStrategy": "DEFAULT",
      "associatedPackageUrl": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "threatLevel": 0,
      "componentUpgradeAvailable": true,
      "displayName": {
        "parts": [
          {
            "field": "string",
            "value": "string"
          }
        ],
        "name": "string"
      }
    }
  ],
  "expiredWaivers": [
    {
      "policyWaiverId": "string",
      "policyViolationId": "string",
      "comment": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "expiryTime": "2019-08-24T14:15:22Z",
      "isObsolete": true,
      "scopeOwnerType": "string",
      "scopeOwnerId": "string",
      "scopeOwnerName": "string",
      "hash": "string",
      "policyId": "string",
      "vulnerabilityId": "string",
      "policyName": "string",
      "constraintFacts": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "operatorName": "string",
          "conditionFacts": [
            {
              "conditionTypeId": "string",
              "conditionIndex": 0,
              "summary": "string",
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              },
              "triggerJson": "string"
            }
          ]
        }
      ],
      "constraintFactsJson": "string",
      "componentName": "string",
      "creatorId": "string",
      "creatorName": "string",
      "matcherStrategy": "DEFAULT",
      "associatedPackageUrl": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "threatLevel": 0,
      "componentUpgradeAvailable": true,
      "displayName": {
        "parts": [
          {
            "field": "string",
            "value": "string"
          }
        ],
        "name": "string"
      }
    }
  ]
}
```

<h3 id="getapplicablewaivers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiPolicyWaiversApplicableToViolationDTO](#schemaapipolicywaiversapplicabletoviolationdto)|

<aside class="success">
This operation does not require authentication
</aside>

## getCrossStagePolicyViolationByConstituentId

<a id="opIdgetCrossStagePolicyViolationByConstituentId"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/policyViolations/crossStage \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/policyViolations/crossStage");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/policyViolations/crossStage', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/policyViolations/crossStage',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/policyViolations/crossStage`

<h3 id="getcrossstagepolicyviolationbyconstituentid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|constituentId|query|string|false|none|

> Example responses

> default Response

```json
{
  "policyId": "string",
  "policyName": "string",
  "policyViolationId": "string",
  "threatLevel": 0,
  "constraintViolations": [
    {
      "constraintId": "string",
      "constraintName": "string",
      "reasons": [
        {
          "reason": "string",
          "reference": {
            "value": "string",
            "type": "SECURITY_VULNERABILITY_REFID"
          }
        }
      ]
    }
  ],
  "applicationPublicId": "string",
  "applicationName": "string",
  "organizationName": "string",
  "openTime": "2019-08-24T14:15:22Z",
  "fixTime": "2019-08-24T14:15:22Z",
  "hash": "string",
  "policyThreatCategory": "string",
  "displayName": {
    "parts": [
      {
        "field": "string",
        "value": "string"
      }
    ],
    "name": "string"
  },
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "filename": "string",
  "stageData": {
    "property1": {
      "mostRecentEvaluationTime": "2019-08-24T14:15:22Z",
      "mostRecentScanId": "string",
      "actionTypeId": "string"
    },
    "property2": {
      "mostRecentEvaluationTime": "2019-08-24T14:15:22Z",
      "mostRecentScanId": "string",
      "actionTypeId": "string"
    }
  },
  "policyOwner": {
    "ownerPublicId": "string",
    "ownerId": "string",
    "ownerName": "string",
    "ownerType": "string"
  }
}
```

<h3 id="getcrossstagepolicyviolationbyconstituentid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiCrossStageViolationDTOV2](#schemaapicrossstageviolationdtov2)|

<aside class="success">
This operation does not require authentication
</aside>

## getCrossStagePolicyViolationById

<a id="opIdgetCrossStagePolicyViolationById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/policyViolations/crossStage/{violationId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/policyViolations/crossStage/{violationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/policyViolations/crossStage/{violationId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/policyViolations/crossStage/{violationId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/policyViolations/crossStage/{violationId}`

<h3 id="getcrossstagepolicyviolationbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|violationId|path|string|true|none|

> Example responses

> default Response

```json
{
  "policyId": "string",
  "policyName": "string",
  "policyViolationId": "string",
  "threatLevel": 0,
  "constraintViolations": [
    {
      "constraintId": "string",
      "constraintName": "string",
      "reasons": [
        {
          "reason": "string",
          "reference": {
            "value": "string",
            "type": "SECURITY_VULNERABILITY_REFID"
          }
        }
      ]
    }
  ],
  "applicationPublicId": "string",
  "applicationName": "string",
  "organizationName": "string",
  "openTime": "2019-08-24T14:15:22Z",
  "fixTime": "2019-08-24T14:15:22Z",
  "hash": "string",
  "policyThreatCategory": "string",
  "displayName": {
    "parts": [
      {
        "field": "string",
        "value": "string"
      }
    ],
    "name": "string"
  },
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "filename": "string",
  "stageData": {
    "property1": {
      "mostRecentEvaluationTime": "2019-08-24T14:15:22Z",
      "mostRecentScanId": "string",
      "actionTypeId": "string"
    },
    "property2": {
      "mostRecentEvaluationTime": "2019-08-24T14:15:22Z",
      "mostRecentScanId": "string",
      "actionTypeId": "string"
    }
  },
  "policyOwner": {
    "ownerPublicId": "string",
    "ownerId": "string",
    "ownerName": "string",
    "ownerType": "string"
  }
}
```

<h3 id="getcrossstagepolicyviolationbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiCrossStageViolationDTOV2](#schemaapicrossstageviolationdtov2)|

<aside class="success">
This operation does not require authentication
</aside>

## getPolicyViolations

<a id="opIdgetPolicyViolations"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/policyViolations \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/policyViolations");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/policyViolations', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/policyViolations',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/policyViolations`

<h3 id="getpolicyviolations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|p|query|array[string]|false|none|
|openTimeAfter|query|string|false|none|
|openTimeBefore|query|string|false|none|

> Example responses

> default Response

```json
{
  "applicationViolations": [
    {
      "application": {
        "id": "string",
        "publicId": "string",
        "name": "string",
        "organizationId": "string",
        "contactUserName": "string"
      },
      "policyViolations": [
        {
          "policyId": "string",
          "policyName": "string",
          "policyViolationId": "string",
          "threatLevel": 0,
          "constraintViolations": [
            {
              "constraintId": "string",
              "constraintName": "string",
              "reasons": [
                {
                  "reason": "string",
                  "reference": {
                    "value": "string",
                    "type": "SECURITY_VULNERABILITY_REFID"
                  }
                }
              ]
            }
          ],
          "stageId": "string",
          "reportId": "string",
          "reportUrl": "string",
          "openTime": "2019-08-24T14:15:22Z",
          "component": {
            "packageUrl": "string",
            "hash": "string",
            "sha256": "string",
            "componentIdentifier": {
              "format": "string",
              "coordinates": {
                "property1": "string",
                "property2": "string"
              }
            },
            "displayName": "string",
            "proprietary": true,
            "thirdParty": true
          }
        }
      ]
    }
  ]
}
```

<h3 id="getpolicyviolations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiApplicationViolationListDTOV2](#schemaapiapplicationviolationlistdtov2)|

<aside class="success">
This operation does not require authentication
</aside>

## getTransitivePolicyViolationsByAppScanComponent

<a id="opIdgetTransitivePolicyViolationsByAppScanComponent"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/policyViolations/transitive/{ownerType}/{ownerId}/{scanId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/policyViolations/transitive/{ownerType}/{ownerId}/{scanId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/policyViolations/transitive/{ownerType}/{ownerId}/{scanId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/policyViolations/transitive/{ownerType}/{ownerId}/{scanId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/policyViolations/transitive/{ownerType}/{ownerId}/{scanId}`

<h3 id="gettransitivepolicyviolationsbyappscancomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|ownerId|path|string|true|none|
|scanId|path|string|true|none|
|componentIdentifier|query|[ComponentIdentifier](#schemacomponentidentifier)|false|none|
|packageUrl|query|string|false|none|
|hash|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "packageUrl": "string",
  "hash": "string",
  "displayName": "string",
  "isInnerSource": true,
  "transitivePolicyViolations": [
    {
      "policyId": "string",
      "policyName": "string",
      "threatLevel": 0,
      "threatCategory": "string",
      "policyViolationId": "string",
      "action": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "packageUrl": "string",
      "hash": "string",
      "displayName": "string"
    }
  ]
}
```

<h3 id="gettransitivepolicyviolationsbyappscancomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiComponentTransitivePolicyViolationsDTO](#schemaapicomponenttransitivepolicyviolationsdto)|

<aside class="success">
This operation does not require authentication
</aside>

## getTransitivePolicyViolationsByOwnerStageComponent

<a id="opIdgetTransitivePolicyViolationsByOwnerStageComponent"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/policyViolations/transitive/{ownerType}/{ownerId}/stages/{stageId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/policyViolations/transitive/{ownerType}/{ownerId}/stages/{stageId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/policyViolations/transitive/{ownerType}/{ownerId}/stages/{stageId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/policyViolations/transitive/{ownerType}/{ownerId}/stages/{stageId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/policyViolations/transitive/{ownerType}/{ownerId}/stages/{stageId}`

<h3 id="gettransitivepolicyviolationsbyownerstagecomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|ownerId|path|string|true|none|
|stageId|path|string|true|none|
|componentIdentifier|query|[ComponentIdentifier](#schemacomponentidentifier)|false|none|
|packageUrl|query|string|false|none|
|hash|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "packageUrl": "string",
  "hash": "string",
  "displayName": "string",
  "isInnerSource": true,
  "transitivePolicyViolations": [
    {
      "policyId": "string",
      "policyName": "string",
      "threatLevel": 0,
      "threatCategory": "string",
      "policyViolationId": "string",
      "action": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "packageUrl": "string",
      "hash": "string",
      "displayName": "string"
    }
  ]
}
```

<h3 id="gettransitivepolicyviolationsbyownerstagecomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiComponentTransitivePolicyViolationsDTO](#schemaapicomponenttransitivepolicyviolationsdto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-policy-waiver">Policy Waiver</h1>

## addPolicyWaiver

<a id="opIdaddPolicyWaiver"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/policyWaiver/{policyViolationId}/{ownerType} \
  -H 'Content-Type: text/plain' \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/policyWaiver/{policyViolationId}/{ownerType}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'text/plain',
  'Accept': '*/*'
}

r = requests.post('/api/v2/policyWaiver/{policyViolationId}/{ownerType}', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'text/plain',
  'Accept':'*/*'
};

fetch('/api/v2/policyWaiver/{policyViolationId}/{ownerType}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/policyWaiver/{policyViolationId}/{ownerType}`

> Body parameter

```
string

```

<h3 id="addpolicywaiver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|policyViolationId|path|string|true|none|
|ownerType|path|string|true|none|
|body|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

<h3 id="addpolicywaiver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="addpolicywaiver-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-policy-waivers">Policy Waivers</h1>

## addPolicyWaiverByPolicyViolationId

<a id="opIdaddPolicyWaiverByPolicyViolationId"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/policyWaivers/{ownerType}/{ownerId}/{policyViolationId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/policyWaivers/{ownerType}/{ownerId}/{policyViolationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*'
}

r = requests.post('/api/v2/policyWaivers/{ownerType}/{ownerId}/{policyViolationId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "comment": "string",
  "applyToAllComponents": true,
  "matcherStrategy": "DEFAULT",
  "expiryTime": "2019-08-24T14:15:22Z"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/api/v2/policyWaivers/{ownerType}/{ownerId}/{policyViolationId}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/policyWaivers/{ownerType}/{ownerId}/{policyViolationId}`

> Body parameter

```json
{
  "comment": "string",
  "applyToAllComponents": true,
  "matcherStrategy": "DEFAULT",
  "expiryTime": "2019-08-24T14:15:22Z"
}
```

<h3 id="addpolicywaiverbypolicyviolationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|ownerId|path|string|true|none|
|policyViolationId|path|string|true|none|
|body|body|[ApiWaiverOptionsDTO](#schemaapiwaiveroptionsdto)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

<h3 id="addpolicywaiverbypolicyviolationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="addpolicywaiverbypolicyviolationid-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getTransitivePolicyWaiversByAppScanComponent

<a id="opIdgetTransitivePolicyWaiversByAppScanComponent"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/policyWaivers/transitive/{ownerType}/{ownerId}/{scanId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/policyWaivers/transitive/{ownerType}/{ownerId}/{scanId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/policyWaivers/transitive/{ownerType}/{ownerId}/{scanId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/policyWaivers/transitive/{ownerType}/{ownerId}/{scanId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/policyWaivers/transitive/{ownerType}/{ownerId}/{scanId}`

<h3 id="gettransitivepolicywaiversbyappscancomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|ownerId|path|string|true|none|
|scanId|path|string|true|none|
|componentIdentifier|query|[ComponentIdentifier](#schemacomponentidentifier)|false|none|
|packageUrl|query|string|false|none|
|hash|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "componentPolicyWaivers": [
    {
      "policyWaiverId": "string",
      "policyViolationId": "string",
      "comment": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "expiryTime": "2019-08-24T14:15:22Z",
      "isObsolete": true,
      "scopeOwnerType": "string",
      "scopeOwnerId": "string",
      "scopeOwnerName": "string",
      "hash": "string",
      "policyId": "string",
      "vulnerabilityId": "string",
      "policyName": "string",
      "constraintFacts": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "operatorName": "string",
          "conditionFacts": [
            {
              "conditionTypeId": "string",
              "conditionIndex": 0,
              "summary": "string",
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              },
              "triggerJson": "string"
            }
          ]
        }
      ],
      "constraintFactsJson": "string",
      "componentName": "string",
      "creatorId": "string",
      "creatorName": "string",
      "matcherStrategy": "DEFAULT",
      "associatedPackageUrl": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "threatLevel": 0,
      "componentUpgradeAvailable": true,
      "displayName": {
        "parts": [
          {
            "field": "string",
            "value": "string"
          }
        ],
        "name": "string"
      }
    }
  ]
}
```

<h3 id="gettransitivepolicywaiversbyappscancomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiComponentPolicyWaiversDTO](#schemaapicomponentpolicywaiversdto)|

<aside class="success">
This operation does not require authentication
</aside>

## addWaiverToTransitivePolicyViolationsByAppScanComponent

<a id="opIdaddWaiverToTransitivePolicyViolationsByAppScanComponent"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/policyWaivers/transitive/{ownerType}/{ownerId}/{scanId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/policyWaivers/transitive/{ownerType}/{ownerId}/{scanId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*'
}

r = requests.post('/api/v2/policyWaivers/transitive/{ownerType}/{ownerId}/{scanId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "comment": "string",
  "applyToAllComponents": true,
  "matcherStrategy": "DEFAULT",
  "expiryTime": "2019-08-24T14:15:22Z"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/api/v2/policyWaivers/transitive/{ownerType}/{ownerId}/{scanId}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/policyWaivers/transitive/{ownerType}/{ownerId}/{scanId}`

> Body parameter

```json
{
  "comment": "string",
  "applyToAllComponents": true,
  "matcherStrategy": "DEFAULT",
  "expiryTime": "2019-08-24T14:15:22Z"
}
```

<h3 id="addwaivertotransitivepolicyviolationsbyappscancomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|ownerId|path|string|true|none|
|scanId|path|string|true|none|
|componentIdentifier|query|[ComponentIdentifier](#schemacomponentidentifier)|false|none|
|packageUrl|query|string|false|none|
|hash|query|string|false|none|
|body|body|[ApiWaiverOptionsDTO](#schemaapiwaiveroptionsdto)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

<h3 id="addwaivertotransitivepolicyviolationsbyappscancomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="addwaivertotransitivepolicyviolationsbyappscancomponent-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## addWaiverToTransitivePolicyViolationsByOwnerStageComponent

<a id="opIdaddWaiverToTransitivePolicyViolationsByOwnerStageComponent"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/policyWaivers/transitive/{ownerType}/{ownerId}/stages/{stageId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/policyWaivers/transitive/{ownerType}/{ownerId}/stages/{stageId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*'
}

r = requests.post('/api/v2/policyWaivers/transitive/{ownerType}/{ownerId}/stages/{stageId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "comment": "string",
  "applyToAllComponents": true,
  "matcherStrategy": "DEFAULT",
  "expiryTime": "2019-08-24T14:15:22Z"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/api/v2/policyWaivers/transitive/{ownerType}/{ownerId}/stages/{stageId}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/policyWaivers/transitive/{ownerType}/{ownerId}/stages/{stageId}`

> Body parameter

```json
{
  "comment": "string",
  "applyToAllComponents": true,
  "matcherStrategy": "DEFAULT",
  "expiryTime": "2019-08-24T14:15:22Z"
}
```

<h3 id="addwaivertotransitivepolicyviolationsbyownerstagecomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|ownerId|path|string|true|none|
|stageId|path|string|true|none|
|componentIdentifier|query|[ComponentIdentifier](#schemacomponentidentifier)|false|none|
|packageUrl|query|string|false|none|
|hash|query|string|false|none|
|body|body|[ApiWaiverOptionsDTO](#schemaapiwaiveroptionsdto)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

<h3 id="addwaivertotransitivepolicyviolationsbyownerstagecomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="addwaivertotransitivepolicyviolationsbyownerstagecomponent-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getPolicyWaiver

<a id="opIdgetPolicyWaiver"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/policyWaivers/{ownerType}/{ownerId}/{policyWaiverId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/policyWaivers/{ownerType}/{ownerId}/{policyWaiverId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/policyWaivers/{ownerType}/{ownerId}/{policyWaiverId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/policyWaivers/{ownerType}/{ownerId}/{policyWaiverId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/policyWaivers/{ownerType}/{ownerId}/{policyWaiverId}`

<h3 id="getpolicywaiver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|ownerId|path|string|true|none|
|policyWaiverId|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "policyWaiverId": "string",
  "policyViolationId": "string",
  "comment": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "expiryTime": "2019-08-24T14:15:22Z",
  "isObsolete": true,
  "scopeOwnerType": "string",
  "scopeOwnerId": "string",
  "scopeOwnerName": "string",
  "hash": "string",
  "policyId": "string",
  "vulnerabilityId": "string",
  "policyName": "string",
  "constraintFacts": [
    {
      "constraintId": "string",
      "constraintName": "string",
      "operatorName": "string",
      "conditionFacts": [
        {
          "conditionTypeId": "string",
          "conditionIndex": 0,
          "summary": "string",
          "reason": "string",
          "reference": {
            "value": "string",
            "type": "SECURITY_VULNERABILITY_REFID"
          },
          "triggerJson": "string"
        }
      ]
    }
  ],
  "constraintFactsJson": "string",
  "componentName": "string",
  "creatorId": "string",
  "creatorName": "string",
  "matcherStrategy": "DEFAULT",
  "associatedPackageUrl": "string",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "threatLevel": 0,
  "componentUpgradeAvailable": true,
  "displayName": {
    "parts": [
      {
        "field": "string",
        "value": "string"
      }
    ],
    "name": "string"
  }
}
```

<h3 id="getpolicywaiver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiPolicyWaiverDTO](#schemaapipolicywaiverdto)|

<aside class="success">
This operation does not require authentication
</aside>

## deletePolicyWaiver

<a id="opIddeletePolicyWaiver"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/policyWaivers/{ownerType}/{ownerId}/{policyWaiverId} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/policyWaivers/{ownerType}/{ownerId}/{policyWaiverId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/policyWaivers/{ownerType}/{ownerId}/{policyWaiverId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/policyWaivers/{ownerType}/{ownerId}/{policyWaiverId}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/policyWaivers/{ownerType}/{ownerId}/{policyWaiverId}`

<h3 id="deletepolicywaiver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|ownerId|path|string|true|none|
|policyWaiverId|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

<h3 id="deletepolicywaiver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deletepolicywaiver-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getPolicyWaivers

<a id="opIdgetPolicyWaivers"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/policyWaivers/{ownerType}/{ownerId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/policyWaivers/{ownerType}/{ownerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/policyWaivers/{ownerType}/{ownerId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/policyWaivers/{ownerType}/{ownerId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/policyWaivers/{ownerType}/{ownerId}`

<h3 id="getpolicywaivers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|ownerId|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
[
  {
    "policyWaiverId": "string",
    "policyViolationId": "string",
    "comment": "string",
    "createTime": "2019-08-24T14:15:22Z",
    "expiryTime": "2019-08-24T14:15:22Z",
    "isObsolete": true,
    "scopeOwnerType": "string",
    "scopeOwnerId": "string",
    "scopeOwnerName": "string",
    "hash": "string",
    "policyId": "string",
    "vulnerabilityId": "string",
    "policyName": "string",
    "constraintFacts": [
      {
        "constraintId": "string",
        "constraintName": "string",
        "operatorName": "string",
        "conditionFacts": [
          {
            "conditionTypeId": "string",
            "conditionIndex": 0,
            "summary": "string",
            "reason": "string",
            "reference": {
              "value": "string",
              "type": "SECURITY_VULNERABILITY_REFID"
            },
            "triggerJson": "string"
          }
        ]
      }
    ],
    "constraintFactsJson": "string",
    "componentName": "string",
    "creatorId": "string",
    "creatorName": "string",
    "matcherStrategy": "DEFAULT",
    "associatedPackageUrl": "string",
    "componentIdentifier": {
      "format": "string",
      "coordinates": {
        "property1": "string",
        "property2": "string"
      }
    },
    "threatLevel": 0,
    "componentUpgradeAvailable": true,
    "displayName": {
      "parts": [
        {
          "field": "string",
          "value": "string"
        }
      ],
      "name": "string"
    }
  }
]
```

<h3 id="getpolicywaivers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|Inline|

<h3 id="getpolicywaivers-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiPolicyWaiverDTO](#schemaapipolicywaiverdto)]|false|none|none|
|» policyWaiverId|string|false|none|none|
|» policyViolationId|string|false|none|none|
|» comment|string|false|none|none|
|» createTime|string(date-time)|false|none|none|
|» expiryTime|string(date-time)|false|none|none|
|» isObsolete|boolean|false|none|none|
|» scopeOwnerType|string|false|none|none|
|» scopeOwnerId|string|false|none|none|
|» scopeOwnerName|string|false|none|none|
|» hash|string|false|none|none|
|» policyId|string|false|none|none|
|» vulnerabilityId|string|false|none|none|
|» policyName|string|false|none|none|
|» constraintFacts|[[ConstraintFact](#schemaconstraintfact)]|false|none|none|
|»» constraintId|string|false|none|none|
|»» constraintName|string|false|none|none|
|»» operatorName|string|false|none|none|
|»» conditionFacts|[[ConditionFact](#schemaconditionfact)]|false|none|none|
|»»» conditionTypeId|string|false|none|none|
|»»» conditionIndex|integer(int32)|false|none|none|
|»»» summary|string|false|none|none|
|»»» reason|string|false|none|none|
|»»» reference|[TriggerReference](#schematriggerreference)|false|none|none|
|»»»» value|string|false|none|none|
|»»»» type|string|false|none|none|
|»»» triggerJson|string|false|none|none|
|» constraintFactsJson|string|false|none|none|
|» componentName|string|false|none|none|
|» creatorId|string|false|none|none|
|» creatorName|string|false|none|none|
|» matcherStrategy|string|false|none|none|
|» associatedPackageUrl|string|false|none|none|
|» componentIdentifier|[ApiComponentIdentifierDTOV2](#schemaapicomponentidentifierdtov2)|false|none|none|
|»» format|string|false|none|none|
|»» coordinates|object|false|none|none|
|»»» **additionalProperties**|string|false|none|none|
|» threatLevel|integer(int32)|false|none|none|
|» componentUpgradeAvailable|boolean|false|none|none|
|» displayName|[ComponentDisplayName](#schemacomponentdisplayname)|false|none|none|
|»» parts|[[ComponentDisplayNamePart](#schemacomponentdisplaynamepart)]|false|none|none|
|»»» field|string|false|none|none|
|»»» value|string|false|none|none|
|»» name|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SECURITY_VULNERABILITY_REFID|
|matcherStrategy|DEFAULT|
|matcherStrategy|EXACT_COMPONENT|
|matcherStrategy|ALL_COMPONENTS|
|matcherStrategy|ALL_VERSIONS|

<aside class="success">
This operation does not require authentication
</aside>

## requestPolicyWaiver

<a id="opIdrequestPolicyWaiver"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/policyWaivers/waiverRequests/{policyViolationId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/policyWaivers/waiverRequests/{policyViolationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*'
}

r = requests.post('/api/v2/policyWaivers/waiverRequests/{policyViolationId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "comment": "string",
  "policyViolationLink": "string",
  "addWaiverLink": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/api/v2/policyWaivers/waiverRequests/{policyViolationId}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/policyWaivers/waiverRequests/{policyViolationId}`

> Body parameter

```json
{
  "comment": "string",
  "policyViolationLink": "string",
  "addWaiverLink": "string"
}
```

<h3 id="requestpolicywaiver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|policyViolationId|path|string|true|none|
|body|body|[ApiRequestPolicyWaiverDTO](#schemaapirequestpolicywaiverdto)|false|none|

> Example responses

<h3 id="requestpolicywaiver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="requestpolicywaiver-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-product">Product</h1>

## installLicense

<a id="opIdinstallLicense"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/product/license \
  -H 'Content-Type: multipart/form-data' \
  -H 'Accept: text/plain'

```

```java
URL obj = new URL("/api/v2/product/license");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'multipart/form-data',
  'Accept': 'text/plain'
}

r = requests.post('/api/v2/product/license', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "file": {
    "type": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "fileName": "string",
    "creationDate": "2019-08-24T14:15:22Z",
    "modificationDate": "2019-08-24T14:15:22Z",
    "readDate": "2019-08-24T14:15:22Z",
    "size": 0,
    "name": "string"
  }
}';
const headers = {
  'Content-Type':'multipart/form-data',
  'Accept':'text/plain'
};

fetch('/api/v2/product/license',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/product/license`

> Body parameter

```yaml
file:
  type: string
  parameters:
    property1: string
    property2: string
  fileName: string
  creationDate: 2019-08-24T14:15:22Z
  modificationDate: 2019-08-24T14:15:22Z
  readDate: 2019-08-24T14:15:22Z
  size: 0
  name: string

```

<h3 id="installlicense-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» file|body|[FormDataContentDisposition](#schemaformdatacontentdisposition)|false|none|
|»» type|body|string|false|none|
|»» parameters|body|object|false|none|
|»»» **additionalProperties**|body|string|false|none|
|»» fileName|body|string|false|none|
|»» creationDate|body|string(date-time)|false|none|
|»» modificationDate|body|string(date-time)|false|none|
|»» readDate|body|string(date-time)|false|none|
|»» size|body|integer(int64)|false|none|
|»» name|body|string|false|none|

> Example responses

<h3 id="installlicense-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="installlicense-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## uninstallLicense

<a id="opIduninstallLicense"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/product/license \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/product/license");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/product/license', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/product/license',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/product/license`

> Example responses

<h3 id="uninstalllicense-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="uninstalllicense-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-reports">Reports</h1>

## getComponentsInQuarantine

<a id="opIdgetComponentsInQuarantine"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/reports/components/quarantined \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/reports/components/quarantined");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/reports/components/quarantined', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/reports/components/quarantined',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/reports/components/quarantined`

> Example responses

> default Response

```json
{
  "componentsInQuarantine": [
    {
      "repository": {
        "repositoryId": "string",
        "publicId": "string",
        "format": "string",
        "type": "string",
        "auditEnabled": true,
        "quarantineEnabled": true,
        "policyCompliantComponentSelectionEnabled": true,
        "namespaceConfusionProtectionEnabled": true
      },
      "components": [
        {
          "component": {
            "packageUrl": "string",
            "hash": "string",
            "sha256": "string",
            "componentIdentifier": {
              "format": "string",
              "coordinates": {
                "property1": "string",
                "property2": "string"
              }
            },
            "displayName": "string",
            "thirdParty": true,
            "quarantineId": "string",
            "quarantineTime": "2019-08-24T14:15:22Z",
            "quarantineReleaseTime": "2019-08-24T14:15:22Z"
          },
          "waivedPolicyViolations": [
            {
              "policyId": "string",
              "policyName": "string",
              "policyViolationId": "string",
              "threatLevel": 0,
              "constraintViolations": [
                {
                  "constraintId": "string",
                  "constraintName": "string",
                  "reasons": [
                    {}
                  ]
                }
              ],
              "policyWaiver": {
                "policyWaiverId": "string",
                "policyViolationId": "string",
                "comment": "string",
                "createTime": "2019-08-24T14:15:22Z",
                "expiryTime": "2019-08-24T14:15:22Z",
                "isObsolete": true,
                "scopeOwnerType": "string",
                "scopeOwnerId": "string",
                "scopeOwnerName": "string",
                "hash": "string",
                "policyId": "string",
                "vulnerabilityId": "string",
                "policyName": "string",
                "constraintFacts": [
                  {
                    "constraintId": "string",
                    "constraintName": "string",
                    "operatorName": "string",
                    "conditionFacts": []
                  }
                ],
                "constraintFactsJson": "string",
                "componentName": "string",
                "creatorId": "string",
                "creatorName": "string",
                "matcherStrategy": "DEFAULT",
                "associatedPackageUrl": "string",
                "componentIdentifier": {
                  "format": "string",
                  "coordinates": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "threatLevel": 0,
                "componentUpgradeAvailable": true,
                "displayName": {
                  "parts": [
                    {}
                  ],
                  "name": "string"
                }
              }
            }
          ],
          "policyViolations": [
            {
              "policyId": "string",
              "policyName": "string",
              "policyViolationId": "string",
              "threatLevel": 0,
              "constraintViolations": [
                {
                  "constraintId": "string",
                  "constraintName": "string",
                  "reasons": [
                    {}
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

<h3 id="getcomponentsinquarantine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiComponentsInQuarantineDTO](#schemaapicomponentsinquarantinedto)|

<aside class="success">
This operation does not require authentication
</aside>

## getComponentsWithWaivers

<a id="opIdgetComponentsWithWaivers"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/reports/components/waivers \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/reports/components/waivers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/reports/components/waivers', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/reports/components/waivers',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/reports/components/waivers`

<h3 id="getcomponentswithwaivers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|query|string|false|none|

> Example responses

> default Response

```json
{
  "applicationWaivers": [
    {
      "application": {
        "id": "string",
        "publicId": "string",
        "name": "string",
        "organizationId": "string",
        "contactUserName": "string"
      },
      "stages": [
        {
          "stageId": "string",
          "componentPolicyViolations": [
            {
              "component": {
                "packageUrl": "string",
                "hash": "string",
                "sha256": "string",
                "componentIdentifier": {
                  "format": "string",
                  "coordinates": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "displayName": "string",
                "proprietary": true,
                "thirdParty": true
              },
              "waivedPolicyViolations": [
                {
                  "policyId": "string",
                  "policyName": "string",
                  "policyViolationId": "string",
                  "threatLevel": 0,
                  "constraintViolations": [
                    {}
                  ],
                  "policyWaiver": {
                    "policyWaiverId": "string",
                    "policyViolationId": "string",
                    "comment": "string",
                    "createTime": "2019-08-24T14:15:22Z",
                    "expiryTime": "2019-08-24T14:15:22Z",
                    "isObsolete": true,
                    "scopeOwnerType": "string",
                    "scopeOwnerId": "string",
                    "scopeOwnerName": "string",
                    "hash": "string",
                    "policyId": "string",
                    "vulnerabilityId": "string",
                    "policyName": "string",
                    "constraintFacts": [],
                    "constraintFactsJson": "string",
                    "componentName": "string",
                    "creatorId": "string",
                    "creatorName": "string",
                    "matcherStrategy": "DEFAULT",
                    "associatedPackageUrl": "string",
                    "componentIdentifier": {},
                    "threatLevel": 0,
                    "componentUpgradeAvailable": true,
                    "displayName": {}
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "repositoryWaivers": [
    {
      "repository": {
        "repositoryId": "string",
        "publicId": "string",
        "format": "string",
        "type": "string",
        "auditEnabled": true,
        "quarantineEnabled": true,
        "policyCompliantComponentSelectionEnabled": true,
        "namespaceConfusionProtectionEnabled": true
      },
      "stages": [
        {
          "stageId": "string",
          "componentPolicyViolations": [
            {
              "component": {
                "packageUrl": "string",
                "hash": "string",
                "sha256": "string",
                "componentIdentifier": {
                  "format": "string",
                  "coordinates": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "displayName": "string",
                "proprietary": true,
                "thirdParty": true
              },
              "waivedPolicyViolations": [
                {
                  "policyId": "string",
                  "policyName": "string",
                  "policyViolationId": "string",
                  "threatLevel": 0,
                  "constraintViolations": [
                    {}
                  ],
                  "policyWaiver": {
                    "policyWaiverId": "string",
                    "policyViolationId": "string",
                    "comment": "string",
                    "createTime": "2019-08-24T14:15:22Z",
                    "expiryTime": "2019-08-24T14:15:22Z",
                    "isObsolete": true,
                    "scopeOwnerType": "string",
                    "scopeOwnerId": "string",
                    "scopeOwnerName": "string",
                    "hash": "string",
                    "policyId": "string",
                    "vulnerabilityId": "string",
                    "policyName": "string",
                    "constraintFacts": [],
                    "constraintFactsJson": "string",
                    "componentName": "string",
                    "creatorId": "string",
                    "creatorName": "string",
                    "matcherStrategy": "DEFAULT",
                    "associatedPackageUrl": "string",
                    "componentIdentifier": {},
                    "threatLevel": 0,
                    "componentUpgradeAvailable": true,
                    "displayName": {}
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

<h3 id="getcomponentswithwaivers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiComponentWaiversDTO](#schemaapicomponentwaiversdto)|

<aside class="success">
This operation does not require authentication
</aside>

## getMetrics

<a id="opIdgetMetrics"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/reports/metrics \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/reports/metrics");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/reports/metrics', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "timePeriod": "WEEK",
  "firstTimePeriod": "string",
  "lastTimePeriod": "string",
  "applicationIds": [
    "string"
  ],
  "organizationIds": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/reports/metrics',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/reports/metrics`

> Body parameter

```json
{
  "timePeriod": "WEEK",
  "firstTimePeriod": "string",
  "lastTimePeriod": "string",
  "applicationIds": [
    "string"
  ],
  "organizationIds": [
    "string"
  ]
}
```

<h3 id="getmetrics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiMetricsReportingQueryDTOV2](#schemaapimetricsreportingquerydtov2)|false|none|

> Example responses

<h3 id="getmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="getmetrics-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getAll_1

<a id="opIdgetAll_1"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/reports/applications \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/reports/applications");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/reports/applications', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/reports/applications',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/reports/applications`

> Example responses

> default Response

```json
[
  {
    "stage": "string",
    "applicationId": "string",
    "evaluationDate": "2019-08-24T14:15:22Z",
    "latestReportHtmlUrl": "string",
    "reportHtmlUrl": "string",
    "embeddableReportHtmlUrl": "string",
    "reportPdfUrl": "string",
    "reportDataUrl": "string"
  }
]
```

<h3 id="getall_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|Inline|

<h3 id="getall_1-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiApplicationReportDTOV2](#schemaapiapplicationreportdtov2)]|false|none|none|
|» stage|string|false|none|none|
|» applicationId|string|false|none|none|
|» evaluationDate|string(date-time)|false|none|none|
|» latestReportHtmlUrl|string|false|none|none|
|» reportHtmlUrl|string|false|none|none|
|» embeddableReportHtmlUrl|string|false|none|none|
|» reportPdfUrl|string|false|none|none|
|» reportDataUrl|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getByApplicationId

<a id="opIdgetByApplicationId"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/reports/applications/{applicationId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/reports/applications/{applicationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/reports/applications/{applicationId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/reports/applications/{applicationId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/reports/applications/{applicationId}`

<h3 id="getbyapplicationid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|none|

> Example responses

> default Response

```json
[
  {
    "stage": "string",
    "applicationId": "string",
    "evaluationDate": "2019-08-24T14:15:22Z",
    "latestReportHtmlUrl": "string",
    "reportHtmlUrl": "string",
    "embeddableReportHtmlUrl": "string",
    "reportPdfUrl": "string",
    "reportDataUrl": "string"
  }
]
```

<h3 id="getbyapplicationid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|Inline|

<h3 id="getbyapplicationid-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiApplicationReportDTOV2](#schemaapiapplicationreportdtov2)]|false|none|none|
|» stage|string|false|none|none|
|» applicationId|string|false|none|none|
|» evaluationDate|string(date-time)|false|none|none|
|» latestReportHtmlUrl|string|false|none|none|
|» reportHtmlUrl|string|false|none|none|
|» embeddableReportHtmlUrl|string|false|none|none|
|» reportPdfUrl|string|false|none|none|
|» reportDataUrl|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getReportHistoryForApplication

<a id="opIdgetReportHistoryForApplication"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/reports/applications/{applicationId}/history \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/reports/applications/{applicationId}/history");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/reports/applications/{applicationId}/history', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/reports/applications/{applicationId}/history',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/reports/applications/{applicationId}/history`

<h3 id="getreporthistoryforapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|none|
|stage|query|string|false|none|
|limit|query|integer(int32)|false|none|

> Example responses

> default Response

```json
{
  "applicationId": "string",
  "reports": [
    {
      "stage": "string",
      "applicationId": "string",
      "evaluationDate": "2019-08-24T14:15:22Z",
      "latestReportHtmlUrl": "string",
      "reportHtmlUrl": "string",
      "embeddableReportHtmlUrl": "string",
      "reportPdfUrl": "string",
      "reportDataUrl": "string",
      "policyEvaluationId": "string",
      "scanId": "string",
      "isReevaluation": true,
      "isForMonitoring": true,
      "commitHash": "string",
      "scanTriggerType": "string",
      "policyEvaluationResult": {
        "alerts": [
          {
            "trigger": {
              "policyId": "string",
              "policyName": "string",
              "threatLevel": 0,
              "policyViolationId": "string",
              "componentFacts": [
                {
                  "componentIdentifier": {
                    "format": "string",
                    "coordinates": {}
                  },
                  "hash": "string",
                  "constraintFacts": [
                    {}
                  ],
                  "pathnames": [
                    "string"
                  ],
                  "displayName": {
                    "parts": [],
                    "name": "string"
                  }
                }
              ]
            },
            "actions": [
              {
                "actionTypeId": "string",
                "target": "string",
                "targetType": "string"
              }
            ]
          }
        ],
        "affectedComponentCount": 0,
        "criticalComponentCount": 0,
        "severeComponentCount": 0,
        "moderateComponentCount": 0,
        "criticalPolicyViolationCount": 0,
        "severePolicyViolationCount": 0,
        "moderatePolicyViolationCount": 0,
        "legacyViolationCount": 0,
        "totalComponentCount": 0,
        "grandfatheredPolicyViolationCount": 0
      }
    }
  ]
}
```

<h3 id="getreporthistoryforapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiReportHistoryDTO](#schemaapireporthistorydto)|

<aside class="success">
This operation does not require authentication
</aside>

## getStaleWaivers

<a id="opIdgetStaleWaivers"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/reports/waivers/stale \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/reports/waivers/stale");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/reports/waivers/stale', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/reports/waivers/stale',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/reports/waivers/stale`

> Example responses

> default Response

```json
{
  "staleWaivers": [
    {
      "waiverId": "string",
      "policyId": "string",
      "policyName": "string",
      "comment": "string",
      "scopeOwnerType": "string",
      "scopeOwnerId": "string",
      "scopeOwnerName": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "expiryTime": "2019-08-24T14:15:22Z",
      "creatorId": "string",
      "creatorName": "string",
      "constraintFacts": [
        {
          "constraintName": "string",
          "constraintId": "string",
          "reasons": [
            {
              "reason": "string"
            }
          ]
        }
      ],
      "staleEvaluations": {
        "applications": [
          {
            "application": {
              "id": "string",
              "publicId": "string",
              "name": "string",
              "organizationId": "string",
              "contactUserName": "string"
            },
            "stages": [
              {
                "stageId": "string",
                "lastEvaluationDate": "2019-08-24T14:15:22Z"
              }
            ]
          }
        ],
        "repositories": [
          {
            "repository": {
              "repositoryId": "string",
              "publicId": "string",
              "format": "string",
              "type": "string",
              "auditEnabled": true,
              "quarantineEnabled": true,
              "policyCompliantComponentSelectionEnabled": true,
              "namespaceConfusionProtectionEnabled": true
            },
            "stages": [
              {
                "stageId": "string",
                "lastEvaluationDate": "2019-08-24T14:15:22Z"
              }
            ]
          }
        ]
      }
    }
  ]
}
```

<h3 id="getstalewaivers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiStaleWaiversResponseDTO](#schemaapistalewaiversresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-repositories">Repositories</h1>

## releaseQuarantineWithoutReEval

<a id="opIdreleaseQuarantineWithoutReEval"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/repositories/quarantine/{quarantineId}/release \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/repositories/quarantine/{quarantineId}/release");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'text/plain',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/repositories/quarantine/{quarantineId}/release', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'text/plain',
  'Accept':'application/json'
};

fetch('/api/v2/repositories/quarantine/{quarantineId}/release',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/repositories/quarantine/{quarantineId}/release`

> Body parameter

```
string

```

<h3 id="releasequarantinewithoutreeval-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|quarantineId|path|string|true|none|
|body|body|string|false|none|

> Example responses

> default Response

```json
{
  "componentReleasedFromQuarantine": {
    "component": {
      "packageUrl": "string",
      "hash": "string",
      "sha256": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "thirdParty": true,
      "quarantineId": "string",
      "quarantineTime": "2019-08-24T14:15:22Z",
      "quarantineReleaseTime": "2019-08-24T14:15:22Z"
    },
    "waivedPolicyViolations": [
      {
        "policyId": "string",
        "policyName": "string",
        "policyViolationId": "string",
        "threatLevel": 0,
        "constraintViolations": [
          {
            "constraintId": "string",
            "constraintName": "string",
            "reasons": [
              {
                "reason": "string",
                "reference": {
                  "value": "string",
                  "type": "SECURITY_VULNERABILITY_REFID"
                }
              }
            ]
          }
        ],
        "policyWaiver": {
          "policyWaiverId": "string",
          "policyViolationId": "string",
          "comment": "string",
          "createTime": "2019-08-24T14:15:22Z",
          "expiryTime": "2019-08-24T14:15:22Z",
          "isObsolete": true,
          "scopeOwnerType": "string",
          "scopeOwnerId": "string",
          "scopeOwnerName": "string",
          "hash": "string",
          "policyId": "string",
          "vulnerabilityId": "string",
          "policyName": "string",
          "constraintFacts": [
            {
              "constraintId": "string",
              "constraintName": "string",
              "operatorName": "string",
              "conditionFacts": [
                {
                  "conditionTypeId": "string",
                  "conditionIndex": 0,
                  "summary": "string",
                  "reason": "string",
                  "reference": {
                    "value": "string",
                    "type": "SECURITY_VULNERABILITY_REFID"
                  },
                  "triggerJson": "string"
                }
              ]
            }
          ],
          "constraintFactsJson": "string",
          "componentName": "string",
          "creatorId": "string",
          "creatorName": "string",
          "matcherStrategy": "DEFAULT",
          "associatedPackageUrl": "string",
          "componentIdentifier": {
            "format": "string",
            "coordinates": {
              "property1": "string",
              "property2": "string"
            }
          },
          "threatLevel": 0,
          "componentUpgradeAvailable": true,
          "displayName": {
            "parts": [
              {
                "field": "string",
                "value": "string"
              }
            ],
            "name": "string"
          }
        }
      }
    ],
    "policyViolations": [
      {
        "policyId": "string",
        "policyName": "string",
        "policyViolationId": "string",
        "threatLevel": 0,
        "constraintViolations": [
          {
            "constraintId": "string",
            "constraintName": "string",
            "reasons": [
              {
                "reason": "string",
                "reference": {
                  "value": "string",
                  "type": "SECURITY_VULNERABILITY_REFID"
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
```

<h3 id="releasequarantinewithoutreeval-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiComponentReleasedFromQuarantineDTO](#schemaapicomponentreleasedfromquarantinedto)|

<aside class="success">
This operation does not require authentication
</aside>

## getQuarantinedByPath

<a id="opIdgetQuarantinedByPath"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/repositories/{repositoryManagerInstanceId}/{repositoryPublicId}/components/quarantined/pathnames \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/repositories/{repositoryManagerInstanceId}/{repositoryPublicId}/components/quarantined/pathnames");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/repositories/{repositoryManagerInstanceId}/{repositoryPublicId}/components/quarantined/pathnames', headers = headers)

print(r.json())

```

```javascript
const inputBody = '[
  "string"
]';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/repositories/{repositoryManagerInstanceId}/{repositoryPublicId}/components/quarantined/pathnames',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/repositories/{repositoryManagerInstanceId}/{repositoryPublicId}/components/quarantined/pathnames`

> Body parameter

```json
[
  "string"
]
```

<h3 id="getquarantinedbypath-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryManagerInstanceId|path|string|true|none|
|repositoryPublicId|path|string|true|none|
|body|body|array[string]|false|none|

> Example responses

> default Response

```json
{
  "pathVersions": [
    {
      "requestIndex": 0,
      "repositoryComponentPaths": [
        {
          "pathname": "string",
          "quarantine": true
        }
      ]
    }
  ]
}
```

<h3 id="getquarantinedbypath-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiRepositoryPathResponseDTO](#schemaapirepositorypathresponsedto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-role-memberships">Role Memberships</h1>

## getRoleMembershipsApplicationOrOrganization

<a id="opIdgetRoleMembershipsApplicationOrOrganization"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/roleMemberships/{ownerType}/{internalOwnerId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/roleMemberships/{ownerType}/{internalOwnerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/roleMemberships/{ownerType}/{internalOwnerId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/roleMemberships/{ownerType}/{internalOwnerId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/roleMemberships/{ownerType}/{internalOwnerId}`

<h3 id="getrolemembershipsapplicationororganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|internalOwnerId|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "memberMappings": [
    {
      "roleId": "string",
      "members": [
        {
          "ownerId": "string",
          "ownerType": "string",
          "type": "USER",
          "userOrGroupName": "string"
        }
      ]
    }
  ]
}
```

<h3 id="getrolemembershipsapplicationororganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiRoleMemberMappingListDTO](#schemaapirolemembermappinglistdto)|

<aside class="success">
This operation does not require authentication
</aside>

## getRoleMembershipsGlobalOrRepositoryContainer

<a id="opIdgetRoleMembershipsGlobalOrRepositoryContainer"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/roleMemberships/{ownerType} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/roleMemberships/{ownerType}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/roleMemberships/{ownerType}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/roleMemberships/{ownerType}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/roleMemberships/{ownerType}`

<h3 id="getrolemembershipsglobalorrepositorycontainer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "memberMappings": [
    {
      "roleId": "string",
      "members": [
        {
          "ownerId": "string",
          "ownerType": "string",
          "type": "USER",
          "userOrGroupName": "string"
        }
      ]
    }
  ]
}
```

<h3 id="getrolemembershipsglobalorrepositorycontainer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiRoleMemberMappingListDTO](#schemaapirolemembermappinglistdto)|

<aside class="success">
This operation does not require authentication
</aside>

## grantRoleMembershipApplicationOrOrganization

<a id="opIdgrantRoleMembershipApplicationOrOrganization"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/roleMemberships/{ownerType}/{internalOwnerId}/role/{roleId}/{memberType}/{memberName} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/roleMemberships/{ownerType}/{internalOwnerId}/role/{roleId}/{memberType}/{memberName}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.put('/api/v2/roleMemberships/{ownerType}/{internalOwnerId}/role/{roleId}/{memberType}/{memberName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/roleMemberships/{ownerType}/{internalOwnerId}/role/{roleId}/{memberType}/{memberName}',
{
  method: 'PUT',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/roleMemberships/{ownerType}/{internalOwnerId}/role/{roleId}/{memberType}/{memberName}`

<h3 id="grantrolemembershipapplicationororganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|internalOwnerId|path|string|true|none|
|roleId|path|string|true|none|
|memberType|path|string|true|none|
|memberName|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|
|memberType|USER|
|memberType|GROUP|

> Example responses

<h3 id="grantrolemembershipapplicationororganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="grantrolemembershipapplicationororganization-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## revokeRoleMembershipApplicationOrOrganization

<a id="opIdrevokeRoleMembershipApplicationOrOrganization"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/roleMemberships/{ownerType}/{internalOwnerId}/role/{roleId}/{memberType}/{memberName} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/roleMemberships/{ownerType}/{internalOwnerId}/role/{roleId}/{memberType}/{memberName}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/roleMemberships/{ownerType}/{internalOwnerId}/role/{roleId}/{memberType}/{memberName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/roleMemberships/{ownerType}/{internalOwnerId}/role/{roleId}/{memberType}/{memberName}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/roleMemberships/{ownerType}/{internalOwnerId}/role/{roleId}/{memberType}/{memberName}`

<h3 id="revokerolemembershipapplicationororganization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|internalOwnerId|path|string|true|none|
|roleId|path|string|true|none|
|memberType|path|string|true|none|
|memberName|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|
|memberType|USER|
|memberType|GROUP|

> Example responses

<h3 id="revokerolemembershipapplicationororganization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="revokerolemembershipapplicationororganization-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## grantRoleMembershipGlobalOrRepositoryContainer

<a id="opIdgrantRoleMembershipGlobalOrRepositoryContainer"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/roleMemberships/{ownerType}/role/{roleId}/{memberType}/{memberName} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/roleMemberships/{ownerType}/role/{roleId}/{memberType}/{memberName}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.put('/api/v2/roleMemberships/{ownerType}/role/{roleId}/{memberType}/{memberName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/roleMemberships/{ownerType}/role/{roleId}/{memberType}/{memberName}',
{
  method: 'PUT',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/roleMemberships/{ownerType}/role/{roleId}/{memberType}/{memberName}`

<h3 id="grantrolemembershipglobalorrepositorycontainer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|roleId|path|string|true|none|
|memberType|path|string|true|none|
|memberName|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|
|memberType|USER|
|memberType|GROUP|

> Example responses

<h3 id="grantrolemembershipglobalorrepositorycontainer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="grantrolemembershipglobalorrepositorycontainer-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## revokeRoleMembershipGlobalOrRepositoryContainer

<a id="opIdrevokeRoleMembershipGlobalOrRepositoryContainer"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/roleMemberships/{ownerType}/role/{roleId}/{memberType}/{memberName} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/roleMemberships/{ownerType}/role/{roleId}/{memberType}/{memberName}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/roleMemberships/{ownerType}/role/{roleId}/{memberType}/{memberName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/roleMemberships/{ownerType}/role/{roleId}/{memberType}/{memberName}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/roleMemberships/{ownerType}/role/{roleId}/{memberType}/{memberName}`

<h3 id="revokerolemembershipglobalorrepositorycontainer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|roleId|path|string|true|none|
|memberType|path|string|true|none|
|memberName|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|
|memberType|USER|
|memberType|GROUP|

> Example responses

<h3 id="revokerolemembershipglobalorrepositorycontainer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="revokerolemembershipglobalorrepositorycontainer-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-roles">Roles</h1>

## getRoles

<a id="opIdgetRoles"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/roles \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/roles");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/roles', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/roles',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/roles`

> Example responses

> default Response

```json
{
  "roles": [
    {
      "id": "string",
      "name": "string",
      "description": "string"
    }
  ]
}
```

<h3 id="getroles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiRoleListDTO](#schemaapirolelistdto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-scan">Scan</h1>

## getIdeUsersOverview

<a id="opIdgetIdeUsersOverview"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/scan/applications/ideUser/overview \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/scan/applications/ideUser/overview");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/scan/applications/ideUser/overview', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/scan/applications/ideUser/overview',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/scan/applications/ideUser/overview`

<h3 id="getideusersoverview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sinceUtcTimestamp|query|integer(int64)|false|none|

> Example responses

> default Response

```json
{
  "userCount": 0
}
```

<h3 id="getideusersoverview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[IdeUsersOverviewDTO](#schemaideusersoverviewdto)|

<aside class="success">
This operation does not require authentication
</aside>

## getScanStatus

<a id="opIdgetScanStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/scan/applications/{applicationId}/status/{scanRequestId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/scan/applications/{applicationId}/status/{scanRequestId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/scan/applications/{applicationId}/status/{scanRequestId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/scan/applications/{applicationId}/status/{scanRequestId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/scan/applications/{applicationId}/status/{scanRequestId}`

<h3 id="getscanstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|none|
|scanRequestId|path|string|true|none|

> Example responses

> default Response

```json
{
  "policyAction": "string",
  "reportHtmlUrl": "string",
  "reportPdfUrl": "string",
  "reportDataUrl": "string",
  "embeddableReportHtmlUrl": "string",
  "isError": true,
  "errorMessage": "string",
  "componentsAffected": {
    "critical": 0,
    "severe": 0,
    "moderate": 0
  },
  "openPolicyViolations": {
    "critical": 0,
    "severe": 0,
    "moderate": 0
  },
  "grandfatheredPolicyViolations": 0,
  "legacyViolations": 0
}
```

<h3 id="getscanstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiThirdPartyScanResultDTO](#schemaapithirdpartyscanresultdto)|

<aside class="success">
This operation does not require authentication
</aside>

## scanComponents

<a id="opIdscanComponents"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/scan/applications/{applicationId}/sources/{source} \
  -H 'Content-Type: application/xml' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/scan/applications/{applicationId}/sources/{source}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/xml',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/scan/applications/{applicationId}/sources/{source}', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'application/xml',
  'Accept':'application/json'
};

fetch('/api/v2/scan/applications/{applicationId}/sources/{source}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/scan/applications/{applicationId}/sources/{source}`

> Body parameter

```json
"string"
```

<h3 id="scancomponents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|none|
|source|path|string|true|none|
|stageId|query|string|false|none|
|body|body|string|false|none|

> Example responses

<h3 id="scancomponents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="scancomponents-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-search">Search</h1>

## searchComponent

<a id="opIdsearchComponent"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/search/component \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/search/component");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/search/component', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/search/component',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/search/component`

<h3 id="searchcomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stageId|query|string|false|none|
|hash|query|string|false|none|
|componentIdentifier|query|[ComponentIdentifier](#schemacomponentidentifier)|false|none|
|packageUrl|query|string|false|none|

> Example responses

> default Response

```json
{
  "criteria": {
    "stageId": "string",
    "hash": "string",
    "componentIdentifier": {
      "format": "string",
      "coordinates": {
        "property1": "string",
        "property2": "string"
      }
    },
    "packageUrl": "string"
  },
  "results": [
    {
      "applicationId": "string",
      "applicationName": "string",
      "reportHtmlUrl": "string",
      "reportUrl": "string",
      "hash": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "packageUrl": "string",
      "threatLevel": 0,
      "dependencyData": {
        "directDependency": true,
        "innerSource": true,
        "parentComponentPurls": [
          "string"
        ],
        "innerSourceData": [
          {
            "ownerApplicationName": "string",
            "ownerApplicationId": "string",
            "innerSourceComponentPurl": "string"
          }
        ]
      }
    }
  ]
}
```

<h3 id="searchcomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiSearchResultsDTOV2](#schemaapisearchresultsdtov2)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-security-overrides">Security Overrides</h1>

## getSecurityVulnerabilityOverrides

<a id="opIdgetSecurityVulnerabilityOverrides"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/securityOverrides \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/securityOverrides");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/securityOverrides', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/securityOverrides',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/securityOverrides`

<h3 id="getsecurityvulnerabilityoverrides-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|refId|query|string|false|none|
|componentPurl|query|string|false|none|
|ownerId|query|string|false|none|

> Example responses

> default Response

```json
{
  "securityOverrides": [
    {
      "securityOverrideId": "string",
      "hash": "string",
      "referenceId": "string",
      "status": "string",
      "comment": "string",
      "owner": {
        "ownerPublicId": "string",
        "ownerId": "string",
        "ownerName": "string",
        "ownerType": "string"
      },
      "currentlyAffectedComponents": [
        {
          "packageUrl": "string",
          "hash": "string",
          "sha256": "string",
          "componentIdentifier": {
            "format": "string",
            "coordinates": {
              "property1": "string",
              "property2": "string"
            }
          },
          "displayName": "string",
          "proprietary": true,
          "thirdParty": true
        }
      ]
    }
  ]
}
```

<h3 id="getsecurityvulnerabilityoverrides-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiSecurityVulnerabilityOverrideResponseDTOV2](#schemaapisecurityvulnerabilityoverrideresponsedtov2)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-source-control">Source Control</h1>

## getSourceControl_1

<a id="opIdgetSourceControl_1"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/sourceControl/{ownerType}/{internalOwnerId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/sourceControl/{ownerType}/{internalOwnerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/sourceControl/{ownerType}/{internalOwnerId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/sourceControl/{ownerType}/{internalOwnerId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/sourceControl/{ownerType}/{internalOwnerId}`

<h3 id="getsourcecontrol_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|internalOwnerId|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "id": "string",
  "ownerId": "string",
  "repositoryUrl": "string",
  "username": "string",
  "token": "string",
  "provider": "string",
  "baseBranch": "string",
  "enablePullRequests": true,
  "remediationPullRequestsEnabled": true,
  "enableStatusChecks": true,
  "statusChecksEnabled": true,
  "pullRequestCommentingEnabled": true,
  "sourceControlEvaluationsEnabled": true,
  "sourceControlScanTarget": "string",
  "sshEnabled": true,
  "commitStatusEnabled": true
}
```

<h3 id="getsourcecontrol_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiSourceControlDTO](#schemaapisourcecontroldto)|

<aside class="success">
This operation does not require authentication
</aside>

## updateSourceControl

<a id="opIdupdateSourceControl"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/sourceControl/{ownerType}/{internalOwnerId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/sourceControl/{ownerType}/{internalOwnerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('/api/v2/sourceControl/{ownerType}/{internalOwnerId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "id": "string",
  "ownerId": "string",
  "repositoryUrl": "string",
  "username": "string",
  "token": "string",
  "provider": "string",
  "baseBranch": "string",
  "enablePullRequests": true,
  "remediationPullRequestsEnabled": true,
  "enableStatusChecks": true,
  "statusChecksEnabled": true,
  "pullRequestCommentingEnabled": true,
  "sourceControlEvaluationsEnabled": true,
  "sourceControlScanTarget": "string",
  "sshEnabled": true,
  "commitStatusEnabled": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/sourceControl/{ownerType}/{internalOwnerId}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/sourceControl/{ownerType}/{internalOwnerId}`

> Body parameter

```json
{
  "id": "string",
  "ownerId": "string",
  "repositoryUrl": "string",
  "username": "string",
  "token": "string",
  "provider": "string",
  "baseBranch": "string",
  "enablePullRequests": true,
  "remediationPullRequestsEnabled": true,
  "enableStatusChecks": true,
  "statusChecksEnabled": true,
  "pullRequestCommentingEnabled": true,
  "sourceControlEvaluationsEnabled": true,
  "sourceControlScanTarget": "string",
  "sshEnabled": true,
  "commitStatusEnabled": true
}
```

<h3 id="updatesourcecontrol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|internalOwnerId|path|string|true|none|
|body|body|[ApiSourceControlDTO](#schemaapisourcecontroldto)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "id": "string",
  "ownerId": "string",
  "repositoryUrl": "string",
  "username": "string",
  "token": "string",
  "provider": "string",
  "baseBranch": "string",
  "enablePullRequests": true,
  "remediationPullRequestsEnabled": true,
  "enableStatusChecks": true,
  "statusChecksEnabled": true,
  "pullRequestCommentingEnabled": true,
  "sourceControlEvaluationsEnabled": true,
  "sourceControlScanTarget": "string",
  "sshEnabled": true,
  "commitStatusEnabled": true
}
```

<h3 id="updatesourcecontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiSourceControlDTO](#schemaapisourcecontroldto)|

<aside class="success">
This operation does not require authentication
</aside>

## addSourceControl

<a id="opIdaddSourceControl"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/sourceControl/{ownerType}/{internalOwnerId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/sourceControl/{ownerType}/{internalOwnerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/sourceControl/{ownerType}/{internalOwnerId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "id": "string",
  "ownerId": "string",
  "repositoryUrl": "string",
  "username": "string",
  "token": "string",
  "provider": "string",
  "baseBranch": "string",
  "enablePullRequests": true,
  "remediationPullRequestsEnabled": true,
  "enableStatusChecks": true,
  "statusChecksEnabled": true,
  "pullRequestCommentingEnabled": true,
  "sourceControlEvaluationsEnabled": true,
  "sourceControlScanTarget": "string",
  "sshEnabled": true,
  "commitStatusEnabled": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/sourceControl/{ownerType}/{internalOwnerId}',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/sourceControl/{ownerType}/{internalOwnerId}`

> Body parameter

```json
{
  "id": "string",
  "ownerId": "string",
  "repositoryUrl": "string",
  "username": "string",
  "token": "string",
  "provider": "string",
  "baseBranch": "string",
  "enablePullRequests": true,
  "remediationPullRequestsEnabled": true,
  "enableStatusChecks": true,
  "statusChecksEnabled": true,
  "pullRequestCommentingEnabled": true,
  "sourceControlEvaluationsEnabled": true,
  "sourceControlScanTarget": "string",
  "sshEnabled": true,
  "commitStatusEnabled": true
}
```

<h3 id="addsourcecontrol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|internalOwnerId|path|string|true|none|
|body|body|[ApiSourceControlDTO](#schemaapisourcecontroldto)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "id": "string",
  "ownerId": "string",
  "repositoryUrl": "string",
  "username": "string",
  "token": "string",
  "provider": "string",
  "baseBranch": "string",
  "enablePullRequests": true,
  "remediationPullRequestsEnabled": true,
  "enableStatusChecks": true,
  "statusChecksEnabled": true,
  "pullRequestCommentingEnabled": true,
  "sourceControlEvaluationsEnabled": true,
  "sourceControlScanTarget": "string",
  "sshEnabled": true,
  "commitStatusEnabled": true
}
```

<h3 id="addsourcecontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiSourceControlDTO](#schemaapisourcecontroldto)|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSourceControl

<a id="opIddeleteSourceControl"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/sourceControl/{ownerType}/{internalOwnerId} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/sourceControl/{ownerType}/{internalOwnerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/sourceControl/{ownerType}/{internalOwnerId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/sourceControl/{ownerType}/{internalOwnerId}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/sourceControl/{ownerType}/{internalOwnerId}`

<h3 id="deletesourcecontrol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|internalOwnerId|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

<h3 id="deletesourcecontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deletesourcecontrol-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-source-control-metrics">Source Control Metrics</h1>

## getSourceControl

<a id="opIdgetSourceControl"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/sourceControlMetrics/{ownerType}/{internalOwnerId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/sourceControlMetrics/{ownerType}/{internalOwnerId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/sourceControlMetrics/{ownerType}/{internalOwnerId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/sourceControlMetrics/{ownerType}/{internalOwnerId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/sourceControlMetrics/{ownerType}/{internalOwnerId}`

<h3 id="getsourcecontrol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerType|path|string|true|none|
|internalOwnerId|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "results": [
    {
      "startTime": "2019-08-24T14:15:22Z",
      "title": "string",
      "exceptionThrown": true,
      "successful": true,
      "totalTime": 0,
      "reasoning": "string"
    }
  ]
}
```

<h3 id="getsourcecontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiPullRequestResults](#schemaapipullrequestresults)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-spdx">Spdx</h1>

## getByScanId

<a id="opIdgetByScanId"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/spdx/{applicationId}/reports/{scanId} \
  -H 'Accept: application/xml'

```

```java
URL obj = new URL("/api/v2/spdx/{applicationId}/reports/{scanId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/xml'
}

r = requests.get('/api/v2/spdx/{applicationId}/reports/{scanId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/xml'
};

fetch('/api/v2/spdx/{applicationId}/reports/{scanId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/spdx/{applicationId}/reports/{scanId}`

<h3 id="getbyscanid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|none|
|scanId|path|string|true|none|
|format|query|string|false|none|
|generateCycloneDx|query|boolean|false|none|
|spdxVersion|query|string|false|none|

> Example responses

<h3 id="getbyscanid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="getbyscanid-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getLatestForStage

<a id="opIdgetLatestForStage"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/spdx/{applicationId}/stages/{stageId} \
  -H 'Accept: application/xml'

```

```java
URL obj = new URL("/api/v2/spdx/{applicationId}/stages/{stageId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/xml'
}

r = requests.get('/api/v2/spdx/{applicationId}/stages/{stageId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/xml'
};

fetch('/api/v2/spdx/{applicationId}/stages/{stageId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/spdx/{applicationId}/stages/{stageId}`

<h3 id="getlatestforstage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|none|
|stageId|path|string|true|none|
|format|query|string|false|none|
|generateCycloneDx|query|boolean|false|none|
|spdxVersion|query|string|false|none|

> Example responses

<h3 id="getlatestforstage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="getlatestforstage-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-telemetry">Telemetry</h1>

## postExternalTelemetry

<a id="opIdpostExternalTelemetry"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/telemetry \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'user-agent: string'

```

```java
URL obj = new URL("/api/v2/telemetry");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*',
  'user-agent': 'string'
}

r = requests.post('/api/v2/telemetry', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "property1": "string",
  "property2": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'user-agent':'string'
};

fetch('/api/v2/telemetry',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/telemetry`

> Body parameter

```json
{
  "property1": "string",
  "property2": "string"
}
```

<h3 id="postexternaltelemetry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user-agent|header|string|false|none|
|body|body|object|false|none|
|» **additionalProperties**|body|string|false|none|

> Example responses

<h3 id="postexternaltelemetry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="postexternaltelemetry-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-user-tokens">User Tokens</h1>

## createUserToken

<a id="opIdcreateUserToken"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/userTokens/currentUser \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/userTokens/currentUser");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.post('/api/v2/userTokens/currentUser', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/userTokens/currentUser',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/userTokens/currentUser`

> Example responses

> default Response

```json
{
  "userCode": "string",
  "passCode": "string",
  "username": "string",
  "realm": "string"
}
```

<h3 id="createusertoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiUserTokenDTO](#schemaapiusertokendto)|

<aside class="success">
This operation does not require authentication
</aside>

## deleteCurrentUserToken

<a id="opIddeleteCurrentUserToken"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/userTokens/currentUser \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/userTokens/currentUser");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/userTokens/currentUser', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/userTokens/currentUser',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/userTokens/currentUser`

> Example responses

<h3 id="deletecurrentusertoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deletecurrentusertoken-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## deleteUserTokenByUserCode

<a id="opIddeleteUserTokenByUserCode"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/userTokens/userCode/{userCode} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/userTokens/userCode/{userCode}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/userTokens/userCode/{userCode}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/userTokens/userCode/{userCode}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/userTokens/userCode/{userCode}`

<h3 id="deleteusertokenbyusercode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userCode|path|string|true|none|

> Example responses

<h3 id="deleteusertokenbyusercode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deleteusertokenbyusercode-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getUserTokenByUsernameAndRealmId

<a id="opIdgetUserTokenByUsernameAndRealmId"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/userTokens/{username} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/userTokens/{username}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/userTokens/{username}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/userTokens/{username}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/userTokens/{username}`

<h3 id="getusertokenbyusernameandrealmid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|realm|query|string|false|none|

> Example responses

> default Response

```json
{
  "userCode": "string",
  "passCode": "string",
  "username": "string",
  "realm": "string"
}
```

<h3 id="getusertokenbyusernameandrealmid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiUserTokenDTO](#schemaapiusertokendto)|

<aside class="success">
This operation does not require authentication
</aside>

## getUserTokenExistsForCurrentUser

<a id="opIdgetUserTokenExistsForCurrentUser"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/userTokens/currentUser/hasToken \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/userTokens/currentUser/hasToken");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/userTokens/currentUser/hasToken', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/userTokens/currentUser/hasToken',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/userTokens/currentUser/hasToken`

> Example responses

> default Response

```json
{
  "userTokenExists": true
}
```

<h3 id="getusertokenexistsforcurrentuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiUserTokenExistsDTO](#schemaapiusertokenexistsdto)|

<aside class="success">
This operation does not require authentication
</aside>

## getUserTokensByCreatedBetweenAndRealmId

<a id="opIdgetUserTokensByCreatedBetweenAndRealmId"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/userTokens \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/userTokens");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/userTokens', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/userTokens',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/userTokens`

<h3 id="getusertokensbycreatedbetweenandrealmid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|createdAfter|query|string|false|none|
|createdBefore|query|string|false|none|
|realm|query|string|false|none|

> Example responses

> default Response

```json
[
  {
    "userCode": "string",
    "passCode": "string",
    "username": "string",
    "realm": "string"
  }
]
```

<h3 id="getusertokensbycreatedbetweenandrealmid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|Inline|

<h3 id="getusertokensbycreatedbetweenandrealmid-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiUserTokenDTO](#schemaapiusertokendto)]|false|none|none|
|» userCode|string|false|none|none|
|» passCode|string|false|none|none|
|» username|string|false|none|none|
|» realm|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## purgeUserTokens

<a id="opIdpurgeUserTokens"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/userTokens/purge \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/userTokens/purge");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/userTokens/purge', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/userTokens/purge',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/userTokens/purge`

> Example responses

<h3 id="purgeusertokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="purgeusertokens-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-users">Users</h1>

## getAll_2

<a id="opIdgetAll_2"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/users \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/users");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/users', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/users',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/users`

<h3 id="getall_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|realm|query|string|false|none|

> Example responses

> default Response

```json
{
  "users": [
    {
      "username": "string",
      "password": "string",
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "realm": "string"
    }
  ]
}
```

<h3 id="getall_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiUserListDTO](#schemaapiuserlistdto)|

<aside class="success">
This operation does not require authentication
</aside>

## add

<a id="opIdadd"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/users \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/users");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': '*/*'
}

r = requests.post('/api/v2/users', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "username": "string",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "realm": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/api/v2/users',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/users`

> Body parameter

```json
{
  "username": "string",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "realm": "string"
}
```

<h3 id="add-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiUserDTO](#schemaapiuserdto)|false|none|

> Example responses

<h3 id="add-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="add-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get_1

<a id="opIdget_1"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/users/{username} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/users/{username}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/users/{username}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/users/{username}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/users/{username}`

<h3 id="get_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|realm|query|string|false|none|

> Example responses

> default Response

```json
{
  "username": "string",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "realm": "string"
}
```

<h3 id="get_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiUserDTO](#schemaapiuserdto)|

<aside class="success">
This operation does not require authentication
</aside>

## update

<a id="opIdupdate"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/users/{username} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/users/{username}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('/api/v2/users/{username}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "username": "string",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "realm": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/users/{username}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/users/{username}`

> Body parameter

```json
{
  "username": "string",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "realm": "string"
}
```

<h3 id="update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|body|body|[ApiUserDTO](#schemaapiuserdto)|false|none|

> Example responses

> default Response

```json
{
  "username": "string",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "realm": "string"
}
```

<h3 id="update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[ApiUserDTO](#schemaapiuserdto)|

<aside class="success">
This operation does not require authentication
</aside>

## delete_1

<a id="opIddelete_1"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/users/{username} \
  -H 'Accept: */*'

```

```java
URL obj = new URL("/api/v2/users/{username}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': '*/*'
}

r = requests.delete('/api/v2/users/{username}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'*/*'
};

fetch('/api/v2/users/{username}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/users/{username}`

<h3 id="delete_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|realm|query|string|false|none|

> Example responses

<h3 id="delete_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="delete_1-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-vulnerabilities">Vulnerabilities</h1>

## getSecurityVulnerabilityDetails

<a id="opIdgetSecurityVulnerabilityDetails"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/vulnerabilities/{refId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/vulnerabilities/{refId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/vulnerabilities/{refId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/vulnerabilities/{refId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/vulnerabilities/{refId}`

<h3 id="getsecurityvulnerabilitydetails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|refId|path|string|true|none|
|componentIdentifier|query|[ComponentIdentifier](#schemacomponentidentifier)|false|none|
|identificationSource|query|string|false|none|
|scanId|query|string|false|none|
|ownerType|query|string|false|none|
|ownerId|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

> Example responses

> default Response

```json
{
  "identifier": "string",
  "vulnIds": [
    "string"
  ],
  "vulnerabilityLink": "http://example.com",
  "source": {
    "shortName": "string",
    "longName": "string"
  },
  "mainSeverity": {
    "source": "string",
    "sourceLabel": "string",
    "score": 0.1,
    "vector": "string"
  },
  "severityScores": [
    {
      "source": "string",
      "sourceLabel": "string",
      "score": 0.1,
      "vector": "string"
    }
  ],
  "weakness": {
    "cweSource": "string",
    "cweIds": [
      {
        "id": "string",
        "uri": "http://example.com"
      }
    ]
  },
  "categories": [
    "string"
  ],
  "description": "string",
  "explanationMarkdown": "string",
  "componentExplanationMarkdown": "string",
  "detectionMarkdown": "string",
  "componentDetectionMarkdown": "string",
  "recommendationMarkdown": "string",
  "componentRecommendationMarkdown": "string",
  "rootCauses": [
    {
      "listOfPaths": [
        "string"
      ],
      "versionRange": "string"
    }
  ],
  "advisories": [
    {
      "referenceType": "string",
      "url": "string"
    }
  ],
  "vulnerableVersionRanges": [
    "string"
  ],
  "researchType": "FAST_TRACK",
  "isAdvancedVulnerabilityDetection": true,
  "customData": {
    "remediation": "string",
    "cweId": "string",
    "cvssVector": "string",
    "cvssSeverity": 0.1
  }
}
```

<h3 id="getsecurityvulnerabilitydetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|[SecurityVulnerabilityData](#schemasecurityvulnerabilitydata)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-sbom">sbom</h1>

## getSbomVersion

<a id="opIdgetSbomVersion"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/sbom/applications/{applicationId}/versions/{version} \
  -H 'Accept: application/json|application/xml' \
  -H 'Accept: string'

```

```java
URL obj = new URL("/api/v2/sbom/applications/{applicationId}/versions/{version}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json|application/xml',
  'Accept': 'string'
}

r = requests.get('/api/v2/sbom/applications/{applicationId}/versions/{version}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json|application/xml',
  'Accept':'string'
};

fetch('/api/v2/sbom/applications/{applicationId}/versions/{version}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/sbom/applications/{applicationId}/versions/{version}`

*Gets a sbom version*

Downloads a specific sbom version in its original or current form

<h3 id="getsbomversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The internal id of the application|
|version|path|string|true|URL Encoded version value of the sbom|
|state|query|string|false|The state of the sbom version. Allowed values [original|current]. default = current|
|specification|query|string|false|Target specification of the sbom. Allowed values [cyclonedx1.5|spdx2.3]. default = cyclonedx1.5|
|Accept|header|string|false|Output format(json/xml) of the sbom. Changing the output format only applicable when downloading the current form of the SBOM. The original sbom will always return in the original form that it was ingested. When requesting `current` form and if this header value is not present the sbom will be returned in its original ingested format. Allowed values {'application/json'|'application/xml'}. default = null|

> Example responses

<h3 id="getsbomversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Content of the sbom|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Supplied sbom version not found|None|

<h3 id="getsbomversion-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## deleteSbomVersion

<a id="opIddeleteSbomVersion"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/v2/sbom/applications/{applicationId}/versions/{version}

```

```java
URL obj = new URL("/api/v2/sbom/applications/{applicationId}/versions/{version}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests

r = requests.delete('/api/v2/sbom/applications/{applicationId}/versions/{version}')

print(r.json())

```

```javascript

fetch('/api/v2/sbom/applications/{applicationId}/versions/{version}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /api/v2/sbom/applications/{applicationId}/versions/{version}`

*Delete sbom version*

Deletes a specific sbom version including it's original contents and updates

<h3 id="deletesbomversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The internal id of the application|
|version|path|string|true|URL Encoded version value of the sbom to be deleted|

<h3 id="deletesbomversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Delete successful|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Supplied sbom version not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## getActiveSbomVersionListByApplication

<a id="opIdgetActiveSbomVersionListByApplication"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/sbom/applications/{applicationId}/versions \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/sbom/applications/{applicationId}/versions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/sbom/applications/{applicationId}/versions', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/sbom/applications/{applicationId}/versions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/sbom/applications/{applicationId}/versions`

*Gets a list of active sbom versions by application id*

Gets a list of active sbom versions by application id

<h3 id="getactivesbomversionlistbyapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The internal id of the application|

> Example responses

<h3 id="getactivesbomversionlistbyapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|list of the active sbom versions by application id|None|

<h3 id="getactivesbomversionlistbyapplication-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getImportStatus

<a id="opIdgetImportStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/sbom/applications/{applicationId}/status/{importRequestId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/sbom/applications/{applicationId}/status/{importRequestId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/sbom/applications/{applicationId}/status/{importRequestId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/sbom/applications/{applicationId}/status/{importRequestId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/sbom/applications/{applicationId}/status/{importRequestId}`

*Get sbom import status*

Gets status of a sbom import.

<h3 id="getimportstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The internal id of the application|
|importRequestId|path|string|true|The id of the import request|

> Example responses

<h3 id="getimportstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Sbom import completed successfully.|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Sbom import still in progress.|None|

<h3 id="getimportstatus-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getSbomComponents

<a id="opIdgetSbomComponents"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/sbom/applications/{applicationId}/versions/{version}/components \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/sbom/applications/{applicationId}/versions/{version}/components");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/sbom/applications/{applicationId}/versions/{version}/components', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/sbom/applications/{applicationId}/versions/{version}/components',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/sbom/applications/{applicationId}/versions/{version}/components`

*Gets the components found in a specific sbom version*

Lists the components in a specific sbom version with data about vulnerabilities and licenses

<h3 id="getsbomcomponents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The internal id of the application|
|version|path|string|true|URL Encoded version value of the sbom to query its components|
|vulnerabilityThreatLevels|query|array[string]|false|If provided, filter components by the given threat level on their vulnerabilities|
|dependencyTypes|query|array[string]|false|If provided, filter components by the given dependency types|
|sortBy|query|string|false|Criteria to sort the results. default = VULNERABILITIES|
|asc|query|boolean|false|Order mode ASC=true or DESC=false. default = false|
|page|query|integer(int32)|false|Current page number. default = 1|
|pageSize|query|integer(int32)|false|Number of items to return by page. default = 50|

#### Enumerated Values

|Parameter|Value|
|---|---|
|vulnerabilityThreatLevels|NONE|
|vulnerabilityThreatLevels|LOW|
|vulnerabilityThreatLevels|MEDIUM|
|vulnerabilityThreatLevels|HIGH|
|vulnerabilityThreatLevels|CRITICAL|
|dependencyTypes|DIRECT|
|dependencyTypes|TRANSITIVE|
|dependencyTypes|UNSPECIFIED|
|sortBy|TYPE|
|sortBy|PERCENTAGE_ANNOTATED|
|sortBy|VULNERABILITIES|

> Example responses

<h3 id="getsbomcomponents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|List of components in the sbom|None|

<h3 id="getsbomcomponents-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getSbomMetadataSummaryForApplication

<a id="opIdgetSbomMetadataSummaryForApplication"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/sbom/applications/{applicationId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/sbom/applications/{applicationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/sbom/applications/{applicationId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/sbom/applications/{applicationId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/sbom/applications/{applicationId}`

*Gets a paginated list of SBOMs for an application*

Gets a paginated list of SBOMs for an application

<h3 id="getsbommetadatasummaryforapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The internal id of the application|
|sortByDate|query|string|false|Sort results by import date. Allowed values [asc|desc]. default = asc|
|pageSize|query|integer(int32)|false|Number of items to return by page. default = 10|
|page|query|integer(int32)|false|Current page number. default = 1|

> Example responses

<h3 id="getsbommetadatasummaryforapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|list of the sboms|None|

<h3 id="getsbommetadatasummaryforapplication-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## importSbom

<a id="opIdimportSbom"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /api/v2/sbom/import \
  -H 'Content-Type: */*' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/sbom/import");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': '*/*',
  'Accept': 'application/json'
}

r = requests.post('/api/v2/sbom/import', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "applicationId": "string",
  "file": {}
}';
const headers = {
  'Content-Type':'*/*',
  'Accept':'application/json'
};

fetch('/api/v2/sbom/import',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /api/v2/sbom/import`

*Import a new sbom version*

Imports a new sbom version to an existing application

> Body parameter

<h3 id="importsbom-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» applicationId|body|string|true|The internal id of the application|
|» file|body|object|false|none|

> Example responses

<h3 id="importsbom-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Import successful. URL to check the status of the import returned|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid/Unsupported data provided for sbom import|None|

<h3 id="importsbom-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## saveVulnerabilityAnalysis

<a id="opIdsaveVulnerabilityAnalysis"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /api/v2/sbom/applications/{applicationId}/versions/{version}/vulnerability/{refId}/analysis \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/sbom/applications/{applicationId}/versions/{version}/vulnerability/{refId}/analysis");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('/api/v2/sbom/applications/{applicationId}/versions/{version}/vulnerability/{refId}/analysis', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "componentLocator": {
    "hash": "string",
    "packageUrl": "string"
  },
  "vulnerabilityAnalysis": {
    "state": "resolved",
    "justification": "code_not_present",
    "response": "can_not_fix",
    "detail": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/api/v2/sbom/applications/{applicationId}/versions/{version}/vulnerability/{refId}/analysis',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /api/v2/sbom/applications/{applicationId}/versions/{version}/vulnerability/{refId}/analysis`

*Updates a vulnerability analysis annotation for a specific SBOM vulnerability*

Updates a vulnerability analysis annotation for a specific SBOM vulnerability

> Body parameter

```json
{
  "componentLocator": {
    "hash": "string",
    "packageUrl": "string"
  },
  "vulnerabilityAnalysis": {
    "state": "resolved",
    "justification": "code_not_present",
    "response": "can_not_fix",
    "detail": "string"
  }
}
```

<h3 id="savevulnerabilityanalysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The internal id of the application|
|version|path|string|true|The version for a specific SBOM where the vulnerability is present|
|refId|path|string|true|The vulnerability id of a vulnerability|
|body|body|[SBOM vulnerability analysis request](#schemasbom vulnerability analysis request)|true|Vulnerability analysis details with component information|

> Example responses

<h3 id="savevulnerabilityanalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Vulnerability analysis annotation updated successfully|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Target vulnerability not found|None|

<h3 id="savevulnerabilityanalysis-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="sonatype-lifecycle-public-rest-api-sbom-dashboard">sbom dashboard</h1>

## getApplicationsHistoryMetric

<a id="opIdgetApplicationsHistoryMetric"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/sbom/dashboard/sbomsHistoryMetrics \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/sbom/dashboard/sbomsHistoryMetrics");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/sbom/dashboard/sbomsHistoryMetrics', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/sbom/dashboard/sbomsHistoryMetrics',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/sbom/dashboard/sbomsHistoryMetrics`

*Gets application history metrics*

Queries how many SBOMs applications have been analyzed

> Example responses

<h3 id="getapplicationshistorymetric-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Total of SBOMs applications analyzed|None|

<h3 id="getapplicationshistorymetric-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getSbomsAnalyzedMetrics

<a id="opIdgetSbomsAnalyzedMetrics"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/sbom/dashboard/sbomsAnalyzed \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/sbom/dashboard/sbomsAnalyzed");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/sbom/dashboard/sbomsAnalyzed', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/sbom/dashboard/sbomsAnalyzed',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/sbom/dashboard/sbomsAnalyzed`

*Gets total of SBOMs analyzed and the threshold in the product license*

Queries how many SBOMs have been analyzed and the threshold in the product license

> Example responses

<h3 id="getsbomsanalyzedmetrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Total of SBOMs analyzed and the threshold in the product license|None|

<h3 id="getsbomsanalyzedmetrics-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getVulnerabilitiesByThreatLevel

<a id="opIdgetVulnerabilitiesByThreatLevel"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v2/sbom/dashboard/vulnerabilitiesByThreatLevel \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/api/v2/sbom/dashboard/vulnerabilitiesByThreatLevel");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/api/v2/sbom/dashboard/vulnerabilitiesByThreatLevel', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/api/v2/sbom/dashboard/vulnerabilitiesByThreatLevel',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /api/v2/sbom/dashboard/vulnerabilitiesByThreatLevel`

*Gets counters of vulnerabilities and annotations by threat level*

Queries how many vulnerabilities and annotations have been found by each threat level

> Example responses

<h3 id="getvulnerabilitiesbythreatlevel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Counters of vulnerabilities and annotations by threat level|None|

<h3 id="getvulnerabilitiesbythreatlevel-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ApiComponentIdentifierDTOV2">ApiComponentIdentifierDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentidentifierdtov2"></a>
<a id="schema_ApiComponentIdentifierDTOV2"></a>
<a id="tocSapicomponentidentifierdtov2"></a>
<a id="tocsapicomponentidentifierdtov2"></a>

```json
{
  "format": "string",
  "coordinates": {
    "property1": "string",
    "property2": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|none|
|coordinates|object|false|none|none|
|» **additionalProperties**|string|false|none|none|

<h2 id="tocS_GroupingByDTO">GroupingByDTO</h2>
<!-- backwards compatibility -->
<a id="schemagroupingbydto"></a>
<a id="schema_GroupingByDTO"></a>
<a id="tocSgroupingbydto"></a>
<a id="tocsgroupingbydto"></a>

```json
{
  "groupIdentifier": "itemType",
  "groupBy": "string",
  "additionalInfo": "string",
  "searchResultItemDTOS": [
    {
      "itemType": "string",
      "organizationId": "string",
      "organizationName": "string",
      "applicationId": "string",
      "applicationPublicId": "string",
      "applicationName": "string",
      "applicationVersion": "string",
      "sbomSpecification": "string",
      "policyEvaluationStage": "string",
      "reportId": "string",
      "componentHash": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "componentName": "string",
      "vulnerabilityId": "string",
      "vulnerabilityDescription": "string",
      "vulnerabilityStatus": "string",
      "applicationCategoryId": "string",
      "applicationCategoryName": "string",
      "applicationCategoryColor": "string",
      "applicationCategoryDescription": "string",
      "componentLabelId": "string",
      "componentLabelName": "string",
      "componentLabelColor": "string",
      "componentLabelDescription": "string",
      "policyId": "string",
      "policyName": "string",
      "policyThreatCategory": "string",
      "policyThreatLevel": 0,
      "resultIndex": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupIdentifier|string|false|none|none|
|groupBy|string|false|none|none|
|additionalInfo|string|false|none|none|
|searchResultItemDTOS|[[SearchResultItemDTO](#schemasearchresultitemdto)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|groupIdentifier|itemType|
|groupIdentifier|organizationId|
|groupIdentifier|organizationName|
|groupIdentifier|applicationId|
|groupIdentifier|applicationName|
|groupIdentifier|applicationPublicId|
|groupIdentifier|policyEvaluationStage|
|groupIdentifier|applicationVersion|
|groupIdentifier|reportId|
|groupIdentifier|componentHash|
|groupIdentifier|componentFormat|
|groupIdentifier|componentName|
|groupIdentifier|componentCoordinate|
|groupIdentifier|vulnerabilityId|
|groupIdentifier|vulnerabilitySeverity|
|groupIdentifier|vulnerabilityStatus|
|groupIdentifier|vulnerabilityDescription|
|groupIdentifier|applicationCategoryId|
|groupIdentifier|applicationCategoryName|
|groupIdentifier|applicationCategoryColor|
|groupIdentifier|applicationCategoryDescription|
|groupIdentifier|componentLabelId|
|groupIdentifier|componentLabelName|
|groupIdentifier|componentLabelColor|
|groupIdentifier|componentLabelDescription|
|groupIdentifier|policyId|
|groupIdentifier|policyName|
|groupIdentifier|policyThreatCategory|
|groupIdentifier|policyThreatLevel|
|groupIdentifier|parentOrganizationName|
|groupIdentifier|parentOrganizationId|
|groupIdentifier|sbomSpecification|

<h2 id="tocS_SearchResultDTO">SearchResultDTO</h2>
<!-- backwards compatibility -->
<a id="schemasearchresultdto"></a>
<a id="schema_SearchResultDTO"></a>
<a id="tocSsearchresultdto"></a>
<a id="tocssearchresultdto"></a>

```json
{
  "searchQuery": "string",
  "page": 0,
  "pageSize": 0,
  "totalNumberOfHits": 0,
  "isExactTotalNumberOfHits": true,
  "groupingByDTOS": [
    {
      "groupIdentifier": "itemType",
      "groupBy": "string",
      "additionalInfo": "string",
      "searchResultItemDTOS": [
        {
          "itemType": "string",
          "organizationId": "string",
          "organizationName": "string",
          "applicationId": "string",
          "applicationPublicId": "string",
          "applicationName": "string",
          "applicationVersion": "string",
          "sbomSpecification": "string",
          "policyEvaluationStage": "string",
          "reportId": "string",
          "componentHash": "string",
          "componentIdentifier": {
            "format": "string",
            "coordinates": {
              "property1": "string",
              "property2": "string"
            }
          },
          "componentName": "string",
          "vulnerabilityId": "string",
          "vulnerabilityDescription": "string",
          "vulnerabilityStatus": "string",
          "applicationCategoryId": "string",
          "applicationCategoryName": "string",
          "applicationCategoryColor": "string",
          "applicationCategoryDescription": "string",
          "componentLabelId": "string",
          "componentLabelName": "string",
          "componentLabelColor": "string",
          "componentLabelDescription": "string",
          "policyId": "string",
          "policyName": "string",
          "policyThreatCategory": "string",
          "policyThreatLevel": 0,
          "resultIndex": 0
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searchQuery|string|false|none|none|
|page|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|totalNumberOfHits|integer(int32)|false|none|none|
|isExactTotalNumberOfHits|boolean|false|none|none|
|groupingByDTOS|[[GroupingByDTO](#schemagroupingbydto)]|false|none|none|

<h2 id="tocS_SearchResultItemDTO">SearchResultItemDTO</h2>
<!-- backwards compatibility -->
<a id="schemasearchresultitemdto"></a>
<a id="schema_SearchResultItemDTO"></a>
<a id="tocSsearchresultitemdto"></a>
<a id="tocssearchresultitemdto"></a>

```json
{
  "itemType": "string",
  "organizationId": "string",
  "organizationName": "string",
  "applicationId": "string",
  "applicationPublicId": "string",
  "applicationName": "string",
  "applicationVersion": "string",
  "sbomSpecification": "string",
  "policyEvaluationStage": "string",
  "reportId": "string",
  "componentHash": "string",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "componentName": "string",
  "vulnerabilityId": "string",
  "vulnerabilityDescription": "string",
  "vulnerabilityStatus": "string",
  "applicationCategoryId": "string",
  "applicationCategoryName": "string",
  "applicationCategoryColor": "string",
  "applicationCategoryDescription": "string",
  "componentLabelId": "string",
  "componentLabelName": "string",
  "componentLabelColor": "string",
  "componentLabelDescription": "string",
  "policyId": "string",
  "policyName": "string",
  "policyThreatCategory": "string",
  "policyThreatLevel": 0,
  "resultIndex": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemType|string|false|none|none|
|organizationId|string|false|none|none|
|organizationName|string|false|none|none|
|applicationId|string|false|none|none|
|applicationPublicId|string|false|none|none|
|applicationName|string|false|none|none|
|applicationVersion|string|false|none|none|
|sbomSpecification|string|false|none|none|
|policyEvaluationStage|string|false|none|none|
|reportId|string|false|none|none|
|componentHash|string|false|none|none|
|componentIdentifier|[ApiComponentIdentifierDTOV2](#schemaapicomponentidentifierdtov2)|false|none|none|
|componentName|string|false|none|none|
|vulnerabilityId|string|false|none|none|
|vulnerabilityDescription|string|false|none|none|
|vulnerabilityStatus|string|false|none|none|
|applicationCategoryId|string|false|none|none|
|applicationCategoryName|string|false|none|none|
|applicationCategoryColor|string|false|none|none|
|applicationCategoryDescription|string|false|none|none|
|componentLabelId|string|false|none|none|
|componentLabelName|string|false|none|none|
|componentLabelColor|string|false|none|none|
|componentLabelDescription|string|false|none|none|
|policyId|string|false|none|none|
|policyName|string|false|none|none|
|policyThreatCategory|string|false|none|none|
|policyThreatLevel|integer(int32)|false|none|none|
|resultIndex|integer(int32)|false|none|none|

<h2 id="tocS_ApiApplicationCategoryDTO">ApiApplicationCategoryDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiapplicationcategorydto"></a>
<a id="schema_ApiApplicationCategoryDTO"></a>
<a id="tocSapiapplicationcategorydto"></a>
<a id="tocsapiapplicationcategorydto"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "organizationId": "string",
  "color": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|description|string|false|none|none|
|organizationId|string|false|none|none|
|color|string|false|none|none|

<h2 id="tocS_ApplicableTagsDTO">ApplicableTagsDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapplicabletagsdto"></a>
<a id="schema_ApplicableTagsDTO"></a>
<a id="tocSapplicabletagsdto"></a>
<a id="tocsapplicabletagsdto"></a>

```json
{
  "applicationCategoriesByOwner": [
    {
      "ownerId": "string",
      "ownerName": "string",
      "ownerType": "application",
      "applicationCategories": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "organizationId": "string",
          "color": "string"
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationCategoriesByOwner|[[TagsByOwnerDTO](#schematagsbyownerdto)]|false|none|none|

<h2 id="tocS_TagsByOwnerDTO">TagsByOwnerDTO</h2>
<!-- backwards compatibility -->
<a id="schematagsbyownerdto"></a>
<a id="schema_TagsByOwnerDTO"></a>
<a id="tocStagsbyownerdto"></a>
<a id="tocstagsbyownerdto"></a>

```json
{
  "ownerId": "string",
  "ownerName": "string",
  "ownerType": "application",
  "applicationCategories": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "organizationId": "string",
      "color": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ownerId|string|false|none|none|
|ownerName|string|false|none|none|
|ownerType|string|false|none|none|
|applicationCategories|[[ApiApplicationCategoryDTO](#schemaapiapplicationcategorydto)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

<h2 id="tocS_PolicyTag">PolicyTag</h2>
<!-- backwards compatibility -->
<a id="schemapolicytag"></a>
<a id="schema_PolicyTag"></a>
<a id="tocSpolicytag"></a>
<a id="tocspolicytag"></a>

```json
{
  "id": "string",
  "policyId": "string",
  "tagId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|policyId|string|false|none|none|
|tagId|string|false|none|none|

<h2 id="tocS_ApplicationTag">ApplicationTag</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationtag"></a>
<a id="schema_ApplicationTag"></a>
<a id="tocSapplicationtag"></a>
<a id="tocsapplicationtag"></a>

```json
{
  "id": "string",
  "applicationId": "string",
  "tagId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|applicationId|string|false|none|none|
|tagId|string|false|none|none|

<h2 id="tocS_ApplicationTagsByOwnerDTO">ApplicationTagsByOwnerDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationtagsbyownerdto"></a>
<a id="schema_ApplicationTagsByOwnerDTO"></a>
<a id="tocSapplicationtagsbyownerdto"></a>
<a id="tocsapplicationtagsbyownerdto"></a>

```json
{
  "ownerId": "string",
  "ownerName": "string",
  "ownerType": "application",
  "applicationTags": [
    {
      "id": "string",
      "applicationId": "string",
      "tagId": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ownerId|string|false|none|none|
|ownerName|string|false|none|none|
|ownerType|string|false|none|none|
|applicationTags|[[ApplicationTag](#schemaapplicationtag)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

<h2 id="tocS_AppliedTagsDTO">AppliedTagsDTO</h2>
<!-- backwards compatibility -->
<a id="schemaappliedtagsdto"></a>
<a id="schema_AppliedTagsDTO"></a>
<a id="tocSappliedtagsdto"></a>
<a id="tocsappliedtagsdto"></a>

```json
{
  "applicationTagsByOwner": [
    {
      "ownerId": "string",
      "ownerName": "string",
      "ownerType": "application",
      "applicationTags": [
        {
          "id": "string",
          "applicationId": "string",
          "tagId": "string"
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationTagsByOwner|[[ApplicationTagsByOwnerDTO](#schemaapplicationtagsbyownerdto)]|false|none|none|

<h2 id="tocS_ApiApplicationDTO">ApiApplicationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiapplicationdto"></a>
<a id="schema_ApiApplicationDTO"></a>
<a id="tocSapiapplicationdto"></a>
<a id="tocsapiapplicationdto"></a>

```json
{
  "id": "string",
  "publicId": "string",
  "name": "string",
  "organizationId": "string",
  "contactUserName": "string",
  "applicationTags": [
    {
      "id": "string",
      "tagId": "string",
      "applicationId": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|publicId|string|false|none|none|
|name|string|false|none|none|
|organizationId|string|false|none|none|
|contactUserName|string|false|none|none|
|applicationTags|[[ApiApplicationTagDTO](#schemaapiapplicationtagdto)]|false|none|none|

<h2 id="tocS_ApiApplicationTagDTO">ApiApplicationTagDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiapplicationtagdto"></a>
<a id="schema_ApiApplicationTagDTO"></a>
<a id="tocSapiapplicationtagdto"></a>
<a id="tocsapiapplicationtagdto"></a>

```json
{
  "id": "string",
  "tagId": "string",
  "applicationId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|tagId|string|false|none|none|
|applicationId|string|false|none|none|

<h2 id="tocS_ApiApplicationListDTO">ApiApplicationListDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiapplicationlistdto"></a>
<a id="schema_ApiApplicationListDTO"></a>
<a id="tocSapiapplicationlistdto"></a>
<a id="tocsapiapplicationlistdto"></a>

```json
{
  "applications": [
    {
      "id": "string",
      "publicId": "string",
      "name": "string",
      "organizationId": "string",
      "contactUserName": "string",
      "applicationTags": [
        {
          "id": "string",
          "tagId": "string",
          "applicationId": "string"
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applications|[[ApiApplicationDTO](#schemaapiapplicationdto)]|false|none|none|

<h2 id="tocS_ApiMoveApplicationResponseDTOV2">ApiMoveApplicationResponseDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapimoveapplicationresponsedtov2"></a>
<a id="schema_ApiMoveApplicationResponseDTOV2"></a>
<a id="tocSapimoveapplicationresponsedtov2"></a>
<a id="tocsapimoveapplicationresponsedtov2"></a>

```json
{
  "warnings": [
    "string"
  ],
  "errors": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|warnings|[string]|false|none|none|
|errors|[string]|false|none|none|

<h2 id="tocS_ApiComponentDTOV2">ApiComponentDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentdtov2"></a>
<a id="schema_ApiComponentDTOV2"></a>
<a id="tocSapicomponentdtov2"></a>
<a id="tocsapicomponentdtov2"></a>

```json
{
  "packageUrl": "string",
  "hash": "string",
  "sha256": "string",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "displayName": "string",
  "proprietary": true,
  "thirdParty": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageUrl|string|false|none|none|
|hash|string|false|none|none|
|sha256|string|false|none|none|
|componentIdentifier|[ApiComponentIdentifierDTOV2](#schemaapicomponentidentifierdtov2)|false|none|none|
|displayName|string|false|none|none|
|proprietary|boolean|false|none|none|
|thirdParty|boolean|false|none|none|

<h2 id="tocS_ApiComponentDetailsDTOV2">ApiComponentDetailsDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentdetailsdtov2"></a>
<a id="schema_ApiComponentDetailsDTOV2"></a>
<a id="tocSapicomponentdetailsdtov2"></a>
<a id="tocsapicomponentdetailsdtov2"></a>

```json
{
  "component": {
    "packageUrl": "string",
    "hash": "string",
    "sha256": "string",
    "componentIdentifier": {
      "format": "string",
      "coordinates": {
        "property1": "string",
        "property2": "string"
      }
    },
    "displayName": "string",
    "proprietary": true,
    "thirdParty": true
  },
  "matchState": "string",
  "catalogDate": "2019-08-24T14:15:22Z",
  "relativePopularity": 0,
  "licenseData": {
    "declaredLicenses": [
      {
        "licenseId": "string",
        "licenseName": "string"
      }
    ],
    "observedLicenses": [
      {
        "licenseId": "string",
        "licenseName": "string"
      }
    ],
    "effectiveLicenses": [
      {
        "licenseId": "string",
        "licenseName": "string"
      }
    ],
    "overriddenLicenses": [
      {
        "licenseId": "string",
        "licenseName": "string"
      }
    ],
    "status": "string"
  },
  "integrityRating": "string",
  "hygieneRating": "string",
  "securityData": {
    "securityIssues": [
      {
        "source": "string",
        "reference": "string",
        "severity": 0.1,
        "status": "string",
        "url": "string",
        "threatCategory": "string",
        "cwe": "string",
        "cvssVector": "string",
        "cvssVectorSource": "string",
        "analysis": {
          "state": "string",
          "justification": "string",
          "response": "string",
          "detail": "string"
        }
      }
    ]
  },
  "policyData": {
    "policyViolations": [
      {
        "policyId": "string",
        "policyName": "string",
        "policyViolationId": "string",
        "threatLevel": 0,
        "constraintViolations": [
          {
            "constraintId": "string",
            "constraintName": "string",
            "reasons": [
              {
                "reason": "string",
                "reference": {
                  "value": "string",
                  "type": "SECURITY_VULNERABILITY_REFID"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  "projectData": {
    "firstReleaseDate": "2019-08-24T14:15:22Z",
    "lastReleaseDate": "2019-08-24T14:15:22Z",
    "projectMetadata": {
      "description": "string",
      "organization": "string"
    },
    "sourceControlManagement": {
      "scmUrl": "string",
      "scmMetadata": {
        "stars": 0,
        "forks": 0
      },
      "scmDetails": {
        "commitsPerMonth": 0,
        "uniqueDevsPerMonth": 0
      }
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|component|[ApiComponentDTOV2](#schemaapicomponentdtov2)|false|none|none|
|matchState|string|false|none|none|
|catalogDate|string(date-time)|false|none|none|
|relativePopularity|integer(int32)|false|none|none|
|licenseData|[ApiLicenseDataDTO](#schemaapilicensedatadto)|false|none|none|
|integrityRating|string|false|none|none|
|hygieneRating|string|false|none|none|
|securityData|[ApiSecurityDataDTO](#schemaapisecuritydatadto)|false|none|none|
|policyData|[ApiComponentPolicyViolationListDTOV2](#schemaapicomponentpolicyviolationlistdtov2)|false|none|none|
|projectData|[ApiComponentProjectDataDTO](#schemaapicomponentprojectdatadto)|false|none|none|

<h2 id="tocS_ApiComponentDetailsResultDTOV2">ApiComponentDetailsResultDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentdetailsresultdtov2"></a>
<a id="schema_ApiComponentDetailsResultDTOV2"></a>
<a id="tocSapicomponentdetailsresultdtov2"></a>
<a id="tocsapicomponentdetailsresultdtov2"></a>

```json
{
  "componentDetails": [
    {
      "component": {
        "packageUrl": "string",
        "hash": "string",
        "sha256": "string",
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "displayName": "string",
        "proprietary": true,
        "thirdParty": true
      },
      "matchState": "string",
      "catalogDate": "2019-08-24T14:15:22Z",
      "relativePopularity": 0,
      "licenseData": {
        "declaredLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "observedLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "effectiveLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "overriddenLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "status": "string"
      },
      "integrityRating": "string",
      "hygieneRating": "string",
      "securityData": {
        "securityIssues": [
          {
            "source": "string",
            "reference": "string",
            "severity": 0.1,
            "status": "string",
            "url": "string",
            "threatCategory": "string",
            "cwe": "string",
            "cvssVector": "string",
            "cvssVectorSource": "string",
            "analysis": {
              "state": "string",
              "justification": "string",
              "response": "string",
              "detail": "string"
            }
          }
        ]
      },
      "policyData": {
        "policyViolations": [
          {
            "policyId": "string",
            "policyName": "string",
            "policyViolationId": "string",
            "threatLevel": 0,
            "constraintViolations": [
              {
                "constraintId": "string",
                "constraintName": "string",
                "reasons": [
                  {
                    "reason": "string",
                    "reference": {}
                  }
                ]
              }
            ]
          }
        ]
      },
      "projectData": {
        "firstReleaseDate": "2019-08-24T14:15:22Z",
        "lastReleaseDate": "2019-08-24T14:15:22Z",
        "projectMetadata": {
          "description": "string",
          "organization": "string"
        },
        "sourceControlManagement": {
          "scmUrl": "string",
          "scmMetadata": {
            "stars": 0,
            "forks": 0
          },
          "scmDetails": {
            "commitsPerMonth": 0,
            "uniqueDevsPerMonth": 0
          }
        }
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentDetails|[[ApiComponentDetailsDTOV2](#schemaapicomponentdetailsdtov2)]|false|none|none|

<h2 id="tocS_ApiComponentPolicyViolationListDTOV2">ApiComponentPolicyViolationListDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentpolicyviolationlistdtov2"></a>
<a id="schema_ApiComponentPolicyViolationListDTOV2"></a>
<a id="tocSapicomponentpolicyviolationlistdtov2"></a>
<a id="tocsapicomponentpolicyviolationlistdtov2"></a>

```json
{
  "policyViolations": [
    {
      "policyId": "string",
      "policyName": "string",
      "policyViolationId": "string",
      "threatLevel": 0,
      "constraintViolations": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "reasons": [
            {
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              }
            }
          ]
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyViolations|[[ApiPolicyViolationDTOV2](#schemaapipolicyviolationdtov2)]|false|none|none|

<h2 id="tocS_ApiComponentProjectDataDTO">ApiComponentProjectDataDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentprojectdatadto"></a>
<a id="schema_ApiComponentProjectDataDTO"></a>
<a id="tocSapicomponentprojectdatadto"></a>
<a id="tocsapicomponentprojectdatadto"></a>

```json
{
  "firstReleaseDate": "2019-08-24T14:15:22Z",
  "lastReleaseDate": "2019-08-24T14:15:22Z",
  "projectMetadata": {
    "description": "string",
    "organization": "string"
  },
  "sourceControlManagement": {
    "scmUrl": "string",
    "scmMetadata": {
      "stars": 0,
      "forks": 0
    },
    "scmDetails": {
      "commitsPerMonth": 0,
      "uniqueDevsPerMonth": 0
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstReleaseDate|string(date-time)|false|none|none|
|lastReleaseDate|string(date-time)|false|none|none|
|projectMetadata|[ApiComponentProjectMetadataDTO](#schemaapicomponentprojectmetadatadto)|false|none|none|
|sourceControlManagement|[ApiComponentProjectScmDTO](#schemaapicomponentprojectscmdto)|false|none|none|

<h2 id="tocS_ApiComponentProjectMetadataDTO">ApiComponentProjectMetadataDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentprojectmetadatadto"></a>
<a id="schema_ApiComponentProjectMetadataDTO"></a>
<a id="tocSapicomponentprojectmetadatadto"></a>
<a id="tocsapicomponentprojectmetadatadto"></a>

```json
{
  "description": "string",
  "organization": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|organization|string|false|none|none|

<h2 id="tocS_ApiComponentProjectScmDTO">ApiComponentProjectScmDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentprojectscmdto"></a>
<a id="schema_ApiComponentProjectScmDTO"></a>
<a id="tocSapicomponentprojectscmdto"></a>
<a id="tocsapicomponentprojectscmdto"></a>

```json
{
  "scmUrl": "string",
  "scmMetadata": {
    "stars": 0,
    "forks": 0
  },
  "scmDetails": {
    "commitsPerMonth": 0,
    "uniqueDevsPerMonth": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scmUrl|string|false|none|none|
|scmMetadata|[ApiComponentProjectScmMetadataDTO](#schemaapicomponentprojectscmmetadatadto)|false|none|none|
|scmDetails|[ApiComponentProjectScmDetailsDTO](#schemaapicomponentprojectscmdetailsdto)|false|none|none|

<h2 id="tocS_ApiComponentProjectScmDetailsDTO">ApiComponentProjectScmDetailsDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentprojectscmdetailsdto"></a>
<a id="schema_ApiComponentProjectScmDetailsDTO"></a>
<a id="tocSapicomponentprojectscmdetailsdto"></a>
<a id="tocsapicomponentprojectscmdetailsdto"></a>

```json
{
  "commitsPerMonth": 0,
  "uniqueDevsPerMonth": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitsPerMonth|integer(int32)|false|none|none|
|uniqueDevsPerMonth|integer(int32)|false|none|none|

<h2 id="tocS_ApiComponentProjectScmMetadataDTO">ApiComponentProjectScmMetadataDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentprojectscmmetadatadto"></a>
<a id="schema_ApiComponentProjectScmMetadataDTO"></a>
<a id="tocSapicomponentprojectscmmetadatadto"></a>
<a id="tocsapicomponentprojectscmmetadatadto"></a>

```json
{
  "stars": 0,
  "forks": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stars|integer(int32)|false|none|none|
|forks|integer(int32)|false|none|none|

<h2 id="tocS_ApiConstraintViolationDTO">ApiConstraintViolationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiconstraintviolationdto"></a>
<a id="schema_ApiConstraintViolationDTO"></a>
<a id="tocSapiconstraintviolationdto"></a>
<a id="tocsapiconstraintviolationdto"></a>

```json
{
  "constraintId": "string",
  "constraintName": "string",
  "reasons": [
    {
      "reason": "string",
      "reference": {
        "value": "string",
        "type": "SECURITY_VULNERABILITY_REFID"
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraintId|string|false|none|none|
|constraintName|string|false|none|none|
|reasons|[[ApiConstraintViolationReasonDTO](#schemaapiconstraintviolationreasondto)]|false|none|none|

<h2 id="tocS_ApiConstraintViolationReasonDTO">ApiConstraintViolationReasonDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiconstraintviolationreasondto"></a>
<a id="schema_ApiConstraintViolationReasonDTO"></a>
<a id="tocSapiconstraintviolationreasondto"></a>
<a id="tocsapiconstraintviolationreasondto"></a>

```json
{
  "reason": "string",
  "reference": {
    "value": "string",
    "type": "SECURITY_VULNERABILITY_REFID"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|none|
|reference|[TriggerReference](#schematriggerreference)|false|none|none|

<h2 id="tocS_ApiLicenseDTO">ApiLicenseDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapilicensedto"></a>
<a id="schema_ApiLicenseDTO"></a>
<a id="tocSapilicensedto"></a>
<a id="tocsapilicensedto"></a>

```json
{
  "licenseId": "string",
  "licenseName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|licenseId|string|false|none|none|
|licenseName|string|false|none|none|

<h2 id="tocS_ApiLicenseDataDTO">ApiLicenseDataDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapilicensedatadto"></a>
<a id="schema_ApiLicenseDataDTO"></a>
<a id="tocSapilicensedatadto"></a>
<a id="tocsapilicensedatadto"></a>

```json
{
  "declaredLicenses": [
    {
      "licenseId": "string",
      "licenseName": "string"
    }
  ],
  "observedLicenses": [
    {
      "licenseId": "string",
      "licenseName": "string"
    }
  ],
  "effectiveLicenses": [
    {
      "licenseId": "string",
      "licenseName": "string"
    }
  ],
  "overriddenLicenses": [
    {
      "licenseId": "string",
      "licenseName": "string"
    }
  ],
  "status": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|declaredLicenses|[[ApiLicenseDTO](#schemaapilicensedto)]|false|none|none|
|observedLicenses|[[ApiLicenseDTO](#schemaapilicensedto)]|false|none|none|
|effectiveLicenses|[[ApiLicenseDTO](#schemaapilicensedto)]|false|none|none|
|overriddenLicenses|[[ApiLicenseDTO](#schemaapilicensedto)]|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_ApiPolicyViolationDTOV2">ApiPolicyViolationDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapipolicyviolationdtov2"></a>
<a id="schema_ApiPolicyViolationDTOV2"></a>
<a id="tocSapipolicyviolationdtov2"></a>
<a id="tocsapipolicyviolationdtov2"></a>

```json
{
  "policyId": "string",
  "policyName": "string",
  "policyViolationId": "string",
  "threatLevel": 0,
  "constraintViolations": [
    {
      "constraintId": "string",
      "constraintName": "string",
      "reasons": [
        {
          "reason": "string",
          "reference": {
            "value": "string",
            "type": "SECURITY_VULNERABILITY_REFID"
          }
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyId|string|false|none|none|
|policyName|string|false|none|none|
|policyViolationId|string|false|none|none|
|threatLevel|integer(int32)|false|none|none|
|constraintViolations|[[ApiConstraintViolationDTO](#schemaapiconstraintviolationdto)]|false|none|none|

<h2 id="tocS_ApiSecurityDataDTO">ApiSecurityDataDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapisecuritydatadto"></a>
<a id="schema_ApiSecurityDataDTO"></a>
<a id="tocSapisecuritydatadto"></a>
<a id="tocsapisecuritydatadto"></a>

```json
{
  "securityIssues": [
    {
      "source": "string",
      "reference": "string",
      "severity": 0.1,
      "status": "string",
      "url": "string",
      "threatCategory": "string",
      "cwe": "string",
      "cvssVector": "string",
      "cvssVectorSource": "string",
      "analysis": {
        "state": "string",
        "justification": "string",
        "response": "string",
        "detail": "string"
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|securityIssues|[[ApiSecurityIssueDTO](#schemaapisecurityissuedto)]|false|none|none|

<h2 id="tocS_ApiSecurityIssueAnalysisDTO">ApiSecurityIssueAnalysisDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapisecurityissueanalysisdto"></a>
<a id="schema_ApiSecurityIssueAnalysisDTO"></a>
<a id="tocSapisecurityissueanalysisdto"></a>
<a id="tocsapisecurityissueanalysisdto"></a>

```json
{
  "state": "string",
  "justification": "string",
  "response": "string",
  "detail": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|none|none|
|justification|string|false|none|none|
|response|string|false|none|none|
|detail|string|false|none|none|

<h2 id="tocS_ApiSecurityIssueDTO">ApiSecurityIssueDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapisecurityissuedto"></a>
<a id="schema_ApiSecurityIssueDTO"></a>
<a id="tocSapisecurityissuedto"></a>
<a id="tocsapisecurityissuedto"></a>

```json
{
  "source": "string",
  "reference": "string",
  "severity": 0.1,
  "status": "string",
  "url": "string",
  "threatCategory": "string",
  "cwe": "string",
  "cvssVector": "string",
  "cvssVectorSource": "string",
  "analysis": {
    "state": "string",
    "justification": "string",
    "response": "string",
    "detail": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|string|false|none|none|
|reference|string|false|none|none|
|severity|number(float)|false|none|none|
|status|string|false|none|none|
|url|string|false|none|none|
|threatCategory|string|false|none|none|
|cwe|string|false|none|none|
|cvssVector|string|false|none|none|
|cvssVectorSource|string|false|none|none|
|analysis|[ApiSecurityIssueAnalysisDTO](#schemaapisecurityissueanalysisdto)|false|none|none|

<h2 id="tocS_TriggerReference">TriggerReference</h2>
<!-- backwards compatibility -->
<a id="schematriggerreference"></a>
<a id="schema_TriggerReference"></a>
<a id="tocStriggerreference"></a>
<a id="tocstriggerreference"></a>

```json
{
  "value": "string",
  "type": "SECURITY_VULNERABILITY_REFID"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SECURITY_VULNERABILITY_REFID|

<h2 id="tocS_ApiComponentDetailsRequestDTOV2">ApiComponentDetailsRequestDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentdetailsrequestdtov2"></a>
<a id="schema_ApiComponentDetailsRequestDTOV2"></a>
<a id="tocSapicomponentdetailsrequestdtov2"></a>
<a id="tocsapicomponentdetailsrequestdtov2"></a>

```json
{
  "components": [
    {
      "packageUrl": "string",
      "hash": "string",
      "sha256": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "proprietary": true,
      "thirdParty": true
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|components|[[ApiComponentDTOV2](#schemaapicomponentdtov2)]|false|none|none|

<h2 id="tocS_ApiComponentReleasedFromQuarantineDTO">ApiComponentReleasedFromQuarantineDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentreleasedfromquarantinedto"></a>
<a id="schema_ApiComponentReleasedFromQuarantineDTO"></a>
<a id="tocSapicomponentreleasedfromquarantinedto"></a>
<a id="tocsapicomponentreleasedfromquarantinedto"></a>

```json
{
  "componentReleasedFromQuarantine": {
    "component": {
      "packageUrl": "string",
      "hash": "string",
      "sha256": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "thirdParty": true,
      "quarantineId": "string",
      "quarantineTime": "2019-08-24T14:15:22Z",
      "quarantineReleaseTime": "2019-08-24T14:15:22Z"
    },
    "waivedPolicyViolations": [
      {
        "policyId": "string",
        "policyName": "string",
        "policyViolationId": "string",
        "threatLevel": 0,
        "constraintViolations": [
          {
            "constraintId": "string",
            "constraintName": "string",
            "reasons": [
              {
                "reason": "string",
                "reference": {
                  "value": "string",
                  "type": "SECURITY_VULNERABILITY_REFID"
                }
              }
            ]
          }
        ],
        "policyWaiver": {
          "policyWaiverId": "string",
          "policyViolationId": "string",
          "comment": "string",
          "createTime": "2019-08-24T14:15:22Z",
          "expiryTime": "2019-08-24T14:15:22Z",
          "isObsolete": true,
          "scopeOwnerType": "string",
          "scopeOwnerId": "string",
          "scopeOwnerName": "string",
          "hash": "string",
          "policyId": "string",
          "vulnerabilityId": "string",
          "policyName": "string",
          "constraintFacts": [
            {
              "constraintId": "string",
              "constraintName": "string",
              "operatorName": "string",
              "conditionFacts": [
                {
                  "conditionTypeId": "string",
                  "conditionIndex": 0,
                  "summary": "string",
                  "reason": "string",
                  "reference": {
                    "value": "string",
                    "type": "SECURITY_VULNERABILITY_REFID"
                  },
                  "triggerJson": "string"
                }
              ]
            }
          ],
          "constraintFactsJson": "string",
          "componentName": "string",
          "creatorId": "string",
          "creatorName": "string",
          "matcherStrategy": "DEFAULT",
          "associatedPackageUrl": "string",
          "componentIdentifier": {
            "format": "string",
            "coordinates": {
              "property1": "string",
              "property2": "string"
            }
          },
          "threatLevel": 0,
          "componentUpgradeAvailable": true,
          "displayName": {
            "parts": [
              {
                "field": "string",
                "value": "string"
              }
            ],
            "name": "string"
          }
        }
      }
    ],
    "policyViolations": [
      {
        "policyId": "string",
        "policyName": "string",
        "policyViolationId": "string",
        "threatLevel": 0,
        "constraintViolations": [
          {
            "constraintId": "string",
            "constraintName": "string",
            "reasons": [
              {
                "reason": "string",
                "reference": {
                  "value": "string",
                  "type": "SECURITY_VULNERABILITY_REFID"
                }
              }
            ]
          }
        ]
      }
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentReleasedFromQuarantine|[ApiRepositoryComponentPolicyViolationDTO](#schemaapirepositorycomponentpolicyviolationdto)|false|none|none|

<h2 id="tocS_ApiPolicyWaiverDTO">ApiPolicyWaiverDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapipolicywaiverdto"></a>
<a id="schema_ApiPolicyWaiverDTO"></a>
<a id="tocSapipolicywaiverdto"></a>
<a id="tocsapipolicywaiverdto"></a>

```json
{
  "policyWaiverId": "string",
  "policyViolationId": "string",
  "comment": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "expiryTime": "2019-08-24T14:15:22Z",
  "isObsolete": true,
  "scopeOwnerType": "string",
  "scopeOwnerId": "string",
  "scopeOwnerName": "string",
  "hash": "string",
  "policyId": "string",
  "vulnerabilityId": "string",
  "policyName": "string",
  "constraintFacts": [
    {
      "constraintId": "string",
      "constraintName": "string",
      "operatorName": "string",
      "conditionFacts": [
        {
          "conditionTypeId": "string",
          "conditionIndex": 0,
          "summary": "string",
          "reason": "string",
          "reference": {
            "value": "string",
            "type": "SECURITY_VULNERABILITY_REFID"
          },
          "triggerJson": "string"
        }
      ]
    }
  ],
  "constraintFactsJson": "string",
  "componentName": "string",
  "creatorId": "string",
  "creatorName": "string",
  "matcherStrategy": "DEFAULT",
  "associatedPackageUrl": "string",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "threatLevel": 0,
  "componentUpgradeAvailable": true,
  "displayName": {
    "parts": [
      {
        "field": "string",
        "value": "string"
      }
    ],
    "name": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyWaiverId|string|false|none|none|
|policyViolationId|string|false|none|none|
|comment|string|false|none|none|
|createTime|string(date-time)|false|none|none|
|expiryTime|string(date-time)|false|none|none|
|isObsolete|boolean|false|none|none|
|scopeOwnerType|string|false|none|none|
|scopeOwnerId|string|false|none|none|
|scopeOwnerName|string|false|none|none|
|hash|string|false|none|none|
|policyId|string|false|none|none|
|vulnerabilityId|string|false|none|none|
|policyName|string|false|none|none|
|constraintFacts|[[ConstraintFact](#schemaconstraintfact)]|false|none|none|
|constraintFactsJson|string|false|none|none|
|componentName|string|false|none|none|
|creatorId|string|false|none|none|
|creatorName|string|false|none|none|
|matcherStrategy|string|false|none|none|
|associatedPackageUrl|string|false|none|none|
|componentIdentifier|[ApiComponentIdentifierDTOV2](#schemaapicomponentidentifierdtov2)|false|none|none|
|threatLevel|integer(int32)|false|none|none|
|componentUpgradeAvailable|boolean|false|none|none|
|displayName|[ComponentDisplayName](#schemacomponentdisplayname)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|matcherStrategy|DEFAULT|
|matcherStrategy|EXACT_COMPONENT|
|matcherStrategy|ALL_COMPONENTS|
|matcherStrategy|ALL_VERSIONS|

<h2 id="tocS_ApiRepositoryComponentDTO">ApiRepositoryComponentDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapirepositorycomponentdto"></a>
<a id="schema_ApiRepositoryComponentDTO"></a>
<a id="tocSapirepositorycomponentdto"></a>
<a id="tocsapirepositorycomponentdto"></a>

```json
{
  "packageUrl": "string",
  "hash": "string",
  "sha256": "string",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "displayName": "string",
  "thirdParty": true,
  "quarantineId": "string",
  "quarantineTime": "2019-08-24T14:15:22Z",
  "quarantineReleaseTime": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageUrl|string|false|none|none|
|hash|string|false|none|none|
|sha256|string|false|none|none|
|componentIdentifier|[ApiComponentIdentifierDTOV2](#schemaapicomponentidentifierdtov2)|false|none|none|
|displayName|string|false|none|none|
|thirdParty|boolean|false|none|none|
|quarantineId|string|false|none|none|
|quarantineTime|string(date-time)|false|none|none|
|quarantineReleaseTime|string(date-time)|false|none|none|

<h2 id="tocS_ApiRepositoryComponentPolicyViolationDTO">ApiRepositoryComponentPolicyViolationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapirepositorycomponentpolicyviolationdto"></a>
<a id="schema_ApiRepositoryComponentPolicyViolationDTO"></a>
<a id="tocSapirepositorycomponentpolicyviolationdto"></a>
<a id="tocsapirepositorycomponentpolicyviolationdto"></a>

```json
{
  "component": {
    "packageUrl": "string",
    "hash": "string",
    "sha256": "string",
    "componentIdentifier": {
      "format": "string",
      "coordinates": {
        "property1": "string",
        "property2": "string"
      }
    },
    "displayName": "string",
    "thirdParty": true,
    "quarantineId": "string",
    "quarantineTime": "2019-08-24T14:15:22Z",
    "quarantineReleaseTime": "2019-08-24T14:15:22Z"
  },
  "waivedPolicyViolations": [
    {
      "policyId": "string",
      "policyName": "string",
      "policyViolationId": "string",
      "threatLevel": 0,
      "constraintViolations": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "reasons": [
            {
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              }
            }
          ]
        }
      ],
      "policyWaiver": {
        "policyWaiverId": "string",
        "policyViolationId": "string",
        "comment": "string",
        "createTime": "2019-08-24T14:15:22Z",
        "expiryTime": "2019-08-24T14:15:22Z",
        "isObsolete": true,
        "scopeOwnerType": "string",
        "scopeOwnerId": "string",
        "scopeOwnerName": "string",
        "hash": "string",
        "policyId": "string",
        "vulnerabilityId": "string",
        "policyName": "string",
        "constraintFacts": [
          {
            "constraintId": "string",
            "constraintName": "string",
            "operatorName": "string",
            "conditionFacts": [
              {
                "conditionTypeId": "string",
                "conditionIndex": 0,
                "summary": "string",
                "reason": "string",
                "reference": {
                  "value": "string",
                  "type": "SECURITY_VULNERABILITY_REFID"
                },
                "triggerJson": "string"
              }
            ]
          }
        ],
        "constraintFactsJson": "string",
        "componentName": "string",
        "creatorId": "string",
        "creatorName": "string",
        "matcherStrategy": "DEFAULT",
        "associatedPackageUrl": "string",
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "threatLevel": 0,
        "componentUpgradeAvailable": true,
        "displayName": {
          "parts": [
            {
              "field": "string",
              "value": "string"
            }
          ],
          "name": "string"
        }
      }
    }
  ],
  "policyViolations": [
    {
      "policyId": "string",
      "policyName": "string",
      "policyViolationId": "string",
      "threatLevel": 0,
      "constraintViolations": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "reasons": [
            {
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              }
            }
          ]
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|component|[ApiRepositoryComponentDTO](#schemaapirepositorycomponentdto)|false|none|none|
|waivedPolicyViolations|[[ApiWaivedPolicyViolationDTO](#schemaapiwaivedpolicyviolationdto)]|false|none|none|
|policyViolations|[[ApiPolicyViolationDTOV2](#schemaapipolicyviolationdtov2)]|false|none|none|

<h2 id="tocS_ApiWaivedPolicyViolationDTO">ApiWaivedPolicyViolationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiwaivedpolicyviolationdto"></a>
<a id="schema_ApiWaivedPolicyViolationDTO"></a>
<a id="tocSapiwaivedpolicyviolationdto"></a>
<a id="tocsapiwaivedpolicyviolationdto"></a>

```json
{
  "policyId": "string",
  "policyName": "string",
  "policyViolationId": "string",
  "threatLevel": 0,
  "constraintViolations": [
    {
      "constraintId": "string",
      "constraintName": "string",
      "reasons": [
        {
          "reason": "string",
          "reference": {
            "value": "string",
            "type": "SECURITY_VULNERABILITY_REFID"
          }
        }
      ]
    }
  ],
  "policyWaiver": {
    "policyWaiverId": "string",
    "policyViolationId": "string",
    "comment": "string",
    "createTime": "2019-08-24T14:15:22Z",
    "expiryTime": "2019-08-24T14:15:22Z",
    "isObsolete": true,
    "scopeOwnerType": "string",
    "scopeOwnerId": "string",
    "scopeOwnerName": "string",
    "hash": "string",
    "policyId": "string",
    "vulnerabilityId": "string",
    "policyName": "string",
    "constraintFacts": [
      {
        "constraintId": "string",
        "constraintName": "string",
        "operatorName": "string",
        "conditionFacts": [
          {
            "conditionTypeId": "string",
            "conditionIndex": 0,
            "summary": "string",
            "reason": "string",
            "reference": {
              "value": "string",
              "type": "SECURITY_VULNERABILITY_REFID"
            },
            "triggerJson": "string"
          }
        ]
      }
    ],
    "constraintFactsJson": "string",
    "componentName": "string",
    "creatorId": "string",
    "creatorName": "string",
    "matcherStrategy": "DEFAULT",
    "associatedPackageUrl": "string",
    "componentIdentifier": {
      "format": "string",
      "coordinates": {
        "property1": "string",
        "property2": "string"
      }
    },
    "threatLevel": 0,
    "componentUpgradeAvailable": true,
    "displayName": {
      "parts": [
        {
          "field": "string",
          "value": "string"
        }
      ],
      "name": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyId|string|false|none|none|
|policyName|string|false|none|none|
|policyViolationId|string|false|none|none|
|threatLevel|integer(int32)|false|none|none|
|constraintViolations|[[ApiConstraintViolationDTO](#schemaapiconstraintviolationdto)]|false|none|none|
|policyWaiver|[ApiPolicyWaiverDTO](#schemaapipolicywaiverdto)|false|none|none|

<h2 id="tocS_ComponentDisplayName">ComponentDisplayName</h2>
<!-- backwards compatibility -->
<a id="schemacomponentdisplayname"></a>
<a id="schema_ComponentDisplayName"></a>
<a id="tocScomponentdisplayname"></a>
<a id="tocscomponentdisplayname"></a>

```json
{
  "parts": [
    {
      "field": "string",
      "value": "string"
    }
  ],
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parts|[[ComponentDisplayNamePart](#schemacomponentdisplaynamepart)]|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_ComponentDisplayNamePart">ComponentDisplayNamePart</h2>
<!-- backwards compatibility -->
<a id="schemacomponentdisplaynamepart"></a>
<a id="schema_ComponentDisplayNamePart"></a>
<a id="tocScomponentdisplaynamepart"></a>
<a id="tocscomponentdisplaynamepart"></a>

```json
{
  "field": "string",
  "value": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_ConditionFact">ConditionFact</h2>
<!-- backwards compatibility -->
<a id="schemaconditionfact"></a>
<a id="schema_ConditionFact"></a>
<a id="tocSconditionfact"></a>
<a id="tocsconditionfact"></a>

```json
{
  "conditionTypeId": "string",
  "conditionIndex": 0,
  "summary": "string",
  "reason": "string",
  "reference": {
    "value": "string",
    "type": "SECURITY_VULNERABILITY_REFID"
  },
  "triggerJson": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditionTypeId|string|false|none|none|
|conditionIndex|integer(int32)|false|none|none|
|summary|string|false|none|none|
|reason|string|false|none|none|
|reference|[TriggerReference](#schematriggerreference)|false|none|none|
|triggerJson|string|false|none|none|

<h2 id="tocS_ConstraintFact">ConstraintFact</h2>
<!-- backwards compatibility -->
<a id="schemaconstraintfact"></a>
<a id="schema_ConstraintFact"></a>
<a id="tocSconstraintfact"></a>
<a id="tocsconstraintfact"></a>

```json
{
  "constraintId": "string",
  "constraintName": "string",
  "operatorName": "string",
  "conditionFacts": [
    {
      "conditionTypeId": "string",
      "conditionIndex": 0,
      "summary": "string",
      "reason": "string",
      "reference": {
        "value": "string",
        "type": "SECURITY_VULNERABILITY_REFID"
      },
      "triggerJson": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraintId|string|false|none|none|
|constraintName|string|false|none|none|
|operatorName|string|false|none|none|
|conditionFacts|[[ConditionFact](#schemaconditionfact)]|false|none|none|

<h2 id="tocS_ApiComponentChangeActionDTO">ApiComponentChangeActionDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentchangeactiondto"></a>
<a id="schema_ApiComponentChangeActionDTO"></a>
<a id="tocSapicomponentchangeactiondto"></a>
<a id="tocsapicomponentchangeactiondto"></a>

```json
{
  "component": {
    "packageUrl": "string",
    "hash": "string",
    "sha256": "string",
    "componentIdentifier": {
      "format": "string",
      "coordinates": {
        "property1": "string",
        "property2": "string"
      }
    },
    "displayName": "string",
    "proprietary": true,
    "thirdParty": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|component|[ApiComponentDTOV2](#schemaapicomponentdtov2)|false|none|none|

<h2 id="tocS_ApiComponentRemediationDTO">ApiComponentRemediationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentremediationdto"></a>
<a id="schema_ApiComponentRemediationDTO"></a>
<a id="tocSapicomponentremediationdto"></a>
<a id="tocsapicomponentremediationdto"></a>

```json
{
  "remediation": {
    "versionChanges": [
      {
        "type": "next-no-violations",
        "data": {
          "component": {
            "packageUrl": "string",
            "hash": "string",
            "sha256": "string",
            "componentIdentifier": {
              "format": "string",
              "coordinates": {
                "property1": "string",
                "property2": "string"
              }
            },
            "displayName": "string",
            "proprietary": true,
            "thirdParty": true
          }
        }
      }
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remediation|[ApiComponentRemediationValueDTO](#schemaapicomponentremediationvaluedto)|false|none|none|

<h2 id="tocS_ApiComponentRemediationValueDTO">ApiComponentRemediationValueDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentremediationvaluedto"></a>
<a id="schema_ApiComponentRemediationValueDTO"></a>
<a id="tocSapicomponentremediationvaluedto"></a>
<a id="tocsapicomponentremediationvaluedto"></a>

```json
{
  "versionChanges": [
    {
      "type": "next-no-violations",
      "data": {
        "component": {
          "packageUrl": "string",
          "hash": "string",
          "sha256": "string",
          "componentIdentifier": {
            "format": "string",
            "coordinates": {
              "property1": "string",
              "property2": "string"
            }
          },
          "displayName": "string",
          "proprietary": true,
          "thirdParty": true
        }
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|versionChanges|[[ApiVersionChangeOptionDTO](#schemaapiversionchangeoptiondto)]|false|none|none|

<h2 id="tocS_ApiVersionChangeOptionDTO">ApiVersionChangeOptionDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiversionchangeoptiondto"></a>
<a id="schema_ApiVersionChangeOptionDTO"></a>
<a id="tocSapiversionchangeoptiondto"></a>
<a id="tocsapiversionchangeoptiondto"></a>

```json
{
  "type": "next-no-violations",
  "data": {
    "component": {
      "packageUrl": "string",
      "hash": "string",
      "sha256": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "proprietary": true,
      "thirdParty": true
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|data|[ApiComponentChangeActionDTO](#schemaapicomponentchangeactiondto)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|next-no-violations|
|type|next-non-failing|
|type|next-no-violations-with-dependencies|
|type|next-non-failing-with-dependencies|

<h2 id="tocS_ApiComponentOrPurlIdentifierDTOV2">ApiComponentOrPurlIdentifierDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentorpurlidentifierdtov2"></a>
<a id="schema_ApiComponentOrPurlIdentifierDTOV2"></a>
<a id="tocSapicomponentorpurlidentifierdtov2"></a>
<a id="tocsapicomponentorpurlidentifierdtov2"></a>

```json
{
  "format": "string",
  "coordinates": {
    "property1": "string",
    "property2": "string"
  },
  "packageUrl": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|none|
|coordinates|object|false|none|none|
|» **additionalProperties**|string|false|none|none|
|packageUrl|string|false|none|none|

<h2 id="tocS_ApiComponentsInQuarantineDTO">ApiComponentsInQuarantineDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentsinquarantinedto"></a>
<a id="schema_ApiComponentsInQuarantineDTO"></a>
<a id="tocSapicomponentsinquarantinedto"></a>
<a id="tocsapicomponentsinquarantinedto"></a>

```json
{
  "componentsInQuarantine": [
    {
      "repository": {
        "repositoryId": "string",
        "publicId": "string",
        "format": "string",
        "type": "string",
        "auditEnabled": true,
        "quarantineEnabled": true,
        "policyCompliantComponentSelectionEnabled": true,
        "namespaceConfusionProtectionEnabled": true
      },
      "components": [
        {
          "component": {
            "packageUrl": "string",
            "hash": "string",
            "sha256": "string",
            "componentIdentifier": {
              "format": "string",
              "coordinates": {
                "property1": "string",
                "property2": "string"
              }
            },
            "displayName": "string",
            "thirdParty": true,
            "quarantineId": "string",
            "quarantineTime": "2019-08-24T14:15:22Z",
            "quarantineReleaseTime": "2019-08-24T14:15:22Z"
          },
          "waivedPolicyViolations": [
            {
              "policyId": "string",
              "policyName": "string",
              "policyViolationId": "string",
              "threatLevel": 0,
              "constraintViolations": [
                {
                  "constraintId": "string",
                  "constraintName": "string",
                  "reasons": [
                    {}
                  ]
                }
              ],
              "policyWaiver": {
                "policyWaiverId": "string",
                "policyViolationId": "string",
                "comment": "string",
                "createTime": "2019-08-24T14:15:22Z",
                "expiryTime": "2019-08-24T14:15:22Z",
                "isObsolete": true,
                "scopeOwnerType": "string",
                "scopeOwnerId": "string",
                "scopeOwnerName": "string",
                "hash": "string",
                "policyId": "string",
                "vulnerabilityId": "string",
                "policyName": "string",
                "constraintFacts": [
                  {
                    "constraintId": "string",
                    "constraintName": "string",
                    "operatorName": "string",
                    "conditionFacts": []
                  }
                ],
                "constraintFactsJson": "string",
                "componentName": "string",
                "creatorId": "string",
                "creatorName": "string",
                "matcherStrategy": "DEFAULT",
                "associatedPackageUrl": "string",
                "componentIdentifier": {
                  "format": "string",
                  "coordinates": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "threatLevel": 0,
                "componentUpgradeAvailable": true,
                "displayName": {
                  "parts": [
                    {}
                  ],
                  "name": "string"
                }
              }
            }
          ],
          "policyViolations": [
            {
              "policyId": "string",
              "policyName": "string",
              "policyViolationId": "string",
              "threatLevel": 0,
              "constraintViolations": [
                {
                  "constraintId": "string",
                  "constraintName": "string",
                  "reasons": [
                    {}
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentsInQuarantine|[[ApiRepositoryComponentsInQuarantineDTO](#schemaapirepositorycomponentsinquarantinedto)]|false|none|none|

<h2 id="tocS_ApiRepositoryComponentsInQuarantineDTO">ApiRepositoryComponentsInQuarantineDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapirepositorycomponentsinquarantinedto"></a>
<a id="schema_ApiRepositoryComponentsInQuarantineDTO"></a>
<a id="tocSapirepositorycomponentsinquarantinedto"></a>
<a id="tocsapirepositorycomponentsinquarantinedto"></a>

```json
{
  "repository": {
    "repositoryId": "string",
    "publicId": "string",
    "format": "string",
    "type": "string",
    "auditEnabled": true,
    "quarantineEnabled": true,
    "policyCompliantComponentSelectionEnabled": true,
    "namespaceConfusionProtectionEnabled": true
  },
  "components": [
    {
      "component": {
        "packageUrl": "string",
        "hash": "string",
        "sha256": "string",
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "displayName": "string",
        "thirdParty": true,
        "quarantineId": "string",
        "quarantineTime": "2019-08-24T14:15:22Z",
        "quarantineReleaseTime": "2019-08-24T14:15:22Z"
      },
      "waivedPolicyViolations": [
        {
          "policyId": "string",
          "policyName": "string",
          "policyViolationId": "string",
          "threatLevel": 0,
          "constraintViolations": [
            {
              "constraintId": "string",
              "constraintName": "string",
              "reasons": [
                {
                  "reason": "string",
                  "reference": {
                    "value": "string",
                    "type": "SECURITY_VULNERABILITY_REFID"
                  }
                }
              ]
            }
          ],
          "policyWaiver": {
            "policyWaiverId": "string",
            "policyViolationId": "string",
            "comment": "string",
            "createTime": "2019-08-24T14:15:22Z",
            "expiryTime": "2019-08-24T14:15:22Z",
            "isObsolete": true,
            "scopeOwnerType": "string",
            "scopeOwnerId": "string",
            "scopeOwnerName": "string",
            "hash": "string",
            "policyId": "string",
            "vulnerabilityId": "string",
            "policyName": "string",
            "constraintFacts": [
              {
                "constraintId": "string",
                "constraintName": "string",
                "operatorName": "string",
                "conditionFacts": [
                  {
                    "conditionTypeId": "string",
                    "conditionIndex": 0,
                    "summary": "string",
                    "reason": "string",
                    "reference": {},
                    "triggerJson": "string"
                  }
                ]
              }
            ],
            "constraintFactsJson": "string",
            "componentName": "string",
            "creatorId": "string",
            "creatorName": "string",
            "matcherStrategy": "DEFAULT",
            "associatedPackageUrl": "string",
            "componentIdentifier": {
              "format": "string",
              "coordinates": {
                "property1": "string",
                "property2": "string"
              }
            },
            "threatLevel": 0,
            "componentUpgradeAvailable": true,
            "displayName": {
              "parts": [
                {
                  "field": "string",
                  "value": "string"
                }
              ],
              "name": "string"
            }
          }
        }
      ],
      "policyViolations": [
        {
          "policyId": "string",
          "policyName": "string",
          "policyViolationId": "string",
          "threatLevel": 0,
          "constraintViolations": [
            {
              "constraintId": "string",
              "constraintName": "string",
              "reasons": [
                {
                  "reason": "string",
                  "reference": {
                    "value": "string",
                    "type": "SECURITY_VULNERABILITY_REFID"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repository|[ApiRepositoryDTO](#schemaapirepositorydto)|false|none|none|
|components|[[ApiRepositoryComponentPolicyViolationDTO](#schemaapirepositorycomponentpolicyviolationdto)]|false|none|none|

<h2 id="tocS_ApiRepositoryDTO">ApiRepositoryDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapirepositorydto"></a>
<a id="schema_ApiRepositoryDTO"></a>
<a id="tocSapirepositorydto"></a>
<a id="tocsapirepositorydto"></a>

```json
{
  "repositoryId": "string",
  "publicId": "string",
  "format": "string",
  "type": "string",
  "auditEnabled": true,
  "quarantineEnabled": true,
  "policyCompliantComponentSelectionEnabled": true,
  "namespaceConfusionProtectionEnabled": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryId|string|false|none|none|
|publicId|string|false|none|none|
|format|string|false|none|none|
|type|string|false|none|none|
|auditEnabled|boolean|false|none|none|
|quarantineEnabled|boolean|false|none|none|
|policyCompliantComponentSelectionEnabled|boolean|false|none|none|
|namespaceConfusionProtectionEnabled|boolean|false|none|none|

<h2 id="tocS_ApiApplicationBaseDTO">ApiApplicationBaseDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiapplicationbasedto"></a>
<a id="schema_ApiApplicationBaseDTO"></a>
<a id="tocSapiapplicationbasedto"></a>
<a id="tocsapiapplicationbasedto"></a>

```json
{
  "id": "string",
  "publicId": "string",
  "name": "string",
  "organizationId": "string",
  "contactUserName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|publicId|string|false|none|none|
|name|string|false|none|none|
|organizationId|string|false|none|none|
|contactUserName|string|false|none|none|

<h2 id="tocS_ApiApplicationWaiverDTO">ApiApplicationWaiverDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiapplicationwaiverdto"></a>
<a id="schema_ApiApplicationWaiverDTO"></a>
<a id="tocSapiapplicationwaiverdto"></a>
<a id="tocsapiapplicationwaiverdto"></a>

```json
{
  "application": {
    "id": "string",
    "publicId": "string",
    "name": "string",
    "organizationId": "string",
    "contactUserName": "string"
  },
  "stages": [
    {
      "stageId": "string",
      "componentPolicyViolations": [
        {
          "component": {
            "packageUrl": "string",
            "hash": "string",
            "sha256": "string",
            "componentIdentifier": {
              "format": "string",
              "coordinates": {
                "property1": "string",
                "property2": "string"
              }
            },
            "displayName": "string",
            "proprietary": true,
            "thirdParty": true
          },
          "waivedPolicyViolations": [
            {
              "policyId": "string",
              "policyName": "string",
              "policyViolationId": "string",
              "threatLevel": 0,
              "constraintViolations": [
                {
                  "constraintId": "string",
                  "constraintName": "string",
                  "reasons": [
                    {}
                  ]
                }
              ],
              "policyWaiver": {
                "policyWaiverId": "string",
                "policyViolationId": "string",
                "comment": "string",
                "createTime": "2019-08-24T14:15:22Z",
                "expiryTime": "2019-08-24T14:15:22Z",
                "isObsolete": true,
                "scopeOwnerType": "string",
                "scopeOwnerId": "string",
                "scopeOwnerName": "string",
                "hash": "string",
                "policyId": "string",
                "vulnerabilityId": "string",
                "policyName": "string",
                "constraintFacts": [
                  {
                    "constraintId": "string",
                    "constraintName": "string",
                    "operatorName": "string",
                    "conditionFacts": []
                  }
                ],
                "constraintFactsJson": "string",
                "componentName": "string",
                "creatorId": "string",
                "creatorName": "string",
                "matcherStrategy": "DEFAULT",
                "associatedPackageUrl": "string",
                "componentIdentifier": {
                  "format": "string",
                  "coordinates": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "threatLevel": 0,
                "componentUpgradeAvailable": true,
                "displayName": {
                  "parts": [
                    {}
                  ],
                  "name": "string"
                }
              }
            }
          ]
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|[ApiApplicationBaseDTO](#schemaapiapplicationbasedto)|false|none|none|
|stages|[[ApiPolicyViolationStageDTO](#schemaapipolicyviolationstagedto)]|false|none|none|

<h2 id="tocS_ApiComponentPolicyViolationDTO">ApiComponentPolicyViolationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentpolicyviolationdto"></a>
<a id="schema_ApiComponentPolicyViolationDTO"></a>
<a id="tocSapicomponentpolicyviolationdto"></a>
<a id="tocsapicomponentpolicyviolationdto"></a>

```json
{
  "component": {
    "packageUrl": "string",
    "hash": "string",
    "sha256": "string",
    "componentIdentifier": {
      "format": "string",
      "coordinates": {
        "property1": "string",
        "property2": "string"
      }
    },
    "displayName": "string",
    "proprietary": true,
    "thirdParty": true
  },
  "waivedPolicyViolations": [
    {
      "policyId": "string",
      "policyName": "string",
      "policyViolationId": "string",
      "threatLevel": 0,
      "constraintViolations": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "reasons": [
            {
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              }
            }
          ]
        }
      ],
      "policyWaiver": {
        "policyWaiverId": "string",
        "policyViolationId": "string",
        "comment": "string",
        "createTime": "2019-08-24T14:15:22Z",
        "expiryTime": "2019-08-24T14:15:22Z",
        "isObsolete": true,
        "scopeOwnerType": "string",
        "scopeOwnerId": "string",
        "scopeOwnerName": "string",
        "hash": "string",
        "policyId": "string",
        "vulnerabilityId": "string",
        "policyName": "string",
        "constraintFacts": [
          {
            "constraintId": "string",
            "constraintName": "string",
            "operatorName": "string",
            "conditionFacts": [
              {
                "conditionTypeId": "string",
                "conditionIndex": 0,
                "summary": "string",
                "reason": "string",
                "reference": {
                  "value": "string",
                  "type": "SECURITY_VULNERABILITY_REFID"
                },
                "triggerJson": "string"
              }
            ]
          }
        ],
        "constraintFactsJson": "string",
        "componentName": "string",
        "creatorId": "string",
        "creatorName": "string",
        "matcherStrategy": "DEFAULT",
        "associatedPackageUrl": "string",
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "threatLevel": 0,
        "componentUpgradeAvailable": true,
        "displayName": {
          "parts": [
            {
              "field": "string",
              "value": "string"
            }
          ],
          "name": "string"
        }
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|component|[ApiComponentDTOV2](#schemaapicomponentdtov2)|false|none|none|
|waivedPolicyViolations|[[ApiWaivedPolicyViolationDTO](#schemaapiwaivedpolicyviolationdto)]|false|none|none|

<h2 id="tocS_ApiComponentWaiversDTO">ApiComponentWaiversDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentwaiversdto"></a>
<a id="schema_ApiComponentWaiversDTO"></a>
<a id="tocSapicomponentwaiversdto"></a>
<a id="tocsapicomponentwaiversdto"></a>

```json
{
  "applicationWaivers": [
    {
      "application": {
        "id": "string",
        "publicId": "string",
        "name": "string",
        "organizationId": "string",
        "contactUserName": "string"
      },
      "stages": [
        {
          "stageId": "string",
          "componentPolicyViolations": [
            {
              "component": {
                "packageUrl": "string",
                "hash": "string",
                "sha256": "string",
                "componentIdentifier": {
                  "format": "string",
                  "coordinates": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "displayName": "string",
                "proprietary": true,
                "thirdParty": true
              },
              "waivedPolicyViolations": [
                {
                  "policyId": "string",
                  "policyName": "string",
                  "policyViolationId": "string",
                  "threatLevel": 0,
                  "constraintViolations": [
                    {}
                  ],
                  "policyWaiver": {
                    "policyWaiverId": "string",
                    "policyViolationId": "string",
                    "comment": "string",
                    "createTime": "2019-08-24T14:15:22Z",
                    "expiryTime": "2019-08-24T14:15:22Z",
                    "isObsolete": true,
                    "scopeOwnerType": "string",
                    "scopeOwnerId": "string",
                    "scopeOwnerName": "string",
                    "hash": "string",
                    "policyId": "string",
                    "vulnerabilityId": "string",
                    "policyName": "string",
                    "constraintFacts": [],
                    "constraintFactsJson": "string",
                    "componentName": "string",
                    "creatorId": "string",
                    "creatorName": "string",
                    "matcherStrategy": "DEFAULT",
                    "associatedPackageUrl": "string",
                    "componentIdentifier": {},
                    "threatLevel": 0,
                    "componentUpgradeAvailable": true,
                    "displayName": {}
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "repositoryWaivers": [
    {
      "repository": {
        "repositoryId": "string",
        "publicId": "string",
        "format": "string",
        "type": "string",
        "auditEnabled": true,
        "quarantineEnabled": true,
        "policyCompliantComponentSelectionEnabled": true,
        "namespaceConfusionProtectionEnabled": true
      },
      "stages": [
        {
          "stageId": "string",
          "componentPolicyViolations": [
            {
              "component": {
                "packageUrl": "string",
                "hash": "string",
                "sha256": "string",
                "componentIdentifier": {
                  "format": "string",
                  "coordinates": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "displayName": "string",
                "proprietary": true,
                "thirdParty": true
              },
              "waivedPolicyViolations": [
                {
                  "policyId": "string",
                  "policyName": "string",
                  "policyViolationId": "string",
                  "threatLevel": 0,
                  "constraintViolations": [
                    {}
                  ],
                  "policyWaiver": {
                    "policyWaiverId": "string",
                    "policyViolationId": "string",
                    "comment": "string",
                    "createTime": "2019-08-24T14:15:22Z",
                    "expiryTime": "2019-08-24T14:15:22Z",
                    "isObsolete": true,
                    "scopeOwnerType": "string",
                    "scopeOwnerId": "string",
                    "scopeOwnerName": "string",
                    "hash": "string",
                    "policyId": "string",
                    "vulnerabilityId": "string",
                    "policyName": "string",
                    "constraintFacts": [],
                    "constraintFactsJson": "string",
                    "componentName": "string",
                    "creatorId": "string",
                    "creatorName": "string",
                    "matcherStrategy": "DEFAULT",
                    "associatedPackageUrl": "string",
                    "componentIdentifier": {},
                    "threatLevel": 0,
                    "componentUpgradeAvailable": true,
                    "displayName": {}
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationWaivers|[[ApiApplicationWaiverDTO](#schemaapiapplicationwaiverdto)]|false|none|none|
|repositoryWaivers|[[ApiRepositoryWaiverDTO](#schemaapirepositorywaiverdto)]|false|none|none|

<h2 id="tocS_ApiPolicyViolationStageDTO">ApiPolicyViolationStageDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapipolicyviolationstagedto"></a>
<a id="schema_ApiPolicyViolationStageDTO"></a>
<a id="tocSapipolicyviolationstagedto"></a>
<a id="tocsapipolicyviolationstagedto"></a>

```json
{
  "stageId": "string",
  "componentPolicyViolations": [
    {
      "component": {
        "packageUrl": "string",
        "hash": "string",
        "sha256": "string",
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "displayName": "string",
        "proprietary": true,
        "thirdParty": true
      },
      "waivedPolicyViolations": [
        {
          "policyId": "string",
          "policyName": "string",
          "policyViolationId": "string",
          "threatLevel": 0,
          "constraintViolations": [
            {
              "constraintId": "string",
              "constraintName": "string",
              "reasons": [
                {
                  "reason": "string",
                  "reference": {
                    "value": "string",
                    "type": "SECURITY_VULNERABILITY_REFID"
                  }
                }
              ]
            }
          ],
          "policyWaiver": {
            "policyWaiverId": "string",
            "policyViolationId": "string",
            "comment": "string",
            "createTime": "2019-08-24T14:15:22Z",
            "expiryTime": "2019-08-24T14:15:22Z",
            "isObsolete": true,
            "scopeOwnerType": "string",
            "scopeOwnerId": "string",
            "scopeOwnerName": "string",
            "hash": "string",
            "policyId": "string",
            "vulnerabilityId": "string",
            "policyName": "string",
            "constraintFacts": [
              {
                "constraintId": "string",
                "constraintName": "string",
                "operatorName": "string",
                "conditionFacts": [
                  {
                    "conditionTypeId": "string",
                    "conditionIndex": 0,
                    "summary": "string",
                    "reason": "string",
                    "reference": {},
                    "triggerJson": "string"
                  }
                ]
              }
            ],
            "constraintFactsJson": "string",
            "componentName": "string",
            "creatorId": "string",
            "creatorName": "string",
            "matcherStrategy": "DEFAULT",
            "associatedPackageUrl": "string",
            "componentIdentifier": {
              "format": "string",
              "coordinates": {
                "property1": "string",
                "property2": "string"
              }
            },
            "threatLevel": 0,
            "componentUpgradeAvailable": true,
            "displayName": {
              "parts": [
                {
                  "field": "string",
                  "value": "string"
                }
              ],
              "name": "string"
            }
          }
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stageId|string|false|none|none|
|componentPolicyViolations|[[ApiComponentPolicyViolationDTO](#schemaapicomponentpolicyviolationdto)]|false|none|none|

<h2 id="tocS_ApiRepositoryWaiverDTO">ApiRepositoryWaiverDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapirepositorywaiverdto"></a>
<a id="schema_ApiRepositoryWaiverDTO"></a>
<a id="tocSapirepositorywaiverdto"></a>
<a id="tocsapirepositorywaiverdto"></a>

```json
{
  "repository": {
    "repositoryId": "string",
    "publicId": "string",
    "format": "string",
    "type": "string",
    "auditEnabled": true,
    "quarantineEnabled": true,
    "policyCompliantComponentSelectionEnabled": true,
    "namespaceConfusionProtectionEnabled": true
  },
  "stages": [
    {
      "stageId": "string",
      "componentPolicyViolations": [
        {
          "component": {
            "packageUrl": "string",
            "hash": "string",
            "sha256": "string",
            "componentIdentifier": {
              "format": "string",
              "coordinates": {
                "property1": "string",
                "property2": "string"
              }
            },
            "displayName": "string",
            "proprietary": true,
            "thirdParty": true
          },
          "waivedPolicyViolations": [
            {
              "policyId": "string",
              "policyName": "string",
              "policyViolationId": "string",
              "threatLevel": 0,
              "constraintViolations": [
                {
                  "constraintId": "string",
                  "constraintName": "string",
                  "reasons": [
                    {}
                  ]
                }
              ],
              "policyWaiver": {
                "policyWaiverId": "string",
                "policyViolationId": "string",
                "comment": "string",
                "createTime": "2019-08-24T14:15:22Z",
                "expiryTime": "2019-08-24T14:15:22Z",
                "isObsolete": true,
                "scopeOwnerType": "string",
                "scopeOwnerId": "string",
                "scopeOwnerName": "string",
                "hash": "string",
                "policyId": "string",
                "vulnerabilityId": "string",
                "policyName": "string",
                "constraintFacts": [
                  {
                    "constraintId": "string",
                    "constraintName": "string",
                    "operatorName": "string",
                    "conditionFacts": []
                  }
                ],
                "constraintFactsJson": "string",
                "componentName": "string",
                "creatorId": "string",
                "creatorName": "string",
                "matcherStrategy": "DEFAULT",
                "associatedPackageUrl": "string",
                "componentIdentifier": {
                  "format": "string",
                  "coordinates": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "threatLevel": 0,
                "componentUpgradeAvailable": true,
                "displayName": {
                  "parts": [
                    {}
                  ],
                  "name": "string"
                }
              }
            }
          ]
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repository|[ApiRepositoryDTO](#schemaapirepositorydto)|false|none|none|
|stages|[[ApiPolicyViolationStageDTO](#schemaapipolicyviolationstagedto)]|false|none|none|

<h2 id="tocS_ConfigurationValidationResult">ConfigurationValidationResult</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationvalidationresult"></a>
<a id="schema_ConfigurationValidationResult"></a>
<a id="tocSconfigurationvalidationresult"></a>
<a id="tocsconfigurationvalidationresult"></a>

```json
{
  "configurationComplete": {
    "valid": true,
    "message": "string"
  },
  "repoPrivate": {
    "valid": true,
    "message": "string"
  },
  "tokenPermissions": {
    "valid": true,
    "message": "string"
  },
  "sshConfiguration": {
    "valid": true,
    "message": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configurationComplete|[ValidationResult](#schemavalidationresult)|false|none|none|
|repoPrivate|[ValidationResult](#schemavalidationresult)|false|none|none|
|tokenPermissions|[ValidationResult](#schemavalidationresult)|false|none|none|
|sshConfiguration|[ValidationResult](#schemavalidationresult)|false|none|none|

<h2 id="tocS_ValidationResult">ValidationResult</h2>
<!-- backwards compatibility -->
<a id="schemavalidationresult"></a>
<a id="schema_ValidationResult"></a>
<a id="tocSvalidationresult"></a>
<a id="tocsvalidationresult"></a>

```json
{
  "valid": true,
  "message": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|valid|boolean|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_ApiCompositeSourceControlDTO">ApiCompositeSourceControlDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapicompositesourcecontroldto"></a>
<a id="schema_ApiCompositeSourceControlDTO"></a>
<a id="tocSapicompositesourcecontroldto"></a>
<a id="tocsapicompositesourcecontroldto"></a>

```json
{
  "id": "string",
  "ownerId": "string",
  "repositoryUrl": "string",
  "provider": {
    "value": "string",
    "parentValue": "string",
    "parentName": "string"
  },
  "username": {
    "value": "string",
    "parentValue": "string",
    "parentName": "string"
  },
  "token": {
    "value": "string",
    "parentValue": "string",
    "parentName": "string"
  },
  "baseBranch": {
    "value": "string",
    "parentValue": "string",
    "parentName": "string"
  },
  "remediationPullRequestsEnabled": {
    "value": true,
    "parentValue": true,
    "parentName": "string"
  },
  "statusChecksEnabled": {
    "value": true,
    "parentValue": true,
    "parentName": "string"
  },
  "pullRequestCommentingEnabled": {
    "value": true,
    "parentValue": true,
    "parentName": "string"
  },
  "sourceControlEvaluationsEnabled": {
    "value": true,
    "parentValue": true,
    "parentName": "string"
  },
  "sourceControlScanTarget": {
    "value": "string",
    "parentValue": "string",
    "parentName": "string"
  },
  "sshEnabled": {
    "value": true,
    "parentValue": true,
    "parentName": "string"
  },
  "commitStatusEnabled": {
    "value": true,
    "parentValue": true,
    "parentName": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|ownerId|string|false|none|none|
|repositoryUrl|string|false|none|none|
|provider|[ApiCompositeValueDTOString](#schemaapicompositevaluedtostring)|false|none|none|
|username|[ApiCompositeValueDTOString](#schemaapicompositevaluedtostring)|false|none|none|
|token|[ApiCompositeValueDTOString](#schemaapicompositevaluedtostring)|false|none|none|
|baseBranch|[ApiCompositeValueDTOString](#schemaapicompositevaluedtostring)|false|none|none|
|remediationPullRequestsEnabled|[ApiCompositeValueDTOBoolean](#schemaapicompositevaluedtoboolean)|false|none|none|
|statusChecksEnabled|[ApiCompositeValueDTOBoolean](#schemaapicompositevaluedtoboolean)|false|none|none|
|pullRequestCommentingEnabled|[ApiCompositeValueDTOBoolean](#schemaapicompositevaluedtoboolean)|false|none|none|
|sourceControlEvaluationsEnabled|[ApiCompositeValueDTOBoolean](#schemaapicompositevaluedtoboolean)|false|none|none|
|sourceControlScanTarget|[ApiCompositeValueDTOString](#schemaapicompositevaluedtostring)|false|none|none|
|sshEnabled|[ApiCompositeValueDTOBoolean](#schemaapicompositevaluedtoboolean)|false|none|none|
|commitStatusEnabled|[ApiCompositeValueDTOBoolean](#schemaapicompositevaluedtoboolean)|false|none|none|

<h2 id="tocS_ApiCompositeValueDTOBoolean">ApiCompositeValueDTOBoolean</h2>
<!-- backwards compatibility -->
<a id="schemaapicompositevaluedtoboolean"></a>
<a id="schema_ApiCompositeValueDTOBoolean"></a>
<a id="tocSapicompositevaluedtoboolean"></a>
<a id="tocsapicompositevaluedtoboolean"></a>

```json
{
  "value": true,
  "parentValue": true,
  "parentName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|boolean|false|none|none|
|parentValue|boolean|false|none|none|
|parentName|string|false|none|none|

<h2 id="tocS_ApiCompositeValueDTOString">ApiCompositeValueDTOString</h2>
<!-- backwards compatibility -->
<a id="schemaapicompositevaluedtostring"></a>
<a id="schema_ApiCompositeValueDTOString"></a>
<a id="tocSapicompositevaluedtostring"></a>
<a id="tocsapicompositevaluedtostring"></a>

```json
{
  "value": "string",
  "parentValue": "string",
  "parentName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|none|
|parentValue|string|false|none|none|
|parentName|string|false|none|none|

<h2 id="tocS_ApiCrowdConfigurationDTO">ApiCrowdConfigurationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapicrowdconfigurationdto"></a>
<a id="schema_ApiCrowdConfigurationDTO"></a>
<a id="tocSapicrowdconfigurationdto"></a>
<a id="tocsapicrowdconfigurationdto"></a>

```json
{
  "serverUrl": "string",
  "applicationName": "string",
  "applicationPassword": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serverUrl|string|false|none|none|
|applicationName|string|false|none|none|
|applicationPassword|[string]|false|none|none|

<h2 id="tocS_ApiStatusDTO">ApiStatusDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapistatusdto"></a>
<a id="schema_ApiStatusDTO"></a>
<a id="tocSapistatusdto"></a>
<a id="tocsapistatusdto"></a>

```json
{
  "code": 0,
  "message": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_ApiDataRetentionPoliciesDTO">ApiDataRetentionPoliciesDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapidataretentionpoliciesdto"></a>
<a id="schema_ApiDataRetentionPoliciesDTO"></a>
<a id="tocSapidataretentionpoliciesdto"></a>
<a id="tocsapidataretentionpoliciesdto"></a>

```json
{
  "applicationReports": {
    "stages": {
      "property1": {
        "inheritPolicy": true,
        "enablePurging": true,
        "maxCount": 0,
        "maxAge": "string"
      },
      "property2": {
        "inheritPolicy": true,
        "enablePurging": true,
        "maxCount": 0,
        "maxAge": "string"
      }
    }
  },
  "successMetrics": {
    "inheritPolicy": true,
    "enablePurging": true,
    "maxAge": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationReports|[ApiReportRetentionPoliciesDTO](#schemaapireportretentionpoliciesdto)|false|none|none|
|successMetrics|[ApiSuccessMetricsRetentionPolicyDTO](#schemaapisuccessmetricsretentionpolicydto)|false|none|none|

<h2 id="tocS_ApiReportRetentionPoliciesDTO">ApiReportRetentionPoliciesDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapireportretentionpoliciesdto"></a>
<a id="schema_ApiReportRetentionPoliciesDTO"></a>
<a id="tocSapireportretentionpoliciesdto"></a>
<a id="tocsapireportretentionpoliciesdto"></a>

```json
{
  "stages": {
    "property1": {
      "inheritPolicy": true,
      "enablePurging": true,
      "maxCount": 0,
      "maxAge": "string"
    },
    "property2": {
      "inheritPolicy": true,
      "enablePurging": true,
      "maxCount": 0,
      "maxAge": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stages|object|false|none|none|
|» **additionalProperties**|[ApiReportRetentionPolicyDTO](#schemaapireportretentionpolicydto)|false|none|none|

<h2 id="tocS_ApiReportRetentionPolicyDTO">ApiReportRetentionPolicyDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapireportretentionpolicydto"></a>
<a id="schema_ApiReportRetentionPolicyDTO"></a>
<a id="tocSapireportretentionpolicydto"></a>
<a id="tocsapireportretentionpolicydto"></a>

```json
{
  "inheritPolicy": true,
  "enablePurging": true,
  "maxCount": 0,
  "maxAge": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inheritPolicy|boolean|false|none|none|
|enablePurging|boolean|false|none|none|
|maxCount|integer(int32)|false|none|none|
|maxAge|string|false|none|none|

<h2 id="tocS_ApiSuccessMetricsRetentionPolicyDTO">ApiSuccessMetricsRetentionPolicyDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapisuccessmetricsretentionpolicydto"></a>
<a id="schema_ApiSuccessMetricsRetentionPolicyDTO"></a>
<a id="tocSapisuccessmetricsretentionpolicydto"></a>
<a id="tocsapisuccessmetricsretentionpolicydto"></a>

```json
{
  "inheritPolicy": true,
  "enablePurging": true,
  "maxAge": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inheritPolicy|boolean|false|none|none|
|enablePurging|boolean|false|none|none|
|maxAge|string|false|none|none|

<h2 id="tocS_ApiComponentEvaluationTicketDTOV2">ApiComponentEvaluationTicketDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentevaluationticketdtov2"></a>
<a id="schema_ApiComponentEvaluationTicketDTOV2"></a>
<a id="tocSapicomponentevaluationticketdtov2"></a>
<a id="tocsapicomponentevaluationticketdtov2"></a>

```json
{
  "resultId": "string",
  "submittedDate": "2019-08-24T14:15:22Z",
  "applicationId": "string",
  "resultsUrl": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resultId|string|false|none|none|
|submittedDate|string(date-time)|false|none|none|
|applicationId|string|false|none|none|
|resultsUrl|string|false|none|none|

<h2 id="tocS_ApiComponentEvaluationRequestDTOV2">ApiComponentEvaluationRequestDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentevaluationrequestdtov2"></a>
<a id="schema_ApiComponentEvaluationRequestDTOV2"></a>
<a id="tocSapicomponentevaluationrequestdtov2"></a>
<a id="tocsapicomponentevaluationrequestdtov2"></a>

```json
{
  "components": [
    {
      "packageUrl": "string",
      "hash": "string",
      "sha256": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "proprietary": true,
      "thirdParty": true
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|components|[[ApiComponentDTOV2](#schemaapicomponentdtov2)]|false|none|none|

<h2 id="tocS_ApiApplicationEvaluationStatusDTOV2">ApiApplicationEvaluationStatusDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapiapplicationevaluationstatusdtov2"></a>
<a id="schema_ApiApplicationEvaluationStatusDTOV2"></a>
<a id="tocSapiapplicationevaluationstatusdtov2"></a>
<a id="tocsapiapplicationevaluationstatusdtov2"></a>

```json
{
  "statusUrl": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusUrl|string|false|none|none|

<h2 id="tocS_ApiSourceControlEvaluationRequestDTO">ApiSourceControlEvaluationRequestDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapisourcecontrolevaluationrequestdto"></a>
<a id="schema_ApiSourceControlEvaluationRequestDTO"></a>
<a id="tocSapisourcecontrolevaluationrequestdto"></a>
<a id="tocsapisourcecontrolevaluationrequestdto"></a>

```json
{
  "stageId": "string",
  "branchName": "string",
  "scanTargets": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stageId|string|false|none|none|
|branchName|string|false|none|none|
|scanTargets|[string]|false|none|none|

<h2 id="tocS_ApiApplicationEvaluationResultDTOV2">ApiApplicationEvaluationResultDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapiapplicationevaluationresultdtov2"></a>
<a id="schema_ApiApplicationEvaluationResultDTOV2"></a>
<a id="tocSapiapplicationevaluationresultdtov2"></a>
<a id="tocsapiapplicationevaluationresultdtov2"></a>

```json
{
  "status": "string",
  "reason": "string",
  "reportHtmlUrl": "string",
  "embeddableReportHtmlUrl": "string",
  "reportPdfUrl": "string",
  "reportDataUrl": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|reason|string|false|none|none|
|reportHtmlUrl|string|false|none|none|
|embeddableReportHtmlUrl|string|false|none|none|
|reportPdfUrl|string|false|none|none|
|reportDataUrl|string|false|none|none|

<h2 id="tocS_ApiComponentEvaluationResultDTOV2">ApiComponentEvaluationResultDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentevaluationresultdtov2"></a>
<a id="schema_ApiComponentEvaluationResultDTOV2"></a>
<a id="tocSapicomponentevaluationresultdtov2"></a>
<a id="tocsapicomponentevaluationresultdtov2"></a>

```json
{
  "submittedDate": "2019-08-24T14:15:22Z",
  "evaluationDate": "2019-08-24T14:15:22Z",
  "applicationId": "string",
  "results": [
    {
      "component": {
        "packageUrl": "string",
        "hash": "string",
        "sha256": "string",
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "displayName": "string",
        "proprietary": true,
        "thirdParty": true
      },
      "matchState": "string",
      "catalogDate": "2019-08-24T14:15:22Z",
      "relativePopularity": 0,
      "licenseData": {
        "declaredLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "observedLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "effectiveLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "overriddenLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "status": "string"
      },
      "integrityRating": "string",
      "hygieneRating": "string",
      "securityData": {
        "securityIssues": [
          {
            "source": "string",
            "reference": "string",
            "severity": 0.1,
            "status": "string",
            "url": "string",
            "threatCategory": "string",
            "cwe": "string",
            "cvssVector": "string",
            "cvssVectorSource": "string",
            "analysis": {
              "state": "string",
              "justification": "string",
              "response": "string",
              "detail": "string"
            }
          }
        ]
      },
      "policyData": {
        "policyViolations": [
          {
            "policyId": "string",
            "policyName": "string",
            "policyViolationId": "string",
            "threatLevel": 0,
            "constraintViolations": [
              {
                "constraintId": "string",
                "constraintName": "string",
                "reasons": [
                  {
                    "reason": "string",
                    "reference": {}
                  }
                ]
              }
            ]
          }
        ]
      },
      "projectData": {
        "firstReleaseDate": "2019-08-24T14:15:22Z",
        "lastReleaseDate": "2019-08-24T14:15:22Z",
        "projectMetadata": {
          "description": "string",
          "organization": "string"
        },
        "sourceControlManagement": {
          "scmUrl": "string",
          "scmMetadata": {
            "stars": 0,
            "forks": 0
          },
          "scmDetails": {
            "commitsPerMonth": 0,
            "uniqueDevsPerMonth": 0
          }
        }
      }
    }
  ],
  "isError": true,
  "errorMessage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|submittedDate|string(date-time)|false|none|none|
|evaluationDate|string(date-time)|false|none|none|
|applicationId|string|false|none|none|
|results|[[ApiComponentDetailsDTOV2](#schemaapicomponentdetailsdtov2)]|false|none|none|
|isError|boolean|false|none|none|
|errorMessage|string|false|none|none|

<h2 id="tocS_ApiPromoteScanRequestDTOV2">ApiPromoteScanRequestDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapipromotescanrequestdtov2"></a>
<a id="schema_ApiPromoteScanRequestDTOV2"></a>
<a id="tocSapipromotescanrequestdtov2"></a>
<a id="tocsapipromotescanrequestdtov2"></a>

```json
{
  "scanId": "string",
  "sourceStageId": "string",
  "targetStageId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scanId|string|false|none|none|
|sourceStageId|string|false|none|none|
|targetStageId|string|false|none|none|

<h2 id="tocS_ApiFirewallMetricsResultDTO">ApiFirewallMetricsResultDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapifirewallmetricsresultdto"></a>
<a id="schema_ApiFirewallMetricsResultDTO"></a>
<a id="tocSapifirewallmetricsresultdto"></a>
<a id="tocsapifirewallmetricsresultdto"></a>

```json
{
  "firewallMetricsValue": 0,
  "latestUpdatedTime": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firewallMetricsValue|integer(int32)|false|none|none|
|latestUpdatedTime|string(date-time)|false|none|none|

<h2 id="tocS_ApiRepositoryManagerDTO">ApiRepositoryManagerDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapirepositorymanagerdto"></a>
<a id="schema_ApiRepositoryManagerDTO"></a>
<a id="tocSapirepositorymanagerdto"></a>
<a id="tocsapirepositorymanagerdto"></a>

```json
{
  "id": "string",
  "name": "string",
  "instanceId": "string",
  "productName": "string",
  "productVersion": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|instanceId|string|false|none|none|
|productName|string|false|none|none|
|productVersion|string|false|none|none|

<h2 id="tocS_ApiRepositoryListDTO">ApiRepositoryListDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapirepositorylistdto"></a>
<a id="schema_ApiRepositoryListDTO"></a>
<a id="tocSapirepositorylistdto"></a>
<a id="tocsapirepositorylistdto"></a>

```json
{
  "repositories": [
    {
      "repositoryId": "string",
      "publicId": "string",
      "format": "string",
      "type": "string",
      "auditEnabled": true,
      "quarantineEnabled": true,
      "policyCompliantComponentSelectionEnabled": true,
      "namespaceConfusionProtectionEnabled": true
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositories|[[ApiRepositoryDTO](#schemaapirepositorydto)]|false|none|none|

<h2 id="tocS_ApiRepositoryComponentEvaluationRequest">ApiRepositoryComponentEvaluationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapirepositorycomponentevaluationrequest"></a>
<a id="schema_ApiRepositoryComponentEvaluationRequest"></a>
<a id="tocSapirepositorycomponentevaluationrequest"></a>
<a id="tocsapirepositorycomponentevaluationrequest"></a>

```json
{
  "pathname": "string",
  "hash": "string",
  "packageUrl": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pathname|string|false|none|none|
|hash|string|false|none|none|
|packageUrl|string|false|none|none|

<h2 id="tocS_ApiRepositoryComponentEvaluationResult">ApiRepositoryComponentEvaluationResult</h2>
<!-- backwards compatibility -->
<a id="schemaapirepositorycomponentevaluationresult"></a>
<a id="schema_ApiRepositoryComponentEvaluationResult"></a>
<a id="tocSapirepositorycomponentevaluationresult"></a>
<a id="tocsapirepositorycomponentevaluationresult"></a>

```json
{
  "quarantined": true,
  "quarantineDate": "2019-08-24T14:15:22Z",
  "component": {
    "pathname": "string",
    "hash": "string",
    "packageUrl": "string"
  },
  "catalogDate": "2019-08-24T14:15:22Z",
  "policyViolations": [
    {
      "policyId": "string",
      "policyName": "string",
      "policyViolationId": "string",
      "threatLevel": 0,
      "constraintViolations": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "reasons": [
            {
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              }
            }
          ]
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quarantined|boolean|false|none|none|
|quarantineDate|string(date-time)|false|none|none|
|component|[ApiRepositoryComponentEvaluationRequest](#schemaapirepositorycomponentevaluationrequest)|false|none|none|
|catalogDate|string(date-time)|false|none|none|
|policyViolations|[[ApiPolicyViolationDTOV2](#schemaapipolicyviolationdtov2)]|false|none|none|

<h2 id="tocS_ApiRepositoryComponentEvaluationResultList">ApiRepositoryComponentEvaluationResultList</h2>
<!-- backwards compatibility -->
<a id="schemaapirepositorycomponentevaluationresultlist"></a>
<a id="schema_ApiRepositoryComponentEvaluationResultList"></a>
<a id="tocSapirepositorycomponentevaluationresultlist"></a>
<a id="tocsapirepositorycomponentevaluationresultlist"></a>

```json
{
  "repositoryManagerId": "string",
  "repositoryId": "string",
  "repositoryPublicId": "string",
  "repositoryType": "string",
  "results": [
    {
      "quarantined": true,
      "quarantineDate": "2019-08-24T14:15:22Z",
      "component": {
        "pathname": "string",
        "hash": "string",
        "packageUrl": "string"
      },
      "catalogDate": "2019-08-24T14:15:22Z",
      "policyViolations": [
        {
          "policyId": "string",
          "policyName": "string",
          "policyViolationId": "string",
          "threatLevel": 0,
          "constraintViolations": [
            {
              "constraintId": "string",
              "constraintName": "string",
              "reasons": [
                {
                  "reason": "string",
                  "reference": {
                    "value": "string",
                    "type": "SECURITY_VULNERABILITY_REFID"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryManagerId|string|false|none|none|
|repositoryId|string|false|none|none|
|repositoryPublicId|string|false|none|none|
|repositoryType|string|false|none|none|
|results|[[ApiRepositoryComponentEvaluationResult](#schemaapirepositorycomponentevaluationresult)]|false|none|none|

<h2 id="tocS_ApiRepositoryComponentEvaluationRequestList">ApiRepositoryComponentEvaluationRequestList</h2>
<!-- backwards compatibility -->
<a id="schemaapirepositorycomponentevaluationrequestlist"></a>
<a id="schema_ApiRepositoryComponentEvaluationRequestList"></a>
<a id="tocSapirepositorycomponentevaluationrequestlist"></a>
<a id="tocsapirepositorycomponentevaluationrequestlist"></a>

```json
{
  "format": "string",
  "components": [
    {
      "pathname": "string",
      "hash": "string",
      "packageUrl": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|none|
|components|[[ApiRepositoryComponentEvaluationRequest](#schemaapirepositorycomponentevaluationrequest)]|false|none|none|

<h2 id="tocS_ApiFirewallReleaseQuarantineConfigDTO">ApiFirewallReleaseQuarantineConfigDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapifirewallreleasequarantineconfigdto"></a>
<a id="schema_ApiFirewallReleaseQuarantineConfigDTO"></a>
<a id="tocSapifirewallreleasequarantineconfigdto"></a>
<a id="tocsapifirewallreleasequarantineconfigdto"></a>

```json
{
  "id": "string",
  "name": "string",
  "autoReleaseQuarantineEnabled": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|autoReleaseQuarantineEnabled|boolean|false|none|none|

<h2 id="tocS_ApiFirewallReleaseQuarantineSummaryDTO">ApiFirewallReleaseQuarantineSummaryDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapifirewallreleasequarantinesummarydto"></a>
<a id="schema_ApiFirewallReleaseQuarantineSummaryDTO"></a>
<a id="tocSapifirewallreleasequarantinesummarydto"></a>
<a id="tocsapifirewallreleasequarantinesummarydto"></a>

```json
{
  "autoReleaseQuarantineCountMTD": 0,
  "autoReleaseQuarantineCountYTD": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoReleaseQuarantineCountMTD|integer(int64)|false|none|none|
|autoReleaseQuarantineCountYTD|integer(int64)|false|none|none|

<h2 id="tocS_ApiFirewallQuarantineSummaryDTO">ApiFirewallQuarantineSummaryDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapifirewallquarantinesummarydto"></a>
<a id="schema_ApiFirewallQuarantineSummaryDTO"></a>
<a id="tocSapifirewallquarantinesummarydto"></a>
<a id="tocsapifirewallquarantinesummarydto"></a>

```json
{
  "repositoryCount": 0,
  "quarantineEnabledRepositoryCount": 0,
  "quarantineEnabled": true,
  "totalComponentCount": 0,
  "quarantinedComponentCount": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryCount|integer(int64)|false|none|none|
|quarantineEnabledRepositoryCount|integer(int64)|false|none|none|
|quarantineEnabled|boolean|false|none|none|
|totalComponentCount|integer(int64)|false|none|none|
|quarantinedComponentCount|integer(int64)|false|none|none|

<h2 id="tocS_ApiRepositoryContainerDTO">ApiRepositoryContainerDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapirepositorycontainerdto"></a>
<a id="schema_ApiRepositoryContainerDTO"></a>
<a id="tocSapirepositorycontainerdto"></a>
<a id="tocsapirepositorycontainerdto"></a>

```json
{
  "id": "string",
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_ApiRepositoryManagerListDTO">ApiRepositoryManagerListDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapirepositorymanagerlistdto"></a>
<a id="schema_ApiRepositoryManagerListDTO"></a>
<a id="tocSapirepositorymanagerlistdto"></a>
<a id="tocsapirepositorymanagerlistdto"></a>

```json
{
  "repositoryManagers": [
    {
      "id": "string",
      "name": "string",
      "instanceId": "string",
      "productName": "string",
      "productVersion": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repositoryManagers|[[ApiRepositoryManagerDTO](#schemaapirepositorymanagerdto)]|false|none|none|

<h2 id="tocS_ApiHashComponentIdentifierDTO">ApiHashComponentIdentifierDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapihashcomponentidentifierdto"></a>
<a id="schema_ApiHashComponentIdentifierDTO"></a>
<a id="tocSapihashcomponentidentifierdto"></a>
<a id="tocsapihashcomponentidentifierdto"></a>

```json
{
  "hash": "string",
  "comment": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "packageUrl": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string|false|none|none|
|comment|string|false|none|none|
|createTime|string(date-time)|false|none|none|
|componentIdentifier|[ApiComponentIdentifierDTOV2](#schemaapicomponentidentifierdtov2)|false|none|none|
|packageUrl|string|false|none|none|

<h2 id="tocS_ApiHashComponentIdentifiersDTO">ApiHashComponentIdentifiersDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapihashcomponentidentifiersdto"></a>
<a id="schema_ApiHashComponentIdentifiersDTO"></a>
<a id="tocSapihashcomponentidentifiersdto"></a>
<a id="tocsapihashcomponentidentifiersdto"></a>

```json
{
  "componentClaims": [
    {
      "hash": "string",
      "comment": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "packageUrl": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentClaims|[[ApiHashComponentIdentifierDTO](#schemaapihashcomponentidentifierdto)]|false|none|none|

<h2 id="tocS_ApiJiraConfigurationDTO">ApiJiraConfigurationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapijiraconfigurationdto"></a>
<a id="schema_ApiJiraConfigurationDTO"></a>
<a id="tocSapijiraconfigurationdto"></a>
<a id="tocsapijiraconfigurationdto"></a>

```json
{
  "url": "string",
  "username": "string",
  "password": [
    "string"
  ],
  "customFields": {
    "property1": {},
    "property2": {}
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|none|
|username|string|false|none|none|
|password|[string]|false|none|none|
|customFields|object|false|none|none|
|» **additionalProperties**|object|false|none|none|

<h2 id="tocS_JsonNode">JsonNode</h2>
<!-- backwards compatibility -->
<a id="schemajsonnode"></a>
<a id="schema_JsonNode"></a>
<a id="tocSjsonnode"></a>
<a id="tocsjsonnode"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_ApiLabelDTO">ApiLabelDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapilabeldto"></a>
<a id="schema_ApiLabelDTO"></a>
<a id="tocSapilabeldto"></a>
<a id="tocsapilabeldto"></a>

```json
{
  "id": "string",
  "label": "string",
  "description": "string",
  "color": "string",
  "ownerId": "string",
  "ownerType": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|label|string|false|none|none|
|description|string|false|none|none|
|color|string|false|none|none|
|ownerId|string|false|none|none|
|ownerType|string|false|none|none|

<h2 id="tocS_ApplicableContext">ApplicableContext</h2>
<!-- backwards compatibility -->
<a id="schemaapplicablecontext"></a>
<a id="schema_ApplicableContext"></a>
<a id="tocSapplicablecontext"></a>
<a id="tocsapplicablecontext"></a>

```json
{
  "id": "string",
  "name": "string",
  "type": "application",
  "children": [
    {
      "id": "string",
      "name": "string",
      "type": "application",
      "children": []
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|type|string|false|none|none|
|children|[[ApplicableContext](#schemaapplicablecontext)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|application|
|type|organization|
|type|repository_container|
|type|repository_manager|
|type|repository|
|type|global|

<h2 id="tocS_ApplicableLabels">ApplicableLabels</h2>
<!-- backwards compatibility -->
<a id="schemaapplicablelabels"></a>
<a id="schema_ApplicableLabels"></a>
<a id="tocSapplicablelabels"></a>
<a id="tocsapplicablelabels"></a>

```json
{
  "labelsByOwner": [
    {
      "ownerId": "string",
      "ownerName": "string",
      "ownerType": "application",
      "labels": [
        {
          "id": "string",
          "label": "string",
          "description": "string",
          "color": "string",
          "ownerId": "string",
          "ownerType": "string"
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|labelsByOwner|[[LabelsByOwner](#schemalabelsbyowner)]|false|none|none|

<h2 id="tocS_LabelsByOwner">LabelsByOwner</h2>
<!-- backwards compatibility -->
<a id="schemalabelsbyowner"></a>
<a id="schema_LabelsByOwner"></a>
<a id="tocSlabelsbyowner"></a>
<a id="tocslabelsbyowner"></a>

```json
{
  "ownerId": "string",
  "ownerName": "string",
  "ownerType": "application",
  "labels": [
    {
      "id": "string",
      "label": "string",
      "description": "string",
      "color": "string",
      "ownerId": "string",
      "ownerType": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ownerId|string|false|none|none|
|ownerName|string|false|none|none|
|ownerType|string|false|none|none|
|labels|[[ApiLabelDTO](#schemaapilabeldto)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

<h2 id="tocS_AttributionReportTemplateDTO">AttributionReportTemplateDTO</h2>
<!-- backwards compatibility -->
<a id="schemaattributionreporttemplatedto"></a>
<a id="schema_AttributionReportTemplateDTO"></a>
<a id="tocSattributionreporttemplatedto"></a>
<a id="tocsattributionreporttemplatedto"></a>

```json
{
  "id": "string",
  "templateName": "string",
  "documentTitle": "string",
  "header": "string",
  "footer": "string",
  "includeTableOfContents": true,
  "includeAppendix": true,
  "includeStandardLicenseTexts": true,
  "includeSonatypeSpecialLicenses": true,
  "lastUpdatedAt": "2019-08-24T14:15:22Z",
  "includeInnerSource": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|templateName|string|false|none|none|
|documentTitle|string|false|none|none|
|header|string|false|none|none|
|footer|string|false|none|none|
|includeTableOfContents|boolean|false|none|none|
|includeAppendix|boolean|false|none|none|
|includeStandardLicenseTexts|boolean|false|none|none|
|includeSonatypeSpecialLicenses|boolean|false|none|none|
|lastUpdatedAt|string(date-time)|false|none|none|
|includeInnerSource|boolean|false|none|none|

<h2 id="tocS_ApiLicenseLegalApplicationReportDTO">ApiLicenseLegalApplicationReportDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapilicenselegalapplicationreportdto"></a>
<a id="schema_ApiLicenseLegalApplicationReportDTO"></a>
<a id="tocSapilicenselegalapplicationreportdto"></a>
<a id="tocsapilicenselegalapplicationreportdto"></a>

```json
{
  "components": [
    {
      "packageUrl": "string",
      "hash": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "licenseLegalData": {
        "declaredLicenses": [
          "string"
        ],
        "observedLicenses": [
          "string"
        ],
        "effectiveLicenses": [
          "string"
        ],
        "highestEffectiveLicenseThreatGroup": {
          "licenseThreatGroupName": "string",
          "licenseThreatGroupLevel": 0,
          "licenseThreatGroupCategory": "string"
        },
        "copyrights": [
          {
            "id": "string",
            "content": "string",
            "originalContentHash": "string",
            "status": "enabled"
          }
        ],
        "licenseFiles": [
          {
            "id": "string",
            "relPath": "string",
            "content": "string",
            "originalContentHash": "string",
            "status": "enabled"
          }
        ],
        "noticeFiles": [
          {
            "id": "string",
            "relPath": "string",
            "content": "string",
            "originalContentHash": "string",
            "status": "enabled"
          }
        ],
        "obligations": [
          {
            "id": "string",
            "name": "string",
            "status": "OPEN",
            "comment": "string",
            "componentIdentifier": {
              "format": "string",
              "coordinates": {
                "property1": "string",
                "property2": "string"
              }
            },
            "packageUrl": "string",
            "ownerId": "string",
            "lastUpdatedAt": "2019-08-24T14:15:22Z",
            "lastUpdatedByUsername": "string"
          }
        ],
        "attributions": [
          {
            "id": "string",
            "componentIdentifier": {
              "format": "string",
              "coordinates": {
                "property1": "string",
                "property2": "string"
              }
            },
            "packageUrl": "string",
            "ownerId": "string",
            "obligationName": "string",
            "content": "string",
            "lastUpdatedAt": "2019-08-24T14:15:22Z",
            "lastUpdatedByUsername": "string"
          }
        ],
        "sourceLinks": [
          {
            "id": "string",
            "content": "string",
            "originalContent": "string",
            "status": "enabled"
          }
        ],
        "effectiveLicenseStatus": "string",
        "componentCopyrightId": "string",
        "componentCopyrightScopeOwnerId": "string",
        "componentCopyrightLastUpdatedByUsername": "string",
        "componentCopyrightLastUpdatedAt": "2019-08-24T14:15:22Z",
        "componentLicensesId": "string",
        "componentLicensesScopeOwnerId": "string",
        "componentLicensesLastUpdatedByUsername": "string",
        "componentLicensesLastUpdatedAt": "2019-08-24T14:15:22Z",
        "componentNoticesId": "string",
        "componentNoticesScopeOwnerId": "string",
        "componentNoticesLastUpdatedByUsername": "string",
        "componentNoticesLastUpdatedAt": "2019-08-24T14:15:22Z"
      },
      "stageScans": [
        {
          "stageName": "string",
          "scanId": "string",
          "scanDate": "2019-08-24T14:15:22Z"
        }
      ]
    }
  ],
  "licenseLegalMetadata": [
    {
      "licenseId": "string",
      "licenseName": "string",
      "licenseText": "string",
      "obligations": [
        {
          "name": "string",
          "obligationTexts": [
            "string"
          ]
        }
      ],
      "threatGroup": {
        "name": "string",
        "threatLevel": 0
      },
      "isMulti": true,
      "singleLicenseIds": [
        "string"
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|components|[[ApiLicenseLegalComponentDTO](#schemaapilicenselegalcomponentdto)]|false|none|none|
|licenseLegalMetadata|[[ApiLicenseLegalMetadataDTO](#schemaapilicenselegalmetadatadto)]|false|none|none|

<h2 id="tocS_ApiLicenseLegalComponentDTO">ApiLicenseLegalComponentDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapilicenselegalcomponentdto"></a>
<a id="schema_ApiLicenseLegalComponentDTO"></a>
<a id="tocSapilicenselegalcomponentdto"></a>
<a id="tocsapilicenselegalcomponentdto"></a>

```json
{
  "packageUrl": "string",
  "hash": "string",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "displayName": "string",
  "licenseLegalData": {
    "declaredLicenses": [
      "string"
    ],
    "observedLicenses": [
      "string"
    ],
    "effectiveLicenses": [
      "string"
    ],
    "highestEffectiveLicenseThreatGroup": {
      "licenseThreatGroupName": "string",
      "licenseThreatGroupLevel": 0,
      "licenseThreatGroupCategory": "string"
    },
    "copyrights": [
      {
        "id": "string",
        "content": "string",
        "originalContentHash": "string",
        "status": "enabled"
      }
    ],
    "licenseFiles": [
      {
        "id": "string",
        "relPath": "string",
        "content": "string",
        "originalContentHash": "string",
        "status": "enabled"
      }
    ],
    "noticeFiles": [
      {
        "id": "string",
        "relPath": "string",
        "content": "string",
        "originalContentHash": "string",
        "status": "enabled"
      }
    ],
    "obligations": [
      {
        "id": "string",
        "name": "string",
        "status": "OPEN",
        "comment": "string",
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "packageUrl": "string",
        "ownerId": "string",
        "lastUpdatedAt": "2019-08-24T14:15:22Z",
        "lastUpdatedByUsername": "string"
      }
    ],
    "attributions": [
      {
        "id": "string",
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "packageUrl": "string",
        "ownerId": "string",
        "obligationName": "string",
        "content": "string",
        "lastUpdatedAt": "2019-08-24T14:15:22Z",
        "lastUpdatedByUsername": "string"
      }
    ],
    "sourceLinks": [
      {
        "id": "string",
        "content": "string",
        "originalContent": "string",
        "status": "enabled"
      }
    ],
    "effectiveLicenseStatus": "string",
    "componentCopyrightId": "string",
    "componentCopyrightScopeOwnerId": "string",
    "componentCopyrightLastUpdatedByUsername": "string",
    "componentCopyrightLastUpdatedAt": "2019-08-24T14:15:22Z",
    "componentLicensesId": "string",
    "componentLicensesScopeOwnerId": "string",
    "componentLicensesLastUpdatedByUsername": "string",
    "componentLicensesLastUpdatedAt": "2019-08-24T14:15:22Z",
    "componentNoticesId": "string",
    "componentNoticesScopeOwnerId": "string",
    "componentNoticesLastUpdatedByUsername": "string",
    "componentNoticesLastUpdatedAt": "2019-08-24T14:15:22Z"
  },
  "stageScans": [
    {
      "stageName": "string",
      "scanId": "string",
      "scanDate": "2019-08-24T14:15:22Z"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageUrl|string|false|none|none|
|hash|string|false|none|none|
|componentIdentifier|[ApiComponentIdentifierDTOV2](#schemaapicomponentidentifierdtov2)|false|none|none|
|displayName|string|false|none|none|
|licenseLegalData|[ApiLicenseLegalDataDTO](#schemaapilicenselegaldatadto)|false|none|none|
|stageScans|[[ApiLicenseLegalStageScanDTO](#schemaapilicenselegalstagescandto)]|false|none|none|

<h2 id="tocS_ApiLicenseLegalCopyrightDTO">ApiLicenseLegalCopyrightDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapilicenselegalcopyrightdto"></a>
<a id="schema_ApiLicenseLegalCopyrightDTO"></a>
<a id="tocSapilicenselegalcopyrightdto"></a>
<a id="tocsapilicenselegalcopyrightdto"></a>

```json
{
  "id": "string",
  "content": "string",
  "originalContentHash": "string",
  "status": "enabled"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|content|string|false|none|none|
|originalContentHash|string|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_ApiLicenseLegalDataDTO">ApiLicenseLegalDataDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapilicenselegaldatadto"></a>
<a id="schema_ApiLicenseLegalDataDTO"></a>
<a id="tocSapilicenselegaldatadto"></a>
<a id="tocsapilicenselegaldatadto"></a>

```json
{
  "declaredLicenses": [
    "string"
  ],
  "observedLicenses": [
    "string"
  ],
  "effectiveLicenses": [
    "string"
  ],
  "highestEffectiveLicenseThreatGroup": {
    "licenseThreatGroupName": "string",
    "licenseThreatGroupLevel": 0,
    "licenseThreatGroupCategory": "string"
  },
  "copyrights": [
    {
      "id": "string",
      "content": "string",
      "originalContentHash": "string",
      "status": "enabled"
    }
  ],
  "licenseFiles": [
    {
      "id": "string",
      "relPath": "string",
      "content": "string",
      "originalContentHash": "string",
      "status": "enabled"
    }
  ],
  "noticeFiles": [
    {
      "id": "string",
      "relPath": "string",
      "content": "string",
      "originalContentHash": "string",
      "status": "enabled"
    }
  ],
  "obligations": [
    {
      "id": "string",
      "name": "string",
      "status": "OPEN",
      "comment": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "packageUrl": "string",
      "ownerId": "string",
      "lastUpdatedAt": "2019-08-24T14:15:22Z",
      "lastUpdatedByUsername": "string"
    }
  ],
  "attributions": [
    {
      "id": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "packageUrl": "string",
      "ownerId": "string",
      "obligationName": "string",
      "content": "string",
      "lastUpdatedAt": "2019-08-24T14:15:22Z",
      "lastUpdatedByUsername": "string"
    }
  ],
  "sourceLinks": [
    {
      "id": "string",
      "content": "string",
      "originalContent": "string",
      "status": "enabled"
    }
  ],
  "effectiveLicenseStatus": "string",
  "componentCopyrightId": "string",
  "componentCopyrightScopeOwnerId": "string",
  "componentCopyrightLastUpdatedByUsername": "string",
  "componentCopyrightLastUpdatedAt": "2019-08-24T14:15:22Z",
  "componentLicensesId": "string",
  "componentLicensesScopeOwnerId": "string",
  "componentLicensesLastUpdatedByUsername": "string",
  "componentLicensesLastUpdatedAt": "2019-08-24T14:15:22Z",
  "componentNoticesId": "string",
  "componentNoticesScopeOwnerId": "string",
  "componentNoticesLastUpdatedByUsername": "string",
  "componentNoticesLastUpdatedAt": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|declaredLicenses|[string]|false|none|none|
|observedLicenses|[string]|false|none|none|
|effectiveLicenses|[string]|false|none|none|
|highestEffectiveLicenseThreatGroup|[ApiLicenseThreatDTOV2](#schemaapilicensethreatdtov2)|false|none|none|
|copyrights|[[ApiLicenseLegalCopyrightDTO](#schemaapilicenselegalcopyrightdto)]|false|none|none|
|licenseFiles|[[ApiLicenseLegalFileDTO](#schemaapilicenselegalfiledto)]|false|none|none|
|noticeFiles|[[ApiLicenseLegalFileDTO](#schemaapilicenselegalfiledto)]|false|none|none|
|obligations|[[ApiLicenseLegalObligationDTO](#schemaapilicenselegalobligationdto)]|false|none|none|
|attributions|[[ComponentObligationAttributionDTO](#schemacomponentobligationattributiondto)]|false|none|none|
|sourceLinks|[[LegalSourceLinkDTO](#schemalegalsourcelinkdto)]|false|none|none|
|effectiveLicenseStatus|string|false|none|none|
|componentCopyrightId|string|false|none|none|
|componentCopyrightScopeOwnerId|string|false|none|none|
|componentCopyrightLastUpdatedByUsername|string|false|none|none|
|componentCopyrightLastUpdatedAt|string(date-time)|false|none|none|
|componentLicensesId|string|false|none|none|
|componentLicensesScopeOwnerId|string|false|none|none|
|componentLicensesLastUpdatedByUsername|string|false|none|none|
|componentLicensesLastUpdatedAt|string(date-time)|false|none|none|
|componentNoticesId|string|false|none|none|
|componentNoticesScopeOwnerId|string|false|none|none|
|componentNoticesLastUpdatedByUsername|string|false|none|none|
|componentNoticesLastUpdatedAt|string(date-time)|false|none|none|

<h2 id="tocS_ApiLicenseLegalFileDTO">ApiLicenseLegalFileDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapilicenselegalfiledto"></a>
<a id="schema_ApiLicenseLegalFileDTO"></a>
<a id="tocSapilicenselegalfiledto"></a>
<a id="tocsapilicenselegalfiledto"></a>

```json
{
  "id": "string",
  "relPath": "string",
  "content": "string",
  "originalContentHash": "string",
  "status": "enabled"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|relPath|string|false|none|none|
|content|string|false|none|none|
|originalContentHash|string|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_ApiLicenseLegalMetadataDTO">ApiLicenseLegalMetadataDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapilicenselegalmetadatadto"></a>
<a id="schema_ApiLicenseLegalMetadataDTO"></a>
<a id="tocSapilicenselegalmetadatadto"></a>
<a id="tocsapilicenselegalmetadatadto"></a>

```json
{
  "licenseId": "string",
  "licenseName": "string",
  "licenseText": "string",
  "obligations": [
    {
      "name": "string",
      "obligationTexts": [
        "string"
      ]
    }
  ],
  "threatGroup": {
    "name": "string",
    "threatLevel": 0
  },
  "isMulti": true,
  "singleLicenseIds": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|licenseId|string|false|none|none|
|licenseName|string|false|none|none|
|licenseText|string|false|none|none|
|obligations|[[LicenseObligationDTO](#schemalicenseobligationdto)]|false|none|none|
|threatGroup|[LicenseThreatGroupDTO](#schemalicensethreatgroupdto)|false|none|none|
|isMulti|boolean|false|none|none|
|singleLicenseIds|[string]|false|none|none|

<h2 id="tocS_ApiLicenseLegalObligationDTO">ApiLicenseLegalObligationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapilicenselegalobligationdto"></a>
<a id="schema_ApiLicenseLegalObligationDTO"></a>
<a id="tocSapilicenselegalobligationdto"></a>
<a id="tocsapilicenselegalobligationdto"></a>

```json
{
  "id": "string",
  "name": "string",
  "status": "OPEN",
  "comment": "string",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "packageUrl": "string",
  "ownerId": "string",
  "lastUpdatedAt": "2019-08-24T14:15:22Z",
  "lastUpdatedByUsername": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|status|string|false|none|none|
|comment|string|false|none|none|
|componentIdentifier|[ApiComponentIdentifierDTOV2](#schemaapicomponentidentifierdtov2)|false|none|none|
|packageUrl|string|false|none|none|
|ownerId|string|false|none|none|
|lastUpdatedAt|string(date-time)|false|none|none|
|lastUpdatedByUsername|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OPEN|
|status|IGNORED|
|status|FLAGGED|
|status|FULFILLED|

<h2 id="tocS_ApiLicenseLegalStageScanDTO">ApiLicenseLegalStageScanDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapilicenselegalstagescandto"></a>
<a id="schema_ApiLicenseLegalStageScanDTO"></a>
<a id="tocSapilicenselegalstagescandto"></a>
<a id="tocsapilicenselegalstagescandto"></a>

```json
{
  "stageName": "string",
  "scanId": "string",
  "scanDate": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stageName|string|false|none|none|
|scanId|string|false|none|none|
|scanDate|string(date-time)|false|none|none|

<h2 id="tocS_ApiLicenseThreatDTOV2">ApiLicenseThreatDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapilicensethreatdtov2"></a>
<a id="schema_ApiLicenseThreatDTOV2"></a>
<a id="tocSapilicensethreatdtov2"></a>
<a id="tocsapilicensethreatdtov2"></a>

```json
{
  "licenseThreatGroupName": "string",
  "licenseThreatGroupLevel": 0,
  "licenseThreatGroupCategory": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|licenseThreatGroupName|string|false|none|none|
|licenseThreatGroupLevel|integer(int32)|false|none|none|
|licenseThreatGroupCategory|string|false|none|none|

<h2 id="tocS_ComponentObligationAttributionDTO">ComponentObligationAttributionDTO</h2>
<!-- backwards compatibility -->
<a id="schemacomponentobligationattributiondto"></a>
<a id="schema_ComponentObligationAttributionDTO"></a>
<a id="tocScomponentobligationattributiondto"></a>
<a id="tocscomponentobligationattributiondto"></a>

```json
{
  "id": "string",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "packageUrl": "string",
  "ownerId": "string",
  "obligationName": "string",
  "content": "string",
  "lastUpdatedAt": "2019-08-24T14:15:22Z",
  "lastUpdatedByUsername": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|componentIdentifier|[ApiComponentIdentifierDTOV2](#schemaapicomponentidentifierdtov2)|false|none|none|
|packageUrl|string|false|none|none|
|ownerId|string|false|none|none|
|obligationName|string|false|none|none|
|content|string|false|none|none|
|lastUpdatedAt|string(date-time)|false|none|none|
|lastUpdatedByUsername|string|false|none|none|

<h2 id="tocS_LegalSourceLinkDTO">LegalSourceLinkDTO</h2>
<!-- backwards compatibility -->
<a id="schemalegalsourcelinkdto"></a>
<a id="schema_LegalSourceLinkDTO"></a>
<a id="tocSlegalsourcelinkdto"></a>
<a id="tocslegalsourcelinkdto"></a>

```json
{
  "id": "string",
  "content": "string",
  "originalContent": "string",
  "status": "enabled"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|content|string|false|none|none|
|originalContent|string|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|enabled|
|status|disabled|

<h2 id="tocS_LicenseObligationDTO">LicenseObligationDTO</h2>
<!-- backwards compatibility -->
<a id="schemalicenseobligationdto"></a>
<a id="schema_LicenseObligationDTO"></a>
<a id="tocSlicenseobligationdto"></a>
<a id="tocslicenseobligationdto"></a>

```json
{
  "name": "string",
  "obligationTexts": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|obligationTexts|[string]|false|none|none|

<h2 id="tocS_LicenseThreatGroupDTO">LicenseThreatGroupDTO</h2>
<!-- backwards compatibility -->
<a id="schemalicensethreatgroupdto"></a>
<a id="schema_LicenseThreatGroupDTO"></a>
<a id="tocSlicensethreatgroupdto"></a>
<a id="tocslicensethreatgroupdto"></a>

```json
{
  "name": "string",
  "threatLevel": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|threatLevel|integer(int32)|false|none|none|

<h2 id="tocS_ApiLicenseLegalComponentReportDTO">ApiLicenseLegalComponentReportDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapilicenselegalcomponentreportdto"></a>
<a id="schema_ApiLicenseLegalComponentReportDTO"></a>
<a id="tocSapilicenselegalcomponentreportdto"></a>
<a id="tocsapilicenselegalcomponentreportdto"></a>

```json
{
  "component": {
    "packageUrl": "string",
    "hash": "string",
    "componentIdentifier": {
      "format": "string",
      "coordinates": {
        "property1": "string",
        "property2": "string"
      }
    },
    "displayName": "string",
    "licenseLegalData": {
      "declaredLicenses": [
        "string"
      ],
      "observedLicenses": [
        "string"
      ],
      "effectiveLicenses": [
        "string"
      ],
      "highestEffectiveLicenseThreatGroup": {
        "licenseThreatGroupName": "string",
        "licenseThreatGroupLevel": 0,
        "licenseThreatGroupCategory": "string"
      },
      "copyrights": [
        {
          "id": "string",
          "content": "string",
          "originalContentHash": "string",
          "status": "enabled"
        }
      ],
      "licenseFiles": [
        {
          "id": "string",
          "relPath": "string",
          "content": "string",
          "originalContentHash": "string",
          "status": "enabled"
        }
      ],
      "noticeFiles": [
        {
          "id": "string",
          "relPath": "string",
          "content": "string",
          "originalContentHash": "string",
          "status": "enabled"
        }
      ],
      "obligations": [
        {
          "id": "string",
          "name": "string",
          "status": "OPEN",
          "comment": "string",
          "componentIdentifier": {
            "format": "string",
            "coordinates": {
              "property1": "string",
              "property2": "string"
            }
          },
          "packageUrl": "string",
          "ownerId": "string",
          "lastUpdatedAt": "2019-08-24T14:15:22Z",
          "lastUpdatedByUsername": "string"
        }
      ],
      "attributions": [
        {
          "id": "string",
          "componentIdentifier": {
            "format": "string",
            "coordinates": {
              "property1": "string",
              "property2": "string"
            }
          },
          "packageUrl": "string",
          "ownerId": "string",
          "obligationName": "string",
          "content": "string",
          "lastUpdatedAt": "2019-08-24T14:15:22Z",
          "lastUpdatedByUsername": "string"
        }
      ],
      "sourceLinks": [
        {
          "id": "string",
          "content": "string",
          "originalContent": "string",
          "status": "enabled"
        }
      ],
      "effectiveLicenseStatus": "string",
      "componentCopyrightId": "string",
      "componentCopyrightScopeOwnerId": "string",
      "componentCopyrightLastUpdatedByUsername": "string",
      "componentCopyrightLastUpdatedAt": "2019-08-24T14:15:22Z",
      "componentLicensesId": "string",
      "componentLicensesScopeOwnerId": "string",
      "componentLicensesLastUpdatedByUsername": "string",
      "componentLicensesLastUpdatedAt": "2019-08-24T14:15:22Z",
      "componentNoticesId": "string",
      "componentNoticesScopeOwnerId": "string",
      "componentNoticesLastUpdatedByUsername": "string",
      "componentNoticesLastUpdatedAt": "2019-08-24T14:15:22Z"
    },
    "stageScans": [
      {
        "stageName": "string",
        "scanId": "string",
        "scanDate": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "licenseLegalMetadata": [
    {
      "licenseId": "string",
      "licenseName": "string",
      "licenseText": "string",
      "obligations": [
        {
          "name": "string",
          "obligationTexts": [
            "string"
          ]
        }
      ],
      "threatGroup": {
        "name": "string",
        "threatLevel": 0
      },
      "isMulti": true,
      "singleLicenseIds": [
        "string"
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|component|[ApiLicenseLegalComponentDTO](#schemaapilicenselegalcomponentdto)|false|none|none|
|licenseLegalMetadata|[[ApiLicenseLegalMetadataDTO](#schemaapilicenselegalmetadatadto)]|false|none|none|

<h2 id="tocS_ComponentIdentifier">ComponentIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemacomponentidentifier"></a>
<a id="schema_ComponentIdentifier"></a>
<a id="tocScomponentidentifier"></a>
<a id="tocscomponentidentifier"></a>

```json
{
  "format": "string",
  "coordinates": {
    "property1": "string",
    "property2": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|none|
|coordinates|object|false|none|none|
|» **additionalProperties**|string|false|none|none|

<h2 id="tocS_BodyPart">BodyPart</h2>
<!-- backwards compatibility -->
<a id="schemabodypart"></a>
<a id="schema_BodyPart"></a>
<a id="tocSbodypart"></a>
<a id="tocsbodypart"></a>

```json
{
  "contentDisposition": {
    "type": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "fileName": "string",
    "creationDate": "2019-08-24T14:15:22Z",
    "modificationDate": "2019-08-24T14:15:22Z",
    "readDate": "2019-08-24T14:15:22Z",
    "size": 0
  },
  "entity": {},
  "headers": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "mediaType": {
    "type": "string",
    "subtype": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "wildcardType": true,
    "wildcardSubtype": true
  },
  "messageBodyWorkers": {},
  "parent": {
    "contentDisposition": {
      "type": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "fileName": "string",
      "creationDate": "2019-08-24T14:15:22Z",
      "modificationDate": "2019-08-24T14:15:22Z",
      "readDate": "2019-08-24T14:15:22Z",
      "size": 0
    },
    "entity": {},
    "headers": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "mediaType": {
      "type": "string",
      "subtype": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "wildcardType": true,
      "wildcardSubtype": true
    },
    "messageBodyWorkers": {},
    "parent": {},
    "providers": {},
    "bodyParts": [
      {
        "contentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0
        },
        "entity": {},
        "headers": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "type": "string",
          "subtype": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "wildcardType": true,
          "wildcardSubtype": true
        },
        "messageBodyWorkers": {},
        "parent": {},
        "providers": {},
        "parameterizedHeaders": {
          "property1": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "property2": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ]
        }
      }
    ],
    "parameterizedHeaders": {
      "property1": [
        {
          "value": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "property2": [
        {
          "value": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      ]
    }
  },
  "providers": {},
  "parameterizedHeaders": {
    "property1": [
      {
        "value": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "property2": [
      {
        "value": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDisposition|[ContentDisposition](#schemacontentdisposition)|false|none|none|
|entity|object|false|none|none|
|headers|object|false|none|none|
|» **additionalProperties**|[string]|false|none|none|
|mediaType|object|false|none|none|
|» type|string|false|none|none|
|» subtype|string|false|none|none|
|» parameters|object|false|none|none|
|»» **additionalProperties**|string|false|none|none|
|» wildcardType|boolean|false|none|none|
|» wildcardSubtype|boolean|false|none|none|
|messageBodyWorkers|[MessageBodyWorkers](#schemamessagebodyworkers)|false|none|none|
|parent|[MultiPart](#schemamultipart)|false|none|none|
|providers|object|false|none|none|
|parameterizedHeaders|object|false|none|none|
|» **additionalProperties**|[[ParameterizedHeader](#schemaparameterizedheader)]|false|none|none|

<h2 id="tocS_ContentDisposition">ContentDisposition</h2>
<!-- backwards compatibility -->
<a id="schemacontentdisposition"></a>
<a id="schema_ContentDisposition"></a>
<a id="tocScontentdisposition"></a>
<a id="tocscontentdisposition"></a>

```json
{
  "type": "string",
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "fileName": "string",
  "creationDate": "2019-08-24T14:15:22Z",
  "modificationDate": "2019-08-24T14:15:22Z",
  "readDate": "2019-08-24T14:15:22Z",
  "size": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|parameters|object|false|none|none|
|» **additionalProperties**|string|false|none|none|
|fileName|string|false|none|none|
|creationDate|string(date-time)|false|none|none|
|modificationDate|string(date-time)|false|none|none|
|readDate|string(date-time)|false|none|none|
|size|integer(int64)|false|none|none|

<h2 id="tocS_FormDataBodyPart">FormDataBodyPart</h2>
<!-- backwards compatibility -->
<a id="schemaformdatabodypart"></a>
<a id="schema_FormDataBodyPart"></a>
<a id="tocSformdatabodypart"></a>
<a id="tocsformdatabodypart"></a>

```json
{
  "contentDisposition": {
    "type": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "fileName": "string",
    "creationDate": "2019-08-24T14:15:22Z",
    "modificationDate": "2019-08-24T14:15:22Z",
    "readDate": "2019-08-24T14:15:22Z",
    "size": 0
  },
  "entity": {},
  "headers": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "mediaType": {
    "type": "string",
    "subtype": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "wildcardType": true,
    "wildcardSubtype": true
  },
  "messageBodyWorkers": {},
  "parent": {
    "contentDisposition": {
      "type": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "fileName": "string",
      "creationDate": "2019-08-24T14:15:22Z",
      "modificationDate": "2019-08-24T14:15:22Z",
      "readDate": "2019-08-24T14:15:22Z",
      "size": 0
    },
    "entity": {},
    "headers": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "mediaType": {
      "type": "string",
      "subtype": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "wildcardType": true,
      "wildcardSubtype": true
    },
    "messageBodyWorkers": {},
    "parent": {},
    "providers": {},
    "bodyParts": [
      {
        "contentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0
        },
        "entity": {},
        "headers": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "type": "string",
          "subtype": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "wildcardType": true,
          "wildcardSubtype": true
        },
        "messageBodyWorkers": {},
        "parent": {},
        "providers": {},
        "parameterizedHeaders": {
          "property1": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "property2": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ]
        }
      }
    ],
    "parameterizedHeaders": {
      "property1": [
        {
          "value": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "property2": [
        {
          "value": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      ]
    }
  },
  "providers": {},
  "simple": true,
  "name": "string",
  "value": "string",
  "formDataContentDisposition": {
    "type": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "fileName": "string",
    "creationDate": "2019-08-24T14:15:22Z",
    "modificationDate": "2019-08-24T14:15:22Z",
    "readDate": "2019-08-24T14:15:22Z",
    "size": 0,
    "name": "string"
  },
  "parameterizedHeaders": {
    "property1": [
      {
        "value": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "property2": [
      {
        "value": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDisposition|[ContentDisposition](#schemacontentdisposition)|false|none|none|
|entity|object|false|none|none|
|headers|object|false|none|none|
|» **additionalProperties**|[string]|false|none|none|
|mediaType|object|false|none|none|
|» type|string|false|none|none|
|» subtype|string|false|none|none|
|» parameters|object|false|none|none|
|»» **additionalProperties**|string|false|none|none|
|» wildcardType|boolean|false|none|none|
|» wildcardSubtype|boolean|false|none|none|
|messageBodyWorkers|[MessageBodyWorkers](#schemamessagebodyworkers)|false|none|none|
|parent|[MultiPart](#schemamultipart)|false|none|none|
|providers|object|false|none|none|
|simple|boolean|false|none|none|
|name|string|false|none|none|
|value|string|false|none|none|
|formDataContentDisposition|[FormDataContentDisposition](#schemaformdatacontentdisposition)|false|none|none|
|parameterizedHeaders|object|false|none|none|
|» **additionalProperties**|[[ParameterizedHeader](#schemaparameterizedheader)]|false|none|none|

<h2 id="tocS_FormDataContentDisposition">FormDataContentDisposition</h2>
<!-- backwards compatibility -->
<a id="schemaformdatacontentdisposition"></a>
<a id="schema_FormDataContentDisposition"></a>
<a id="tocSformdatacontentdisposition"></a>
<a id="tocsformdatacontentdisposition"></a>

```json
{
  "type": "string",
  "parameters": {
    "property1": "string",
    "property2": "string"
  },
  "fileName": "string",
  "creationDate": "2019-08-24T14:15:22Z",
  "modificationDate": "2019-08-24T14:15:22Z",
  "readDate": "2019-08-24T14:15:22Z",
  "size": 0,
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|parameters|object|false|none|none|
|» **additionalProperties**|string|false|none|none|
|fileName|string|false|none|none|
|creationDate|string(date-time)|false|none|none|
|modificationDate|string(date-time)|false|none|none|
|readDate|string(date-time)|false|none|none|
|size|integer(int64)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_FormDataMultiPart">FormDataMultiPart</h2>
<!-- backwards compatibility -->
<a id="schemaformdatamultipart"></a>
<a id="schema_FormDataMultiPart"></a>
<a id="tocSformdatamultipart"></a>
<a id="tocsformdatamultipart"></a>

```json
{
  "contentDisposition": {
    "type": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "fileName": "string",
    "creationDate": "2019-08-24T14:15:22Z",
    "modificationDate": "2019-08-24T14:15:22Z",
    "readDate": "2019-08-24T14:15:22Z",
    "size": 0
  },
  "entity": {},
  "headers": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "mediaType": {
    "type": "string",
    "subtype": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "wildcardType": true,
    "wildcardSubtype": true
  },
  "messageBodyWorkers": {},
  "parent": {
    "contentDisposition": {
      "type": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "fileName": "string",
      "creationDate": "2019-08-24T14:15:22Z",
      "modificationDate": "2019-08-24T14:15:22Z",
      "readDate": "2019-08-24T14:15:22Z",
      "size": 0
    },
    "entity": {},
    "headers": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "mediaType": {
      "type": "string",
      "subtype": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "wildcardType": true,
      "wildcardSubtype": true
    },
    "messageBodyWorkers": {},
    "parent": {},
    "providers": {},
    "bodyParts": [
      {
        "contentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0
        },
        "entity": {},
        "headers": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "type": "string",
          "subtype": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "wildcardType": true,
          "wildcardSubtype": true
        },
        "messageBodyWorkers": {},
        "parent": {},
        "providers": {},
        "parameterizedHeaders": {
          "property1": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "property2": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ]
        }
      }
    ],
    "parameterizedHeaders": {
      "property1": [
        {
          "value": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "property2": [
        {
          "value": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      ]
    }
  },
  "providers": {},
  "bodyParts": [
    {
      "contentDisposition": {
        "type": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "fileName": "string",
        "creationDate": "2019-08-24T14:15:22Z",
        "modificationDate": "2019-08-24T14:15:22Z",
        "readDate": "2019-08-24T14:15:22Z",
        "size": 0
      },
      "entity": {},
      "headers": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "mediaType": {
        "type": "string",
        "subtype": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "wildcardType": true,
        "wildcardSubtype": true
      },
      "messageBodyWorkers": {},
      "parent": {
        "contentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0
        },
        "entity": {},
        "headers": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "type": "string",
          "subtype": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "wildcardType": true,
          "wildcardSubtype": true
        },
        "messageBodyWorkers": {},
        "parent": {},
        "providers": {},
        "bodyParts": [
          {}
        ],
        "parameterizedHeaders": {
          "property1": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "property2": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ]
        }
      },
      "providers": {},
      "parameterizedHeaders": {
        "property1": [
          {
            "value": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "property2": [
          {
            "value": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            }
          }
        ]
      }
    }
  ],
  "fields": {
    "property1": [
      {
        "contentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0
        },
        "entity": {},
        "headers": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "type": "string",
          "subtype": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "wildcardType": true,
          "wildcardSubtype": true
        },
        "messageBodyWorkers": {},
        "parent": {
          "contentDisposition": {
            "type": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "fileName": "string",
            "creationDate": "2019-08-24T14:15:22Z",
            "modificationDate": "2019-08-24T14:15:22Z",
            "readDate": "2019-08-24T14:15:22Z",
            "size": 0
          },
          "entity": {},
          "headers": {
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "mediaType": {
            "type": "string",
            "subtype": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "wildcardType": true,
            "wildcardSubtype": true
          },
          "messageBodyWorkers": {},
          "parent": {},
          "providers": {},
          "bodyParts": [
            {
              "contentDisposition": {
                "type": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                },
                "fileName": "string",
                "creationDate": "2019-08-24T14:15:22Z",
                "modificationDate": "2019-08-24T14:15:22Z",
                "readDate": "2019-08-24T14:15:22Z",
                "size": 0
              },
              "entity": {},
              "headers": {
                "property1": [
                  "string"
                ],
                "property2": [
                  "string"
                ]
              },
              "mediaType": {
                "type": "string",
                "subtype": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                },
                "wildcardType": true,
                "wildcardSubtype": true
              },
              "messageBodyWorkers": {},
              "parent": {},
              "providers": {},
              "parameterizedHeaders": {
                "property1": [
                  {
                    "value": "string",
                    "parameters": {}
                  }
                ],
                "property2": [
                  {
                    "value": "string",
                    "parameters": {}
                  }
                ]
              }
            }
          ],
          "parameterizedHeaders": {
            "property1": [
              {
                "value": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "property2": [
              {
                "value": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ]
          }
        },
        "providers": {},
        "simple": true,
        "name": "string",
        "value": "string",
        "formDataContentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0,
          "name": "string"
        },
        "parameterizedHeaders": {
          "property1": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "property2": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ]
        }
      }
    ],
    "property2": [
      {
        "contentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0
        },
        "entity": {},
        "headers": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "type": "string",
          "subtype": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "wildcardType": true,
          "wildcardSubtype": true
        },
        "messageBodyWorkers": {},
        "parent": {
          "contentDisposition": {
            "type": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "fileName": "string",
            "creationDate": "2019-08-24T14:15:22Z",
            "modificationDate": "2019-08-24T14:15:22Z",
            "readDate": "2019-08-24T14:15:22Z",
            "size": 0
          },
          "entity": {},
          "headers": {
            "property1": [
              "string"
            ],
            "property2": [
              "string"
            ]
          },
          "mediaType": {
            "type": "string",
            "subtype": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            },
            "wildcardType": true,
            "wildcardSubtype": true
          },
          "messageBodyWorkers": {},
          "parent": {},
          "providers": {},
          "bodyParts": [
            {
              "contentDisposition": {
                "type": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                },
                "fileName": "string",
                "creationDate": "2019-08-24T14:15:22Z",
                "modificationDate": "2019-08-24T14:15:22Z",
                "readDate": "2019-08-24T14:15:22Z",
                "size": 0
              },
              "entity": {},
              "headers": {
                "property1": [
                  "string"
                ],
                "property2": [
                  "string"
                ]
              },
              "mediaType": {
                "type": "string",
                "subtype": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                },
                "wildcardType": true,
                "wildcardSubtype": true
              },
              "messageBodyWorkers": {},
              "parent": {},
              "providers": {},
              "parameterizedHeaders": {
                "property1": [
                  {
                    "value": "string",
                    "parameters": {}
                  }
                ],
                "property2": [
                  {
                    "value": "string",
                    "parameters": {}
                  }
                ]
              }
            }
          ],
          "parameterizedHeaders": {
            "property1": [
              {
                "value": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ],
            "property2": [
              {
                "value": "string",
                "parameters": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            ]
          }
        },
        "providers": {},
        "simple": true,
        "name": "string",
        "value": "string",
        "formDataContentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0,
          "name": "string"
        },
        "parameterizedHeaders": {
          "property1": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "property2": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ]
        }
      }
    ]
  },
  "parameterizedHeaders": {
    "property1": [
      {
        "value": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "property2": [
      {
        "value": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDisposition|[ContentDisposition](#schemacontentdisposition)|false|none|none|
|entity|object|false|none|none|
|headers|object|false|none|none|
|» **additionalProperties**|[string]|false|none|none|
|mediaType|object|false|none|none|
|» type|string|false|none|none|
|» subtype|string|false|none|none|
|» parameters|object|false|none|none|
|»» **additionalProperties**|string|false|none|none|
|» wildcardType|boolean|false|none|none|
|» wildcardSubtype|boolean|false|none|none|
|messageBodyWorkers|[MessageBodyWorkers](#schemamessagebodyworkers)|false|none|none|
|parent|[MultiPart](#schemamultipart)|false|none|none|
|providers|object|false|none|none|
|bodyParts|[[BodyPart](#schemabodypart)]|false|none|none|
|fields|object|false|none|none|
|» **additionalProperties**|[[FormDataBodyPart](#schemaformdatabodypart)]|false|none|none|
|parameterizedHeaders|object|false|none|none|
|» **additionalProperties**|[[ParameterizedHeader](#schemaparameterizedheader)]|false|none|none|

<h2 id="tocS_MessageBodyWorkers">MessageBodyWorkers</h2>
<!-- backwards compatibility -->
<a id="schemamessagebodyworkers"></a>
<a id="schema_MessageBodyWorkers"></a>
<a id="tocSmessagebodyworkers"></a>
<a id="tocsmessagebodyworkers"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_MultiPart">MultiPart</h2>
<!-- backwards compatibility -->
<a id="schemamultipart"></a>
<a id="schema_MultiPart"></a>
<a id="tocSmultipart"></a>
<a id="tocsmultipart"></a>

```json
{
  "contentDisposition": {
    "type": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "fileName": "string",
    "creationDate": "2019-08-24T14:15:22Z",
    "modificationDate": "2019-08-24T14:15:22Z",
    "readDate": "2019-08-24T14:15:22Z",
    "size": 0
  },
  "entity": {},
  "headers": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "mediaType": {
    "type": "string",
    "subtype": "string",
    "parameters": {
      "property1": "string",
      "property2": "string"
    },
    "wildcardType": true,
    "wildcardSubtype": true
  },
  "messageBodyWorkers": {},
  "parent": {
    "contentDisposition": {
      "type": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "fileName": "string",
      "creationDate": "2019-08-24T14:15:22Z",
      "modificationDate": "2019-08-24T14:15:22Z",
      "readDate": "2019-08-24T14:15:22Z",
      "size": 0
    },
    "entity": {},
    "headers": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "mediaType": {
      "type": "string",
      "subtype": "string",
      "parameters": {
        "property1": "string",
        "property2": "string"
      },
      "wildcardType": true,
      "wildcardSubtype": true
    },
    "messageBodyWorkers": {},
    "parent": {},
    "providers": {},
    "bodyParts": [
      {
        "contentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0
        },
        "entity": {},
        "headers": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "type": "string",
          "subtype": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "wildcardType": true,
          "wildcardSubtype": true
        },
        "messageBodyWorkers": {},
        "parent": {},
        "providers": {},
        "parameterizedHeaders": {
          "property1": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "property2": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ]
        }
      }
    ],
    "parameterizedHeaders": {
      "property1": [
        {
          "value": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "property2": [
        {
          "value": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          }
        }
      ]
    }
  },
  "providers": {},
  "bodyParts": [
    {
      "contentDisposition": {
        "type": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "fileName": "string",
        "creationDate": "2019-08-24T14:15:22Z",
        "modificationDate": "2019-08-24T14:15:22Z",
        "readDate": "2019-08-24T14:15:22Z",
        "size": 0
      },
      "entity": {},
      "headers": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      },
      "mediaType": {
        "type": "string",
        "subtype": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        },
        "wildcardType": true,
        "wildcardSubtype": true
      },
      "messageBodyWorkers": {},
      "parent": {
        "contentDisposition": {
          "type": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "fileName": "string",
          "creationDate": "2019-08-24T14:15:22Z",
          "modificationDate": "2019-08-24T14:15:22Z",
          "readDate": "2019-08-24T14:15:22Z",
          "size": 0
        },
        "entity": {},
        "headers": {
          "property1": [
            "string"
          ],
          "property2": [
            "string"
          ]
        },
        "mediaType": {
          "type": "string",
          "subtype": "string",
          "parameters": {
            "property1": "string",
            "property2": "string"
          },
          "wildcardType": true,
          "wildcardSubtype": true
        },
        "messageBodyWorkers": {},
        "parent": {},
        "providers": {},
        "bodyParts": [],
        "parameterizedHeaders": {
          "property1": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ],
          "property2": [
            {
              "value": "string",
              "parameters": {
                "property1": "string",
                "property2": "string"
              }
            }
          ]
        }
      },
      "providers": {},
      "parameterizedHeaders": {
        "property1": [
          {
            "value": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            }
          }
        ],
        "property2": [
          {
            "value": "string",
            "parameters": {
              "property1": "string",
              "property2": "string"
            }
          }
        ]
      }
    }
  ],
  "parameterizedHeaders": {
    "property1": [
      {
        "value": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "property2": [
      {
        "value": "string",
        "parameters": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDisposition|[ContentDisposition](#schemacontentdisposition)|false|none|none|
|entity|object|false|none|none|
|headers|object|false|none|none|
|» **additionalProperties**|[string]|false|none|none|
|mediaType|object|false|none|none|
|» type|string|false|none|none|
|» subtype|string|false|none|none|
|» parameters|object|false|none|none|
|»» **additionalProperties**|string|false|none|none|
|» wildcardType|boolean|false|none|none|
|» wildcardSubtype|boolean|false|none|none|
|messageBodyWorkers|[MessageBodyWorkers](#schemamessagebodyworkers)|false|none|none|
|parent|[MultiPart](#schemamultipart)|false|none|none|
|providers|object|false|none|none|
|bodyParts|[[BodyPart](#schemabodypart)]|false|none|none|
|parameterizedHeaders|object|false|none|none|
|» **additionalProperties**|[[ParameterizedHeader](#schemaparameterizedheader)]|false|none|none|

<h2 id="tocS_ParameterizedHeader">ParameterizedHeader</h2>
<!-- backwards compatibility -->
<a id="schemaparameterizedheader"></a>
<a id="schema_ParameterizedHeader"></a>
<a id="tocSparameterizedheader"></a>
<a id="tocsparameterizedheader"></a>

```json
{
  "value": "string",
  "parameters": {
    "property1": "string",
    "property2": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|none|
|parameters|object|false|none|none|
|» **additionalProperties**|string|false|none|none|

<h2 id="tocS_ApiMailConfigurationDTO">ApiMailConfigurationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapimailconfigurationdto"></a>
<a id="schema_ApiMailConfigurationDTO"></a>
<a id="tocSapimailconfigurationdto"></a>
<a id="tocsapimailconfigurationdto"></a>

```json
{
  "hostname": "string",
  "port": 0,
  "username": "string",
  "password": [
    "string"
  ],
  "passwordIsIncluded": true,
  "sslEnabled": true,
  "startTlsEnabled": true,
  "systemEmail": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|false|none|none|
|port|integer(int32)|false|none|none|
|username|string|false|none|none|
|password|[string]|false|none|none|
|passwordIsIncluded|boolean|false|none|none|
|sslEnabled|boolean|false|none|none|
|startTlsEnabled|boolean|false|none|none|
|systemEmail|string|false|none|none|

<h2 id="tocS_ApiMetricsReportingQueryDTOV2">ApiMetricsReportingQueryDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapimetricsreportingquerydtov2"></a>
<a id="schema_ApiMetricsReportingQueryDTOV2"></a>
<a id="tocSapimetricsreportingquerydtov2"></a>
<a id="tocsapimetricsreportingquerydtov2"></a>

```json
{
  "timePeriod": "WEEK",
  "firstTimePeriod": "string",
  "lastTimePeriod": "string",
  "applicationIds": [
    "string"
  ],
  "organizationIds": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timePeriod|string|false|none|none|
|firstTimePeriod|string|false|none|none|
|lastTimePeriod|string|false|none|none|
|applicationIds|[string]|false|none|none|
|organizationIds|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|timePeriod|WEEK|
|timePeriod|MONTH|

<h2 id="tocS_ApiOrganizationDTO">ApiOrganizationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiorganizationdto"></a>
<a id="schema_ApiOrganizationDTO"></a>
<a id="tocSapiorganizationdto"></a>
<a id="tocsapiorganizationdto"></a>

```json
{
  "id": "string",
  "name": "string",
  "parentOrganizationId": "string",
  "tags": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "color": "white"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|parentOrganizationId|string|false|none|none|
|tags|[[ApiTagDTO](#schemaapitagdto)]|false|none|none|

<h2 id="tocS_ApiTagDTO">ApiTagDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapitagdto"></a>
<a id="schema_ApiTagDTO"></a>
<a id="tocSapitagdto"></a>
<a id="tocsapitagdto"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "color": "white"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|description|string|false|none|none|
|color|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|color|white|
|color|grey|
|color|black|
|color|green|
|color|yellow|
|color|orange|
|color|red|
|color|blue|
|color|light-red|
|color|light-green|
|color|light-blue|
|color|light-purple|
|color|dark-red|
|color|dark-green|
|color|dark-blue|
|color|dark-purple|

<h2 id="tocS_ApiOrganizationListDTO">ApiOrganizationListDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiorganizationlistdto"></a>
<a id="schema_ApiOrganizationListDTO"></a>
<a id="tocSapiorganizationlistdto"></a>
<a id="tocsapiorganizationlistdto"></a>

```json
{
  "organizations": [
    {
      "id": "string",
      "name": "string",
      "parentOrganizationId": "string",
      "tags": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "color": "white"
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organizations|[[ApiOrganizationDTO](#schemaapiorganizationdto)]|false|none|none|

<h2 id="tocS_ApiPolicyDTO">ApiPolicyDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapipolicydto"></a>
<a id="schema_ApiPolicyDTO"></a>
<a id="tocSapipolicydto"></a>
<a id="tocsapipolicydto"></a>

```json
{
  "id": "string",
  "name": "string",
  "ownerId": "string",
  "ownerType": "APPLICATION",
  "threatLevel": 0,
  "policyType": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|ownerId|string|false|none|none|
|ownerType|string|false|none|none|
|threatLevel|integer(int32)|false|none|none|
|policyType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ownerType|APPLICATION|
|ownerType|ORGANIZATION|

<h2 id="tocS_ApiPolicyListDTO">ApiPolicyListDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapipolicylistdto"></a>
<a id="schema_ApiPolicyListDTO"></a>
<a id="tocSapipolicylistdto"></a>
<a id="tocsapipolicylistdto"></a>

```json
{
  "policies": [
    {
      "id": "string",
      "name": "string",
      "ownerId": "string",
      "ownerType": "APPLICATION",
      "threatLevel": 0,
      "policyType": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policies|[[ApiPolicyDTO](#schemaapipolicydto)]|false|none|none|

<h2 id="tocS_ApiPolicyWaiversApplicableToViolationDTO">ApiPolicyWaiversApplicableToViolationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapipolicywaiversapplicabletoviolationdto"></a>
<a id="schema_ApiPolicyWaiversApplicableToViolationDTO"></a>
<a id="tocSapipolicywaiversapplicabletoviolationdto"></a>
<a id="tocsapipolicywaiversapplicabletoviolationdto"></a>

```json
{
  "activeWaivers": [
    {
      "policyWaiverId": "string",
      "policyViolationId": "string",
      "comment": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "expiryTime": "2019-08-24T14:15:22Z",
      "isObsolete": true,
      "scopeOwnerType": "string",
      "scopeOwnerId": "string",
      "scopeOwnerName": "string",
      "hash": "string",
      "policyId": "string",
      "vulnerabilityId": "string",
      "policyName": "string",
      "constraintFacts": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "operatorName": "string",
          "conditionFacts": [
            {
              "conditionTypeId": "string",
              "conditionIndex": 0,
              "summary": "string",
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              },
              "triggerJson": "string"
            }
          ]
        }
      ],
      "constraintFactsJson": "string",
      "componentName": "string",
      "creatorId": "string",
      "creatorName": "string",
      "matcherStrategy": "DEFAULT",
      "associatedPackageUrl": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "threatLevel": 0,
      "componentUpgradeAvailable": true,
      "displayName": {
        "parts": [
          {
            "field": "string",
            "value": "string"
          }
        ],
        "name": "string"
      }
    }
  ],
  "expiredWaivers": [
    {
      "policyWaiverId": "string",
      "policyViolationId": "string",
      "comment": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "expiryTime": "2019-08-24T14:15:22Z",
      "isObsolete": true,
      "scopeOwnerType": "string",
      "scopeOwnerId": "string",
      "scopeOwnerName": "string",
      "hash": "string",
      "policyId": "string",
      "vulnerabilityId": "string",
      "policyName": "string",
      "constraintFacts": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "operatorName": "string",
          "conditionFacts": [
            {
              "conditionTypeId": "string",
              "conditionIndex": 0,
              "summary": "string",
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              },
              "triggerJson": "string"
            }
          ]
        }
      ],
      "constraintFactsJson": "string",
      "componentName": "string",
      "creatorId": "string",
      "creatorName": "string",
      "matcherStrategy": "DEFAULT",
      "associatedPackageUrl": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "threatLevel": 0,
      "componentUpgradeAvailable": true,
      "displayName": {
        "parts": [
          {
            "field": "string",
            "value": "string"
          }
        ],
        "name": "string"
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeWaivers|[[ApiPolicyWaiverDTO](#schemaapipolicywaiverdto)]|false|none|none|
|expiredWaivers|[[ApiPolicyWaiverDTO](#schemaapipolicywaiverdto)]|false|none|none|

<h2 id="tocS_ApiCrossStageViolationDTOV2">ApiCrossStageViolationDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapicrossstageviolationdtov2"></a>
<a id="schema_ApiCrossStageViolationDTOV2"></a>
<a id="tocSapicrossstageviolationdtov2"></a>
<a id="tocsapicrossstageviolationdtov2"></a>

```json
{
  "policyId": "string",
  "policyName": "string",
  "policyViolationId": "string",
  "threatLevel": 0,
  "constraintViolations": [
    {
      "constraintId": "string",
      "constraintName": "string",
      "reasons": [
        {
          "reason": "string",
          "reference": {
            "value": "string",
            "type": "SECURITY_VULNERABILITY_REFID"
          }
        }
      ]
    }
  ],
  "applicationPublicId": "string",
  "applicationName": "string",
  "organizationName": "string",
  "openTime": "2019-08-24T14:15:22Z",
  "fixTime": "2019-08-24T14:15:22Z",
  "hash": "string",
  "policyThreatCategory": "string",
  "displayName": {
    "parts": [
      {
        "field": "string",
        "value": "string"
      }
    ],
    "name": "string"
  },
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "filename": "string",
  "stageData": {
    "property1": {
      "mostRecentEvaluationTime": "2019-08-24T14:15:22Z",
      "mostRecentScanId": "string",
      "actionTypeId": "string"
    },
    "property2": {
      "mostRecentEvaluationTime": "2019-08-24T14:15:22Z",
      "mostRecentScanId": "string",
      "actionTypeId": "string"
    }
  },
  "policyOwner": {
    "ownerPublicId": "string",
    "ownerId": "string",
    "ownerName": "string",
    "ownerType": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyId|string|false|none|none|
|policyName|string|false|none|none|
|policyViolationId|string|false|none|none|
|threatLevel|integer(int32)|false|none|none|
|constraintViolations|[[ApiConstraintViolationDTO](#schemaapiconstraintviolationdto)]|false|none|none|
|applicationPublicId|string|false|none|none|
|applicationName|string|false|none|none|
|organizationName|string|false|none|none|
|openTime|string(date-time)|false|none|none|
|fixTime|string(date-time)|false|none|none|
|hash|string|false|none|none|
|policyThreatCategory|string|false|none|none|
|displayName|[ComponentDisplayName](#schemacomponentdisplayname)|false|none|none|
|componentIdentifier|[ApiComponentIdentifierDTOV2](#schemaapicomponentidentifierdtov2)|false|none|none|
|filename|string|false|none|none|
|stageData|object|false|none|none|
|» **additionalProperties**|[StageData](#schemastagedata)|false|none|none|
|policyOwner|[PolicyOwner](#schemapolicyowner)|false|none|none|

<h2 id="tocS_PolicyOwner">PolicyOwner</h2>
<!-- backwards compatibility -->
<a id="schemapolicyowner"></a>
<a id="schema_PolicyOwner"></a>
<a id="tocSpolicyowner"></a>
<a id="tocspolicyowner"></a>

```json
{
  "ownerPublicId": "string",
  "ownerId": "string",
  "ownerName": "string",
  "ownerType": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ownerPublicId|string|false|none|none|
|ownerId|string|false|none|none|
|ownerName|string|false|none|none|
|ownerType|string|false|none|none|

<h2 id="tocS_StageData">StageData</h2>
<!-- backwards compatibility -->
<a id="schemastagedata"></a>
<a id="schema_StageData"></a>
<a id="tocSstagedata"></a>
<a id="tocsstagedata"></a>

```json
{
  "mostRecentEvaluationTime": "2019-08-24T14:15:22Z",
  "mostRecentScanId": "string",
  "actionTypeId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mostRecentEvaluationTime|string(date-time)|false|none|none|
|mostRecentScanId|string|false|none|none|
|actionTypeId|string|false|none|none|

<h2 id="tocS_ApiApplicationViolationDTOV2">ApiApplicationViolationDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapiapplicationviolationdtov2"></a>
<a id="schema_ApiApplicationViolationDTOV2"></a>
<a id="tocSapiapplicationviolationdtov2"></a>
<a id="tocsapiapplicationviolationdtov2"></a>

```json
{
  "application": {
    "id": "string",
    "publicId": "string",
    "name": "string",
    "organizationId": "string",
    "contactUserName": "string"
  },
  "policyViolations": [
    {
      "policyId": "string",
      "policyName": "string",
      "policyViolationId": "string",
      "threatLevel": 0,
      "constraintViolations": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "reasons": [
            {
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              }
            }
          ]
        }
      ],
      "stageId": "string",
      "reportId": "string",
      "reportUrl": "string",
      "openTime": "2019-08-24T14:15:22Z",
      "component": {
        "packageUrl": "string",
        "hash": "string",
        "sha256": "string",
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "displayName": "string",
        "proprietary": true,
        "thirdParty": true
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|[ApiApplicationBaseDTO](#schemaapiapplicationbasedto)|false|none|none|
|policyViolations|[[ApiEnhancedPolicyViolationDTOV2](#schemaapienhancedpolicyviolationdtov2)]|false|none|none|

<h2 id="tocS_ApiApplicationViolationListDTOV2">ApiApplicationViolationListDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapiapplicationviolationlistdtov2"></a>
<a id="schema_ApiApplicationViolationListDTOV2"></a>
<a id="tocSapiapplicationviolationlistdtov2"></a>
<a id="tocsapiapplicationviolationlistdtov2"></a>

```json
{
  "applicationViolations": [
    {
      "application": {
        "id": "string",
        "publicId": "string",
        "name": "string",
        "organizationId": "string",
        "contactUserName": "string"
      },
      "policyViolations": [
        {
          "policyId": "string",
          "policyName": "string",
          "policyViolationId": "string",
          "threatLevel": 0,
          "constraintViolations": [
            {
              "constraintId": "string",
              "constraintName": "string",
              "reasons": [
                {
                  "reason": "string",
                  "reference": {
                    "value": "string",
                    "type": "SECURITY_VULNERABILITY_REFID"
                  }
                }
              ]
            }
          ],
          "stageId": "string",
          "reportId": "string",
          "reportUrl": "string",
          "openTime": "2019-08-24T14:15:22Z",
          "component": {
            "packageUrl": "string",
            "hash": "string",
            "sha256": "string",
            "componentIdentifier": {
              "format": "string",
              "coordinates": {
                "property1": "string",
                "property2": "string"
              }
            },
            "displayName": "string",
            "proprietary": true,
            "thirdParty": true
          }
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationViolations|[[ApiApplicationViolationDTOV2](#schemaapiapplicationviolationdtov2)]|false|none|none|

<h2 id="tocS_ApiEnhancedPolicyViolationDTOV2">ApiEnhancedPolicyViolationDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapienhancedpolicyviolationdtov2"></a>
<a id="schema_ApiEnhancedPolicyViolationDTOV2"></a>
<a id="tocSapienhancedpolicyviolationdtov2"></a>
<a id="tocsapienhancedpolicyviolationdtov2"></a>

```json
{
  "policyId": "string",
  "policyName": "string",
  "policyViolationId": "string",
  "threatLevel": 0,
  "constraintViolations": [
    {
      "constraintId": "string",
      "constraintName": "string",
      "reasons": [
        {
          "reason": "string",
          "reference": {
            "value": "string",
            "type": "SECURITY_VULNERABILITY_REFID"
          }
        }
      ]
    }
  ],
  "stageId": "string",
  "reportId": "string",
  "reportUrl": "string",
  "openTime": "2019-08-24T14:15:22Z",
  "component": {
    "packageUrl": "string",
    "hash": "string",
    "sha256": "string",
    "componentIdentifier": {
      "format": "string",
      "coordinates": {
        "property1": "string",
        "property2": "string"
      }
    },
    "displayName": "string",
    "proprietary": true,
    "thirdParty": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyId|string|false|none|none|
|policyName|string|false|none|none|
|policyViolationId|string|false|none|none|
|threatLevel|integer(int32)|false|none|none|
|constraintViolations|[[ApiConstraintViolationDTO](#schemaapiconstraintviolationdto)]|false|none|none|
|stageId|string|false|none|none|
|reportId|string|false|none|none|
|reportUrl|string|false|none|none|
|openTime|string(date-time)|false|none|none|
|component|[ApiComponentDTOV2](#schemaapicomponentdtov2)|false|none|none|

<h2 id="tocS_ApiComponentTransitivePolicyViolationsDTO">ApiComponentTransitivePolicyViolationsDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponenttransitivepolicyviolationsdto"></a>
<a id="schema_ApiComponentTransitivePolicyViolationsDTO"></a>
<a id="tocSapicomponenttransitivepolicyviolationsdto"></a>
<a id="tocsapicomponenttransitivepolicyviolationsdto"></a>

```json
{
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "packageUrl": "string",
  "hash": "string",
  "displayName": "string",
  "isInnerSource": true,
  "transitivePolicyViolations": [
    {
      "policyId": "string",
      "policyName": "string",
      "threatLevel": 0,
      "threatCategory": "string",
      "policyViolationId": "string",
      "action": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "packageUrl": "string",
      "hash": "string",
      "displayName": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentIdentifier|[ApiComponentIdentifierDTOV2](#schemaapicomponentidentifierdtov2)|false|none|none|
|packageUrl|string|false|none|none|
|hash|string|false|none|none|
|displayName|string|false|none|none|
|isInnerSource|boolean|false|none|none|
|transitivePolicyViolations|[[ApiStagePolicyViolationComponentDTO](#schemaapistagepolicyviolationcomponentdto)]|false|none|none|

<h2 id="tocS_ApiStagePolicyViolationComponentDTO">ApiStagePolicyViolationComponentDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapistagepolicyviolationcomponentdto"></a>
<a id="schema_ApiStagePolicyViolationComponentDTO"></a>
<a id="tocSapistagepolicyviolationcomponentdto"></a>
<a id="tocsapistagepolicyviolationcomponentdto"></a>

```json
{
  "policyId": "string",
  "policyName": "string",
  "threatLevel": 0,
  "threatCategory": "string",
  "policyViolationId": "string",
  "action": "string",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "packageUrl": "string",
  "hash": "string",
  "displayName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyId|string|false|none|none|
|policyName|string|false|none|none|
|threatLevel|integer(int32)|false|none|none|
|threatCategory|string|false|none|none|
|policyViolationId|string|false|none|none|
|action|string|false|none|none|
|componentIdentifier|[ApiComponentIdentifierDTOV2](#schemaapicomponentidentifierdtov2)|false|none|none|
|packageUrl|string|false|none|none|
|hash|string|false|none|none|
|displayName|string|false|none|none|

<h2 id="tocS_ApiWaiverOptionsDTO">ApiWaiverOptionsDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiwaiveroptionsdto"></a>
<a id="schema_ApiWaiverOptionsDTO"></a>
<a id="tocSapiwaiveroptionsdto"></a>
<a id="tocsapiwaiveroptionsdto"></a>

```json
{
  "comment": "string",
  "applyToAllComponents": true,
  "matcherStrategy": "DEFAULT",
  "expiryTime": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|none|
|applyToAllComponents|boolean|false|none|none|
|matcherStrategy|string|false|none|none|
|expiryTime|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|matcherStrategy|DEFAULT|
|matcherStrategy|EXACT_COMPONENT|
|matcherStrategy|ALL_COMPONENTS|
|matcherStrategy|ALL_VERSIONS|

<h2 id="tocS_ApiComponentPolicyWaiversDTO">ApiComponentPolicyWaiversDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapicomponentpolicywaiversdto"></a>
<a id="schema_ApiComponentPolicyWaiversDTO"></a>
<a id="tocSapicomponentpolicywaiversdto"></a>
<a id="tocsapicomponentpolicywaiversdto"></a>

```json
{
  "componentPolicyWaivers": [
    {
      "policyWaiverId": "string",
      "policyViolationId": "string",
      "comment": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "expiryTime": "2019-08-24T14:15:22Z",
      "isObsolete": true,
      "scopeOwnerType": "string",
      "scopeOwnerId": "string",
      "scopeOwnerName": "string",
      "hash": "string",
      "policyId": "string",
      "vulnerabilityId": "string",
      "policyName": "string",
      "constraintFacts": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "operatorName": "string",
          "conditionFacts": [
            {
              "conditionTypeId": "string",
              "conditionIndex": 0,
              "summary": "string",
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              },
              "triggerJson": "string"
            }
          ]
        }
      ],
      "constraintFactsJson": "string",
      "componentName": "string",
      "creatorId": "string",
      "creatorName": "string",
      "matcherStrategy": "DEFAULT",
      "associatedPackageUrl": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "threatLevel": 0,
      "componentUpgradeAvailable": true,
      "displayName": {
        "parts": [
          {
            "field": "string",
            "value": "string"
          }
        ],
        "name": "string"
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentPolicyWaivers|[[ApiPolicyWaiverDTO](#schemaapipolicywaiverdto)]|false|none|none|

<h2 id="tocS_ApiRequestPolicyWaiverDTO">ApiRequestPolicyWaiverDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapirequestpolicywaiverdto"></a>
<a id="schema_ApiRequestPolicyWaiverDTO"></a>
<a id="tocSapirequestpolicywaiverdto"></a>
<a id="tocsapirequestpolicywaiverdto"></a>

```json
{
  "comment": "string",
  "policyViolationLink": "string",
  "addWaiverLink": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|none|
|policyViolationLink|string|false|none|none|
|addWaiverLink|string|false|none|none|

<h2 id="tocS_ApiProxyServerConfigurationDTO">ApiProxyServerConfigurationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiproxyserverconfigurationdto"></a>
<a id="schema_ApiProxyServerConfigurationDTO"></a>
<a id="tocSapiproxyserverconfigurationdto"></a>
<a id="tocsapiproxyserverconfigurationdto"></a>

```json
{
  "hostname": "string",
  "port": 0,
  "username": "string",
  "password": [
    "string"
  ],
  "passwordIsIncluded": true,
  "excludeHosts": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hostname|string|false|none|none|
|port|integer(int32)|false|none|none|
|username|string|false|none|none|
|password|[string]|false|none|none|
|passwordIsIncluded|boolean|false|none|none|
|excludeHosts|[string]|false|none|none|

<h2 id="tocS_ApiDependencyTreeNodeDTO">ApiDependencyTreeNodeDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapidependencytreenodedto"></a>
<a id="schema_ApiDependencyTreeNodeDTO"></a>
<a id="tocSapidependencytreenodedto"></a>
<a id="tocsapidependencytreenodedto"></a>

```json
{
  "packageUrl": "string",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "children": [
    {
      "packageUrl": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "children": [],
      "direct": true
    }
  ],
  "direct": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageUrl|string|false|none|none|
|componentIdentifier|[ApiComponentIdentifierDTOV2](#schemaapicomponentidentifierdtov2)|false|none|none|
|children|[[ApiDependencyTreeNodeDTO](#schemaapidependencytreenodedto)]|false|none|none|
|direct|boolean|false|none|none|

<h2 id="tocS_ApiDependencyTreeResponseDTO">ApiDependencyTreeResponseDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapidependencytreeresponsedto"></a>
<a id="schema_ApiDependencyTreeResponseDTO"></a>
<a id="tocSapidependencytreeresponsedto"></a>
<a id="tocsapidependencytreeresponsedto"></a>

```json
{
  "dependencyTree": {
    "packageUrl": "string",
    "componentIdentifier": {
      "format": "string",
      "coordinates": {
        "property1": "string",
        "property2": "string"
      }
    },
    "children": [
      {}
    ],
    "direct": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dependencyTree|[ApiDependencyTreeNodeDTO](#schemaapidependencytreenodedto)|false|none|none|

<h2 id="tocS_ApiApplicationEvaluationCommitDTO">ApiApplicationEvaluationCommitDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiapplicationevaluationcommitdto"></a>
<a id="schema_ApiApplicationEvaluationCommitDTO"></a>
<a id="tocSapiapplicationevaluationcommitdto"></a>
<a id="tocsapiapplicationevaluationcommitdto"></a>

```json
{
  "commitHash": "string",
  "scanId": "string",
  "reportUrl": "string",
  "scanTime": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commitHash|string|false|none|none|
|scanId|string|false|none|none|
|reportUrl|string|false|none|none|
|scanTime|string(date-time)|false|none|none|

<h2 id="tocS_ApiPolicyViolationDiffDTO">ApiPolicyViolationDiffDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapipolicyviolationdiffdto"></a>
<a id="schema_ApiPolicyViolationDiffDTO"></a>
<a id="tocSapipolicyviolationdiffdto"></a>
<a id="tocsapipolicyviolationdiffdto"></a>

```json
{
  "application": {
    "id": "string",
    "publicId": "string",
    "name": "string",
    "organizationId": "string",
    "contactUserName": "string",
    "applicationTags": [
      {
        "id": "string",
        "tagId": "string",
        "applicationId": "string"
      }
    ]
  },
  "fromCommit": {
    "commitHash": "string",
    "scanId": "string",
    "reportUrl": "string",
    "scanTime": "2019-08-24T14:15:22Z"
  },
  "toCommit": {
    "commitHash": "string",
    "scanId": "string",
    "reportUrl": "string",
    "scanTime": "2019-08-24T14:15:22Z"
  },
  "diffTime": "2019-08-24T14:15:22Z",
  "addedViolations": [
    {
      "policyId": "string",
      "policyName": "string",
      "policyViolationId": "string",
      "threatLevel": 0,
      "constraintViolations": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "reasons": [
            {
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              }
            }
          ]
        }
      ],
      "component": {
        "packageUrl": "string",
        "hash": "string",
        "sha256": "string",
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "displayName": "string",
        "proprietary": true,
        "thirdParty": true
      }
    }
  ],
  "sameViolations": [
    {
      "policyId": "string",
      "policyName": "string",
      "policyViolationId": "string",
      "threatLevel": 0,
      "constraintViolations": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "reasons": [
            {
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              }
            }
          ]
        }
      ],
      "component": {
        "packageUrl": "string",
        "hash": "string",
        "sha256": "string",
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "displayName": "string",
        "proprietary": true,
        "thirdParty": true
      }
    }
  ],
  "removedViolations": [
    {
      "policyId": "string",
      "policyName": "string",
      "policyViolationId": "string",
      "threatLevel": 0,
      "constraintViolations": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "reasons": [
            {
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              }
            }
          ]
        }
      ],
      "component": {
        "packageUrl": "string",
        "hash": "string",
        "sha256": "string",
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "displayName": "string",
        "proprietary": true,
        "thirdParty": true
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|[ApiApplicationDTO](#schemaapiapplicationdto)|false|none|none|
|fromCommit|[ApiApplicationEvaluationCommitDTO](#schemaapiapplicationevaluationcommitdto)|false|none|none|
|toCommit|[ApiApplicationEvaluationCommitDTO](#schemaapiapplicationevaluationcommitdto)|false|none|none|
|diffTime|string(date-time)|false|none|none|
|addedViolations|[[ApiPolicyViolationForDiffDTO](#schemaapipolicyviolationfordiffdto)]|false|none|none|
|sameViolations|[[ApiPolicyViolationForDiffDTO](#schemaapipolicyviolationfordiffdto)]|false|none|none|
|removedViolations|[[ApiPolicyViolationForDiffDTO](#schemaapipolicyviolationfordiffdto)]|false|none|none|

<h2 id="tocS_ApiPolicyViolationForDiffDTO">ApiPolicyViolationForDiffDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapipolicyviolationfordiffdto"></a>
<a id="schema_ApiPolicyViolationForDiffDTO"></a>
<a id="tocSapipolicyviolationfordiffdto"></a>
<a id="tocsapipolicyviolationfordiffdto"></a>

```json
{
  "policyId": "string",
  "policyName": "string",
  "policyViolationId": "string",
  "threatLevel": 0,
  "constraintViolations": [
    {
      "constraintId": "string",
      "constraintName": "string",
      "reasons": [
        {
          "reason": "string",
          "reference": {
            "value": "string",
            "type": "SECURITY_VULNERABILITY_REFID"
          }
        }
      ]
    }
  ],
  "component": {
    "packageUrl": "string",
    "hash": "string",
    "sha256": "string",
    "componentIdentifier": {
      "format": "string",
      "coordinates": {
        "property1": "string",
        "property2": "string"
      }
    },
    "displayName": "string",
    "proprietary": true,
    "thirdParty": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyId|string|false|none|none|
|policyName|string|false|none|none|
|policyViolationId|string|false|none|none|
|threatLevel|integer(int32)|false|none|none|
|constraintViolations|[[ApiConstraintViolationDTO](#schemaapiconstraintviolationdto)]|false|none|none|
|component|[ApiComponentDTOV2](#schemaapicomponentdtov2)|false|none|none|

<h2 id="tocS_ApiDependencyDataDTO">ApiDependencyDataDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapidependencydatadto"></a>
<a id="schema_ApiDependencyDataDTO"></a>
<a id="tocSapidependencydatadto"></a>
<a id="tocsapidependencydatadto"></a>

```json
{
  "directDependency": true,
  "innerSource": true,
  "parentComponentPurls": [
    "string"
  ],
  "innerSourceData": [
    {
      "ownerApplicationName": "string",
      "ownerApplicationId": "string",
      "innerSourceComponentPurl": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directDependency|boolean|false|none|none|
|innerSource|boolean|false|none|none|
|parentComponentPurls|[string]|false|none|none|
|innerSourceData|[[InnerSourceData](#schemainnersourcedata)]|false|none|none|

<h2 id="tocS_ApiReportComponentPolicyViolationsDTOV2">ApiReportComponentPolicyViolationsDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapireportcomponentpolicyviolationsdtov2"></a>
<a id="schema_ApiReportComponentPolicyViolationsDTOV2"></a>
<a id="tocSapireportcomponentpolicyviolationsdtov2"></a>
<a id="tocsapireportcomponentpolicyviolationsdtov2"></a>

```json
{
  "packageUrl": "string",
  "hash": "string",
  "sha256": "string",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "displayName": "string",
  "proprietary": true,
  "thirdParty": true,
  "matchState": "string",
  "pathnames": [
    "string"
  ],
  "dependencyData": {
    "directDependency": true,
    "innerSource": true,
    "parentComponentPurls": [
      "string"
    ],
    "innerSourceData": [
      {
        "ownerApplicationName": "string",
        "ownerApplicationId": "string",
        "innerSourceComponentPurl": "string"
      }
    ]
  },
  "violations": [
    {
      "policyId": "string",
      "policyName": "string",
      "policyThreatCategory": "string",
      "policyThreatLevel": 0,
      "policyViolationId": "string",
      "waived": true,
      "grandfathered": true,
      "legacyViolation": true,
      "constraints": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "conditions": [
            {
              "conditionSummary": "string",
              "conditionReason": "string"
            }
          ]
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageUrl|string|false|none|none|
|hash|string|false|none|none|
|sha256|string|false|none|none|
|componentIdentifier|[ApiComponentIdentifierDTOV2](#schemaapicomponentidentifierdtov2)|false|none|none|
|displayName|string|false|none|none|
|proprietary|boolean|false|none|none|
|thirdParty|boolean|false|none|none|
|matchState|string|false|none|none|
|pathnames|[string]|false|none|none|
|dependencyData|[ApiDependencyDataDTO](#schemaapidependencydatadto)|false|none|none|
|violations|[[ApiReportPolicyViolationDTOV2](#schemaapireportpolicyviolationdtov2)]|false|none|none|

<h2 id="tocS_ApiReportConstraintConditionDTOV2">ApiReportConstraintConditionDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapireportconstraintconditiondtov2"></a>
<a id="schema_ApiReportConstraintConditionDTOV2"></a>
<a id="tocSapireportconstraintconditiondtov2"></a>
<a id="tocsapireportconstraintconditiondtov2"></a>

```json
{
  "conditionSummary": "string",
  "conditionReason": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditionSummary|string|false|none|none|
|conditionReason|string|false|none|none|

<h2 id="tocS_ApiReportConstraintViolationDTOV2">ApiReportConstraintViolationDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapireportconstraintviolationdtov2"></a>
<a id="schema_ApiReportConstraintViolationDTOV2"></a>
<a id="tocSapireportconstraintviolationdtov2"></a>
<a id="tocsapireportconstraintviolationdtov2"></a>

```json
{
  "constraintId": "string",
  "constraintName": "string",
  "conditions": [
    {
      "conditionSummary": "string",
      "conditionReason": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraintId|string|false|none|none|
|constraintName|string|false|none|none|
|conditions|[[ApiReportConstraintConditionDTOV2](#schemaapireportconstraintconditiondtov2)]|false|none|none|

<h2 id="tocS_ApiReportPolicyDataDTOV2">ApiReportPolicyDataDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapireportpolicydatadtov2"></a>
<a id="schema_ApiReportPolicyDataDTOV2"></a>
<a id="tocSapireportpolicydatadtov2"></a>
<a id="tocsapireportpolicydatadtov2"></a>

```json
{
  "reportTime": "2019-08-24T14:15:22Z",
  "reportTitle": "string",
  "commitHash": "string",
  "initiator": "string",
  "application": {
    "id": "string",
    "publicId": "string",
    "name": "string",
    "organizationId": "string",
    "contactUserName": "string"
  },
  "counts": {
    "property1": 0,
    "property2": 0
  },
  "components": [
    {
      "packageUrl": "string",
      "hash": "string",
      "sha256": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "proprietary": true,
      "thirdParty": true,
      "matchState": "string",
      "pathnames": [
        "string"
      ],
      "dependencyData": {
        "directDependency": true,
        "innerSource": true,
        "parentComponentPurls": [
          "string"
        ],
        "innerSourceData": [
          {
            "ownerApplicationName": "string",
            "ownerApplicationId": "string",
            "innerSourceComponentPurl": "string"
          }
        ]
      },
      "violations": [
        {
          "policyId": "string",
          "policyName": "string",
          "policyThreatCategory": "string",
          "policyThreatLevel": 0,
          "policyViolationId": "string",
          "waived": true,
          "grandfathered": true,
          "legacyViolation": true,
          "constraints": [
            {
              "constraintId": "string",
              "constraintName": "string",
              "conditions": [
                {
                  "conditionSummary": "string",
                  "conditionReason": "string"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reportTime|string(date-time)|false|none|none|
|reportTitle|string|false|none|none|
|commitHash|string|false|none|none|
|initiator|string|false|none|none|
|application|[ApiApplicationBaseDTO](#schemaapiapplicationbasedto)|false|none|none|
|counts|object|false|none|none|
|» **additionalProperties**|integer(int32)|false|none|none|
|components|[[ApiReportComponentPolicyViolationsDTOV2](#schemaapireportcomponentpolicyviolationsdtov2)]|false|none|none|

<h2 id="tocS_ApiReportPolicyViolationDTOV2">ApiReportPolicyViolationDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapireportpolicyviolationdtov2"></a>
<a id="schema_ApiReportPolicyViolationDTOV2"></a>
<a id="tocSapireportpolicyviolationdtov2"></a>
<a id="tocsapireportpolicyviolationdtov2"></a>

```json
{
  "policyId": "string",
  "policyName": "string",
  "policyThreatCategory": "string",
  "policyThreatLevel": 0,
  "policyViolationId": "string",
  "waived": true,
  "grandfathered": true,
  "legacyViolation": true,
  "constraints": [
    {
      "constraintId": "string",
      "constraintName": "string",
      "conditions": [
        {
          "conditionSummary": "string",
          "conditionReason": "string"
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyId|string|false|none|none|
|policyName|string|false|none|none|
|policyThreatCategory|string|false|none|none|
|policyThreatLevel|integer(int32)|false|none|none|
|policyViolationId|string|false|none|none|
|waived|boolean|false|none|none|
|grandfathered|boolean|false|none|none|
|legacyViolation|boolean|false|none|none|
|constraints|[[ApiReportConstraintViolationDTOV2](#schemaapireportconstraintviolationdtov2)]|false|none|none|

<h2 id="tocS_InnerSourceData">InnerSourceData</h2>
<!-- backwards compatibility -->
<a id="schemainnersourcedata"></a>
<a id="schema_InnerSourceData"></a>
<a id="tocSinnersourcedata"></a>
<a id="tocsinnersourcedata"></a>

```json
{
  "ownerApplicationName": "string",
  "ownerApplicationId": "string",
  "innerSourceComponentPurl": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ownerApplicationName|string|false|none|none|
|ownerApplicationId|string|false|none|none|
|innerSourceComponentPurl|string|false|none|none|

<h2 id="tocS_ApiGlobalInformationDTOV2">ApiGlobalInformationDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapiglobalinformationdtov2"></a>
<a id="schema_ApiGlobalInformationDTOV2"></a>
<a id="tocSapiglobalinformationdtov2"></a>
<a id="tocsapiglobalinformationdtov2"></a>

```json
{
  "dataVersionDate": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataVersionDate|string|false|none|none|

<h2 id="tocS_ApiLicenseDataDTOV2">ApiLicenseDataDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapilicensedatadtov2"></a>
<a id="schema_ApiLicenseDataDTOV2"></a>
<a id="tocSapilicensedatadtov2"></a>
<a id="tocsapilicensedatadtov2"></a>

```json
{
  "declaredLicenses": [
    {
      "licenseId": "string",
      "licenseName": "string"
    }
  ],
  "observedLicenses": [
    {
      "licenseId": "string",
      "licenseName": "string"
    }
  ],
  "effectiveLicenses": [
    {
      "licenseId": "string",
      "licenseName": "string"
    }
  ],
  "overriddenLicenses": [
    {
      "licenseId": "string",
      "licenseName": "string"
    }
  ],
  "status": "string",
  "effectiveLicenseThreats": [
    {
      "licenseThreatGroupName": "string",
      "licenseThreatGroupLevel": 0,
      "licenseThreatGroupCategory": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|declaredLicenses|[[ApiLicenseDTO](#schemaapilicensedto)]|false|none|none|
|observedLicenses|[[ApiLicenseDTO](#schemaapilicensedto)]|false|none|none|
|effectiveLicenses|[[ApiLicenseDTO](#schemaapilicensedto)]|false|none|none|
|overriddenLicenses|[[ApiLicenseDTO](#schemaapilicensedto)]|false|none|none|
|status|string|false|none|none|
|effectiveLicenseThreats|[[ApiLicenseThreatDTOV2](#schemaapilicensethreatdtov2)]|false|none|none|

<h2 id="tocS_ApiMatchStateSummaryDTOV2">ApiMatchStateSummaryDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapimatchstatesummarydtov2"></a>
<a id="schema_ApiMatchStateSummaryDTOV2"></a>
<a id="tocSapimatchstatesummarydtov2"></a>
<a id="tocsapimatchstatesummarydtov2"></a>

```json
{
  "totalComponentCount": 0,
  "knownComponentCount": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalComponentCount|integer(int32)|false|none|none|
|knownComponentCount|integer(int32)|false|none|none|

<h2 id="tocS_ApiReportComponentDTOV2">ApiReportComponentDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapireportcomponentdtov2"></a>
<a id="schema_ApiReportComponentDTOV2"></a>
<a id="tocSapireportcomponentdtov2"></a>
<a id="tocsapireportcomponentdtov2"></a>

```json
{
  "packageUrl": "string",
  "hash": "string",
  "sha256": "string",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "displayName": "string",
  "proprietary": true,
  "thirdParty": true,
  "matchState": "string",
  "pathnames": [
    "string"
  ],
  "identificationSource": "string",
  "licenseData": {
    "declaredLicenses": [
      {
        "licenseId": "string",
        "licenseName": "string"
      }
    ],
    "observedLicenses": [
      {
        "licenseId": "string",
        "licenseName": "string"
      }
    ],
    "effectiveLicenses": [
      {
        "licenseId": "string",
        "licenseName": "string"
      }
    ],
    "overriddenLicenses": [
      {
        "licenseId": "string",
        "licenseName": "string"
      }
    ],
    "status": "string",
    "effectiveLicenseThreats": [
      {
        "licenseThreatGroupName": "string",
        "licenseThreatGroupLevel": 0,
        "licenseThreatGroupCategory": "string"
      }
    ]
  },
  "securityData": {
    "securityIssues": [
      {
        "source": "string",
        "reference": "string",
        "severity": 0.1,
        "status": "string",
        "url": "string",
        "threatCategory": "string",
        "cwe": "string",
        "cvssVector": "string",
        "cvssVectorSource": "string",
        "analysis": {
          "state": "string",
          "justification": "string",
          "response": "string",
          "detail": "string"
        }
      }
    ]
  },
  "dependencyData": {
    "directDependency": true,
    "innerSource": true,
    "parentComponentPurls": [
      "string"
    ],
    "innerSourceData": [
      {
        "ownerApplicationName": "string",
        "ownerApplicationId": "string",
        "innerSourceComponentPurl": "string"
      }
    ]
  },
  "cpe": "string",
  "swid": {
    "tagId": "string",
    "name": "string",
    "version": "string",
    "tagVersion": 0,
    "patch": true,
    "text": {
      "encoding": "string",
      "contentType": "string",
      "content": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|packageUrl|string|false|none|none|
|hash|string|false|none|none|
|sha256|string|false|none|none|
|componentIdentifier|[ApiComponentIdentifierDTOV2](#schemaapicomponentidentifierdtov2)|false|none|none|
|displayName|string|false|none|none|
|proprietary|boolean|false|none|none|
|thirdParty|boolean|false|none|none|
|matchState|string|false|none|none|
|pathnames|[string]|false|none|none|
|identificationSource|string|false|none|none|
|licenseData|[ApiLicenseDataDTOV2](#schemaapilicensedatadtov2)|false|none|none|
|securityData|[ApiSecurityDataDTO](#schemaapisecuritydatadto)|false|none|none|
|dependencyData|[ApiDependencyDataDTO](#schemaapidependencydatadto)|false|none|none|
|cpe|string|false|none|none|
|swid|[Swid](#schemaswid)|false|none|none|

<h2 id="tocS_ApiReportRawDataDTOV2">ApiReportRawDataDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapireportrawdatadtov2"></a>
<a id="schema_ApiReportRawDataDTOV2"></a>
<a id="tocSapireportrawdatadtov2"></a>
<a id="tocsapireportrawdatadtov2"></a>

```json
{
  "components": [
    {
      "packageUrl": "string",
      "hash": "string",
      "sha256": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "proprietary": true,
      "thirdParty": true,
      "matchState": "string",
      "pathnames": [
        "string"
      ],
      "identificationSource": "string",
      "licenseData": {
        "declaredLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "observedLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "effectiveLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "overriddenLicenses": [
          {
            "licenseId": "string",
            "licenseName": "string"
          }
        ],
        "status": "string",
        "effectiveLicenseThreats": [
          {
            "licenseThreatGroupName": "string",
            "licenseThreatGroupLevel": 0,
            "licenseThreatGroupCategory": "string"
          }
        ]
      },
      "securityData": {
        "securityIssues": [
          {
            "source": "string",
            "reference": "string",
            "severity": 0.1,
            "status": "string",
            "url": "string",
            "threatCategory": "string",
            "cwe": "string",
            "cvssVector": "string",
            "cvssVectorSource": "string",
            "analysis": {
              "state": "string",
              "justification": "string",
              "response": "string",
              "detail": "string"
            }
          }
        ]
      },
      "dependencyData": {
        "directDependency": true,
        "innerSource": true,
        "parentComponentPurls": [
          "string"
        ],
        "innerSourceData": [
          {
            "ownerApplicationName": "string",
            "ownerApplicationId": "string",
            "innerSourceComponentPurl": "string"
          }
        ]
      },
      "cpe": "string",
      "swid": {
        "tagId": "string",
        "name": "string",
        "version": "string",
        "tagVersion": 0,
        "patch": true,
        "text": {
          "encoding": "string",
          "contentType": "string",
          "content": "string"
        }
      }
    }
  ],
  "matchSummary": {
    "totalComponentCount": 0,
    "knownComponentCount": 0
  },
  "globalInformation": {
    "dataVersionDate": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|components|[[ApiReportComponentDTOV2](#schemaapireportcomponentdtov2)]|false|none|none|
|matchSummary|[ApiMatchStateSummaryDTOV2](#schemaapimatchstatesummarydtov2)|false|none|none|
|globalInformation|[ApiGlobalInformationDTOV2](#schemaapiglobalinformationdtov2)|false|none|none|

<h2 id="tocS_AttachmentText">AttachmentText</h2>
<!-- backwards compatibility -->
<a id="schemaattachmenttext"></a>
<a id="schema_AttachmentText"></a>
<a id="tocSattachmenttext"></a>
<a id="tocsattachmenttext"></a>

```json
{
  "encoding": "string",
  "contentType": "string",
  "content": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encoding|string|false|none|none|
|contentType|string|false|none|none|
|content|string|false|none|none|

<h2 id="tocS_Swid">Swid</h2>
<!-- backwards compatibility -->
<a id="schemaswid"></a>
<a id="schema_Swid"></a>
<a id="tocSswid"></a>
<a id="tocsswid"></a>

```json
{
  "tagId": "string",
  "name": "string",
  "version": "string",
  "tagVersion": 0,
  "patch": true,
  "text": {
    "encoding": "string",
    "contentType": "string",
    "content": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tagId|string|false|none|none|
|name|string|false|none|none|
|version|string|false|none|none|
|tagVersion|integer(int32)|false|none|none|
|patch|boolean|false|none|none|
|text|[AttachmentText](#schemaattachmenttext)|false|none|none|

<h2 id="tocS_ApiApplicationReportDTOV2">ApiApplicationReportDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapiapplicationreportdtov2"></a>
<a id="schema_ApiApplicationReportDTOV2"></a>
<a id="tocSapiapplicationreportdtov2"></a>
<a id="tocsapiapplicationreportdtov2"></a>

```json
{
  "stage": "string",
  "applicationId": "string",
  "evaluationDate": "2019-08-24T14:15:22Z",
  "latestReportHtmlUrl": "string",
  "reportHtmlUrl": "string",
  "embeddableReportHtmlUrl": "string",
  "reportPdfUrl": "string",
  "reportDataUrl": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stage|string|false|none|none|
|applicationId|string|false|none|none|
|evaluationDate|string(date-time)|false|none|none|
|latestReportHtmlUrl|string|false|none|none|
|reportHtmlUrl|string|false|none|none|
|embeddableReportHtmlUrl|string|false|none|none|
|reportPdfUrl|string|false|none|none|
|reportDataUrl|string|false|none|none|

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "actionTypeId": "string",
  "target": "string",
  "targetType": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actionTypeId|string|false|none|none|
|target|string|false|none|none|
|targetType|string|false|none|none|

<h2 id="tocS_ApiReportHistoryDTO">ApiReportHistoryDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapireporthistorydto"></a>
<a id="schema_ApiReportHistoryDTO"></a>
<a id="tocSapireporthistorydto"></a>
<a id="tocsapireporthistorydto"></a>

```json
{
  "applicationId": "string",
  "reports": [
    {
      "stage": "string",
      "applicationId": "string",
      "evaluationDate": "2019-08-24T14:15:22Z",
      "latestReportHtmlUrl": "string",
      "reportHtmlUrl": "string",
      "embeddableReportHtmlUrl": "string",
      "reportPdfUrl": "string",
      "reportDataUrl": "string",
      "policyEvaluationId": "string",
      "scanId": "string",
      "isReevaluation": true,
      "isForMonitoring": true,
      "commitHash": "string",
      "scanTriggerType": "string",
      "policyEvaluationResult": {
        "alerts": [
          {
            "trigger": {
              "policyId": "string",
              "policyName": "string",
              "threatLevel": 0,
              "policyViolationId": "string",
              "componentFacts": [
                {
                  "componentIdentifier": {
                    "format": "string",
                    "coordinates": {}
                  },
                  "hash": "string",
                  "constraintFacts": [
                    {}
                  ],
                  "pathnames": [
                    "string"
                  ],
                  "displayName": {
                    "parts": [],
                    "name": "string"
                  }
                }
              ]
            },
            "actions": [
              {
                "actionTypeId": "string",
                "target": "string",
                "targetType": "string"
              }
            ]
          }
        ],
        "affectedComponentCount": 0,
        "criticalComponentCount": 0,
        "severeComponentCount": 0,
        "moderateComponentCount": 0,
        "criticalPolicyViolationCount": 0,
        "severePolicyViolationCount": 0,
        "moderatePolicyViolationCount": 0,
        "legacyViolationCount": 0,
        "totalComponentCount": 0,
        "grandfatheredPolicyViolationCount": 0
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationId|string|false|none|none|
|reports|[[ApiReportResultsDTO](#schemaapireportresultsdto)]|false|none|none|

<h2 id="tocS_ApiReportResultsDTO">ApiReportResultsDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapireportresultsdto"></a>
<a id="schema_ApiReportResultsDTO"></a>
<a id="tocSapireportresultsdto"></a>
<a id="tocsapireportresultsdto"></a>

```json
{
  "stage": "string",
  "applicationId": "string",
  "evaluationDate": "2019-08-24T14:15:22Z",
  "latestReportHtmlUrl": "string",
  "reportHtmlUrl": "string",
  "embeddableReportHtmlUrl": "string",
  "reportPdfUrl": "string",
  "reportDataUrl": "string",
  "policyEvaluationId": "string",
  "scanId": "string",
  "isReevaluation": true,
  "isForMonitoring": true,
  "commitHash": "string",
  "scanTriggerType": "string",
  "policyEvaluationResult": {
    "alerts": [
      {
        "trigger": {
          "policyId": "string",
          "policyName": "string",
          "threatLevel": 0,
          "policyViolationId": "string",
          "componentFacts": [
            {
              "componentIdentifier": {
                "format": "string",
                "coordinates": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "hash": "string",
              "constraintFacts": [
                {
                  "constraintId": "string",
                  "constraintName": "string",
                  "operatorName": "string",
                  "conditionFacts": [
                    {}
                  ]
                }
              ],
              "pathnames": [
                "string"
              ],
              "displayName": {
                "parts": [
                  {
                    "field": "string",
                    "value": "string"
                  }
                ],
                "name": "string"
              }
            }
          ]
        },
        "actions": [
          {
            "actionTypeId": "string",
            "target": "string",
            "targetType": "string"
          }
        ]
      }
    ],
    "affectedComponentCount": 0,
    "criticalComponentCount": 0,
    "severeComponentCount": 0,
    "moderateComponentCount": 0,
    "criticalPolicyViolationCount": 0,
    "severePolicyViolationCount": 0,
    "moderatePolicyViolationCount": 0,
    "legacyViolationCount": 0,
    "totalComponentCount": 0,
    "grandfatheredPolicyViolationCount": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stage|string|false|none|none|
|applicationId|string|false|none|none|
|evaluationDate|string(date-time)|false|none|none|
|latestReportHtmlUrl|string|false|none|none|
|reportHtmlUrl|string|false|none|none|
|embeddableReportHtmlUrl|string|false|none|none|
|reportPdfUrl|string|false|none|none|
|reportDataUrl|string|false|none|none|
|policyEvaluationId|string|false|none|none|
|scanId|string|false|none|none|
|isReevaluation|boolean|false|none|none|
|isForMonitoring|boolean|false|none|none|
|commitHash|string|false|none|none|
|scanTriggerType|string|false|none|none|
|policyEvaluationResult|[PolicyEvaluationResult](#schemapolicyevaluationresult)|false|none|none|

<h2 id="tocS_ComponentFact">ComponentFact</h2>
<!-- backwards compatibility -->
<a id="schemacomponentfact"></a>
<a id="schema_ComponentFact"></a>
<a id="tocScomponentfact"></a>
<a id="tocscomponentfact"></a>

```json
{
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "hash": "string",
  "constraintFacts": [
    {
      "constraintId": "string",
      "constraintName": "string",
      "operatorName": "string",
      "conditionFacts": [
        {
          "conditionTypeId": "string",
          "conditionIndex": 0,
          "summary": "string",
          "reason": "string",
          "reference": {
            "value": "string",
            "type": "SECURITY_VULNERABILITY_REFID"
          },
          "triggerJson": "string"
        }
      ]
    }
  ],
  "pathnames": [
    "string"
  ],
  "displayName": {
    "parts": [
      {
        "field": "string",
        "value": "string"
      }
    ],
    "name": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentIdentifier|[ComponentIdentifier](#schemacomponentidentifier)|false|none|none|
|hash|string|false|none|none|
|constraintFacts|[[ConstraintFact](#schemaconstraintfact)]|false|none|none|
|pathnames|[string]|false|none|none|
|displayName|[ComponentDisplayName](#schemacomponentdisplayname)|false|none|none|

<h2 id="tocS_PolicyAlert">PolicyAlert</h2>
<!-- backwards compatibility -->
<a id="schemapolicyalert"></a>
<a id="schema_PolicyAlert"></a>
<a id="tocSpolicyalert"></a>
<a id="tocspolicyalert"></a>

```json
{
  "trigger": {
    "policyId": "string",
    "policyName": "string",
    "threatLevel": 0,
    "policyViolationId": "string",
    "componentFacts": [
      {
        "componentIdentifier": {
          "format": "string",
          "coordinates": {
            "property1": "string",
            "property2": "string"
          }
        },
        "hash": "string",
        "constraintFacts": [
          {
            "constraintId": "string",
            "constraintName": "string",
            "operatorName": "string",
            "conditionFacts": [
              {
                "conditionTypeId": "string",
                "conditionIndex": 0,
                "summary": "string",
                "reason": "string",
                "reference": {
                  "value": "string",
                  "type": "SECURITY_VULNERABILITY_REFID"
                },
                "triggerJson": "string"
              }
            ]
          }
        ],
        "pathnames": [
          "string"
        ],
        "displayName": {
          "parts": [
            {
              "field": "string",
              "value": "string"
            }
          ],
          "name": "string"
        }
      }
    ]
  },
  "actions": [
    {
      "actionTypeId": "string",
      "target": "string",
      "targetType": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trigger|[PolicyFact](#schemapolicyfact)|false|none|none|
|actions|[[Action](#schemaaction)]|false|none|none|

<h2 id="tocS_PolicyEvaluationResult">PolicyEvaluationResult</h2>
<!-- backwards compatibility -->
<a id="schemapolicyevaluationresult"></a>
<a id="schema_PolicyEvaluationResult"></a>
<a id="tocSpolicyevaluationresult"></a>
<a id="tocspolicyevaluationresult"></a>

```json
{
  "alerts": [
    {
      "trigger": {
        "policyId": "string",
        "policyName": "string",
        "threatLevel": 0,
        "policyViolationId": "string",
        "componentFacts": [
          {
            "componentIdentifier": {
              "format": "string",
              "coordinates": {
                "property1": "string",
                "property2": "string"
              }
            },
            "hash": "string",
            "constraintFacts": [
              {
                "constraintId": "string",
                "constraintName": "string",
                "operatorName": "string",
                "conditionFacts": [
                  {
                    "conditionTypeId": "string",
                    "conditionIndex": 0,
                    "summary": "string",
                    "reason": "string",
                    "reference": {},
                    "triggerJson": "string"
                  }
                ]
              }
            ],
            "pathnames": [
              "string"
            ],
            "displayName": {
              "parts": [
                {
                  "field": "string",
                  "value": "string"
                }
              ],
              "name": "string"
            }
          }
        ]
      },
      "actions": [
        {
          "actionTypeId": "string",
          "target": "string",
          "targetType": "string"
        }
      ]
    }
  ],
  "affectedComponentCount": 0,
  "criticalComponentCount": 0,
  "severeComponentCount": 0,
  "moderateComponentCount": 0,
  "criticalPolicyViolationCount": 0,
  "severePolicyViolationCount": 0,
  "moderatePolicyViolationCount": 0,
  "legacyViolationCount": 0,
  "totalComponentCount": 0,
  "grandfatheredPolicyViolationCount": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alerts|[[PolicyAlert](#schemapolicyalert)]|false|none|none|
|affectedComponentCount|integer(int32)|false|none|none|
|criticalComponentCount|integer(int32)|false|none|none|
|severeComponentCount|integer(int32)|false|none|none|
|moderateComponentCount|integer(int32)|false|none|none|
|criticalPolicyViolationCount|integer(int32)|false|none|none|
|severePolicyViolationCount|integer(int32)|false|none|none|
|moderatePolicyViolationCount|integer(int32)|false|none|none|
|legacyViolationCount|integer(int32)|false|none|none|
|totalComponentCount|integer(int32)|false|none|none|
|grandfatheredPolicyViolationCount|integer(int32)|false|none|none|

<h2 id="tocS_PolicyFact">PolicyFact</h2>
<!-- backwards compatibility -->
<a id="schemapolicyfact"></a>
<a id="schema_PolicyFact"></a>
<a id="tocSpolicyfact"></a>
<a id="tocspolicyfact"></a>

```json
{
  "policyId": "string",
  "policyName": "string",
  "threatLevel": 0,
  "policyViolationId": "string",
  "componentFacts": [
    {
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "hash": "string",
      "constraintFacts": [
        {
          "constraintId": "string",
          "constraintName": "string",
          "operatorName": "string",
          "conditionFacts": [
            {
              "conditionTypeId": "string",
              "conditionIndex": 0,
              "summary": "string",
              "reason": "string",
              "reference": {
                "value": "string",
                "type": "SECURITY_VULNERABILITY_REFID"
              },
              "triggerJson": "string"
            }
          ]
        }
      ],
      "pathnames": [
        "string"
      ],
      "displayName": {
        "parts": [
          {
            "field": "string",
            "value": "string"
          }
        ],
        "name": "string"
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyId|string|false|none|none|
|policyName|string|false|none|none|
|threatLevel|integer(int32)|false|none|none|
|policyViolationId|string|false|none|none|
|componentFacts|[[ComponentFact](#schemacomponentfact)]|false|none|none|

<h2 id="tocS_ApiRepositoryComponentPath">ApiRepositoryComponentPath</h2>
<!-- backwards compatibility -->
<a id="schemaapirepositorycomponentpath"></a>
<a id="schema_ApiRepositoryComponentPath"></a>
<a id="tocSapirepositorycomponentpath"></a>
<a id="tocsapirepositorycomponentpath"></a>

```json
{
  "pathname": "string",
  "quarantine": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pathname|string|false|none|none|
|quarantine|boolean|false|none|none|

<h2 id="tocS_ApiRepositoryPathResponseDTO">ApiRepositoryPathResponseDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapirepositorypathresponsedto"></a>
<a id="schema_ApiRepositoryPathResponseDTO"></a>
<a id="tocSapirepositorypathresponsedto"></a>
<a id="tocsapirepositorypathresponsedto"></a>

```json
{
  "pathVersions": [
    {
      "requestIndex": 0,
      "repositoryComponentPaths": [
        {
          "pathname": "string",
          "quarantine": true
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pathVersions|[[ApiRepositoryPathVersions](#schemaapirepositorypathversions)]|false|none|none|

<h2 id="tocS_ApiRepositoryPathVersions">ApiRepositoryPathVersions</h2>
<!-- backwards compatibility -->
<a id="schemaapirepositorypathversions"></a>
<a id="schema_ApiRepositoryPathVersions"></a>
<a id="tocSapirepositorypathversions"></a>
<a id="tocsapirepositorypathversions"></a>

```json
{
  "requestIndex": 0,
  "repositoryComponentPaths": [
    {
      "pathname": "string",
      "quarantine": true
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestIndex|integer(int32)|false|none|none|
|repositoryComponentPaths|[[ApiRepositoryComponentPath](#schemaapirepositorycomponentpath)]|false|none|none|

<h2 id="tocS_ApiReverseProxyAuthenticationConfigurationDTO">ApiReverseProxyAuthenticationConfigurationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapireverseproxyauthenticationconfigurationdto"></a>
<a id="schema_ApiReverseProxyAuthenticationConfigurationDTO"></a>
<a id="tocSapireverseproxyauthenticationconfigurationdto"></a>
<a id="tocsapireverseproxyauthenticationconfigurationdto"></a>

```json
{
  "enabled": true,
  "usernameHeader": "string",
  "csrfProtectionDisabled": true,
  "logoutUrl": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|usernameHeader|string|false|none|none|
|csrfProtectionDisabled|boolean|false|none|none|
|logoutUrl|string|false|none|none|

<h2 id="tocS_ApiMemberDTO">ApiMemberDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapimemberdto"></a>
<a id="schema_ApiMemberDTO"></a>
<a id="tocSapimemberdto"></a>
<a id="tocsapimemberdto"></a>

```json
{
  "ownerId": "string",
  "ownerType": "string",
  "type": "USER",
  "userOrGroupName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ownerId|string|false|none|none|
|ownerType|string|false|none|none|
|type|string|false|none|none|
|userOrGroupName|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|USER|
|type|GROUP|

<h2 id="tocS_ApiRoleMemberMappingDTO">ApiRoleMemberMappingDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapirolemembermappingdto"></a>
<a id="schema_ApiRoleMemberMappingDTO"></a>
<a id="tocSapirolemembermappingdto"></a>
<a id="tocsapirolemembermappingdto"></a>

```json
{
  "roleId": "string",
  "members": [
    {
      "ownerId": "string",
      "ownerType": "string",
      "type": "USER",
      "userOrGroupName": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roleId|string|false|none|none|
|members|[[ApiMemberDTO](#schemaapimemberdto)]|false|none|none|

<h2 id="tocS_ApiRoleMemberMappingListDTO">ApiRoleMemberMappingListDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapirolemembermappinglistdto"></a>
<a id="schema_ApiRoleMemberMappingListDTO"></a>
<a id="tocSapirolemembermappinglistdto"></a>
<a id="tocsapirolemembermappinglistdto"></a>

```json
{
  "memberMappings": [
    {
      "roleId": "string",
      "members": [
        {
          "ownerId": "string",
          "ownerType": "string",
          "type": "USER",
          "userOrGroupName": "string"
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberMappings|[[ApiRoleMemberMappingDTO](#schemaapirolemembermappingdto)]|false|none|none|

<h2 id="tocS_ApiRoleDTO">ApiRoleDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiroledto"></a>
<a id="schema_ApiRoleDTO"></a>
<a id="tocSapiroledto"></a>
<a id="tocsapiroledto"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|description|string|false|none|none|

<h2 id="tocS_ApiRoleListDTO">ApiRoleListDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapirolelistdto"></a>
<a id="schema_ApiRoleListDTO"></a>
<a id="tocSapirolelistdto"></a>
<a id="tocsapirolelistdto"></a>

```json
{
  "roles": [
    {
      "id": "string",
      "name": "string",
      "description": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roles|[[ApiRoleDTO](#schemaapiroledto)]|false|none|none|

<h2 id="tocS_ApiSamlConfigurationResponseDTO">ApiSamlConfigurationResponseDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapisamlconfigurationresponsedto"></a>
<a id="schema_ApiSamlConfigurationResponseDTO"></a>
<a id="tocSapisamlconfigurationresponsedto"></a>
<a id="tocsapisamlconfigurationresponsedto"></a>

```json
{
  "identityProviderName": "string",
  "entityId": "string",
  "firstNameAttributeName": "string",
  "lastNameAttributeName": "string",
  "emailAttributeName": "string",
  "usernameAttributeName": "string",
  "groupsAttributeName": "string",
  "validateResponseSignature": true,
  "validateAssertionSignature": true,
  "identityProviderMetadataXml": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityProviderName|string|false|none|none|
|entityId|string|false|none|none|
|firstNameAttributeName|string|false|none|none|
|lastNameAttributeName|string|false|none|none|
|emailAttributeName|string|false|none|none|
|usernameAttributeName|string|false|none|none|
|groupsAttributeName|string|false|none|none|
|validateResponseSignature|boolean|false|none|none|
|validateAssertionSignature|boolean|false|none|none|
|identityProviderMetadataXml|string|false|none|none|

<h2 id="tocS_ApiSamlConfigurationDTO">ApiSamlConfigurationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapisamlconfigurationdto"></a>
<a id="schema_ApiSamlConfigurationDTO"></a>
<a id="tocSapisamlconfigurationdto"></a>
<a id="tocsapisamlconfigurationdto"></a>

```json
{
  "identityProviderName": "string",
  "entityId": "string",
  "firstNameAttributeName": "string",
  "lastNameAttributeName": "string",
  "emailAttributeName": "string",
  "usernameAttributeName": "string",
  "groupsAttributeName": "string",
  "validateResponseSignature": true,
  "validateAssertionSignature": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identityProviderName|string|false|none|none|
|entityId|string|false|none|none|
|firstNameAttributeName|string|false|none|none|
|lastNameAttributeName|string|false|none|none|
|emailAttributeName|string|false|none|none|
|usernameAttributeName|string|false|none|none|
|groupsAttributeName|string|false|none|none|
|validateResponseSignature|boolean|false|none|none|
|validateAssertionSignature|boolean|false|none|none|

<h2 id="tocS_ApiSbomApplicationsHistoryMetricDTO">ApiSbomApplicationsHistoryMetricDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapisbomapplicationshistorymetricdto"></a>
<a id="schema_ApiSbomApplicationsHistoryMetricDTO"></a>
<a id="tocSapisbomapplicationshistorymetricdto"></a>
<a id="tocsapisbomapplicationshistorymetricdto"></a>

```json
{
  "totalScannedApplications": 0,
  "applicationsUpdatedLastYear": 0,
  "applicationsUpdatedLastMonth": 0,
  "applicationsUpdatedLastWeek": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalScannedApplications|integer(int64)|false|none|none|
|applicationsUpdatedLastYear|integer(int64)|false|none|none|
|applicationsUpdatedLastMonth|integer(int64)|false|none|none|
|applicationsUpdatedLastWeek|integer(int64)|false|none|none|

<h2 id="tocS_SbomsAnalyzedMetricsDTO">SbomsAnalyzedMetricsDTO</h2>
<!-- backwards compatibility -->
<a id="schemasbomsanalyzedmetricsdto"></a>
<a id="schema_SbomsAnalyzedMetricsDTO"></a>
<a id="tocSsbomsanalyzedmetricsdto"></a>
<a id="tocssbomsanalyzedmetricsdto"></a>

```json
{
  "total": 0,
  "threshold": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total|integer(int64)|false|none|none|
|threshold|integer(int64)|false|none|none|

<h2 id="tocS_VulnerabilitiesThreadLevelMetricDTO">VulnerabilitiesThreadLevelMetricDTO</h2>
<!-- backwards compatibility -->
<a id="schemavulnerabilitiesthreadlevelmetricdto"></a>
<a id="schema_VulnerabilitiesThreadLevelMetricDTO"></a>
<a id="tocSvulnerabilitiesthreadlevelmetricdto"></a>
<a id="tocsvulnerabilitiesthreadlevelmetricdto"></a>

```json
{
  "low": 0,
  "lowAnnotated": 0,
  "lowUnannotated": 0,
  "medium": 0,
  "mediumAnnotated": 0,
  "mediumUnannotated": 0,
  "high": 0,
  "highAnnotated": 0,
  "highUnannotated": 0,
  "critical": 0,
  "criticalAnnotated": 0,
  "criticalUnannotated": 0,
  "totalVulnerabilities": 0,
  "totalVulnerabilitiesAnnotated": 0,
  "totalVulnerabilitiesUnannotated": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|low|integer(int64)|false|none|none|
|lowAnnotated|integer(int64)|false|none|none|
|lowUnannotated|integer(int64)|false|none|none|
|medium|integer(int64)|false|none|none|
|mediumAnnotated|integer(int64)|false|none|none|
|mediumUnannotated|integer(int64)|false|none|none|
|high|integer(int64)|false|none|none|
|highAnnotated|integer(int64)|false|none|none|
|highUnannotated|integer(int64)|false|none|none|
|critical|integer(int64)|false|none|none|
|criticalAnnotated|integer(int64)|false|none|none|
|criticalUnannotated|integer(int64)|false|none|none|
|totalVulnerabilities|integer(int64)|false|none|none|
|totalVulnerabilitiesAnnotated|integer(int64)|false|none|none|
|totalVulnerabilitiesUnannotated|integer(int64)|false|none|none|

<h2 id="tocS_ApiSbomStatusDTO">ApiSbomStatusDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapisbomstatusdto"></a>
<a id="schema_ApiSbomStatusDTO"></a>
<a id="tocSapisbomstatusdto"></a>
<a id="tocsapisbomstatusdto"></a>

```json
{
  "downloadUrl": "string",
  "applicationId": "string",
  "version": "string",
  "isError": true,
  "errorMessage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloadUrl|string|false|none|none|
|applicationId|string|false|none|none|
|version|string|false|none|none|
|isError|boolean|false|none|none|
|errorMessage|string|false|none|none|

<h2 id="tocS_License">License</h2>
<!-- backwards compatibility -->
<a id="schemalicense"></a>
<a id="schema_License"></a>
<a id="tocSlicense"></a>
<a id="tocslicense"></a>

```json
{
  "licenseId": "string",
  "licenseName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|licenseId|string|false|none|none|
|licenseName|string|false|none|none|

<h2 id="tocS_SbomComponentDTO">SbomComponentDTO</h2>
<!-- backwards compatibility -->
<a id="schemasbomcomponentdto"></a>
<a id="schema_SbomComponentDTO"></a>
<a id="tocSsbomcomponentdto"></a>
<a id="tocssbomcomponentdto"></a>

```json
{
  "hash": "string",
  "packageUrl": "string",
  "name": "string",
  "version": "string",
  "dependencyType": "string",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "displayName": "string",
  "licenses": [
    {
      "licenseId": "string",
      "licenseName": "string"
    }
  ],
  "vulnerabilitySeverityNoneCount": 0,
  "vulnerabilitySeverityLowCount": 0,
  "vulnerabilitySeverityMediumCount": 0,
  "vulnerabilitySeverityHighCount": 0,
  "vulnerabilitySeverityCriticalCount": 0,
  "percentageAnnotated": 0.1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string|false|none|none|
|packageUrl|string|false|none|none|
|name|string|false|none|none|
|version|string|false|none|none|
|dependencyType|string|false|none|none|
|componentIdentifier|[ComponentIdentifier](#schemacomponentidentifier)|false|none|none|
|displayName|string|false|none|none|
|licenses|[[License](#schemalicense)]|false|none|none|
|vulnerabilitySeverityNoneCount|integer(int32)|false|none|none|
|vulnerabilitySeverityLowCount|integer(int32)|false|none|none|
|vulnerabilitySeverityMediumCount|integer(int32)|false|none|none|
|vulnerabilitySeverityHighCount|integer(int32)|false|none|none|
|vulnerabilitySeverityCriticalCount|integer(int32)|false|none|none|
|percentageAnnotated|number(double)|false|none|none|

<h2 id="tocS_SbomComponentListDTO">SbomComponentListDTO</h2>
<!-- backwards compatibility -->
<a id="schemasbomcomponentlistdto"></a>
<a id="schema_SbomComponentListDTO"></a>
<a id="tocSsbomcomponentlistdto"></a>
<a id="tocssbomcomponentlistdto"></a>

```json
{
  "totalResultsCount": 0,
  "results": [
    {
      "hash": "string",
      "packageUrl": "string",
      "name": "string",
      "version": "string",
      "dependencyType": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "licenses": [
        {
          "licenseId": "string",
          "licenseName": "string"
        }
      ],
      "vulnerabilitySeverityNoneCount": 0,
      "vulnerabilitySeverityLowCount": 0,
      "vulnerabilitySeverityMediumCount": 0,
      "vulnerabilitySeverityHighCount": 0,
      "vulnerabilitySeverityCriticalCount": 0,
      "percentageAnnotated": 0.1
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalResultsCount|integer(int32)|false|none|none|
|results|[[SbomComponentDTO](#schemasbomcomponentdto)]|false|none|none|

<h2 id="tocS_ThirdPartySbomMetadataSummaryDTO">ThirdPartySbomMetadataSummaryDTO</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartysbommetadatasummarydto"></a>
<a id="schema_ThirdPartySbomMetadataSummaryDTO"></a>
<a id="tocSthirdpartysbommetadatasummarydto"></a>
<a id="tocsthirdpartysbommetadatasummarydto"></a>

```json
{
  "applicationVersion": "string",
  "spec": "string",
  "specVersion": "string",
  "importDate": "2019-08-24T14:15:22Z",
  "none": 0,
  "low": 0,
  "medium": 0,
  "high": 0,
  "critical": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationVersion|string|false|none|none|
|spec|string|false|none|none|
|specVersion|string|false|none|none|
|importDate|string(date-time)|false|none|none|
|none|integer(int32)|false|none|none|
|low|integer(int32)|false|none|none|
|medium|integer(int32)|false|none|none|
|high|integer(int32)|false|none|none|
|critical|integer(int32)|false|none|none|

<h2 id="tocS_ThirdPartySbomMetadataSummaryListDTO">ThirdPartySbomMetadataSummaryListDTO</h2>
<!-- backwards compatibility -->
<a id="schemathirdpartysbommetadatasummarylistdto"></a>
<a id="schema_ThirdPartySbomMetadataSummaryListDTO"></a>
<a id="tocSthirdpartysbommetadatasummarylistdto"></a>
<a id="tocsthirdpartysbommetadatasummarylistdto"></a>

```json
{
  "totalResultsCount": 0,
  "results": [
    {
      "applicationVersion": "string",
      "spec": "string",
      "specVersion": "string",
      "importDate": "2019-08-24T14:15:22Z",
      "none": 0,
      "low": 0,
      "medium": 0,
      "high": 0,
      "critical": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalResultsCount|integer(int32)|false|none|none|
|results|[[ThirdPartySbomMetadataSummaryDTO](#schemathirdpartysbommetadatasummarydto)]|false|none|none|

<h2 id="tocS_vulnerabilityAnalysis">vulnerabilityAnalysis</h2>
<!-- backwards compatibility -->
<a id="schemavulnerabilityanalysis"></a>
<a id="schema_vulnerabilityAnalysis"></a>
<a id="tocSvulnerabilityanalysis"></a>
<a id="tocsvulnerabilityanalysis"></a>

```json
{
  "state": "resolved",
  "justification": "code_not_present",
  "response": "can_not_fix",
  "detail": "string",
  "createdOn": "2019-08-24T14:15:22Z",
  "lastUpdatedOn": "2019-08-24T14:15:22Z",
  "lastUpdatedBy": "string"
}

```

Vulnerability analysis details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|true|none|Vulnerability analysis state.|
|justification|string|true|none|The rationale of why the impact analysis state was asserted|
|response|string|true|none|Vulnerability analysis response by an author, supplier or manufacturer for the affected component.|
|detail|string|true|none|Detailed description of the impact including methods used during assessment|
|createdOn|string(date-time)|false|read-only|none|
|lastUpdatedOn|string(date-time)|false|read-only|none|
|lastUpdatedBy|string|false|read-only|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|resolved|
|state|resolved_with_pedigree|
|state|exploitable|
|state|in_triage|
|state|false_positive|
|state|not_affected|
|justification|code_not_present|
|justification|code_not_reachable|
|justification|requires_configuration|
|justification|requires_dependency|
|justification|requires_environment|
|justification|protected_by_compiler|
|justification|protected_at_runtime|
|justification|protected_at_perimeter|
|justification|protected_by_mitigating_control|
|response|can_not_fix|
|response|will_not_fix|
|response|update|
|response|rollback|
|response|workaround_available|

<h2 id="tocS_SBOM vulnerability analysis request">SBOM vulnerability analysis request</h2>
<!-- backwards compatibility -->
<a id="schemasbom vulnerability analysis request"></a>
<a id="schema_SBOM vulnerability analysis request"></a>
<a id="tocSsbom vulnerability analysis request"></a>
<a id="tocssbom vulnerability analysis request"></a>

```json
{
  "componentLocator": {
    "hash": "string",
    "packageUrl": "string"
  },
  "vulnerabilityAnalysis": {
    "state": "resolved",
    "justification": "code_not_present",
    "response": "can_not_fix",
    "detail": "string",
    "createdOn": "2019-08-24T14:15:22Z",
    "lastUpdatedOn": "2019-08-24T14:15:22Z",
    "lastUpdatedBy": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentLocator|[componentLocator](#schemacomponentlocator)|true|none|Component details about the vulnerable component. Either hash or package URL must be provided|
|vulnerabilityAnalysis|[vulnerabilityAnalysis](#schemavulnerabilityanalysis)|true|none|Vulnerability analysis details.|

<h2 id="tocS_componentLocator">componentLocator</h2>
<!-- backwards compatibility -->
<a id="schemacomponentlocator"></a>
<a id="schema_componentLocator"></a>
<a id="tocScomponentlocator"></a>
<a id="tocscomponentlocator"></a>

```json
{
  "hash": "string",
  "packageUrl": "string"
}

```

Component details about the vulnerable component. Either hash or package URL must be provided

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash|string|false|none|Component hash|
|packageUrl|string|false|none|Component package URL|

<h2 id="tocS_ApiSearchCriteriaDTOV2">ApiSearchCriteriaDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapisearchcriteriadtov2"></a>
<a id="schema_ApiSearchCriteriaDTOV2"></a>
<a id="tocSapisearchcriteriadtov2"></a>
<a id="tocsapisearchcriteriadtov2"></a>

```json
{
  "stageId": "string",
  "hash": "string",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "packageUrl": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stageId|string|false|none|none|
|hash|string|false|none|none|
|componentIdentifier|[ApiComponentIdentifierDTOV2](#schemaapicomponentidentifierdtov2)|false|none|none|
|packageUrl|string|false|none|none|

<h2 id="tocS_ApiSearchResultDTOV2">ApiSearchResultDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapisearchresultdtov2"></a>
<a id="schema_ApiSearchResultDTOV2"></a>
<a id="tocSapisearchresultdtov2"></a>
<a id="tocsapisearchresultdtov2"></a>

```json
{
  "applicationId": "string",
  "applicationName": "string",
  "reportHtmlUrl": "string",
  "reportUrl": "string",
  "hash": "string",
  "componentIdentifier": {
    "format": "string",
    "coordinates": {
      "property1": "string",
      "property2": "string"
    }
  },
  "packageUrl": "string",
  "threatLevel": 0,
  "dependencyData": {
    "directDependency": true,
    "innerSource": true,
    "parentComponentPurls": [
      "string"
    ],
    "innerSourceData": [
      {
        "ownerApplicationName": "string",
        "ownerApplicationId": "string",
        "innerSourceComponentPurl": "string"
      }
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applicationId|string|false|none|none|
|applicationName|string|false|none|none|
|reportHtmlUrl|string|false|none|none|
|reportUrl|string|false|none|none|
|hash|string|false|none|none|
|componentIdentifier|[ApiComponentIdentifierDTOV2](#schemaapicomponentidentifierdtov2)|false|none|none|
|packageUrl|string|false|none|none|
|threatLevel|integer(int32)|false|none|none|
|dependencyData|[ApiDependencyDataDTO](#schemaapidependencydatadto)|false|none|none|

<h2 id="tocS_ApiSearchResultsDTOV2">ApiSearchResultsDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapisearchresultsdtov2"></a>
<a id="schema_ApiSearchResultsDTOV2"></a>
<a id="tocSapisearchresultsdtov2"></a>
<a id="tocsapisearchresultsdtov2"></a>

```json
{
  "criteria": {
    "stageId": "string",
    "hash": "string",
    "componentIdentifier": {
      "format": "string",
      "coordinates": {
        "property1": "string",
        "property2": "string"
      }
    },
    "packageUrl": "string"
  },
  "results": [
    {
      "applicationId": "string",
      "applicationName": "string",
      "reportHtmlUrl": "string",
      "reportUrl": "string",
      "hash": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "packageUrl": "string",
      "threatLevel": 0,
      "dependencyData": {
        "directDependency": true,
        "innerSource": true,
        "parentComponentPurls": [
          "string"
        ],
        "innerSourceData": [
          {
            "ownerApplicationName": "string",
            "ownerApplicationId": "string",
            "innerSourceComponentPurl": "string"
          }
        ]
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|criteria|[ApiSearchCriteriaDTOV2](#schemaapisearchcriteriadtov2)|false|none|none|
|results|[[ApiSearchResultDTOV2](#schemaapisearchresultdtov2)]|false|none|none|

<h2 id="tocS_ApiOwnerDTO">ApiOwnerDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiownerdto"></a>
<a id="schema_ApiOwnerDTO"></a>
<a id="tocSapiownerdto"></a>
<a id="tocsapiownerdto"></a>

```json
{
  "ownerPublicId": "string",
  "ownerId": "string",
  "ownerName": "string",
  "ownerType": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ownerPublicId|string|false|none|none|
|ownerId|string|false|none|none|
|ownerName|string|false|none|none|
|ownerType|string|false|none|none|

<h2 id="tocS_ApiSecurityVulnerabilityOverrideDTOV2">ApiSecurityVulnerabilityOverrideDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapisecurityvulnerabilityoverridedtov2"></a>
<a id="schema_ApiSecurityVulnerabilityOverrideDTOV2"></a>
<a id="tocSapisecurityvulnerabilityoverridedtov2"></a>
<a id="tocsapisecurityvulnerabilityoverridedtov2"></a>

```json
{
  "securityOverrideId": "string",
  "hash": "string",
  "referenceId": "string",
  "status": "string",
  "comment": "string",
  "owner": {
    "ownerPublicId": "string",
    "ownerId": "string",
    "ownerName": "string",
    "ownerType": "string"
  },
  "currentlyAffectedComponents": [
    {
      "packageUrl": "string",
      "hash": "string",
      "sha256": "string",
      "componentIdentifier": {
        "format": "string",
        "coordinates": {
          "property1": "string",
          "property2": "string"
        }
      },
      "displayName": "string",
      "proprietary": true,
      "thirdParty": true
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|securityOverrideId|string|false|none|none|
|hash|string|false|none|none|
|referenceId|string|false|none|none|
|status|string|false|none|none|
|comment|string|false|none|none|
|owner|[ApiOwnerDTO](#schemaapiownerdto)|false|none|none|
|currentlyAffectedComponents|[[ApiComponentDTOV2](#schemaapicomponentdtov2)]|false|none|none|

<h2 id="tocS_ApiSecurityVulnerabilityOverrideResponseDTOV2">ApiSecurityVulnerabilityOverrideResponseDTOV2</h2>
<!-- backwards compatibility -->
<a id="schemaapisecurityvulnerabilityoverrideresponsedtov2"></a>
<a id="schema_ApiSecurityVulnerabilityOverrideResponseDTOV2"></a>
<a id="tocSapisecurityvulnerabilityoverrideresponsedtov2"></a>
<a id="tocsapisecurityvulnerabilityoverrideresponsedtov2"></a>

```json
{
  "securityOverrides": [
    {
      "securityOverrideId": "string",
      "hash": "string",
      "referenceId": "string",
      "status": "string",
      "comment": "string",
      "owner": {
        "ownerPublicId": "string",
        "ownerId": "string",
        "ownerName": "string",
        "ownerType": "string"
      },
      "currentlyAffectedComponents": [
        {
          "packageUrl": "string",
          "hash": "string",
          "sha256": "string",
          "componentIdentifier": {
            "format": "string",
            "coordinates": {
              "property1": "string",
              "property2": "string"
            }
          },
          "displayName": "string",
          "proprietary": true,
          "thirdParty": true
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|securityOverrides|[[ApiSecurityVulnerabilityOverrideDTOV2](#schemaapisecurityvulnerabilityoverridedtov2)]|false|none|none|

<h2 id="tocS_ApiSourceControlConfigurationDTO">ApiSourceControlConfigurationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapisourcecontrolconfigurationdto"></a>
<a id="schema_ApiSourceControlConfigurationDTO"></a>
<a id="tocSapisourcecontrolconfigurationdto"></a>
<a id="tocsapisourcecontrolconfigurationdto"></a>

```json
{
  "cloneDirectory": "string",
  "gitImplementation": "native",
  "prCommentPurgeWindow": 0,
  "prEventPurgeWindow": 0,
  "gitExecutable": "string",
  "gitTimeoutSeconds": 0,
  "commitUsername": "string",
  "commitEmail": "string",
  "useUsernameInRepositoryCloneUrl": true,
  "defaultBranchMonitoringStartTime": "string",
  "defaultBranchMonitoringIntervalHours": 0,
  "pullRequestMonitoringIntervalSeconds": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloneDirectory|string|false|none|none|
|gitImplementation|string|false|none|none|
|prCommentPurgeWindow|integer(int32)|false|none|none|
|prEventPurgeWindow|integer(int32)|false|none|none|
|gitExecutable|string|false|none|none|
|gitTimeoutSeconds|integer(int32)|false|none|none|
|commitUsername|string|false|none|none|
|commitEmail|string|false|none|none|
|useUsernameInRepositoryCloneUrl|boolean|false|none|none|
|defaultBranchMonitoringStartTime|string|false|none|none|
|defaultBranchMonitoringIntervalHours|integer(int32)|false|none|none|
|pullRequestMonitoringIntervalSeconds|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|gitImplementation|native|
|gitImplementation|java|

<h2 id="tocS_ApiPullRequestResult">ApiPullRequestResult</h2>
<!-- backwards compatibility -->
<a id="schemaapipullrequestresult"></a>
<a id="schema_ApiPullRequestResult"></a>
<a id="tocSapipullrequestresult"></a>
<a id="tocsapipullrequestresult"></a>

```json
{
  "startTime": "2019-08-24T14:15:22Z",
  "title": "string",
  "exceptionThrown": true,
  "successful": true,
  "totalTime": 0,
  "reasoning": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startTime|string(date-time)|false|none|none|
|title|string|false|none|none|
|exceptionThrown|boolean|false|none|none|
|successful|boolean|false|none|none|
|totalTime|integer(int64)|false|none|none|
|reasoning|string|false|none|none|

<h2 id="tocS_ApiPullRequestResults">ApiPullRequestResults</h2>
<!-- backwards compatibility -->
<a id="schemaapipullrequestresults"></a>
<a id="schema_ApiPullRequestResults"></a>
<a id="tocSapipullrequestresults"></a>
<a id="tocsapipullrequestresults"></a>

```json
{
  "results": [
    {
      "startTime": "2019-08-24T14:15:22Z",
      "title": "string",
      "exceptionThrown": true,
      "successful": true,
      "totalTime": 0,
      "reasoning": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ApiPullRequestResult](#schemaapipullrequestresult)]|false|none|none|

<h2 id="tocS_ApiSourceControlDTO">ApiSourceControlDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapisourcecontroldto"></a>
<a id="schema_ApiSourceControlDTO"></a>
<a id="tocSapisourcecontroldto"></a>
<a id="tocsapisourcecontroldto"></a>

```json
{
  "id": "string",
  "ownerId": "string",
  "repositoryUrl": "string",
  "username": "string",
  "token": "string",
  "provider": "string",
  "baseBranch": "string",
  "enablePullRequests": true,
  "remediationPullRequestsEnabled": true,
  "enableStatusChecks": true,
  "statusChecksEnabled": true,
  "pullRequestCommentingEnabled": true,
  "sourceControlEvaluationsEnabled": true,
  "sourceControlScanTarget": "string",
  "sshEnabled": true,
  "commitStatusEnabled": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|ownerId|string|false|none|none|
|repositoryUrl|string|false|none|none|
|username|string|false|none|none|
|token|string|false|none|none|
|provider|string|false|none|none|
|baseBranch|string|false|none|none|
|enablePullRequests|boolean|false|none|none|
|remediationPullRequestsEnabled|boolean|false|none|none|
|enableStatusChecks|boolean|false|none|none|
|statusChecksEnabled|boolean|false|none|none|
|pullRequestCommentingEnabled|boolean|false|none|none|
|sourceControlEvaluationsEnabled|boolean|false|none|none|
|sourceControlScanTarget|string|false|none|none|
|sshEnabled|boolean|false|none|none|
|commitStatusEnabled|boolean|false|none|none|

<h2 id="tocS_ApiConditionFactReasonDTO">ApiConditionFactReasonDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiconditionfactreasondto"></a>
<a id="schema_ApiConditionFactReasonDTO"></a>
<a id="tocSapiconditionfactreasondto"></a>
<a id="tocsapiconditionfactreasondto"></a>

```json
{
  "reason": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|none|

<h2 id="tocS_ApiConstraintFactDTO">ApiConstraintFactDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiconstraintfactdto"></a>
<a id="schema_ApiConstraintFactDTO"></a>
<a id="tocSapiconstraintfactdto"></a>
<a id="tocsapiconstraintfactdto"></a>

```json
{
  "constraintName": "string",
  "constraintId": "string",
  "reasons": [
    {
      "reason": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|constraintName|string|false|none|none|
|constraintId|string|false|none|none|
|reasons|[[ApiConditionFactReasonDTO](#schemaapiconditionfactreasondto)]|false|none|none|

<h2 id="tocS_ApiStaleApplicationEvaluationDTO">ApiStaleApplicationEvaluationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapistaleapplicationevaluationdto"></a>
<a id="schema_ApiStaleApplicationEvaluationDTO"></a>
<a id="tocSapistaleapplicationevaluationdto"></a>
<a id="tocsapistaleapplicationevaluationdto"></a>

```json
{
  "application": {
    "id": "string",
    "publicId": "string",
    "name": "string",
    "organizationId": "string",
    "contactUserName": "string"
  },
  "stages": [
    {
      "stageId": "string",
      "lastEvaluationDate": "2019-08-24T14:15:22Z"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|[ApiApplicationBaseDTO](#schemaapiapplicationbasedto)|false|none|none|
|stages|[[ApiStaleEvaluationStageDTO](#schemaapistaleevaluationstagedto)]|false|none|none|

<h2 id="tocS_ApiStaleEvaluationStageDTO">ApiStaleEvaluationStageDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapistaleevaluationstagedto"></a>
<a id="schema_ApiStaleEvaluationStageDTO"></a>
<a id="tocSapistaleevaluationstagedto"></a>
<a id="tocsapistaleevaluationstagedto"></a>

```json
{
  "stageId": "string",
  "lastEvaluationDate": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stageId|string|false|none|none|
|lastEvaluationDate|string(date-time)|false|none|none|

<h2 id="tocS_ApiStaleEvaluationsDTO">ApiStaleEvaluationsDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapistaleevaluationsdto"></a>
<a id="schema_ApiStaleEvaluationsDTO"></a>
<a id="tocSapistaleevaluationsdto"></a>
<a id="tocsapistaleevaluationsdto"></a>

```json
{
  "applications": [
    {
      "application": {
        "id": "string",
        "publicId": "string",
        "name": "string",
        "organizationId": "string",
        "contactUserName": "string"
      },
      "stages": [
        {
          "stageId": "string",
          "lastEvaluationDate": "2019-08-24T14:15:22Z"
        }
      ]
    }
  ],
  "repositories": [
    {
      "repository": {
        "repositoryId": "string",
        "publicId": "string",
        "format": "string",
        "type": "string",
        "auditEnabled": true,
        "quarantineEnabled": true,
        "policyCompliantComponentSelectionEnabled": true,
        "namespaceConfusionProtectionEnabled": true
      },
      "stages": [
        {
          "stageId": "string",
          "lastEvaluationDate": "2019-08-24T14:15:22Z"
        }
      ]
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applications|[[ApiStaleApplicationEvaluationDTO](#schemaapistaleapplicationevaluationdto)]|false|none|none|
|repositories|[[ApiStaleRepositoryEvaluationDTO](#schemaapistalerepositoryevaluationdto)]|false|none|none|

<h2 id="tocS_ApiStaleRepositoryEvaluationDTO">ApiStaleRepositoryEvaluationDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapistalerepositoryevaluationdto"></a>
<a id="schema_ApiStaleRepositoryEvaluationDTO"></a>
<a id="tocSapistalerepositoryevaluationdto"></a>
<a id="tocsapistalerepositoryevaluationdto"></a>

```json
{
  "repository": {
    "repositoryId": "string",
    "publicId": "string",
    "format": "string",
    "type": "string",
    "auditEnabled": true,
    "quarantineEnabled": true,
    "policyCompliantComponentSelectionEnabled": true,
    "namespaceConfusionProtectionEnabled": true
  },
  "stages": [
    {
      "stageId": "string",
      "lastEvaluationDate": "2019-08-24T14:15:22Z"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repository|[ApiRepositoryDTO](#schemaapirepositorydto)|false|none|none|
|stages|[[ApiStaleEvaluationStageDTO](#schemaapistaleevaluationstagedto)]|false|none|none|

<h2 id="tocS_ApiStaleWaiverDTO">ApiStaleWaiverDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapistalewaiverdto"></a>
<a id="schema_ApiStaleWaiverDTO"></a>
<a id="tocSapistalewaiverdto"></a>
<a id="tocsapistalewaiverdto"></a>

```json
{
  "waiverId": "string",
  "policyId": "string",
  "policyName": "string",
  "comment": "string",
  "scopeOwnerType": "string",
  "scopeOwnerId": "string",
  "scopeOwnerName": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "expiryTime": "2019-08-24T14:15:22Z",
  "creatorId": "string",
  "creatorName": "string",
  "constraintFacts": [
    {
      "constraintName": "string",
      "constraintId": "string",
      "reasons": [
        {
          "reason": "string"
        }
      ]
    }
  ],
  "staleEvaluations": {
    "applications": [
      {
        "application": {
          "id": "string",
          "publicId": "string",
          "name": "string",
          "organizationId": "string",
          "contactUserName": "string"
        },
        "stages": [
          {
            "stageId": "string",
            "lastEvaluationDate": "2019-08-24T14:15:22Z"
          }
        ]
      }
    ],
    "repositories": [
      {
        "repository": {
          "repositoryId": "string",
          "publicId": "string",
          "format": "string",
          "type": "string",
          "auditEnabled": true,
          "quarantineEnabled": true,
          "policyCompliantComponentSelectionEnabled": true,
          "namespaceConfusionProtectionEnabled": true
        },
        "stages": [
          {
            "stageId": "string",
            "lastEvaluationDate": "2019-08-24T14:15:22Z"
          }
        ]
      }
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|waiverId|string|false|none|none|
|policyId|string|false|none|none|
|policyName|string|false|none|none|
|comment|string|false|none|none|
|scopeOwnerType|string|false|none|none|
|scopeOwnerId|string|false|none|none|
|scopeOwnerName|string|false|none|none|
|createTime|string(date-time)|false|none|none|
|expiryTime|string(date-time)|false|none|none|
|creatorId|string|false|none|none|
|creatorName|string|false|none|none|
|constraintFacts|[[ApiConstraintFactDTO](#schemaapiconstraintfactdto)]|false|none|none|
|staleEvaluations|[ApiStaleEvaluationsDTO](#schemaapistaleevaluationsdto)|false|none|none|

<h2 id="tocS_ApiStaleWaiversResponseDTO">ApiStaleWaiversResponseDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapistalewaiversresponsedto"></a>
<a id="schema_ApiStaleWaiversResponseDTO"></a>
<a id="tocSapistalewaiversresponsedto"></a>
<a id="tocsapistalewaiversresponsedto"></a>

```json
{
  "staleWaivers": [
    {
      "waiverId": "string",
      "policyId": "string",
      "policyName": "string",
      "comment": "string",
      "scopeOwnerType": "string",
      "scopeOwnerId": "string",
      "scopeOwnerName": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "expiryTime": "2019-08-24T14:15:22Z",
      "creatorId": "string",
      "creatorName": "string",
      "constraintFacts": [
        {
          "constraintName": "string",
          "constraintId": "string",
          "reasons": [
            {
              "reason": "string"
            }
          ]
        }
      ],
      "staleEvaluations": {
        "applications": [
          {
            "application": {
              "id": "string",
              "publicId": "string",
              "name": "string",
              "organizationId": "string",
              "contactUserName": "string"
            },
            "stages": [
              {
                "stageId": "string",
                "lastEvaluationDate": "2019-08-24T14:15:22Z"
              }
            ]
          }
        ],
        "repositories": [
          {
            "repository": {
              "repositoryId": "string",
              "publicId": "string",
              "format": "string",
              "type": "string",
              "auditEnabled": true,
              "quarantineEnabled": true,
              "policyCompliantComponentSelectionEnabled": true,
              "namespaceConfusionProtectionEnabled": true
            },
            "stages": [
              {
                "stageId": "string",
                "lastEvaluationDate": "2019-08-24T14:15:22Z"
              }
            ]
          }
        ]
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|staleWaivers|[[ApiStaleWaiverDTO](#schemaapistalewaiverdto)]|false|none|none|

<h2 id="tocS_IdeUsersOverviewDTO">IdeUsersOverviewDTO</h2>
<!-- backwards compatibility -->
<a id="schemaideusersoverviewdto"></a>
<a id="schema_IdeUsersOverviewDTO"></a>
<a id="tocSideusersoverviewdto"></a>
<a id="tocsideusersoverviewdto"></a>

```json
{
  "userCount": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userCount|integer(int64)|false|none|none|

<h2 id="tocS_ApiEvaluationResultCounterDTO">ApiEvaluationResultCounterDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapievaluationresultcounterdto"></a>
<a id="schema_ApiEvaluationResultCounterDTO"></a>
<a id="tocSapievaluationresultcounterdto"></a>
<a id="tocsapievaluationresultcounterdto"></a>

```json
{
  "critical": 0,
  "severe": 0,
  "moderate": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|critical|integer(int32)|false|none|none|
|severe|integer(int32)|false|none|none|
|moderate|integer(int32)|false|none|none|

<h2 id="tocS_ApiThirdPartyScanResultDTO">ApiThirdPartyScanResultDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapithirdpartyscanresultdto"></a>
<a id="schema_ApiThirdPartyScanResultDTO"></a>
<a id="tocSapithirdpartyscanresultdto"></a>
<a id="tocsapithirdpartyscanresultdto"></a>

```json
{
  "policyAction": "string",
  "reportHtmlUrl": "string",
  "reportPdfUrl": "string",
  "reportDataUrl": "string",
  "embeddableReportHtmlUrl": "string",
  "isError": true,
  "errorMessage": "string",
  "componentsAffected": {
    "critical": 0,
    "severe": 0,
    "moderate": 0
  },
  "openPolicyViolations": {
    "critical": 0,
    "severe": 0,
    "moderate": 0
  },
  "grandfatheredPolicyViolations": 0,
  "legacyViolations": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyAction|string|false|none|none|
|reportHtmlUrl|string|false|none|none|
|reportPdfUrl|string|false|none|none|
|reportDataUrl|string|false|none|none|
|embeddableReportHtmlUrl|string|false|none|none|
|isError|boolean|false|none|none|
|errorMessage|string|false|none|none|
|componentsAffected|[ApiEvaluationResultCounterDTO](#schemaapievaluationresultcounterdto)|false|none|none|
|openPolicyViolations|[ApiEvaluationResultCounterDTO](#schemaapievaluationresultcounterdto)|false|none|none|
|grandfatheredPolicyViolations|integer(int32)|false|none|none|
|legacyViolations|integer(int32)|false|none|none|

<h2 id="tocS_ApiUserDTO">ApiUserDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiuserdto"></a>
<a id="schema_ApiUserDTO"></a>
<a id="tocSapiuserdto"></a>
<a id="tocsapiuserdto"></a>

```json
{
  "username": "string",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "realm": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|false|none|none|
|password|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|email|string|false|none|none|
|realm|string|false|none|none|

<h2 id="tocS_ApiUserListDTO">ApiUserListDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiuserlistdto"></a>
<a id="schema_ApiUserListDTO"></a>
<a id="tocSapiuserlistdto"></a>
<a id="tocsapiuserlistdto"></a>

```json
{
  "users": [
    {
      "username": "string",
      "password": "string",
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "realm": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[[ApiUserDTO](#schemaapiuserdto)]|false|none|none|

<h2 id="tocS_ApiUserTokenDTO">ApiUserTokenDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiusertokendto"></a>
<a id="schema_ApiUserTokenDTO"></a>
<a id="tocSapiusertokendto"></a>
<a id="tocsapiusertokendto"></a>

```json
{
  "userCode": "string",
  "passCode": "string",
  "username": "string",
  "realm": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userCode|string|false|none|none|
|passCode|string|false|none|none|
|username|string|false|none|none|
|realm|string|false|none|none|

<h2 id="tocS_ApiUserTokenExistsDTO">ApiUserTokenExistsDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiusertokenexistsdto"></a>
<a id="schema_ApiUserTokenExistsDTO"></a>
<a id="tocSapiusertokenexistsdto"></a>
<a id="tocsapiusertokenexistsdto"></a>

```json
{
  "userTokenExists": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userTokenExists|boolean|false|none|none|

<h2 id="tocS_CweId">CweId</h2>
<!-- backwards compatibility -->
<a id="schemacweid"></a>
<a id="schema_CweId"></a>
<a id="tocScweid"></a>
<a id="tocscweid"></a>

```json
{
  "id": "string",
  "uri": "http://example.com"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|uri|string(uri)|false|none|none|

<h2 id="tocS_ReferenceLink">ReferenceLink</h2>
<!-- backwards compatibility -->
<a id="schemareferencelink"></a>
<a id="schema_ReferenceLink"></a>
<a id="tocSreferencelink"></a>
<a id="tocsreferencelink"></a>

```json
{
  "referenceType": "string",
  "url": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|referenceType|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_RootCause">RootCause</h2>
<!-- backwards compatibility -->
<a id="schemarootcause"></a>
<a id="schema_RootCause"></a>
<a id="tocSrootcause"></a>
<a id="tocsrootcause"></a>

```json
{
  "listOfPaths": [
    "string"
  ],
  "versionRange": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listOfPaths|[string]|false|none|none|
|versionRange|string|false|none|none|

<h2 id="tocS_SecurityVulnerabilityCustomData">SecurityVulnerabilityCustomData</h2>
<!-- backwards compatibility -->
<a id="schemasecurityvulnerabilitycustomdata"></a>
<a id="schema_SecurityVulnerabilityCustomData"></a>
<a id="tocSsecurityvulnerabilitycustomdata"></a>
<a id="tocssecurityvulnerabilitycustomdata"></a>

```json
{
  "remediation": "string",
  "cweId": "string",
  "cvssVector": "string",
  "cvssSeverity": 0.1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remediation|string|false|none|none|
|cweId|string|false|none|none|
|cvssVector|string|false|none|none|
|cvssSeverity|number(float)|false|none|none|

<h2 id="tocS_SecurityVulnerabilityData">SecurityVulnerabilityData</h2>
<!-- backwards compatibility -->
<a id="schemasecurityvulnerabilitydata"></a>
<a id="schema_SecurityVulnerabilityData"></a>
<a id="tocSsecurityvulnerabilitydata"></a>
<a id="tocssecurityvulnerabilitydata"></a>

```json
{
  "identifier": "string",
  "vulnIds": [
    "string"
  ],
  "vulnerabilityLink": "http://example.com",
  "source": {
    "shortName": "string",
    "longName": "string"
  },
  "mainSeverity": {
    "source": "string",
    "sourceLabel": "string",
    "score": 0.1,
    "vector": "string"
  },
  "severityScores": [
    {
      "source": "string",
      "sourceLabel": "string",
      "score": 0.1,
      "vector": "string"
    }
  ],
  "weakness": {
    "cweSource": "string",
    "cweIds": [
      {
        "id": "string",
        "uri": "http://example.com"
      }
    ]
  },
  "categories": [
    "string"
  ],
  "description": "string",
  "explanationMarkdown": "string",
  "componentExplanationMarkdown": "string",
  "detectionMarkdown": "string",
  "componentDetectionMarkdown": "string",
  "recommendationMarkdown": "string",
  "componentRecommendationMarkdown": "string",
  "rootCauses": [
    {
      "listOfPaths": [
        "string"
      ],
      "versionRange": "string"
    }
  ],
  "advisories": [
    {
      "referenceType": "string",
      "url": "string"
    }
  ],
  "vulnerableVersionRanges": [
    "string"
  ],
  "researchType": "FAST_TRACK",
  "isAdvancedVulnerabilityDetection": true,
  "customData": {
    "remediation": "string",
    "cweId": "string",
    "cvssVector": "string",
    "cvssSeverity": 0.1
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|string|false|none|none|
|vulnIds|[string]|false|none|none|
|vulnerabilityLink|string(uri)|false|none|none|
|source|[VulnerabilitySource](#schemavulnerabilitysource)|false|none|none|
|mainSeverity|[SecurityVulnerabilitySeverity](#schemasecurityvulnerabilityseverity)|false|none|none|
|severityScores|[[SecurityVulnerabilitySeverity](#schemasecurityvulnerabilityseverity)]|false|none|none|
|weakness|[SecurityVulnerabilityWeakness](#schemasecurityvulnerabilityweakness)|false|none|none|
|categories|[string]|false|none|none|
|description|string|false|none|none|
|explanationMarkdown|string|false|none|none|
|componentExplanationMarkdown|string|false|none|none|
|detectionMarkdown|string|false|none|none|
|componentDetectionMarkdown|string|false|none|none|
|recommendationMarkdown|string|false|none|none|
|componentRecommendationMarkdown|string|false|none|none|
|rootCauses|[[RootCause](#schemarootcause)]|false|none|none|
|advisories|[[ReferenceLink](#schemareferencelink)]|false|none|none|
|vulnerableVersionRanges|[string]|false|none|none|
|researchType|string|false|none|none|
|isAdvancedVulnerabilityDetection|boolean|false|none|none|
|customData|[SecurityVulnerabilityCustomData](#schemasecurityvulnerabilitycustomdata)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|researchType|FAST_TRACK|
|researchType|DEEP_DIVE|

<h2 id="tocS_SecurityVulnerabilitySeverity">SecurityVulnerabilitySeverity</h2>
<!-- backwards compatibility -->
<a id="schemasecurityvulnerabilityseverity"></a>
<a id="schema_SecurityVulnerabilitySeverity"></a>
<a id="tocSsecurityvulnerabilityseverity"></a>
<a id="tocssecurityvulnerabilityseverity"></a>

```json
{
  "source": "string",
  "sourceLabel": "string",
  "score": 0.1,
  "vector": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|string|false|none|none|
|sourceLabel|string|false|none|none|
|score|number(float)|false|none|none|
|vector|string|false|none|none|

<h2 id="tocS_SecurityVulnerabilityWeakness">SecurityVulnerabilityWeakness</h2>
<!-- backwards compatibility -->
<a id="schemasecurityvulnerabilityweakness"></a>
<a id="schema_SecurityVulnerabilityWeakness"></a>
<a id="tocSsecurityvulnerabilityweakness"></a>
<a id="tocssecurityvulnerabilityweakness"></a>

```json
{
  "cweSource": "string",
  "cweIds": [
    {
      "id": "string",
      "uri": "http://example.com"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cweSource|string|false|none|none|
|cweIds|[[CweId](#schemacweid)]|false|none|none|

<h2 id="tocS_VulnerabilitySource">VulnerabilitySource</h2>
<!-- backwards compatibility -->
<a id="schemavulnerabilitysource"></a>
<a id="schema_VulnerabilitySource"></a>
<a id="tocSvulnerabilitysource"></a>
<a id="tocsvulnerabilitysource"></a>

```json
{
  "shortName": "string",
  "longName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shortName|string|false|none|none|
|longName|string|false|none|none|

<h2 id="tocS_ApiArtifactoryConnectionDTO">ApiArtifactoryConnectionDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiartifactoryconnectiondto"></a>
<a id="schema_ApiArtifactoryConnectionDTO"></a>
<a id="tocSapiartifactoryconnectiondto"></a>
<a id="tocsapiartifactoryconnectiondto"></a>

```json
{
  "artifactoryConnectionId": "string",
  "ownerType": "application",
  "ownerId": "string",
  "isAnonymous": true,
  "baseUrl": "string",
  "username": "string",
  "password": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactoryConnectionId|string|false|none|none|
|ownerType|string|false|none|none|
|ownerId|string|false|none|none|
|isAnonymous|boolean|false|none|none|
|baseUrl|string|false|none|none|
|username|string|false|none|none|
|password|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ownerType|application|
|ownerType|organization|
|ownerType|repository_container|
|ownerType|repository_manager|
|ownerType|repository|
|ownerType|global|

<h2 id="tocS_ApiArtifactoryConnectionStatusResponseDTO">ApiArtifactoryConnectionStatusResponseDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiartifactoryconnectionstatusresponsedto"></a>
<a id="schema_ApiArtifactoryConnectionStatusResponseDTO"></a>
<a id="tocSapiartifactoryconnectionstatusresponsedto"></a>
<a id="tocsapiartifactoryconnectionstatusresponsedto"></a>

```json
{
  "enabled": true,
  "inheritedFromOrganizationId": "string",
  "inheritedFromOrganizationName": "string",
  "allowOverride": true,
  "inheritedFromOrgEnabled": true,
  "allowChange": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|inheritedFromOrganizationId|string|false|none|none|
|inheritedFromOrganizationName|string|false|none|none|
|allowOverride|boolean|false|none|none|
|inheritedFromOrgEnabled|boolean|false|none|none|
|allowChange|boolean|false|none|none|

<h2 id="tocS_ApiOwnerArtifactoryConnectionDTO">ApiOwnerArtifactoryConnectionDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiownerartifactoryconnectiondto"></a>
<a id="schema_ApiOwnerArtifactoryConnectionDTO"></a>
<a id="tocSapiownerartifactoryconnectiondto"></a>
<a id="tocsapiownerartifactoryconnectiondto"></a>

```json
{
  "artifactoryConnection": {
    "artifactoryConnectionId": "string",
    "ownerType": "application",
    "ownerId": "string",
    "isAnonymous": true,
    "baseUrl": "string",
    "username": "string",
    "password": "string"
  },
  "artifactoryConnectionStatus": {
    "enabled": true,
    "inheritedFromOrganizationId": "string",
    "inheritedFromOrganizationName": "string",
    "allowOverride": true,
    "inheritedFromOrgEnabled": true,
    "allowChange": true
  },
  "ownerDTO": {
    "ownerPublicId": "string",
    "ownerId": "string",
    "ownerName": "string",
    "ownerType": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactoryConnection|[ApiArtifactoryConnectionDTO](#schemaapiartifactoryconnectiondto)|false|none|none|
|artifactoryConnectionStatus|[ApiArtifactoryConnectionStatusResponseDTO](#schemaapiartifactoryconnectionstatusresponsedto)|false|none|none|
|ownerDTO|[ApiOwnerDTO](#schemaapiownerdto)|false|none|none|

<h2 id="tocS_ApiArtifactoryConnectionStatusRequestDTO">ApiArtifactoryConnectionStatusRequestDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiartifactoryconnectionstatusrequestdto"></a>
<a id="schema_ApiArtifactoryConnectionStatusRequestDTO"></a>
<a id="tocSapiartifactoryconnectionstatusrequestdto"></a>
<a id="tocsapiartifactoryconnectionstatusrequestdto"></a>

```json
{
  "enabled": true,
  "allowOverride": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|allowOverride|boolean|false|none|none|

