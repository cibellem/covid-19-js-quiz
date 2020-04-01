{
	"info": {
		"_postman_id": "2621ae03-1125-4a7e-aad6-edd1ee4ed01f",
		"name": "Allbound API v4",
		"description": "Requirements\n=======\nActive Allbound account with admin rights\nAdmin username and password\nAdmin API key\nTo obtain an API key, contact systems@allbound.com\n\nLimits\n=======\n\nAt this time, there are no limits on calls.\n\nEndpoint\n=======\n\nAll API calls are made to the endpoint https://api.allbound.com/{{version}} and it must be called through SSL following this format: https://api.allbound.com/{{version}}/object/function\n\nAuthentication\n=======\n\nAuthentication requires both a user-specific key and an Allbound instance be passed in the header.\n\n  * X-API-KEY\n  * X-API-INSTANCE\n\nExample AJAX:\n\nbeforeSend: function(x) {  \n   x.setRequestHeader(\"X-API-KEY\",   'yourkey' ),  \n   x.setRequestHeader(\"X-API-INSTANCE\",   'yourinstance' )  \n}\n\nHTTP Methods\n=======\n\nThe default method for communication to the Allbound API is Post unless noted otherwise in a specific function’s documentation.\n\nResponse Codes & Response Formats\n=======\n\n  * 200 OK\n  * 201 Created\n  * 202 Accepted\n  * 400 Bad Request\n  * 403 Forbidden\n  * 404 Not found\n\nJSON array is returned in all instances with either ‘error’ or ‘success.’ If the function had data to return, it is in the field data.\n\n{ \n   'status':0,\n   'error':string \n}\n{\n   'status':1,\n   'result':data \n}",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Pipeline",
			"item": [
				{
					"name": "CREATE OPPORTUNITY",
					"event": [
						{
							"listen": "test",
							"script": {
								"id": "63ba07f6-f888-442d-b0c6-2a35e59e3ff0",
								"exec": [
									"\r",
									"var responseJSON;\r",
									"try{    \r",
									"    \r",
									"    responseJSON= JSON.parse(responseBody);\r",
									"    tests[\"Status code is 200\"] = responseCode.code === 200;\r",
									"    tests[\"Body contains id\"] = responseBody.has(\"id\");\r",
									"    tests[\"Body contains created\"] = responseBody.has(\"created\");\r",
									"\r",
									" \r",
									"}\r",
									"catch(e){}"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "X-API-KEY",
								"value": "{{key}}"
							},
							{
								"key": "X-API-INSTANCE",
								"value": "{{instance}}"
							},
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n   \"input\":[  \n      {  \n         \"name\": \"B Corp\",\n         \"customer_email\":\"agarciav@allbound.com\",\n         \"customer_first_name\":\"Tommy\",\n         \"customer_last_name\":\"dog\",\n         \"customer_company\":\"new facebook\",\n         \"customer_title\":\"Mr.\",\n         \"customer_phone\":\"8529638956\",\n         \"product_family\":\"Hardware\",\n         \"customer_website\":\"www.google.com\",\n         \"customer_address_1\":\"12 willmore road\",\n         \"customer_address_2\":\"Appt 1\",\n         \"customer_address_3\":\"Phoenix\",\n         \"customer_address_4\":\"AZ\",\n         \"customer_address_5\":\"85005\",\n         \"customer_address_6\":\"United States\",\n         \"amount\":\"1\",\n         \"estimated_quantity\":\"1\",\n         \"estimated_close_date\":\"2018-10-24\",\n         \"status\": \"approved\",\n         \"owner_id\":206,\n         \"id\" : \"\"\n      }\n   ]\n}"
						},
						"url": {
							"raw": "https://api.allbound.com/v4/pipeline/opportunity",
							"protocol": "https",
							"host": [
								"api",
								"allbound",
								"com"
							],
							"path": [
								"v4",
								"pipeline",
								"opportunity"
							]
						}
					},
					"response": []
				},
				{
					"name": "GET FIELDS",
					"event": [
						{
							"listen": "test",
							"script": {
								"id": "1425d74a-2819-475a-8bc3-ba9c105474e2",
								"exec": [
									"var responseJSON;\r",
									"try{\r",
									"    responseJSON= JSON.parse(responseBody);\r",
									"    tests[\"Body contains key\"] = responseBody.has(\"key\");\r",
									"    tests[\"Body contains title\"] = responseBody.has(\"title\");\r",
									"    tests[\"Status code is 200\"] = responseCode.code === 200;\r",
									"}\r",
									"\r",
									"catch(e) {}"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "X-API-KEY",
								"value": "{{key}}"
							},
							{
								"key": "X-API-INSTANCE",
								"value": "{{instance}}"
							},
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "https://api.allbound.com/v4/pipeline/fields/opportunity",
							"protocol": "https",
							"host": [
								"api",
								"allbound",
								"com"
							],
							"path": [
								"v4",
								"pipeline",
								"fields",
								"opportunity"
							]
						}
					},
					"response": []
				},
				{
					"name": "GET OPPORTUNITY",
					"event": [
						{
							"listen": "test",
							"script": {
								"id": "d49d750c-c3a1-4716-a197-0605e4182cb3",
								"exec": [
									"var responseJSON;\r",
									"try{\r",
									"    responseJSON= JSON.parse(responseBody);\r",
									"    tests[\"Body contains name\"] = responseBody.has(\"name\");\r",
									"    tests[\"Body contains customer_email\"] = responseBody.has(\"customer_email\");\r",
									"    tests[\"Body contains customer_first_name\"] = responseBody.has(\"customer_first_name\");\r",
									"    tests[\"Body contains status\"] = responseBody.has(\"status\");\r",
									"    tests[\"Body contains owner_id\"] = responseBody.has(\"owner_id\");\r",
									"    tests[\"Status code is 200\"] = responseCode.code === 200;\r",
									"\r",
									"}\r",
									"catch(e)\r",
									"{}"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "X-API-KEY",
								"value": "{{key}}"
							},
							{
								"key": "X-API-INSTANCE",
								"value": "{{instance}}"
							},
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "https://api.allbound.com/v4/pipeline/opportunity?id=3056",
							"protocol": "https",
							"host": [
								"api",
								"allbound",
								"com"
							],
							"path": [
								"v4",
								"pipeline",
								"opportunity"
							],
							"query": [
								{
									"key": "id",
									"value": "3056"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "GET DEALS",
					"event": [
						{
							"listen": "test",
							"script": {
								"id": "82f78dcf-843a-41fe-a5d1-e14753b07768",
								"exec": [
									"var responseJSON;\r",
									"try{\r",
									"    responseJSON= JSON.parse(responseBody);\r",
									"    tests[\"Body contains name\"] = responseBody.has(\"name\");\r",
									"    tests[\"Body contains customer_email\"] = responseBody.has(\"customer_email\");\r",
									"    tests[\"Body contains customer_first_name\"] = responseBody.has(\"customer_first_name\");\r",
									"    tests[\"Body contains status\"] = responseBody.has(\"status\");\r",
									"    tests[\"Body contains owner_id\"] = responseBody.has(\"owner_id\");\r",
									"    tests[\"Status code is 200\"] = responseCode.code === 200;\r",
									"\r",
									"}\r",
									"catch(e)\r",
									"{}"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "X-API-KEY",
								"value": "{{key}}"
							},
							{
								"key": "X-API-INSTANCE",
								"value": "{{instance}}"
							},
							{
								"key": "Content-Type",
								"value": "application/json"
							}
						],
						"url": {
							"raw": "https://api.allbound.com/v4/pipeline/deals?length=100&created>=2008-11-01%2000:00:00",
							"protocol": "https",
							"host": [
								"api",
								"allbound",
								"com"
							],
							"path": [
								"v4",
								"pipeline",
								"deals"
							],
							"query": [
								{
									"key": "length",
									"value": "100"
								},
								{
									"key": "created>",
									"value": "2008-11-01%2000:00:00"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "UPDATE LEAD",
					"event": [
						{
							"listen": "test",
							"script": {
								"id": "9613cf9c-02e4-4508-b9fa-ba864c9f916f",
								"exec": [
									"var responseJSON;\r",
									"try{\r",
									"    responseJSON= JSON.parse(responseBody);\r",
									"    tests[\"Body contains id\"] = responseBody.has(\"id\");\r",
									"    tests[\"Body contains updated\"] = responseBody.has(\"updated\");\r",
									"    tests[\"Status code is 200\"] = responseCode.code === 200;\r",
									"\r",
									"\r",
									"}\r",
									"catch(e)\r",
									"{}"
								],
								"type": "text/javascript"
							}
						}
	...