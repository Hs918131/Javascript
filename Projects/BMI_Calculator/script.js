const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    const uw = document.querySelector('#uw').innerHTML;
    const nr = document.querySelector('#nr').innerHTML;
    const ow = document.querySelector('#ow').innerHTML;

    const remark = function (remark) {
      if (bmi < 18.6) {
        return (remark = 'UnderWeight');
      } else if (bmi >= 18.6 && bmi <= 24.9) {
        return (remark = 'Normal');
      } else {
        return (remark = 'Overweight');
      }
    };
    results.innerHTML = `<span>${bmi} -: ${remark()}</span>`;
  }
});
