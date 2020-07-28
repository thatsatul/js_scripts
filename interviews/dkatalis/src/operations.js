const utils = require('./utils');

const AVAILABLE = 'Available';
const parking = {
  slots: [],
};

const checkOperations = (statment) => {
  const statmentArr = statment.trim().split(' ');
  const command = statmentArr.shift();
  const args = statmentArr;
  if(command === 'create_parking_lot') {
    return createParkingLot(args);
  } else if(command === 'park') {
    return parkCar(args);
  } else if(command === 'leave') {
    return leaveParking(args);
  } else if(command === 'status') {
    return getParkingStatus(parking.slots);
  } else if(!command) {
    // console.log('Could not find any command');
    return 'No command provided';
  } else {
    return 'Could not find any command for following instruction : ' + command;
  }
}

const createParkingLot = (args) => {
  const parkingSlots = args[0];
  if(parking.slots.length > 0) {
    return `Parking with ${parking.slots.length} slots already created. Cannot create parking again`;
  }
  for(let i = 0; i < parkingSlots; i++) {
    parking.slots[i] = AVAILABLE;
  }
  return `Created parking lot with ${parkingSlots} slots`;
}

const parkCar = (args) => {
  const carPlate = args[0];
  const parkCarValidations = utils.parkingValidation(carPlate);
  if(parkCarValidations !== true) {
    return parkCarValidations;
  }
  const carParkingSlot = utils.getParkingSlot(parking.slots, AVAILABLE);
  if(carParkingSlot > -1) {
    parking.slots[carParkingSlot] = carPlate;
    return `Allocated slot number: ${carParkingSlot + 1}`;
  } else {
    return 'Sorry, parking lot is full';
  }
}

const leaveParking = (args) => {
  const carPlate = args[0];
  const numHours = args[1];
  const leaveParkingValidations = utils.leaveParkingValidation(carPlate, numHours);
  if(leaveParkingValidations !== true) {
    return leaveParkingValidations;
  }
  const slotnum = utils.getParkingSlot(parking.slots, carPlate);
  if(slotnum > -1) {
    parking.slots[slotnum] = AVAILABLE;
    const charge = numHours <= 2 ? 10 : 10 + (numHours - 2) * 10;
    return `Registration number ${carPlate} with Slot Number ${slotnum + 1} is free with Charge ${charge}`;
  } else {
    return `Registration number ${carPlate} not found`;
  }
}

const getParkingStatus = (slots) => {
  let status = 'Slot No.    Registration No.\n';
  status += slots.map((val, i) => `${i+1}           ${val}`).filter(val => !new RegExp(AVAILABLE).test(val)).join('\n');
  return status;
}

module.exports = {
  checkOperations,
  createParkingLot,
  parkCar,
  leaveParking,
  getParkingStatus,
  parking
};
