// Copyright (c) 2023 Skelton All rights reserved
//
// Created by: Remy Skelton
// Created on: Mar 2023
// This file contains the JS functions for index.html
"use strict"

function enterClicked () {
  
  let result = "";

  // Number User Guessed
  let userTemp = parseInt(document.getElementById("user-temp").value);
  
  // Display if the Tempeture is Hot or Cold
  if (userTemp >= 5) {
    result = "The Tempeture you have Entred is Warm."
  }
  if ( userTemp < 5){
    result = "The Tempeture you have Entred is Cold."
  }
  // Display Results back to User
  document.getElementById('result').innerHTML = result
}