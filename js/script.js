// Copyright (c) 2023 Skelton All rights reserved
//
// Created by: Remy Skelton
// Created on: Mar 2023
// This file contains the JS functions for index.html
"use strict"

function enterClicked () {
  // creat a variable for the temperature ir statment
  let result = "";

  // Number User Guessed
  let userTemp = parseInt(document.getElementById("user-temp").value);
  
  // Display if the Tempeture is Hot 
  if (userTemp >= 5) {
    result = "The Tempeture you have Entred is Warm."
  }
  //Display if the temp is cold
  if ( userTemp < 5){
    result = "The Tempeture you have Entred is Cold."
  }
  // Display Results back to User
  document.getElementById('result').innerHTML = result
}