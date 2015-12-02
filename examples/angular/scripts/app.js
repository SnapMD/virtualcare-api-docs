//https://sandbox.connectedcare.md/api/Help
var util = {
    setHeaders: function (request, credentials) {
        if (typeof credentials != 'undefined') {
            request.defaults.headers.common['Authorization'] = "Bearer " + credentials.accessToken;
        }
        request.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        request.defaults.headers.post['X-Developer-Id'] = '4ce98e9fda3f405eba526d0291a852f0';
        request.defaults.headers.post['X-Api-Key'] = '1de605089c18aa8318c9f18177facd7d93ceafa5';
        return request;
    },
    getHeaders: function (accessToken, apiKey, developerId) {
        var headers = {
                'X-Developer-Id': developerId, //'4ce98e9fda3f405eba526d0291a852f0',
                'X-Api-Key': apiKey, //'1de605089c18aa8318c9f18177facd7d93ceafa5',
                'Content-Type': 'application/json; charset=utf-8'
            };
        if (typeof accessToken != 'undefined') {
            headers['Authorization'] = 'Bearer ' + accessToken;
        }
        
        return headers;
    }
}
// Declare app level module which depends on views, and components
var app = angular.module('apiTestApp', ['ui.bootstrap', 'ngLoadingSpinner', 'jsonFormatter']);

