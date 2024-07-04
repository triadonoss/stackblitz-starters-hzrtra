function selectOption(option) {
  alert(option + ' selected');
  document.querySelector('.options').classList.add('hidden');
  document.getElementById('locations-pallet').classList.remove('hidden');
  setTimeout(() => {
      document.getElementById('locations-pallet').classList.add('hidden');
      document.getElementById('locations-drop').classList.remove('hidden');
      setTimeout(() => {
          document.getElementById('locations-drop').classList.add('hidden');
          document.getElementById('require-rework').classList.remove('hidden');
          document.querySelector('.rework-options').classList.remove('hidden');
      }, 2000);
  }, 2000);
}

function rework(option) {
  alert('Rework: ' + option);
  document.getElementById('require-rework').classList.add('hidden');
  document.querySelector('.rework-options').classList.add('hidden');
  if (option === 'YES') {
      alert('Returning to Starting Point');
      document.getElementById('starting-point').scrollIntoView();
      document.querySelector('.options').classList.remove('hidden');
  } else {
      document.getElementById('flow-completed').classList.remove('hidden');
      alert('Flow Completed');
  }
}
