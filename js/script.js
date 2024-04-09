// Created by: Logan Connors
// Created on: Sep 2020
// This file contains the JS functions for index.html

// Function to calculate the volume of a right triangular pyramid
function calculateVolume() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const height = parseFloat(document.getElementById('height').value);

    const volume = (1/2) * sideA * height * sideB;

    document.getElementById('result').innerHTML = `The volume of the right triangular pyramid is: ${volume.toFixed(3)}`;
}