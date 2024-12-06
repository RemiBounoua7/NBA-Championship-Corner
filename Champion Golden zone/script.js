const headings = document.querySelectorAll('.toggle-heading');

headings.forEach(heading => {
    heading.addEventListener('click', () => {
        const content = heading.nextElementSibling;
        const arrow = heading.querySelector('.arrow');

        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block'; // Show content
            arrow.style.transform = 'rotate(90deg)'; // Rotate arrow
        } else {
            content.style.display = 'none'; // Hide content
            arrow.style.transform = 'rotate(0deg)'; // Reset arrow rotation
        }
    });
});
