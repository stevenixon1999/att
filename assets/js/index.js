document.addEventListener('DOMContentLoaded', function () {
  const pickDateInput = document.getElementById('pick-date');
  const dropDateInput = document.getElementById('drop-date');

  const today = new Date().toISOString().split('T')[0];
  pickDateInput.setAttribute('min', today);
  dropDateInput.setAttribute('min', today);

  pickDateInput.addEventListener('change', function () {
    const pickDate = pickDateInput.value;
    dropDateInput.setAttribute('min', pickDate);
  });

});
