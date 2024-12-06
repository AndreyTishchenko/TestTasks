function createModal({ id, category, name, description, superpowers }, imgURL, h4_color) {
  // Create modal container
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = `modal-${id}`;

  // Create modal content container
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  // Close button
  const closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  closeButton.innerHTML = `<svg class="btn-modal-close" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M30 10L10 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M10 10L30 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>`
  closeButton.onclick = () => closeModal(id);

  // Modal image
  const modalImage = document.createElement('img');
  modalImage.className = 'modal-image';
  modalImage.src = imgURL;

  // Modal info container
  const  modalInfoContainer = document.createElement('div');
  modalInfoContainer.className = 'modal-info-container';
  
  
  const modalInfo = document.createElement('div');
  modalInfo.className = 'modal-info';

  const modalCategory = document.createElement('h4');
  modalCategory.className = 'modal-category';
  modalCategory.textContent = category;
  modalCategory.style.color = h4_color;
  console.log(h4_color);

  const modalName = document.createElement('h3');
  modalName.textContent = name;

  const modalDescription = document.createElement('p');
  modalDescription.textContent = description;

  modalInfo.appendChild(modalCategory);
  modalInfo.appendChild(modalName);
  modalInfo.appendChild(modalDescription);
  
  modalInfoContainer.appendChild(modalInfo);

  // Superpowers section
  const superpowersContainer = document.createElement('div');
  superpowersContainer.className = 'superpowers';

  const superpowersTitle = document.createElement('h4');
  superpowersTitle.textContent = 'Adds superpowers to:';

  const superpowersList = document.createElement('ul');
  superpowersList.className = 'superpowers-list';

  Object.entries(superpowers).forEach(([key, value]) => {
      const listItem = document.createElement('li');

      const superpowerName = document.createElement('p');
      superpowerName.className = 'superpower-name';
      superpowerName.textContent = key.replace(/^./, char => char.toUpperCase());

      const valueContainer = document.createElement('div');
      valueContainer.className = 'superpower-value-container';

      const superpowerValue = document.createElement('p');
      superpowerValue.className = 'superpower-value';
      superpowerValue.textContent = value;

      const snowflakesContainer = document.createElement('div');
      snowflakesContainer.className = 'snowflakes';
      snowflakesContainer.innerHTML = generateSnowflakes(value); // Function to generate snowflakes HTML

      valueContainer.appendChild(superpowerValue);
      valueContainer.appendChild(snowflakesContainer);

      listItem.appendChild(superpowerName);
      listItem.appendChild(valueContainer);

      superpowersList.appendChild(listItem);
  });

  superpowersContainer.appendChild(superpowersTitle);
  superpowersContainer.appendChild(superpowersList);
  
  modalInfoContainer.appendChild(superpowersContainer)

  // Append all elements to modal content
  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalImage);
  modalContent.appendChild(modalInfoContainer);

  // Overlay
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.onclick = () => closeModal(id);

  // Append modal content and overlay to modal
  modal.appendChild(modalContent);
  modal.appendChild(overlay);

  // Add modal to the body
  document.body.appendChild(modal);

  // Disable body scroll
  document.body.style.overflow = 'hidden';
}


