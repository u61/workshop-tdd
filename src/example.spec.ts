// See: https://jestjs.io/docs/en/api for the api of Jest

function calculateGrossPerItem(unitPricePerItem, quantity) {
  return unitPricePerItem * quantity;
}

function calculateTotalGross(totalGrossValues) {
  return totalGrossValues.reduce((a, b) => a + b);
}

function calculateNetValue(grossValue) {
  if (grossValue > 200) {
    return (grossValue * 90) / 100;
  } else if (grossValue > 100) {
    return (grossValue * 95) / 100;
  } else {
    return grossValue;
  }
}

describe('shopping cart', () => {
  it('total gross value of one element will be calculated as per total quantity and unit price.', () => {
    const unitPricePerItem = 10.0;
    const quantity = 5;

    const totalGrossPerItem = calculateGrossPerItem(unitPricePerItem, quantity);

    expect(totalGrossPerItem).toEqual(50);
  });

  it('total gross value of shopping cart will be calculated as sum of values of all items', () => {
    const totalGrossValues = [50, 51, 104];

    const totalGrossPerItem = calculateTotalGross(totalGrossValues);

    expect(totalGrossPerItem).toEqual(205);
  });

  it('if total gross value higher than €100, find net value as %5 less', () => {
    const grossValue = 100;

    const netValue = calculateNetValue(grossValue);

    expect(netValue).toEqual(95);
  });
});
