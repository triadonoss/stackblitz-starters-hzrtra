function selectOption(option) {
  alert(option + ' selected');
  document.querySelector('.options').classList.add('hidden');
  document.getElementById('locations-pallet').classList.remove('hidden');
  updateFlowStep('flow-locations-pallet');
}

function lookupLocation() {
  const locationNumber = document.getElementById('location-number').value;
  const palletNumber = document.getElementById('pallet-number').value;
  if (!locationNumber || !palletNumber) {
      alert('Please enter both location and pallet number');
      return;
  }
  document.getElementById('locations-pallet').classList.add('hidden');
  document.getElementById('loader').classList.remove('hidden');
  setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
      document.getElementById('locations-drop').classList.remove('hidden');
      updateFlowStep('flow-locations-drop');
  }, 2000);
}

function lookupDropLocation() {
  const dropLocationNumber = document.getElementById('drop-location-number').value;
  const dropPalletNumber = document.getElementById('drop-pallet-number').value;
  if (!dropLocationNumber || !dropPalletNumber) {
      alert('Please enter both drop location and pallet number');
      return;
  }
  document.getElementById('locations-drop').classList.add('hidden');
  document.getElementById('loader').classList.remove('hidden');
  setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
      document.getElementById('drop-button-container').classList.remove('hidden');
  }, 2000);
}

function dropPallet() {
  alert('Pallet Dropped');
  document.getElementById('drop-button-container').classList.add('hidden');
  document.getElementById('drop-success').classList.remove('hidden');
  setTimeout(() => {
      document.getElementById('drop-success').classList.add('hidden');
      document.getElementById('require-rework').classList.remove('hidden');
      document.querySelector('.rework-options').classList.remove('hidden');
      updateFlowStep('flow-require-rework');
  }, 1000);
}

function rework(option) {
  alert('Rework: ' + option);
  document.getElementById('require-rework').classList.add('hidden');
  document.querySelector('.rework-options').classList.add('hidden');
  if (option === 'YES') {
      alert('Returning to Find Locations & Pallet #');
      document.getElementById('locations-pallet').classList.remove('hidden');
      updateFlowStep('flow-locations-pallet');
  } else {
      document.getElementById('flow-completed').classList.remove('hidden');
      updateFlowStep('flow-completed');
      alert('Flow Completed');
      setTimeout(() => {
          resetFlow();
      }, 2000);
  }
}

function updateFlowStep(stepId) {
  const steps = document.querySelectorAll('.flow-step');
  steps.forEach(step => {
      step.classList.remove('active');
  });
  document.getElementById(stepId).classList.add('active');
}

function resetFlow() {
  alert('Returning to Starting Point');
  document.querySelector('.options').classList.remove('hidden');
  document.getElementById('locations-pallet').classList.add('hidden');
  document.getElementById('locations-drop').classList.add('hidden');
  document.getElementById('drop-button-container').classList.add('hidden');
  document.getElementById('drop-success').classList.add('hidden');
  document.getElementById('require-rework').classList.add('hidden');
  document.getElementById('flow-completed').classList.add('hidden');
  document.querySelector('.rework-options').classList.add('hidden');
  updateFlowStep('flow-starting-point');
}
