const DateTime = luxon.DateTime;

document.getElementById('age-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const birthdateInput = document.getElementById('birthdate').value.trim();
  const resultDiv = document.getElementById('result');

  // Validación básica
  const birthdate = DateTime.fromFormat(birthdateInput, 'dd/MM/yyyy');
  if (!birthdate.isValid) {
    resultDiv.textContent = 'Please enter a valid date in DD/MM/YYYY format.';
    return;
  }

  const now = DateTime.now();
  const diff = now.diff(birthdate, ['years', 'months', 'days']).toObject();

  const years = Math.floor(diff.years);
  const months = Math.floor(diff.months);

  resultDiv.innerHTML = `You are <strong>${years} years ${months} months</strong> old`;
});
