$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Feature Files/SearchVehicle.feature");
formatter.feature({
  "line": 1,
  "name": "To check vechile insurance cover",
  "description": "",
  "id": "to-check-vechile-insurance-cover",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "To verify vehicle has insurance cover",
  "description": "",
  "id": "to-check-vechile-insurance-cover;to-verify-vehicle-has-insurance-cover",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am At home screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter vehicle registration",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on find vehicle button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I can see the results",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchVehicle.i_am_At_home_screen()"
});
formatter.result({
  "duration": 5860607648,
  "status": "passed"
});
formatter.match({
  "location": "SearchVehicle.i_enter_vehicle_registration()"
});
formatter.result({
  "duration": 102795308,
  "status": "passed"
});
formatter.match({
  "location": "SearchVehicle.click_on_find_vehicle_button()"
});
formatter.result({
  "duration": 86846285,
  "status": "passed"
});
formatter.match({
  "location": "SearchVehicle.i_can_see_the_results()"
});
formatter.result({
  "duration": 3175730374,
  "status": "passed"
});
formatter.match({
  "location": "SearchVehicle.close_the_browser()"
});
formatter.result({
  "duration": 801663094,
  "status": "passed"
});
});