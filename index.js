function toggleCustomValueInput() {
  var dataTypeSelect = document.getElementById('dataTypeSelect');
  var customValueContainer = document.getElementById('customValueContainer');

  // Show/hide custom value input based on the selected option
  customValueContainer.style.display = (dataTypeSelect.value === 'other') ? 'block' : 'none';
}

function calculateCost() {
  var area = parseFloat(document.getElementById('areaInput').value);
  var dataType = document.getElementById('dataTypeSelect').value;
  var customValue = parseFloat(document.getElementById('customValueInput').value) || 0; // Use entered custom value or default to 0
  var cost = 0;

  switch (dataType) {
      case 'standardImagery':
          if (area < 50) {
              cost = area * 2400;
          } else if (area >= 50 && area <= 99) {
              cost = area * 2000;
          } else if (area >= 100 && area <= 199) {
              cost = area * 1600;
          } else if (area >= 200) {
              cost = area * 1200;
          }
          break;

      // Add cases for other data types if needed

      case 'multispectralData':
        if (area < 50) {
            cost = area * 2800;
        } else if (area >= 50 && area <= 99) {
            cost = area * 2400;
        } else if (area >= 100 && area <= 199) {
            cost = area * 2000;
        } else if (area >= 200) {
            cost = area * 1600;
        }
        break;

        case 'thermalData':
          if (area < 50) {
              cost = area * 3200;
          } else if (area >= 50 && area <= 99) {
              cost = area * 2800;
          } else if (area >= 100 && area <= 199) {
              cost = area * 2400;
          } else if (area >= 200) {
              cost = area * 2000;
          }
          break;

          case 'lidarData':
          if (area < 50) {
              cost = area * 4000;
          } else if (area >= 50 && area <= 99) {
              cost = area * 3600;
          } else if (area >= 100 && area <= 199) {
              cost = area * 3200;
          } else if (area >= 200) {
              cost = area * 2800;
          }
          break;

          case 'other':
            cost = area * customValue; // Multiply area by custom value
            break;

      default:
          break;
  }

  // Display the output
  var numberOfDays = Math.ceil(area / 35);

  // Display the output with commas and the number of days
  var outputElement = document.getElementById('output');
  outputElement.innerHTML = 'Rought Estimate: $' + cost.toLocaleString('en-US', { maximumFractionDigits: 2 }) +
                            '<br>Number of Days To Map: ' + numberOfDays;

}