app.controller('apiTestController', ['$scope', 'apiComService', function ($scope, apiComService) {
		
		$scope.baseUrl = apiComService.baseUrl;
        $scope.title = 'SnapMD API Test';
        $scope.accessToken = 'No Token';
        $scope.tokenStatus = 'alert-warning';
        
        $scope.developerId = apiComService.developerId;
        $scope.apiKey = apiComService.apiKey;
    
       // $scope.existingConsultation = '{ "message": "NO EXISITING CONSULTATION JSON" }';
        $scope.consultationId = 2440;//2440
        $scope.patientId = 452;
		$scope.otherPatientId = 505;
        $scope.hospitalId = 1; //126;
        $scope.userTypeId = 1;
        $scope.profileId = '';
		$scope.emailAddress = 'user@domain.tld';//'austin@rinsoft.com';
		$scope.userPassword = '******';//'Austinhg#1';
		$scope.emailType = 'resetpassword';
        $scope.Amount = 30;
        $scope.paymentProfileId = '';


        $scope.userId = 471;
        $scope.BillingAddress = '123 chennai';
        $scope.CardNumber = 4111111111111111;
        $scope.City = 'Los Angeles';
        $scope.ExpiryMonth = 8;
        $scope.ExpiryYear = 2019;
        $scope.FirstName = 'First';
        $scope.LastName = 'Last';
        $scope.State = 'California';
        $scope.Zip = 91302;
        $scope.Country = 'US';
        $scope.Cvv = 123;
		
		$scope.soap_consult_id = $scope.consultationId;
		$scope.soap_subjective_note = "I feel sick";
		$scope.soap_objective_note = "runny nose";
		$scope.soap_assessment_note = "sick";
		$scope.soap_plan_note = "sleep";
		
		$scope.insuranceCompanyName = "test";
		$scope.insurancePolicyNumber = "test";
		
		$scope.healthPlanID = 124;
		//patientId
		$scope.insuranceCompany = "testCompany";
		$scope.insuranceCompanyNameId = 1;
		$scope.isDefaultPlan = 'Y';
		$scope.insuranceCompanyPhone = '8888888888';
		$scope.memberName = 'Rinsoft';
		$scope.subsciberId = '505';
		$scope.policyNumber = '123123123';
		$scope.subscriberFirstName = 'Rin';
		$scope.subscriberLastName = 'Soft';
		$scope.subscriberDob = '2015-05-27T17:00:15.7010698-05:00';
		$scope.isActive = 'A';
		$scope.payerId = '471';
		
		$scope.insuranceCompanyNameApply = 'testCompany2';
		$scope.policyNumberApply = '111111111';
		$scope.consultationIdApply = 2440;
		$scope.healthPlanIdApply = 3166;
		
		$scope.addEventServerStatus = "0";
		$scope.addEventStatus = "";
        $scope.event = 120;
        $scope.eventType = 23;
    
        $scope.fileSharingType = "customer";
		
        $scope.codesFields = "medicalconditions,medications,medicationallergies,consultprimaryconcerns,consultsecondaryconcerns";

        //$scope.existingConsultationReport = '{ "message": "NO EXISTING CONSULTATION REPORT JSON" }';
       // $scope.scheduledConsultationList = '{ "message": "NO EXISTING CONSULTATION LIST JSON" }';
       // $scope.patientPaymentProfiles = '{ "message": "NO PATIENT PROFILE JSON" }';
       // $scope.patientFacilitiesList = '{ "message": "NO PATIENT FACILITIES LIST JSON" }';
        $scope.hospitalCodesList = '';
		//$scope.patientHealthPlanList = '{ "message": "NO PATIENT HEALTH PLAN JSON" }';
		//$scope.ConsultationSave = '{ "message": "NO CONSULTATION SAVE JSON" }';
		$scope.ConsultationSaveData = 	{
									  "medicationAllergies": [
										{
										  "code": 1,
										  "description": "med 352"
										},
										{
										  "code": 2,
										  "description": "med 3537"
										}
									  ],
									  "surgeries": [
										{
										  "description": "ankle",
										  "month": 2,
										  "year": 2015
										},
										{
										  "description": "elbow",
										  "month": 2,
										  "year": 2015
										}
									  ],
									  "medicalConditions": [
										{
										  "code": 4,
										  "description": "cancer"
										},
										{
										  "code": 5,
										  "description": "other"
										}
									  ],
									  "medications": [
										{
										  "code": 6,
										  "description": "med 123"
										},
										{
										  "code": 7,
										  "description": "med 345"
										}
									  ],
									  "infantData": {
										"fullTerm": "T",
										"vaginalBirth": "T",
										"dischargedWithMother": "T",
										"vaccinationsCurrent": "T"
									  },
									  "concerns": [
										{
										  "isPrimary": true,
										  "description": "Fever 06-12",
										  "customCode" : {
											"description": "Fever 06-12",
										  }
										},
										{
										  "isPrimary": false,
										  "description": "watery eyes 06-12",
										  "customCode" : {
											"description": "watery eyes 06-12",
										  }
										}
									  ]
									};
		
		$scope.OnDemandConsultationSaveData = function(){
			return{
			  "concerns": [
				{
				  "isPrimary": true,
				  "description": "w/e"
				},
				{
				  "isPrimary": false,
				  "description": "r/n"
				}
			  ],
			  "phone": "+10123456789",
			  "patientId": $scope.patientId		//this wasn't working when changed from input
			}
		}
											
		$scope.changedBaseUrl = function(){
			apiComService.setBaseUrl($scope.baseUrl);
		};
    
        $scope.changedDeveloperId = function(){
			apiComService.setDeveloperId($scope.developerId);
		};

    
        $scope.changedApiKey = function(){
			apiComService.setApiKey($scope.apiKey);
		};


        $scope.doGetToken = function () {
			$scope.accessToken = 'processing ...';
            var params = {
                email: $scope.emailAddress,
                password: $scope.userPassword,
                userTypeId: $scope.userTypeId,
                hospitalId: $scope.hospitalId,
                success: function (data) {
                    $scope.accessToken = data.access_token;
                    $scope.tokenStatus = 'alert-success';
                },
                error: function (data) {
                    $scope.accessToken = 'Error getting access token';
                    $scope.tokenStatus = 'alert-danger';
                    console.log(data);
                }
            };

            apiComService.getToken(params);
        }

        $scope.doGetExistingConsultation = function () {
            if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
			
			$scope.existingConsultation = "processing ...";
            var params = {
                consultationId: $scope.consultationId,
                accessToken: $scope.accessToken,
                success: function (data) {
                    $scope.existingConsultation = JSON.stringify(data, null, 2);
                },
                error: function (data) {
                    $scope.existingConsultation = 'Error getting existing consultation';
                    console.log(data);
                }
            };

            apiComService.getExistingConsultation(params);
        };

        $scope.doGetExistingConsultationReport = function () {
            if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
            var params = {
                consultationId: $scope.consultationId,
                accessToken: $scope.accessToken,
                success: function (data) {
                    $scope.existingConsultationReport = data;
                },
                error: function (data) {
                    $scope.existingConsultationReport = 'Error getting consultation report';
                    console.log(data);
                }
            };

            apiComService.getConsultationFinalReport(params);
        }

        $scope.doGetPatientPaymentProfiles = function () {
            if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
			
			$scope.patientPaymentProfiles = "processing ..."
            var params = {
                hospitalId: $scope.hospitalId,
                patientId: $scope.patientId,
                accessToken: $scope.accessToken,
                success: function (data) {
                    $scope.patientPaymentProfiles = data;
					$scope.profileId = data.data.profileID;
					$scope.paymentProfileId = data.data.paymentProfiles[0].profileID;
                },
                error: function (data) {
                    $scope.patientPaymentProfiles = 'Error getting patient payment profiles';
                    console.log(data);
                }
            };

            apiComService.getPatientPaymentProfile(params);
        }

        $scope.doPostCoPayDetails = function () {
            if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
			
			$scope.CreditCardDetails = "processing ...";
            var params = {
                profileId: $scope.profileId,
                emailAddress: $scope.emailAddress,
                Amount: $scope.Amount,
                consultationId: $scope.consultationId,
                paymentProfileId: $scope.paymentProfileId,
                accessToken: $scope.accessToken,
                success: function (data) {
                    $scope.CreditCardDetails = data;
                },
                error: function (data) {
                    $scope.CreditCardDetails = 'Error getting patient payment profiles';
                    console.log(data);
                }
            };

            apiComService.postCoPayDetails(params);
        }

        $scope.doPostPaymentProfileDetails = function () {
            if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
            var params = {
                userId: $scope.userId,
                BillingAddress: $scope.BillingAddress,
                CardNumber: $scope.CardNumber,
                City: $scope.City,
                ExpiryMonth: $scope.ExpiryMonth,
                ExpiryYear: $scope.ExpiryYear,
                FirstName: $scope.FirstName,
                LastName: $scope.LastName,
                State: $scope.State,
                Zip: $scope.Zip,
                Country: $scope.Country,
                ProfileId: $scope.profileId,
                Cvv: $scope.Cvv,
                accessToken: $scope.accessToken,
                success: function (data) {
                    $scope.PostPaymentDetails = data;
                },
                error: function (data) {
                    $scope.PostPaymentDetails = 'Error getting consultation report';
                    console.log(data);
                }
            };

            apiComService.postPaymentProfileDetails(params);
        }

        $scope.doGetFacilitiesList = function () {
            if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
            var params = {
                emailAddress: $scope.emailAddress,
                accessToken: $scope.accessToken,
                success: function (data) {
                    $scope.patientFacilitiesList = data;
                },
                error: function (data) {
                    $scope.patientFacilitiesList = 'Error getting consultation report';
                    console.log(data);
                }
            };

            apiComService.getFacilitiesList(params);
        }
        
        $scope.doGetCodesSet = function () {
            if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
			$scope.hospitalCodesList = "processing ...";
            var params = {
                hospitalId: $scope.hospitalId,
                accessToken: $scope.accessToken,
                fields: $scope.codesFields,
                success: function (data) {
                    $scope.hospitalCodesList = data;
                },
                error: function (data) {
                    $scope.hospitalCodesList = 'Error getting hospital codes list';
                    console.log(data);
                }
            };

            apiComService.getCodesSet(params);
        }

        $scope.doGetScheduledConsultation = function () {
            if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
			
			$scope.scheduledConsultationList = "processing ...";
            var params = {
                patientId: $scope.patientId,
				userId: $scope.userId,
                accessToken: $scope.accessToken,
                success: function (data) {
                    $scope.scheduledConsultationList = JSON.stringify(data, null, 2);
                },
                error: function (data) {
                    $scope.scheduledConsultationList = 'Error getting patient scheduled consultation list';
                    console.log(data);
                }
            };

            apiComService.getScheduledConsultation(params);
        }
		
		 $scope.doGetPatientHealthPlansList = function () {
            if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
            var params = {
                patientId: $scope.otherPatientId,
                accessToken: $scope.accessToken,
                success: function (data) {
                    $scope.patientHealthPlanList = data;
                },
                error: function (data) {
                    $scope.patientHealthPlanList = 'Error getting patient health plan list';
                    console.log(data);
                }
            };

            apiComService.getPatientHealthPlansList(params);
        }
		
		 $scope.doPutConsultationSave = function () {
            if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
			
			$scope.ConsultationSave = "processing ..."
            var params = {
                consultationId: $scope.consultationId,
                accessToken: $scope.accessToken,
				ConsultationSaveData: $scope.ConsultationSaveData,
                success: function (data) {
                    //$scope.ConsultationSave = data;
					$scope.ConsultationSave = "success";
                },
                error: function (data) {
                    $scope.ConsultationSave = 'Error getting patient Consultation Save';
                    console.log(data);
                }
            };

            apiComService.putConsultationSave(params);
        }
		
		$scope.doGetPatientsConsultations = function() {
			if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
			 var params = {
				patientID: $scope.patient_Id,
                consultationId: $scope.consultationId,
                accessToken: $scope.accessToken,
                success: function (data) {
                    $scope.Patient_Consultations = data;
                },
                error: function (data) {
                    $scope.Patient_Consultations = 'Error getting patient Consultation';
                    console.log(data);
                }
            };
			
			apiComService.getPatientsConsultations(params);
		}
		
		$scope.doPostPatientSoapNote = function() {
			if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
			 var params = {
				consultationID: $scope.soap_consult_id,
				patientID: $scope.patientId,
				userID: $scope.userId,
				subjective: $scope.soap_subjective_note,
				objective: $scope.soap_objective_note,
				assessment: $scope.soap_assessment_note,
				plan: $scope.soap_plan_note,
				//cptCode: $scope.soap_CptCode,
                accessToken: $scope.accessToken,
                success: function (data) {
                    $scope.Soap_Note = data;
                },
                error: function (data) {
                    $scope.Soap_Note = 'Error posting patient soap note';
                    console.log(data);
                }
            };
			
			apiComService.postPatientSoapNote(params);
		}
		
		$scope.doGetPatientsSoapNotes = function() {
			if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
			 var params = {
                consultationID: $scope.consultationId,
                accessToken: $scope.accessToken,
                success: function (data) {
                    $scope.SoapNote = data;
                },
                error: function (data) {
                    $scope.SoapNote = 'Error getting patient Soap Note';
                    console.log(data);
                }
            };
			
			apiComService.getPatientsSoapNotes(params);
		}
/*
		$scope.doGetPatientsHospitalList = function() {
			if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
			 var params = {
                patientID: $scope.patientId,
                accessToken: $scope.accessToken,
                success: function (data) {
                    $scope.PatientsHospitalList = data;
                },
                error: function (data) {
                    $scope.PatientsHospitalList = 'Error getting patient hospital List';
                    console.log(data);
                }
            };
			
			apiComService.getPatientsHospitalList(params);
		}
*/
		$scope.doPostSendPasswordResetEmail = function() {
			if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
			 var params = {
                patientEmail: $scope.emailAddress,
				emailType: $scope.emailType,
                accessToken: $scope.accessToken,
                success: function (data) {
                    $scope.PasswordResetEmail = data;
                },
                error: function (data) {
                    $scope.PasswordResetEmail = 'Error sending reset email';
                    console.log(data);
                }
            };
			
			apiComService.postSendPasswordResetEmail(params);
		}				
	
		$scope.doGetRelatedPatientProfiles = function() {
			if ($scope.accessToken == 'No Token') {
				alert('No token.  Get token first then attempt operation.');
				return;
			}
			 var params = {
                patientID: $scope.otherPatientId,
                accessToken: $scope.accessToken,
				success: function (data) {
					$scope.RelatedPatientProfiles = data;
				},
				error: function (data) {
					$scope.RelatedPatientProfiles = 'Error getting Related Patient Profiles';
					console.log(data);
				}
			};
			
			apiComService.getRelatedPatientProfiles(params);
		}

		$scope.doPostApplyHealthPlan = function() {
			if ($scope.accessToken == 'No Token') {
				alert('No token.  Get token first then attempt operation.');
				return;
			}
			 var params = {
                accessToken: $scope.accessToken,
				insuranceCompanyName: $scope.insuranceCompanyNameApply,
				policyNumber: $scope.policyNumberApply,
				consultationId: $scope.consultationIdApply,
				healthPlanId: $scope.healthPlanIdApply,
				success: function (data) {
					$scope.ApplyHealthPlan = data;
				},
				error: function (data) {
					$scope.ApplyHealthPlan = 'Error posting Patient Profile';
					console.log(data);
				}
			};
			
			apiComService.postApplyHealthPlan(params);
		}
		
		$scope.doPostNewHealthPlan = function() {
			if ($scope.accessToken == 'No Token') {
				alert('No token.  Get token first then attempt operation.');
				return;
			}
			 var params = {
                accessToken: $scope.accessToken,
				healthPlanID: $scope.healthPlanID,
				insuranceCompany: $scope.insuranceCompany,
				insuranceCompanyNameId: $scope.insuranceCompanyNameId,
				isDefaultPlan: $scope.isDefaultPlan,
				insuranceCompanyPhone: $scope.insuranceCompanyPhone,
				memberName: $scope.memberName,
				subsciberId: $scope.subsciberId,
				policyNumber: $scope.policyNumber,
				subscriberFirstName: $scope.subscriberFirstName,
				subscriberLastName: $scope.subscriberLastName,
				subscriberDob: $scope.subscriberDob,
				isActive: $scope.isActive,
				payerId: $scope.payerId,
				success: function (data) {
					$scope.NewHealthPlan = data;
				},
				error: function (data) {
					$scope.NewHealthPlan = 'Error posting Patient Profile';
					console.log(data);
				}
			};
			
			apiComService.postNewHealthPlan(params);
		}
		
		$scope.doPostCodeSets = function() {
			if ($scope.accessToken == 'No Token') {
				alert('No token.  Get token first then attempt operation.');
				return;
			}
			 var params = {
                accessToken: $scope.accessToken,
				patientEmail: $scope.emailAddress,
				healthPlanID: $scope.healthPlanID,
				success: function (data) {
					$scope.CodeSets = data;
				},
				error: function (data) {
					$scope.CodeSets = 'Error posting Patient Profile';
					console.log(data);
				}
			};
			
			apiComService.postCodeSets (params);
		};
		
		$scope.doGetHealthPlanProvider = function() {
				if ($scope.accessToken == 'No Token') {
					alert('No token.  Get token first then attempt operation.');
					return;
				}
				 var params = {
					accessToken: $scope.accessToken,
					success: function (data) {
						$scope.HealthPlanProvider = data;
					},
					error: function (data) {
						$scope.HealthPlanProvider = 'Error posting Patient Profile';
						console.log(data);
					}
				};
				
				apiComService.getHealthPlanProvider (params);
		};
		
		$scope.doGetPatientsProfile = function() {
				if ($scope.accessToken == 'No Token') {
					alert('No token.  Get token first then attempt operation.');
					return;
				}
				 var params = {
					accessToken: $scope.accessToken,
					patientID: $scope.patientId,
					success: function (data) {
						$scope.PatientsProfile = data;
					},
					error: function (data) {
						$scope.PatientsProfile = 'Error posting Patient Profile';
						console.log(data);
					}
				};
				
				apiComService.getPatientsProfile (params);
		};
		
		$scope.doPostOnDemandConsultation = function() {
				if ($scope.accessToken == 'No Token') {
					alert('No token.  Get token first then attempt operation.');
					return;
				}
				
				$scope.OnDemandConsultationSaveResult = 'processing ...';
				 var params = {
					accessToken: $scope.accessToken,
					OnDemandConsultationData: $scope.OnDemandConsultationSaveData(),
					patientID: $scope.patientId,
					success: function (data) {
						$scope.OnDemandConsultationSaveResult = data;
                        $scope.consultationId = data.data[0].consultationId;
						$scope.Amount = data.data[0].consultationAmount;
					},
					error: function (data) {
						$scope.OnDemandConsultationSaveResult = 'Error posting On Demand Consultation';
						console.log(data);
					}
				};
				
				apiComService.postOnDemandConsultation (params);
		};
		
		$scope.doGetConsultationKey = function () {
            if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
            var params = {
                consultationId: $scope.consultationId,
                accessToken: $scope.accessToken,
                success: function (data) {
                    $scope.ConsultationKey = data;
                },
                error: function (data) {
                    $scope.ConsultationKey = 'Error getting consultation key';
                    console.log(data);
                }
            };

            apiComService.getConsultationKey(params);
        };
    
        $scope.doPostConsultationsEvents = function () {
            if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
			
			$scope.addEventStatus = 'processing ...';
            var params = {
                ConsultationId: $scope.consultationId,
                event: $scope.event,
                eventType: $scope.eventType,
                accessToken: $scope.accessToken,
                success: function (data, status) {
                    $scope.addEventStatus = 'success';
                    $scope.addEventServerStatus = status;
                },
                error: function (data, status) {
                    $scope.addEventStatus = 'Error updating consultation events';
                    $scope.addEventServerStatus = status;
                    console.log(data);
                }
            };

            apiComService.postConsultationsEvents(params);
        };
    
        $scope.doGetBaseFolderStructure = function(){
            if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
            
            $scope.getBaseFolderEventStatus = 'processing ...';
            var params = {
                consultationId: $scope.consultationId,
                patientId: $scope.patientId,
                accessToken: $scope.accessToken,
                success: function (data, status) {
                    $scope.getBaseFolderEventServerStatus = 'success';
                    $scope.getBaseFolderEventStatus = data;
                },
                error: function (data, status) {
                    $scope.getBaseFolderEventStatus = 'Error getting the folder';
                    $scope.getBaseFolderEventServerStatus = status;
                    console.log(data);
                }
            };

            apiComService.getBaseFolderStructure($scope.fileSharingType, params);
        };
		
        $scope.doGetFolderStructure = function(){
            if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
            
            $scope.getFolderEventStatus = 'processing ...';
            var params = {
                consultationId: $scope.consultationId,
                patientId: $scope.patientId,
                accessToken: $scope.accessToken,
                folderId: $scope.folderId,
                success: function (data, status) {
                    $scope.getFolderEventServerStatus = 'success';
                    $scope.getFolderEventStatus = data;
                },
                error: function (data, status) {
                    $scope.getFolderEventStatus = 'Error getting the folder';
                    $scope.getFolderEventServerStatus = status;
                    console.log(data);
                }
            };

            apiComService.getFolderStructure($scope.fileSharingType, params);
        };    
		
		
        $scope.doPostFolder = function(){
            if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
            
            $scope.postFolderEventStatus = 'processing ...';
            var params = {
                consultationId: $scope.consultationId,
                patientId: $scope.patientId,
                accessToken: $scope.accessToken,
                folderId: $scope.folderId,
                name: $scope.folderName,
                success: function (data, status) {
                    $scope.postFolderEventServerStatus = 'success';
                    $scope.postFolderEventStatus = data;
                },
                error: function (data, status) {
                    $scope.postFolderEventStatus = 'Error creating the folder';
                    $scope.postFolderEventServerStatus = status;
                    console.log(data);
                }
            };

            apiComService.postFolder($scope.fileSharingType, params);
        };
    
        $scope.doPostFolder = function(){
            if ($scope.accessToken == 'No Token') {
                alert('No token.  Get token first then attempt operation.');
                return;
            }
            
            $scope.postFileEventStatus = 'processing ...';
            var params = {
                consultationId: $scope.consultationId,
                patientId: $scope.patientId,
                accessToken: $scope.accessToken,
                folderId: $scope.folderId,
                success: function (data, status) {
                    $scope.postFileEventServerStatus = 'success';
                    $scope.postFileEventStatus = data;
                },
                error: function (data, status) {
                    $scope.postFileEventStatus = 'Error creating the folder';
                    $scope.postFileEventServerStatus = status;
                    console.log(data);
                }
            };

            apiComService.postFile($scope.fileSharingType, params);
        };
    }]);

