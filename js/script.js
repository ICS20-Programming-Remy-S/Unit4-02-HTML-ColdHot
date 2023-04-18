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
  if (userGuess == generator) {
    result = "Congratulations you have correctly gussed my number."
  }
  if ( userGuess != generator){
    result = "Sorry that is incorrect try again."
  }
  // Display Results back to User
  document.getElementById('result').innerHTML = result
}