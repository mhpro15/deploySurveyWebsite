// Base URL for your server
export const API_BASE_URL = 'http://localhost:5000/testdeploy-af78e/us-central1/app';
// Define the API endpoints as constants
export const API_ENDPOINTS = {
  HOME_PAGE: '/',
  CREATE_SURVEY_PAGE: '/create-survey',
  CREATE_SURVEY: '/create-survey',
  MY_SURVEYS_PAGE: '/survey/mysurveys',
  EDIT_SURVEY_PAGE: '/survey/edit/:id',
  EDIT_SURVEY: '/survey/edit/:id',
  DELETE_SURVEY: '/survey/:id',
  TAKE_SURVEY: '/survey/:id',
  SUBMIT_SURVEY_RESPONSES: '/survey/:id',
  SURVEY_REPORT: '/survey/report/',
  USER_LOGIN: '/login',
  USER_REGISTRATION: '/register',
  USER_LOGOUT: '/logout',
};
