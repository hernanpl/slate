---
title: Nexus Repository Manager REST API v3.74.0-05
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

<h1 id="nexus-repository-manager-rest-api">Nexus Repository Manager REST API v3.74.0-05</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="/service/rest/">/service/rest/</a>

<h1 id="nexus-repository-manager-rest-api-security-management-anonymous-access">Security Management: Anonymous Access</h1>

## read

<a id="opIdread"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/anonymous \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/anonymous");
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

r = requests.get('/service/rest/v1/security/anonymous', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/anonymous',
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

`GET /v1/security/anonymous`

*Get Anonymous Access settings*

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "userId": "string",
  "realmName": "string"
}
```

<h3 id="read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AnonymousAccessSettingsXO](#schemaanonymousaccesssettingsxo)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to update settings|None|

<aside class="success">
This operation does not require authentication
</aside>

## update

<a id="opIdupdate"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/security/anonymous \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/anonymous");
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

r = requests.put('/service/rest/v1/security/anonymous', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "enabled": true,
  "userId": "string",
  "realmName": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/anonymous',
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

`PUT /v1/security/anonymous`

*Update Anonymous Access settings*

> Body parameter

```json
{
  "enabled": true,
  "userId": "string",
  "realmName": "string"
}
```

<h3 id="update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AnonymousAccessSettingsXO](#schemaanonymousaccesssettingsxo)|false|none|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "userId": "string",
  "realmName": "string"
}
```

<h3 id="update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AnonymousAccessSettingsXO](#schemaanonymousaccesssettingsxo)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to update settings|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-security-management">Security management</h1>

## getUserSources

<a id="opIdgetUserSources"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/user-sources \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/user-sources");
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

r = requests.get('/service/rest/v1/security/user-sources', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/user-sources',
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

`GET /v1/security/user-sources`

*Retrieve a list of the available user sources.*

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="getusersources-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|

<h3 id="getusersources-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiUserSource](#schemaapiusersource)]|false|none|none|
|» id|string|false|none|none|
|» name|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-security-management-users">Security management: users</h1>

## updateUser

<a id="opIdupdateUser"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/security/users/{userId} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/users/{userId}");
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

r = requests.put('/service/rest/v1/security/users/{userId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "userId": "string",
  "firstName": "string",
  "lastName": "string",
  "emailAddress": "string",
  "source": "string",
  "status": "active",
  "readOnly": true,
  "roles": [
    "string"
  ],
  "externalRoles": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/users/{userId}',
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

`PUT /v1/security/users/{userId}`

*Update an existing user.*

> Body parameter

```json
{
  "userId": "string",
  "firstName": "string",
  "lastName": "string",
  "emailAddress": "string",
  "source": "string",
  "status": "active",
  "readOnly": true,
  "roles": [
    "string"
  ],
  "externalRoles": [
    "string"
  ]
}
```

<h3 id="updateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The userid the request should apply to.|
|body|body|[ApiUser](#schemaapiuser)|false|A representation of the user to update.|

<h3 id="updateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Password was not supplied in the body of the request|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User or user source not found in the system.|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteUser

<a id="opIddeleteUser"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/security/users/{userId}

```

```java
URL obj = new URL("/service/rest/v1/security/users/{userId}");
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

r = requests.delete('/service/rest/v1/security/users/{userId}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/security/users/{userId}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/security/users/{userId}`

*Delete a user.*

<h3 id="deleteuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The userid the request should apply to.|
|realm|query|string|false|The realm the request should apply to.|

<h3 id="deleteuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|There was problem deleting a user. Consult the response body for more details|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User or user source not found in the system.|None|

<aside class="success">
This operation does not require authentication
</aside>

## changePassword

<a id="opIdchangePassword"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/security/users/{userId}/change-password \
  -H 'Content-Type: text/plain'

```

```java
URL obj = new URL("/service/rest/v1/security/users/{userId}/change-password");
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
  'Content-Type': 'text/plain'
}

r = requests.put('/service/rest/v1/security/users/{userId}/change-password', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'text/plain'
};

fetch('/service/rest/v1/security/users/{userId}/change-password',
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

`PUT /v1/security/users/{userId}/change-password`

*Change a user's password.*

> Body parameter

```
string

```

<h3 id="changepassword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The userid the request should apply to.|
|body|body|string|false|The new password to use.|

<h3 id="changepassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Password was not supplied in the body of the request|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found in the system.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUsers

<a id="opIdgetUsers"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/users \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/users");
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

r = requests.get('/service/rest/v1/security/users', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/users',
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

`GET /v1/security/users`

*Retrieve a list of users.*

<h3 id="getusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|query|string|false|An optional term to search userids for.|
|source|query|string|false|An optional user source to restrict the search to.|

> Example responses

> 200 Response

```json
[
  {
    "userId": "string",
    "firstName": "string",
    "lastName": "string",
    "emailAddress": "string",
    "source": "string",
    "status": "active",
    "readOnly": true,
    "roles": [
      "string"
    ],
    "externalRoles": [
      "string"
    ]
  }
]
```

<h3 id="getusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Password was not supplied in the body of the request|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|

<h3 id="getusers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiUser](#schemaapiuser)]|false|none|none|
|» userId|string|false|none|The userid which is required for login. This value cannot be changed.|
|» firstName|string|false|none|The first name of the user.|
|» lastName|string|false|none|The last name of the user.|
|» emailAddress|string|false|none|The email address associated with the user.|
|» source|string|false|none|The user source which is the origin of this user. This value cannot be changed.|
|» status|string|true|none|The user's status, e.g. active or disabled.|
|» readOnly|boolean|false|none|Indicates whether the user's properties could be modified by the Nexus Repository Manager. When false only roles are considered during update.|
|» roles|[string]|false|none|The roles which the user has been assigned within Nexus.|
|» externalRoles|[string]|false|none|The roles which the user has been assigned in an external source, e.g. LDAP group. These cannot be changed within the Nexus Repository Manager.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|locked|
|status|disabled|
|status|changepassword|

<aside class="success">
This operation does not require authentication
</aside>

## createUser

<a id="opIdcreateUser"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/security/users \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/users");
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

r = requests.post('/service/rest/v1/security/users', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "userId": "string",
  "firstName": "string",
  "lastName": "string",
  "emailAddress": "string",
  "password": "string",
  "status": "active",
  "roles": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/users',
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

`POST /v1/security/users`

*Create a new user in the default source.*

> Body parameter

```json
{
  "userId": "string",
  "firstName": "string",
  "lastName": "string",
  "emailAddress": "string",
  "password": "string",
  "status": "active",
  "roles": [
    "string"
  ]
}
```

<h3 id="createuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiCreateUser](#schemaapicreateuser)|false|A representation of the user to create.|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "firstName": "string",
  "lastName": "string",
  "emailAddress": "string",
  "source": "string",
  "status": "active",
  "readOnly": true,
  "roles": [
    "string"
  ],
  "externalRoles": [
    "string"
  ]
}
```

<h3 id="createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ApiUser](#schemaapiuser)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Password was not supplied in the body of the request|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|

<aside class="success">
This operation does not require authentication
</aside>

## reset

<a id="opIdreset"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/security/users/{userId}/{realm}/user-token-reset

```

```java
URL obj = new URL("/service/rest/v1/security/users/{userId}/{realm}/user-token-reset");
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

r = requests.delete('/service/rest/v1/security/users/{userId}/{realm}/user-token-reset')

print(r.json())

```

```javascript

fetch('/service/rest/v1/security/users/{userId}/{realm}/user-token-reset',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/security/users/{userId}/{realm}/user-token-reset`

*Reset the user token for the given user.*

Resetting the user token will invalidate the current token and force a new token to be created the next time it is accessed.

<h3 id="reset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The userId of the user to reset the token for|
|realm|path|string|true|The realm of the user to reset the token for|

<h3 id="reset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|User token successfully reset|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|User tokens are not enabled|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to reset user token|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|User not found|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Invalid realm|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-security-management-jwt">Security management: JWT</h1>

## resetSecret

<a id="opIdresetSecret"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/security/jwt

```

```java
URL obj = new URL("/service/rest/v1/security/jwt");
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

r = requests.put('/service/rest/v1/security/jwt')

print(r.json())

```

```javascript

fetch('/service/rest/v1/security/jwt',
{
  method: 'PUT'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /v1/security/jwt`

*Reset JWT secret (note that session will be expired for the all logged-in users)*

<h3 id="resetsecret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-security-management-privileges">Security management: privileges</h1>

## getPrivileges

<a id="opIdgetPrivileges"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/privileges \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/privileges");
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

r = requests.get('/service/rest/v1/security/privileges', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/privileges',
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

`GET /v1/security/privileges`

*Retrieve a list of privileges.*

> Example responses

> 200 Response

```json
[
  {
    "type": "string",
    "name": "string",
    "description": "string",
    "readOnly": true
  }
]
```

<h3 id="getprivileges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|

<h3 id="getprivileges-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiPrivilege](#schemaapiprivilege)]|false|none|none|
|» type|string|false|none|The type of privilege, each type covers different portions of the system. External values supplied to this will be ignored by the system.|
|» name|string|false|none|The name of the privilege.  This value cannot be changed.|
|» description|string|false|none|none|
|» readOnly|boolean|false|none|Indicates whether the privilege can be changed. External values supplied to this will be ignored by the system.|

<aside class="success">
This operation does not require authentication
</aside>

## getPrivilege

<a id="opIdgetPrivilege"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/privileges/{privilegeName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/privileges/{privilegeName}");
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

r = requests.get('/service/rest/v1/security/privileges/{privilegeName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/privileges/{privilegeName}',
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

`GET /v1/security/privileges/{privilegeName}`

*Retrieve a privilege by name.*

<h3 id="getprivilege-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|privilegeName|path|string|true|The name of the privilege to retrieve.|

> Example responses

> 200 Response

```json
{
  "type": "string",
  "name": "string",
  "description": "string",
  "readOnly": true
}
```

<h3 id="getprivilege-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ApiPrivilege](#schemaapiprivilege)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Privilege not found in the system.|None|

<aside class="success">
This operation does not require authentication
</aside>

## deletePrivilege

<a id="opIddeletePrivilege"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/security/privileges/{privilegeName}

```

```java
URL obj = new URL("/service/rest/v1/security/privileges/{privilegeName}");
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

r = requests.delete('/service/rest/v1/security/privileges/{privilegeName}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/security/privileges/{privilegeName}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/security/privileges/{privilegeName}`

*Delete a privilege by name.*

<h3 id="deleteprivilege-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|privilegeName|path|string|true|The name of the privilege to delete.|

<h3 id="deleteprivilege-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The privilege is internal and may not be altered.|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Privilege not found in the system.|None|

<aside class="success">
This operation does not require authentication
</aside>

## createPrivilege

<a id="opIdcreatePrivilege"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/security/privileges/wildcard \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/privileges/wildcard");
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

r = requests.post('/service/rest/v1/security/privileges/wildcard', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "pattern": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/privileges/wildcard',
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

`POST /v1/security/privileges/wildcard`

*Create a wildcard type privilege.*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "pattern": "string"
}
```

<h3 id="createprivilege-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiPrivilegeWildcardRequest](#schemaapiprivilegewildcardrequest)|false|The privilege to create.|

<h3 id="createprivilege-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Privilege object not configured properly.|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|

<aside class="success">
This operation does not require authentication
</aside>

## createPrivilege_1

<a id="opIdcreatePrivilege_1"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/security/privileges/application \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/privileges/application");
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

r = requests.post('/service/rest/v1/security/privileges/application', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "domain": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/privileges/application',
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

`POST /v1/security/privileges/application`

*Create an application type privilege.*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "domain": "string"
}
```

<h3 id="createprivilege_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiPrivilegeApplicationRequest](#schemaapiprivilegeapplicationrequest)|false|The privilege to create.|

<h3 id="createprivilege_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Privilege object not configured properly.|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|

<aside class="success">
This operation does not require authentication
</aside>

## updatePrivilege

<a id="opIdupdatePrivilege"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/security/privileges/wildcard/{privilegeName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/privileges/wildcard/{privilegeName}");
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

r = requests.put('/service/rest/v1/security/privileges/wildcard/{privilegeName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "pattern": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/privileges/wildcard/{privilegeName}',
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

`PUT /v1/security/privileges/wildcard/{privilegeName}`

*Update a wildcard type privilege.*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "pattern": "string"
}
```

<h3 id="updateprivilege-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|privilegeName|path|string|true|The name of the privilege to update.|
|body|body|[ApiPrivilegeWildcardRequest](#schemaapiprivilegewildcardrequest)|false|The privilege to update.|

<h3 id="updateprivilege-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Privilege object not configured properly.|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Privilege not found in the system.|None|

<aside class="success">
This operation does not require authentication
</aside>

## updatePrivilege_1

<a id="opIdupdatePrivilege_1"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/security/privileges/application/{privilegeName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/privileges/application/{privilegeName}");
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

r = requests.put('/service/rest/v1/security/privileges/application/{privilegeName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "domain": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/privileges/application/{privilegeName}',
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

`PUT /v1/security/privileges/application/{privilegeName}`

*Update an application type privilege.*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "domain": "string"
}
```

<h3 id="updateprivilege_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|privilegeName|path|string|true|The name of the privilege to update.|
|body|body|[ApiPrivilegeApplicationRequest](#schemaapiprivilegeapplicationrequest)|false|The privilege to update.|

<h3 id="updateprivilege_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Privilege object not configured properly.|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Privilege not found in the system.|None|

<aside class="success">
This operation does not require authentication
</aside>

## createPrivilege_2

<a id="opIdcreatePrivilege_2"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/security/privileges/repository-content-selector \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/privileges/repository-content-selector");
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

r = requests.post('/service/rest/v1/security/privileges/repository-content-selector', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "format": "string",
  "repository": "string",
  "contentSelector": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/privileges/repository-content-selector',
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

`POST /v1/security/privileges/repository-content-selector`

*Create a repository content selector type privilege.*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "format": "string",
  "repository": "string",
  "contentSelector": "string"
}
```

<h3 id="createprivilege_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiPrivilegeRepositoryContentSelectorRequest](#schemaapiprivilegerepositorycontentselectorrequest)|false|The privilege to create.|

<h3 id="createprivilege_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Privilege object not configured properly.|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|

<aside class="success">
This operation does not require authentication
</aside>

## createPrivilege_3

<a id="opIdcreatePrivilege_3"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/security/privileges/repository-admin \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/privileges/repository-admin");
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

r = requests.post('/service/rest/v1/security/privileges/repository-admin', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "format": "string",
  "repository": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/privileges/repository-admin',
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

`POST /v1/security/privileges/repository-admin`

*Create a repository admin type privilege.*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "format": "string",
  "repository": "string"
}
```

<h3 id="createprivilege_3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiPrivilegeRepositoryAdminRequest](#schemaapiprivilegerepositoryadminrequest)|false|The privilege to create.|

<h3 id="createprivilege_3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Privilege object not configured properly.|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|

<aside class="success">
This operation does not require authentication
</aside>

## createPrivilege_4

<a id="opIdcreatePrivilege_4"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/security/privileges/repository-view \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/privileges/repository-view");
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

r = requests.post('/service/rest/v1/security/privileges/repository-view', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "format": "string",
  "repository": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/privileges/repository-view',
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

`POST /v1/security/privileges/repository-view`

*Create a repository view type privilege.*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "format": "string",
  "repository": "string"
}
```

<h3 id="createprivilege_4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiPrivilegeRepositoryViewRequest](#schemaapiprivilegerepositoryviewrequest)|false|The privilege to create.|

<h3 id="createprivilege_4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Privilege object not configured properly.|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|

<aside class="success">
This operation does not require authentication
</aside>

## updatePrivilege_2

<a id="opIdupdatePrivilege_2"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/security/privileges/repository-view/{privilegeName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/privileges/repository-view/{privilegeName}");
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

r = requests.put('/service/rest/v1/security/privileges/repository-view/{privilegeName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "format": "string",
  "repository": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/privileges/repository-view/{privilegeName}',
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

`PUT /v1/security/privileges/repository-view/{privilegeName}`

*Update a repository view type privilege.*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "format": "string",
  "repository": "string"
}
```

<h3 id="updateprivilege_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|privilegeName|path|string|true|The name of the privilege to update.|
|body|body|[ApiPrivilegeRepositoryViewRequest](#schemaapiprivilegerepositoryviewrequest)|false|The privilege to update.|

<h3 id="updateprivilege_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Privilege object not configured properly.|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Privilege not found in the system.|None|

<aside class="success">
This operation does not require authentication
</aside>

## updatePrivilege_3

<a id="opIdupdatePrivilege_3"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/security/privileges/repository-content-selector/{privilegeName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/privileges/repository-content-selector/{privilegeName}");
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

r = requests.put('/service/rest/v1/security/privileges/repository-content-selector/{privilegeName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "format": "string",
  "repository": "string",
  "contentSelector": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/privileges/repository-content-selector/{privilegeName}',
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

`PUT /v1/security/privileges/repository-content-selector/{privilegeName}`

*Update a repository content selector type privilege.*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "format": "string",
  "repository": "string",
  "contentSelector": "string"
}
```

<h3 id="updateprivilege_3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|privilegeName|path|string|true|The name of the privilege to update.|
|body|body|[ApiPrivilegeRepositoryContentSelectorRequest](#schemaapiprivilegerepositorycontentselectorrequest)|false|The privilege to update.|

<h3 id="updateprivilege_3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Privilege object not configured properly.|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Privilege not found in the system.|None|

<aside class="success">
This operation does not require authentication
</aside>

## updatePrivilege_4

<a id="opIdupdatePrivilege_4"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/security/privileges/repository-admin/{privilegeName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/privileges/repository-admin/{privilegeName}");
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

r = requests.put('/service/rest/v1/security/privileges/repository-admin/{privilegeName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "format": "string",
  "repository": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/privileges/repository-admin/{privilegeName}',
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

`PUT /v1/security/privileges/repository-admin/{privilegeName}`

*Update a repository admin type privilege.*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "format": "string",
  "repository": "string"
}
```

<h3 id="updateprivilege_4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|privilegeName|path|string|true|The name of the privilege to update.|
|body|body|[ApiPrivilegeRepositoryAdminRequest](#schemaapiprivilegerepositoryadminrequest)|false|The privilege to update.|

<h3 id="updateprivilege_4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Privilege object not configured properly.|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Privilege not found in the system.|None|

<aside class="success">
This operation does not require authentication
</aside>

## createPrivilege_5

<a id="opIdcreatePrivilege_5"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/security/privileges/script \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/privileges/script");
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

r = requests.post('/service/rest/v1/security/privileges/script', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "scriptName": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/privileges/script',
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

`POST /v1/security/privileges/script`

*Create a script type privilege.*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "scriptName": "string"
}
```

<h3 id="createprivilege_5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiPrivilegeScriptRequest](#schemaapiprivilegescriptrequest)|false|The privilege to create.|

<h3 id="createprivilege_5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Privilege object not configured properly.|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|

<aside class="success">
This operation does not require authentication
</aside>

## updatePrivilege_5

<a id="opIdupdatePrivilege_5"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/security/privileges/script/{privilegeName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/privileges/script/{privilegeName}");
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

r = requests.put('/service/rest/v1/security/privileges/script/{privilegeName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "scriptName": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/privileges/script/{privilegeName}',
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

`PUT /v1/security/privileges/script/{privilegeName}`

*Update a script type privilege.*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "scriptName": "string"
}
```

<h3 id="updateprivilege_5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|privilegeName|path|string|true|The name of the privilege to update.|
|body|body|[ApiPrivilegeScriptRequest](#schemaapiprivilegescriptrequest)|false|The privilege to update.|

<h3 id="updateprivilege_5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Privilege object not configured properly.|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The user does not have permission to perform the operation.|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Privilege not found in the system.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-security-management-realms">Security management: realms</h1>

## getRealms

<a id="opIdgetRealms"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/realms/available \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/realms/available");
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

r = requests.get('/service/rest/v1/security/realms/available', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/realms/available',
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

`GET /v1/security/realms/available`

*List the available realms*

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="getrealms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getrealms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RealmApiXO](#schemarealmapixo)]|false|none|none|
|» id|string|false|none|none|
|» name|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## getActiveRealms

<a id="opIdgetActiveRealms"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/realms/active \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/realms/active");
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

r = requests.get('/service/rest/v1/security/realms/active', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/realms/active',
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

`GET /v1/security/realms/active`

*List the active realm IDs in order*

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getactiverealms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getactiverealms-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## setActiveRealms

<a id="opIdsetActiveRealms"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/security/realms/active \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/realms/active");
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

r = requests.put('/service/rest/v1/security/realms/active', headers = headers)

print(r.json())

```

```javascript
const inputBody = '[
  "string"
]';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/realms/active',
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

`PUT /v1/security/realms/active`

*Set the active security realms in the order they should be used*

> Body parameter

```json
[
  "string"
]
```

<h3 id="setactiverealms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|array[string]|false|The realm IDs|

<h3 id="setactiverealms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-security-management-roles">Security management: roles</h1>

## getRoles

<a id="opIdgetRoles"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/roles \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/roles");
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

r = requests.get('/service/rest/v1/security/roles', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/roles',
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

`GET /v1/security/roles`

*List roles*

<h3 id="getroles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|query|string|false|The id of the user source to filter the roles by, if supplied. Otherwise roles from all user sources will be returned.|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "source": "string",
    "name": "string",
    "description": "string",
    "readOnly": true,
    "privileges": [
      "string"
    ],
    "roles": [
      "string"
    ]
  }
]
```

<h3 id="getroles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The specified source does not exist|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to read roles|None|

<h3 id="getroles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoleXOResponse](#schemarolexoresponse)]|false|none|none|
|» id|string|false|none|The id of the role.|
|» source|string|false|none|The user source which is the origin of this role.|
|» name|string|false|none|The name of the role.|
|» description|string|false|none|The description of this role.|
|» readOnly|boolean|false|none|Indicates whether the role can be changed. The system will ignore any supplied external values.|
|» privileges|[string]|false|none|The list of privileges assigned to this role.|
|» roles|[string]|false|none|The list of roles assigned to this role.|

<aside class="success">
This operation does not require authentication
</aside>

## create

<a id="opIdcreate"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/security/roles \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/roles");
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

r = requests.post('/service/rest/v1/security/roles', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "id": "string",
  "name": "string",
  "description": "string",
  "privileges": [
    "string"
  ],
  "roles": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/roles',
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

`POST /v1/security/roles`

*Create role*

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "privileges": [
    "string"
  ],
  "roles": [
    "string"
  ]
}
```

<h3 id="create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RoleXORequest](#schemarolexorequest)|true|A role configuration|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "source": "string",
  "name": "string",
  "description": "string",
  "readOnly": true,
  "privileges": [
    "string"
  ],
  "roles": [
    "string"
  ]
}
```

<h3 id="create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[RoleXOResponse](#schemarolexoresponse)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to create role|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRole

<a id="opIdgetRole"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/roles/{id} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/roles/{id}");
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

r = requests.get('/service/rest/v1/security/roles/{id}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/roles/{id}',
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

`GET /v1/security/roles/{id}`

*Get role*

<h3 id="getrole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|query|string|false|The id of the user source to filter the roles by. Available sources can be fetched using the 'User Sources' endpoint.|
|id|path|string|true|The id of the role to get|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "source": "string",
  "name": "string",
  "description": "string",
  "readOnly": true,
  "privileges": [
    "string"
  ],
  "roles": [
    "string"
  ]
}
```

<h3 id="getrole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[RoleXOResponse](#schemarolexoresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The specified source does not exist|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to read roles|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Role not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## update_1

<a id="opIdupdate_1"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/security/roles/{id} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/roles/{id}");
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

r = requests.put('/service/rest/v1/security/roles/{id}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "id": "string",
  "name": "string",
  "description": "string",
  "privileges": [
    "string"
  ],
  "roles": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/roles/{id}',
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

`PUT /v1/security/roles/{id}`

*Update role*

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "privileges": [
    "string"
  ],
  "roles": [
    "string"
  ]
}
```

<h3 id="update_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the role to update|
|body|body|[RoleXORequest](#schemarolexorequest)|true|A role configuration|

<h3 id="update_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to update role|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Role not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete

<a id="opIddelete"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/security/roles/{id}

```

```java
URL obj = new URL("/service/rest/v1/security/roles/{id}");
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

r = requests.delete('/service/rest/v1/security/roles/{id}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/security/roles/{id}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/security/roles/{id}`

*Delete role*

<h3 id="delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the role to delete|

<h3 id="delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to delete role|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Role not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-tasks">Tasks</h1>

## getTasks

<a id="opIdgetTasks"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/tasks \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/tasks");
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

r = requests.get('/service/rest/v1/tasks', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/tasks',
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

`GET /v1/tasks`

*List tasks*

<h3 id="gettasks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Type of the tasks to get|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "string",
      "name": "string",
      "type": "string",
      "message": "string",
      "currentState": "string",
      "lastRunResult": "string",
      "nextRun": "2019-08-24T14:15:22Z",
      "lastRun": "2019-08-24T14:15:22Z"
    }
  ],
  "continuationToken": "string"
}
```

<h3 id="gettasks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[PageTaskXO](#schemapagetaskxo)|

<aside class="success">
This operation does not require authentication
</aside>

## createTask

<a id="opIdcreateTask"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/tasks \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/tasks");
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

r = requests.post('/service/rest/v1/tasks', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "type": "string",
  "name": "string",
  "enabled": true,
  "alertEmail": "string",
  "notificationCondition": "FAILURE",
  "frequency": {
    "schedule": "string",
    "startDate": 0,
    "timeZoneOffset": "-05:00",
    "recurringDays": [
      0
    ],
    "cronExpression": "0 1 2 * * ?"
  },
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/tasks',
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

`POST /v1/tasks`

*Create task*

> Body parameter

```json
{
  "type": "string",
  "name": "string",
  "enabled": true,
  "alertEmail": "string",
  "notificationCondition": "FAILURE",
  "frequency": {
    "schedule": "string",
    "startDate": 0,
    "timeZoneOffset": "-05:00",
    "recurringDays": [
      0
    ],
    "cronExpression": "0 1 2 * * ?"
  },
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createtask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TaskTemplateXO](#schematasktemplatexo)|false|none|

<h3 id="createtask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## getTaskById

<a id="opIdgetTaskById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/tasks/{id} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/tasks/{id}");
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

r = requests.get('/service/rest/v1/tasks/{id}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/tasks/{id}',
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

`GET /v1/tasks/{id}`

*Get a single task by id*

<h3 id="gettaskbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the task to get|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "type": "string",
  "message": "string",
  "currentState": "string",
  "lastRunResult": "string",
  "nextRun": "2019-08-24T14:15:22Z",
  "lastRun": "2019-08-24T14:15:22Z"
}
```

<h3 id="gettaskbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[TaskXO](#schemataskxo)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Task not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteTaskById

<a id="opIddeleteTaskById"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/tasks/{id}

```

```java
URL obj = new URL("/service/rest/v1/tasks/{id}");
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

r = requests.delete('/service/rest/v1/tasks/{id}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/tasks/{id}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/tasks/{id}`

*Delete task by id*

<h3 id="deletetaskbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="deletetaskbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## run

<a id="opIdrun"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/tasks/{id}/run

```

```java
URL obj = new URL("/service/rest/v1/tasks/{id}/run");
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

r = requests.post('/service/rest/v1/tasks/{id}/run')

print(r.json())

```

```javascript

fetch('/service/rest/v1/tasks/{id}/run',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /v1/tasks/{id}/run`

*Run task*

<h3 id="run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the task to run|

<h3 id="run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Task was run|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Task not found|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Task is disabled|None|

<aside class="success">
This operation does not require authentication
</aside>

## stop

<a id="opIdstop"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/tasks/{id}/stop

```

```java
URL obj = new URL("/service/rest/v1/tasks/{id}/stop");
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

r = requests.post('/service/rest/v1/tasks/{id}/stop')

print(r.json())

```

```javascript

fetch('/service/rest/v1/tasks/{id}/stop',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /v1/tasks/{id}/stop`

*Stop task*

<h3 id="stop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the task to stop|

<h3 id="stop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Task was stopped|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Task not found|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Unable to stop task|None|

<aside class="success">
This operation does not require authentication
</aside>

## getTaskTemplates

<a id="opIdgetTaskTemplates"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/tasks/templates \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/tasks/templates");
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

r = requests.get('/service/rest/v1/tasks/templates', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/tasks/templates',
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

`GET /v1/tasks/templates`

*List tasks of template tasks. This is the base to create new tasks*

> Example responses

> 200 Response

```json
[
  {
    "type": "string",
    "name": "string",
    "enabled": true,
    "alertEmail": "string",
    "notificationCondition": "FAILURE",
    "frequency": {
      "schedule": "string",
      "startDate": 0,
      "timeZoneOffset": "-05:00",
      "recurringDays": [
        0
      ],
      "cronExpression": "0 1 2 * * ?"
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  }
]
```

<h3 id="gettasktemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="gettasktemplates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TaskTemplateXO](#schematasktemplatexo)]|false|none|none|
|» type|string|true|none|The type of task to be created.|
|» name|string|true|none|The name of the task template.|
|» enabled|boolean|true|none|Indicates if the task would be enabled.|
|» alertEmail|string|false|none|e-mail for task notifications.|
|» notificationCondition|string|true|none|Condition required to notify a task execution.|
|» frequency|[FrequencyXO](#schemafrequencyxo)|true|none|none|
|»» schedule|string|true|none|Type of schedule ("manual", "once", "hourly", "daily", "weekly", "monthly", "cron")|
|»» startDate|integer(int64)|false|none|Start date of the task represented in unix timestamp. Does not apply for "manual" schedule.|
|»» timeZoneOffset|string|false|none|The offset time zone of the client. Example:|
|»» recurringDays|[integer]|false|none|Array with the number of the days the task must run. For "weekly" schedule allowed values, 1 to 7. For "monthly" schedule allowed values, 1 to 31.|
|»» cronExpression|string|false|none|Cron expression for the task. Only applies for for "cron" schedule.|
|» properties|object|false|none|Additional properties for the task|
|»» **additionalProperties**|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|notificationCondition|FAILURE|
|notificationCondition|SUCCESS_FAILURE|

<aside class="success">
This operation does not require authentication
</aside>

## getTaskTemplate

<a id="opIdgetTaskTemplate"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/tasks/templates/{typeId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/tasks/templates/{typeId}");
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

r = requests.get('/service/rest/v1/tasks/templates/{typeId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/tasks/templates/{typeId}',
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

`GET /v1/tasks/templates/{typeId}`

*Get task template by type. This is the base to create new tasks*

<h3 id="gettasktemplate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|typeId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "type": "string",
  "name": "string",
  "enabled": true,
  "alertEmail": "string",
  "notificationCondition": "FAILURE",
  "frequency": {
    "schedule": "string",
    "startDate": 0,
    "timeZoneOffset": "-05:00",
    "recurringDays": [
      0
    ],
    "cronExpression": "0 1 2 * * ?"
  },
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="gettasktemplate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[TaskTemplateXO](#schematasktemplatexo)|

<aside class="success">
This operation does not require authentication
</aside>

## updateTask

<a id="opIdupdateTask"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/tasks/{taskId} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/tasks/{taskId}");
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

r = requests.put('/service/rest/v1/tasks/{taskId}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "type": "string",
  "name": "string",
  "enabled": true,
  "alertEmail": "string",
  "notificationCondition": "FAILURE",
  "frequency": {
    "schedule": "string",
    "startDate": 0,
    "timeZoneOffset": "-05:00",
    "recurringDays": [
      0
    ],
    "cronExpression": "0 1 2 * * ?"
  },
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/tasks/{taskId}',
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

`PUT /v1/tasks/{taskId}`

*Update an existing task*

> Body parameter

```json
{
  "type": "string",
  "name": "string",
  "enabled": true,
  "alertEmail": "string",
  "notificationCondition": "FAILURE",
  "frequency": {
    "schedule": "string",
    "startDate": 0,
    "timeZoneOffset": "-05:00",
    "recurringDays": [
      0
    ],
    "cronExpression": "0 1 2 * * ?"
  },
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="updatetask-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|taskId|path|string|true|none|
|body|body|[TaskTemplateXO](#schematasktemplatexo)|false|none|

<h3 id="updatetask-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-blob-store">Blob store</h1>

## deleteBlobStore

<a id="opIddeleteBlobStore"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/blobstores/{name}

```

```java
URL obj = new URL("/service/rest/v1/blobstores/{name}");
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

r = requests.delete('/service/rest/v1/blobstores/{name}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/blobstores/{name}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/blobstores/{name}`

*Delete a blob store by name*

<h3 id="deleteblobstore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the blob store to delete|

<h3 id="deleteblobstore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## quotaStatus

<a id="opIdquotaStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/blobstores/{name}/quota-status \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/{name}/quota-status");
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

r = requests.get('/service/rest/v1/blobstores/{name}/quota-status', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/blobstores/{name}/quota-status',
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

`GET /v1/blobstores/{name}/quota-status`

*Get quota status for a given blob store*

<h3 id="quotastatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "isViolation": true,
  "message": "string",
  "blobStoreName": "string"
}
```

<h3 id="quotastatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[BlobStoreQuotaResultXO](#schemablobstorequotaresultxo)|

<aside class="success">
This operation does not require authentication
</aside>

## listBlobStores

<a id="opIdlistBlobStores"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/blobstores \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores");
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

r = requests.get('/service/rest/v1/blobstores', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/blobstores',
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

`GET /v1/blobstores`

*List the blob stores*

> Example responses

> 200 Response

```json
[
  {
    "softQuota": {
      "type": "spaceRemainingQuota",
      "limit": 0
    },
    "name": "string",
    "type": "string",
    "unavailable": true,
    "blobCount": 0,
    "totalSizeInBytes": 0,
    "availableSpaceInBytes": 0
  }
]
```

<h3 id="listblobstores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="listblobstores-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GenericBlobStoreApiResponse](#schemagenericblobstoreapiresponse)]|false|none|none|
|» softQuota|[BlobStoreApiSoftQuota](#schemablobstoreapisoftquota)|false|none|none|
|»» type|string|false|none|The type to use such as spaceRemainingQuota, or spaceUsedQuota|
|»» limit|integer(int64)|false|none|The limit in MB.|
|» name|string|false|none|none|
|» type|string|false|none|none|
|» unavailable|boolean|false|none|none|
|» blobCount|integer(int64)|false|none|none|
|» totalSizeInBytes|integer(int64)|false|none|none|
|» availableSpaceInBytes|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|spaceRemainingQuota|
|type|spaceUsedQuota|

<aside class="success">
This operation does not require authentication
</aside>

## createFileBlobStore

<a id="opIdcreateFileBlobStore"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/blobstores/file \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/file");
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

r = requests.post('/service/rest/v1/blobstores/file', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "path": "string",
  "name": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/blobstores/file',
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

`POST /v1/blobstores/file`

*Create a file blob store*

> Body parameter

```json
{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "path": "string",
  "name": "string"
}
```

<h3 id="createfileblobstore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FileBlobStoreApiCreateRequest](#schemafileblobstoreapicreaterequest)|false|none|

<h3 id="createfileblobstore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Success|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getFileBlobStoreConfiguration

<a id="opIdgetFileBlobStoreConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/blobstores/file/{name} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/file/{name}");
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

r = requests.get('/service/rest/v1/blobstores/file/{name}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/blobstores/file/{name}',
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

`GET /v1/blobstores/file/{name}`

*Get a file blob store configuration by name*

<h3 id="getfileblobstoreconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the file blob store to read|

> Example responses

> 200 Response

```json
{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "path": "string"
}
```

<h3 id="getfileblobstoreconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[FileBlobStoreApiModel](#schemafileblobstoreapimodel)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Blob store not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateFileBlobStore

<a id="opIdupdateFileBlobStore"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/blobstores/file/{name} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/file/{name}");
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

r = requests.put('/service/rest/v1/blobstores/file/{name}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "path": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/blobstores/file/{name}',
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

`PUT /v1/blobstores/file/{name}`

*Update a file blob store configuration by name*

> Body parameter

```json
{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "path": "string"
}
```

<h3 id="updatefileblobstore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the file blob store to update|
|body|body|[FileBlobStoreApiUpdateRequest](#schemafileblobstoreapiupdaterequest)|false|none|

<h3 id="updatefileblobstore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Success|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Blob store not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## getBlobStore

<a id="opIdgetBlobStore"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/blobstores/s3/{name} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/s3/{name}");
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

r = requests.get('/service/rest/v1/blobstores/s3/{name}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/blobstores/s3/{name}',
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

`GET /v1/blobstores/s3/{name}`

*Get a S3 blob store configuration by name*

<h3 id="getblobstore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the blob store configuration to fetch|

> Example responses

> 200 Response

```json
{
  "name": "s3",
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "bucket": {
      "region": "DEFAULT",
      "name": "string",
      "prefix": "string",
      "expiration": 3
    },
    "encryption": {
      "encryptionType": "s3ManagedEncryption",
      "encryptionKey": "string"
    },
    "failoverBuckets": [
      {
        "region": "string",
        "bucketName": "string"
      }
    ],
    "activeRegion": "string",
    "bucketSecurity": {
      "accessKeyId": "string",
      "secretAccessKey": "string",
      "role": "string",
      "sessionToken": "string"
    },
    "advancedBucketConnection": {
      "endpoint": "string",
      "signerType": "string",
      "forcePathStyle": true,
      "maxConnectionPoolSize": 0
    }
  },
  "type": "S3"
}
```

<h3 id="getblobstore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[S3BlobStoreApiModel](#schemas3blobstoreapimodel)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Specified S3 blob store doesn't exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateBlobStore

<a id="opIdupdateBlobStore"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/blobstores/s3/{name} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/s3/{name}");
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

r = requests.put('/service/rest/v1/blobstores/s3/{name}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "bucket": {},
    "encryption": {},
    "failoverBuckets": [
      {}
    ],
    "bucketSecurity": {
      "secretAccessKey": "string"
    },
    "advancedBucketConnection": {}
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/blobstores/s3/{name}',
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

`PUT /v1/blobstores/s3/{name}`

*Update an S3 blob store configuration by name*

> Body parameter

```json
{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "bucket": {},
    "encryption": {},
    "failoverBuckets": [
      {}
    ],
    "bucketSecurity": {
      "secretAccessKey": "string"
    },
    "advancedBucketConnection": {}
  }
}
```

<h3 id="updateblobstore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the blob store to update|
|body|body|[S3BlobStoreApiModel](#schemas3blobstoreapimodel)|false|none|

<h3 id="updateblobstore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|S3 blob store updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Specified S3 blob store doesn't exist|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createBlobStore

<a id="opIdcreateBlobStore"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/blobstores/s3 \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/s3");
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

r = requests.post('/service/rest/v1/blobstores/s3', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "bucket": {},
    "encryption": {},
    "failoverBuckets": [
      {}
    ],
    "bucketSecurity": {
      "secretAccessKey": "string"
    },
    "advancedBucketConnection": {}
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/blobstores/s3',
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

`POST /v1/blobstores/s3`

*Create an S3 blob store*

> Body parameter

```json
{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "bucket": {},
    "encryption": {},
    "failoverBuckets": [
      {}
    ],
    "bucketSecurity": {
      "secretAccessKey": "string"
    },
    "advancedBucketConnection": {}
  }
}
```

<h3 id="createblobstore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[S3BlobStoreApiModel](#schemas3blobstoreapimodel)|false|none|

<h3 id="createblobstore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|S3 blob store created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getBlobStore_1

<a id="opIdgetBlobStore_1"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/blobstores/azure/{name} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/azure/{name}");
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

r = requests.get('/service/rest/v1/blobstores/azure/{name}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/blobstores/azure/{name}',
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

`GET /v1/blobstores/azure/{name}`

*Get an Azure blob store configuration by name*

<h3 id="getblobstore_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the blob store configuration to fetch|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "accountName": "string",
    "containerName": "string",
    "authentication": {
      "authenticationMethod": "ACCOUNTKEY",
      "accountKey": "string"
    }
  }
}
```

<h3 id="getblobstore_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[AzureBlobStoreApiModel](#schemaazureblobstoreapimodel)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Specified Azure blob store doesn't exist|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateBlobStore_1

<a id="opIdupdateBlobStore_1"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/blobstores/azure/{name} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/azure/{name}");
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

r = requests.put('/service/rest/v1/blobstores/azure/{name}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "accountName": "string",
    "containerName": "string",
    "authentication": {
      "authenticationMethod": "ACCOUNTKEY",
      "accountKey": "string"
    }
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/blobstores/azure/{name}',
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

`PUT /v1/blobstores/azure/{name}`

*Update an Azure blob store configuration by name*

> Body parameter

```json
{
  "name": "string",
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "accountName": "string",
    "containerName": "string",
    "authentication": {
      "authenticationMethod": "ACCOUNTKEY",
      "accountKey": "string"
    }
  }
}
```

<h3 id="updateblobstore_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the blob store to update|
|body|body|[AzureBlobStoreApiModel](#schemaazureblobstoreapimodel)|false|none|

<h3 id="updateblobstore_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Azure blob store updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Specified Azure blob store doesn't exist|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createBlobStore_1

<a id="opIdcreateBlobStore_1"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/blobstores/azure \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/azure");
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

r = requests.post('/service/rest/v1/blobstores/azure', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "accountName": "string",
    "containerName": "string",
    "authentication": {
      "authenticationMethod": "ACCOUNTKEY",
      "accountKey": "string"
    }
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/blobstores/azure',
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

`POST /v1/blobstores/azure`

*Create an Azure blob store*

> Body parameter

```json
{
  "name": "string",
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "accountName": "string",
    "containerName": "string",
    "authentication": {
      "authenticationMethod": "ACCOUNTKEY",
      "accountKey": "string"
    }
  }
}
```

<h3 id="createblobstore_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AzureBlobStoreApiModel](#schemaazureblobstoreapimodel)|false|none|

<h3 id="createblobstore_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Azure blob store created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createGroupBlobStore

<a id="opIdcreateGroupBlobStore"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/blobstores/group \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/group");
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

r = requests.post('/service/rest/v1/blobstores/group', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "members": [
    "string"
  ],
  "fillPolicy": "roundRobin",
  "name": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/blobstores/group',
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

`POST /v1/blobstores/group`

*Create a group blob store*

> Body parameter

```json
{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "members": [
    "string"
  ],
  "fillPolicy": "roundRobin",
  "name": "string"
}
```

<h3 id="creategroupblobstore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GroupBlobStoreApiCreateRequest](#schemagroupblobstoreapicreaterequest)|false|none|

<h3 id="creategroupblobstore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Success|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getGroupBlobStoreConfiguration

<a id="opIdgetGroupBlobStoreConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/blobstores/group/{name} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/group/{name}");
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

r = requests.get('/service/rest/v1/blobstores/group/{name}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/blobstores/group/{name}',
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

`GET /v1/blobstores/group/{name}`

*Get a group blob store configuration by name*

<h3 id="getgroupblobstoreconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the group blob store|

> Example responses

> 200 Response

```json
{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "members": [
    "string"
  ],
  "fillPolicy": "roundRobin"
}
```

<h3 id="getgroupblobstoreconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GroupBlobStoreApiModel](#schemagroupblobstoreapimodel)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Blob store not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateGroupBlobStore

<a id="opIdupdateGroupBlobStore"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/blobstores/group/{name} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/group/{name}");
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

r = requests.put('/service/rest/v1/blobstores/group/{name}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "members": [
    "string"
  ],
  "fillPolicy": "roundRobin"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/blobstores/group/{name}',
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

`PUT /v1/blobstores/group/{name}`

*Update a group blob store configuration by name*

> Body parameter

```json
{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "members": [
    "string"
  ],
  "fillPolicy": "roundRobin"
}
```

<h3 id="updategroupblobstore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the blob store to update|
|body|body|[GroupBlobStoreApiUpdateRequest](#schemagroupblobstoreapiupdaterequest)|false|none|

<h3 id="updategroupblobstore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Success|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Blob store not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## convertBlobStoreToGroup

<a id="opIdconvertBlobStoreToGroup"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/blobstores/group/convert/{name}/{newNameForOriginal} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/group/convert/{name}/{newNameForOriginal}");
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

r = requests.post('/service/rest/v1/blobstores/group/convert/{name}/{newNameForOriginal}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/blobstores/group/convert/{name}/{newNameForOriginal}',
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

`POST /v1/blobstores/group/convert/{name}/{newNameForOriginal}`

*Convert a blob store to a group blob store*

<h3 id="convertblobstoretogroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the group blob store|
|newNameForOriginal|path|string|true|A new name to the original blob store|

> Example responses

> 200 Response

```json
{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "members": [
    "string"
  ],
  "fillPolicy": "roundRobin"
}
```

<h3 id="convertblobstoretogroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GroupBlobStoreApiModel](#schemagroupblobstoreapimodel)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Blob store not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## getBlobStore_2

<a id="opIdgetBlobStore_2"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/blobstores/google/{name} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/google/{name}");
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

r = requests.get('/service/rest/v1/blobstores/google/{name}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/blobstores/google/{name}',
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

`GET /v1/blobstores/google/{name}`

*Get the configuration for a Google Cloud blob store*

<h3 id="getblobstore_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|the name of the blob store|

> Example responses

> 200 Response

```json
{
  "name": "gc_storage",
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "bucket": {
      "name": "string",
      "projectId": "project_123",
      "region": "us-central1",
      "prefix": "string"
    },
    "bucketSecurity": {
      "authenticationMethod": "applicationDefault",
      "accountKey": "string"
    }
  },
  "type": "Google Cloud Storage"
}
```

<h3 id="getblobstore_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Google Cloud blob store configuration|[GoogleCloudBlobstoreApiModel](#schemagooglecloudblobstoreapimodel)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateBlobStore_2

<a id="opIdupdateBlobStore_2"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/blobstores/google/{name} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/google/{name}");
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

r = requests.put('/service/rest/v1/blobstores/google/{name}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "gc_storage",
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "bucket": {
      "name": "string",
      "region": "us-central1"
    },
    "bucketSecurity": {
      "authenticationMethod": "applicationDefault",
      "accountKey": "string"
    }
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/blobstores/google/{name}',
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

`PUT /v1/blobstores/google/{name}`

*Update a Google Cloud blob store*

> Body parameter

```json
{
  "name": "gc_storage",
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "bucket": {
      "name": "string",
      "region": "us-central1"
    },
    "bucketSecurity": {
      "authenticationMethod": "applicationDefault",
      "accountKey": "string"
    }
  }
}
```

<h3 id="updateblobstore_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|the name of the blobstore|
|body|body|[GoogleCloudBlobstoreApiModel](#schemagooglecloudblobstoreapimodel)|false|none|

<h3 id="updateblobstore_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Google Cloud blob store updated|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## createBlobStore_2

<a id="opIdcreateBlobStore_2"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/blobstores/google \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/google");
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

r = requests.post('/service/rest/v1/blobstores/google', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "gc_storage",
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "bucket": {
      "name": "string",
      "region": "us-central1"
    },
    "bucketSecurity": {
      "authenticationMethod": "applicationDefault",
      "accountKey": "string"
    }
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/blobstores/google',
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

`POST /v1/blobstores/google`

*Create a Google Cloud blob store*

> Body parameter

```json
{
  "name": "gc_storage",
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "bucket": {
      "name": "string",
      "region": "us-central1"
    },
    "bucketSecurity": {
      "authenticationMethod": "applicationDefault",
      "accountKey": "string"
    }
  }
}
```

<h3 id="createblobstore_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GoogleCloudBlobstoreApiModel](#schemagooglecloudblobstoreapimodel)|false|none|

<h3 id="createblobstore_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Google Cloud blob store created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRegionsByProjectId

<a id="opIdgetRegionsByProjectId"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/blobstores/google/regions/{projectId} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/blobstores/google/regions/{projectId}");
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

r = requests.get('/service/rest/v1/blobstores/google/regions/{projectId}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/blobstores/google/regions/{projectId}',
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

`GET /v1/blobstores/google/regions/{projectId}`

*Get the project regions by project's id*

<h3 id="getregionsbyprojectid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|path|string|true|projectId|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="getregionsbyprojectid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|List of regions found|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Project not found|None|

<h3 id="getregionsbyprojectid-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-lifecycle">Lifecycle</h1>

## getPhase

<a id="opIdgetPhase"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/lifecycle/phase \
  -H 'Accept: text/plain'

```

```java
URL obj = new URL("/service/rest/v1/lifecycle/phase");
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

r = requests.get('/service/rest/v1/lifecycle/phase', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/service/rest/v1/lifecycle/phase',
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

`GET /v1/lifecycle/phase`

*Get current lifecycle phase*

> Example responses

> 200 Response

```
"string"
```

<h3 id="getphase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|string|

<aside class="success">
This operation does not require authentication
</aside>

## setPhase

<a id="opIdsetPhase"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/lifecycle/phase \
  -H 'Content-Type: text/plain'

```

```java
URL obj = new URL("/service/rest/v1/lifecycle/phase");
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
  'Content-Type': 'text/plain'
}

r = requests.put('/service/rest/v1/lifecycle/phase', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'text/plain'
};

fetch('/service/rest/v1/lifecycle/phase',
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

`PUT /v1/lifecycle/phase`

*Move to new lifecycle phase*

> Body parameter

```
string

```

<h3 id="setphase-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|false|The phase to move to|

<h3 id="setphase-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## bounce

<a id="opIdbounce"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/lifecycle/bounce \
  -H 'Content-Type: text/plain'

```

```java
URL obj = new URL("/service/rest/v1/lifecycle/bounce");
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
  'Content-Type': 'text/plain'
}

r = requests.put('/service/rest/v1/lifecycle/bounce', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'text/plain'
};

fetch('/service/rest/v1/lifecycle/bounce',
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

`PUT /v1/lifecycle/bounce`

*Bounce lifecycle phase*

Re-runs all phases from the given phase to the current phase

> Body parameter

```
string

```

<h3 id="bounce-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|false|The phase to bounce|

<h3 id="bounce-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-system-nodes">System: Nodes</h1>

## getNodeId

<a id="opIdgetNodeId"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/system/node \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/system/node");
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

r = requests.get('/service/rest/v1/system/node', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/system/node',
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

`GET /v1/system/node`

*Get information about this node*

> Example responses

> 200 Response

```json
{
  "nodeId": "string"
}
```

<h3 id="getnodeid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[NodeInformation](#schemanodeinformation)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to update settings|None|

<aside class="success">
This operation does not require authentication
</aside>

## clear

<a id="opIdclear"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/system/node

```

```java
URL obj = new URL("/service/rest/v1/system/node");
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

r = requests.delete('/service/rest/v1/system/node')

print(r.json())

```

```javascript

fetch('/service/rest/v1/system/node',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/system/node`

*Reset the ID for this node. Takes effect after restart and should only be used when cloning an instance*

<h3 id="clear-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to update settings|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSystemInformation

<a id="opIdgetSystemInformation"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/beta/system/information

```

```java
URL obj = new URL("/service/rest/beta/system/information");
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

r = requests.get('/service/rest/beta/system/information')

print(r.json())

```

```javascript

fetch('/service/rest/beta/system/information',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /beta/system/information`

*Get information about all nodes*

<h3 id="getsysteminformation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|System information for all running nodes grouped by nodeID|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to request this data|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-read-only">Read-only</h1>

## forceRelease

<a id="opIdforceRelease"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/read-only/force-release

```

```java
URL obj = new URL("/service/rest/v1/read-only/force-release");
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

r = requests.post('/service/rest/v1/read-only/force-release')

print(r.json())

```

```javascript

fetch('/service/rest/v1/read-only/force-release',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /v1/read-only/force-release`

*Forcibly release read-only and allow changes to embedded OrientDB*

Forcibly release read-only status, including if caused by system tasks. Warning: may result in data loss.

<h3 id="forcerelease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Database is no longer read-only|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Authentication required|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|No change to read-only state|None|

<aside class="success">
This operation does not require authentication
</aside>

## get

<a id="opIdget"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/read-only \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/read-only");
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

r = requests.get('/service/rest/v1/read-only', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/read-only',
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

`GET /v1/read-only`

*Get read-only state*

> Example responses

> 200 Response

```json
{
  "summaryReason": "string",
  "systemInitiated": true,
  "frozen": true
}
```

<h3 id="get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ReadOnlyState](#schemareadonlystate)|

<aside class="success">
This operation does not require authentication
</aside>

## release

<a id="opIdrelease"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/read-only/release

```

```java
URL obj = new URL("/service/rest/v1/read-only/release");
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

r = requests.post('/service/rest/v1/read-only/release')

print(r.json())

```

```javascript

fetch('/service/rest/v1/read-only/release',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /v1/read-only/release`

*Release read-only and allow changes to embedded OrientDB*

Releases administrator-initiated read-only status. Will not release read-only status caused by system tasks.

<h3 id="release-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Database is no longer read-only|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Authentication required|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|No change to read-only state|None|

<aside class="success">
This operation does not require authentication
</aside>

## freeze

<a id="opIdfreeze"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/read-only/freeze

```

```java
URL obj = new URL("/service/rest/v1/read-only/freeze");
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

r = requests.post('/service/rest/v1/read-only/freeze')

print(r.json())

```

```javascript

fetch('/service/rest/v1/read-only/freeze',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /v1/read-only/freeze`

*Prevent changes to embedded OrientDB*

For low-level system maintenance purposes only; do not use if you want users to still be able to download components.

<h3 id="freeze-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Database is now read-only|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Authentication required|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|No change to read-only state|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-security-management-secrets-encryption">Security management: secrets encryption</h1>

## reEncrypt

<a id="opIdreEncrypt"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/secrets/encryption/re-encrypt \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/secrets/encryption/re-encrypt");
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

r = requests.put('/service/rest/v1/secrets/encryption/re-encrypt', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "secretKeyId": "string",
  "notifyEmail": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/secrets/encryption/re-encrypt',
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

`PUT /v1/secrets/encryption/re-encrypt`

*Re-encrypt secrets using the specified key*

Ensure all nodes have access to the key, and they use the same key

> Body parameter

```json
{
  "secretKeyId": "string",
  "notifyEmail": "string"
}
```

<h3 id="reencrypt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReEncryptionRequestApiXO](#schemareencryptionrequestapixo)|false|none|

<h3 id="reencrypt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|[Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)|Re-encrypt task successfully submitted|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request. See the response for more information. Possible causes: The key is not available to all nodes, upgrade needed or empty key id.|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to re-encrypt secrets|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Re-encryption task in progress.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-database-upgrade">Database Upgrade</h1>

## getProgress

<a id="opIdgetProgress"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/clustered/upgrade-database-schema \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/clustered/upgrade-database-schema");
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

r = requests.get('/service/rest/v1/clustered/upgrade-database-schema', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/clustered/upgrade-database-schema',
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

`GET /v1/clustered/upgrade-database-schema`

*Check the progress of a database schema upgrade*

> Example responses

> 200 Response

```json
{
  "message": "string",
  "state": "MIGRATION_NOT_REQUIRED"
}
```

<h3 id="getprogress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|See the response body for database schema upgrade details.|[ApiClusterDatabaseMigrationResultDTO](#schemaapiclusterdatabasemigrationresultdto)|

<aside class="success">
This operation does not require authentication
</aside>

## migrate

<a id="opIdmigrate"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/clustered/upgrade-database-schema

```

```java
URL obj = new URL("/service/rest/v1/clustered/upgrade-database-schema");
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

r = requests.post('/service/rest/v1/clustered/upgrade-database-schema')

print(r.json())

```

```javascript

fetch('/service/rest/v1/clustered/upgrade-database-schema',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /v1/clustered/upgrade-database-schema`

*Begins a database schema upgrade*

<h3 id="migrate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|The responding node was able to start database schema upgrade|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|The cluster is not able to start the database schema upgrade; see the response for details|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|An internal error occurred|None|

<aside class="success">
This operation does not require authentication
</aside>

## clearResult

<a id="opIdclearResult"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/clustered/upgrade-database-schema

```

```java
URL obj = new URL("/service/rest/v1/clustered/upgrade-database-schema");
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

r = requests.delete('/service/rest/v1/clustered/upgrade-database-schema')

print(r.json())

```

```javascript

fetch('/service/rest/v1/clustered/upgrade-database-schema',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/clustered/upgrade-database-schema`

*Clears a stored database schema upgrade success or a recoverable error*

<h3 id="clearresult-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An error was successfully cleared or no errors were stored.|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|An error exists which cannot be cleared. Contact support for assistance.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-security-certificates">Security: certificates</h1>

## retrieveCertificate

<a id="opIdretrieveCertificate"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/ssl?host=string \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/ssl?host=string");
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

r = requests.get('/service/rest/v1/security/ssl', params={
  'host': 'string'
}, headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/ssl?host=string',
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

`GET /v1/security/ssl`

*Helper method to retrieve certificate details from a remote system.*

<h3 id="retrievecertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|host|query|string|true|The remote system's host name|
|port|query|integer(int32)|false|The port on the remote system to connect to|
|protocolHint|query|string|false|An optional hint of the protocol to try for the connection|

> Example responses

> 200 Response

```json
{
  "expiresOn": 0,
  "fingerprint": "string",
  "id": "string",
  "issuedOn": 0,
  "issuerCommonName": "string",
  "issuerOrganization": "string",
  "issuerOrganizationalUnit": "string",
  "pem": "string",
  "serialNumber": "string",
  "subjectCommonName": "string",
  "subjectOrganization": "string",
  "subjectOrganizationalUnit": "string"
}
```

<h3 id="retrievecertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ApiCertificate](#schemaapicertificate)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|A certificate could not be retrieved, see the message for details.|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to retrieve remote certificate.|None|

<aside class="success">
This operation does not require authentication
</aside>

## getTrustStoreCertificates

<a id="opIdgetTrustStoreCertificates"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/ssl/truststore \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/ssl/truststore");
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

r = requests.get('/service/rest/v1/security/ssl/truststore', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/ssl/truststore',
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

`GET /v1/security/ssl/truststore`

*Retrieve a list of certificates added to the trust store.*

> Example responses

> 200 Response

```json
[
  {
    "expiresOn": 0,
    "fingerprint": "string",
    "id": "string",
    "issuedOn": 0,
    "issuerCommonName": "string",
    "issuerOrganization": "string",
    "issuerOrganizationalUnit": "string",
    "pem": "string",
    "serialNumber": "string",
    "subjectCommonName": "string",
    "subjectOrganization": "string",
    "subjectOrganizationalUnit": "string"
  }
]
```

<h3 id="gettruststorecertificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to list certificates in the trust store.|None|

<h3 id="gettruststorecertificates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ApiCertificate](#schemaapicertificate)]|false|none|none|
|» expiresOn|integer(int64)|false|none|none|
|» fingerprint|string|false|none|none|
|» id|string|false|none|none|
|» issuedOn|integer(int64)|false|none|none|
|» issuerCommonName|string|false|none|none|
|» issuerOrganization|string|false|none|none|
|» issuerOrganizationalUnit|string|false|none|none|
|» pem|string|false|none|none|
|» serialNumber|string|false|none|none|
|» subjectCommonName|string|false|none|none|
|» subjectOrganization|string|false|none|none|
|» subjectOrganizationalUnit|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## addCertificate

<a id="opIdaddCertificate"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/security/ssl/truststore \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/ssl/truststore");
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

r = requests.post('/service/rest/v1/security/ssl/truststore', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/ssl/truststore',
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

`POST /v1/security/ssl/truststore`

*Add a certificate to the trust store.*

> Body parameter

```json
"string"
```

<h3 id="addcertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|false|The certificate to add encoded in PEM format|

> Example responses

> 201 Response

```json
{
  "expiresOn": 0,
  "fingerprint": "string",
  "id": "string",
  "issuedOn": 0,
  "issuerCommonName": "string",
  "issuerOrganization": "string",
  "issuerOrganizationalUnit": "string",
  "pem": "string",
  "serialNumber": "string",
  "subjectCommonName": "string",
  "subjectOrganization": "string",
  "subjectOrganizationalUnit": "string"
}
```

<h3 id="addcertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|The certificate was successfully added.|[ApiCertificate](#schemaapicertificate)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to add certificate to the trust store.|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|The certificate already exists in the system.|None|

<aside class="success">
This operation does not require authentication
</aside>

## removeCertificate

<a id="opIdremoveCertificate"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/security/ssl/truststore/{id}

```

```java
URL obj = new URL("/service/rest/v1/security/ssl/truststore/{id}");
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

r = requests.delete('/service/rest/v1/security/ssl/truststore/{id}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/security/ssl/truststore/{id}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/security/ssl/truststore/{id}`

*Remove a certificate in the trust store.*

<h3 id="removecertificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the certificate that should be removed.|

<h3 id="removecertificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to remove certificate from the trust store|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-email">Email</h1>

## getEmailConfiguration

<a id="opIdgetEmailConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/email \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/email");
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

r = requests.get('/service/rest/v1/email', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/email',
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

`GET /v1/email`

*Retrieve the current email configuration*

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "host": "string",
  "port": 0,
  "username": "string",
  "password": "string",
  "fromAddress": "nexus@example.org",
  "subjectPrefix": "string",
  "startTlsEnabled": true,
  "startTlsRequired": true,
  "sslOnConnectEnabled": true,
  "sslServerIdentityCheckEnabled": true,
  "nexusTrustStoreEnabled": true
}
```

<h3 id="getemailconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ApiEmailConfiguration](#schemaapiemailconfiguration)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to retrieve the email configuration|None|

<aside class="success">
This operation does not require authentication
</aside>

## setEmailConfiguration

<a id="opIdsetEmailConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/email \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/email");
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

r = requests.put('/service/rest/v1/email', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "enabled": true,
  "host": "string",
  "port": 0,
  "username": "string",
  "password": "string",
  "fromAddress": "nexus@example.org",
  "subjectPrefix": "string",
  "startTlsEnabled": true,
  "startTlsRequired": true,
  "sslOnConnectEnabled": true,
  "sslServerIdentityCheckEnabled": true,
  "nexusTrustStoreEnabled": true
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/email',
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

`PUT /v1/email`

*Set the current email configuration*

> Body parameter

```json
{
  "enabled": true,
  "host": "string",
  "port": 0,
  "username": "string",
  "password": "string",
  "fromAddress": "nexus@example.org",
  "subjectPrefix": "string",
  "startTlsEnabled": true,
  "startTlsRequired": true,
  "sslOnConnectEnabled": true,
  "sslServerIdentityCheckEnabled": true,
  "nexusTrustStoreEnabled": true
}
```

<h3 id="setemailconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ApiEmailConfiguration](#schemaapiemailconfiguration)|true|none|

<h3 id="setemailconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Email configuration was successfully updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to update the email configuration|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteEmailConfiguration

<a id="opIddeleteEmailConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/email

```

```java
URL obj = new URL("/service/rest/v1/email");
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

r = requests.delete('/service/rest/v1/email')

print(r.json())

```

```javascript

fetch('/service/rest/v1/email',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/email`

*Disable and clear the email configuration*

<h3 id="deleteemailconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Email configuration was successfully cleared|None|

<aside class="success">
This operation does not require authentication
</aside>

## testEmailConfiguration

<a id="opIdtestEmailConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/email/verify \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/email/verify");
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

r = requests.post('/service/rest/v1/email/verify', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/service/rest/v1/email/verify',
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

`POST /v1/email/verify`

*Send a test email to the email address provided in the request body*

> Body parameter

```json
"string"
```

<h3 id="testemailconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|true|An email address to send a test email to|

> Example responses

> 200 Response

```json
{
  "success": true,
  "reason": "string"
}
```

<h3 id="testemailconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Validation was complete, look at the body to determine success|[ApiEmailValidation](#schemaapiemailvalidation)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to verify the email configuration|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-status">Status</h1>

## getSystemStatusChecks

<a id="opIdgetSystemStatusChecks"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/status/check \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/status/check");
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

r = requests.get('/service/rest/v1/status/check', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/status/check',
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

`GET /v1/status/check`

*Health check endpoint that returns the results of the system status checks*

> Example responses

> 200 Response

```json
{
  "property1": {
    "healthy": true,
    "message": "string",
    "error": {
      "cause": {},
      "stackTrace": [
        {
          "classLoaderName": "string",
          "moduleName": "string",
          "moduleVersion": "string",
          "methodName": "string",
          "fileName": "string",
          "lineNumber": 0,
          "nativeMethod": true,
          "className": "string"
        }
      ],
      "message": "string",
      "suppressed": [
        {}
      ],
      "localizedMessage": "string"
    },
    "details": {
      "property1": {},
      "property2": {}
    },
    "time": 0,
    "duration": 0,
    "timestamp": "string"
  },
  "property2": {
    "healthy": true,
    "message": "string",
    "error": {
      "cause": {},
      "stackTrace": [
        {
          "classLoaderName": "string",
          "moduleName": "string",
          "moduleVersion": "string",
          "methodName": "string",
          "fileName": "string",
          "lineNumber": 0,
          "nativeMethod": true,
          "className": "string"
        }
      ],
      "message": "string",
      "suppressed": [
        {}
      ],
      "localizedMessage": "string"
    },
    "details": {
      "property1": {},
      "property2": {}
    },
    "time": 0,
    "duration": 0,
    "timestamp": "string"
  }
}
```

<h3 id="getsystemstatuschecks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The system status check results|Inline|

<h3 id="getsystemstatuschecks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» **additionalProperties**|[Result](#schemaresult)|false|none|none|
|»» healthy|boolean|false|none|none|
|»» message|string|false|none|none|
|»» error|[Throwable](#schemathrowable)|false|none|none|
|»»» cause|[Throwable](#schemathrowable)|false|none|none|
|»»» stackTrace|[[StackTraceElement](#schemastacktraceelement)]|false|none|none|
|»»»» classLoaderName|string|false|none|none|
|»»»» moduleName|string|false|none|none|
|»»»» moduleVersion|string|false|none|none|
|»»»» methodName|string|false|none|none|
|»»»» fileName|string|false|none|none|
|»»»» lineNumber|integer(int32)|false|none|none|
|»»»» nativeMethod|boolean|false|none|none|
|»»»» className|string|false|none|none|
|»»» message|string|false|none|none|
|»»» suppressed|[[Throwable](#schemathrowable)]|false|none|none|
|»»» localizedMessage|string|false|none|none|
|»» details|object|false|none|none|
|»»» **additionalProperties**|object|false|none|none|
|»» time|integer(int64)|false|none|none|
|»» duration|integer(int64)|false|none|none|
|»» timestamp|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## isWritable

<a id="opIdisWritable"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/status/writable

```

```java
URL obj = new URL("/service/rest/v1/status/writable");
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

r = requests.get('/service/rest/v1/status/writable')

print(r.json())

```

```javascript

fetch('/service/rest/v1/status/writable',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /v1/status/writable`

*Health check endpoint that validates server can respond to read and write requests*

<h3 id="iswritable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Available to service requests|None|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Unavailable to service requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## isAvailable

<a id="opIdisAvailable"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/status

```

```java
URL obj = new URL("/service/rest/v1/status");
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

r = requests.get('/service/rest/v1/status')

print(r.json())

```

```javascript

fetch('/service/rest/v1/status',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /v1/status`

*Health check endpoint that validates server can respond to read requests*

<h3 id="isavailable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Available to service requests|None|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|Unavailable to service requests|None|

<aside class="success">
This operation does not require authentication
</aside>

## getNodeSystemStatusChecks

<a id="opIdgetNodeSystemStatusChecks"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/beta/status/check/{nodeId}

```

```java
URL obj = new URL("/service/rest/beta/status/check/{nodeId}");
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

r = requests.get('/service/rest/beta/status/check/{nodeId}')

print(r.json())

```

```javascript

fetch('/service/rest/beta/status/check/{nodeId}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /beta/status/check/{nodeId}`

*Health check endpoint that returns the results of the system status checks of specified Node*

<h3 id="getnodesystemstatuschecks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nodeId|path|string|true|Node Id|

<h3 id="getnodesystemstatuschecks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The system status check results|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|System status information not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## getClusterSystemStatusChecks

<a id="opIdgetClusterSystemStatusChecks"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/beta/status/check/cluster \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/beta/status/check/cluster");
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

r = requests.get('/service/rest/beta/status/check/cluster', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/beta/status/check/cluster',
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

`GET /beta/status/check/cluster`

*Health check endpoint that returns the results of the system status checks*

> Example responses

> 200 Response

```json
[
  {
    "nodeId": "string",
    "hostname": "nexus01",
    "results": "{\"Check\": {\"healthy\": false, \"message\": \"An explanation of the check\"}}"
  }
]
```

<h3 id="getclustersystemstatuschecks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to retrieve system status checks|None|

<h3 id="getclustersystemstatuschecks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SystemCheckResultsApiDTO](#schemasystemcheckresultsapidto)]|false|none|none|
|» nodeId|string|false|none|A unique identifier for the node, should not be considered stable|
|» hostname|string|false|none|The hostname of the originating node|
|» results|object|false|none|The system status check results|
|»» **additionalProperties**|[SystemCheckResultDTO](#schemasystemcheckresultdto)|false|none|none|
|»»» healthy|boolean|false|none|Whether the system check succeeded of failed|
|»»» message|string|false|none|A description of the success or failure|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-support">Support</h1>

## supportzippath

<a id="opIdsupportzippath"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/support/supportzippath \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/support/supportzippath");
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

r = requests.post('/service/rest/v1/support/supportzippath', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "systemInformation": true,
  "threadDump": true,
  "metrics": true,
  "configuration": true,
  "security": true,
  "log": true,
  "taskLog": true,
  "auditLog": true,
  "jmx": true,
  "replication": true,
  "limitFileSizes": true,
  "limitZipSize": true,
  "hostname": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/service/rest/v1/support/supportzippath',
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

`POST /v1/support/supportzippath`

*Creates a support zip and returns the path*

> Body parameter

```json
{
  "systemInformation": true,
  "threadDump": true,
  "metrics": true,
  "configuration": true,
  "security": true,
  "log": true,
  "taskLog": true,
  "auditLog": true,
  "jmx": true,
  "replication": true,
  "limitFileSizes": true,
  "limitZipSize": true,
  "hostname": "string"
}
```

<h3 id="supportzippath-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SupportZipGeneratorRequest](#schemasupportzipgeneratorrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "file": "string",
  "name": "string",
  "size": "string",
  "truncated": true
}
```

<h3 id="supportzippath-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SupportZipXO](#schemasupportzipxo)|

<aside class="success">
This operation does not require authentication
</aside>

## supportzip

<a id="opIdsupportzip"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/support/supportzip \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/support/supportzip");
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

r = requests.post('/service/rest/v1/support/supportzip', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "systemInformation": true,
  "threadDump": true,
  "metrics": true,
  "configuration": true,
  "security": true,
  "log": true,
  "taskLog": true,
  "auditLog": true,
  "jmx": true,
  "replication": true,
  "limitFileSizes": true,
  "limitZipSize": true,
  "hostname": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/support/supportzip',
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

`POST /v1/support/supportzip`

*Creates and downloads a support zip*

> Body parameter

```json
{
  "systemInformation": true,
  "threadDump": true,
  "metrics": true,
  "configuration": true,
  "security": true,
  "log": true,
  "taskLog": true,
  "auditLog": true,
  "jmx": true,
  "replication": true,
  "limitFileSizes": true,
  "limitZipSize": true,
  "hostname": "string"
}
```

<h3 id="supportzip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SupportZipGeneratorRequest](#schemasupportzipgeneratorrequest)|false|none|

<h3 id="supportzip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-assets">assets</h1>

## getAssetById

<a id="opIdgetAssetById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/assets/{id} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/assets/{id}");
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

r = requests.get('/service/rest/v1/assets/{id}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/assets/{id}',
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

`GET /v1/assets/{id}`

*Get a single asset*

<h3 id="getassetbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the asset to get|

> Example responses

> 200 Response

```json
{
  "downloadUrl": "string",
  "path": "string",
  "id": "string",
  "repository": "string",
  "format": "string",
  "checksum": {
    "property1": {},
    "property2": {}
  },
  "contentType": "string",
  "lastModified": "2019-08-24T14:15:22Z",
  "lastDownloaded": "2019-08-24T14:15:22Z",
  "uploader": "string",
  "uploaderIp": "string",
  "fileSize": 0,
  "blobCreated": "2019-08-24T14:15:22Z",
  "blobStoreName": "string"
}
```

<h3 id="getassetbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AssetXO](#schemaassetxo)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to get asset|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Asset not found|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Malformed ID|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteAsset

<a id="opIddeleteAsset"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/assets/{id}

```

```java
URL obj = new URL("/service/rest/v1/assets/{id}");
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

r = requests.delete('/service/rest/v1/assets/{id}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/assets/{id}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/assets/{id}`

*Delete a single asset*

<h3 id="deleteasset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id of the asset to delete|

<h3 id="deleteasset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Asset was successfully deleted|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to delete asset|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Asset not found|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Malformed ID|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAssets

<a id="opIdgetAssets"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/assets?repository=string \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/assets?repository=string");
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

r = requests.get('/service/rest/v1/assets', params={
  'repository': 'string'
}, headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/assets?repository=string',
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

`GET /v1/assets`

*List assets*

<h3 id="getassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|continuationToken|query|string|false|A token returned by a prior request. If present, the next page of results are returned|
|repository|query|string|true|Repository from which you would like to retrieve assets.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "downloadUrl": "string",
      "path": "string",
      "id": "string",
      "repository": "string",
      "format": "string",
      "checksum": {
        "property1": {},
        "property2": {}
      },
      "contentType": "string",
      "lastModified": "2019-08-24T14:15:22Z",
      "lastDownloaded": "2019-08-24T14:15:22Z",
      "uploader": "string",
      "uploaderIp": "string",
      "fileSize": 0,
      "blobCreated": "2019-08-24T14:15:22Z",
      "blobStoreName": "string"
    }
  ],
  "continuationToken": "string"
}
```

<h3 id="getassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[PageAssetXO](#schemapageassetxo)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to list assets|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Parameter 'repository' is required|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-components">components</h1>

## getComponentById

<a id="opIdgetComponentById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/components/{id} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/components/{id}");
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

r = requests.get('/service/rest/v1/components/{id}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/components/{id}',
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

`GET /v1/components/{id}`

*Get a single component*

<h3 id="getcomponentbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the component to retrieve|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "repository": "string",
  "format": "string",
  "group": "string",
  "name": "string",
  "version": "string",
  "assets": [
    {
      "downloadUrl": "string",
      "path": "string",
      "id": "string",
      "repository": "string",
      "format": "string",
      "checksum": {
        "property1": {},
        "property2": {}
      },
      "contentType": "string",
      "lastModified": "2019-08-24T14:15:22Z",
      "lastDownloaded": "2019-08-24T14:15:22Z",
      "uploader": "string",
      "uploaderIp": "string",
      "fileSize": 0,
      "blobCreated": "2019-08-24T14:15:22Z",
      "blobStoreName": "string"
    }
  ]
}
```

<h3 id="getcomponentbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ComponentXO](#schemacomponentxo)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to get component|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Component not found|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Malformed ID|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteComponent

<a id="opIddeleteComponent"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/components/{id}

```

```java
URL obj = new URL("/service/rest/v1/components/{id}");
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

r = requests.delete('/service/rest/v1/components/{id}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/components/{id}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/components/{id}`

*Delete a single component*

<h3 id="deletecomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the component to delete|

<h3 id="deletecomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Component was successfully deleted|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to delete component|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Component not found|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Malformed ID|None|

<aside class="success">
This operation does not require authentication
</aside>

## getComponents

<a id="opIdgetComponents"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/components?repository=string \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/components?repository=string");
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

r = requests.get('/service/rest/v1/components', params={
  'repository': 'string'
}, headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/components?repository=string',
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

`GET /v1/components`

*List components*

<h3 id="getcomponents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|continuationToken|query|string|false|A token returned by a prior request. If present, the next page of results are returned|
|repository|query|string|true|Repository from which you would like to retrieve components|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "string",
      "repository": "string",
      "format": "string",
      "group": "string",
      "name": "string",
      "version": "string",
      "assets": [
        {
          "downloadUrl": "string",
          "path": "string",
          "id": "string",
          "repository": "string",
          "format": "string",
          "checksum": {
            "property1": {},
            "property2": {}
          },
          "contentType": "string",
          "lastModified": "2019-08-24T14:15:22Z",
          "lastDownloaded": "2019-08-24T14:15:22Z",
          "uploader": "string",
          "uploaderIp": "string",
          "fileSize": 0,
          "blobCreated": "2019-08-24T14:15:22Z",
          "blobStoreName": "string"
        }
      ]
    }
  ],
  "continuationToken": "string"
}
```

<h3 id="getcomponents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[PageComponentXO](#schemapagecomponentxo)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to list components|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Parameter 'repository' is required|None|

<aside class="success">
This operation does not require authentication
</aside>

## uploadComponent

<a id="opIduploadComponent"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/components?repository=string \
  -H 'Content-Type: multipart/form-data'

```

```java
URL obj = new URL("/service/rest/v1/components?repository=string");
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
  'Content-Type': 'multipart/form-data'
}

r = requests.post('/service/rest/v1/components', params={
  'repository': 'string'
}, headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "helm.tag": "string",
  "helm.asset": "string",
  "r.tag": "string",
  "r.asset": "string",
  "r.asset.pathId": "string",
  "pypi.tag": "string",
  "pypi.asset": "string",
  "docker.tag": "string",
  "docker.asset": "string",
  "yum.directory": "string",
  "yum.tag": "string",
  "yum.asset": "string",
  "yum.asset.filename": "string",
  "rubygems.tag": "string",
  "rubygems.asset": "string",
  "nuget.tag": "string",
  "nuget.asset": "string",
  "npm.tag": "string",
  "npm.asset": "string",
  "raw.directory": "string",
  "raw.tag": "string",
  "raw.asset1": "string",
  "raw.asset1.filename": "string",
  "raw.asset2": "string",
  "raw.asset2.filename": "string",
  "raw.asset3": "string",
  "raw.asset3.filename": "string",
  "apt.tag": "string",
  "apt.asset": "string",
  "maven2.groupId": "string",
  "maven2.artifactId": "string",
  "maven2.version": "string",
  "maven2.generate-pom": true,
  "maven2.packaging": "string",
  "maven2.tag": "string",
  "maven2.asset1": "string",
  "maven2.asset1.classifier": "string",
  "maven2.asset1.extension": "string",
  "maven2.asset2": "string",
  "maven2.asset2.classifier": "string",
  "maven2.asset2.extension": "string",
  "maven2.asset3": "string",
  "maven2.asset3.classifier": "string",
  "maven2.asset3.extension": "string"
}';
const headers = {
  'Content-Type':'multipart/form-data'
};

fetch('/service/rest/v1/components?repository=string',
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

`POST /v1/components`

*Upload a single component*

> Body parameter

```yaml
helm.tag: string
helm.asset: string
r.tag: string
r.asset: string
r.asset.pathId: string
pypi.tag: string
pypi.asset: string
docker.tag: string
docker.asset: string
yum.directory: string
yum.tag: string
yum.asset: string
yum.asset.filename: string
rubygems.tag: string
rubygems.asset: string
nuget.tag: string
nuget.asset: string
npm.tag: string
npm.asset: string
raw.directory: string
raw.tag: string
raw.asset1: string
raw.asset1.filename: string
raw.asset2: string
raw.asset2.filename: string
raw.asset3: string
raw.asset3.filename: string
apt.tag: string
apt.asset: string
maven2.groupId: string
maven2.artifactId: string
maven2.version: string
maven2.generate-pom: true
maven2.packaging: string
maven2.tag: string
maven2.asset1: string
maven2.asset1.classifier: string
maven2.asset1.extension: string
maven2.asset2: string
maven2.asset2.classifier: string
maven2.asset2.extension: string
maven2.asset3: string
maven2.asset3.classifier: string
maven2.asset3.extension: string

```

<h3 id="uploadcomponent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repository|query|string|true|Name of the repository to which you would like to upload the component|
|body|body|object|false|none|
|» helm.tag|body|string|false|helm Tag|
|» helm.asset|body|string(binary)|false|helm Asset|
|» r.tag|body|string|false|r Tag|
|» r.asset|body|string(binary)|false|r Asset|
|» r.asset.pathId|body|string|false|r Asset  Package Path|
|» pypi.tag|body|string|false|pypi Tag|
|» pypi.asset|body|string(binary)|false|pypi Asset|
|» docker.tag|body|string|false|docker Tag|
|» docker.asset|body|string(binary)|false|docker Asset|
|» yum.directory|body|string|false|yum Directory|
|» yum.tag|body|string|false|yum Tag|
|» yum.asset|body|string(binary)|false|yum Asset|
|» yum.asset.filename|body|string|false|yum Asset  Filename|
|» rubygems.tag|body|string|false|rubygems Tag|
|» rubygems.asset|body|string(binary)|false|rubygems Asset|
|» nuget.tag|body|string|false|nuget Tag|
|» nuget.asset|body|string(binary)|false|nuget Asset|
|» npm.tag|body|string|false|npm Tag|
|» npm.asset|body|string(binary)|false|npm Asset|
|» raw.directory|body|string|false|raw Directory|
|» raw.tag|body|string|false|raw Tag|
|» raw.asset1|body|string(binary)|false|raw Asset 1|
|» raw.asset1.filename|body|string|false|raw Asset 1 Filename|
|» raw.asset2|body|string(binary)|false|raw Asset 2|
|» raw.asset2.filename|body|string|false|raw Asset 2 Filename|
|» raw.asset3|body|string(binary)|false|raw Asset 3|
|» raw.asset3.filename|body|string|false|raw Asset 3 Filename|
|» apt.tag|body|string|false|apt Tag|
|» apt.asset|body|string(binary)|false|apt Asset|
|» maven2.groupId|body|string|false|maven2 Group ID|
|» maven2.artifactId|body|string|false|maven2 Artifact ID|
|» maven2.version|body|string|false|maven2 Version|
|» maven2.generate-pom|body|boolean|false|maven2 Generate a POM file with these coordinates|
|» maven2.packaging|body|string|false|maven2 Packaging|
|» maven2.tag|body|string|false|maven2 Tag|
|» maven2.asset1|body|string(binary)|false|maven2 Asset 1|
|» maven2.asset1.classifier|body|string|false|maven2 Asset 1 Classifier|
|» maven2.asset1.extension|body|string|false|maven2 Asset 1 Extension|
|» maven2.asset2|body|string(binary)|false|maven2 Asset 2|
|» maven2.asset2.classifier|body|string|false|maven2 Asset 2 Classifier|
|» maven2.asset2.extension|body|string|false|maven2 Asset 2 Extension|
|» maven2.asset3|body|string(binary)|false|maven2 Asset 3|
|» maven2.asset3.classifier|body|string|false|maven2 Asset 3 Classifier|
|» maven2.asset3.extension|body|string|false|maven2 Asset 3 Extension|

<h3 id="uploadcomponent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to upload a component|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Parameter 'repository' is required|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-repository-management">Repository Management</h1>

## invalidateCache

<a id="opIdinvalidateCache"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/{repositoryName}/invalidate-cache

```

```java
URL obj = new URL("/service/rest/v1/repositories/{repositoryName}/invalidate-cache");
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

r = requests.post('/service/rest/v1/repositories/{repositoryName}/invalidate-cache')

print(r.json())

```

```javascript

fetch('/service/rest/v1/repositories/{repositoryName}/invalidate-cache',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /v1/repositories/{repositoryName}/invalidate-cache`

*Invalidate repository cache. Proxy or group repositories only.*

<h3 id="invalidatecache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to invalidate cache|

<h3 id="invalidatecache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository cache invalidated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Repository is not of proxy or group type|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository

<a id="opIdgetRepository"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/{repositoryName}',
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

`GET /v1/repositories/{repositoryName}`

*Get repository details*

<h3 id="getrepository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to get|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "format": "string",
  "type": "string",
  "url": "string",
  "attributes": {
    "property1": {},
    "property2": {}
  }
}
```

<h3 id="getrepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[RepositoryXO](#schemarepositoryxo)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteRepository

<a id="opIddeleteRepository"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/repositories/{repositoryName}

```

```java
URL obj = new URL("/service/rest/v1/repositories/{repositoryName}");
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

r = requests.delete('/service/rest/v1/repositories/{repositoryName}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/repositories/{repositoryName}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/repositories/{repositoryName}`

*Delete repository of any format*

<h3 id="deleterepository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to delete|

<h3 id="deleterepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## rebuildIndex

<a id="opIdrebuildIndex"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/{repositoryName}/rebuild-index

```

```java
URL obj = new URL("/service/rest/v1/repositories/{repositoryName}/rebuild-index");
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

r = requests.post('/service/rest/v1/repositories/{repositoryName}/rebuild-index')

print(r.json())

```

```javascript

fetch('/service/rest/v1/repositories/{repositoryName}/rebuild-index',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /v1/repositories/{repositoryName}/rebuild-index`

*Schedule a 'Repair - Rebuild repository search' Task. Hosted or proxy repositories only.*

<h3 id="rebuildindex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to rebuild index|

<h3 id="rebuildindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository search index rebuild has been scheduled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Repository is not of hosted or proxy type|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepositories

<a id="opIdgetRepositories"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositorySettings \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositorySettings");
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

r = requests.get('/service/rest/v1/repositorySettings', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositorySettings',
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

`GET /v1/repositorySettings`

*List repositories*

> Example responses

> 200 Response

```json
[
  {
    "name": "internal",
    "format": "npm",
    "type": "hosted",
    "url": "string",
    "online": true
  }
]
```

<h3 id="getrepositories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Repositories list returned|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<h3 id="getrepositories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AbstractApiRepository](#schemaabstractapirepository)]|false|none|none|
|» name|string|false|none|A unique identifier for this repository|
|» format|string|false|none|Component format held in this repository|
|» type|string|false|none|Controls if deployments of and updates to artifacts are allowed|
|» url|string|false|none|URL to the repository|
|» online|boolean|true|none|Whether this repository accepts incoming requests|

#### Enumerated Values

|Property|Value|
|---|---|
|type|hosted|
|type|proxy|
|type|group|

<aside class="success">
This operation does not require authentication
</aside>

## getRepositories_1

<a id="opIdgetRepositories_1"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories");
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

r = requests.get('/service/rest/v1/repositories', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories',
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

`GET /v1/repositories`

*List repositories*

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "format": "string",
    "type": "string",
    "url": "string",
    "attributes": {
      "property1": {},
      "property2": {}
    }
  }
]
```

<h3 id="getrepositories_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="getrepositories_1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RepositoryXO](#schemarepositoryxo)]|false|none|none|
|» name|string|false|none|none|
|» format|string|false|none|none|
|» type|string|false|none|none|
|» url|string|false|none|none|
|» attributes|object|false|none|none|
|»» **additionalProperties**|object|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository

<a id="opIdcreateRepository"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/maven/group \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/maven/group");
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

r = requests.post('/service/rest/v1/repositories/maven/group', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/maven/group',
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

`POST /v1/repositories/maven/group`

*Create Maven group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="createrepository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MavenGroupRepositoryApiRequest](#schemamavengrouprepositoryapirequest)|false|none|

<h3 id="createrepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_1

<a id="opIdgetRepository_1"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/maven/group/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/maven/group/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/maven/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/maven/group/{repositoryName}',
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

`GET /v1/repositories/maven/group/{repositoryName}`

*Get repository*

<h3 id="getrepository_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="getrepository_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiGroupRepository](#schemasimpleapigrouprepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository

<a id="opIdupdateRepository"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/maven/group/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/maven/group/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/maven/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/maven/group/{repositoryName}',
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

`PUT /v1/repositories/maven/group/{repositoryName}`

*Update Maven group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="updaterepository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[MavenGroupRepositoryApiRequest](#schemamavengrouprepositoryapirequest)|false|none|

<h3 id="updaterepository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_2

<a id="opIdgetRepository_2"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/maven/hosted/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/maven/hosted/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/maven/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/maven/hosted/{repositoryName}',
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

`GET /v1/repositories/maven/hosted/{repositoryName}`

*Get repository*

<h3 id="getrepository_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "maven": {
    "versionPolicy": "MIXED",
    "layoutPolicy": "STRICT",
    "contentDisposition": "ATTACHMENT"
  }
}
```

<h3 id="getrepository_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[MavenHostedApiRepository](#schemamavenhostedapirepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_1

<a id="opIdupdateRepository_1"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/maven/hosted/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/maven/hosted/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/maven/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "maven": {
    "versionPolicy": "MIXED",
    "layoutPolicy": "STRICT",
    "contentDisposition": "ATTACHMENT"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/maven/hosted/{repositoryName}',
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

`PUT /v1/repositories/maven/hosted/{repositoryName}`

*Update Maven hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "maven": {
    "versionPolicy": "MIXED",
    "layoutPolicy": "STRICT",
    "contentDisposition": "ATTACHMENT"
  }
}
```

<h3 id="updaterepository_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[MavenHostedRepositoryApiRequest](#schemamavenhostedrepositoryapirequest)|false|none|

<h3 id="updaterepository_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_1

<a id="opIdcreateRepository_1"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/maven/hosted \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/maven/hosted");
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

r = requests.post('/service/rest/v1/repositories/maven/hosted', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "maven": {
    "versionPolicy": "MIXED",
    "layoutPolicy": "STRICT",
    "contentDisposition": "ATTACHMENT"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/maven/hosted',
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

`POST /v1/repositories/maven/hosted`

*Create Maven hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "maven": {
    "versionPolicy": "MIXED",
    "layoutPolicy": "STRICT",
    "contentDisposition": "ATTACHMENT"
  }
}
```

<h3 id="createrepository_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MavenHostedRepositoryApiRequest](#schemamavenhostedrepositoryapirequest)|false|none|

<h3 id="createrepository_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_3

<a id="opIdgetRepository_3"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/maven/proxy/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/maven/proxy/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/maven/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/maven/proxy/{repositoryName}',
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

`GET /v1/repositories/maven/proxy/{repositoryName}`

*Get repository*

<h3 id="getrepository_3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "maven": {
    "versionPolicy": "MIXED",
    "layoutPolicy": "STRICT",
    "contentDisposition": "ATTACHMENT"
  }
}
```

<h3 id="getrepository_3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[MavenProxyApiRepository](#schemamavenproxyapirepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_2

<a id="opIdupdateRepository_2"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/maven/proxy/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/maven/proxy/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/maven/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string",
      "preemptive": false
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "maven": {
    "versionPolicy": "MIXED",
    "layoutPolicy": "STRICT",
    "contentDisposition": "ATTACHMENT"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/maven/proxy/{repositoryName}',
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

`PUT /v1/repositories/maven/proxy/{repositoryName}`

*Update Maven proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string",
      "preemptive": false
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "maven": {
    "versionPolicy": "MIXED",
    "layoutPolicy": "STRICT",
    "contentDisposition": "ATTACHMENT"
  }
}
```

<h3 id="updaterepository_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[MavenProxyRepositoryApiRequest](#schemamavenproxyrepositoryapirequest)|false|none|

<h3 id="updaterepository_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_2

<a id="opIdcreateRepository_2"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/maven/proxy \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/maven/proxy");
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

r = requests.post('/service/rest/v1/repositories/maven/proxy', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string",
      "preemptive": false
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "maven": {
    "versionPolicy": "MIXED",
    "layoutPolicy": "STRICT",
    "contentDisposition": "ATTACHMENT"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/maven/proxy',
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

`POST /v1/repositories/maven/proxy`

*Create Maven proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string",
      "preemptive": false
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "maven": {
    "versionPolicy": "MIXED",
    "layoutPolicy": "STRICT",
    "contentDisposition": "ATTACHMENT"
  }
}
```

<h3 id="createrepository_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MavenProxyRepositoryApiRequest](#schemamavenproxyrepositoryapirequest)|false|none|

<h3 id="createrepository_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_4

<a id="opIdgetRepository_4"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/apt/hosted/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/apt/hosted/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/apt/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/apt/hosted/{repositoryName}',
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

`GET /v1/repositories/apt/hosted/{repositoryName}`

*Get repository*

<h3 id="getrepository_4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "apt": {
    "distribution": "bionic"
  },
  "aptSigning": {
    "keypair": "string",
    "passphrase": "string"
  }
}
```

<h3 id="getrepository_4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AptHostedApiRepository](#schemaapthostedapirepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_3

<a id="opIdupdateRepository_3"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/apt/hosted/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/apt/hosted/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/apt/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "apt": {
    "distribution": "bionic"
  },
  "aptSigning": {
    "keypair": "string",
    "passphrase": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/apt/hosted/{repositoryName}',
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

`PUT /v1/repositories/apt/hosted/{repositoryName}`

*Update APT hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "apt": {
    "distribution": "bionic"
  },
  "aptSigning": {
    "keypair": "string",
    "passphrase": "string"
  }
}
```

<h3 id="updaterepository_3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[AptHostedRepositoryApiRequest](#schemaapthostedrepositoryapirequest)|false|none|

<h3 id="updaterepository_3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_3

<a id="opIdcreateRepository_3"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/apt/hosted \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/apt/hosted");
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

r = requests.post('/service/rest/v1/repositories/apt/hosted', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "apt": {
    "distribution": "bionic"
  },
  "aptSigning": {
    "keypair": "string",
    "passphrase": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/apt/hosted',
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

`POST /v1/repositories/apt/hosted`

*Create APT hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "apt": {
    "distribution": "bionic"
  },
  "aptSigning": {
    "keypair": "string",
    "passphrase": "string"
  }
}
```

<h3 id="createrepository_3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AptHostedRepositoryApiRequest](#schemaapthostedrepositoryapirequest)|false|none|

<h3 id="createrepository_3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Feature is disabled in High Availability|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_5

<a id="opIdgetRepository_5"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/apt/proxy/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/apt/proxy/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/apt/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/apt/proxy/{repositoryName}',
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

`GET /v1/repositories/apt/proxy/{repositoryName}`

*Get repository*

<h3 id="getrepository_5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "apt": {
    "distribution": "bionic",
    "flat": false
  }
}
```

<h3 id="getrepository_5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[AptProxyApiRepository](#schemaaptproxyapirepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_4

<a id="opIdupdateRepository_4"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/apt/proxy/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/apt/proxy/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/apt/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "apt": {
    "distribution": "bionic",
    "flat": false
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/apt/proxy/{repositoryName}',
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

`PUT /v1/repositories/apt/proxy/{repositoryName}`

*Update APT proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "apt": {
    "distribution": "bionic",
    "flat": false
  }
}
```

<h3 id="updaterepository_4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[AptProxyRepositoryApiRequest](#schemaaptproxyrepositoryapirequest)|false|none|

<h3 id="updaterepository_4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_4

<a id="opIdcreateRepository_4"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/apt/proxy \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/apt/proxy");
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

r = requests.post('/service/rest/v1/repositories/apt/proxy', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "apt": {
    "distribution": "bionic",
    "flat": false
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/apt/proxy',
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

`POST /v1/repositories/apt/proxy`

*Create APT proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "apt": {
    "distribution": "bionic",
    "flat": false
  }
}
```

<h3 id="createrepository_4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AptProxyRepositoryApiRequest](#schemaaptproxyrepositoryapirequest)|false|none|

<h3 id="createrepository_4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Feature is disabled in High Availability|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_5

<a id="opIdcreateRepository_5"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/raw/group \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/raw/group");
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

r = requests.post('/service/rest/v1/repositories/raw/group', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  },
  "raw": {
    "contentDisposition": "ATTACHMENT"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/raw/group',
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

`POST /v1/repositories/raw/group`

*Create raw group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  },
  "raw": {
    "contentDisposition": "ATTACHMENT"
  }
}
```

<h3 id="createrepository_5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RawGroupRepositoryApiRequest](#schemarawgrouprepositoryapirequest)|false|none|

<h3 id="createrepository_5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_6

<a id="opIdgetRepository_6"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/raw/group/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/raw/group/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/raw/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/raw/group/{repositoryName}',
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

`GET /v1/repositories/raw/group/{repositoryName}`

*Get repository*

<h3 id="getrepository_6-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="getrepository_6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiGroupRepository](#schemasimpleapigrouprepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_5

<a id="opIdupdateRepository_5"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/raw/group/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/raw/group/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/raw/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  },
  "raw": {
    "contentDisposition": "ATTACHMENT"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/raw/group/{repositoryName}',
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

`PUT /v1/repositories/raw/group/{repositoryName}`

*Update raw group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  },
  "raw": {
    "contentDisposition": "ATTACHMENT"
  }
}
```

<h3 id="updaterepository_5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[RawGroupRepositoryApiRequest](#schemarawgrouprepositoryapirequest)|false|none|

<h3 id="updaterepository_5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_6

<a id="opIdcreateRepository_6"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/raw/hosted \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/raw/hosted");
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

r = requests.post('/service/rest/v1/repositories/raw/hosted', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "raw": {
    "contentDisposition": "ATTACHMENT"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/raw/hosted',
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

`POST /v1/repositories/raw/hosted`

*Create raw hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "raw": {
    "contentDisposition": "ATTACHMENT"
  }
}
```

<h3 id="createrepository_6-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RawHostedRepositoryApiRequest](#schemarawhostedrepositoryapirequest)|false|none|

<h3 id="createrepository_6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_7

<a id="opIdgetRepository_7"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/raw/hosted/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/raw/hosted/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/raw/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/raw/hosted/{repositoryName}',
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

`GET /v1/repositories/raw/hosted/{repositoryName}`

*Get repository*

<h3 id="getrepository_7-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="getrepository_7-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiHostedRepository](#schemasimpleapihostedrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_6

<a id="opIdupdateRepository_6"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/raw/hosted/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/raw/hosted/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/raw/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "raw": {
    "contentDisposition": "ATTACHMENT"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/raw/hosted/{repositoryName}',
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

`PUT /v1/repositories/raw/hosted/{repositoryName}`

*Update raw hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "raw": {
    "contentDisposition": "ATTACHMENT"
  }
}
```

<h3 id="updaterepository_6-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[RawHostedRepositoryApiRequest](#schemarawhostedrepositoryapirequest)|false|none|

<h3 id="updaterepository_6-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_7

<a id="opIdcreateRepository_7"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/raw/proxy \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/raw/proxy");
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

r = requests.post('/service/rest/v1/repositories/raw/proxy', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "raw": {
    "contentDisposition": "ATTACHMENT"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/raw/proxy',
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

`POST /v1/repositories/raw/proxy`

*Create raw proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "raw": {
    "contentDisposition": "ATTACHMENT"
  }
}
```

<h3 id="createrepository_7-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RawProxyRepositoryApiRequest](#schemarawproxyrepositoryapirequest)|false|none|

<h3 id="createrepository_7-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_8

<a id="opIdgetRepository_8"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/raw/proxy/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/raw/proxy/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/raw/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/raw/proxy/{repositoryName}',
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

`GET /v1/repositories/raw/proxy/{repositoryName}`

*Get repository*

<h3 id="getrepository_8-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="getrepository_8-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiProxyRepository](#schemasimpleapiproxyrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_7

<a id="opIdupdateRepository_7"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/raw/proxy/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/raw/proxy/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/raw/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "raw": {
    "contentDisposition": "ATTACHMENT"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/raw/proxy/{repositoryName}',
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

`PUT /v1/repositories/raw/proxy/{repositoryName}`

*Update raw proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "raw": {
    "contentDisposition": "ATTACHMENT"
  }
}
```

<h3 id="updaterepository_7-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[RawProxyRepositoryApiRequest](#schemarawproxyrepositoryapirequest)|false|none|

<h3 id="updaterepository_7-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## enableRepositoryHealthCheck

<a id="opIdenableRepositoryHealthCheck"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/{repositoryName}/health-check

```

```java
URL obj = new URL("/service/rest/v1/repositories/{repositoryName}/health-check");
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

r = requests.post('/service/rest/v1/repositories/{repositoryName}/health-check')

print(r.json())

```

```javascript

fetch('/service/rest/v1/repositories/{repositoryName}/health-check',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /v1/repositories/{repositoryName}/health-check`

*Enable repository health check. Proxy repositories only.*

<h3 id="enablerepositoryhealthcheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to enable Repository Health Check for|

<h3 id="enablerepositoryhealthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository Health Check enabled|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|EULA not accepted or Repository Health Check capability not active|None|

<aside class="success">
This operation does not require authentication
</aside>

## disableRepositoryHealthCheck

<a id="opIddisableRepositoryHealthCheck"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/repositories/{repositoryName}/health-check

```

```java
URL obj = new URL("/service/rest/v1/repositories/{repositoryName}/health-check");
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

r = requests.delete('/service/rest/v1/repositories/{repositoryName}/health-check')

print(r.json())

```

```javascript

fetch('/service/rest/v1/repositories/{repositoryName}/health-check',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/repositories/{repositoryName}/health-check`

*Disable repository health check. Proxy repositories only.*

<h3 id="disablerepositoryhealthcheck-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to disable Repository Health Check for|

<h3 id="disablerepositoryhealthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository Health Check disabled|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_9

<a id="opIdgetRepository_9"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/npm/group/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/npm/group/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/npm/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/npm/group/{repositoryName}',
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

`GET /v1/repositories/npm/group/{repositoryName}`

*Get repository*

<h3 id="getrepository_9-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ],
    "writableMember": "string"
  }
}
```

<h3 id="getrepository_9-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiGroupDeployRepository](#schemasimpleapigroupdeployrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_8

<a id="opIdupdateRepository_8"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/npm/group/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/npm/group/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/npm/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ],
    "writableMember": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/npm/group/{repositoryName}',
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

`PUT /v1/repositories/npm/group/{repositoryName}`

*Update npm group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ],
    "writableMember": "string"
  }
}
```

<h3 id="updaterepository_8-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[NpmGroupRepositoryApiRequest](#schemanpmgrouprepositoryapirequest)|false|none|

<h3 id="updaterepository_8-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_8

<a id="opIdcreateRepository_8"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/npm/group \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/npm/group");
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

r = requests.post('/service/rest/v1/repositories/npm/group', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ],
    "writableMember": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/npm/group',
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

`POST /v1/repositories/npm/group`

*Create npm group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ],
    "writableMember": "string"
  }
}
```

<h3 id="createrepository_8-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NpmGroupRepositoryApiRequest](#schemanpmgrouprepositoryapirequest)|false|none|

<h3 id="createrepository_8-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_9

<a id="opIdcreateRepository_9"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/npm/hosted \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/npm/hosted");
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

r = requests.post('/service/rest/v1/repositories/npm/hosted', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/npm/hosted',
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

`POST /v1/repositories/npm/hosted`

*Create npm hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="createrepository_9-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NpmHostedRepositoryApiRequest](#schemanpmhostedrepositoryapirequest)|false|none|

<h3 id="createrepository_9-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_10

<a id="opIdgetRepository_10"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/npm/hosted/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/npm/hosted/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/npm/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/npm/hosted/{repositoryName}',
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

`GET /v1/repositories/npm/hosted/{repositoryName}`

*Get repository*

<h3 id="getrepository_10-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="getrepository_10-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiHostedRepository](#schemasimpleapihostedrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_9

<a id="opIdupdateRepository_9"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/npm/hosted/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/npm/hosted/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/npm/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/npm/hosted/{repositoryName}',
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

`PUT /v1/repositories/npm/hosted/{repositoryName}`

*Update npm hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="updaterepository_9-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[NpmHostedRepositoryApiRequest](#schemanpmhostedrepositoryapirequest)|false|none|

<h3 id="updaterepository_9-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_11

<a id="opIdgetRepository_11"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/npm/proxy/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/npm/proxy/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/npm/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/npm/proxy/{repositoryName}',
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

`GET /v1/repositories/npm/proxy/{repositoryName}`

*Get repository*

<h3 id="getrepository_11-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "npm": {
    "removeQuarantined": true
  }
}
```

<h3 id="getrepository_11-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[NpmProxyApiRepository](#schemanpmproxyapirepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_10

<a id="opIdupdateRepository_10"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/npm/proxy/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/npm/proxy/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/npm/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "npm": {
    "removeQuarantined": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/npm/proxy/{repositoryName}',
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

`PUT /v1/repositories/npm/proxy/{repositoryName}`

*Update npm proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "npm": {
    "removeQuarantined": true
  }
}
```

<h3 id="updaterepository_10-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[NpmProxyRepositoryApiRequest](#schemanpmproxyrepositoryapirequest)|false|none|

<h3 id="updaterepository_10-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_10

<a id="opIdcreateRepository_10"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/npm/proxy \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/npm/proxy");
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

r = requests.post('/service/rest/v1/repositories/npm/proxy', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "npm": {
    "removeQuarantined": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/npm/proxy',
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

`POST /v1/repositories/npm/proxy`

*Create npm proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "npm": {
    "removeQuarantined": true
  }
}
```

<h3 id="createrepository_10-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NpmProxyRepositoryApiRequest](#schemanpmproxyrepositoryapirequest)|false|none|

<h3 id="createrepository_10-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_11

<a id="opIdcreateRepository_11"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/nuget/group \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/nuget/group");
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

r = requests.post('/service/rest/v1/repositories/nuget/group', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/nuget/group',
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

`POST /v1/repositories/nuget/group`

*Create NuGet group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="createrepository_11-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NugetGroupRepositoryApiRequest](#schemanugetgrouprepositoryapirequest)|false|none|

<h3 id="createrepository_11-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_12

<a id="opIdgetRepository_12"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/nuget/group/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/nuget/group/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/nuget/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/nuget/group/{repositoryName}',
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

`GET /v1/repositories/nuget/group/{repositoryName}`

*Get repository*

<h3 id="getrepository_12-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="getrepository_12-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiGroupRepository](#schemasimpleapigrouprepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_11

<a id="opIdupdateRepository_11"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/nuget/group/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/nuget/group/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/nuget/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/nuget/group/{repositoryName}',
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

`PUT /v1/repositories/nuget/group/{repositoryName}`

*Update NuGet group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="updaterepository_11-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[NugetGroupRepositoryApiRequest](#schemanugetgrouprepositoryapirequest)|false|none|

<h3 id="updaterepository_11-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_12

<a id="opIdcreateRepository_12"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/nuget/hosted \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/nuget/hosted");
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

r = requests.post('/service/rest/v1/repositories/nuget/hosted', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/nuget/hosted',
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

`POST /v1/repositories/nuget/hosted`

*Create NuGet hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="createrepository_12-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NugetHostedRepositoryApiRequest](#schemanugethostedrepositoryapirequest)|false|none|

<h3 id="createrepository_12-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_13

<a id="opIdgetRepository_13"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/nuget/hosted/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/nuget/hosted/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/nuget/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/nuget/hosted/{repositoryName}',
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

`GET /v1/repositories/nuget/hosted/{repositoryName}`

*Get repository*

<h3 id="getrepository_13-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="getrepository_13-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiHostedRepository](#schemasimpleapihostedrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_12

<a id="opIdupdateRepository_12"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/nuget/hosted/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/nuget/hosted/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/nuget/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/nuget/hosted/{repositoryName}',
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

`PUT /v1/repositories/nuget/hosted/{repositoryName}`

*Update NuGet hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="updaterepository_12-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[NugetHostedRepositoryApiRequest](#schemanugethostedrepositoryapirequest)|false|none|

<h3 id="updaterepository_12-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_14

<a id="opIdgetRepository_14"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/nuget/proxy/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/nuget/proxy/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/nuget/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/nuget/proxy/{repositoryName}',
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

`GET /v1/repositories/nuget/proxy/{repositoryName}`

*Get repository*

<h3 id="getrepository_14-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "nugetProxy": {
    "queryCacheItemMaxAge": 3600,
    "nugetVersion": "V3"
  }
}
```

<h3 id="getrepository_14-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[NugetProxyApiRepository](#schemanugetproxyapirepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_13

<a id="opIdupdateRepository_13"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/nuget/proxy/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/nuget/proxy/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/nuget/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "nugetProxy": {
    "queryCacheItemMaxAge": 3600,
    "nugetVersion": "V3"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/nuget/proxy/{repositoryName}',
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

`PUT /v1/repositories/nuget/proxy/{repositoryName}`

*Update NuGet proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "nugetProxy": {
    "queryCacheItemMaxAge": 3600,
    "nugetVersion": "V3"
  }
}
```

<h3 id="updaterepository_13-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[NugetProxyRepositoryApiRequest](#schemanugetproxyrepositoryapirequest)|false|none|

<h3 id="updaterepository_13-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_13

<a id="opIdcreateRepository_13"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/nuget/proxy \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/nuget/proxy");
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

r = requests.post('/service/rest/v1/repositories/nuget/proxy', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "nugetProxy": {
    "queryCacheItemMaxAge": 3600,
    "nugetVersion": "V3"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/nuget/proxy',
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

`POST /v1/repositories/nuget/proxy`

*Create NuGet proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "nugetProxy": {
    "queryCacheItemMaxAge": 3600,
    "nugetVersion": "V3"
  }
}
```

<h3 id="createrepository_13-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NugetProxyRepositoryApiRequest](#schemanugetproxyrepositoryapirequest)|false|none|

<h3 id="createrepository_13-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_14

<a id="opIdcreateRepository_14"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/rubygems/group \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/rubygems/group");
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

r = requests.post('/service/rest/v1/repositories/rubygems/group', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/rubygems/group',
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

`POST /v1/repositories/rubygems/group`

*Create RubyGems group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="createrepository_14-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RubyGemsGroupRepositoryApiRequest](#schemarubygemsgrouprepositoryapirequest)|false|none|

<h3 id="createrepository_14-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_15

<a id="opIdgetRepository_15"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/rubygems/group/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/rubygems/group/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/rubygems/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/rubygems/group/{repositoryName}',
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

`GET /v1/repositories/rubygems/group/{repositoryName}`

*Get repository*

<h3 id="getrepository_15-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="getrepository_15-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiGroupRepository](#schemasimpleapigrouprepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_14

<a id="opIdupdateRepository_14"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/rubygems/group/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/rubygems/group/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/rubygems/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/rubygems/group/{repositoryName}',
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

`PUT /v1/repositories/rubygems/group/{repositoryName}`

*Update RubyGems group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="updaterepository_14-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[RubyGemsGroupRepositoryApiRequest](#schemarubygemsgrouprepositoryapirequest)|false|none|

<h3 id="updaterepository_14-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_15

<a id="opIdcreateRepository_15"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/rubygems/hosted \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/rubygems/hosted");
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

r = requests.post('/service/rest/v1/repositories/rubygems/hosted', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/rubygems/hosted',
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

`POST /v1/repositories/rubygems/hosted`

*Create RubyGems hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="createrepository_15-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RubyGemsHostedRepositoryApiRequest](#schemarubygemshostedrepositoryapirequest)|false|none|

<h3 id="createrepository_15-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_16

<a id="opIdgetRepository_16"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/rubygems/hosted/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/rubygems/hosted/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/rubygems/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/rubygems/hosted/{repositoryName}',
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

`GET /v1/repositories/rubygems/hosted/{repositoryName}`

*Get repository*

<h3 id="getrepository_16-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="getrepository_16-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiHostedRepository](#schemasimpleapihostedrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_15

<a id="opIdupdateRepository_15"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/rubygems/hosted/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/rubygems/hosted/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/rubygems/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/rubygems/hosted/{repositoryName}',
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

`PUT /v1/repositories/rubygems/hosted/{repositoryName}`

*Update RubyGems hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="updaterepository_15-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[RubyGemsHostedRepositoryApiRequest](#schemarubygemshostedrepositoryapirequest)|false|none|

<h3 id="updaterepository_15-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_16

<a id="opIdcreateRepository_16"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/rubygems/proxy \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/rubygems/proxy");
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

r = requests.post('/service/rest/v1/repositories/rubygems/proxy', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/rubygems/proxy',
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

`POST /v1/repositories/rubygems/proxy`

*Create RubyGems proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="createrepository_16-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RubyGemsProxyRepositoryApiRequest](#schemarubygemsproxyrepositoryapirequest)|false|none|

<h3 id="createrepository_16-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_17

<a id="opIdgetRepository_17"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/rubygems/proxy/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/rubygems/proxy/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/rubygems/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/rubygems/proxy/{repositoryName}',
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

`GET /v1/repositories/rubygems/proxy/{repositoryName}`

*Get repository*

<h3 id="getrepository_17-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="getrepository_17-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiProxyRepository](#schemasimpleapiproxyrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_16

<a id="opIdupdateRepository_16"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/rubygems/proxy/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/rubygems/proxy/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/rubygems/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/rubygems/proxy/{repositoryName}',
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

`PUT /v1/repositories/rubygems/proxy/{repositoryName}`

*Update RubyGems proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="updaterepository_16-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[RubyGemsProxyRepositoryApiRequest](#schemarubygemsproxyrepositoryapirequest)|false|none|

<h3 id="updaterepository_16-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_17

<a id="opIdcreateRepository_17"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/yum/group \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/yum/group");
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

r = requests.post('/service/rest/v1/repositories/yum/group', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  },
  "yumSigning": {
    "keypair": "string",
    "passphrase": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/yum/group',
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

`POST /v1/repositories/yum/group`

*Create Yum group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  },
  "yumSigning": {
    "keypair": "string",
    "passphrase": "string"
  }
}
```

<h3 id="createrepository_17-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[YumGroupRepositoryApiRequest](#schemayumgrouprepositoryapirequest)|false|none|

<h3 id="createrepository_17-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_18

<a id="opIdgetRepository_18"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/yum/group/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/yum/group/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/yum/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/yum/group/{repositoryName}',
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

`GET /v1/repositories/yum/group/{repositoryName}`

*Get repository*

<h3 id="getrepository_18-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="getrepository_18-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiGroupRepository](#schemasimpleapigrouprepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_17

<a id="opIdupdateRepository_17"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/yum/group/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/yum/group/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/yum/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  },
  "yumSigning": {
    "keypair": "string",
    "passphrase": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/yum/group/{repositoryName}',
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

`PUT /v1/repositories/yum/group/{repositoryName}`

*Update Yum group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  },
  "yumSigning": {
    "keypair": "string",
    "passphrase": "string"
  }
}
```

<h3 id="updaterepository_17-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[YumGroupRepositoryApiRequest](#schemayumgrouprepositoryapirequest)|false|none|

<h3 id="updaterepository_17-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_19

<a id="opIdgetRepository_19"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/yum/hosted/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/yum/hosted/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/yum/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/yum/hosted/{repositoryName}',
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

`GET /v1/repositories/yum/hosted/{repositoryName}`

*Get repository*

<h3 id="getrepository_19-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "yum": {
    "repodataDepth": 5,
    "deployPolicy": "STRICT"
  }
}
```

<h3 id="getrepository_19-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[YumHostedApiRepository](#schemayumhostedapirepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_18

<a id="opIdupdateRepository_18"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/yum/hosted/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/yum/hosted/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/yum/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "yum": {
    "repodataDepth": 5,
    "deployPolicy": "STRICT"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/yum/hosted/{repositoryName}',
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

`PUT /v1/repositories/yum/hosted/{repositoryName}`

*Update Yum hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "yum": {
    "repodataDepth": 5,
    "deployPolicy": "STRICT"
  }
}
```

<h3 id="updaterepository_18-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[YumHostedRepositoryApiRequest](#schemayumhostedrepositoryapirequest)|false|none|

<h3 id="updaterepository_18-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_18

<a id="opIdcreateRepository_18"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/yum/hosted \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/yum/hosted");
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

r = requests.post('/service/rest/v1/repositories/yum/hosted', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "yum": {
    "repodataDepth": 5,
    "deployPolicy": "STRICT"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/yum/hosted',
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

`POST /v1/repositories/yum/hosted`

*Create Yum hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "yum": {
    "repodataDepth": 5,
    "deployPolicy": "STRICT"
  }
}
```

<h3 id="createrepository_18-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[YumHostedRepositoryApiRequest](#schemayumhostedrepositoryapirequest)|false|none|

<h3 id="createrepository_18-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_19

<a id="opIdcreateRepository_19"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/yum/proxy \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/yum/proxy");
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

r = requests.post('/service/rest/v1/repositories/yum/proxy', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "yumSigning": {
    "keypair": "string",
    "passphrase": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/yum/proxy',
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

`POST /v1/repositories/yum/proxy`

*Create Yum proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "yumSigning": {
    "keypair": "string",
    "passphrase": "string"
  }
}
```

<h3 id="createrepository_19-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[YumProxyRepositoryApiRequest](#schemayumproxyrepositoryapirequest)|false|none|

<h3 id="createrepository_19-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_20

<a id="opIdgetRepository_20"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/yum/proxy/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/yum/proxy/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/yum/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/yum/proxy/{repositoryName}',
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

`GET /v1/repositories/yum/proxy/{repositoryName}`

*Get repository*

<h3 id="getrepository_20-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="getrepository_20-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiProxyRepository](#schemasimpleapiproxyrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_19

<a id="opIdupdateRepository_19"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/yum/proxy/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/yum/proxy/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/yum/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "yumSigning": {
    "keypair": "string",
    "passphrase": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/yum/proxy/{repositoryName}',
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

`PUT /v1/repositories/yum/proxy/{repositoryName}`

*Update Yum proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "yumSigning": {
    "keypair": "string",
    "passphrase": "string"
  }
}
```

<h3 id="updaterepository_19-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[YumProxyRepositoryApiRequest](#schemayumproxyrepositoryapirequest)|false|none|

<h3 id="updaterepository_19-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_21

<a id="opIdgetRepository_21"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/docker/group/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/docker/group/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/docker/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/docker/group/{repositoryName}',
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

`GET /v1/repositories/docker/group/{repositoryName}`

*Get repository*

<h3 id="getrepository_21-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ],
    "writableMember": "string"
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  }
}
```

<h3 id="getrepository_21-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[DockerGroupApiRepository](#schemadockergroupapirepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_20

<a id="opIdupdateRepository_20"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/docker/group/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/docker/group/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/docker/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ],
    "writableMember": "string"
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/docker/group/{repositoryName}',
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

`PUT /v1/repositories/docker/group/{repositoryName}`

*Update Docker group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ],
    "writableMember": "string"
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  }
}
```

<h3 id="updaterepository_20-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[DockerGroupRepositoryApiRequest](#schemadockergrouprepositoryapirequest)|false|none|

<h3 id="updaterepository_20-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_20

<a id="opIdcreateRepository_20"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/docker/group \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/docker/group");
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

r = requests.post('/service/rest/v1/repositories/docker/group', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ],
    "writableMember": "string"
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/docker/group',
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

`POST /v1/repositories/docker/group`

*Create Docker group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ],
    "writableMember": "string"
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  }
}
```

<h3 id="createrepository_20-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DockerGroupRepositoryApiRequest](#schemadockergrouprepositoryapirequest)|false|none|

<h3 id="createrepository_20-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_22

<a id="opIdgetRepository_22"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/docker/hosted/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/docker/hosted/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/docker/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/docker/hosted/{repositoryName}',
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

`GET /v1/repositories/docker/hosted/{repositoryName}`

*Get repository*

<h3 id="getrepository_22-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  }
}
```

<h3 id="getrepository_22-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[DockerHostedApiRepository](#schemadockerhostedapirepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_21

<a id="opIdupdateRepository_21"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/docker/hosted/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/docker/hosted/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/docker/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once",
    "latestPolicy": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/docker/hosted/{repositoryName}',
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

`PUT /v1/repositories/docker/hosted/{repositoryName}`

*Update Docker hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once",
    "latestPolicy": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  }
}
```

<h3 id="updaterepository_21-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[DockerHostedRepositoryApiRequest](#schemadockerhostedrepositoryapirequest)|false|none|

<h3 id="updaterepository_21-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_21

<a id="opIdcreateRepository_21"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/docker/hosted \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/docker/hosted");
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

r = requests.post('/service/rest/v1/repositories/docker/hosted', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once",
    "latestPolicy": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/docker/hosted',
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

`POST /v1/repositories/docker/hosted`

*Create Docker hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once",
    "latestPolicy": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  }
}
```

<h3 id="createrepository_21-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DockerHostedRepositoryApiRequest](#schemadockerhostedrepositoryapirequest)|false|none|

<h3 id="createrepository_21-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_23

<a id="opIdgetRepository_23"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/docker/proxy/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/docker/proxy/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/docker/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/docker/proxy/{repositoryName}',
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

`GET /v1/repositories/docker/proxy/{repositoryName}`

*Get repository*

<h3 id="getrepository_23-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  },
  "dockerProxy": {
    "indexType": "HUB",
    "indexUrl": "string",
    "cacheForeignLayers": true,
    "foreignLayerUrlWhitelist": [
      "string"
    ]
  }
}
```

<h3 id="getrepository_23-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[DockerProxyApiRepository](#schemadockerproxyapirepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_22

<a id="opIdupdateRepository_22"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/docker/proxy/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/docker/proxy/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/docker/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  },
  "dockerProxy": {
    "indexType": "HUB",
    "indexUrl": "string",
    "cacheForeignLayers": true,
    "foreignLayerUrlWhitelist": [
      "string"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/docker/proxy/{repositoryName}',
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

`PUT /v1/repositories/docker/proxy/{repositoryName}`

*Update Docker proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  },
  "dockerProxy": {
    "indexType": "HUB",
    "indexUrl": "string",
    "cacheForeignLayers": true,
    "foreignLayerUrlWhitelist": [
      "string"
    ]
  }
}
```

<h3 id="updaterepository_22-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[DockerProxyRepositoryApiRequest](#schemadockerproxyrepositoryapirequest)|false|none|

<h3 id="updaterepository_22-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_22

<a id="opIdcreateRepository_22"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/docker/proxy \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/docker/proxy");
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

r = requests.post('/service/rest/v1/repositories/docker/proxy', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  },
  "dockerProxy": {
    "indexType": "HUB",
    "indexUrl": "string",
    "cacheForeignLayers": true,
    "foreignLayerUrlWhitelist": [
      "string"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/docker/proxy',
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

`POST /v1/repositories/docker/proxy`

*Create Docker proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  },
  "dockerProxy": {
    "indexType": "HUB",
    "indexUrl": "string",
    "cacheForeignLayers": true,
    "foreignLayerUrlWhitelist": [
      "string"
    ]
  }
}
```

<h3 id="createrepository_22-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DockerProxyRepositoryApiRequest](#schemadockerproxyrepositoryapirequest)|false|none|

<h3 id="createrepository_22-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_23

<a id="opIdcreateRepository_23"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/pypi/group \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/pypi/group");
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

r = requests.post('/service/rest/v1/repositories/pypi/group', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/pypi/group',
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

`POST /v1/repositories/pypi/group`

*Create PyPI group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="createrepository_23-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PypiGroupRepositoryApiRequest](#schemapypigrouprepositoryapirequest)|false|none|

<h3 id="createrepository_23-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_24

<a id="opIdgetRepository_24"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/pypi/group/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/pypi/group/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/pypi/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/pypi/group/{repositoryName}',
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

`GET /v1/repositories/pypi/group/{repositoryName}`

*Get repository*

<h3 id="getrepository_24-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="getrepository_24-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiGroupRepository](#schemasimpleapigrouprepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_23

<a id="opIdupdateRepository_23"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/pypi/group/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/pypi/group/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/pypi/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/pypi/group/{repositoryName}',
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

`PUT /v1/repositories/pypi/group/{repositoryName}`

*Update PyPI group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="updaterepository_23-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[PypiGroupRepositoryApiRequest](#schemapypigrouprepositoryapirequest)|false|none|

<h3 id="updaterepository_23-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_24

<a id="opIdcreateRepository_24"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/pypi/hosted \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/pypi/hosted");
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

r = requests.post('/service/rest/v1/repositories/pypi/hosted', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/pypi/hosted',
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

`POST /v1/repositories/pypi/hosted`

*Create PyPI hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="createrepository_24-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PypiHostedRepositoryApiRequest](#schemapypihostedrepositoryapirequest)|false|none|

<h3 id="createrepository_24-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_25

<a id="opIdgetRepository_25"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/pypi/hosted/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/pypi/hosted/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/pypi/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/pypi/hosted/{repositoryName}',
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

`GET /v1/repositories/pypi/hosted/{repositoryName}`

*Get repository*

<h3 id="getrepository_25-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="getrepository_25-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiHostedRepository](#schemasimpleapihostedrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_24

<a id="opIdupdateRepository_24"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/pypi/hosted/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/pypi/hosted/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/pypi/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/pypi/hosted/{repositoryName}',
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

`PUT /v1/repositories/pypi/hosted/{repositoryName}`

*Update PyPI hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="updaterepository_24-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[PypiHostedRepositoryApiRequest](#schemapypihostedrepositoryapirequest)|false|none|

<h3 id="updaterepository_24-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_25

<a id="opIdcreateRepository_25"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/pypi/proxy \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/pypi/proxy");
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

r = requests.post('/service/rest/v1/repositories/pypi/proxy', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "pypi": {
    "removeQuarantined": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/pypi/proxy',
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

`POST /v1/repositories/pypi/proxy`

*Create PyPI proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "pypi": {
    "removeQuarantined": true
  }
}
```

<h3 id="createrepository_25-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PypiProxyRepositoryApiRequest](#schemapypiproxyrepositoryapirequest)|false|none|

<h3 id="createrepository_25-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_26

<a id="opIdgetRepository_26"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/pypi/proxy/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/pypi/proxy/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/pypi/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/pypi/proxy/{repositoryName}',
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

`GET /v1/repositories/pypi/proxy/{repositoryName}`

*Get repository*

<h3 id="getrepository_26-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="getrepository_26-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiProxyRepository](#schemasimpleapiproxyrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_25

<a id="opIdupdateRepository_25"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/pypi/proxy/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/pypi/proxy/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/pypi/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "pypi": {
    "removeQuarantined": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/pypi/proxy/{repositoryName}',
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

`PUT /v1/repositories/pypi/proxy/{repositoryName}`

*Update PyPI proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "pypi": {
    "removeQuarantined": true
  }
}
```

<h3 id="updaterepository_25-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[PypiProxyRepositoryApiRequest](#schemapypiproxyrepositoryapirequest)|false|none|

<h3 id="updaterepository_25-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_26

<a id="opIdcreateRepository_26"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/conda/proxy \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/conda/proxy");
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

r = requests.post('/service/rest/v1/repositories/conda/proxy', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/conda/proxy',
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

`POST /v1/repositories/conda/proxy`

*Create conda proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="createrepository_26-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CondaProxyRepositoryApiRequest](#schemacondaproxyrepositoryapirequest)|false|none|

<h3 id="createrepository_26-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Feature is disabled in High Availability|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_27

<a id="opIdgetRepository_27"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/conda/proxy/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/conda/proxy/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/conda/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/conda/proxy/{repositoryName}',
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

`GET /v1/repositories/conda/proxy/{repositoryName}`

*Get repository*

<h3 id="getrepository_27-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="getrepository_27-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiProxyRepository](#schemasimpleapiproxyrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_26

<a id="opIdupdateRepository_26"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/conda/proxy/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/conda/proxy/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/conda/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/conda/proxy/{repositoryName}',
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

`PUT /v1/repositories/conda/proxy/{repositoryName}`

*Update conda proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="updaterepository_26-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[CondaProxyRepositoryApiRequest](#schemacondaproxyrepositoryapirequest)|false|none|

<h3 id="updaterepository_26-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_27

<a id="opIdcreateRepository_27"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/conan/hosted \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/conan/hosted");
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

r = requests.post('/service/rest/v1/repositories/conan/hosted', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/conan/hosted',
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

`POST /v1/repositories/conan/hosted`

*Create Conan hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="createrepository_27-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConanHostedRepositoryApiRequest](#schemaconanhostedrepositoryapirequest)|false|none|

<h3 id="createrepository_27-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_28

<a id="opIdgetRepository_28"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/conan/hosted/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/conan/hosted/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/conan/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/conan/hosted/{repositoryName}',
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

`GET /v1/repositories/conan/hosted/{repositoryName}`

*Get repository*

<h3 id="getrepository_28-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="getrepository_28-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiHostedRepository](#schemasimpleapihostedrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_27

<a id="opIdupdateRepository_27"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/conan/hosted/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/conan/hosted/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/conan/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/conan/hosted/{repositoryName}',
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

`PUT /v1/repositories/conan/hosted/{repositoryName}`

*Update Conan hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="updaterepository_27-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[ConanHostedRepositoryApiRequest](#schemaconanhostedrepositoryapirequest)|false|none|

<h3 id="updaterepository_27-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_28

<a id="opIdcreateRepository_28"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/conan/proxy \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/conan/proxy");
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

r = requests.post('/service/rest/v1/repositories/conan/proxy', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "conanProxy": {
    "conanVersion": "V1"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/conan/proxy',
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

`POST /v1/repositories/conan/proxy`

*Create Conan proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "conanProxy": {
    "conanVersion": "V1"
  }
}
```

<h3 id="createrepository_28-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConanProxyRepositoryApiRequest](#schemaconanproxyrepositoryapirequest)|false|none|

<h3 id="createrepository_28-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Feature is disabled in High Availability|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_29

<a id="opIdgetRepository_29"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/conan/proxy/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/conan/proxy/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/conan/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/conan/proxy/{repositoryName}',
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

`GET /v1/repositories/conan/proxy/{repositoryName}`

*Get repository*

<h3 id="getrepository_29-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="getrepository_29-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiProxyRepository](#schemasimpleapiproxyrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_28

<a id="opIdupdateRepository_28"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/conan/proxy/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/conan/proxy/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/conan/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "conanProxy": {
    "conanVersion": "V1"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/conan/proxy/{repositoryName}',
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

`PUT /v1/repositories/conan/proxy/{repositoryName}`

*Update Conan proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "conanProxy": {
    "conanVersion": "V1"
  }
}
```

<h3 id="updaterepository_28-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[ConanProxyRepositoryApiRequest](#schemaconanproxyrepositoryapirequest)|false|none|

<h3 id="updaterepository_28-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_29

<a id="opIdcreateRepository_29"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/gitlfs/hosted \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/gitlfs/hosted");
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

r = requests.post('/service/rest/v1/repositories/gitlfs/hosted', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/gitlfs/hosted',
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

`POST /v1/repositories/gitlfs/hosted`

*Create Git LFS hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="createrepository_29-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GitLfsHostedRepositoryApiRequest](#schemagitlfshostedrepositoryapirequest)|false|none|

<h3 id="createrepository_29-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_30

<a id="opIdgetRepository_30"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/gitlfs/hosted/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/gitlfs/hosted/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/gitlfs/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/gitlfs/hosted/{repositoryName}',
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

`GET /v1/repositories/gitlfs/hosted/{repositoryName}`

*Get repository*

<h3 id="getrepository_30-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="getrepository_30-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiHostedRepository](#schemasimpleapihostedrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_29

<a id="opIdupdateRepository_29"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/gitlfs/hosted/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/gitlfs/hosted/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/gitlfs/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/gitlfs/hosted/{repositoryName}',
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

`PUT /v1/repositories/gitlfs/hosted/{repositoryName}`

*Update Git LFS hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="updaterepository_29-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[GitLfsHostedRepositoryApiRequest](#schemagitlfshostedrepositoryapirequest)|false|none|

<h3 id="updaterepository_29-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_30

<a id="opIdcreateRepository_30"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/r/group \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/r/group");
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

r = requests.post('/service/rest/v1/repositories/r/group', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/r/group',
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

`POST /v1/repositories/r/group`

*Create R group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="createrepository_30-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RGroupRepositoryApiRequest](#schemargrouprepositoryapirequest)|false|none|

<h3 id="createrepository_30-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Feature is disabled in High Availability|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_31

<a id="opIdgetRepository_31"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/r/group/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/r/group/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/r/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/r/group/{repositoryName}',
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

`GET /v1/repositories/r/group/{repositoryName}`

*Get repository*

<h3 id="getrepository_31-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="getrepository_31-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiGroupRepository](#schemasimpleapigrouprepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_30

<a id="opIdupdateRepository_30"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/r/group/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/r/group/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/r/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/r/group/{repositoryName}',
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

`PUT /v1/repositories/r/group/{repositoryName}`

*Update R group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="updaterepository_30-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[RGroupRepositoryApiRequest](#schemargrouprepositoryapirequest)|false|none|

<h3 id="updaterepository_30-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_31

<a id="opIdcreateRepository_31"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/r/hosted \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/r/hosted");
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

r = requests.post('/service/rest/v1/repositories/r/hosted', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/r/hosted',
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

`POST /v1/repositories/r/hosted`

*Create R hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="createrepository_31-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RHostedRepositoryApiRequest](#schemarhostedrepositoryapirequest)|false|none|

<h3 id="createrepository_31-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Feature is disabled in High Availability|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_32

<a id="opIdgetRepository_32"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/r/hosted/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/r/hosted/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/r/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/r/hosted/{repositoryName}',
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

`GET /v1/repositories/r/hosted/{repositoryName}`

*Get repository*

<h3 id="getrepository_32-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="getrepository_32-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiHostedRepository](#schemasimpleapihostedrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_31

<a id="opIdupdateRepository_31"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/r/hosted/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/r/hosted/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/r/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/r/hosted/{repositoryName}',
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

`PUT /v1/repositories/r/hosted/{repositoryName}`

*Update R hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="updaterepository_31-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[RHostedRepositoryApiRequest](#schemarhostedrepositoryapirequest)|false|none|

<h3 id="updaterepository_31-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_32

<a id="opIdcreateRepository_32"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/r/proxy \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/r/proxy");
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

r = requests.post('/service/rest/v1/repositories/r/proxy', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/r/proxy',
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

`POST /v1/repositories/r/proxy`

*Create R proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="createrepository_32-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RProxyRepositoryApiRequest](#schemarproxyrepositoryapirequest)|false|none|

<h3 id="createrepository_32-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Feature is disabled in High Availability|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_33

<a id="opIdgetRepository_33"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/r/proxy/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/r/proxy/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/r/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/r/proxy/{repositoryName}',
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

`GET /v1/repositories/r/proxy/{repositoryName}`

*Get repository*

<h3 id="getrepository_33-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="getrepository_33-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiProxyRepository](#schemasimpleapiproxyrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_32

<a id="opIdupdateRepository_32"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/r/proxy/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/r/proxy/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/r/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/r/proxy/{repositoryName}',
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

`PUT /v1/repositories/r/proxy/{repositoryName}`

*Update R proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="updaterepository_32-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[RProxyRepositoryApiRequest](#schemarproxyrepositoryapirequest)|false|none|

<h3 id="updaterepository_32-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_33

<a id="opIdcreateRepository_33"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/cocoapods/proxy \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/cocoapods/proxy");
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

r = requests.post('/service/rest/v1/repositories/cocoapods/proxy', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/cocoapods/proxy',
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

`POST /v1/repositories/cocoapods/proxy`

*Create Cocoapods proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="createrepository_33-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CocoapodsProxyRepositoryApiRequest](#schemacocoapodsproxyrepositoryapirequest)|false|none|

<h3 id="createrepository_33-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Feature is disabled in High Availability|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_34

<a id="opIdgetRepository_34"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/cocoapods/proxy/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/cocoapods/proxy/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/cocoapods/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/cocoapods/proxy/{repositoryName}',
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

`GET /v1/repositories/cocoapods/proxy/{repositoryName}`

*Get repository*

<h3 id="getrepository_34-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="getrepository_34-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiProxyRepository](#schemasimpleapiproxyrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_33

<a id="opIdupdateRepository_33"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/cocoapods/proxy/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/cocoapods/proxy/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/cocoapods/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/cocoapods/proxy/{repositoryName}',
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

`PUT /v1/repositories/cocoapods/proxy/{repositoryName}`

*Update Cocoapods proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="updaterepository_33-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[CocoapodsProxyRepositoryApiRequest](#schemacocoapodsproxyrepositoryapirequest)|false|none|

<h3 id="updaterepository_33-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_34

<a id="opIdcreateRepository_34"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/go/group \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/go/group");
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

r = requests.post('/service/rest/v1/repositories/go/group', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/go/group',
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

`POST /v1/repositories/go/group`

*Create a Go group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="createrepository_34-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GolangGroupRepositoryApiRequest](#schemagolanggrouprepositoryapirequest)|false|none|

<h3 id="createrepository_34-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Feature is disabled in High Availability|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_35

<a id="opIdgetRepository_35"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/go/group/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/go/group/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/go/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/go/group/{repositoryName}',
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

`GET /v1/repositories/go/group/{repositoryName}`

*Get repository*

<h3 id="getrepository_35-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="getrepository_35-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiGroupRepository](#schemasimpleapigrouprepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_34

<a id="opIdupdateRepository_34"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/go/group/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/go/group/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/go/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/go/group/{repositoryName}',
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

`PUT /v1/repositories/go/group/{repositoryName}`

*Update a Go group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="updaterepository_34-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[GolangGroupRepositoryApiRequest](#schemagolanggrouprepositoryapirequest)|false|none|

<h3 id="updaterepository_34-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_35

<a id="opIdcreateRepository_35"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/go/proxy \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/go/proxy");
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

r = requests.post('/service/rest/v1/repositories/go/proxy', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/go/proxy',
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

`POST /v1/repositories/go/proxy`

*Create a Go proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="createrepository_35-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GolangProxyRepositoryApiRequest](#schemagolangproxyrepositoryapirequest)|false|none|

<h3 id="createrepository_35-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Feature is disabled in High Availability|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_36

<a id="opIdgetRepository_36"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/go/proxy/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/go/proxy/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/go/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/go/proxy/{repositoryName}',
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

`GET /v1/repositories/go/proxy/{repositoryName}`

*Get repository*

<h3 id="getrepository_36-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="getrepository_36-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiProxyRepository](#schemasimpleapiproxyrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_35

<a id="opIdupdateRepository_35"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/go/proxy/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/go/proxy/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/go/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/go/proxy/{repositoryName}',
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

`PUT /v1/repositories/go/proxy/{repositoryName}`

*Update a Go proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="updaterepository_35-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[GolangProxyRepositoryApiRequest](#schemagolangproxyrepositoryapirequest)|false|none|

<h3 id="updaterepository_35-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_36

<a id="opIdcreateRepository_36"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/p2/proxy \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/p2/proxy");
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

r = requests.post('/service/rest/v1/repositories/p2/proxy', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/p2/proxy',
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

`POST /v1/repositories/p2/proxy`

*Create p2 proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="createrepository_36-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[P2ProxyRepositoryApiRequest](#schemap2proxyrepositoryapirequest)|false|none|

<h3 id="createrepository_36-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Feature is disabled in High Availability|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_37

<a id="opIdgetRepository_37"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/p2/proxy/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/p2/proxy/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/p2/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/p2/proxy/{repositoryName}',
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

`GET /v1/repositories/p2/proxy/{repositoryName}`

*Get repository*

<h3 id="getrepository_37-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="getrepository_37-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiProxyRepository](#schemasimpleapiproxyrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_36

<a id="opIdupdateRepository_36"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/p2/proxy/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/p2/proxy/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/p2/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/p2/proxy/{repositoryName}',
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

`PUT /v1/repositories/p2/proxy/{repositoryName}`

*Update p2 proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="updaterepository_36-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[P2ProxyRepositoryApiRequest](#schemap2proxyrepositoryapirequest)|false|none|

<h3 id="updaterepository_36-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_37

<a id="opIdcreateRepository_37"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/helm/hosted \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/helm/hosted");
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

r = requests.post('/service/rest/v1/repositories/helm/hosted', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/helm/hosted',
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

`POST /v1/repositories/helm/hosted`

*Create Helm hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="createrepository_37-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[HelmHostedRepositoryApiRequest](#schemahelmhostedrepositoryapirequest)|false|none|

<h3 id="createrepository_37-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Feature is disabled in High Availability|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_38

<a id="opIdgetRepository_38"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/helm/hosted/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/helm/hosted/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/helm/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/helm/hosted/{repositoryName}',
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

`GET /v1/repositories/helm/hosted/{repositoryName}`

*Get repository*

<h3 id="getrepository_38-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="getrepository_38-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiHostedRepository](#schemasimpleapihostedrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_37

<a id="opIdupdateRepository_37"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/helm/hosted/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/helm/hosted/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/helm/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/helm/hosted/{repositoryName}',
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

`PUT /v1/repositories/helm/hosted/{repositoryName}`

*Update Helm hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="updaterepository_37-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[HelmHostedRepositoryApiRequest](#schemahelmhostedrepositoryapirequest)|false|none|

<h3 id="updaterepository_37-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_38

<a id="opIdcreateRepository_38"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/helm/proxy \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/helm/proxy");
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

r = requests.post('/service/rest/v1/repositories/helm/proxy', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/helm/proxy',
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

`POST /v1/repositories/helm/proxy`

*Create Helm proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="createrepository_38-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[HelmProxyRepositoryApiRequest](#schemahelmproxyrepositoryapirequest)|false|none|

<h3 id="createrepository_38-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|405|[Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)|Feature is disabled in High Availability|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_39

<a id="opIdgetRepository_39"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/helm/proxy/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/helm/proxy/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/helm/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/helm/proxy/{repositoryName}',
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

`GET /v1/repositories/helm/proxy/{repositoryName}`

*Get repository*

<h3 id="getrepository_39-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="getrepository_39-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiProxyRepository](#schemasimpleapiproxyrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_38

<a id="opIdupdateRepository_38"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/helm/proxy/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/helm/proxy/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/helm/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/helm/proxy/{repositoryName}',
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

`PUT /v1/repositories/helm/proxy/{repositoryName}`

*Update Helm proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="updaterepository_38-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[HelmProxyRepositoryApiRequest](#schemahelmproxyrepositoryapirequest)|false|none|

<h3 id="updaterepository_38-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_39

<a id="opIdcreateRepository_39"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/cargo/group \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/cargo/group");
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

r = requests.post('/service/rest/v1/repositories/cargo/group', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/cargo/group',
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

`POST /v1/repositories/cargo/group`

*Create cargo group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="createrepository_39-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CargoGroupRepositoryApiRequest](#schemacargogrouprepositoryapirequest)|false|none|

<h3 id="createrepository_39-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_40

<a id="opIdgetRepository_40"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/cargo/group/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/cargo/group/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/cargo/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/cargo/group/{repositoryName}',
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

`GET /v1/repositories/cargo/group/{repositoryName}`

*Get repository*

<h3 id="getrepository_40-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="getrepository_40-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiGroupRepository](#schemasimpleapigrouprepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_39

<a id="opIdupdateRepository_39"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/cargo/group/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/cargo/group/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/cargo/group/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/cargo/group/{repositoryName}',
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

`PUT /v1/repositories/cargo/group/{repositoryName}`

*Update cargo group repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}
```

<h3 id="updaterepository_39-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[CargoGroupRepositoryApiRequest](#schemacargogrouprepositoryapirequest)|false|none|

<h3 id="updaterepository_39-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_40

<a id="opIdcreateRepository_40"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/cargo/hosted \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/cargo/hosted");
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

r = requests.post('/service/rest/v1/repositories/cargo/hosted', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/cargo/hosted',
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

`POST /v1/repositories/cargo/hosted`

*Create cargo hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="createrepository_40-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CargoHostedRepositoryApiRequest](#schemacargohostedrepositoryapirequest)|false|none|

<h3 id="createrepository_40-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_41

<a id="opIdgetRepository_41"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/cargo/hosted/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/cargo/hosted/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/cargo/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/cargo/hosted/{repositoryName}',
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

`GET /v1/repositories/cargo/hosted/{repositoryName}`

*Get repository*

<h3 id="getrepository_41-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="getrepository_41-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiHostedRepository](#schemasimpleapihostedrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_40

<a id="opIdupdateRepository_40"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/cargo/hosted/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/cargo/hosted/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/cargo/hosted/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/cargo/hosted/{repositoryName}',
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

`PUT /v1/repositories/cargo/hosted/{repositoryName}`

*Update cargo hosted repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}
```

<h3 id="updaterepository_40-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[CargoHostedRepositoryApiRequest](#schemacargohostedrepositoryapirequest)|false|none|

<h3 id="updaterepository_40-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRepository_41

<a id="opIdcreateRepository_41"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/repositories/cargo/proxy \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/cargo/proxy");
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

r = requests.post('/service/rest/v1/repositories/cargo/proxy', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/cargo/proxy',
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

`POST /v1/repositories/cargo/proxy`

*Create cargo proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="createrepository_41-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CargoProxyRepositoryApiRequest](#schemacargoproxyrepositoryapirequest)|false|none|

<h3 id="createrepository_41-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Repository created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRepository_42

<a id="opIdgetRepository_42"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/repositories/cargo/proxy/{repositoryName} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/cargo/proxy/{repositoryName}");
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

r = requests.get('/service/rest/v1/repositories/cargo/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/repositories/cargo/proxy/{repositoryName}',
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

`GET /v1/repositories/cargo/proxy/{repositoryName}`

*Get repository*

<h3 id="getrepository_42-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="getrepository_42-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[SimpleApiProxyRepository](#schemasimpleapiproxyrepository)|

<aside class="success">
This operation does not require authentication
</aside>

## updateRepository_41

<a id="opIdupdateRepository_41"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/repositories/cargo/proxy/{repositoryName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/repositories/cargo/proxy/{repositoryName}");
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

r = requests.put('/service/rest/v1/repositories/cargo/proxy/{repositoryName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/repositories/cargo/proxy/{repositoryName}',
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

`PUT /v1/repositories/cargo/proxy/{repositoryName}`

*Update cargo proxy repository*

> Body parameter

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}
```

<h3 id="updaterepository_41-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|Name of the repository to update|
|body|body|[CargoProxyRepositoryApiRequest](#schemacargoproxyrepositoryapirequest)|false|none|

<h3 id="updaterepository_41-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-content-selectors">Content selectors</h1>

## getContentSelector

<a id="opIdgetContentSelector"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/content-selectors/{name} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/content-selectors/{name}");
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

r = requests.get('/service/rest/v1/security/content-selectors/{name}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/content-selectors/{name}',
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

`GET /v1/security/content-selectors/{name}`

*Get a content selector by name*

<h3 id="getcontentselector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The content selector name|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "type": "csel",
  "description": "string",
  "expression": "format == \"maven2\" and path =^ \"/org/sonatype/nexus\""
}
```

<h3 id="getcontentselector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ContentSelectorApiResponse](#schemacontentselectorapiresponse)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to read the content selector|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateContentSelector

<a id="opIdupdateContentSelector"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/security/content-selectors/{name} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/content-selectors/{name}");
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

r = requests.put('/service/rest/v1/security/content-selectors/{name}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "description": "string",
  "expression": "format == \"maven2\" and path =^ \"/org/sonatype/nexus\""
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/content-selectors/{name}',
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

`PUT /v1/security/content-selectors/{name}`

*Update a content selector*

> Body parameter

```json
{
  "description": "string",
  "expression": "format == \"maven2\" and path =^ \"/org/sonatype/nexus\""
}
```

<h3 id="updatecontentselector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The content selector name|
|body|body|[ContentSelectorApiUpdateRequest](#schemacontentselectorapiupdaterequest)|false|none|

<h3 id="updatecontentselector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Content selector updated successfully|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to update the content selector|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteContentSelector

<a id="opIddeleteContentSelector"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/security/content-selectors/{name}

```

```java
URL obj = new URL("/service/rest/v1/security/content-selectors/{name}");
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

r = requests.delete('/service/rest/v1/security/content-selectors/{name}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/security/content-selectors/{name}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/security/content-selectors/{name}`

*Delete a content selector*

<h3 id="deletecontentselector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="deletecontentselector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Content selector deleted successfully|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to delete the content selector|None|

<aside class="success">
This operation does not require authentication
</aside>

## getContentSelectors

<a id="opIdgetContentSelectors"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/content-selectors \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/content-selectors");
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

r = requests.get('/service/rest/v1/security/content-selectors', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/content-selectors',
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

`GET /v1/security/content-selectors`

*List content selectors*

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "type": "csel",
    "description": "string",
    "expression": "format == \"maven2\" and path =^ \"/org/sonatype/nexus\""
  }
]
```

<h3 id="getcontentselectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to read content selectors|None|

<h3 id="getcontentselectors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ContentSelectorApiResponse](#schemacontentselectorapiresponse)]|false|none|none|
|» name|string|false|none|The content selector name cannot be changed after creation|
|» type|string|false|none|The type of content selector the backend is using|
|» description|string|false|none|A human-readable description|
|» expression|string|false|none|The expression used to identify content|

#### Enumerated Values

|Property|Value|
|---|---|
|type|csel|
|type|jexl|

<aside class="success">
This operation does not require authentication
</aside>

## createContentSelector

<a id="opIdcreateContentSelector"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/security/content-selectors \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/content-selectors");
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

r = requests.post('/service/rest/v1/security/content-selectors', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "expression": "format == \"maven2\" and path =^ \"/org/sonatype/nexus\""
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/content-selectors',
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

`POST /v1/security/content-selectors`

*Create a new content selector*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "expression": "format == \"maven2\" and path =^ \"/org/sonatype/nexus\""
}
```

<h3 id="createcontentselector-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ContentSelectorApiCreateRequest](#schemacontentselectorapicreaterequest)|false|none|

<h3 id="createcontentselector-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Content selector successfully created|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid request|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to create content selectors|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-routing-rules">Routing rules</h1>

## getRoutingRule

<a id="opIdgetRoutingRule"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/routing-rules/{name} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/routing-rules/{name}");
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

r = requests.get('/service/rest/v1/routing-rules/{name}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/routing-rules/{name}',
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

`GET /v1/routing-rules/{name}`

*Get a single routing rule*

<h3 id="getroutingrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the routing rule to get|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "description": "string",
  "mode": "BLOCK",
  "matchers": [
    "string"
  ]
}
```

<h3 id="getroutingrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[RoutingRuleXO](#schemaroutingrulexo)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to read routing rules|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Routing rule not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateRoutingRule

<a id="opIdupdateRoutingRule"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/routing-rules/{name} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/routing-rules/{name}");
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

r = requests.put('/service/rest/v1/routing-rules/{name}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "mode": "BLOCK",
  "matchers": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/routing-rules/{name}',
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

`PUT /v1/routing-rules/{name}`

*Update a single routing rule*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "mode": "BLOCK",
  "matchers": [
    "string"
  ]
}
```

<h3 id="updateroutingrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the routing rule to update|
|body|body|[RoutingRuleXO](#schemaroutingrulexo)|true|A routing rule configuration|

<h3 id="updateroutingrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Routing rule was successfully updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Another routing rule with the same name already exists or required parameters missing|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to edit routing rules|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Routing rule not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteRoutingRule

<a id="opIddeleteRoutingRule"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/routing-rules/{name}

```

```java
URL obj = new URL("/service/rest/v1/routing-rules/{name}");
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

r = requests.delete('/service/rest/v1/routing-rules/{name}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/routing-rules/{name}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/routing-rules/{name}`

*Delete a single routing rule*

<h3 id="deleteroutingrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the routing rule to delete|

<h3 id="deleteroutingrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Routing rule was successfully deleted|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to delete routing rules|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Routing rule not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRoutingRules

<a id="opIdgetRoutingRules"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/routing-rules \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/routing-rules");
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

r = requests.get('/service/rest/v1/routing-rules', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/routing-rules',
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

`GET /v1/routing-rules`

*List routing rules*

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "description": "string",
    "mode": "BLOCK",
    "matchers": [
      "string"
    ]
  }
]
```

<h3 id="getroutingrules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to read routing rules|None|

<h3 id="getroutingrules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RoutingRuleXO](#schemaroutingrulexo)]|false|none|none|
|» name|string|false|none|none|
|» description|string|false|none|none|
|» mode|string|false|none|Determines what should be done with requests when their path matches any of the matchers|
|» matchers|[string]|false|none|Regular expressions used to identify request paths that are allowed or blocked (depending on mode)|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|BLOCK|
|mode|ALLOW|

<aside class="success">
This operation does not require authentication
</aside>

## createRoutingRule

<a id="opIdcreateRoutingRule"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/routing-rules \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/routing-rules");
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

r = requests.post('/service/rest/v1/routing-rules', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "mode": "BLOCK",
  "matchers": [
    "string"
  ]
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/routing-rules',
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

`POST /v1/routing-rules`

*Create a single routing rule*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "mode": "BLOCK",
  "matchers": [
    "string"
  ]
}
```

<h3 id="createroutingrule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RoutingRuleXO](#schemaroutingrulexo)|true|A routing rule configuration|

<h3 id="createroutingrule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Routing rule was successfully created|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|A routing rule with the same name already exists or required parameters missing|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions to create routing rule|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-formats">Formats</h1>

## get_1

<a id="opIdget_1"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/formats/{format}/upload-specs \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/formats/{format}/upload-specs");
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

r = requests.get('/service/rest/v1/formats/{format}/upload-specs', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/formats/{format}/upload-specs',
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

`GET /v1/formats/{format}/upload-specs`

*Get upload field requirements for the desired format*

<h3 id="get_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|The desired repository format|

> Example responses

> 200 Response

```json
{
  "format": "string",
  "multipleUpload": true,
  "componentFields": [
    {
      "name": "string",
      "type": "string",
      "description": "string",
      "optional": true,
      "group": "string"
    }
  ],
  "assetFields": [
    {
      "name": "string",
      "type": "string",
      "description": "string",
      "optional": true,
      "group": "string"
    }
  ]
}
```

<h3 id="get_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[UploadDefinitionXO](#schemauploaddefinitionxo)|

<aside class="success">
This operation does not require authentication
</aside>

## get_2

<a id="opIdget_2"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/formats/upload-specs \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/formats/upload-specs");
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

r = requests.get('/service/rest/v1/formats/upload-specs', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/formats/upload-specs',
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

`GET /v1/formats/upload-specs`

*Get upload field requirements for each supported format*

> Example responses

> 200 Response

```json
[
  {
    "format": "string",
    "multipleUpload": true,
    "componentFields": [
      {
        "name": "string",
        "type": "string",
        "description": "string",
        "optional": true,
        "group": "string"
      }
    ],
    "assetFields": [
      {
        "name": "string",
        "type": "string",
        "description": "string",
        "optional": true,
        "group": "string"
      }
    ]
  }
]
```

<h3 id="get_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="get_2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UploadDefinitionXO](#schemauploaddefinitionxo)]|false|none|none|
|» format|string|false|none|none|
|» multipleUpload|boolean|false|none|none|
|» componentFields|[[UploadFieldDefinitionXO](#schemauploadfielddefinitionxo)]|false|none|none|
|»» name|string|false|none|none|
|»» type|string|false|none|none|
|»» description|string|false|none|none|
|»» optional|boolean|false|none|none|
|»» group|string|false|none|none|
|» assetFields|[[UploadFieldDefinitionXO](#schemauploadfielddefinitionxo)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-search">Search</h1>

## searchAssets

<a id="opIdsearchAssets"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/search/assets \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/search/assets");
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

r = requests.get('/service/rest/v1/search/assets', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/search/assets',
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

`GET /v1/search/assets`

*Search assets*

All searches require at least one criterion of at least three characters before a trailing wildcard (\*) and cannot start with a wildcard (\*). Enclose your criteria in quotation marks to search an exact phrase; otherwise, search criteria will be split by any commas, spaces, dashes, or forward slashes.

<h3 id="searchassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|continuationToken|query|string|false|A token returned by a prior request. If present, the next page of results are returned|
|sort|query|string|false|The field to sort the results against, if left empty, a sort based on match weight will be used.|
|direction|query|string|false|The direction to sort records in, defaults to ascending ('asc') for all sort fields, except version, which defaults to descending ('desc')|
|timeout|query|integer(int32)|false|How long to wait for search results in seconds. If this value is not provided, the system default timeout will be used.|
|q|query|string|false|Query by keyword|
|repository|query|string|false|Repository name|
|format|query|string|false|Query by format|
|group|query|string|false|Component group|
|name|query|string|false|Component name|
|version|query|string|false|Component version|
|prerelease|query|string|false|Prerelease version flag|
|md5|query|string|false|Specific MD5 hash of component's asset|
|sha1|query|string|false|Specific SHA-1 hash of component's asset|
|sha256|query|string|false|Specific SHA-256 hash of component's asset|
|sha512|query|string|false|Specific SHA-512 hash of component's asset|
|conan.baseVersion|query|string|false|Conan base version|
|conan.channel|query|string|false|Conan channel|
|conan.revision|query|string|false|Conan recipe revision|
|conan.packageId|query|string|false|Conan package id|
|conan.packageRevision|query|string|false|Conan package revision|
|conan.baseVersion.strict|query|string|false|Conan base version strict|
|conan.revision.latest|query|string|false|Return latest revision|
|conan.settings.arch|query|string|false|Conan arch|
|conan.settings.os|query|string|false|Conan os|
|conan.settings.compiler|query|string|false|Conan compiler|
|conan.settings.compiler.version|query|string|false|Conan compiler version|
|conan.settings.compiler.runtime|query|string|false|Conan compiler runtime|
|docker.imageName|query|string|false|Docker image name|
|docker.imageTag|query|string|false|Docker image tag|
|docker.layerId|query|string|false|Docker layer ID|
|docker.contentDigest|query|string|false|Docker content digest|
|maven.groupId|query|string|false|Maven groupId|
|maven.artifactId|query|string|false|Maven artifactId|
|maven.baseVersion|query|string|false|Maven base version|
|maven.extension|query|string|false|Maven extension of component's asset|
|maven.classifier|query|string|false|Maven classifier of component's asset|
|gavec|query|string|false|Group asset version extension classifier|
|npm.scope|query|string|false|npm scope|
|npm.author|query|string|false|npm author|
|npm.description|query|string|false|npm description|
|npm.keywords|query|string|false|npm keywords|
|npm.license|query|string|false|npm license|
|npm.tagged_is|query|string|false|npm tagged is|
|npm.tagged_not|query|string|false|npm tagged not|
|nuget.id|query|string|false|NuGet id|
|nuget.tags|query|string|false|NuGet tags|
|nuget.title|query|string|false|NuGet title|
|nuget.authors|query|string|false|NuGet authors|
|nuget.description|query|string|false|NuGet description|
|nuget.summary|query|string|false|NuGet summary|
|p2.pluginName|query|string|false|p2 plugin name|
|pypi.classifiers|query|string|false|PyPI classifiers|
|pypi.description|query|string|false|PyPI description|
|pypi.keywords|query|string|false|PyPI keywords|
|pypi.summary|query|string|false|PyPI summary|
|rubygems.description|query|string|false|RubyGems description|
|rubygems.platform|query|string|false|RubyGems platform|
|rubygems.summary|query|string|false|RubyGems summary|
|tag|query|string|false|Component tag|
|yum.architecture|query|string|false|Yum architecture|
|yum.name|query|string|false|Yum package name|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|group|
|sort|name|
|sort|version|
|sort|repository|
|direction|asc|
|direction|desc|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "downloadUrl": "string",
      "path": "string",
      "id": "string",
      "repository": "string",
      "format": "string",
      "checksum": {
        "property1": {},
        "property2": {}
      },
      "contentType": "string",
      "lastModified": "2019-08-24T14:15:22Z",
      "lastDownloaded": "2019-08-24T14:15:22Z",
      "uploader": "string",
      "uploaderIp": "string",
      "fileSize": 0,
      "blobCreated": "2019-08-24T14:15:22Z",
      "blobStoreName": "string"
    }
  ],
  "continuationToken": "string"
}
```

<h3 id="searchassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[PageAssetXO](#schemapageassetxo)|

<aside class="success">
This operation does not require authentication
</aside>

## search

<a id="opIdsearch"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/search \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/search");
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

r = requests.get('/service/rest/v1/search', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/search',
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

`GET /v1/search`

*Search components*

All searches require at least one criterion of at least three characters before a trailing wildcard (\*) and cannot start with a wildcard (\*). Enclose your criteria in quotation marks to search an exact phrase; otherwise, search criteria will be split by any commas, spaces, dashes, or forward slashes.

<h3 id="search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|continuationToken|query|string|false|A token returned by a prior request. If present, the next page of results are returned|
|sort|query|string|false|The field to sort the results against, if left empty, a sort based on match weight will be used.|
|direction|query|string|false|The direction to sort records in, defaults to ascending ('asc') for all sort fields, except version, which defaults to descending ('desc')|
|timeout|query|integer(int32)|false|How long to wait for search results in seconds. If this value is not provided, the system default timeout will be used.|
|q|query|string|false|Query by keyword|
|repository|query|string|false|Repository name|
|format|query|string|false|Query by format|
|group|query|string|false|Component group|
|name|query|string|false|Component name|
|version|query|string|false|Component version|
|prerelease|query|string|false|Prerelease version flag|
|md5|query|string|false|Specific MD5 hash of component's asset|
|sha1|query|string|false|Specific SHA-1 hash of component's asset|
|sha256|query|string|false|Specific SHA-256 hash of component's asset|
|sha512|query|string|false|Specific SHA-512 hash of component's asset|
|conan.baseVersion|query|string|false|Conan base version|
|conan.channel|query|string|false|Conan channel|
|conan.revision|query|string|false|Conan recipe revision|
|conan.packageId|query|string|false|Conan package id|
|conan.packageRevision|query|string|false|Conan package revision|
|conan.baseVersion.strict|query|string|false|Conan base version strict|
|conan.revision.latest|query|string|false|Return latest revision|
|conan.settings.arch|query|string|false|Conan arch|
|conan.settings.os|query|string|false|Conan os|
|conan.settings.compiler|query|string|false|Conan compiler|
|conan.settings.compiler.version|query|string|false|Conan compiler version|
|conan.settings.compiler.runtime|query|string|false|Conan compiler runtime|
|docker.imageName|query|string|false|Docker image name|
|docker.imageTag|query|string|false|Docker image tag|
|docker.layerId|query|string|false|Docker layer ID|
|docker.contentDigest|query|string|false|Docker content digest|
|maven.groupId|query|string|false|Maven groupId|
|maven.artifactId|query|string|false|Maven artifactId|
|maven.baseVersion|query|string|false|Maven base version|
|maven.extension|query|string|false|Maven extension of component's asset|
|maven.classifier|query|string|false|Maven classifier of component's asset|
|gavec|query|string|false|Group asset version extension classifier|
|npm.scope|query|string|false|npm scope|
|npm.author|query|string|false|npm author|
|npm.description|query|string|false|npm description|
|npm.keywords|query|string|false|npm keywords|
|npm.license|query|string|false|npm license|
|npm.tagged_is|query|string|false|npm tagged is|
|npm.tagged_not|query|string|false|npm tagged not|
|nuget.id|query|string|false|NuGet id|
|nuget.tags|query|string|false|NuGet tags|
|nuget.title|query|string|false|NuGet title|
|nuget.authors|query|string|false|NuGet authors|
|nuget.description|query|string|false|NuGet description|
|nuget.summary|query|string|false|NuGet summary|
|p2.pluginName|query|string|false|p2 plugin name|
|pypi.classifiers|query|string|false|PyPI classifiers|
|pypi.description|query|string|false|PyPI description|
|pypi.keywords|query|string|false|PyPI keywords|
|pypi.summary|query|string|false|PyPI summary|
|rubygems.description|query|string|false|RubyGems description|
|rubygems.platform|query|string|false|RubyGems platform|
|rubygems.summary|query|string|false|RubyGems summary|
|tag|query|string|false|Component tag|
|yum.architecture|query|string|false|Yum architecture|
|yum.name|query|string|false|Yum package name|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|group|
|sort|name|
|sort|version|
|sort|repository|
|direction|asc|
|direction|desc|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "id": "string",
      "repository": "string",
      "format": "string",
      "group": "string",
      "name": "string",
      "version": "string",
      "assets": [
        {
          "downloadUrl": "string",
          "path": "string",
          "id": "string",
          "repository": "string",
          "format": "string",
          "checksum": {
            "property1": {},
            "property2": {}
          },
          "contentType": "string",
          "lastModified": "2019-08-24T14:15:22Z",
          "lastDownloaded": "2019-08-24T14:15:22Z",
          "uploader": "string",
          "uploaderIp": "string",
          "fileSize": 0,
          "blobCreated": "2019-08-24T14:15:22Z",
          "blobStoreName": "string"
        }
      ]
    }
  ],
  "continuationToken": "string"
}
```

<h3 id="search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[PageComponentXO](#schemapagecomponentxo)|

<aside class="success">
This operation does not require authentication
</aside>

## searchAndDownloadAssets

<a id="opIdsearchAndDownloadAssets"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/search/assets/download

```

```java
URL obj = new URL("/service/rest/v1/search/assets/download");
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

r = requests.get('/service/rest/v1/search/assets/download')

print(r.json())

```

```javascript

fetch('/service/rest/v1/search/assets/download',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /v1/search/assets/download`

*Search and download asset*

Returns a 302 Found with location header field set to download URL. Unless a sort parameter is supplied, the search must return a single asset to receive download URL.

<h3 id="searchanddownloadassets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|The field to sort the results against, if left empty and more than 1 result is returned, the request will fail.|
|direction|query|string|false|The direction to sort records in, defaults to ascending ('asc') for all sort fields, except version, which defaults to descending ('desc')|
|timeout|query|integer(int32)|false|How long to wait for search results in seconds. If this value is not provided, the system default timeout will be used.|
|q|query|string|false|Query by keyword|
|repository|query|string|false|Repository name|
|format|query|string|false|Query by format|
|group|query|string|false|Component group|
|name|query|string|false|Component name|
|version|query|string|false|Component version|
|prerelease|query|string|false|Prerelease version flag|
|md5|query|string|false|Specific MD5 hash of component's asset|
|sha1|query|string|false|Specific SHA-1 hash of component's asset|
|sha256|query|string|false|Specific SHA-256 hash of component's asset|
|sha512|query|string|false|Specific SHA-512 hash of component's asset|
|conan.baseVersion|query|string|false|Conan base version|
|conan.channel|query|string|false|Conan channel|
|conan.revision|query|string|false|Conan recipe revision|
|conan.packageId|query|string|false|Conan package id|
|conan.packageRevision|query|string|false|Conan package revision|
|conan.baseVersion.strict|query|string|false|Conan base version strict|
|conan.revision.latest|query|string|false|Return latest revision|
|conan.settings.arch|query|string|false|Conan arch|
|conan.settings.os|query|string|false|Conan os|
|conan.settings.compiler|query|string|false|Conan compiler|
|conan.settings.compiler.version|query|string|false|Conan compiler version|
|conan.settings.compiler.runtime|query|string|false|Conan compiler runtime|
|docker.imageName|query|string|false|Docker image name|
|docker.imageTag|query|string|false|Docker image tag|
|docker.layerId|query|string|false|Docker layer ID|
|docker.contentDigest|query|string|false|Docker content digest|
|maven.groupId|query|string|false|Maven groupId|
|maven.artifactId|query|string|false|Maven artifactId|
|maven.baseVersion|query|string|false|Maven base version|
|maven.extension|query|string|false|Maven extension of component's asset|
|maven.classifier|query|string|false|Maven classifier of component's asset|
|gavec|query|string|false|Group asset version extension classifier|
|npm.scope|query|string|false|npm scope|
|npm.author|query|string|false|npm author|
|npm.description|query|string|false|npm description|
|npm.keywords|query|string|false|npm keywords|
|npm.license|query|string|false|npm license|
|npm.tagged_is|query|string|false|npm tagged is|
|npm.tagged_not|query|string|false|npm tagged not|
|nuget.id|query|string|false|NuGet id|
|nuget.tags|query|string|false|NuGet tags|
|nuget.title|query|string|false|NuGet title|
|nuget.authors|query|string|false|NuGet authors|
|nuget.description|query|string|false|NuGet description|
|nuget.summary|query|string|false|NuGet summary|
|p2.pluginName|query|string|false|p2 plugin name|
|pypi.classifiers|query|string|false|PyPI classifiers|
|pypi.description|query|string|false|PyPI description|
|pypi.keywords|query|string|false|PyPI keywords|
|pypi.summary|query|string|false|PyPI summary|
|rubygems.description|query|string|false|RubyGems description|
|rubygems.platform|query|string|false|RubyGems platform|
|rubygems.summary|query|string|false|RubyGems summary|
|tag|query|string|false|Component tag|
|yum.architecture|query|string|false|Yum architecture|
|yum.name|query|string|false|Yum package name|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|group|
|sort|name|
|sort|version|
|sort|repository|
|direction|asc|
|direction|desc|

<h3 id="searchanddownloadassets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|ValidationErrorXO{id='*', message='Search returned multiple assets, please refine search criteria to find a single asset or use the sort query parameter to retrieve the first result.'}|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Asset search returned no results|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-script">Script</h1>

## read_1

<a id="opIdread_1"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/script/{name} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/script/{name}");
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

r = requests.get('/service/rest/v1/script/{name}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/script/{name}',
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

`GET /v1/script/{name}`

*Read stored script by name*

<h3 id="read_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "content": "string",
  "type": "string"
}
```

<h3 id="read_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ScriptXO](#schemascriptxo)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|No script with the specified name|None|

<aside class="success">
This operation does not require authentication
</aside>

## edit

<a id="opIdedit"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/script/{name} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/script/{name}");
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

r = requests.put('/service/rest/v1/script/{name}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "content": "string",
  "type": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/script/{name}',
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

`PUT /v1/script/{name}`

*Update stored script by name*

> Body parameter

```json
{
  "name": "string",
  "content": "string",
  "type": "string"
}
```

<h3 id="edit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[ScriptXO](#schemascriptxo)|false|none|

<h3 id="edit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Script was updated|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|No script with the specified name|None|
|410|[Gone](https://tools.ietf.org/html/rfc7231#section-6.5.9)|Script updating is disabled|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete_1

<a id="opIddelete_1"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/script/{name}

```

```java
URL obj = new URL("/service/rest/v1/script/{name}");
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

r = requests.delete('/service/rest/v1/script/{name}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/script/{name}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/script/{name}`

*Delete stored script by name*

<h3 id="delete_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="delete_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Script was deleted|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|No script with the specified name|None|

<aside class="success">
This operation does not require authentication
</aside>

## browse

<a id="opIdbrowse"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/script \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/script");
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

r = requests.get('/service/rest/v1/script', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/script',
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

`GET /v1/script`

*List all stored scripts*

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "content": "string",
    "type": "string"
  }
]
```

<h3 id="browse-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|Inline|

<h3 id="browse-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScriptXO](#schemascriptxo)]|false|none|none|
|» name|string|false|none|none|
|» content|string|false|none|none|
|» type|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## add

<a id="opIdadd"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/script \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/script");
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

r = requests.post('/service/rest/v1/script', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "content": "string",
  "type": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/script',
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

`POST /v1/script`

*Add a new script*

> Body parameter

```json
{
  "name": "string",
  "content": "string",
  "type": "string"
}
```

<h3 id="add-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ScriptXO](#schemascriptxo)|false|none|

<h3 id="add-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Script was added|None|
|410|[Gone](https://tools.ietf.org/html/rfc7231#section-6.5.9)|Script creation is disabled|None|

<aside class="success">
This operation does not require authentication
</aside>

## run_1

<a id="opIdrun_1"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/script/{name}/run \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/script/{name}/run");
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

r = requests.post('/service/rest/v1/script/{name}/run', headers = headers)

print(r.json())

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'text/plain',
  'Accept':'application/json'
};

fetch('/service/rest/v1/script/{name}/run',
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

`POST /v1/script/{name}/run`

*Run stored script by name*

> Body parameter

```json
"string"
```

```
string

```

<h3 id="run_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "result": "string"
}
```

<h3 id="run_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ScriptResultXO](#schemascriptresultxo)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|No script with the specified name|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Script execution failed with exception|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-security-management-ldap">Security management: LDAP</h1>

## getLdapServers

<a id="opIdgetLdapServers"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/ldap

```

```java
URL obj = new URL("/service/rest/v1/security/ldap");
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

r = requests.get('/service/rest/v1/security/ldap')

print(r.json())

```

```javascript

fetch('/service/rest/v1/security/ldap',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /v1/security/ldap`

*List LDAP servers*

<h3 id="getldapservers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|LDAP server list returned|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## createLdapServer

<a id="opIdcreateLdapServer"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/security/ldap \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/ldap");
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

r = requests.post('/service/rest/v1/security/ldap', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "protocol": "ldap",
  "useTrustStore": true,
  "host": "string",
  "port": 636,
  "searchBase": "dc=example,dc=com",
  "authScheme": "NONE",
  "authRealm": "example.com",
  "authUsername": "string",
  "connectionTimeoutSeconds": 1,
  "connectionRetryDelaySeconds": 0,
  "maxIncidentsCount": 0,
  "userBaseDn": "ou=people",
  "userSubtree": true,
  "userObjectClass": "inetOrgPerson",
  "userLdapFilter": "(|(mail=*@example.com)(uid=dom*))",
  "userIdAttribute": "uid",
  "userRealNameAttribute": "cn",
  "userEmailAddressAttribute": "mail",
  "userPasswordAttribute": "string",
  "ldapGroupsAsRoles": true,
  "groupType": "static",
  "groupBaseDn": "ou=Group",
  "groupSubtree": true,
  "groupObjectClass": "posixGroup",
  "groupIdAttribute": "cn",
  "groupMemberAttribute": "memberUid",
  "groupMemberFormat": "uid=${username},ou=people,dc=example,dc=com",
  "userMemberOfAttribute": "memberOf",
  "authPassword": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/ldap',
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

`POST /v1/security/ldap`

*Create LDAP server*

> Body parameter

```json
{
  "name": "string",
  "protocol": "ldap",
  "useTrustStore": true,
  "host": "string",
  "port": 636,
  "searchBase": "dc=example,dc=com",
  "authScheme": "NONE",
  "authRealm": "example.com",
  "authUsername": "string",
  "connectionTimeoutSeconds": 1,
  "connectionRetryDelaySeconds": 0,
  "maxIncidentsCount": 0,
  "userBaseDn": "ou=people",
  "userSubtree": true,
  "userObjectClass": "inetOrgPerson",
  "userLdapFilter": "(|(mail=*@example.com)(uid=dom*))",
  "userIdAttribute": "uid",
  "userRealNameAttribute": "cn",
  "userEmailAddressAttribute": "mail",
  "userPasswordAttribute": "string",
  "ldapGroupsAsRoles": true,
  "groupType": "static",
  "groupBaseDn": "ou=Group",
  "groupSubtree": true,
  "groupObjectClass": "posixGroup",
  "groupIdAttribute": "cn",
  "groupMemberAttribute": "memberUid",
  "groupMemberFormat": "uid=${username},ou=people,dc=example,dc=com",
  "userMemberOfAttribute": "memberOf",
  "authPassword": "string"
}
```

<h3 id="createldapserver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateLdapServerXo](#schemacreateldapserverxo)|false|none|

<h3 id="createldapserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|LDAP server created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getLdapServer

<a id="opIdgetLdapServer"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/ldap/{name}

```

```java
URL obj = new URL("/service/rest/v1/security/ldap/{name}");
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

r = requests.get('/service/rest/v1/security/ldap/{name}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/security/ldap/{name}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /v1/security/ldap/{name}`

*Get LDAP server*

<h3 id="getldapserver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the LDAP server to retrieve|

<h3 id="getldapserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|LDAP server returned|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|LDAP server not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateLdapServer

<a id="opIdupdateLdapServer"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/security/ldap/{name} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/ldap/{name}");
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

r = requests.put('/service/rest/v1/security/ldap/{name}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "protocol": "ldap",
  "useTrustStore": true,
  "host": "string",
  "port": 636,
  "searchBase": "dc=example,dc=com",
  "authScheme": "NONE",
  "authRealm": "example.com",
  "authUsername": "string",
  "connectionTimeoutSeconds": 1,
  "connectionRetryDelaySeconds": 0,
  "maxIncidentsCount": 0,
  "userBaseDn": "ou=people",
  "userSubtree": true,
  "userObjectClass": "inetOrgPerson",
  "userLdapFilter": "(|(mail=*@example.com)(uid=dom*))",
  "userIdAttribute": "uid",
  "userRealNameAttribute": "cn",
  "userEmailAddressAttribute": "mail",
  "userPasswordAttribute": "string",
  "ldapGroupsAsRoles": true,
  "groupType": "static",
  "groupBaseDn": "ou=Group",
  "groupSubtree": true,
  "groupObjectClass": "posixGroup",
  "groupIdAttribute": "cn",
  "groupMemberAttribute": "memberUid",
  "groupMemberFormat": "uid=${username},ou=people,dc=example,dc=com",
  "userMemberOfAttribute": "memberOf",
  "authPassword": "string",
  "id": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/ldap/{name}',
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

`PUT /v1/security/ldap/{name}`

*Update LDAP server*

> Body parameter

```json
{
  "name": "string",
  "protocol": "ldap",
  "useTrustStore": true,
  "host": "string",
  "port": 636,
  "searchBase": "dc=example,dc=com",
  "authScheme": "NONE",
  "authRealm": "example.com",
  "authUsername": "string",
  "connectionTimeoutSeconds": 1,
  "connectionRetryDelaySeconds": 0,
  "maxIncidentsCount": 0,
  "userBaseDn": "ou=people",
  "userSubtree": true,
  "userObjectClass": "inetOrgPerson",
  "userLdapFilter": "(|(mail=*@example.com)(uid=dom*))",
  "userIdAttribute": "uid",
  "userRealNameAttribute": "cn",
  "userEmailAddressAttribute": "mail",
  "userPasswordAttribute": "string",
  "ldapGroupsAsRoles": true,
  "groupType": "static",
  "groupBaseDn": "ou=Group",
  "groupSubtree": true,
  "groupObjectClass": "posixGroup",
  "groupIdAttribute": "cn",
  "groupMemberAttribute": "memberUid",
  "groupMemberFormat": "uid=${username},ou=people,dc=example,dc=com",
  "userMemberOfAttribute": "memberOf",
  "authPassword": "string",
  "id": "string"
}
```

<h3 id="updateldapserver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the LDAP server to update|
|body|body|[UpdateLdapServerXo](#schemaupdateldapserverxo)|false|Updated values of LDAP server|

<h3 id="updateldapserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|LDAP server updated|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|LDAP server not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteLdapServer

<a id="opIddeleteLdapServer"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/security/ldap/{name}

```

```java
URL obj = new URL("/service/rest/v1/security/ldap/{name}");
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

r = requests.delete('/service/rest/v1/security/ldap/{name}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/security/ldap/{name}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/security/ldap/{name}`

*Delete LDAP server*

<h3 id="deleteldapserver-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the LDAP server to delete|

<h3 id="deleteldapserver-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|LDAP server deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|LDAP server not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## changeOrder

<a id="opIdchangeOrder"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/security/ldap/change-order \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/ldap/change-order");
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

r = requests.post('/service/rest/v1/security/ldap/change-order', headers = headers)

print(r.json())

```

```javascript
const inputBody = '[
  "string"
]';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/ldap/change-order',
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

`POST /v1/security/ldap/change-order`

*Change LDAP server order*

> Body parameter

```json
[
  "string"
]
```

<h3 id="changeorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|array[string]|false|Ordered list of LDAP server names|

<h3 id="changeorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|LDAP server order changed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-tags">Tags</h1>

## associate

<a id="opIdassociate"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/tags/associate/{tagName}

```

```java
URL obj = new URL("/service/rest/v1/tags/associate/{tagName}");
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

r = requests.post('/service/rest/v1/tags/associate/{tagName}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/tags/associate/{tagName}',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /v1/tags/associate/{tagName}`

*Associate components with a tag*

<h3 id="associate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagName|path|string|true|Tag to associate to the matched components|
|wait|query|boolean|false|The query waits until the indexing is complete|
|q|query|string|false|Query by keyword|
|repository|query|string|false|Repository name|
|format|query|string|false|Query by format|
|group|query|string|false|Component group|
|name|query|string|false|Component name|
|version|query|string|false|Component version|
|prerelease|query|string|false|Prerelease version flag|
|md5|query|string|false|Specific MD5 hash of component's asset|
|sha1|query|string|false|Specific SHA-1 hash of component's asset|
|sha256|query|string|false|Specific SHA-256 hash of component's asset|
|sha512|query|string|false|Specific SHA-512 hash of component's asset|
|conan.baseVersion|query|string|false|Conan base version|
|conan.channel|query|string|false|Conan channel|
|conan.revision|query|string|false|Conan recipe revision|
|conan.packageId|query|string|false|Conan package id|
|conan.packageRevision|query|string|false|Conan package revision|
|conan.baseVersion.strict|query|string|false|Conan base version strict|
|conan.revision.latest|query|string|false|Return latest revision|
|conan.settings.arch|query|string|false|Conan arch|
|conan.settings.os|query|string|false|Conan os|
|conan.settings.compiler|query|string|false|Conan compiler|
|conan.settings.compiler.version|query|string|false|Conan compiler version|
|conan.settings.compiler.runtime|query|string|false|Conan compiler runtime|
|docker.imageName|query|string|false|Docker image name|
|docker.imageTag|query|string|false|Docker image tag|
|docker.layerId|query|string|false|Docker layer ID|
|docker.contentDigest|query|string|false|Docker content digest|
|maven.groupId|query|string|false|Maven groupId|
|maven.artifactId|query|string|false|Maven artifactId|
|maven.baseVersion|query|string|false|Maven base version|
|maven.extension|query|string|false|Maven extension of component's asset|
|maven.classifier|query|string|false|Maven classifier of component's asset|
|gavec|query|string|false|Group asset version extension classifier|
|npm.scope|query|string|false|npm scope|
|npm.author|query|string|false|npm author|
|npm.description|query|string|false|npm description|
|npm.keywords|query|string|false|npm keywords|
|npm.license|query|string|false|npm license|
|npm.tagged_is|query|string|false|npm tagged is|
|npm.tagged_not|query|string|false|npm tagged not|
|nuget.id|query|string|false|NuGet id|
|nuget.tags|query|string|false|NuGet tags|
|nuget.title|query|string|false|NuGet title|
|nuget.authors|query|string|false|NuGet authors|
|nuget.description|query|string|false|NuGet description|
|nuget.summary|query|string|false|NuGet summary|
|p2.pluginName|query|string|false|p2 plugin name|
|pypi.classifiers|query|string|false|PyPI classifiers|
|pypi.description|query|string|false|PyPI description|
|pypi.keywords|query|string|false|PyPI keywords|
|pypi.summary|query|string|false|PyPI summary|
|rubygems.description|query|string|false|RubyGems description|
|rubygems.platform|query|string|false|RubyGems platform|
|rubygems.summary|query|string|false|RubyGems summary|
|tag|query|string|false|Component tag|
|yum.architecture|query|string|false|Yum architecture|
|yum.name|query|string|false|Yum package name|

<h3 id="associate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Associate was successful|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Tag or components not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## disassociate

<a id="opIddisassociate"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/tags/associate/{tagName}

```

```java
URL obj = new URL("/service/rest/v1/tags/associate/{tagName}");
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

r = requests.delete('/service/rest/v1/tags/associate/{tagName}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/tags/associate/{tagName}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/tags/associate/{tagName}`

*Disassociate components from a tag*

<h3 id="disassociate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagName|path|string|true|Tag to associate to the matched components|
|q|query|string|false|Query by keyword|
|repository|query|string|false|Repository name|
|format|query|string|false|Query by format|
|group|query|string|false|Component group|
|name|query|string|false|Component name|
|version|query|string|false|Component version|
|prerelease|query|string|false|Prerelease version flag|
|md5|query|string|false|Specific MD5 hash of component's asset|
|sha1|query|string|false|Specific SHA-1 hash of component's asset|
|sha256|query|string|false|Specific SHA-256 hash of component's asset|
|sha512|query|string|false|Specific SHA-512 hash of component's asset|
|conan.baseVersion|query|string|false|Conan base version|
|conan.channel|query|string|false|Conan channel|
|conan.revision|query|string|false|Conan recipe revision|
|conan.packageId|query|string|false|Conan package id|
|conan.packageRevision|query|string|false|Conan package revision|
|conan.baseVersion.strict|query|string|false|Conan base version strict|
|conan.revision.latest|query|string|false|Return latest revision|
|conan.settings.arch|query|string|false|Conan arch|
|conan.settings.os|query|string|false|Conan os|
|conan.settings.compiler|query|string|false|Conan compiler|
|conan.settings.compiler.version|query|string|false|Conan compiler version|
|conan.settings.compiler.runtime|query|string|false|Conan compiler runtime|
|docker.imageName|query|string|false|Docker image name|
|docker.imageTag|query|string|false|Docker image tag|
|docker.layerId|query|string|false|Docker layer ID|
|docker.contentDigest|query|string|false|Docker content digest|
|maven.groupId|query|string|false|Maven groupId|
|maven.artifactId|query|string|false|Maven artifactId|
|maven.baseVersion|query|string|false|Maven base version|
|maven.extension|query|string|false|Maven extension of component's asset|
|maven.classifier|query|string|false|Maven classifier of component's asset|
|gavec|query|string|false|Group asset version extension classifier|
|npm.scope|query|string|false|npm scope|
|npm.author|query|string|false|npm author|
|npm.description|query|string|false|npm description|
|npm.keywords|query|string|false|npm keywords|
|npm.license|query|string|false|npm license|
|npm.tagged_is|query|string|false|npm tagged is|
|npm.tagged_not|query|string|false|npm tagged not|
|nuget.id|query|string|false|NuGet id|
|nuget.tags|query|string|false|NuGet tags|
|nuget.title|query|string|false|NuGet title|
|nuget.authors|query|string|false|NuGet authors|
|nuget.description|query|string|false|NuGet description|
|nuget.summary|query|string|false|NuGet summary|
|p2.pluginName|query|string|false|p2 plugin name|
|pypi.classifiers|query|string|false|PyPI classifiers|
|pypi.description|query|string|false|PyPI description|
|pypi.keywords|query|string|false|PyPI keywords|
|pypi.summary|query|string|false|PyPI summary|
|rubygems.description|query|string|false|RubyGems description|
|rubygems.platform|query|string|false|RubyGems platform|
|rubygems.summary|query|string|false|RubyGems summary|
|tag|query|string|false|Component tag|
|yum.architecture|query|string|false|Yum architecture|
|yum.name|query|string|false|Yum package name|

<h3 id="disassociate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Disassociation was successful|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Tag or components not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## getTags

<a id="opIdgetTags"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/tags \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/tags");
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

r = requests.get('/service/rest/v1/tags', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/tags',
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

`GET /v1/tags`

*List tags*

<h3 id="gettags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|continuationToken|query|string|false|A token returned by a prior request. If present, the next page of results are returned|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "name": "string",
      "attributes": {
        "property1": {},
        "property2": {}
      },
      "firstCreated": "2019-08-24T14:15:22Z",
      "lastUpdated": "2019-08-24T14:15:22Z"
    }
  ],
  "continuationToken": "string"
}
```

<h3 id="gettags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[PageTagXO](#schemapagetagxo)|

<aside class="success">
This operation does not require authentication
</aside>

## create_1

<a id="opIdcreate_1"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/tags \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/tags");
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

r = requests.post('/service/rest/v1/tags', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "name": "string",
  "attributes": {
    "property1": {},
    "property2": {}
  },
  "firstCreated": "2019-08-24T14:15:22Z",
  "lastUpdated": "2019-08-24T14:15:22Z"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/tags',
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

`POST /v1/tags`

*Create a tag*

> Body parameter

```json
{
  "name": "string",
  "attributes": {
    "property1": {},
    "property2": {}
  },
  "firstCreated": "2019-08-24T14:15:22Z",
  "lastUpdated": "2019-08-24T14:15:22Z"
}
```

<h3 id="create_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TagXO](#schematagxo)|false|none|

<h3 id="create_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Tag was added|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request. Check tag name and attributes. Name can only contain letters, numbers, underscores, hyphens and dots and cannot start with an underscore or dot. The name cannot exceed 256 characters. The attributes is a JSON document which cannot exceed 20k.|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_3

<a id="opIdget_3"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/tags/{name} \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/tags/{name}");
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

r = requests.get('/service/rest/v1/tags/{name}', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/tags/{name}',
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

`GET /v1/tags/{name}`

*Get a tag*

<h3 id="get_3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the tag to retrieve|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "attributes": {
    "property1": {},
    "property2": {}
  },
  "firstCreated": "2019-08-24T14:15:22Z",
  "lastUpdated": "2019-08-24T14:15:22Z"
}
```

<h3 id="get_3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[TagXO](#schematagxo)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Tag not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## replace

<a id="opIdreplace"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/tags/{name} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/tags/{name}");
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

r = requests.put('/service/rest/v1/tags/{name}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "attributes": {
    "property1": {},
    "property2": {}
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/service/rest/v1/tags/{name}',
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

`PUT /v1/tags/{name}`

*Update a tags attributes*

> Body parameter

```json
{
  "attributes": {
    "property1": {},
    "property2": {}
  }
}
```

<h3 id="replace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[BaseTagXO](#schemabasetagxo)|false|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "attributes": {
    "property1": {},
    "property2": {}
  },
  "firstCreated": "2019-08-24T14:15:22Z",
  "lastUpdated": "2019-08-24T14:15:22Z"
}
```

<h3 id="replace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[TagXO](#schematagxo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request. Check tag attributes. The attributes is a JSON document which cannot exceed 20k|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Tag not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete_2

<a id="opIddelete_2"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/tags/{name}

```

```java
URL obj = new URL("/service/rest/v1/tags/{name}");
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

r = requests.delete('/service/rest/v1/tags/{name}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/tags/{name}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/tags/{name}`

*Delete a tag*

<h3 id="delete_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Name of the tag to delete|

<h3 id="delete_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Tag was deleted|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Tag not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-manage-sonatype-repository-firewall-configuration">Manage Sonatype Repository Firewall configuration</h1>

## getConfiguration

<a id="opIdgetConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/iq

```

```java
URL obj = new URL("/service/rest/v1/iq");
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

r = requests.get('/service/rest/v1/iq')

print(r.json())

```

```javascript

fetch('/service/rest/v1/iq',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /v1/iq`

*Get Sonatype Repository Firewall configuration*

<h3 id="getconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Sonatype Repository Firewall configuration returned|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateConfiguration

<a id="opIdupdateConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/iq \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/iq");
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

r = requests.put('/service/rest/v1/iq', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "enabled": true,
  "showLink": true,
  "url": "string",
  "authenticationType": "USER",
  "username": "string",
  "password": "string",
  "useTrustStoreForUrl": true,
  "timeoutSeconds": 1,
  "properties": "string",
  "failOpenModeEnabled": true
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/iq',
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

`PUT /v1/iq`

*Update Sonatype Repository Firewall configuration*

> Body parameter

```json
{
  "enabled": true,
  "showLink": true,
  "url": "string",
  "authenticationType": "USER",
  "username": "string",
  "password": "string",
  "useTrustStoreForUrl": true,
  "timeoutSeconds": 1,
  "properties": "string",
  "failOpenModeEnabled": true
}
```

<h3 id="updateconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IqConnectionXo](#schemaiqconnectionxo)|false|none|

<h3 id="updateconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Sonatype Repository Firewall configuration has been updated|None|

<aside class="success">
This operation does not require authentication
</aside>

## enableIq

<a id="opIdenableIq"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/iq/enable

```

```java
URL obj = new URL("/service/rest/v1/iq/enable");
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

r = requests.post('/service/rest/v1/iq/enable')

print(r.json())

```

```javascript

fetch('/service/rest/v1/iq/enable',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /v1/iq/enable`

*Enable Sonatype Repository Firewall*

<h3 id="enableiq-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Sonatype Repository Firewall has been enabled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Sonatype Repository Firewall connection not configured|None|

<aside class="success">
This operation does not require authentication
</aside>

## disableIq

<a id="opIddisableIq"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/iq/disable

```

```java
URL obj = new URL("/service/rest/v1/iq/disable");
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

r = requests.post('/service/rest/v1/iq/disable')

print(r.json())

```

```javascript

fetch('/service/rest/v1/iq/disable',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /v1/iq/disable`

*Disable Sonatype Repository Firewall*

<h3 id="disableiq-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Sonatype Repository Firewall has been disabled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Sonatype Repository Firewall connection not configured|None|

<aside class="success">
This operation does not require authentication
</aside>

## verifyConnection

<a id="opIdverifyConnection"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/iq/verify-connection

```

```java
URL obj = new URL("/service/rest/v1/iq/verify-connection");
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

r = requests.post('/service/rest/v1/iq/verify-connection')

print(r.json())

```

```javascript

fetch('/service/rest/v1/iq/verify-connection',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /v1/iq/verify-connection`

*Verify Sonatype Repository Firewall connection*

<h3 id="verifyconnection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Connection verification complete, check response body for result|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAllAuditStatus

<a id="opIdgetAllAuditStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/iq/audit \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/iq/audit");
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

r = requests.get('/service/rest/v1/iq/audit', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/iq/audit',
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

`GET /v1/iq/audit`

*List repositories audit statuses.*

> Example responses

> 200 Response

```json
[
  {
    "enabled": true,
    "repositoryName": "string",
    "enabledQuarantine": true
  }
]
```

<h3 id="getallauditstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation|Inline|

<h3 id="getallauditstatus-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[IqAuditXo](#schemaiqauditxo)]|false|none|none|
|» enabled|boolean|false|none|is audit enabled|
|» repositoryName|string|true|none|repository name|
|» enabledQuarantine|boolean|true|none|is quarantine enabled|

<aside class="success">
This operation does not require authentication
</aside>

## manageAudit

<a id="opIdmanageAudit"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/iq/audit \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/iq/audit");
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

r = requests.put('/service/rest/v1/iq/audit', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "enabled": true,
  "repositoryName": "string",
  "enabledQuarantine": true
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/iq/audit',
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

`PUT /v1/iq/audit`

*Manage audit*

> Body parameter

```json
{
  "enabled": true,
  "repositoryName": "string",
  "enabledQuarantine": true
}
```

<h3 id="manageaudit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[IqAuditXo](#schemaiqauditxo)|false|none|

<h3 id="manageaudit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Repository audit is successfully updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Given repository is not a proxy|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Given repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAuditStatus

<a id="opIdgetAuditStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/iq/audit/{repositoryName}

```

```java
URL obj = new URL("/service/rest/v1/iq/audit/{repositoryName}");
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

r = requests.get('/service/rest/v1/iq/audit/{repositoryName}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/iq/audit/{repositoryName}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /v1/iq/audit/{repositoryName}`

*Get audit status for the repository*

<h3 id="getauditstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repositoryName|path|string|true|none|

<h3 id="getauditstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Given repository is not a proxy|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Given repository not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-malicious-risk-on-disk">Malicious Risk On Disk</h1>

## getEnabledRegistries

<a id="opIdgetEnabledRegistries"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/malicious-risk/enabledRegistries

```

```java
URL obj = new URL("/service/rest/v1/malicious-risk/enabledRegistries");
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

r = requests.get('/service/rest/v1/malicious-risk/enabledRegistries')

print(r.json())

```

```javascript

fetch('/service/rest/v1/malicious-risk/enabledRegistries',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /v1/malicious-risk/enabledRegistries`

*Get RHC Enabled registries for malicious risk scanning.*

<h3 id="getenabledregistries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|RHC Enabled registries returned|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMaliciousRiskOnDiskCount

<a id="opIdgetMaliciousRiskOnDiskCount"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/malicious-risk/risk-on-disk

```

```java
URL obj = new URL("/service/rest/v1/malicious-risk/risk-on-disk");
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

r = requests.get('/service/rest/v1/malicious-risk/risk-on-disk')

print(r.json())

```

```javascript

fetch('/service/rest/v1/malicious-risk/risk-on-disk',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /v1/malicious-risk/risk-on-disk`

*Get Malicious Risk On Disk Count*

<h3 id="getmaliciousriskondiskcount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Malicious Risk On Disk Count returned|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-security-management-user-tokens">Security management: user tokens</h1>

## serviceStatus

<a id="opIdserviceStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/user-tokens \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/user-tokens");
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

r = requests.get('/service/rest/v1/security/user-tokens', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/user-tokens',
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

`GET /v1/security/user-tokens`

*Show if the user token capability is enabled or not*

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "protectContent": true,
  "expirationEnabled": true,
  "expirationDays": 30
}
```

<h3 id="servicestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[UserTokensApiModel](#schemausertokensapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

## setServiceStatus

<a id="opIdsetServiceStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/security/user-tokens \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/user-tokens");
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

r = requests.put('/service/rest/v1/security/user-tokens', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "enabled": true,
  "protectContent": true,
  "expirationEnabled": true,
  "expirationDays": 30
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/service/rest/v1/security/user-tokens',
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

`PUT /v1/security/user-tokens`

*Enable/Disable the user token capability*

> Body parameter

```json
{
  "enabled": true,
  "protectContent": true,
  "expirationEnabled": true,
  "expirationDays": 30
}
```

<h3 id="setservicestatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserTokensApiModel](#schemausertokensapimodel)|false|none|

> Example responses

> 200 Response

```json
{
  "enabled": true,
  "protectContent": true,
  "expirationEnabled": true,
  "expirationDays": 30
}
```

<h3 id="setservicestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[UserTokensApiModel](#schemausertokensapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

## resetAllUserTokens

<a id="opIdresetAllUserTokens"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/security/user-tokens

```

```java
URL obj = new URL("/service/rest/v1/security/user-tokens");
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

r = requests.delete('/service/rest/v1/security/user-tokens')

print(r.json())

```

```javascript

fetch('/service/rest/v1/security/user-tokens',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/security/user-tokens`

*Invalidate all existing user tokens.*

<h3 id="resetallusertokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-product-licensing">Product licensing</h1>

## getLicenseStatus

<a id="opIdgetLicenseStatus"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/system/license \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/system/license");
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

r = requests.get('/service/rest/v1/system/license', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/system/license',
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

`GET /v1/system/license`

*Get the current license status.*

> Example responses

> 200 Response

```json
{
  "contactEmail": "string",
  "contactCompany": "string",
  "contactName": "string",
  "effectiveDate": "2019-08-24T14:15:22Z",
  "expirationDate": "2019-08-24T14:15:22Z",
  "licenseType": "string",
  "licensedUsers": "string",
  "fingerprint": "string",
  "features": "string"
}
```

<h3 id="getlicensestatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ApiLicenseDetailsXO](#schemaapilicensedetailsxo)|

<aside class="success">
This operation does not require authentication
</aside>

## setLicense

<a id="opIdsetLicense"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/system/license \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/system/license");
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
  'Content-Type': 'application/octet-stream',
  'Accept': 'application/json'
}

r = requests.post('/service/rest/v1/system/license', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/octet-stream',
  'Accept':'application/json'
};

fetch('/service/rest/v1/system/license',
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

`POST /v1/system/license`

*Upload a new license file.*

Server must be restarted to take effect

> Body parameter

```yaml
{}

```

<h3 id="setlicense-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InputStream](#schemainputstream)|false|none|

> Example responses

> 200 Response

```json
{
  "contactEmail": "string",
  "contactCompany": "string",
  "contactName": "string",
  "effectiveDate": "2019-08-24T14:15:22Z",
  "expirationDate": "2019-08-24T14:15:22Z",
  "licenseType": "string",
  "licensedUsers": "string",
  "fingerprint": "string",
  "features": "string"
}
```

<h3 id="setlicense-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|successful operation|[ApiLicenseDetailsXO](#schemaapilicensedetailsxo)|

<aside class="success">
This operation does not require authentication
</aside>

## removeLicense

<a id="opIdremoveLicense"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/system/license

```

```java
URL obj = new URL("/service/rest/v1/system/license");
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

r = requests.delete('/service/rest/v1/system/license')

print(r.json())

```

```javascript

fetch('/service/rest/v1/system/license',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/system/license`

*Uninstall license if present.*

<h3 id="removelicense-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|successful operation|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-security-atlassian-crowd">Security: Atlassian Crowd</h1>

## readSettings

<a id="opIdreadSettings"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/atlassian-crowd

```

```java
URL obj = new URL("/service/rest/v1/security/atlassian-crowd");
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

r = requests.get('/service/rest/v1/security/atlassian-crowd')

print(r.json())

```

```javascript

fetch('/service/rest/v1/security/atlassian-crowd',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /v1/security/atlassian-crowd`

*Retrieve Atlassian Crowd settings configured in Nexus Repository Manager*

<h3 id="readsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Atlassian Crowd settings returned|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateSettings

<a id="opIdupdateSettings"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/security/atlassian-crowd \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/atlassian-crowd");
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

r = requests.put('/service/rest/v1/security/atlassian-crowd', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "enabled": true,
  "realmActive": true,
  "applicationName": "string",
  "applicationPassword": "string",
  "url": "string",
  "useTrustStoreForUrl": true,
  "timeout": 1
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/atlassian-crowd',
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

`PUT /v1/security/atlassian-crowd`

*Update Atlassian Crowd settings configured in Nexus Repository Manager*

> Body parameter

```json
{
  "enabled": true,
  "realmActive": true,
  "applicationName": "string",
  "applicationPassword": "string",
  "url": "string",
  "useTrustStoreForUrl": true,
  "timeout": 1
}
```

<h3 id="updatesettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CrowdApiXO](#schemacrowdapixo)|false|none|

<h3 id="updatesettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Atlassian Crowd settings updated|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## verifyConnection_1

<a id="opIdverifyConnection_1"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/security/atlassian-crowd/verify-connection \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/atlassian-crowd/verify-connection");
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

r = requests.post('/service/rest/v1/security/atlassian-crowd/verify-connection', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "enabled": true,
  "realmActive": true,
  "applicationName": "string",
  "applicationPassword": "string",
  "url": "string",
  "useTrustStoreForUrl": true,
  "timeout": 1
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/atlassian-crowd/verify-connection',
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

`POST /v1/security/atlassian-crowd/verify-connection`

*Verify connection using supplied Atlassian Crowd settings*

> Body parameter

```json
{
  "enabled": true,
  "realmActive": true,
  "applicationName": "string",
  "applicationPassword": "string",
  "url": "string",
  "useTrustStoreForUrl": true,
  "timeout": 1
}
```

<h3 id="verifyconnection_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CrowdApiXO](#schemacrowdapixo)|false|none|

<h3 id="verifyconnection_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Atlassian Crowd connection was successful|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Atlassian Crowd connection failed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## clearCache

<a id="opIdclearCache"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/security/atlassian-crowd/clear-cache

```

```java
URL obj = new URL("/service/rest/v1/security/atlassian-crowd/clear-cache");
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

r = requests.post('/service/rest/v1/security/atlassian-crowd/clear-cache')

print(r.json())

```

```javascript

fetch('/service/rest/v1/security/atlassian-crowd/clear-cache',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /v1/security/atlassian-crowd/clear-cache`

*Clear Atlassian Crowd cache*

<h3 id="clearcache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Atlassian Crowd cache has been cleared|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-staging">Staging</h1>

## move

<a id="opIdmove"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/staging/move/{destination}

```

```java
URL obj = new URL("/service/rest/v1/staging/move/{destination}");
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

r = requests.post('/service/rest/v1/staging/move/{destination}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/staging/move/{destination}',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /v1/staging/move/{destination}`

*Move components*

<h3 id="move-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|destination|path|string|true|none|
|q|query|string|false|Query by keyword|
|repository|query|string|false|Repository name|
|format|query|string|false|Query by format|
|group|query|string|false|Component group|
|name|query|string|false|Component name|
|version|query|string|false|Component version|
|prerelease|query|string|false|Prerelease version flag|
|md5|query|string|false|Specific MD5 hash of component's asset|
|sha1|query|string|false|Specific SHA-1 hash of component's asset|
|sha256|query|string|false|Specific SHA-256 hash of component's asset|
|sha512|query|string|false|Specific SHA-512 hash of component's asset|
|conan.baseVersion|query|string|false|Conan base version|
|conan.channel|query|string|false|Conan channel|
|conan.revision|query|string|false|Conan recipe revision|
|conan.packageId|query|string|false|Conan package id|
|conan.packageRevision|query|string|false|Conan package revision|
|conan.baseVersion.strict|query|string|false|Conan base version strict|
|conan.revision.latest|query|string|false|Return latest revision|
|conan.settings.arch|query|string|false|Conan arch|
|conan.settings.os|query|string|false|Conan os|
|conan.settings.compiler|query|string|false|Conan compiler|
|conan.settings.compiler.version|query|string|false|Conan compiler version|
|conan.settings.compiler.runtime|query|string|false|Conan compiler runtime|
|docker.imageName|query|string|false|Docker image name|
|docker.imageTag|query|string|false|Docker image tag|
|docker.layerId|query|string|false|Docker layer ID|
|docker.contentDigest|query|string|false|Docker content digest|
|maven.groupId|query|string|false|Maven groupId|
|maven.artifactId|query|string|false|Maven artifactId|
|maven.baseVersion|query|string|false|Maven base version|
|maven.extension|query|string|false|Maven extension of component's asset|
|maven.classifier|query|string|false|Maven classifier of component's asset|
|gavec|query|string|false|Group asset version extension classifier|
|npm.scope|query|string|false|npm scope|
|npm.author|query|string|false|npm author|
|npm.description|query|string|false|npm description|
|npm.keywords|query|string|false|npm keywords|
|npm.license|query|string|false|npm license|
|npm.tagged_is|query|string|false|npm tagged is|
|npm.tagged_not|query|string|false|npm tagged not|
|nuget.id|query|string|false|NuGet id|
|nuget.tags|query|string|false|NuGet tags|
|nuget.title|query|string|false|NuGet title|
|nuget.authors|query|string|false|NuGet authors|
|nuget.description|query|string|false|NuGet description|
|nuget.summary|query|string|false|NuGet summary|
|p2.pluginName|query|string|false|p2 plugin name|
|pypi.classifiers|query|string|false|PyPI classifiers|
|pypi.description|query|string|false|PyPI description|
|pypi.keywords|query|string|false|PyPI keywords|
|pypi.summary|query|string|false|PyPI summary|
|rubygems.description|query|string|false|RubyGems description|
|rubygems.platform|query|string|false|RubyGems platform|
|rubygems.summary|query|string|false|RubyGems summary|
|tag|query|string|false|Component tag|
|yum.architecture|query|string|false|Yum architecture|
|yum.name|query|string|false|Yum package name|

<h3 id="move-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Move Successful|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid client request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Authentication required|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|No components found|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete_3

<a id="opIddelete_3"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/staging/delete

```

```java
URL obj = new URL("/service/rest/v1/staging/delete");
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

r = requests.post('/service/rest/v1/staging/delete')

print(r.json())

```

```javascript

fetch('/service/rest/v1/staging/delete',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /v1/staging/delete`

*Delete components*

<h3 id="delete_3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|Query by keyword|
|repository|query|string|false|Repository name|
|format|query|string|false|Query by format|
|group|query|string|false|Component group|
|name|query|string|false|Component name|
|version|query|string|false|Component version|
|prerelease|query|string|false|Prerelease version flag|
|md5|query|string|false|Specific MD5 hash of component's asset|
|sha1|query|string|false|Specific SHA-1 hash of component's asset|
|sha256|query|string|false|Specific SHA-256 hash of component's asset|
|sha512|query|string|false|Specific SHA-512 hash of component's asset|
|conan.baseVersion|query|string|false|Conan base version|
|conan.channel|query|string|false|Conan channel|
|conan.revision|query|string|false|Conan recipe revision|
|conan.packageId|query|string|false|Conan package id|
|conan.packageRevision|query|string|false|Conan package revision|
|conan.baseVersion.strict|query|string|false|Conan base version strict|
|conan.revision.latest|query|string|false|Return latest revision|
|conan.settings.arch|query|string|false|Conan arch|
|conan.settings.os|query|string|false|Conan os|
|conan.settings.compiler|query|string|false|Conan compiler|
|conan.settings.compiler.version|query|string|false|Conan compiler version|
|conan.settings.compiler.runtime|query|string|false|Conan compiler runtime|
|docker.imageName|query|string|false|Docker image name|
|docker.imageTag|query|string|false|Docker image tag|
|docker.layerId|query|string|false|Docker layer ID|
|docker.contentDigest|query|string|false|Docker content digest|
|maven.groupId|query|string|false|Maven groupId|
|maven.artifactId|query|string|false|Maven artifactId|
|maven.baseVersion|query|string|false|Maven base version|
|maven.extension|query|string|false|Maven extension of component's asset|
|maven.classifier|query|string|false|Maven classifier of component's asset|
|gavec|query|string|false|Group asset version extension classifier|
|npm.scope|query|string|false|npm scope|
|npm.author|query|string|false|npm author|
|npm.description|query|string|false|npm description|
|npm.keywords|query|string|false|npm keywords|
|npm.license|query|string|false|npm license|
|npm.tagged_is|query|string|false|npm tagged is|
|npm.tagged_not|query|string|false|npm tagged not|
|nuget.id|query|string|false|NuGet id|
|nuget.tags|query|string|false|NuGet tags|
|nuget.title|query|string|false|NuGet title|
|nuget.authors|query|string|false|NuGet authors|
|nuget.description|query|string|false|NuGet description|
|nuget.summary|query|string|false|NuGet summary|
|p2.pluginName|query|string|false|p2 plugin name|
|pypi.classifiers|query|string|false|PyPI classifiers|
|pypi.description|query|string|false|PyPI description|
|pypi.keywords|query|string|false|PyPI keywords|
|pypi.summary|query|string|false|PyPI summary|
|rubygems.description|query|string|false|RubyGems description|
|rubygems.platform|query|string|false|RubyGems platform|
|rubygems.summary|query|string|false|RubyGems summary|
|tag|query|string|false|Component tag|
|yum.architecture|query|string|false|Yum architecture|
|yum.name|query|string|false|Yum package name|

<h3 id="delete_3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Delete Successful|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid client request|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|No components found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-azure-blob-store">Azure blob store</h1>

## verifyConnection_2

<a id="opIdverifyConnection_2"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/azureblobstore/test-connection \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/azureblobstore/test-connection");
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

r = requests.post('/service/rest/v1/azureblobstore/test-connection', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "accountName": "string",
  "accountKey": "string",
  "containerName": "string",
  "authenticationMethod": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/azureblobstore/test-connection',
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

`POST /v1/azureblobstore/test-connection`

*Verify connection using supplied Azure Blob Store settings*

> Body parameter

```json
{
  "accountName": "string",
  "accountKey": "string",
  "containerName": "string",
  "authenticationMethod": "string"
}
```

<h3 id="verifyconnection_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AzureConnectionXO](#schemaazureconnectionxo)|false|none|

<h3 id="verifyconnection_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Azure Blob Store connection was successful|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Azure Blob Store connection failed|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-security-management-saml">Security management: SAML</h1>

## getMetadata

<a id="opIdgetMetadata"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/saml/metadata

```

```java
URL obj = new URL("/service/rest/v1/security/saml/metadata");
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

r = requests.get('/service/rest/v1/security/saml/metadata')

print(r.json())

```

```javascript

fetch('/service/rest/v1/security/saml/metadata',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /v1/security/saml/metadata`

*Get service provider metadata XML document*

<h3 id="getmetadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Metadata Returned|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Metadata not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSamlConfiguration

<a id="opIdgetSamlConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/saml

```

```java
URL obj = new URL("/service/rest/v1/security/saml");
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

r = requests.get('/service/rest/v1/security/saml')

print(r.json())

```

```javascript

fetch('/service/rest/v1/security/saml',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /v1/security/saml`

*Get SAML configuration*

<h3 id="getsamlconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|SAML configuration returned|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|SAML configuration not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## putSamlConfiguration

<a id="opIdputSamlConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/security/saml \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/security/saml");
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

r = requests.put('/service/rest/v1/security/saml', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "entityId": "string",
  "idpMetadata": "string",
  "usernameAttribute": "string",
  "firstNameAttribute": "string",
  "lastNameAttribute": "string",
  "emailAttribute": "string",
  "groupsAttribute": "string",
  "validateResponseSignature": true,
  "validateAssertionSignature": true
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/security/saml',
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

`PUT /v1/security/saml`

*Create or update SAML configuration*

> Body parameter

```json
{
  "entityId": "string",
  "idpMetadata": "string",
  "usernameAttribute": "string",
  "firstNameAttribute": "string",
  "lastNameAttribute": "string",
  "emailAttribute": "string",
  "groupsAttribute": "string",
  "validateResponseSignature": true,
  "validateAssertionSignature": true
}
```

<h3 id="putsamlconfiguration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SamlConfigurationXO](#schemasamlconfigurationxo)|false|none|

<h3 id="putsamlconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|SAML configuration created|None|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|SAML configuration updated|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|SAML configuration not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSamlConfiguration

<a id="opIddeleteSamlConfiguration"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/security/saml

```

```java
URL obj = new URL("/service/rest/v1/security/saml");
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

r = requests.delete('/service/rest/v1/security/saml')

print(r.json())

```

```javascript

fetch('/service/rest/v1/security/saml',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/security/saml`

*Delete SAML configuration*

<h3 id="deletesamlconfiguration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|SAML configuration deleted|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|

<aside class="success">
This operation does not require authentication
</aside>

## getPublicCertificateInPemFormat

<a id="opIdgetPublicCertificateInPemFormat"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/security/saml/pem

```

```java
URL obj = new URL("/service/rest/v1/security/saml/pem");
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

r = requests.get('/service/rest/v1/security/saml/pem')

print(r.json())

```

```javascript

fetch('/service/rest/v1/security/saml/pem',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /v1/security/saml/pem`

*Get service provider signing certificate in PEM format*

<h3 id="getpubliccertificateinpemformat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|PEM file Returned|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Authentication required|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Insufficient permissions|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|PEM file not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-cleanup-policies">Cleanup policies</h1>

## getCleanupPolicyByName

<a id="opIdgetCleanupPolicyByName"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/cleanup-policies/{name}

```

```java
URL obj = new URL("/service/rest/v1/cleanup-policies/{name}");
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

r = requests.get('/service/rest/v1/cleanup-policies/{name}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/cleanup-policies/{name}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /v1/cleanup-policies/{name}`

*Get a policy by name*

<h3 id="getcleanuppolicybyname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="getcleanuppolicybyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Policy if exists|None|

<aside class="success">
This operation does not require authentication
</aside>

## deletePolicyByName

<a id="opIddeletePolicyByName"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/cleanup-policies/{name}

```

```java
URL obj = new URL("/service/rest/v1/cleanup-policies/{name}");
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

r = requests.delete('/service/rest/v1/cleanup-policies/{name}')

print(r.json())

```

```javascript

fetch('/service/rest/v1/cleanup-policies/{name}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/cleanup-policies/{name}`

*Delete cleanup policy*

<h3 id="deletepolicybyname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="deletepolicybyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Given policy successfully deleted|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The policy with the given name not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## getAll

<a id="opIdgetAll"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/cleanup-policies

```

```java
URL obj = new URL("/service/rest/v1/cleanup-policies");
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

r = requests.get('/service/rest/v1/cleanup-policies')

print(r.json())

```

```javascript

fetch('/service/rest/v1/cleanup-policies',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`GET /v1/cleanup-policies`

*Get a list of existing policies*

<h3 id="getall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The list of existing policies|None|

<aside class="success">
This operation does not require authentication
</aside>

## create_2

<a id="opIdcreate_2"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /service/rest/v1/cleanup-policies \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/cleanup-policies");
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

r = requests.post('/service/rest/v1/cleanup-policies', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "notes": "string",
  "criteriaLastBlobUpdated": 0,
  "criteriaLastDownloaded": 0,
  "criteriaReleaseType": "RELEASES",
  "criteriaAssetRegex": "string",
  "retain": 1,
  "name": "string",
  "format": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/cleanup-policies',
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

`POST /v1/cleanup-policies`

*Create a new policy*

> Body parameter

```json
{
  "notes": "string",
  "criteriaLastBlobUpdated": 0,
  "criteriaLastDownloaded": 0,
  "criteriaReleaseType": "RELEASES",
  "criteriaAssetRegex": "string",
  "retain": 1,
  "name": "string",
  "format": "string"
}
```

<h3 id="create_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CleanupPolicyResourceXO](#schemacleanuppolicyresourcexo)|false|none|

<h3 id="create_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Policy was successfully created|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Given payload has invalid data|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Given policy name already exists|None|

<aside class="success">
This operation does not require authentication
</aside>

## update_2

<a id="opIdupdate_2"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/cleanup-policies/{policyName} \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/cleanup-policies/{policyName}");
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

r = requests.put('/service/rest/v1/cleanup-policies/{policyName}', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "notes": "string",
  "criteriaLastBlobUpdated": 0,
  "criteriaLastDownloaded": 0,
  "criteriaReleaseType": "RELEASES",
  "criteriaAssetRegex": "string",
  "retain": 1,
  "name": "string",
  "format": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/cleanup-policies/{policyName}',
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

`PUT /v1/cleanup-policies/{policyName}`

*Update existing policy*

> Body parameter

```json
{
  "notes": "string",
  "criteriaLastBlobUpdated": 0,
  "criteriaLastDownloaded": 0,
  "criteriaReleaseType": "RELEASES",
  "criteriaAssetRegex": "string",
  "retain": 1,
  "name": "string",
  "format": "string"
}
```

<h3 id="update_2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|policyName|path|string|true|none|
|body|body|[CleanupPolicyResourceXO](#schemacleanuppolicyresourcexo)|false|none|

<h3 id="update_2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Policy was successfully updated|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Given payload has invalid data|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Given policy name does not exist|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nexus-repository-manager-rest-api-manage-sonatype-http-system-settings">Manage Sonatype HTTP System Settings</h1>

## getHttpSettings

<a id="opIdgetHttpSettings"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /service/rest/v1/http \
  -H 'Accept: application/json'

```

```java
URL obj = new URL("/service/rest/v1/http");
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

r = requests.get('/service/rest/v1/http', headers = headers)

print(r.json())

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/service/rest/v1/http',
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

`GET /v1/http`

*Get HTTP system settings*

> Example responses

> 200 Response

```json
{
  "nonProxyHosts": [
    "string"
  ],
  "userAgent": "string",
  "timeout": 1,
  "retries": 10,
  "httpProxy": {
    "enabled": true,
    "host": "string",
    "port": "string",
    "authInfo": {
      "enabled": true,
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "httpsProxy": {
    "enabled": true,
    "host": "string",
    "port": "string",
    "authInfo": {
      "enabled": true,
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  }
}
```

<h3 id="gethttpsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful Operation|[HttpSettingsXo](#schemahttpsettingsxo)|

<aside class="success">
This operation does not require authentication
</aside>

## updateHttpSettings

<a id="opIdupdateHttpSettings"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /service/rest/v1/http \
  -H 'Content-Type: application/json'

```

```java
URL obj = new URL("/service/rest/v1/http");
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

r = requests.put('/service/rest/v1/http', headers = headers)

print(r.json())

```

```javascript
const inputBody = '{
  "nonProxyHosts": [
    "string"
  ],
  "userAgent": "string",
  "timeout": 1,
  "retries": 10,
  "httpProxy": {
    "enabled": true,
    "host": "string",
    "port": "string",
    "authInfo": {
      "enabled": true,
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "httpsProxy": {
    "enabled": true,
    "host": "string",
    "port": "string",
    "authInfo": {
      "enabled": true,
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  }
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/service/rest/v1/http',
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

`PUT /v1/http`

*Update HTTP system settings*

> Body parameter

```json
{
  "nonProxyHosts": [
    "string"
  ],
  "userAgent": "string",
  "timeout": 1,
  "retries": 10,
  "httpProxy": {
    "enabled": true,
    "host": "string",
    "port": "string",
    "authInfo": {
      "enabled": true,
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "httpsProxy": {
    "enabled": true,
    "host": "string",
    "port": "string",
    "authInfo": {
      "enabled": true,
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  }
}
```

<h3 id="updatehttpsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[HttpSettingsXo](#schemahttpsettingsxo)|false|none|

<h3 id="updatehttpsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Successful Operation|None|

<aside class="success">
This operation does not require authentication
</aside>

## resetHttpSettings

<a id="opIdresetHttpSettings"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /service/rest/v1/http

```

```java
URL obj = new URL("/service/rest/v1/http");
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

r = requests.delete('/service/rest/v1/http')

print(r.json())

```

```javascript

fetch('/service/rest/v1/http',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`DELETE /v1/http`

*Reset HTTP System Settings*

<h3 id="resethttpsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Configuration Reset Successful|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AnonymousAccessSettingsXO">AnonymousAccessSettingsXO</h2>
<!-- backwards compatibility -->
<a id="schemaanonymousaccesssettingsxo"></a>
<a id="schema_AnonymousAccessSettingsXO"></a>
<a id="tocSanonymousaccesssettingsxo"></a>
<a id="tocsanonymousaccesssettingsxo"></a>

```json
{
  "enabled": true,
  "userId": "string",
  "realmName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether or not Anonymous Access is enabled|
|userId|string|false|none|The username of the anonymous account|
|realmName|string|false|none|The name of the authentication realm for the anonymous account|

<h2 id="tocS_ApiUserSource">ApiUserSource</h2>
<!-- backwards compatibility -->
<a id="schemaapiusersource"></a>
<a id="schema_ApiUserSource"></a>
<a id="tocSapiusersource"></a>
<a id="tocsapiusersource"></a>

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

<h2 id="tocS_ApiUser">ApiUser</h2>
<!-- backwards compatibility -->
<a id="schemaapiuser"></a>
<a id="schema_ApiUser"></a>
<a id="tocSapiuser"></a>
<a id="tocsapiuser"></a>

```json
{
  "userId": "string",
  "firstName": "string",
  "lastName": "string",
  "emailAddress": "string",
  "source": "string",
  "status": "active",
  "readOnly": true,
  "roles": [
    "string"
  ],
  "externalRoles": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|false|none|The userid which is required for login. This value cannot be changed.|
|firstName|string|false|none|The first name of the user.|
|lastName|string|false|none|The last name of the user.|
|emailAddress|string|false|none|The email address associated with the user.|
|source|string|false|none|The user source which is the origin of this user. This value cannot be changed.|
|status|string|true|none|The user's status, e.g. active or disabled.|
|readOnly|boolean|false|none|Indicates whether the user's properties could be modified by the Nexus Repository Manager. When false only roles are considered during update.|
|roles|[string]|false|none|The roles which the user has been assigned within Nexus.|
|externalRoles|[string]|false|none|The roles which the user has been assigned in an external source, e.g. LDAP group. These cannot be changed within the Nexus Repository Manager.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|locked|
|status|disabled|
|status|changepassword|

<h2 id="tocS_ApiCreateUser">ApiCreateUser</h2>
<!-- backwards compatibility -->
<a id="schemaapicreateuser"></a>
<a id="schema_ApiCreateUser"></a>
<a id="tocSapicreateuser"></a>
<a id="tocsapicreateuser"></a>

```json
{
  "userId": "string",
  "firstName": "string",
  "lastName": "string",
  "emailAddress": "string",
  "password": "string",
  "status": "active",
  "roles": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|false|none|The userid which is required for login. This value cannot be changed.|
|firstName|string|false|none|The first name of the user.|
|lastName|string|false|none|The last name of the user.|
|emailAddress|string|false|none|The email address associated with the user.|
|password|string|false|none|The password for the new user.|
|status|string|true|none|The user's status, e.g. active or disabled.|
|roles|[string]|false|none|The roles which the user has been assigned within Nexus.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|locked|
|status|disabled|
|status|changepassword|

<h2 id="tocS_ApiPrivilege">ApiPrivilege</h2>
<!-- backwards compatibility -->
<a id="schemaapiprivilege"></a>
<a id="schema_ApiPrivilege"></a>
<a id="tocSapiprivilege"></a>
<a id="tocsapiprivilege"></a>

```json
{
  "type": "string",
  "name": "string",
  "description": "string",
  "readOnly": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type of privilege, each type covers different portions of the system. External values supplied to this will be ignored by the system.|
|name|string|false|none|The name of the privilege.  This value cannot be changed.|
|description|string|false|none|none|
|readOnly|boolean|false|none|Indicates whether the privilege can be changed. External values supplied to this will be ignored by the system.|

<h2 id="tocS_ApiPrivilegeWildcardRequest">ApiPrivilegeWildcardRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiprivilegewildcardrequest"></a>
<a id="schema_ApiPrivilegeWildcardRequest"></a>
<a id="tocSapiprivilegewildcardrequest"></a>
<a id="tocsapiprivilegewildcardrequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "pattern": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the privilege.  This value cannot be changed.|
|description|string|false|none|none|
|pattern|string|false|none|A colon separated list of parts that create a permission string.|

<h2 id="tocS_ApiPrivilegeApplicationRequest">ApiPrivilegeApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiprivilegeapplicationrequest"></a>
<a id="schema_ApiPrivilegeApplicationRequest"></a>
<a id="tocSapiprivilegeapplicationrequest"></a>
<a id="tocsapiprivilegeapplicationrequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "domain": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the privilege.  This value cannot be changed.|
|description|string|false|none|none|
|actions|[string]|false|none|A collection of actions to associate with the privilege, using BREAD syntax (browse,read,edit,add,delete,all) as well as 'run' for script privileges.|
|domain|string|false|none|The domain (i.e. 'blobstores', 'capabilities' or even '*' for all) that this privilege is granting access to.  Note that creating new privileges with a domain is only necessary when using plugins that define their own domain(s).|

<h2 id="tocS_RealmApiXO">RealmApiXO</h2>
<!-- backwards compatibility -->
<a id="schemarealmapixo"></a>
<a id="schema_RealmApiXO"></a>
<a id="tocSrealmapixo"></a>
<a id="tocsrealmapixo"></a>

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

<h2 id="tocS_RoleXOResponse">RoleXOResponse</h2>
<!-- backwards compatibility -->
<a id="schemarolexoresponse"></a>
<a id="schema_RoleXOResponse"></a>
<a id="tocSrolexoresponse"></a>
<a id="tocsrolexoresponse"></a>

```json
{
  "id": "string",
  "source": "string",
  "name": "string",
  "description": "string",
  "readOnly": true,
  "privileges": [
    "string"
  ],
  "roles": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The id of the role.|
|source|string|false|none|The user source which is the origin of this role.|
|name|string|false|none|The name of the role.|
|description|string|false|none|The description of this role.|
|readOnly|boolean|false|none|Indicates whether the role can be changed. The system will ignore any supplied external values.|
|privileges|[string]|false|none|The list of privileges assigned to this role.|
|roles|[string]|false|none|The list of roles assigned to this role.|

<h2 id="tocS_RoleXORequest">RoleXORequest</h2>
<!-- backwards compatibility -->
<a id="schemarolexorequest"></a>
<a id="schema_RoleXORequest"></a>
<a id="tocSrolexorequest"></a>
<a id="tocsrolexorequest"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "privileges": [
    "string"
  ],
  "roles": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The id of the role.|
|name|string|false|none|The name of the role.|
|description|string|false|none|The description of this role.|
|privileges|[string]|false|none|The list of privileges assigned to this role.|
|roles|[string]|false|none|The list of roles assigned to this role.|

<h2 id="tocS_Page">Page</h2>
<!-- backwards compatibility -->
<a id="schemapage"></a>
<a id="schema_Page"></a>
<a id="tocSpage"></a>
<a id="tocspage"></a>

```json
{
  "items": [
    {}
  ],
  "continuationToken": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|none|
|continuationToken|string|false|none|none|

<h2 id="tocS_PageTaskXO">PageTaskXO</h2>
<!-- backwards compatibility -->
<a id="schemapagetaskxo"></a>
<a id="schema_PageTaskXO"></a>
<a id="tocSpagetaskxo"></a>
<a id="tocspagetaskxo"></a>

```json
{
  "items": [
    {
      "id": "string",
      "name": "string",
      "type": "string",
      "message": "string",
      "currentState": "string",
      "lastRunResult": "string",
      "nextRun": "2019-08-24T14:15:22Z",
      "lastRun": "2019-08-24T14:15:22Z"
    }
  ],
  "continuationToken": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[TaskXO](#schemataskxo)]|false|none|none|
|continuationToken|string|false|none|none|

<h2 id="tocS_TaskXO">TaskXO</h2>
<!-- backwards compatibility -->
<a id="schemataskxo"></a>
<a id="schema_TaskXO"></a>
<a id="tocStaskxo"></a>
<a id="tocstaskxo"></a>

```json
{
  "id": "string",
  "name": "string",
  "type": "string",
  "message": "string",
  "currentState": "string",
  "lastRunResult": "string",
  "nextRun": "2019-08-24T14:15:22Z",
  "lastRun": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|type|string|false|none|none|
|message|string|false|none|none|
|currentState|string|false|none|none|
|lastRunResult|string|false|none|none|
|nextRun|string(date-time)|false|none|none|
|lastRun|string(date-time)|false|none|none|

<h2 id="tocS_BlobStoreQuotaResultXO">BlobStoreQuotaResultXO</h2>
<!-- backwards compatibility -->
<a id="schemablobstorequotaresultxo"></a>
<a id="schema_BlobStoreQuotaResultXO"></a>
<a id="tocSblobstorequotaresultxo"></a>
<a id="tocsblobstorequotaresultxo"></a>

```json
{
  "isViolation": true,
  "message": "string",
  "blobStoreName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isViolation|boolean|false|none|none|
|message|string|false|none|none|
|blobStoreName|string|false|none|none|

<h2 id="tocS_BlobStoreApiSoftQuota">BlobStoreApiSoftQuota</h2>
<!-- backwards compatibility -->
<a id="schemablobstoreapisoftquota"></a>
<a id="schema_BlobStoreApiSoftQuota"></a>
<a id="tocSblobstoreapisoftquota"></a>
<a id="tocsblobstoreapisoftquota"></a>

```json
{
  "type": "spaceRemainingQuota",
  "limit": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|The type to use such as spaceRemainingQuota, or spaceUsedQuota|
|limit|integer(int64)|false|none|The limit in MB.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|spaceRemainingQuota|
|type|spaceUsedQuota|

<h2 id="tocS_GenericBlobStoreApiResponse">GenericBlobStoreApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenericblobstoreapiresponse"></a>
<a id="schema_GenericBlobStoreApiResponse"></a>
<a id="tocSgenericblobstoreapiresponse"></a>
<a id="tocsgenericblobstoreapiresponse"></a>

```json
{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "name": "string",
  "type": "string",
  "unavailable": true,
  "blobCount": 0,
  "totalSizeInBytes": 0,
  "availableSpaceInBytes": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|softQuota|[BlobStoreApiSoftQuota](#schemablobstoreapisoftquota)|false|none|none|
|name|string|false|none|none|
|type|string|false|none|none|
|unavailable|boolean|false|none|none|
|blobCount|integer(int64)|false|none|none|
|totalSizeInBytes|integer(int64)|false|none|none|
|availableSpaceInBytes|integer(int64)|false|none|none|

<h2 id="tocS_FileBlobStoreApiCreateRequest">FileBlobStoreApiCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemafileblobstoreapicreaterequest"></a>
<a id="schema_FileBlobStoreApiCreateRequest"></a>
<a id="tocSfileblobstoreapicreaterequest"></a>
<a id="tocsfileblobstoreapicreaterequest"></a>

```json
{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "path": "string",
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|softQuota|[BlobStoreApiSoftQuota](#schemablobstoreapisoftquota)|false|none|none|
|path|string|false|none|The path to the blobstore contents. This can be an absolute path to anywhere on the system Nexus Repository Manager has access to or it can be a path relative to the sonatype-work directory.|
|name|string|false|none|none|

<h2 id="tocS_FileBlobStoreApiUpdateRequest">FileBlobStoreApiUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemafileblobstoreapiupdaterequest"></a>
<a id="schema_FileBlobStoreApiUpdateRequest"></a>
<a id="tocSfileblobstoreapiupdaterequest"></a>
<a id="tocsfileblobstoreapiupdaterequest"></a>

```json
{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "path": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|softQuota|[BlobStoreApiSoftQuota](#schemablobstoreapisoftquota)|false|none|none|
|path|string|false|none|The path to the blobstore contents. This can be an absolute path to anywhere on the system Nexus Repository Manager has access to or it can be a path relative to the sonatype-work directory.|

<h2 id="tocS_FileBlobStoreApiModel">FileBlobStoreApiModel</h2>
<!-- backwards compatibility -->
<a id="schemafileblobstoreapimodel"></a>
<a id="schema_FileBlobStoreApiModel"></a>
<a id="tocSfileblobstoreapimodel"></a>
<a id="tocsfileblobstoreapimodel"></a>

```json
{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "path": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|softQuota|[BlobStoreApiSoftQuota](#schemablobstoreapisoftquota)|false|none|none|
|path|string|false|none|The path to the blobstore contents. This can be an absolute path to anywhere on the system Nexus Repository Manager has access to or it can be a path relative to the sonatype-work directory.|

<h2 id="tocS_NodeInformation">NodeInformation</h2>
<!-- backwards compatibility -->
<a id="schemanodeinformation"></a>
<a id="schema_NodeInformation"></a>
<a id="tocSnodeinformation"></a>
<a id="tocsnodeinformation"></a>

```json
{
  "nodeId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodeId|string|false|none|none|

<h2 id="tocS_ReadOnlyState">ReadOnlyState</h2>
<!-- backwards compatibility -->
<a id="schemareadonlystate"></a>
<a id="schema_ReadOnlyState"></a>
<a id="tocSreadonlystate"></a>
<a id="tocsreadonlystate"></a>

```json
{
  "summaryReason": "string",
  "systemInitiated": true,
  "frozen": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|summaryReason|string|false|none|none|
|systemInitiated|boolean|false|none|none|
|frozen|boolean|false|none|none|

<h2 id="tocS_ReEncryptionRequestApiXO">ReEncryptionRequestApiXO</h2>
<!-- backwards compatibility -->
<a id="schemareencryptionrequestapixo"></a>
<a id="schema_ReEncryptionRequestApiXO"></a>
<a id="tocSreencryptionrequestapixo"></a>
<a id="tocsreencryptionrequestapixo"></a>

```json
{
  "secretKeyId": "string",
  "notifyEmail": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secretKeyId|string|false|none|Key identifier that will be used to re-encrypt secrets|
|notifyEmail|string|false|none|Optional - Email to notify when task finishes|

<h2 id="tocS_ApiClusterDatabaseMigrationResultDTO">ApiClusterDatabaseMigrationResultDTO</h2>
<!-- backwards compatibility -->
<a id="schemaapiclusterdatabasemigrationresultdto"></a>
<a id="schema_ApiClusterDatabaseMigrationResultDTO"></a>
<a id="tocSapiclusterdatabasemigrationresultdto"></a>
<a id="tocsapiclusterdatabasemigrationresultdto"></a>

```json
{
  "message": "string",
  "state": "MIGRATION_NOT_REQUIRED"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|Provides a message indicating the current state of the migration|
|state|string|false|none|Provides the current migration state.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|MIGRATION_NOT_REQUIRED|
|state|MIGRATION_REQUIRED|
|state|MIGRATION_IN_PROGRESS|
|state|MIGRATION_FAILED|
|state|MIGRATION_FAILED_RETRYABLE|
|state|MIGRATION_SUCCEED|

<h2 id="tocS_ApiCertificate">ApiCertificate</h2>
<!-- backwards compatibility -->
<a id="schemaapicertificate"></a>
<a id="schema_ApiCertificate"></a>
<a id="tocSapicertificate"></a>
<a id="tocsapicertificate"></a>

```json
{
  "expiresOn": 0,
  "fingerprint": "string",
  "id": "string",
  "issuedOn": 0,
  "issuerCommonName": "string",
  "issuerOrganization": "string",
  "issuerOrganizationalUnit": "string",
  "pem": "string",
  "serialNumber": "string",
  "subjectCommonName": "string",
  "subjectOrganization": "string",
  "subjectOrganizationalUnit": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiresOn|integer(int64)|false|none|none|
|fingerprint|string|false|none|none|
|id|string|false|none|none|
|issuedOn|integer(int64)|false|none|none|
|issuerCommonName|string|false|none|none|
|issuerOrganization|string|false|none|none|
|issuerOrganizationalUnit|string|false|none|none|
|pem|string|false|none|none|
|serialNumber|string|false|none|none|
|subjectCommonName|string|false|none|none|
|subjectOrganization|string|false|none|none|
|subjectOrganizationalUnit|string|false|none|none|

<h2 id="tocS_S3BlobStoreApiAdvancedBucketConnection">S3BlobStoreApiAdvancedBucketConnection</h2>
<!-- backwards compatibility -->
<a id="schemas3blobstoreapiadvancedbucketconnection"></a>
<a id="schema_S3BlobStoreApiAdvancedBucketConnection"></a>
<a id="tocSs3blobstoreapiadvancedbucketconnection"></a>
<a id="tocss3blobstoreapiadvancedbucketconnection"></a>

```json
{
  "endpoint": "string",
  "signerType": "string",
  "forcePathStyle": true,
  "maxConnectionPoolSize": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoint|string|false|read-only|A custom endpoint URL for third party object stores using the S3 API.|
|signerType|string|false|read-only|An API signature version which may be required for third party object stores using the S3 API.|
|forcePathStyle|boolean|false|read-only|Setting this flag will result in path-style access being used for all requests.|
|maxConnectionPoolSize|integer(int32)|false|read-only|Setting this value will override the default connection pool size of Nexus of the s3 client for this blobstore.|

<h2 id="tocS_S3BlobStoreApiBucket">S3BlobStoreApiBucket</h2>
<!-- backwards compatibility -->
<a id="schemas3blobstoreapibucket"></a>
<a id="schema_S3BlobStoreApiBucket"></a>
<a id="tocSs3blobstoreapibucket"></a>
<a id="tocss3blobstoreapibucket"></a>

```json
{
  "region": "DEFAULT",
  "name": "string",
  "prefix": "string",
  "expiration": 3
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|region|string|true|read-only|The AWS region to create a new S3 bucket in or an existing S3 bucket's region|
|name|string|true|read-only|The name of the S3 bucket|
|prefix|string|false|read-only|The S3 blob store (i.e S3 object) key prefix|
|expiration|integer(int32)|true|read-only|How many days until deleted blobs are finally removed from the S3 bucket (-1 to disable)|

<h2 id="tocS_S3BlobStoreApiBucketConfiguration">S3BlobStoreApiBucketConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemas3blobstoreapibucketconfiguration"></a>
<a id="schema_S3BlobStoreApiBucketConfiguration"></a>
<a id="tocSs3blobstoreapibucketconfiguration"></a>
<a id="tocss3blobstoreapibucketconfiguration"></a>

```json
{
  "bucket": {
    "region": "DEFAULT",
    "name": "string",
    "prefix": "string",
    "expiration": 3
  },
  "encryption": {
    "encryptionType": "s3ManagedEncryption",
    "encryptionKey": "string"
  },
  "failoverBuckets": [
    {
      "region": "string",
      "bucketName": "string"
    }
  ],
  "activeRegion": "string",
  "bucketSecurity": {
    "accessKeyId": "string",
    "secretAccessKey": "string",
    "role": "string",
    "sessionToken": "string"
  },
  "advancedBucketConnection": {
    "endpoint": "string",
    "signerType": "string",
    "forcePathStyle": true,
    "maxConnectionPoolSize": 0
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|[S3BlobStoreApiBucket](#schemas3blobstoreapibucket)|true|none|none|
|encryption|[S3BlobStoreApiEncryption](#schemas3blobstoreapiencryption)|false|none|none|
|failoverBuckets|[[S3BlobStoreApiFailoverBucket](#schemas3blobstoreapifailoverbucket)]|false|none|A list of secondary buckets which have bidirectional replication enabled and should be used when Nexus is running in the region|
|activeRegion|string|false|read-only|The active region based on bucket configuration, failover buckets, and EC2 region Nexus is running.|
|bucketSecurity|[S3BlobStoreApiBucketSecurity](#schemas3blobstoreapibucketsecurity)|false|none|none|
|advancedBucketConnection|[S3BlobStoreApiAdvancedBucketConnection](#schemas3blobstoreapiadvancedbucketconnection)|false|none|none|

<h2 id="tocS_S3BlobStoreApiBucketSecurity">S3BlobStoreApiBucketSecurity</h2>
<!-- backwards compatibility -->
<a id="schemas3blobstoreapibucketsecurity"></a>
<a id="schema_S3BlobStoreApiBucketSecurity"></a>
<a id="tocSs3blobstoreapibucketsecurity"></a>
<a id="tocss3blobstoreapibucketsecurity"></a>

```json
{
  "accessKeyId": "string",
  "secretAccessKey": "string",
  "role": "string",
  "sessionToken": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessKeyId|string|false|read-only|An IAM access key ID for granting access to the S3 bucket|
|secretAccessKey|string|false|none|The secret access key associated with the specified IAM access key ID|
|role|string|false|read-only|An IAM role to assume in order to access the S3 bucket|
|sessionToken|string|false|read-only|An AWS STS session token associated with temporary security credentials which grant access to the S3 bucket|

<h2 id="tocS_S3BlobStoreApiEncryption">S3BlobStoreApiEncryption</h2>
<!-- backwards compatibility -->
<a id="schemas3blobstoreapiencryption"></a>
<a id="schema_S3BlobStoreApiEncryption"></a>
<a id="tocSs3blobstoreapiencryption"></a>
<a id="tocss3blobstoreapiencryption"></a>

```json
{
  "encryptionType": "s3ManagedEncryption",
  "encryptionKey": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|encryptionType|string|false|read-only|The type of S3 server side encryption to use.|
|encryptionKey|string|false|read-only|The encryption key.|

#### Enumerated Values

|Property|Value|
|---|---|
|encryptionType|s3ManagedEncryption|
|encryptionType|kmsManagedEncryption|

<h2 id="tocS_S3BlobStoreApiFailoverBucket">S3BlobStoreApiFailoverBucket</h2>
<!-- backwards compatibility -->
<a id="schemas3blobstoreapifailoverbucket"></a>
<a id="schema_S3BlobStoreApiFailoverBucket"></a>
<a id="tocSs3blobstoreapifailoverbucket"></a>
<a id="tocss3blobstoreapifailoverbucket"></a>

```json
{
  "region": "string",
  "bucketName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|region|string|true|read-only|The region containing the bucket|
|bucketName|string|true|read-only|The name of the bucket in the region|

<h2 id="tocS_S3BlobStoreApiModel">S3BlobStoreApiModel</h2>
<!-- backwards compatibility -->
<a id="schemas3blobstoreapimodel"></a>
<a id="schema_S3BlobStoreApiModel"></a>
<a id="tocSs3blobstoreapimodel"></a>
<a id="tocss3blobstoreapimodel"></a>

```json
{
  "name": "s3",
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "bucket": {
      "region": "DEFAULT",
      "name": "string",
      "prefix": "string",
      "expiration": 3
    },
    "encryption": {
      "encryptionType": "s3ManagedEncryption",
      "encryptionKey": "string"
    },
    "failoverBuckets": [
      {
        "region": "string",
        "bucketName": "string"
      }
    ],
    "activeRegion": "string",
    "bucketSecurity": {
      "accessKeyId": "string",
      "secretAccessKey": "string",
      "role": "string",
      "sessionToken": "string"
    },
    "advancedBucketConnection": {
      "endpoint": "string",
      "signerType": "string",
      "forcePathStyle": true,
      "maxConnectionPoolSize": 0
    }
  },
  "type": "S3"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|read-only|The name of the S3 blob store.|
|softQuota|[BlobStoreApiSoftQuota](#schemablobstoreapisoftquota)|false|none|none|
|bucketConfiguration|[S3BlobStoreApiBucketConfiguration](#schemas3blobstoreapibucketconfiguration)|true|none|none|
|type|string|false|read-only|The blob store type.|

<h2 id="tocS_ApiEmailConfiguration">ApiEmailConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaapiemailconfiguration"></a>
<a id="schema_ApiEmailConfiguration"></a>
<a id="tocSapiemailconfiguration"></a>
<a id="tocsapiemailconfiguration"></a>

```json
{
  "enabled": true,
  "host": "string",
  "port": 0,
  "username": "string",
  "password": "string",
  "fromAddress": "nexus@example.org",
  "subjectPrefix": "string",
  "startTlsEnabled": true,
  "startTlsRequired": true,
  "sslOnConnectEnabled": true,
  "sslServerIdentityCheckEnabled": true,
  "nexusTrustStoreEnabled": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|host|string|false|none|none|
|port|integer(int32)|true|none|none|
|username|string|false|none|none|
|password|string|false|none|none|
|fromAddress|string|false|none|none|
|subjectPrefix|string|false|none|A prefix to add to all email subjects to aid in identifying automated emails|
|startTlsEnabled|boolean|false|none|Enable STARTTLS Support for Insecure Connections|
|startTlsRequired|boolean|false|none|Require STARTTLS Support|
|sslOnConnectEnabled|boolean|false|none|Enable SSL/TLS Encryption upon Connection|
|sslServerIdentityCheckEnabled|boolean|false|none|Verify the server certificate when using TLS or SSL|
|nexusTrustStoreEnabled|boolean|false|none|Use the Nexus Repository Manager's certificate truststore|

<h2 id="tocS_ApiEmailValidation">ApiEmailValidation</h2>
<!-- backwards compatibility -->
<a id="schemaapiemailvalidation"></a>
<a id="schema_ApiEmailValidation"></a>
<a id="tocSapiemailvalidation"></a>
<a id="tocsapiemailvalidation"></a>

```json
{
  "success": true,
  "reason": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|reason|string|false|none|none|

<h2 id="tocS_Result">Result</h2>
<!-- backwards compatibility -->
<a id="schemaresult"></a>
<a id="schema_Result"></a>
<a id="tocSresult"></a>
<a id="tocsresult"></a>

```json
{
  "healthy": true,
  "message": "string",
  "error": {
    "cause": {},
    "stackTrace": [
      {
        "classLoaderName": "string",
        "moduleName": "string",
        "moduleVersion": "string",
        "methodName": "string",
        "fileName": "string",
        "lineNumber": 0,
        "nativeMethod": true,
        "className": "string"
      }
    ],
    "message": "string",
    "suppressed": [
      {}
    ],
    "localizedMessage": "string"
  },
  "details": {
    "property1": {},
    "property2": {}
  },
  "time": 0,
  "duration": 0,
  "timestamp": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthy|boolean|false|none|none|
|message|string|false|none|none|
|error|[Throwable](#schemathrowable)|false|none|none|
|details|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|time|integer(int64)|false|none|none|
|duration|integer(int64)|false|none|none|
|timestamp|string|false|none|none|

<h2 id="tocS_StackTraceElement">StackTraceElement</h2>
<!-- backwards compatibility -->
<a id="schemastacktraceelement"></a>
<a id="schema_StackTraceElement"></a>
<a id="tocSstacktraceelement"></a>
<a id="tocsstacktraceelement"></a>

```json
{
  "classLoaderName": "string",
  "moduleName": "string",
  "moduleVersion": "string",
  "methodName": "string",
  "fileName": "string",
  "lineNumber": 0,
  "nativeMethod": true,
  "className": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classLoaderName|string|false|none|none|
|moduleName|string|false|none|none|
|moduleVersion|string|false|none|none|
|methodName|string|false|none|none|
|fileName|string|false|none|none|
|lineNumber|integer(int32)|false|none|none|
|nativeMethod|boolean|false|none|none|
|className|string|false|none|none|

<h2 id="tocS_Throwable">Throwable</h2>
<!-- backwards compatibility -->
<a id="schemathrowable"></a>
<a id="schema_Throwable"></a>
<a id="tocSthrowable"></a>
<a id="tocsthrowable"></a>

```json
{
  "cause": {
    "cause": {},
    "stackTrace": [
      {
        "classLoaderName": "string",
        "moduleName": "string",
        "moduleVersion": "string",
        "methodName": "string",
        "fileName": "string",
        "lineNumber": 0,
        "nativeMethod": true,
        "className": "string"
      }
    ],
    "message": "string",
    "suppressed": [
      {}
    ],
    "localizedMessage": "string"
  },
  "stackTrace": [
    {
      "classLoaderName": "string",
      "moduleName": "string",
      "moduleVersion": "string",
      "methodName": "string",
      "fileName": "string",
      "lineNumber": 0,
      "nativeMethod": true,
      "className": "string"
    }
  ],
  "message": "string",
  "suppressed": [
    {
      "cause": {},
      "stackTrace": [
        {
          "classLoaderName": "string",
          "moduleName": "string",
          "moduleVersion": "string",
          "methodName": "string",
          "fileName": "string",
          "lineNumber": 0,
          "nativeMethod": true,
          "className": "string"
        }
      ],
      "message": "string",
      "suppressed": [],
      "localizedMessage": "string"
    }
  ],
  "localizedMessage": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cause|[Throwable](#schemathrowable)|false|none|none|
|stackTrace|[[StackTraceElement](#schemastacktraceelement)]|false|none|none|
|message|string|false|none|none|
|suppressed|[[Throwable](#schemathrowable)]|false|none|none|
|localizedMessage|string|false|none|none|

<h2 id="tocS_SupportZipXO">SupportZipXO</h2>
<!-- backwards compatibility -->
<a id="schemasupportzipxo"></a>
<a id="schema_SupportZipXO"></a>
<a id="tocSsupportzipxo"></a>
<a id="tocssupportzipxo"></a>

```json
{
  "file": "string",
  "name": "string",
  "size": "string",
  "truncated": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|false|none|none|
|name|string|false|none|none|
|size|string|false|none|none|
|truncated|boolean|false|none|none|

<h2 id="tocS_SupportZipGeneratorRequest">SupportZipGeneratorRequest</h2>
<!-- backwards compatibility -->
<a id="schemasupportzipgeneratorrequest"></a>
<a id="schema_SupportZipGeneratorRequest"></a>
<a id="tocSsupportzipgeneratorrequest"></a>
<a id="tocssupportzipgeneratorrequest"></a>

```json
{
  "systemInformation": true,
  "threadDump": true,
  "metrics": true,
  "configuration": true,
  "security": true,
  "log": true,
  "taskLog": true,
  "auditLog": true,
  "jmx": true,
  "replication": true,
  "limitFileSizes": true,
  "limitZipSize": true,
  "hostname": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|systemInformation|boolean|false|none|none|
|threadDump|boolean|false|none|none|
|metrics|boolean|false|none|none|
|configuration|boolean|false|none|none|
|security|boolean|false|none|none|
|log|boolean|false|none|none|
|taskLog|boolean|false|none|none|
|auditLog|boolean|false|none|none|
|jmx|boolean|false|none|none|
|replication|boolean|false|none|none|
|limitFileSizes|boolean|false|none|none|
|limitZipSize|boolean|false|none|none|
|hostname|string|false|none|none|

<h2 id="tocS_AssetXO">AssetXO</h2>
<!-- backwards compatibility -->
<a id="schemaassetxo"></a>
<a id="schema_AssetXO"></a>
<a id="tocSassetxo"></a>
<a id="tocsassetxo"></a>

```json
{
  "downloadUrl": "string",
  "path": "string",
  "id": "string",
  "repository": "string",
  "format": "string",
  "checksum": {
    "property1": {},
    "property2": {}
  },
  "contentType": "string",
  "lastModified": "2019-08-24T14:15:22Z",
  "lastDownloaded": "2019-08-24T14:15:22Z",
  "uploader": "string",
  "uploaderIp": "string",
  "fileSize": 0,
  "blobCreated": "2019-08-24T14:15:22Z",
  "blobStoreName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloadUrl|string|false|none|none|
|path|string|false|none|none|
|id|string|false|none|none|
|repository|string|false|none|none|
|format|string|false|none|none|
|checksum|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|contentType|string|false|none|none|
|lastModified|string(date-time)|false|none|none|
|lastDownloaded|string(date-time)|false|none|none|
|uploader|string|false|none|none|
|uploaderIp|string|false|none|none|
|fileSize|integer(int64)|false|none|none|
|blobCreated|string(date-time)|false|none|none|
|blobStoreName|string|false|none|none|

<h2 id="tocS_PageAssetXO">PageAssetXO</h2>
<!-- backwards compatibility -->
<a id="schemapageassetxo"></a>
<a id="schema_PageAssetXO"></a>
<a id="tocSpageassetxo"></a>
<a id="tocspageassetxo"></a>

```json
{
  "items": [
    {
      "downloadUrl": "string",
      "path": "string",
      "id": "string",
      "repository": "string",
      "format": "string",
      "checksum": {
        "property1": {},
        "property2": {}
      },
      "contentType": "string",
      "lastModified": "2019-08-24T14:15:22Z",
      "lastDownloaded": "2019-08-24T14:15:22Z",
      "uploader": "string",
      "uploaderIp": "string",
      "fileSize": 0,
      "blobCreated": "2019-08-24T14:15:22Z",
      "blobStoreName": "string"
    }
  ],
  "continuationToken": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[AssetXO](#schemaassetxo)]|false|none|none|
|continuationToken|string|false|none|none|

<h2 id="tocS_ComponentXO">ComponentXO</h2>
<!-- backwards compatibility -->
<a id="schemacomponentxo"></a>
<a id="schema_ComponentXO"></a>
<a id="tocScomponentxo"></a>
<a id="tocscomponentxo"></a>

```json
{
  "id": "string",
  "repository": "string",
  "format": "string",
  "group": "string",
  "name": "string",
  "version": "string",
  "assets": [
    {
      "downloadUrl": "string",
      "path": "string",
      "id": "string",
      "repository": "string",
      "format": "string",
      "checksum": {
        "property1": {},
        "property2": {}
      },
      "contentType": "string",
      "lastModified": "2019-08-24T14:15:22Z",
      "lastDownloaded": "2019-08-24T14:15:22Z",
      "uploader": "string",
      "uploaderIp": "string",
      "fileSize": 0,
      "blobCreated": "2019-08-24T14:15:22Z",
      "blobStoreName": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|repository|string|false|none|none|
|format|string|false|none|none|
|group|string|false|none|none|
|name|string|false|none|none|
|version|string|false|none|none|
|assets|[[AssetXO](#schemaassetxo)]|false|none|none|

<h2 id="tocS_PageComponentXO">PageComponentXO</h2>
<!-- backwards compatibility -->
<a id="schemapagecomponentxo"></a>
<a id="schema_PageComponentXO"></a>
<a id="tocSpagecomponentxo"></a>
<a id="tocspagecomponentxo"></a>

```json
{
  "items": [
    {
      "id": "string",
      "repository": "string",
      "format": "string",
      "group": "string",
      "name": "string",
      "version": "string",
      "assets": [
        {
          "downloadUrl": "string",
          "path": "string",
          "id": "string",
          "repository": "string",
          "format": "string",
          "checksum": {
            "property1": {},
            "property2": {}
          },
          "contentType": "string",
          "lastModified": "2019-08-24T14:15:22Z",
          "lastDownloaded": "2019-08-24T14:15:22Z",
          "uploader": "string",
          "uploaderIp": "string",
          "fileSize": 0,
          "blobCreated": "2019-08-24T14:15:22Z",
          "blobStoreName": "string"
        }
      ]
    }
  ],
  "continuationToken": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[ComponentXO](#schemacomponentxo)]|false|none|none|
|continuationToken|string|false|none|none|

<h2 id="tocS_AbstractApiRepository">AbstractApiRepository</h2>
<!-- backwards compatibility -->
<a id="schemaabstractapirepository"></a>
<a id="schema_AbstractApiRepository"></a>
<a id="tocSabstractapirepository"></a>
<a id="tocsabstractapirepository"></a>

```json
{
  "name": "internal",
  "format": "npm",
  "type": "hosted",
  "url": "string",
  "online": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A unique identifier for this repository|
|format|string|false|none|Component format held in this repository|
|type|string|false|none|Controls if deployments of and updates to artifacts are allowed|
|url|string|false|none|URL to the repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|

#### Enumerated Values

|Property|Value|
|---|---|
|type|hosted|
|type|proxy|
|type|group|

<h2 id="tocS_ContentSelectorApiResponse">ContentSelectorApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontentselectorapiresponse"></a>
<a id="schema_ContentSelectorApiResponse"></a>
<a id="tocScontentselectorapiresponse"></a>
<a id="tocscontentselectorapiresponse"></a>

```json
{
  "name": "string",
  "type": "csel",
  "description": "string",
  "expression": "format == \"maven2\" and path =^ \"/org/sonatype/nexus\""
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The content selector name cannot be changed after creation|
|type|string|false|none|The type of content selector the backend is using|
|description|string|false|none|A human-readable description|
|expression|string|false|none|The expression used to identify content|

#### Enumerated Values

|Property|Value|
|---|---|
|type|csel|
|type|jexl|

<h2 id="tocS_ContentSelectorApiCreateRequest">ContentSelectorApiCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacontentselectorapicreaterequest"></a>
<a id="schema_ContentSelectorApiCreateRequest"></a>
<a id="tocScontentselectorapicreaterequest"></a>
<a id="tocscontentselectorapicreaterequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "expression": "format == \"maven2\" and path =^ \"/org/sonatype/nexus\""
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The content selector name cannot be changed after creation|
|description|string|false|none|A human-readable description|
|expression|string|false|none|The expression used to identify content|

<h2 id="tocS_ContentSelectorApiUpdateRequest">ContentSelectorApiUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacontentselectorapiupdaterequest"></a>
<a id="schema_ContentSelectorApiUpdateRequest"></a>
<a id="tocScontentselectorapiupdaterequest"></a>
<a id="tocscontentselectorapiupdaterequest"></a>

```json
{
  "description": "string",
  "expression": "format == \"maven2\" and path =^ \"/org/sonatype/nexus\""
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|An optional description of this content selector|
|expression|string|false|none|The expression used to identify content|

<h2 id="tocS_RepositoryXO">RepositoryXO</h2>
<!-- backwards compatibility -->
<a id="schemarepositoryxo"></a>
<a id="schema_RepositoryXO"></a>
<a id="tocSrepositoryxo"></a>
<a id="tocsrepositoryxo"></a>

```json
{
  "name": "string",
  "format": "string",
  "type": "string",
  "url": "string",
  "attributes": {
    "property1": {},
    "property2": {}
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|format|string|false|none|none|
|type|string|false|none|none|
|url|string|false|none|none|
|attributes|object|false|none|none|
|» **additionalProperties**|object|false|none|none|

<h2 id="tocS_RoutingRuleXO">RoutingRuleXO</h2>
<!-- backwards compatibility -->
<a id="schemaroutingrulexo"></a>
<a id="schema_RoutingRuleXO"></a>
<a id="tocSroutingrulexo"></a>
<a id="tocsroutingrulexo"></a>

```json
{
  "name": "string",
  "description": "string",
  "mode": "BLOCK",
  "matchers": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|description|string|false|none|none|
|mode|string|false|none|Determines what should be done with requests when their path matches any of the matchers|
|matchers|[string]|false|none|Regular expressions used to identify request paths that are allowed or blocked (depending on mode)|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|BLOCK|
|mode|ALLOW|

<h2 id="tocS_UploadDefinitionXO">UploadDefinitionXO</h2>
<!-- backwards compatibility -->
<a id="schemauploaddefinitionxo"></a>
<a id="schema_UploadDefinitionXO"></a>
<a id="tocSuploaddefinitionxo"></a>
<a id="tocsuploaddefinitionxo"></a>

```json
{
  "format": "string",
  "multipleUpload": true,
  "componentFields": [
    {
      "name": "string",
      "type": "string",
      "description": "string",
      "optional": true,
      "group": "string"
    }
  ],
  "assetFields": [
    {
      "name": "string",
      "type": "string",
      "description": "string",
      "optional": true,
      "group": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|none|
|multipleUpload|boolean|false|none|none|
|componentFields|[[UploadFieldDefinitionXO](#schemauploadfielddefinitionxo)]|false|none|none|
|assetFields|[[UploadFieldDefinitionXO](#schemauploadfielddefinitionxo)]|false|none|none|

<h2 id="tocS_UploadFieldDefinitionXO">UploadFieldDefinitionXO</h2>
<!-- backwards compatibility -->
<a id="schemauploadfielddefinitionxo"></a>
<a id="schema_UploadFieldDefinitionXO"></a>
<a id="tocSuploadfielddefinitionxo"></a>
<a id="tocsuploadfielddefinitionxo"></a>

```json
{
  "name": "string",
  "type": "string",
  "description": "string",
  "optional": true,
  "group": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|type|string|false|none|none|
|description|string|false|none|none|
|optional|boolean|false|none|none|
|group|string|false|none|none|

<h2 id="tocS_ApiPrivilegeRepositoryContentSelectorRequest">ApiPrivilegeRepositoryContentSelectorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiprivilegerepositorycontentselectorrequest"></a>
<a id="schema_ApiPrivilegeRepositoryContentSelectorRequest"></a>
<a id="tocSapiprivilegerepositorycontentselectorrequest"></a>
<a id="tocsapiprivilegerepositorycontentselectorrequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "format": "string",
  "repository": "string",
  "contentSelector": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the privilege.  This value cannot be changed.|
|description|string|false|none|none|
|actions|[string]|false|none|A collection of actions to associate with the privilege, using BREAD syntax (browse,read,edit,add,delete,all) as well as 'run' for script privileges.|
|format|string|false|none|The repository format (i.e 'nuget', 'npm') this privilege will grant access to (or * for all).|
|repository|string|false|none|The name of the repository this privilege will grant access to (or * for all).|
|contentSelector|string|false|none|The name of a content selector that will be used to grant access to content via this privilege.|

<h2 id="tocS_ApiPrivilegeRepositoryAdminRequest">ApiPrivilegeRepositoryAdminRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiprivilegerepositoryadminrequest"></a>
<a id="schema_ApiPrivilegeRepositoryAdminRequest"></a>
<a id="tocSapiprivilegerepositoryadminrequest"></a>
<a id="tocsapiprivilegerepositoryadminrequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "format": "string",
  "repository": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the privilege.  This value cannot be changed.|
|description|string|false|none|none|
|actions|[string]|false|none|A collection of actions to associate with the privilege, using BREAD syntax (browse,read,edit,add,delete,all) as well as 'run' for script privileges.|
|format|string|false|none|The repository format (i.e 'nuget', 'npm') this privilege will grant access to (or * for all).|
|repository|string|false|none|The name of the repository this privilege will grant access to (or * for all).|

<h2 id="tocS_ApiPrivilegeRepositoryViewRequest">ApiPrivilegeRepositoryViewRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiprivilegerepositoryviewrequest"></a>
<a id="schema_ApiPrivilegeRepositoryViewRequest"></a>
<a id="tocSapiprivilegerepositoryviewrequest"></a>
<a id="tocsapiprivilegerepositoryviewrequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "format": "string",
  "repository": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the privilege.  This value cannot be changed.|
|description|string|false|none|none|
|actions|[string]|false|none|A collection of actions to associate with the privilege, using BREAD syntax (browse,read,edit,add,delete,all) as well as 'run' for script privileges.|
|format|string|false|none|The repository format (i.e 'nuget', 'npm') this privilege will grant access to (or * for all).|
|repository|string|false|none|The name of the repository this privilege will grant access to (or * for all).|

<h2 id="tocS_GroupAttributes">GroupAttributes</h2>
<!-- backwards compatibility -->
<a id="schemagroupattributes"></a>
<a id="schema_GroupAttributes"></a>
<a id="tocSgroupattributes"></a>
<a id="tocsgroupattributes"></a>

```json
{
  "memberNames": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberNames|[string]|false|none|Member repositories' names|

<h2 id="tocS_MavenGroupRepositoryApiRequest">MavenGroupRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemamavengrouprepositoryapirequest"></a>
<a id="schema_MavenGroupRepositoryApiRequest"></a>
<a id="tocSmavengrouprepositoryapirequest"></a>
<a id="tocsmavengrouprepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|group|[GroupAttributes](#schemagroupattributes)|true|none|none|

<h2 id="tocS_StorageAttributes">StorageAttributes</h2>
<!-- backwards compatibility -->
<a id="schemastorageattributes"></a>
<a id="schema_StorageAttributes"></a>
<a id="tocSstorageattributes"></a>
<a id="tocsstorageattributes"></a>

```json
{
  "blobStoreName": "default",
  "strictContentTypeValidation": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blobStoreName|string|true|none|Blob store used to store repository contents|
|strictContentTypeValidation|boolean|true|none|Whether to validate uploaded content's MIME type appropriate for the repository format|

<h2 id="tocS_SimpleApiGroupRepository">SimpleApiGroupRepository</h2>
<!-- backwards compatibility -->
<a id="schemasimpleapigrouprepository"></a>
<a id="schema_SimpleApiGroupRepository"></a>
<a id="tocSsimpleapigrouprepository"></a>
<a id="tocssimpleapigrouprepository"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|group|[GroupAttributes](#schemagroupattributes)|true|none|none|

<h2 id="tocS_CleanupPolicyAttributes">CleanupPolicyAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacleanuppolicyattributes"></a>
<a id="schema_CleanupPolicyAttributes"></a>
<a id="tocScleanuppolicyattributes"></a>
<a id="tocscleanuppolicyattributes"></a>

```json
{
  "policyNames": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyNames|[string]|false|none|Components that match any of the applied policies will be deleted|

<h2 id="tocS_ComponentAttributes">ComponentAttributes</h2>
<!-- backwards compatibility -->
<a id="schemacomponentattributes"></a>
<a id="schema_ComponentAttributes"></a>
<a id="tocScomponentattributes"></a>
<a id="tocscomponentattributes"></a>

```json
{
  "proprietaryComponents": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proprietaryComponents|boolean|false|none|Components in this repository count as proprietary for namespace conflict attacks (requires Sonatype Nexus Firewall)|

<h2 id="tocS_HostedStorageAttributes">HostedStorageAttributes</h2>
<!-- backwards compatibility -->
<a id="schemahostedstorageattributes"></a>
<a id="schema_HostedStorageAttributes"></a>
<a id="tocShostedstorageattributes"></a>
<a id="tocshostedstorageattributes"></a>

```json
{
  "blobStoreName": "default",
  "strictContentTypeValidation": true,
  "writePolicy": "allow_once"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blobStoreName|string|true|none|Blob store used to store repository contents|
|strictContentTypeValidation|boolean|true|none|Whether to validate uploaded content's MIME type appropriate for the repository format|
|writePolicy|string|true|none|Controls if deployments of and updates to assets are allowed|

#### Enumerated Values

|Property|Value|
|---|---|
|writePolicy|allow|
|writePolicy|allow_once|
|writePolicy|deny|

<h2 id="tocS_MavenAttributes">MavenAttributes</h2>
<!-- backwards compatibility -->
<a id="schemamavenattributes"></a>
<a id="schema_MavenAttributes"></a>
<a id="tocSmavenattributes"></a>
<a id="tocsmavenattributes"></a>

```json
{
  "versionPolicy": "MIXED",
  "layoutPolicy": "STRICT",
  "contentDisposition": "ATTACHMENT"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|versionPolicy|string|false|none|What type of artifacts does this repository store?|
|layoutPolicy|string|false|none|Validate that all paths are maven artifact or metadata paths|
|contentDisposition|string|false|none|Content Disposition|

#### Enumerated Values

|Property|Value|
|---|---|
|versionPolicy|RELEASE|
|versionPolicy|SNAPSHOT|
|versionPolicy|MIXED|
|layoutPolicy|STRICT|
|layoutPolicy|PERMISSIVE|
|contentDisposition|INLINE|
|contentDisposition|ATTACHMENT|

<h2 id="tocS_MavenHostedApiRepository">MavenHostedApiRepository</h2>
<!-- backwards compatibility -->
<a id="schemamavenhostedapirepository"></a>
<a id="schema_MavenHostedApiRepository"></a>
<a id="tocSmavenhostedapirepository"></a>
<a id="tocsmavenhostedapirepository"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "maven": {
    "versionPolicy": "MIXED",
    "layoutPolicy": "STRICT",
    "contentDisposition": "ATTACHMENT"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|
|maven|[MavenAttributes](#schemamavenattributes)|true|none|none|

<h2 id="tocS_MavenHostedRepositoryApiRequest">MavenHostedRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemamavenhostedrepositoryapirequest"></a>
<a id="schema_MavenHostedRepositoryApiRequest"></a>
<a id="tocSmavenhostedrepositoryapirequest"></a>
<a id="tocsmavenhostedrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "maven": {
    "versionPolicy": "MIXED",
    "layoutPolicy": "STRICT",
    "contentDisposition": "ATTACHMENT"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|
|maven|[MavenAttributes](#schemamavenattributes)|true|none|none|

<h2 id="tocS_HttpClientAttributes">HttpClientAttributes</h2>
<!-- backwards compatibility -->
<a id="schemahttpclientattributes"></a>
<a id="schema_HttpClientAttributes"></a>
<a id="tocShttpclientattributes"></a>
<a id="tocshttpclientattributes"></a>

```json
{
  "blocked": false,
  "autoBlock": true,
  "connection": {
    "retries": 0,
    "userAgentSuffix": "string",
    "timeout": 60,
    "enableCircularRedirects": false,
    "enableCookies": false,
    "useTrustStore": false
  },
  "authentication": {
    "type": "username",
    "username": "string",
    "password": "string",
    "ntlmHost": "string",
    "ntlmDomain": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocked|boolean|true|none|Whether to block outbound connections on the repository|
|autoBlock|boolean|true|none|Whether to auto-block outbound connections if remote peer is detected as unreachable/unresponsive|
|connection|[HttpClientConnectionAttributes](#schemahttpclientconnectionattributes)|false|none|none|
|authentication|[HttpClientConnectionAuthenticationAttributes](#schemahttpclientconnectionauthenticationattributes)|false|none|none|

<h2 id="tocS_HttpClientConnectionAttributes">HttpClientConnectionAttributes</h2>
<!-- backwards compatibility -->
<a id="schemahttpclientconnectionattributes"></a>
<a id="schema_HttpClientConnectionAttributes"></a>
<a id="tocShttpclientconnectionattributes"></a>
<a id="tocshttpclientconnectionattributes"></a>

```json
{
  "retries": 0,
  "userAgentSuffix": "string",
  "timeout": 60,
  "enableCircularRedirects": false,
  "enableCookies": false,
  "useTrustStore": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|retries|integer(int32)|false|none|Total retries if the initial connection attempt suffers a timeout|
|userAgentSuffix|string|false|none|Custom fragment to append to User-Agent header in HTTP requests|
|timeout|integer(int32)|false|none|Seconds to wait for activity before stopping and retrying the connection|
|enableCircularRedirects|boolean|false|none|Whether to enable redirects to the same location (may be required by some servers)|
|enableCookies|boolean|false|none|Whether to allow cookies to be stored and used|
|useTrustStore|boolean|false|none|Use certificates stored in the Nexus Repository Manager truststore to connect to external systems|

<h2 id="tocS_HttpClientConnectionAuthenticationAttributes">HttpClientConnectionAuthenticationAttributes</h2>
<!-- backwards compatibility -->
<a id="schemahttpclientconnectionauthenticationattributes"></a>
<a id="schema_HttpClientConnectionAuthenticationAttributes"></a>
<a id="tocShttpclientconnectionauthenticationattributes"></a>
<a id="tocshttpclientconnectionauthenticationattributes"></a>

```json
{
  "type": "username",
  "username": "string",
  "password": "string",
  "ntlmHost": "string",
  "ntlmDomain": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Authentication type|
|username|string|false|none|none|
|password|string|false|none|none|
|ntlmHost|string|false|none|none|
|ntlmDomain|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|username|
|type|ntlm|

<h2 id="tocS_MavenProxyApiRepository">MavenProxyApiRepository</h2>
<!-- backwards compatibility -->
<a id="schemamavenproxyapirepository"></a>
<a id="schema_MavenProxyApiRepository"></a>
<a id="tocSmavenproxyapirepository"></a>
<a id="tocsmavenproxyapirepository"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "maven": {
    "versionPolicy": "MIXED",
    "layoutPolicy": "STRICT",
    "contentDisposition": "ATTACHMENT"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRuleName|string|false|none|The name of the routing rule assigned to this repository|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|
|maven|[MavenAttributes](#schemamavenattributes)|true|none|none|

<h2 id="tocS_NegativeCacheAttributes">NegativeCacheAttributes</h2>
<!-- backwards compatibility -->
<a id="schemanegativecacheattributes"></a>
<a id="schema_NegativeCacheAttributes"></a>
<a id="tocSnegativecacheattributes"></a>
<a id="tocsnegativecacheattributes"></a>

```json
{
  "enabled": true,
  "timeToLive": 1440
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Whether to cache responses for content not present in the proxied repository|
|timeToLive|integer(int32)|true|none|How long to cache the fact that a file was not found in the repository (in minutes)|

<h2 id="tocS_ProxyAttributes">ProxyAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaproxyattributes"></a>
<a id="schema_ProxyAttributes"></a>
<a id="tocSproxyattributes"></a>
<a id="tocsproxyattributes"></a>

```json
{
  "remoteUrl": "https://remote.repository.com",
  "contentMaxAge": 1440,
  "metadataMaxAge": 1440
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remoteUrl|string|false|none|Location of the remote repository being proxied|
|contentMaxAge|integer(int32)|true|none|How long to cache artifacts before rechecking the remote repository (in minutes)|
|metadataMaxAge|integer(int32)|true|none|How long to cache metadata before rechecking the remote repository (in minutes)|

<h2 id="tocS_ReplicationAttributes">ReplicationAttributes</h2>
<!-- backwards compatibility -->
<a id="schemareplicationattributes"></a>
<a id="schema_ReplicationAttributes"></a>
<a id="tocSreplicationattributes"></a>
<a id="tocsreplicationattributes"></a>

```json
{
  "preemptivePullEnabled": false,
  "assetPathRegex": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preemptivePullEnabled|boolean|true|none|Whether pre-emptive pull is enabled|
|assetPathRegex|string|false|none|Regular Expression of Asset Paths to pull pre-emptively pull|

<h2 id="tocS_HttpClientAttributesWithPreemptiveAuth">HttpClientAttributesWithPreemptiveAuth</h2>
<!-- backwards compatibility -->
<a id="schemahttpclientattributeswithpreemptiveauth"></a>
<a id="schema_HttpClientAttributesWithPreemptiveAuth"></a>
<a id="tocShttpclientattributeswithpreemptiveauth"></a>
<a id="tocshttpclientattributeswithpreemptiveauth"></a>

```json
{
  "blocked": false,
  "autoBlock": true,
  "connection": {
    "retries": 0,
    "userAgentSuffix": "string",
    "timeout": 60,
    "enableCircularRedirects": false,
    "enableCookies": false,
    "useTrustStore": false
  },
  "authentication": {
    "type": "username",
    "username": "string",
    "password": "string",
    "ntlmHost": "string",
    "ntlmDomain": "string",
    "preemptive": false
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocked|boolean|true|none|Whether to block outbound connections on the repository|
|autoBlock|boolean|true|none|Whether to auto-block outbound connections if remote peer is detected as unreachable/unresponsive|
|connection|[HttpClientConnectionAttributes](#schemahttpclientconnectionattributes)|false|none|none|
|authentication|[HttpClientConnectionAuthenticationAttributesWithPreemptive](#schemahttpclientconnectionauthenticationattributeswithpreemptive)|false|none|none|

<h2 id="tocS_HttpClientConnectionAuthenticationAttributesWithPreemptive">HttpClientConnectionAuthenticationAttributesWithPreemptive</h2>
<!-- backwards compatibility -->
<a id="schemahttpclientconnectionauthenticationattributeswithpreemptive"></a>
<a id="schema_HttpClientConnectionAuthenticationAttributesWithPreemptive"></a>
<a id="tocShttpclientconnectionauthenticationattributeswithpreemptive"></a>
<a id="tocshttpclientconnectionauthenticationattributeswithpreemptive"></a>

```json
{
  "type": "username",
  "username": "string",
  "password": "string",
  "ntlmHost": "string",
  "ntlmDomain": "string",
  "preemptive": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Authentication type|
|username|string|false|none|none|
|password|string|false|none|none|
|ntlmHost|string|false|none|none|
|ntlmDomain|string|false|none|none|
|preemptive|boolean|false|none|Whether to use pre-emptive authentication. Use with caution. Defaults to false.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|username|
|type|ntlm|

<h2 id="tocS_MavenProxyRepositoryApiRequest">MavenProxyRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemamavenproxyrepositoryapirequest"></a>
<a id="schema_MavenProxyRepositoryApiRequest"></a>
<a id="tocSmavenproxyrepositoryapirequest"></a>
<a id="tocsmavenproxyrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string",
      "preemptive": false
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "maven": {
    "versionPolicy": "MIXED",
    "layoutPolicy": "STRICT",
    "contentDisposition": "ATTACHMENT"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributesWithPreemptiveAuth](#schemahttpclientattributeswithpreemptiveauth)|true|none|none|
|routingRule|string|false|none|none|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|
|maven|[MavenAttributes](#schemamavenattributes)|true|none|none|

<h2 id="tocS_ApiPrivilegeScriptRequest">ApiPrivilegeScriptRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapiprivilegescriptrequest"></a>
<a id="schema_ApiPrivilegeScriptRequest"></a>
<a id="tocSapiprivilegescriptrequest"></a>
<a id="tocsapiprivilegescriptrequest"></a>

```json
{
  "name": "string",
  "description": "string",
  "actions": [
    "READ"
  ],
  "scriptName": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the privilege.  This value cannot be changed.|
|description|string|false|none|none|
|actions|[string]|false|none|A collection of actions to associate with the privilege, using BREAD syntax (browse,read,edit,add,delete,all) as well as 'run' for script privileges.|
|scriptName|string|false|none|The name of a script to give access to.|

<h2 id="tocS_ScriptXO">ScriptXO</h2>
<!-- backwards compatibility -->
<a id="schemascriptxo"></a>
<a id="schema_ScriptXO"></a>
<a id="tocSscriptxo"></a>
<a id="tocsscriptxo"></a>

```json
{
  "name": "string",
  "content": "string",
  "type": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|content|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_ScriptResultXO">ScriptResultXO</h2>
<!-- backwards compatibility -->
<a id="schemascriptresultxo"></a>
<a id="schema_ScriptResultXO"></a>
<a id="tocSscriptresultxo"></a>
<a id="tocsscriptresultxo"></a>

```json
{
  "name": "string",
  "result": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|result|string|false|none|none|

<h2 id="tocS_AptHostedApiRepository">AptHostedApiRepository</h2>
<!-- backwards compatibility -->
<a id="schemaapthostedapirepository"></a>
<a id="schema_AptHostedApiRepository"></a>
<a id="tocSapthostedapirepository"></a>
<a id="tocsapthostedapirepository"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "apt": {
    "distribution": "bionic"
  },
  "aptSigning": {
    "keypair": "string",
    "passphrase": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|
|apt|[AptHostedRepositoriesAttributes](#schemaapthostedrepositoriesattributes)|true|none|none|
|aptSigning|[AptSigningRepositoriesAttributes](#schemaaptsigningrepositoriesattributes)|true|none|none|

<h2 id="tocS_AptHostedRepositoriesAttributes">AptHostedRepositoriesAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaapthostedrepositoriesattributes"></a>
<a id="schema_AptHostedRepositoriesAttributes"></a>
<a id="tocSapthostedrepositoriesattributes"></a>
<a id="tocsapthostedrepositoriesattributes"></a>

```json
{
  "distribution": "bionic"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distribution|string|false|none|Distribution to fetch|

<h2 id="tocS_AptSigningRepositoriesAttributes">AptSigningRepositoriesAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaaptsigningrepositoriesattributes"></a>
<a id="schema_AptSigningRepositoriesAttributes"></a>
<a id="tocSaptsigningrepositoriesattributes"></a>
<a id="tocsaptsigningrepositoriesattributes"></a>

```json
{
  "keypair": "string",
  "passphrase": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keypair|string|false|none|PGP signing key pair (armored private key e.g. gpg --export-secret-key --armor)|
|passphrase|string|false|none|Passphrase to access PGP signing key|

<h2 id="tocS_AptHostedRepositoryApiRequest">AptHostedRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemaapthostedrepositoryapirequest"></a>
<a id="schema_AptHostedRepositoryApiRequest"></a>
<a id="tocSapthostedrepositoryapirequest"></a>
<a id="tocsapthostedrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "apt": {
    "distribution": "bionic"
  },
  "aptSigning": {
    "keypair": "string",
    "passphrase": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|
|apt|[AptHostedRepositoriesAttributes](#schemaapthostedrepositoriesattributes)|true|none|none|
|aptSigning|[AptSigningRepositoriesAttributes](#schemaaptsigningrepositoriesattributes)|true|none|none|

<h2 id="tocS_AptProxyApiRepository">AptProxyApiRepository</h2>
<!-- backwards compatibility -->
<a id="schemaaptproxyapirepository"></a>
<a id="schema_AptProxyApiRepository"></a>
<a id="tocSaptproxyapirepository"></a>
<a id="tocsaptproxyapirepository"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "apt": {
    "distribution": "bionic",
    "flat": false
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRuleName|string|false|none|The name of the routing rule assigned to this repository|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|
|apt|[AptProxyRepositoriesAttributes](#schemaaptproxyrepositoriesattributes)|true|none|none|

<h2 id="tocS_AptProxyRepositoriesAttributes">AptProxyRepositoriesAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaaptproxyrepositoriesattributes"></a>
<a id="schema_AptProxyRepositoriesAttributes"></a>
<a id="tocSaptproxyrepositoriesattributes"></a>
<a id="tocsaptproxyrepositoriesattributes"></a>

```json
{
  "distribution": "bionic",
  "flat": false
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|distribution|string|false|none|Distribution to fetch|
|flat|boolean|true|none|Whether this repository is flat|

<h2 id="tocS_AptProxyRepositoryApiRequest">AptProxyRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaptproxyrepositoryapirequest"></a>
<a id="schema_AptProxyRepositoryApiRequest"></a>
<a id="tocSaptproxyrepositoryapirequest"></a>
<a id="tocsaptproxyrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "apt": {
    "distribution": "bionic",
    "flat": false
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRule|string|false|none|none|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|
|apt|[AptProxyRepositoriesAttributes](#schemaaptproxyrepositoriesattributes)|true|none|none|

<h2 id="tocS_RawAttributes">RawAttributes</h2>
<!-- backwards compatibility -->
<a id="schemarawattributes"></a>
<a id="schema_RawAttributes"></a>
<a id="tocSrawattributes"></a>
<a id="tocsrawattributes"></a>

```json
{
  "contentDisposition": "ATTACHMENT"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentDisposition|string|false|none|Content Disposition|

#### Enumerated Values

|Property|Value|
|---|---|
|contentDisposition|INLINE|
|contentDisposition|ATTACHMENT|

<h2 id="tocS_RawGroupRepositoryApiRequest">RawGroupRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemarawgrouprepositoryapirequest"></a>
<a id="schema_RawGroupRepositoryApiRequest"></a>
<a id="tocSrawgrouprepositoryapirequest"></a>
<a id="tocsrawgrouprepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  },
  "raw": {
    "contentDisposition": "ATTACHMENT"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|group|[GroupAttributes](#schemagroupattributes)|true|none|none|
|raw|[RawAttributes](#schemarawattributes)|false|none|none|

<h2 id="tocS_RawHostedRepositoryApiRequest">RawHostedRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemarawhostedrepositoryapirequest"></a>
<a id="schema_RawHostedRepositoryApiRequest"></a>
<a id="tocSrawhostedrepositoryapirequest"></a>
<a id="tocsrawhostedrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "raw": {
    "contentDisposition": "ATTACHMENT"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|
|raw|[RawAttributes](#schemarawattributes)|false|none|none|

<h2 id="tocS_SimpleApiHostedRepository">SimpleApiHostedRepository</h2>
<!-- backwards compatibility -->
<a id="schemasimpleapihostedrepository"></a>
<a id="schema_SimpleApiHostedRepository"></a>
<a id="tocSsimpleapihostedrepository"></a>
<a id="tocssimpleapihostedrepository"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|

<h2 id="tocS_RawProxyRepositoryApiRequest">RawProxyRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemarawproxyrepositoryapirequest"></a>
<a id="schema_RawProxyRepositoryApiRequest"></a>
<a id="tocSrawproxyrepositoryapirequest"></a>
<a id="tocsrawproxyrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "raw": {
    "contentDisposition": "ATTACHMENT"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRule|string|false|none|none|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|
|raw|[RawAttributes](#schemarawattributes)|false|none|none|

<h2 id="tocS_SimpleApiProxyRepository">SimpleApiProxyRepository</h2>
<!-- backwards compatibility -->
<a id="schemasimpleapiproxyrepository"></a>
<a id="schema_SimpleApiProxyRepository"></a>
<a id="tocSsimpleapiproxyrepository"></a>
<a id="tocssimpleapiproxyrepository"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRuleName|string|false|none|The name of the routing rule assigned to this repository|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|

<h2 id="tocS_ReadLdapServerXo">ReadLdapServerXo</h2>
<!-- backwards compatibility -->
<a id="schemareadldapserverxo"></a>
<a id="schema_ReadLdapServerXo"></a>
<a id="tocSreadldapserverxo"></a>
<a id="tocsreadldapserverxo"></a>

```json
{
  "name": "string",
  "protocol": "ldap",
  "useTrustStore": true,
  "host": "string",
  "port": 636,
  "searchBase": "dc=example,dc=com",
  "authScheme": "NONE",
  "authRealm": "example.com",
  "authUsername": "string",
  "connectionTimeoutSeconds": 1,
  "connectionRetryDelaySeconds": 0,
  "maxIncidentsCount": 0,
  "userBaseDn": "ou=people",
  "userSubtree": true,
  "userObjectClass": "inetOrgPerson",
  "userLdapFilter": "(|(mail=*@example.com)(uid=dom*))",
  "userIdAttribute": "uid",
  "userRealNameAttribute": "cn",
  "userEmailAddressAttribute": "mail",
  "userPasswordAttribute": "string",
  "ldapGroupsAsRoles": true,
  "groupType": "static",
  "groupBaseDn": "ou=Group",
  "groupSubtree": true,
  "groupObjectClass": "posixGroup",
  "groupIdAttribute": "cn",
  "groupMemberAttribute": "memberUid",
  "groupMemberFormat": "uid=${username},ou=people,dc=example,dc=com",
  "userMemberOfAttribute": "memberOf",
  "id": "string",
  "order": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|LDAP server name|
|protocol|string|true|none|LDAP server connection Protocol to use|
|useTrustStore|boolean|false|none|Whether to use certificates stored in Nexus Repository Manager's truststore|
|host|string|true|none|LDAP server connection hostname|
|port|integer(int32)|true|none|LDAP server connection port to use|
|searchBase|string|true|none|LDAP location to be added to the connection URL|
|authScheme|string|true|none|Authentication scheme used for connecting to LDAP server|
|authRealm|string|false|none|The SASL realm to bind to. Required if authScheme is CRAM_MD5 or DIGEST_MD5|
|authUsername|string|false|none|This must be a fully qualified username if simple authentication is used. Required if authScheme other than none.|
|connectionTimeoutSeconds|integer(int32)|true|none|How long to wait before timeout|
|connectionRetryDelaySeconds|integer(int32)|true|none|How long to wait before retrying|
|maxIncidentsCount|integer(int32)|true|none|How many retry attempts|
|userBaseDn|string|false|none|The relative DN where user objects are found (e.g. ou=people). This value will have the Search base DN value appended to form the full User search base DN.|
|userSubtree|boolean|false|none|Are users located in structures below the user base DN?|
|userObjectClass|string|false|none|LDAP class for user objects|
|userLdapFilter|string|false|none|LDAP search filter to limit user search|
|userIdAttribute|string|false|none|This is used to find a user given its user ID|
|userRealNameAttribute|string|false|none|This is used to find a real name given the user ID|
|userEmailAddressAttribute|string|false|none|This is used to find an email address given the user ID|
|userPasswordAttribute|string|false|none|If this field is blank the user will be authenticated against a bind with the LDAP server|
|ldapGroupsAsRoles|boolean|false|none|Denotes whether LDAP assigned roles are used as Nexus Repository Manager roles|
|groupType|string|true|none|Defines a type of groups used: static (a group contains a list of users) or dynamic (a user contains a list of groups). Required if ldapGroupsAsRoles is true.|
|groupBaseDn|string|false|none|The relative DN where group objects are found (e.g. ou=Group). This value will have the Search base DN value appended to form the full Group search base DN.|
|groupSubtree|boolean|false|none|Are groups located in structures below the group base DN|
|groupObjectClass|string|false|none|LDAP class for group objects. Required if groupType is static|
|groupIdAttribute|string|false|none|This field specifies the attribute of the Object class that defines the Group ID. Required if groupType is static|
|groupMemberAttribute|string|false|none|LDAP attribute containing the usernames for the group. Required if groupType is static|
|groupMemberFormat|string|false|none|The format of user ID stored in the group member attribute. Required if groupType is static|
|userMemberOfAttribute|string|false|none|Set this to the attribute used to store the attribute which holds groups DN in the user object. Required if groupType is dynamic|
|id|string|false|none|LDAP server ID|
|order|integer(int32)|false|none|Order number in which the server is being used when looking for a user|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|ldap|
|protocol|ldaps|
|authScheme|NONE|
|authScheme|SIMPLE|
|authScheme|DIGEST_MD5|
|authScheme|CRAM_MD5|
|groupType|static|
|groupType|dynamic|

<h2 id="tocS_CreateLdapServerXo">CreateLdapServerXo</h2>
<!-- backwards compatibility -->
<a id="schemacreateldapserverxo"></a>
<a id="schema_CreateLdapServerXo"></a>
<a id="tocScreateldapserverxo"></a>
<a id="tocscreateldapserverxo"></a>

```json
{
  "name": "string",
  "protocol": "ldap",
  "useTrustStore": true,
  "host": "string",
  "port": 636,
  "searchBase": "dc=example,dc=com",
  "authScheme": "NONE",
  "authRealm": "example.com",
  "authUsername": "string",
  "connectionTimeoutSeconds": 1,
  "connectionRetryDelaySeconds": 0,
  "maxIncidentsCount": 0,
  "userBaseDn": "ou=people",
  "userSubtree": true,
  "userObjectClass": "inetOrgPerson",
  "userLdapFilter": "(|(mail=*@example.com)(uid=dom*))",
  "userIdAttribute": "uid",
  "userRealNameAttribute": "cn",
  "userEmailAddressAttribute": "mail",
  "userPasswordAttribute": "string",
  "ldapGroupsAsRoles": true,
  "groupType": "static",
  "groupBaseDn": "ou=Group",
  "groupSubtree": true,
  "groupObjectClass": "posixGroup",
  "groupIdAttribute": "cn",
  "groupMemberAttribute": "memberUid",
  "groupMemberFormat": "uid=${username},ou=people,dc=example,dc=com",
  "userMemberOfAttribute": "memberOf",
  "authPassword": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|LDAP server name|
|protocol|string|true|none|LDAP server connection Protocol to use|
|useTrustStore|boolean|false|none|Whether to use certificates stored in Nexus Repository Manager's truststore|
|host|string|true|none|LDAP server connection hostname|
|port|integer(int32)|true|none|LDAP server connection port to use|
|searchBase|string|true|none|LDAP location to be added to the connection URL|
|authScheme|string|true|none|Authentication scheme used for connecting to LDAP server|
|authRealm|string|false|none|The SASL realm to bind to. Required if authScheme is CRAM_MD5 or DIGEST_MD5|
|authUsername|string|false|none|This must be a fully qualified username if simple authentication is used. Required if authScheme other than none.|
|connectionTimeoutSeconds|integer(int32)|true|none|How long to wait before timeout|
|connectionRetryDelaySeconds|integer(int32)|true|none|How long to wait before retrying|
|maxIncidentsCount|integer(int32)|true|none|How many retry attempts|
|userBaseDn|string|false|none|The relative DN where user objects are found (e.g. ou=people). This value will have the Search base DN value appended to form the full User search base DN.|
|userSubtree|boolean|false|none|Are users located in structures below the user base DN?|
|userObjectClass|string|false|none|LDAP class for user objects|
|userLdapFilter|string|false|none|LDAP search filter to limit user search|
|userIdAttribute|string|false|none|This is used to find a user given its user ID|
|userRealNameAttribute|string|false|none|This is used to find a real name given the user ID|
|userEmailAddressAttribute|string|false|none|This is used to find an email address given the user ID|
|userPasswordAttribute|string|false|none|If this field is blank the user will be authenticated against a bind with the LDAP server|
|ldapGroupsAsRoles|boolean|false|none|Denotes whether LDAP assigned roles are used as Nexus Repository Manager roles|
|groupType|string|true|none|Defines a type of groups used: static (a group contains a list of users) or dynamic (a user contains a list of groups). Required if ldapGroupsAsRoles is true.|
|groupBaseDn|string|false|none|The relative DN where group objects are found (e.g. ou=Group). This value will have the Search base DN value appended to form the full Group search base DN.|
|groupSubtree|boolean|false|none|Are groups located in structures below the group base DN|
|groupObjectClass|string|false|none|LDAP class for group objects. Required if groupType is static|
|groupIdAttribute|string|false|none|This field specifies the attribute of the Object class that defines the Group ID. Required if groupType is static|
|groupMemberAttribute|string|false|none|LDAP attribute containing the usernames for the group. Required if groupType is static|
|groupMemberFormat|string|false|none|The format of user ID stored in the group member attribute. Required if groupType is static|
|userMemberOfAttribute|string|false|none|Set this to the attribute used to store the attribute which holds groups DN in the user object. Required if groupType is dynamic|
|authPassword|string|true|none|The password to bind with. Required if authScheme other than none.|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|ldap|
|protocol|ldaps|
|authScheme|NONE|
|authScheme|SIMPLE|
|authScheme|DIGEST_MD5|
|authScheme|CRAM_MD5|
|groupType|static|
|groupType|dynamic|

<h2 id="tocS_UpdateLdapServerXo">UpdateLdapServerXo</h2>
<!-- backwards compatibility -->
<a id="schemaupdateldapserverxo"></a>
<a id="schema_UpdateLdapServerXo"></a>
<a id="tocSupdateldapserverxo"></a>
<a id="tocsupdateldapserverxo"></a>

```json
{
  "name": "string",
  "protocol": "ldap",
  "useTrustStore": true,
  "host": "string",
  "port": 636,
  "searchBase": "dc=example,dc=com",
  "authScheme": "NONE",
  "authRealm": "example.com",
  "authUsername": "string",
  "connectionTimeoutSeconds": 1,
  "connectionRetryDelaySeconds": 0,
  "maxIncidentsCount": 0,
  "userBaseDn": "ou=people",
  "userSubtree": true,
  "userObjectClass": "inetOrgPerson",
  "userLdapFilter": "(|(mail=*@example.com)(uid=dom*))",
  "userIdAttribute": "uid",
  "userRealNameAttribute": "cn",
  "userEmailAddressAttribute": "mail",
  "userPasswordAttribute": "string",
  "ldapGroupsAsRoles": true,
  "groupType": "static",
  "groupBaseDn": "ou=Group",
  "groupSubtree": true,
  "groupObjectClass": "posixGroup",
  "groupIdAttribute": "cn",
  "groupMemberAttribute": "memberUid",
  "groupMemberFormat": "uid=${username},ou=people,dc=example,dc=com",
  "userMemberOfAttribute": "memberOf",
  "authPassword": "string",
  "id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|LDAP server name|
|protocol|string|true|none|LDAP server connection Protocol to use|
|useTrustStore|boolean|false|none|Whether to use certificates stored in Nexus Repository Manager's truststore|
|host|string|true|none|LDAP server connection hostname|
|port|integer(int32)|true|none|LDAP server connection port to use|
|searchBase|string|true|none|LDAP location to be added to the connection URL|
|authScheme|string|true|none|Authentication scheme used for connecting to LDAP server|
|authRealm|string|false|none|The SASL realm to bind to. Required if authScheme is CRAM_MD5 or DIGEST_MD5|
|authUsername|string|false|none|This must be a fully qualified username if simple authentication is used. Required if authScheme other than none.|
|connectionTimeoutSeconds|integer(int32)|true|none|How long to wait before timeout|
|connectionRetryDelaySeconds|integer(int32)|true|none|How long to wait before retrying|
|maxIncidentsCount|integer(int32)|true|none|How many retry attempts|
|userBaseDn|string|false|none|The relative DN where user objects are found (e.g. ou=people). This value will have the Search base DN value appended to form the full User search base DN.|
|userSubtree|boolean|false|none|Are users located in structures below the user base DN?|
|userObjectClass|string|false|none|LDAP class for user objects|
|userLdapFilter|string|false|none|LDAP search filter to limit user search|
|userIdAttribute|string|false|none|This is used to find a user given its user ID|
|userRealNameAttribute|string|false|none|This is used to find a real name given the user ID|
|userEmailAddressAttribute|string|false|none|This is used to find an email address given the user ID|
|userPasswordAttribute|string|false|none|If this field is blank the user will be authenticated against a bind with the LDAP server|
|ldapGroupsAsRoles|boolean|false|none|Denotes whether LDAP assigned roles are used as Nexus Repository Manager roles|
|groupType|string|true|none|Defines a type of groups used: static (a group contains a list of users) or dynamic (a user contains a list of groups). Required if ldapGroupsAsRoles is true.|
|groupBaseDn|string|false|none|The relative DN where group objects are found (e.g. ou=Group). This value will have the Search base DN value appended to form the full Group search base DN.|
|groupSubtree|boolean|false|none|Are groups located in structures below the group base DN|
|groupObjectClass|string|false|none|LDAP class for group objects. Required if groupType is static|
|groupIdAttribute|string|false|none|This field specifies the attribute of the Object class that defines the Group ID. Required if groupType is static|
|groupMemberAttribute|string|false|none|LDAP attribute containing the usernames for the group. Required if groupType is static|
|groupMemberFormat|string|false|none|The format of user ID stored in the group member attribute. Required if groupType is static|
|userMemberOfAttribute|string|false|none|Set this to the attribute used to store the attribute which holds groups DN in the user object. Required if groupType is dynamic|
|authPassword|string|true|none|The password to bind with. Required if authScheme other than none.|
|id|string|false|none|LDAP server ID|

#### Enumerated Values

|Property|Value|
|---|---|
|protocol|ldap|
|protocol|ldaps|
|authScheme|NONE|
|authScheme|SIMPLE|
|authScheme|DIGEST_MD5|
|authScheme|CRAM_MD5|
|groupType|static|
|groupType|dynamic|

<h2 id="tocS_PageTagXO">PageTagXO</h2>
<!-- backwards compatibility -->
<a id="schemapagetagxo"></a>
<a id="schema_PageTagXO"></a>
<a id="tocSpagetagxo"></a>
<a id="tocspagetagxo"></a>

```json
{
  "items": [
    {
      "name": "string",
      "attributes": {
        "property1": {},
        "property2": {}
      },
      "firstCreated": "2019-08-24T14:15:22Z",
      "lastUpdated": "2019-08-24T14:15:22Z"
    }
  ],
  "continuationToken": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[TagXO](#schematagxo)]|false|none|none|
|continuationToken|string|false|none|none|

<h2 id="tocS_TagXO">TagXO</h2>
<!-- backwards compatibility -->
<a id="schematagxo"></a>
<a id="schema_TagXO"></a>
<a id="tocStagxo"></a>
<a id="tocstagxo"></a>

```json
{
  "name": "string",
  "attributes": {
    "property1": {},
    "property2": {}
  },
  "firstCreated": "2019-08-24T14:15:22Z",
  "lastUpdated": "2019-08-24T14:15:22Z"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|attributes|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|firstCreated|string(date-time)|false|none|none|
|lastUpdated|string(date-time)|false|none|none|

<h2 id="tocS_BaseTagXO">BaseTagXO</h2>
<!-- backwards compatibility -->
<a id="schemabasetagxo"></a>
<a id="schema_BaseTagXO"></a>
<a id="tocSbasetagxo"></a>
<a id="tocsbasetagxo"></a>

```json
{
  "attributes": {
    "property1": {},
    "property2": {}
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|none|
|» **additionalProperties**|object|false|none|none|

<h2 id="tocS_IqConnectionXo">IqConnectionXo</h2>
<!-- backwards compatibility -->
<a id="schemaiqconnectionxo"></a>
<a id="schema_IqConnectionXo"></a>
<a id="tocSiqconnectionxo"></a>
<a id="tocsiqconnectionxo"></a>

```json
{
  "enabled": true,
  "showLink": true,
  "url": "string",
  "authenticationType": "USER",
  "username": "string",
  "password": "string",
  "useTrustStoreForUrl": true,
  "timeoutSeconds": 1,
  "properties": "string",
  "failOpenModeEnabled": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether to use Sonatype Repository Firewall|
|showLink|boolean|false|none|Show Sonatype Repository Firewall link in Browse menu when server is enabled|
|url|string|false|none|The address of your Sonatype Repository Firewall|
|authenticationType|string|true|none|Authentication method|
|username|string|false|none|User with access to Sonatype Repository Firewall|
|password|string|false|none|Credentials for the Sonatype Repository Firewall User|
|useTrustStoreForUrl|boolean|false|none|Use certificates stored in the Nexus Repository Manager truststore to connect to Sonatype Repository Firewall|
|timeoutSeconds|integer(int32)|false|none|Seconds to wait for activity before stopping and retrying the connection. Leave blank to use the globally defined HTTP timeout.|
|properties|string|false|none|Additional properties to configure for Sonatype Repository Firewall|
|failOpenModeEnabled|boolean|false|none|Allow by default when quarantine is enabled and the IQ connection fails|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationType|USER|
|authenticationType|PKI|

<h2 id="tocS_IqConnectionVerificationXo">IqConnectionVerificationXo</h2>
<!-- backwards compatibility -->
<a id="schemaiqconnectionverificationxo"></a>
<a id="schema_IqConnectionVerificationXo"></a>
<a id="tocSiqconnectionverificationxo"></a>
<a id="tocsiqconnectionverificationxo"></a>

```json
{
  "success": true,
  "reason": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|reason|string|false|none|none|

<h2 id="tocS_MaliciousRiskOnDiskCountResponse">MaliciousRiskOnDiskCountResponse</h2>
<!-- backwards compatibility -->
<a id="schemamaliciousriskondiskcountresponse"></a>
<a id="schema_MaliciousRiskOnDiskCountResponse"></a>
<a id="tocSmaliciousriskondiskcountresponse"></a>
<a id="tocsmaliciousriskondiskcountresponse"></a>

```json
{
  "totalCount": 0,
  "hdsExceptionThrown": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalCount|integer(int64)|false|none|none|
|hdsExceptionThrown|boolean|false|none|none|

<h2 id="tocS_UserTokensApiModel">UserTokensApiModel</h2>
<!-- backwards compatibility -->
<a id="schemausertokensapimodel"></a>
<a id="schema_UserTokensApiModel"></a>
<a id="tocSusertokensapimodel"></a>
<a id="tocsusertokensapimodel"></a>

```json
{
  "enabled": true,
  "protectContent": true,
  "expirationEnabled": true,
  "expirationDays": 30
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Whether or not User Tokens feature is enabled|
|protectContent|boolean|false|none|Additionally require user tokens for repository authentication|
|expirationEnabled|boolean|false|none|Enable user tokens expiration|
|expirationDays|integer(int32)|false|none|Set user token expiration days (E.g., 1-999)|

<h2 id="tocS_ApiLicenseDetailsXO">ApiLicenseDetailsXO</h2>
<!-- backwards compatibility -->
<a id="schemaapilicensedetailsxo"></a>
<a id="schema_ApiLicenseDetailsXO"></a>
<a id="tocSapilicensedetailsxo"></a>
<a id="tocsapilicensedetailsxo"></a>

```json
{
  "contactEmail": "string",
  "contactCompany": "string",
  "contactName": "string",
  "effectiveDate": "2019-08-24T14:15:22Z",
  "expirationDate": "2019-08-24T14:15:22Z",
  "licenseType": "string",
  "licensedUsers": "string",
  "fingerprint": "string",
  "features": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contactEmail|string|false|none|none|
|contactCompany|string|false|none|none|
|contactName|string|false|none|none|
|effectiveDate|string(date-time)|false|none|none|
|expirationDate|string(date-time)|false|none|none|
|licenseType|string|false|none|none|
|licensedUsers|string|false|none|none|
|fingerprint|string|false|none|none|
|features|string|false|none|none|

<h2 id="tocS_InputStream">InputStream</h2>
<!-- backwards compatibility -->
<a id="schemainputstream"></a>
<a id="schema_InputStream"></a>
<a id="tocSinputstream"></a>
<a id="tocsinputstream"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_CrowdApiXO">CrowdApiXO</h2>
<!-- backwards compatibility -->
<a id="schemacrowdapixo"></a>
<a id="schema_CrowdApiXO"></a>
<a id="tocScrowdapixo"></a>
<a id="tocscrowdapixo"></a>

```json
{
  "enabled": true,
  "realmActive": true,
  "applicationName": "string",
  "applicationPassword": "string",
  "url": "string",
  "useTrustStoreForUrl": true,
  "timeout": 1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|none|
|realmActive|boolean|true|none|none|
|applicationName|string|false|none|none|
|applicationPassword|string|false|none|none|
|url|string|false|none|none|
|useTrustStoreForUrl|boolean|false|none|none|
|timeout|integer(int32)|false|none|none|

<h2 id="tocS_GroupDeployAttributes">GroupDeployAttributes</h2>
<!-- backwards compatibility -->
<a id="schemagroupdeployattributes"></a>
<a id="schema_GroupDeployAttributes"></a>
<a id="tocSgroupdeployattributes"></a>
<a id="tocsgroupdeployattributes"></a>

```json
{
  "memberNames": [
    "string"
  ],
  "writableMember": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberNames|[string]|false|none|Member repositories' names|
|writableMember|string|false|none|Pro-only: This field is for the Group Deployment feature available in NXRM Pro.|

<h2 id="tocS_SimpleApiGroupDeployRepository">SimpleApiGroupDeployRepository</h2>
<!-- backwards compatibility -->
<a id="schemasimpleapigroupdeployrepository"></a>
<a id="schema_SimpleApiGroupDeployRepository"></a>
<a id="tocSsimpleapigroupdeployrepository"></a>
<a id="tocssimpleapigroupdeployrepository"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ],
    "writableMember": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|read-only|A unique identifier for this repository|
|online|boolean|true|read-only|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|group|[GroupDeployAttributes](#schemagroupdeployattributes)|true|none|none|

<h2 id="tocS_NpmGroupRepositoryApiRequest">NpmGroupRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemanpmgrouprepositoryapirequest"></a>
<a id="schema_NpmGroupRepositoryApiRequest"></a>
<a id="tocSnpmgrouprepositoryapirequest"></a>
<a id="tocsnpmgrouprepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ],
    "writableMember": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|group|[GroupDeployAttributes](#schemagroupdeployattributes)|true|none|none|

<h2 id="tocS_NpmHostedRepositoryApiRequest">NpmHostedRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemanpmhostedrepositoryapirequest"></a>
<a id="schema_NpmHostedRepositoryApiRequest"></a>
<a id="tocSnpmhostedrepositoryapirequest"></a>
<a id="tocsnpmhostedrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|

<h2 id="tocS_NpmAttributes">NpmAttributes</h2>
<!-- backwards compatibility -->
<a id="schemanpmattributes"></a>
<a id="schema_NpmAttributes"></a>
<a id="tocSnpmattributes"></a>
<a id="tocsnpmattributes"></a>

```json
{
  "removeQuarantined": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|removeQuarantined|boolean|true|none|Remove Quarantined Versions|

<h2 id="tocS_NpmProxyApiRepository">NpmProxyApiRepository</h2>
<!-- backwards compatibility -->
<a id="schemanpmproxyapirepository"></a>
<a id="schema_NpmProxyApiRepository"></a>
<a id="tocSnpmproxyapirepository"></a>
<a id="tocsnpmproxyapirepository"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "npm": {
    "removeQuarantined": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRuleName|string|false|none|The name of the routing rule assigned to this repository|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|
|npm|[NpmAttributes](#schemanpmattributes)|false|none|none|

<h2 id="tocS_NpmProxyRepositoryApiRequest">NpmProxyRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemanpmproxyrepositoryapirequest"></a>
<a id="schema_NpmProxyRepositoryApiRequest"></a>
<a id="tocSnpmproxyrepositoryapirequest"></a>
<a id="tocsnpmproxyrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "npm": {
    "removeQuarantined": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRule|string|false|none|none|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|
|npm|[NpmAttributes](#schemanpmattributes)|false|none|none|

<h2 id="tocS_NugetGroupRepositoryApiRequest">NugetGroupRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemanugetgrouprepositoryapirequest"></a>
<a id="schema_NugetGroupRepositoryApiRequest"></a>
<a id="tocSnugetgrouprepositoryapirequest"></a>
<a id="tocsnugetgrouprepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|group|[GroupAttributes](#schemagroupattributes)|true|none|none|

<h2 id="tocS_NugetHostedRepositoryApiRequest">NugetHostedRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemanugethostedrepositoryapirequest"></a>
<a id="schema_NugetHostedRepositoryApiRequest"></a>
<a id="tocSnugethostedrepositoryapirequest"></a>
<a id="tocsnugethostedrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|

<h2 id="tocS_NugetAttributes">NugetAttributes</h2>
<!-- backwards compatibility -->
<a id="schemanugetattributes"></a>
<a id="schema_NugetAttributes"></a>
<a id="tocSnugetattributes"></a>
<a id="tocsnugetattributes"></a>

```json
{
  "queryCacheItemMaxAge": 3600,
  "nugetVersion": "V3"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryCacheItemMaxAge|integer(int32)|false|none|How long to cache query results from the proxied repository (in seconds)|
|nugetVersion|string|false|none|Nuget protocol version|

#### Enumerated Values

|Property|Value|
|---|---|
|nugetVersion|V2|
|nugetVersion|V3|

<h2 id="tocS_NugetProxyApiRepository">NugetProxyApiRepository</h2>
<!-- backwards compatibility -->
<a id="schemanugetproxyapirepository"></a>
<a id="schema_NugetProxyApiRepository"></a>
<a id="tocSnugetproxyapirepository"></a>
<a id="tocsnugetproxyapirepository"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "nugetProxy": {
    "queryCacheItemMaxAge": 3600,
    "nugetVersion": "V3"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRuleName|string|false|none|The name of the routing rule assigned to this repository|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|
|nugetProxy|[NugetAttributes](#schemanugetattributes)|true|none|none|

<h2 id="tocS_NugetProxyRepositoryApiRequest">NugetProxyRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemanugetproxyrepositoryapirequest"></a>
<a id="schema_NugetProxyRepositoryApiRequest"></a>
<a id="tocSnugetproxyrepositoryapirequest"></a>
<a id="tocsnugetproxyrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "nugetProxy": {
    "queryCacheItemMaxAge": 3600,
    "nugetVersion": "V3"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRule|string|false|none|none|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|
|nugetProxy|[NugetAttributes](#schemanugetattributes)|true|none|none|

<h2 id="tocS_RubyGemsGroupRepositoryApiRequest">RubyGemsGroupRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemarubygemsgrouprepositoryapirequest"></a>
<a id="schema_RubyGemsGroupRepositoryApiRequest"></a>
<a id="tocSrubygemsgrouprepositoryapirequest"></a>
<a id="tocsrubygemsgrouprepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|group|[GroupAttributes](#schemagroupattributes)|true|none|none|

<h2 id="tocS_RubyGemsHostedRepositoryApiRequest">RubyGemsHostedRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemarubygemshostedrepositoryapirequest"></a>
<a id="schema_RubyGemsHostedRepositoryApiRequest"></a>
<a id="tocSrubygemshostedrepositoryapirequest"></a>
<a id="tocsrubygemshostedrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|

<h2 id="tocS_RubyGemsProxyRepositoryApiRequest">RubyGemsProxyRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemarubygemsproxyrepositoryapirequest"></a>
<a id="schema_RubyGemsProxyRepositoryApiRequest"></a>
<a id="tocSrubygemsproxyrepositoryapirequest"></a>
<a id="tocsrubygemsproxyrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRule|string|false|none|none|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|

<h2 id="tocS_YumGroupRepositoryApiRequest">YumGroupRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemayumgrouprepositoryapirequest"></a>
<a id="schema_YumGroupRepositoryApiRequest"></a>
<a id="tocSyumgrouprepositoryapirequest"></a>
<a id="tocsyumgrouprepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  },
  "yumSigning": {
    "keypair": "string",
    "passphrase": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|group|[GroupAttributes](#schemagroupattributes)|true|none|none|
|yumSigning|[YumSigningRepositoriesAttributes](#schemayumsigningrepositoriesattributes)|false|none|none|

<h2 id="tocS_YumSigningRepositoriesAttributes">YumSigningRepositoriesAttributes</h2>
<!-- backwards compatibility -->
<a id="schemayumsigningrepositoriesattributes"></a>
<a id="schema_YumSigningRepositoriesAttributes"></a>
<a id="tocSyumsigningrepositoriesattributes"></a>
<a id="tocsyumsigningrepositoriesattributes"></a>

```json
{
  "keypair": "string",
  "passphrase": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keypair|string|false|none|PGP signing key pair (armored private key e.g. gpg --export-secret-key --armor)|
|passphrase|string|false|none|Passphrase to access PGP signing key|

<h2 id="tocS_YumAttributes">YumAttributes</h2>
<!-- backwards compatibility -->
<a id="schemayumattributes"></a>
<a id="schema_YumAttributes"></a>
<a id="tocSyumattributes"></a>
<a id="tocsyumattributes"></a>

```json
{
  "repodataDepth": 5,
  "deployPolicy": "STRICT"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|repodataDepth|integer(int32)|true|none|Specifies the repository depth where repodata folder(s) are created|
|deployPolicy|string|false|none|Validate that all paths are RPMs or yum metadata|

#### Enumerated Values

|Property|Value|
|---|---|
|deployPolicy|PERMISSIVE|
|deployPolicy|STRICT|

<h2 id="tocS_YumHostedApiRepository">YumHostedApiRepository</h2>
<!-- backwards compatibility -->
<a id="schemayumhostedapirepository"></a>
<a id="schema_YumHostedApiRepository"></a>
<a id="tocSyumhostedapirepository"></a>
<a id="tocsyumhostedapirepository"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "yum": {
    "repodataDepth": 5,
    "deployPolicy": "STRICT"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|
|yum|[YumAttributes](#schemayumattributes)|true|none|none|

<h2 id="tocS_YumHostedRepositoryApiRequest">YumHostedRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemayumhostedrepositoryapirequest"></a>
<a id="schema_YumHostedRepositoryApiRequest"></a>
<a id="tocSyumhostedrepositoryapirequest"></a>
<a id="tocsyumhostedrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "yum": {
    "repodataDepth": 5,
    "deployPolicy": "STRICT"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|
|yum|[YumAttributes](#schemayumattributes)|true|none|none|

<h2 id="tocS_YumProxyRepositoryApiRequest">YumProxyRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemayumproxyrepositoryapirequest"></a>
<a id="schema_YumProxyRepositoryApiRequest"></a>
<a id="tocSyumproxyrepositoryapirequest"></a>
<a id="tocsyumproxyrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "yumSigning": {
    "keypair": "string",
    "passphrase": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRule|string|false|none|none|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|
|yumSigning|[YumSigningRepositoriesAttributes](#schemayumsigningrepositoriesattributes)|false|none|none|

<h2 id="tocS_DockerAttributes">DockerAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadockerattributes"></a>
<a id="schema_DockerAttributes"></a>
<a id="tocSdockerattributes"></a>
<a id="tocsdockerattributes"></a>

```json
{
  "v1Enabled": false,
  "forceBasicAuth": true,
  "httpPort": 8082,
  "httpsPort": 8083,
  "subdomain": "docker-a"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|v1Enabled|boolean|true|none|Whether to allow clients to use the V1 API to interact with this repository|
|forceBasicAuth|boolean|true|none|Whether to force authentication (Docker Bearer Token Realm required if false)|
|httpPort|integer(int32)|false|none|Create an HTTP connector at specified port|
|httpsPort|integer(int32)|false|none|Create an HTTPS connector at specified port|
|subdomain|string|false|none|Allows to use subdomain|

<h2 id="tocS_DockerGroupApiRepository">DockerGroupApiRepository</h2>
<!-- backwards compatibility -->
<a id="schemadockergroupapirepository"></a>
<a id="schema_DockerGroupApiRepository"></a>
<a id="tocSdockergroupapirepository"></a>
<a id="tocsdockergroupapirepository"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ],
    "writableMember": "string"
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|group|[GroupDeployAttributes](#schemagroupdeployattributes)|true|none|none|
|docker|[DockerAttributes](#schemadockerattributes)|true|none|none|

<h2 id="tocS_DockerGroupRepositoryApiRequest">DockerGroupRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemadockergrouprepositoryapirequest"></a>
<a id="schema_DockerGroupRepositoryApiRequest"></a>
<a id="tocSdockergrouprepositoryapirequest"></a>
<a id="tocsdockergrouprepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ],
    "writableMember": "string"
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|group|[GroupDeployAttributes](#schemagroupdeployattributes)|true|none|none|
|docker|[DockerAttributes](#schemadockerattributes)|true|none|none|

<h2 id="tocS_DockerHostedApiRepository">DockerHostedApiRepository</h2>
<!-- backwards compatibility -->
<a id="schemadockerhostedapirepository"></a>
<a id="schema_DockerHostedApiRepository"></a>
<a id="tocSdockerhostedapirepository"></a>
<a id="tocsdockerhostedapirepository"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|
|docker|[DockerAttributes](#schemadockerattributes)|true|none|none|

<h2 id="tocS_DockerHostedRepositoryApiRequest">DockerHostedRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemadockerhostedrepositoryapirequest"></a>
<a id="schema_DockerHostedRepositoryApiRequest"></a>
<a id="tocSdockerhostedrepositoryapirequest"></a>
<a id="tocsdockerhostedrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once",
    "latestPolicy": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[DockerHostedStorageAttributes](#schemadockerhostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|
|docker|[DockerAttributes](#schemadockerattributes)|true|none|none|

<h2 id="tocS_DockerHostedStorageAttributes">DockerHostedStorageAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadockerhostedstorageattributes"></a>
<a id="schema_DockerHostedStorageAttributes"></a>
<a id="tocSdockerhostedstorageattributes"></a>
<a id="tocsdockerhostedstorageattributes"></a>

```json
{
  "blobStoreName": "default",
  "strictContentTypeValidation": true,
  "writePolicy": "allow_once",
  "latestPolicy": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blobStoreName|string|true|none|Blob store used to store repository contents|
|strictContentTypeValidation|boolean|true|none|Whether to validate uploaded content's MIME type appropriate for the repository format|
|writePolicy|string|true|none|Controls if deployments of and updates to assets are allowed|
|latestPolicy|boolean|false|none|Whether to allow redeploying the 'latest' tag but defer to the Deployment Policy for all other tags|

#### Enumerated Values

|Property|Value|
|---|---|
|writePolicy|allow|
|writePolicy|allow_once|
|writePolicy|deny|

<h2 id="tocS_DockerProxyApiRepository">DockerProxyApiRepository</h2>
<!-- backwards compatibility -->
<a id="schemadockerproxyapirepository"></a>
<a id="schema_DockerProxyApiRepository"></a>
<a id="tocSdockerproxyapirepository"></a>
<a id="tocsdockerproxyapirepository"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRuleName": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  },
  "dockerProxy": {
    "indexType": "HUB",
    "indexUrl": "string",
    "cacheForeignLayers": true,
    "foreignLayerUrlWhitelist": [
      "string"
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRuleName|string|false|none|The name of the routing rule assigned to this repository|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|
|docker|[DockerAttributes](#schemadockerattributes)|true|none|none|
|dockerProxy|[DockerProxyAttributes](#schemadockerproxyattributes)|true|none|none|

<h2 id="tocS_DockerProxyAttributes">DockerProxyAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadockerproxyattributes"></a>
<a id="schema_DockerProxyAttributes"></a>
<a id="tocSdockerproxyattributes"></a>
<a id="tocsdockerproxyattributes"></a>

```json
{
  "indexType": "HUB",
  "indexUrl": "string",
  "cacheForeignLayers": true,
  "foreignLayerUrlWhitelist": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexType|string|false|none|Type of Docker Index|
|indexUrl|string|false|none|Url of Docker Index to use|
|cacheForeignLayers|boolean|false|none|Allow Nexus Repository Manager to download and cache foreign layers|
|foreignLayerUrlWhitelist|[string]|false|none|Regular expressions used to identify URLs that are allowed for foreign layer requests|

#### Enumerated Values

|Property|Value|
|---|---|
|indexType|HUB|
|indexType|REGISTRY|
|indexType|CUSTOM|

<h2 id="tocS_DockerProxyRepositoryApiRequest">DockerProxyRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemadockerproxyrepositoryapirequest"></a>
<a id="schema_DockerProxyRepositoryApiRequest"></a>
<a id="tocSdockerproxyrepositoryapirequest"></a>
<a id="tocsdockerproxyrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "docker": {
    "v1Enabled": false,
    "forceBasicAuth": true,
    "httpPort": 8082,
    "httpsPort": 8083,
    "subdomain": "docker-a"
  },
  "dockerProxy": {
    "indexType": "HUB",
    "indexUrl": "string",
    "cacheForeignLayers": true,
    "foreignLayerUrlWhitelist": [
      "string"
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRule|string|false|none|none|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|
|docker|[DockerAttributes](#schemadockerattributes)|true|none|none|
|dockerProxy|[DockerProxyAttributes](#schemadockerproxyattributes)|true|none|none|

<h2 id="tocS_PypiGroupRepositoryApiRequest">PypiGroupRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemapypigrouprepositoryapirequest"></a>
<a id="schema_PypiGroupRepositoryApiRequest"></a>
<a id="tocSpypigrouprepositoryapirequest"></a>
<a id="tocspypigrouprepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|group|[GroupAttributes](#schemagroupattributes)|true|none|none|

<h2 id="tocS_PypiHostedRepositoryApiRequest">PypiHostedRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemapypihostedrepositoryapirequest"></a>
<a id="schema_PypiHostedRepositoryApiRequest"></a>
<a id="tocSpypihostedrepositoryapirequest"></a>
<a id="tocspypihostedrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|

<h2 id="tocS_PyPiProxyAttributes">PyPiProxyAttributes</h2>
<!-- backwards compatibility -->
<a id="schemapypiproxyattributes"></a>
<a id="schema_PyPiProxyAttributes"></a>
<a id="tocSpypiproxyattributes"></a>
<a id="tocspypiproxyattributes"></a>

```json
{
  "removeQuarantined": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|removeQuarantined|boolean|true|none|Remove Quarantined Versions|

<h2 id="tocS_PypiProxyRepositoryApiRequest">PypiProxyRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemapypiproxyrepositoryapirequest"></a>
<a id="schema_PypiProxyRepositoryApiRequest"></a>
<a id="tocSpypiproxyrepositoryapirequest"></a>
<a id="tocspypiproxyrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "pypi": {
    "removeQuarantined": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRule|string|false|none|none|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|
|pypi|[PyPiProxyAttributes](#schemapypiproxyattributes)|false|none|none|

<h2 id="tocS_CondaProxyRepositoryApiRequest">CondaProxyRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemacondaproxyrepositoryapirequest"></a>
<a id="schema_CondaProxyRepositoryApiRequest"></a>
<a id="tocScondaproxyrepositoryapirequest"></a>
<a id="tocscondaproxyrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRule|string|false|none|none|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|

<h2 id="tocS_ConanHostedRepositoryApiRequest">ConanHostedRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconanhostedrepositoryapirequest"></a>
<a id="schema_ConanHostedRepositoryApiRequest"></a>
<a id="tocSconanhostedrepositoryapirequest"></a>
<a id="tocsconanhostedrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|

<h2 id="tocS_ConanProxyAttributes">ConanProxyAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaconanproxyattributes"></a>
<a id="schema_ConanProxyAttributes"></a>
<a id="tocSconanproxyattributes"></a>
<a id="tocsconanproxyattributes"></a>

```json
{
  "conanVersion": "V1"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conanVersion|string|false|none|Conan protocol version;|

#### Enumerated Values

|Property|Value|
|---|---|
|conanVersion|V1|
|conanVersion|V2|

<h2 id="tocS_ConanProxyRepositoryApiRequest">ConanProxyRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconanproxyrepositoryapirequest"></a>
<a id="schema_ConanProxyRepositoryApiRequest"></a>
<a id="tocSconanproxyrepositoryapirequest"></a>
<a id="tocsconanproxyrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  },
  "conanProxy": {
    "conanVersion": "V1"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRule|string|false|none|none|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|
|conanProxy|[ConanProxyAttributes](#schemaconanproxyattributes)|false|none|none|

<h2 id="tocS_GitLfsHostedRepositoryApiRequest">GitLfsHostedRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemagitlfshostedrepositoryapirequest"></a>
<a id="schema_GitLfsHostedRepositoryApiRequest"></a>
<a id="tocSgitlfshostedrepositoryapirequest"></a>
<a id="tocsgitlfshostedrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|

<h2 id="tocS_RGroupRepositoryApiRequest">RGroupRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemargrouprepositoryapirequest"></a>
<a id="schema_RGroupRepositoryApiRequest"></a>
<a id="tocSrgrouprepositoryapirequest"></a>
<a id="tocsrgrouprepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|group|[GroupAttributes](#schemagroupattributes)|true|none|none|

<h2 id="tocS_RHostedRepositoryApiRequest">RHostedRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemarhostedrepositoryapirequest"></a>
<a id="schema_RHostedRepositoryApiRequest"></a>
<a id="tocSrhostedrepositoryapirequest"></a>
<a id="tocsrhostedrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|

<h2 id="tocS_RProxyRepositoryApiRequest">RProxyRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemarproxyrepositoryapirequest"></a>
<a id="schema_RProxyRepositoryApiRequest"></a>
<a id="tocSrproxyrepositoryapirequest"></a>
<a id="tocsrproxyrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRule|string|false|none|none|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|

<h2 id="tocS_CocoapodsProxyRepositoryApiRequest">CocoapodsProxyRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemacocoapodsproxyrepositoryapirequest"></a>
<a id="schema_CocoapodsProxyRepositoryApiRequest"></a>
<a id="tocScocoapodsproxyrepositoryapirequest"></a>
<a id="tocscocoapodsproxyrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRule|string|false|none|none|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|

<h2 id="tocS_GolangGroupRepositoryApiRequest">GolangGroupRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemagolanggrouprepositoryapirequest"></a>
<a id="schema_GolangGroupRepositoryApiRequest"></a>
<a id="tocSgolanggrouprepositoryapirequest"></a>
<a id="tocsgolanggrouprepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|group|[GroupAttributes](#schemagroupattributes)|true|none|none|

<h2 id="tocS_GolangProxyRepositoryApiRequest">GolangProxyRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemagolangproxyrepositoryapirequest"></a>
<a id="schema_GolangProxyRepositoryApiRequest"></a>
<a id="tocSgolangproxyrepositoryapirequest"></a>
<a id="tocsgolangproxyrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRule|string|false|none|none|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|

<h2 id="tocS_P2ProxyRepositoryApiRequest">P2ProxyRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemap2proxyrepositoryapirequest"></a>
<a id="schema_P2ProxyRepositoryApiRequest"></a>
<a id="tocSp2proxyrepositoryapirequest"></a>
<a id="tocsp2proxyrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRule|string|false|none|none|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|

<h2 id="tocS_AzureConnectionXO">AzureConnectionXO</h2>
<!-- backwards compatibility -->
<a id="schemaazureconnectionxo"></a>
<a id="schema_AzureConnectionXO"></a>
<a id="tocSazureconnectionxo"></a>
<a id="tocsazureconnectionxo"></a>

```json
{
  "accountName": "string",
  "accountKey": "string",
  "containerName": "string",
  "authenticationMethod": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|none|
|accountKey|string|false|none|none|
|containerName|string|false|none|none|
|authenticationMethod|string|false|none|none|

<h2 id="tocS_AzureBlobStoreApiAuthentication">AzureBlobStoreApiAuthentication</h2>
<!-- backwards compatibility -->
<a id="schemaazureblobstoreapiauthentication"></a>
<a id="schema_AzureBlobStoreApiAuthentication"></a>
<a id="tocSazureblobstoreapiauthentication"></a>
<a id="tocsazureblobstoreapiauthentication"></a>

```json
{
  "authenticationMethod": "ACCOUNTKEY",
  "accountKey": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationMethod|string|true|none|The type of Azure authentication to use.|
|accountKey|string|false|none|The account key.|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationMethod|ACCOUNTKEY|
|authenticationMethod|MANAGEDIDENTITY|
|authenticationMethod|ENVIRONMENTVARIABLE|

<h2 id="tocS_AzureBlobStoreApiBucketConfiguration">AzureBlobStoreApiBucketConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaazureblobstoreapibucketconfiguration"></a>
<a id="schema_AzureBlobStoreApiBucketConfiguration"></a>
<a id="tocSazureblobstoreapibucketconfiguration"></a>
<a id="tocsazureblobstoreapibucketconfiguration"></a>

```json
{
  "accountName": "string",
  "containerName": "string",
  "authentication": {
    "authenticationMethod": "ACCOUNTKEY",
    "accountKey": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|true|none|Account name found under Access keys for the storage account.|
|containerName|string|true|none|The name of an existing container to be used for storage.|
|authentication|[AzureBlobStoreApiAuthentication](#schemaazureblobstoreapiauthentication)|true|none|none|

<h2 id="tocS_AzureBlobStoreApiModel">AzureBlobStoreApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaazureblobstoreapimodel"></a>
<a id="schema_AzureBlobStoreApiModel"></a>
<a id="tocSazureblobstoreapimodel"></a>
<a id="tocsazureblobstoreapimodel"></a>

```json
{
  "name": "string",
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "accountName": "string",
    "containerName": "string",
    "authentication": {
      "authenticationMethod": "ACCOUNTKEY",
      "accountKey": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the Azure blob store.|
|softQuota|[BlobStoreApiSoftQuota](#schemablobstoreapisoftquota)|false|none|none|
|bucketConfiguration|[AzureBlobStoreApiBucketConfiguration](#schemaazureblobstoreapibucketconfiguration)|true|none|none|

<h2 id="tocS_GroupBlobStoreApiCreateRequest">GroupBlobStoreApiCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagroupblobstoreapicreaterequest"></a>
<a id="schema_GroupBlobStoreApiCreateRequest"></a>
<a id="tocSgroupblobstoreapicreaterequest"></a>
<a id="tocsgroupblobstoreapicreaterequest"></a>

```json
{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "members": [
    "string"
  ],
  "fillPolicy": "roundRobin",
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|softQuota|[BlobStoreApiSoftQuota](#schemablobstoreapisoftquota)|false|none|none|
|members|[string]|false|none|List of the names of blob stores that are members of this group|
|fillPolicy|string|false|none|none|
|name|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|fillPolicy|roundRobin|
|fillPolicy|writeToFirst|

<h2 id="tocS_GroupBlobStoreApiUpdateRequest">GroupBlobStoreApiUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemagroupblobstoreapiupdaterequest"></a>
<a id="schema_GroupBlobStoreApiUpdateRequest"></a>
<a id="tocSgroupblobstoreapiupdaterequest"></a>
<a id="tocsgroupblobstoreapiupdaterequest"></a>

```json
{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "members": [
    "string"
  ],
  "fillPolicy": "roundRobin"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|softQuota|[BlobStoreApiSoftQuota](#schemablobstoreapisoftquota)|false|none|none|
|members|[string]|false|none|List of the names of blob stores that are members of this group|
|fillPolicy|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|fillPolicy|roundRobin|
|fillPolicy|writeToFirst|

<h2 id="tocS_GroupBlobStoreApiModel">GroupBlobStoreApiModel</h2>
<!-- backwards compatibility -->
<a id="schemagroupblobstoreapimodel"></a>
<a id="schema_GroupBlobStoreApiModel"></a>
<a id="tocSgroupblobstoreapimodel"></a>
<a id="tocsgroupblobstoreapimodel"></a>

```json
{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "members": [
    "string"
  ],
  "fillPolicy": "roundRobin"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|softQuota|[BlobStoreApiSoftQuota](#schemablobstoreapisoftquota)|false|none|none|
|members|[string]|false|none|List of the names of blob stores that are members of this group|
|fillPolicy|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|fillPolicy|roundRobin|
|fillPolicy|writeToFirst|

<h2 id="tocS_GroupBlobStoreApiResponse">GroupBlobStoreApiResponse</h2>
<!-- backwards compatibility -->
<a id="schemagroupblobstoreapiresponse"></a>
<a id="schema_GroupBlobStoreApiResponse"></a>
<a id="tocSgroupblobstoreapiresponse"></a>
<a id="tocsgroupblobstoreapiresponse"></a>

```json
{
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "members": [
    "string"
  ],
  "fillPolicy": "roundRobin",
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|softQuota|[BlobStoreApiSoftQuota](#schemablobstoreapisoftquota)|false|none|none|
|members|[string]|false|none|List of the names of blob stores that are members of this group|
|fillPolicy|string|false|none|none|
|name|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|fillPolicy|roundRobin|
|fillPolicy|writeToFirst|

<h2 id="tocS_SystemCheckResultDTO">SystemCheckResultDTO</h2>
<!-- backwards compatibility -->
<a id="schemasystemcheckresultdto"></a>
<a id="schema_SystemCheckResultDTO"></a>
<a id="tocSsystemcheckresultdto"></a>
<a id="tocssystemcheckresultdto"></a>

```json
{
  "healthy": true,
  "message": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|healthy|boolean|false|none|Whether the system check succeeded of failed|
|message|string|false|none|A description of the success or failure|

<h2 id="tocS_SystemCheckResultsApiDTO">SystemCheckResultsApiDTO</h2>
<!-- backwards compatibility -->
<a id="schemasystemcheckresultsapidto"></a>
<a id="schema_SystemCheckResultsApiDTO"></a>
<a id="tocSsystemcheckresultsapidto"></a>
<a id="tocssystemcheckresultsapidto"></a>

```json
{
  "nodeId": "string",
  "hostname": "nexus01",
  "results": "{\"Check\": {\"healthy\": false, \"message\": \"An explanation of the check\"}}"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nodeId|string|false|none|A unique identifier for the node, should not be considered stable|
|hostname|string|false|none|The hostname of the originating node|
|results|object|false|none|The system status check results|
|» **additionalProperties**|[SystemCheckResultDTO](#schemasystemcheckresultdto)|false|none|none|

<h2 id="tocS_SamlConfigurationXO">SamlConfigurationXO</h2>
<!-- backwards compatibility -->
<a id="schemasamlconfigurationxo"></a>
<a id="schema_SamlConfigurationXO"></a>
<a id="tocSsamlconfigurationxo"></a>
<a id="tocssamlconfigurationxo"></a>

```json
{
  "entityId": "string",
  "idpMetadata": "string",
  "usernameAttribute": "string",
  "firstNameAttribute": "string",
  "lastNameAttribute": "string",
  "emailAttribute": "string",
  "groupsAttribute": "string",
  "validateResponseSignature": true,
  "validateAssertionSignature": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entityId|string|false|none|SAML Service Provider's unique identifying URI|
|idpMetadata|string|true|none|SAML Identity Provider Metadata XML|
|usernameAttribute|string|true|none|SAML attribute name for the username|
|firstNameAttribute|string|false|none|SAML attribute name for the first name|
|lastNameAttribute|string|false|none|SAML attribute name for the last name|
|emailAttribute|string|false|none|SAML attribute name for email|
|groupsAttribute|string|false|none|SAML attribute name for groups which maps the Identity Provider groups to a Nexus Repository Manager role|
|validateResponseSignature|boolean|false|none|Validate signatures on responses from Identity Provider|
|validateAssertionSignature|boolean|false|none|Validate signatures on assertions from Identity Provider|

<h2 id="tocS_HelmHostedRepositoryApiRequest">HelmHostedRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemahelmhostedrepositoryapirequest"></a>
<a id="schema_HelmHostedRepositoryApiRequest"></a>
<a id="tocShelmhostedrepositoryapirequest"></a>
<a id="tocshelmhostedrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|

<h2 id="tocS_HelmProxyRepositoryApiRequest">HelmProxyRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemahelmproxyrepositoryapirequest"></a>
<a id="schema_HelmProxyRepositoryApiRequest"></a>
<a id="tocShelmproxyrepositoryapirequest"></a>
<a id="tocshelmproxyrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRule|string|false|none|none|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|

<h2 id="tocS_CleanupPolicyResourceXO">CleanupPolicyResourceXO</h2>
<!-- backwards compatibility -->
<a id="schemacleanuppolicyresourcexo"></a>
<a id="schema_CleanupPolicyResourceXO"></a>
<a id="tocScleanuppolicyresourcexo"></a>
<a id="tocscleanuppolicyresourcexo"></a>

```json
{
  "notes": "string",
  "criteriaLastBlobUpdated": 0,
  "criteriaLastDownloaded": 0,
  "criteriaReleaseType": "RELEASES",
  "criteriaAssetRegex": "string",
  "retain": 1,
  "name": "string",
  "format": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notes|string|false|none|description|
|criteriaLastBlobUpdated|integer(int64)|false|none|component age (Components published over “x” days ago (e.g 1-999))|
|criteriaLastDownloaded|integer(int64)|false|none|component usage (Components downloaded in “x” amount of days (e.g 1-999))|
|criteriaReleaseType|string|false|none|release type (Remove components that are of the following release type:)|
|criteriaAssetRegex|string|false|none|asset name matcher (Remove components that have at least one asset name matching the following regular expression pattern:)|
|retain|integer(int32)|false|none|keep the latest "x" number of versions|
|name|string|true|none|policy name|
|format|string|true|none|repository format|

#### Enumerated Values

|Property|Value|
|---|---|
|criteriaReleaseType|RELEASES|
|criteriaReleaseType|PRERELEASES|
|criteriaReleaseType|RELEASES_AND_PRERELEASES|

<h2 id="tocS_AuthSettingsXo">AuthSettingsXo</h2>
<!-- backwards compatibility -->
<a id="schemaauthsettingsxo"></a>
<a id="schema_AuthSettingsXo"></a>
<a id="tocSauthsettingsxo"></a>
<a id="tocsauthsettingsxo"></a>

```json
{
  "enabled": true,
  "username": "string",
  "password": "string",
  "ntlmHost": "string",
  "ntlmDomain": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|auth enabled|
|username|string|true|none|user name|
|password|string|true|none|user password|
|ntlmHost|string|true|none|Windows NTLM Hostname|
|ntlmDomain|string|true|none|Windows NTLM Domain|

<h2 id="tocS_HttpSettingsXo">HttpSettingsXo</h2>
<!-- backwards compatibility -->
<a id="schemahttpsettingsxo"></a>
<a id="schema_HttpSettingsXo"></a>
<a id="tocShttpsettingsxo"></a>
<a id="tocshttpsettingsxo"></a>

```json
{
  "nonProxyHosts": [
    "string"
  ],
  "userAgent": "string",
  "timeout": 1,
  "retries": 10,
  "httpProxy": {
    "enabled": true,
    "host": "string",
    "port": "string",
    "authInfo": {
      "enabled": true,
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "httpsProxy": {
    "enabled": true,
    "host": "string",
    "port": "string",
    "authInfo": {
      "enabled": true,
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nonProxyHosts|[string]|false|none|none|
|userAgent|string|true|none|User-Agent Customization|
|timeout|integer(int32)|true|none|Connection/Socket Timeout|
|retries|integer(int32)|true|none|Connection/Socket Retry Attempts|
|httpProxy|[ProxySettingsXo](#schemaproxysettingsxo)|true|none|none|
|httpsProxy|[ProxySettingsXo](#schemaproxysettingsxo)|true|none|none|

<h2 id="tocS_ProxySettingsXo">ProxySettingsXo</h2>
<!-- backwards compatibility -->
<a id="schemaproxysettingsxo"></a>
<a id="schema_ProxySettingsXo"></a>
<a id="tocSproxysettingsxo"></a>
<a id="tocsproxysettingsxo"></a>

```json
{
  "enabled": true,
  "host": "string",
  "port": "string",
  "authInfo": {
    "enabled": true,
    "username": "string",
    "password": "string",
    "ntlmHost": "string",
    "ntlmDomain": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|proxy enabled|
|host|string|true|none|proxy host|
|port|string|true|none|proxy port|
|authInfo|[AuthSettingsXo](#schemaauthsettingsxo)|true|none|none|

<h2 id="tocS_IqAuditXo">IqAuditXo</h2>
<!-- backwards compatibility -->
<a id="schemaiqauditxo"></a>
<a id="schema_IqAuditXo"></a>
<a id="tocSiqauditxo"></a>
<a id="tocsiqauditxo"></a>

```json
{
  "enabled": true,
  "repositoryName": "string",
  "enabledQuarantine": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|is audit enabled|
|repositoryName|string|true|none|repository name|
|enabledQuarantine|boolean|true|none|is quarantine enabled|

<h2 id="tocS_FrequencyXO">FrequencyXO</h2>
<!-- backwards compatibility -->
<a id="schemafrequencyxo"></a>
<a id="schema_FrequencyXO"></a>
<a id="tocSfrequencyxo"></a>
<a id="tocsfrequencyxo"></a>

```json
{
  "schedule": "string",
  "startDate": 0,
  "timeZoneOffset": "-05:00",
  "recurringDays": [
    0
  ],
  "cronExpression": "0 1 2 * * ?"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|schedule|string|true|none|Type of schedule ("manual", "once", "hourly", "daily", "weekly", "monthly", "cron")|
|startDate|integer(int64)|false|none|Start date of the task represented in unix timestamp. Does not apply for "manual" schedule.|
|timeZoneOffset|string|false|none|The offset time zone of the client. Example:|
|recurringDays|[integer]|false|none|Array with the number of the days the task must run. For "weekly" schedule allowed values, 1 to 7. For "monthly" schedule allowed values, 1 to 31.|
|cronExpression|string|false|none|Cron expression for the task. Only applies for for "cron" schedule.|

<h2 id="tocS_TaskTemplateXO">TaskTemplateXO</h2>
<!-- backwards compatibility -->
<a id="schematasktemplatexo"></a>
<a id="schema_TaskTemplateXO"></a>
<a id="tocStasktemplatexo"></a>
<a id="tocstasktemplatexo"></a>

```json
{
  "type": "string",
  "name": "string",
  "enabled": true,
  "alertEmail": "string",
  "notificationCondition": "FAILURE",
  "frequency": {
    "schedule": "string",
    "startDate": 0,
    "timeZoneOffset": "-05:00",
    "recurringDays": [
      0
    ],
    "cronExpression": "0 1 2 * * ?"
  },
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|The type of task to be created.|
|name|string|true|none|The name of the task template.|
|enabled|boolean|true|none|Indicates if the task would be enabled.|
|alertEmail|string|false|none|e-mail for task notifications.|
|notificationCondition|string|true|none|Condition required to notify a task execution.|
|frequency|[FrequencyXO](#schemafrequencyxo)|true|none|none|
|properties|object|false|none|Additional properties for the task|
|» **additionalProperties**|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|notificationCondition|FAILURE|
|notificationCondition|SUCCESS_FAILURE|

<h2 id="tocS_GoogleCloudBlobStoreApiBucket">GoogleCloudBlobStoreApiBucket</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudblobstoreapibucket"></a>
<a id="schema_GoogleCloudBlobStoreApiBucket"></a>
<a id="tocSgooglecloudblobstoreapibucket"></a>
<a id="tocsgooglecloudblobstoreapibucket"></a>

```json
{
  "name": "string",
  "projectId": "project_123",
  "region": "us-central1",
  "prefix": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the GC Storage bucket|
|projectId|string|false|read-only|GCP Project ID|
|region|string|true|none|The GCP region to create a new GC Storage bucket in or an existing GC Storage bucket's region|
|prefix|string|false|read-only|The GC Storage blob store (i.e GC Storage object) key prefix|

<h2 id="tocS_GoogleCloudBlobStoreApiBucketAuthentication">GoogleCloudBlobStoreApiBucketAuthentication</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudblobstoreapibucketauthentication"></a>
<a id="schema_GoogleCloudBlobStoreApiBucketAuthentication"></a>
<a id="tocSgooglecloudblobstoreapibucketauthentication"></a>
<a id="tocsgooglecloudblobstoreapibucketauthentication"></a>

```json
{
  "authenticationMethod": "applicationDefault",
  "accountKey": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticationMethod|string|true|none|The type of Google Cloud authentication to use.|
|accountKey|string|false|none|The credentials JSON file.|

#### Enumerated Values

|Property|Value|
|---|---|
|authenticationMethod|applicationDefault|
|authenticationMethod|accountKey|

<h2 id="tocS_GoogleCloudBlobStoreApiBucketConfiguration">GoogleCloudBlobStoreApiBucketConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudblobstoreapibucketconfiguration"></a>
<a id="schema_GoogleCloudBlobStoreApiBucketConfiguration"></a>
<a id="tocSgooglecloudblobstoreapibucketconfiguration"></a>
<a id="tocsgooglecloudblobstoreapibucketconfiguration"></a>

```json
{
  "bucket": {
    "name": "string",
    "projectId": "project_123",
    "region": "us-central1",
    "prefix": "string"
  },
  "bucketSecurity": {
    "authenticationMethod": "applicationDefault",
    "accountKey": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|[GoogleCloudBlobStoreApiBucket](#schemagooglecloudblobstoreapibucket)|true|none|none|
|bucketSecurity|[GoogleCloudBlobStoreApiBucketAuthentication](#schemagooglecloudblobstoreapibucketauthentication)|false|none|none|

<h2 id="tocS_GoogleCloudBlobstoreApiModel">GoogleCloudBlobstoreApiModel</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudblobstoreapimodel"></a>
<a id="schema_GoogleCloudBlobstoreApiModel"></a>
<a id="tocSgooglecloudblobstoreapimodel"></a>
<a id="tocsgooglecloudblobstoreapimodel"></a>

```json
{
  "name": "gc_storage",
  "softQuota": {
    "type": "spaceRemainingQuota",
    "limit": 0
  },
  "bucketConfiguration": {
    "bucket": {
      "name": "string",
      "projectId": "project_123",
      "region": "us-central1",
      "prefix": "string"
    },
    "bucketSecurity": {
      "authenticationMethod": "applicationDefault",
      "accountKey": "string"
    }
  },
  "type": "Google Cloud Storage"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the GC Storage blob store.|
|softQuota|[BlobStoreApiSoftQuota](#schemablobstoreapisoftquota)|false|none|none|
|bucketConfiguration|[GoogleCloudBlobStoreApiBucketConfiguration](#schemagooglecloudblobstoreapibucketconfiguration)|true|none|none|
|type|string|false|read-only|The blob store type.|

<h2 id="tocS_CargoGroupRepositoryApiRequest">CargoGroupRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemacargogrouprepositoryapirequest"></a>
<a id="schema_CargoGroupRepositoryApiRequest"></a>
<a id="tocScargogrouprepositoryapirequest"></a>
<a id="tocscargogrouprepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "group": {
    "memberNames": [
      "string"
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|group|[GroupAttributes](#schemagroupattributes)|true|none|none|

<h2 id="tocS_CargoHostedRepositoryApiRequest">CargoHostedRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemacargohostedrepositoryapirequest"></a>
<a id="schema_CargoHostedRepositoryApiRequest"></a>
<a id="tocScargohostedrepositoryapirequest"></a>
<a id="tocscargohostedrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true,
    "writePolicy": "allow_once"
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "component": {
    "proprietaryComponents": true
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[HostedStorageAttributes](#schemahostedstorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|component|[ComponentAttributes](#schemacomponentattributes)|false|none|none|

<h2 id="tocS_CargoProxyRepositoryApiRequest">CargoProxyRepositoryApiRequest</h2>
<!-- backwards compatibility -->
<a id="schemacargoproxyrepositoryapirequest"></a>
<a id="schema_CargoProxyRepositoryApiRequest"></a>
<a id="tocScargoproxyrepositoryapirequest"></a>
<a id="tocscargoproxyrepositoryapirequest"></a>

```json
{
  "name": "internal",
  "online": true,
  "storage": {
    "blobStoreName": "default",
    "strictContentTypeValidation": true
  },
  "cleanup": {
    "policyNames": [
      "string"
    ]
  },
  "proxy": {
    "remoteUrl": "https://remote.repository.com",
    "contentMaxAge": 1440,
    "metadataMaxAge": 1440
  },
  "negativeCache": {
    "enabled": true,
    "timeToLive": 1440
  },
  "httpClient": {
    "blocked": false,
    "autoBlock": true,
    "connection": {
      "retries": 0,
      "userAgentSuffix": "string",
      "timeout": 60,
      "enableCircularRedirects": false,
      "enableCookies": false,
      "useTrustStore": false
    },
    "authentication": {
      "type": "username",
      "username": "string",
      "password": "string",
      "ntlmHost": "string",
      "ntlmDomain": "string"
    }
  },
  "routingRule": "string",
  "replication": {
    "preemptivePullEnabled": false,
    "assetPathRegex": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A unique identifier for this repository|
|online|boolean|true|none|Whether this repository accepts incoming requests|
|storage|[StorageAttributes](#schemastorageattributes)|true|none|none|
|cleanup|[CleanupPolicyAttributes](#schemacleanuppolicyattributes)|false|none|none|
|proxy|[ProxyAttributes](#schemaproxyattributes)|true|none|none|
|negativeCache|[NegativeCacheAttributes](#schemanegativecacheattributes)|true|none|none|
|httpClient|[HttpClientAttributes](#schemahttpclientattributes)|true|none|none|
|routingRule|string|false|none|none|
|replication|[ReplicationAttributes](#schemareplicationattributes)|false|none|none|

