const timelineItems = document.querySelectorAll('.timeline-item');
const eventTitle = document.getElementById('event-title');
const eventDescription = document.getElementById('event-description');
const eventImage = document.getElementById('event-image');

timelineItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all items
    timelineItems.forEach(i => i.classList.remove('active'));
    // Add active class to clicked item
    item.classList.add('active');

    // Update the details section
    const date = item.getAttribute('data-date');
    const description = item.getAttribute('data-description');
    const image = item.getAttribute('data-image');

    eventTitle.textContent = date;
    eventDescription.textContent = description;
    eventImage.src = image;
  });
});