const utils = require('../utils');
const AVAILABLE = 'Available';

describe('Check parking slot availablity / occupancy', () => {
  test('Slot contains car with license plate', () => {
    const slots = ['A', 'B', 'C', AVAILABLE];
    expect(utils.getParkingSlot(slots, 'B')).toEqual(1);
  });
  
  test('Slot is available', () => {
    const slots = ['A', AVAILABLE, 'C', AVAILABLE];
    expect(utils.getParkingSlot(slots, AVAILABLE)).toEqual(1);
  });

  test('Slots does not have car with license plate', () => {
    const slots = ['A', 'B', 'C', 'D'];
    expect(utils.getParkingSlot(slots, 'E')).toEqual(-1);
  });
});

describe('Validation for car parking', () => {
  test('When license plate number is not passed', () => {
    expect(utils.parkingValidation(null)).toEqual('Car license plate is not present');
  });
  
  test('When license plate number is not valid', () => {
    expect(utils.parkingValidation('KA-01-AB')).toEqual('KA-01-AB is not a valid car license plate number');
  });

  test('When license plate number is valid', () => {
    expect(utils.parkingValidation('KA-01-AB-3333')).toEqual(true);
  });
});

describe('Validation for leaving car parking', () => {
  test('When duration is negative', () => {
    expect(utils.leaveParkingValidation('DL-01-AB-9999', -4)).toEqual('Duration cannot be negative: -4');
  });

  test('When duration is not provided', () => {
    expect(utils.leaveParkingValidation('DL-01-AB-9999', null)).toEqual('Duration is not present');
  });

  test('When license plate is not provided', () => {
    expect(utils.leaveParkingValidation(null, 4)).toEqual('Car license plate is not present');
  });
  
  test('When license plate number is not valid', () => {
    expect(utils.leaveParkingValidation('KA-01-AB', 4)).toEqual('KA-01-AB is not a valid car license plate number');
  });

  test('When license plate number and duration is valid', () => {
    expect(utils.leaveParkingValidation('KA-01-AB-3333', 4)).toEqual(true);
  });
});
