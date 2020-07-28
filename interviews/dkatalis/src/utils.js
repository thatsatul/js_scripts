const licensePlateRegex = '^[A-Z]{1,3}-[0-9]{1,2}-[A-Z]{1,2}-[0-9]{1,4}$';

const getParkingSlot = (slots, val) => {
  const pos = slots.indexOf(val);
  return pos;
}

const parkingValidation = (plateNum) => {
  if(!plateNum) {
    return 'Car license plate is not present';
  }
  const matches = plateNum.match(new RegExp(licensePlateRegex));
  if(matches && matches.length > 0) {
    return true;
  }
  return plateNum + ' is not a valid car license plate number';
}

const leaveParkingValidation = (plateNum, hours) => {
  if(!plateNum) {
    return 'Car license plate is not present';
  }
  if(!hours) {
    return 'Duration is not present';
  }
  if(hours < 0) {
    return 'Duration cannot be negative: ' + hours;
  }
  const matches = plateNum.match(new RegExp(licensePlateRegex));
  if(matches && matches.length > 0) {
    return true;
  }
  return plateNum + ' is not a valid car license plate number';
}

module.exports = {
  getParkingSlot,
  parkingValidation,
  leaveParkingValidation
};