app.service('apiComService', function ($http) {

	/*
		added base url for all requests
	*/
	var self = this;
	self.baseUrl = 'https://sandbox.connectedcare.md/';
    self.apiKey = '1de605089c18aa8318c9f18177facd7d93ceafa5';
    self.developerId = '4ce98e9fda3f405eba526d0291a852f0';
	self.setBaseUrl = function(urlString){
		self.baseUrl = urlString;
	};

    self.setApiKey = function(inputKey) {
        self.apiKey = inputKey;
    };

    self.setDeveloperId = function(inputDevId) {
        self.developerId = inputDevId;
    };

    /*
     params: email, password, userTypeId, hospitalId
     (event handlers): success, failure
     */
    this.getToken = function (params) {
        var requestInfo = {
            headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/Account/Token',
            method: 'POST',
            data: {
                UserTypeId: params.userTypeId,
                HospitalId: params.hospitalId,
                Email: params.email,
                Password: params.password
            }         
        };
        
        $http(requestInfo).
                success(function (data, status, headers, config) {
                    if (typeof params.success != 'undefined') {
                        params.success(data);
                    }
                }).
                error(function (data, status, headers, config) {
                    if (typeof params.error != 'undefined') {
                         params.error(data);
                    }
                });
    }

    this.getScheduledConsultation = function (params) {
        //https://snap-dev.com/api/v2/patients/scheduledconsultations?patientId={patientId}	
        //util.setHeaders($http, params);
        var requestInfo = {
            headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/v2/patients/scheduledconsultations?Id=' + params.patientId,			
            method: 'GET'   
        };

        $http(requestInfo).
                success(function (data, status, headers, config) {
                    if (typeof params.success != 'undefined') {
                        params.success(data);
                    }
                }).
                error(function (data, status, headers, config) {
                    if (typeof params.error != 'undefined') {
                        params.error(data);
                    }
                });
    }

    this.getExistingConsultation = function (params) {
        //https://snap-dev.com/api/v2/patients/consultations/2440/all
        //util.setHeaders($http, params);
        var requestInfo = {
            headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/v2/patients/consultations/' + params.consultationId + '/all',
            method: 'GET'   
        };

        $http(requestInfo).
                success(function (data, status, headers, config) {
                    if (typeof params.success != 'undefined') {
                        params.success(data);
                    }
                }).
                error(function (data, status, headers, config) {
                    if (typeof params.error != 'undefined') {
                       params.error(data);
                    }
                });
    }

    this.getConsultationFinalReport = function (params) {
        //https://snap-dev.com/api/reports/consultationreportdetails/2440
        //util.setHeaders($http, params);
        var requestInfo = {
            headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/reports/consultationreportdetails/' + params.consultationId,
            method: 'GET'   
        };

        $http(requestInfo).
                success(function (data, status, headers, config) {
                    if (typeof params.success != 'undefined') {
                        params.success(data);
                    }
                }).
                error(function (data, status, headers, config) {
                    if (typeof params.error != 'undefined') {
                         params.error(data);
                    }
                });
    }

    this.getPatientPaymentProfile = function (params) {
        //https://snap-dev.com/api/v2/patients/profile/471/payments?hospitalId=126
        //util.setHeaders($http, params);
        var requestInfo = {
            headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/patients/' + params.patientId + '/payments',
			method: 'GET'   
        };

        $http(requestInfo).
                success(function (data, status, headers, config) {
                    if (typeof params.success != 'undefined') {
                        params.success(data);
                    }
                }).
                error(function (data, status, headers, config) {
                    if (typeof params.error != 'undefined') {
                       params.error(data);
                    }
                });
    }

    this.getFacilitiesList = function (params) {
        //GET v2/patients/hospitals?email=<email>
        //util.setHeaders($http, params);
        var requestInfo = {
            headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/v2/hospitals?patient=' + params.emailAddress,
            method: 'GET'   
        };
        
        $http(requestInfo).
                success(function (data, status, headers, config) {
                    if (typeof params.success != 'undefined') {
                        params.success(data);
                    }
                }).
                error(function (data, status, headers, config) {
                    if (typeof params.error != 'undefined') {
                        params.error(data);
                    }
                });
    }

    this.postCoPayDetails = function (params) {
        //util.setHeaders($http, params);
        var requestInfo = {
            headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/v2/patients/copay',
            method: 'POST',
            data: {
                ProfileId: params.profileId,
                Email: params.emailAddress,
                Amount: params.Amount,
                ConsultationId: params.consultationId,
                PaymentProfileId: params.paymentProfileId
            }         
        };

        $http(requestInfo).
                success(function (data, status, headers, config) {
                    if (typeof params.success != 'undefined') {
                        params.success(/*{
                            "transaction": "SUCCESSFUL"
                        }*/
						data);
                    }
                }).
                error(function (data, status, headers, config) {
                    if (typeof params.error != 'undefined') {
                        params.error(data);
                    }
                });
    }
	
	this.getPatientHealthPlansList = function (params) {
        //util.setHeaders($http, params);

		var requestInfo = {
			headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
			url: self.baseUrl + 'api/v2/healthplans',
			method: 'get'       
		};

        $http(requestInfo).
                success(function (data, status, headers, config) {
                    if (typeof params.success != 'undefined') {
                        params.success(data);
                    }
                }).
                error(function (data, status, headers, config) {
                    if (typeof params.error != 'undefined') {
                       params.error(data);
                    }
                });
    }
    
    this.getCodesSet = function(params) {
        //sample uri: /api/v2/codesets?hospitalId=1&fields=medications
        //"fields" is a comma-delimited list of the following: medicalconditions, medications, medicationallergies, consultprimaryconcerns, consultsecondaryconcerns
        var requestInfo = {
            headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/v2/codesets?hospitalId=' + params.hospitalId + '&fields=' + params.fields,
            method: 'GET'    
        };

        $http(requestInfo).
                success(function(data, status, headers, config) {
                        if(typeof params.success != 'undefined') {
                                params.success(data);
                        }
                }).
                error(function(data, status, headers, config) {
                        if(typeof params.error != 'undefined') {
                                params.error(data);
                        }
                });
    }

    this.postPaymentProfileDetails = function (params) {
        //util.setHeaders($http, params);
        var requestInfo = {
            headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/patients/' + params.userId + '/payments',
            method: 'POST',
            data: {
                userId: params.userId,
                BillingAddress: params.BillingAddress,
                CardNumber: params.CardNumber,
                City: params.City,
                ExpiryMonth: params.ExpiryMonth,
                ExpiryYear: params.ExpiryYear,
                FirstName: params.FirstName,
                LastName: params.LastName,
                State: params.State,
                Zip: params.Zip,
                Country: params.Country,
                ProfileId: params.ProfileId,
                Cvv: params.Cvv
            }         
        };

        $http(requestInfo).
                success(function (data, status, headers, config) {
                    if (typeof params.success != 'undefined') {
                        params.success(data);
                    }
                }).
                error(function (data, status, headers, config) {
                    if (typeof params.error != 'undefined') {
                        params.error(data);
                    }
                });
    }
	this.putConsultationSave = function (params) {
        //util.setHeaders($http, params);
        var requestInfo = {
            headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/v2/patients/consultations/' + params.consultationId + '/intake',
            method: 'PUT',
			data: params.ConsultationSaveData
        };

        $http(requestInfo).
                success(function (data, status, headers, config) {
                    if (typeof params.success != 'undefined') {
                        params.success(data);
                    }
                }).
                error(function (data, status, headers, config) {
                    if (typeof params.error != 'undefined') {
                         params.error(data);
                    }
                });
    }
	
	this.getPatientsConsultations = function (params) {
		        //util.setHeaders($http, params);
        var requestInfo = {
            headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/patients/consultations?userId=' + params.patientID,
            method: 'GET'       
        };
		
        $http(requestInfo).
                success(function (data, status, headers, config) {
                    if (typeof params.success != 'undefined') {
                        params.success(data);
                    }
                }).
                error(function (data, status, headers, config) {
                    if (typeof params.error != 'undefined') {
                        params.error(data);
                    }
                });
	}
	
	this.postPatientSoapNote = function (params) {
		var requestInfo = {
            headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/Soapnotes/Post',
			//patientconsultation/soapnote',
            method: 'POST',
            data: {
                ConsultationID: params.consultationID,
                PatientID: params.patientID,
                UserID: params.userID,
                Subjective: params.subjective,
                Objective: params.objective,
                Assessment: params.assessment,
                Plan: params.plan//,
                //CptCode: params.cptCode
            }         
        };

        $http(requestInfo).
                success(function (data, status, headers, config) {
                    if (typeof params.success != 'undefined') {
						params.success(data);
                    }
                }).
                error(function (data, status, headers, config) {
                    if (typeof params.error != 'undefined') {
                       params.error(data);
                    }
                });
	}
	
	this.getPatientsSoapNotes = function (params) {
		var confirmSoapPost = {
			headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/patients/consultations/' + params.consultationID + '/soapnote',
            method: 'GET'
		};
		
		$http(confirmSoapPost).
			success(function (data, status, headers, config) {
				if (typeof params.success != 'undefined') {
					params.success(data);
				}
			}).
			error(function (data, status, headers, config) {
				if (typeof params.error != 'undefined') {
					 params.error(data);
				}
		});
		
	}

	this.postSendPasswordResetEmail = function(params) {
		var confirmSendPasswordResetEmail = {
			headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/v2/patients/' + params.patientEmail + '/mail?type=' + params.emailType,
            method: 'POST'
		};
		
		$http(confirmSendPasswordResetEmail).
			success(function (data, status, headers, config) {
				if (typeof params.success != 'undefined') {
					params.success(data);
				}
			}).
			error(function (data, status, headers, config) {
				if (typeof params.error != 'undefined') {
					 params.error(data);
				}
		});
	}
	
	this.getRelatedPatientProfiles = function(params) {
		var confirmHealthPlanList = {
			headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/v2/patients/familyprofiles/' + /*params.patientID +*/ 'dependents',
            method: 'GET'
		};
		
		$http(confirmHealthPlanList).
			success(function (data, status, headers, config) {
				if (typeof params.success != 'undefined') {
					params.success(data);
				}
			}).
			error(function (data, status, headers, config) {
				if (typeof params.error != 'undefined') {
					 params.error(data);
				}
		});
	}
	
	this.postApplyHealthPlan = function(params) {
		var confirmPatientProfile = {
			headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/healthplan/' + params.healthPlanId + '/apply',
            method: 'POST',
			data: {
                insuranceCompanyName: params.insuranceCompanyName,
				policyNumber: params.policyNumber,
				consultationId: params.consultationId
            }
		};
		
		$http(confirmPatientProfile).
			success(function (data, status, headers, config) {
				if (typeof params.success != 'undefined') {
					params.success(data);
				}
			}).
			error(function (data, status, headers, config) {
				if (typeof params.error != 'undefined') {
					 params.error(data);
				}
		});
	}
	
	this.postNewHealthPlan = function(params) {
		var confirmPatientProfile = {
			headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/healthplan',
            method: 'POST',
			data: {
                healthPlanId: params.healthPlanID,
				patientId: params.patientID,
				insuranceCompany: params.insuranceCompany,
				insuranceCompanyNameId: params.insuranceCompanyNameId,
				isDefaultPlan: params.isDefaultPlan,
				insuranceCompanyPhone: params.insuranceCompanyPhone,
				memberName: params.memberName,
				subsciberId: params.subsciberId,
				policyNumber: params.policyNumber,
				subscriberFirstName: params.subscriberFirstName,
				subscriberLastName: params.subscriberLastName,
				subscriberDob: params.subscriberDob,
				isActive: params.isActive,
				payerId: params.payerId
            }
		};
		
		$http(confirmPatientProfile).
			success(function (data, status, headers, config) {
				if (typeof params.success != 'undefined') {
					params.success(data);
				}
			}).
			error(function (data, status, headers, config) {
				if (typeof params.error != 'undefined') {
					 params.error(data);
				}
		});
	}
	
	this.postCodeSets = function(params) {

		var confirmPostCodeSet = {
			headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/code/add',
            method: 'POST',
			data: codesetData
		};
		
		$http(confirmPostCodeSet).
			success(function (data, status, headers, config) {
				if (typeof params.success != 'undefined') {
					params.success(data);
				}
			}).
			error(function (data, status, headers, config) {
				if (typeof params.error != 'undefined') {
					 params.error(data);
				}
		});
	}
	
	this.getHealthPlanProvider = function(params) {

		var confirmHealthPlanProviders = {
			headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/healthplan/provider',
            method: 'GET'
		};
		
		$http(confirmHealthPlanProviders).
			success(function (data, status, headers, config) {
				if (typeof params.success != 'undefined') {
					params.success(data);
				}
			}).
			error(function (data, status, headers, config) {
				if (typeof params.error != 'undefined') {
					 params.error(data);
				}
		});
	}
	
	this.getPatientsProfile = function(params) {

		var confirmGetPatientsProfile = {
			headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/patients/profile/' + params.patientID,
            method: 'GET'
		};
		
		$http(confirmGetPatientsProfile).
			success(function (data, status, headers, config) {
				if (typeof params.success != 'undefined') {
					params.success(data);
				}
			}).
			error(function (data, status, headers, config) {
				if (typeof params.error != 'undefined') {
					 params.error(data);
				}
		});
	}
	
	this.postOnDemandConsultation = function(params) {

		var confirmOnDemandConsultationSave = {
			headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/v2/patients/consultations',
            method: 'POST',
			data: params.OnDemandConsultationData
		};
		
		$http(confirmOnDemandConsultationSave).
			success(function (data, status, headers, config) {
				if (typeof params.success != 'undefined') {
					params.success(data);
				}
			}).
			error(function (data, status, headers, config) {
				if (typeof params.error != 'undefined') {
					 params.error(data);
				}
		});
	}
	
	this.getConsultationKey = function (params) {
        //https://snap-dev.com/api/v2/patients/consultations/2440/all
        //util.setHeaders($http, params);
        var requestInfo = {
            headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),

			url: self.baseUrl + 'api/v2/physicians/appointments/' + params.consultationId + '/videokey',
            method: 'GET'   
        };

        $http(requestInfo).
                success(function (data, status, headers, config) {
                    if (typeof params.success != 'undefined') {
                        params.success(data);
                    }
                }).
                error(function (data, status, headers, config) {
                    if (typeof params.error != 'undefined') {
                        params.error(data);
                    }
                });
    }
    
    this.postConsultationsEvents = function (params) {
        var requestInfo = {
            headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/v2/consultations/events',
            method: 'POST',
            data: {
                ConsultationId: params.ConsultationId,
                event: params.event,
                eventType: params.eventType
            }  
        };

        $http(requestInfo).
                success(function (data, status, headers, config) {
                    if (typeof params.success != 'undefined') {
                        params.success(data, status);
                    }
                }).
                error(function (data, status, headers, config) {
                    if (typeof params.error != 'undefined') {
                        params.error(data, status);
                    }
                });
    },
    
    this.getBaseFolderStructure = function (fileSharingType, params){
        var requestInfo = {
            headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/v2/filesharing/folder/' + fileSharingType,
            method: 'GET',
            data: {
                consultationId: params.consultationId,
                patientId: params.patientId
            }  
        };
        
        $http(requestInfo).
                success(function (data, status, headers, config) {
                    if (typeof params.success != 'undefined') {
                        params.success(data, status);
                    }
                }).
                error(function (data, status, headers, config) {
                    if (typeof params.error != 'undefined') {
                        params.error(data, status);
                    }
                });
    },
    
    this.getFolderStructure = function (fileSharingType, params){
        var requestInfo = {
            headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/v2/filesharing/folder/' + fileSharingType + '/' + params.folderId,
            method: 'GET',
            data: {
                consultationId: params.consultationId,
                patientId: params.patientId
            }  
        };
        
        $http(requestInfo).
                success(function (data, status, headers, config) {
                    if (typeof params.success != 'undefined') {
                        params.success(data, status);
                    }
                }).
                error(function (data, status, headers, config) {
                    if (typeof params.error != 'undefined') {
                        params.error(data, status);
                    }
                });
    },
    
    this.postFolder = function(fileSharingType, params){
        var requestInfo = {
            headers: util.getHeaders(params.accessToken, self.apiKey, self.developerId),
            url: self.baseUrl + 'api/v2/filesharing/folder/' + fileSharingType,
            method: 'POST',
            data: {
                consultationId: params.consultationId,
                patientId: params.patientId,
                parent: params.folderId,
                name: params.name
            }  
        };
        
        $http(requestInfo).
                success(function (data, status, headers, config) {
                    if (typeof params.success != 'undefined') {
                        params.success(data, status);
                    }
                }).
                error(function (data, status, headers, config) {
                    if (typeof params.error != 'undefined') {
                        params.error(data, status);
                    }
                });
    }
	
	
	
});
	
