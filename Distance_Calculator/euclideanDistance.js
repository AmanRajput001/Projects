function calculateEuclideanDistance() {
    // Get user input values
    var x1 = parseFloat(document.getElementById("x1").value);
    var y1 = parseFloat(document.getElementById("y1").value);
    var x2 = parseFloat(document.getElementById("x2").value);
    var y2 = parseFloat(document.getElementById("y2").value);

    // Calculate Euclidean distance
    var distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    // Display the result in the result div
    var resultDiv = document.getElementById("result1");
    var distanceSpan = document.getElementById("edistance");
    distanceSpan.innerText = distance.toFixed(2);
    resultDiv.style.display = "block";
}
