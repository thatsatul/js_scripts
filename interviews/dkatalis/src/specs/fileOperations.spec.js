const fileOperations = require('../fileOperations');
const operations = require('../operations');

describe('Reading input files and performing operations', () => {
  test('Reading a valid input file and performing operations', () => {
    operations.parking.slots = [];
    const expectedOutput = `Created parking lot with 6 slots
Allocated slot number: 1
Allocated slot number: 2
Allocated slot number: 3
Allocated slot number: 4
Allocated slot number: 5
Allocated slot number: 6
Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30
Slot No.    Registration No.
1           KA-01-HH-1234
2           KA-01-HH-9999
3           KA-01-BB-0001
4           KA-01-HH-7777
5           KA-01-HH-2701
Allocated slot number: 6
Sorry, parking lot is full
Registration number KA-01-HH-1234 with Slot Number 1 is free with Charge 30
Registration number KA-01-BB-0001 with Slot Number 3 is free with Charge 50
Registration number DL-12-AA-9999 not found
Allocated slot number: 1
Allocated slot number: 3
Sorry, parking lot is full
Slot No.    Registration No.
1           KA-09-HH-0987
2           KA-01-HH-9999
3           CA-09-IO-1111
4           KA-01-HH-7777
5           KA-01-HH-2701
6           KA-01-P-333`;
    expect(fileOperations.readFileData('./input_files/file_inputs_1.txt')).toEqual(expectedOutput);
  });

  test('Reading an invalid input file with all kind of errors and performing operations', () => {
    operations.parking.slots = [];
    const expectedOutput = `Created parking lot with 6 slots
Parking with 6 slots already created. Cannot create parking again
Allocated slot number: 1
No command provided
Car license plate is not present
01-BB-3333 is not a valid car license plate number
KA-HH-7777 is not a valid car license plate number
KA-01-2701 is not a valid car license plate number
KA-01-HH- is not a valid car license plate number
Duration cannot be negative: -4
Slot No.    Registration No.
1           KA-01-HH-1234
Allocated slot number: 2
Allocated slot number: 3
KA-01-HH is not a valid car license plate number
KA-000 is not a valid car license plate number
12-AA-9999 is not a valid car license plate number
Could not find any command for following instruction : dont-park
Allocated slot number: 4
Allocated slot number: 5
Slot No.    Registration No.
1           KA-01-HH-1234
2           KA-01-P-333
3           DL-12-AA-9999
4           CA-09-IO-1111
5           KA-09-HH-0123`;
    expect(fileOperations.readFileData('./input_files/file_inputs_with_error.txt')).toEqual(expectedOutput);
  });
});
