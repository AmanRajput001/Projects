function calculateManhattanDistance() {
    // Get user input values
    var x1 = parseFloat(document.getElementById("x1_manhattan").value);
    var y1 = parseFloat(document.getElementById("y1_manhattan").value);
    var x2 = parseFloat(document.getElementById("x2_manhattan").value);
    var y2 = parseFloat(document.getElementById("y2_manhattan").value);

    // Calculate Manhattan distance
    var distance = Math.abs(x2 - x1) + Math.abs(y2 - y1);

    // Display the result in the result div
    var resultDiv = document.getElementById("result2");
    var distanceSpan = document.getElementById("mdistance");
    distanceSpan.innerText = distance.toFixed(2);
    resultDiv.style.display = "block";
}