// Generate snowflakes based on the value
function generateSnowflakes(value) {
  const maxSnowflakes = 5; // Total number of snowflakes
  const filledCount = Math.floor(value / 100); // Fully colored snowflakes
  const snowflakesHTML = Array.from({ length: maxSnowflakes }, (_, index) => {
    if (index < filledCount) {
      return `
      <svg class="snowflake filled" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.1959 9.88162L10.6482 9.56542L12.1158 9.17219L11.8732 8.26704L9.50055 8.90278L8.38146 8.25667C8.39689 8.17336 8.40538 8.08765 8.40538 7.99997C8.40538 7.91229 8.39692 7.82655 8.38146 7.74327L9.50055 7.09716L11.8732 7.7329L12.1158 6.82775L10.6482 6.43452L11.1959 6.11831L13.546 5.97725L13.8921 4.02063L12.0246 3.34203L10.7274 5.30677L10.1797 5.62297L10.5729 4.15545L9.66778 3.91293L9.03204 6.28561L7.91226 6.93211C7.78247 6.82103 7.63242 6.73313 7.4683 6.67494V5.3828L9.20521 3.64586L8.5426 2.98325L7.46827 4.05755V3.42515L8.51792 1.32584L6.99976 0L5.48157 1.3259L6.53122 3.42521V4.05761L5.45689 2.98332L4.79429 3.64592L6.53119 5.38286V6.675C6.36708 6.73319 6.21702 6.82109 6.08724 6.93217L4.96746 6.28568L4.33171 3.91299L3.42656 4.15551L3.81979 5.62304L3.27213 5.30684L1.9749 3.34209L0.107422 4.02069L0.453485 5.97731L2.80362 6.11838L3.35128 6.43458L1.88375 6.82781L2.1263 7.73296L4.49898 7.09722L5.61807 7.74333C5.60264 7.82664 5.59414 7.91235 5.59414 8.00003C5.59414 8.08771 5.60261 8.17345 5.61807 8.25673L4.49898 8.90285L2.1263 8.2671L1.88375 9.17226L3.35128 9.56548L2.80362 9.88169L0.453485 10.0227L0.107422 11.9793L1.97493 12.6579L3.27216 10.6932L3.81985 10.377L3.42662 11.8445L4.33177 12.087L4.96752 9.71435L6.0873 9.06786C6.21708 9.17894 6.36714 9.26684 6.53125 9.32503V10.6172L4.79435 12.3541L5.45696 13.0167L6.53129 11.9424V12.5748L5.48163 14.6741L6.99983 16L8.51802 14.6741L7.46837 12.5748V11.9424L8.5427 13.0167L9.2053 12.3541L7.4684 10.6172V9.32503C7.63251 9.26684 7.78257 9.17894 7.91235 9.06786L9.03213 9.71435L9.66788 12.087L10.573 11.8445L10.1798 10.377L10.7275 10.6932L12.0247 12.6579L13.8922 11.9793L13.5462 10.0227L11.1959 9.88162Z" fill="#FF4646"/>
      </svg>`;
    } else {
      return `<svg class="snowflake semi-transparent" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1959 9.88162L10.6482 9.56542L12.1158 9.17219L11.8732 8.26704L9.50055 8.90278L8.38146 8.25667C8.39689 8.17336 8.40538 8.08765 8.40538 7.99997C8.40538 7.91229 8.39692 7.82655 8.38146 7.74327L9.50055 7.09716L11.8732 7.7329L12.1158 6.82775L10.6482 6.43452L11.1959 6.11831L13.546 5.97725L13.8921 4.02063L12.0246 3.34203L10.7274 5.30677L10.1797 5.62297L10.5729 4.15545L9.66778 3.91293L9.03204 6.28561L7.91226 6.93211C7.78247 6.82103 7.63242 6.73313 7.4683 6.67494V5.3828L9.20521 3.64586L8.5426 2.98325L7.46827 4.05755V3.42515L8.51792 1.32584L6.99976 0L5.48157 1.3259L6.53122 3.42521V4.05761L5.45689 2.98332L4.79429 3.64592L6.53119 5.38286V6.675C6.36708 6.73319 6.21702 6.82109 6.08724 6.93217L4.96746 6.28568L4.33171 3.91299L3.42656 4.15551L3.81979 5.62304L3.27213 5.30684L1.9749 3.34209L0.107422 4.02069L0.453485 5.97731L2.80362 6.11838L3.35128 6.43458L1.88375 6.82781L2.1263 7.73296L4.49898 7.09722L5.61807 7.74333C5.60264 7.82664 5.59414 7.91235 5.59414 8.00003C5.59414 8.08771 5.60261 8.17345 5.61807 8.25673L4.49898 8.90285L2.1263 8.2671L1.88375 9.17226L3.35128 9.56548L2.80362 9.88169L0.453485 10.0227L0.107422 11.9793L1.97493 12.6579L3.27216 10.6932L3.81985 10.377L3.42662 11.8445L4.33177 12.087L4.96752 9.71435L6.0873 9.06786C6.21708 9.17894 6.36714 9.26684 6.53125 9.32503V10.6172L4.79435 12.3541L5.45696 13.0167L6.53129 11.9424V12.5748L5.48163 14.6741L6.99983 16L8.51802 14.6741L7.46837 12.5748V11.9424L8.5427 13.0167L9.2053 12.3541L7.4684 10.6172V9.32503C7.63251 9.26684 7.78257 9.17894 7.91235 9.06786L9.03213 9.71435L9.66788 12.087L10.573 11.8445L10.1798 10.377L10.7275 10.6932L12.0247 12.6579L13.8922 11.9793L13.5462 10.0227L11.1959 9.88162Z" fill="#FF4646"/>
              </svg>`;
    }
  }).join('');
  return snowflakesHTML;
}

function closeModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  if (modal) {
    modal.remove();
    document.body.style.overflow = 'auto'
  }
}

export {createModal, closeModal}