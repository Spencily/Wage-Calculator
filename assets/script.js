document.getElementById('wageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let startTime = parseFloat(document.getElementById('startTime').value);
    let endTime = parseFloat(document.getElementById('endTime').value);
    let hourlyRate = parseFloat(document.getElementById('hourlyRate').value);

    function convertToHours(decimalTime) {
        let hours = Math.floor(decimalTime);
        let minutes = (decimalTime - hours) * 100;
        return hours + minutes / 60;
    }

    function hoursWorked() {
        let start = convertToHours(startTime);
        let end = convertToHours(endTime);
        let hours = end - start;
        return hours.toFixed(1);
    }

    function wages(hours) {
        let totalPay = hours * hourlyRate;
        return totalPay.toFixed(2);
    }

    let hours = hoursWorked();
    let totalPay = wages(hours);

    alert(`You worked for ${hours} hour/s. You earned £${totalPay}`);
});