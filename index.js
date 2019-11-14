const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  /*app.get('/calculate', handleCalculation);

  // MODEL
  function handleCalculation(req, res) {
    const weight = Number(request.query.weight);
    const packageType = request.query.packageType;

    calculateRate(weight, packageType);
  }

  function calculateRate (weight, packageType) {
    
    let result = 0;

    if (packageType = "Letters (Stamped)") {
      result = .40 + (weight * .15);
    }
    else if (packageType = "Letters (Metered)") {
      result = .35 + (weight * .15);
    }
    else if (packageType = "Large Envelopes (Flats)") {
      result = .85 + (weight * .15);
    }
    else if (packageType = "First-Class Package Service—Retai") {
      if (weight <= 4) { result = 3.66; }
      else if (weight <= 8) { result = 4.39; }
      else if (weigth <= 12) { result = 5.19; }
      else {result = 5.71}
    }
    else {
      result = 'Error';
    }

    const params = {result : result};

    res.render('result', params);

  }
*/