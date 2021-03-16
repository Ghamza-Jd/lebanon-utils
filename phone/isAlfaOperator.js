function isAlfaOperator(number) {
  const pattern = /(00961|\+961|961)?0?(31|32|33|34|35|701|702|703|704|705|710|716|717|718|719|761|762|763|764|765|791|792|793|812|813|814)/;
  return pattern.test(number);
}

module.exports = isAlfaOperator;
