function takeANumber(currentLine, newClient) {
  let message = `Welcome, ${newClient}. You are number ${currentLine.length + 1} in line.`;
  currentLine.push(newClient);
  return message;
}

function nowServing(katzDeliLine) {
<<<<<<< HEAD
  if(katzDeliLine.length == 0) {
    return 'There is nobody waiting to be served!';
  }

  let firstInLine = katzDeliLine[0];
  katzDeliLine.splice(0, 1);
  return `Currently serving ${firstInLine}.`;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return 'The line is currently empty.';
  }
  let message = '';
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (message.length > 0) {
      message += ', ';
    }
    message += `${i + 1}. ${katzDeliLine[i]}`
  }
  return `The line is currently: ${message}`;
=======
  if(katzDeliLine.length = 0) {
    return 'There is nobody waiting to be served!';
  } else {
    katzDeliLine.splice(0, 0);
  }
  return katzDeliLine;
>>>>>>> 16da5c16039036325dd43e2e62896c5c31e2c3fa
}
