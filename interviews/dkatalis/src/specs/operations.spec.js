const operations = require('../operations');
const AVAILABLE = 'Available';

describe('Operations invalid / not present', () => {
  test('Operation command is not present', () => {
    expect(operations.checkOperations('')).toEqual('No command provided');
  });
  
  test('Operation command is invalid', () => {
    expect(operations.checkOperations('dont_park KA-12-EF-9898')).toEqual('Could not find any command for following instruction : dont_park');
  });
});

describe('Create parking slots : ', () => {
  test('Parking is not created', () => {
    operations.parking.slots = [];
    expect(operations.createParkingLot([6])).toEqual('Created parking lot with 6 slots');
  });

  test('Parking is already created', () => {
    expect(operations.createParkingLot([6])).toEqual('Parking with 6 slots already created. Cannot create parking again');
  });
});

describe('Create parking ticket : ', () => {
  test('Slot is available', () => {
    operations.parking.slots = [AVAILABLE];
    expect(operations.parkCar(['KA-01-KK-9999'])).toEqual('Allocated slot number: 1');
  });

  test('Slot is unavailable', () => {
    expect(operations.parkCar(['KA-01-JH-3333'])).toEqual('Sorry, parking lot is full');
  });

  test('Invalid license plate number', () => {
    expect(operations.parkCar(['KA-01-3333'])).toEqual('KA-01-3333 is not a valid car license plate number');
  });
});

describe('Leave parking : ', () => {
  test('Car with license plate number is not present', () => {
    operations.parking.slots = ['KA-01-KK-9999'];
    expect(operations.leaveParking(['KA-01-KK-9998', 4])).toEqual('Registration number KA-01-KK-9998 not found');
  });

  test('Car with license plate number is present', () => {
    expect(operations.leaveParking(['KA-01-KK-9999', 4])).toEqual('Registration number KA-01-KK-9999 with Slot Number 1 is free with Charge 30');
  });

  test('When invalid license is provided', () => {
    expect(operations.leaveParking(['KA-01-9999', 4])).toEqual('KA-01-9999 is not a valid car license plate number');
  });

  test('When invalid duration is provided', () => {
    expect(operations.leaveParking(['KA-01-AB-9999', -4])).toEqual('Duration cannot be negative: -4');
  });
});

describe('Get parking status', () => {
  test('Slots filled', () => {
    operations.parking.slots = ['KA-01-KK-9999', AVAILABLE, 'KA-01-KK-2222'];
    const expected = `Slot No.    Registration No.
1           KA-01-KK-9999
3           KA-01-KK-2222`;
    expect(operations.getParkingStatus(operations.parking.slots)).toEqual(expected);
  });
});
