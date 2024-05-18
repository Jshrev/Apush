const issueBtn = document.getElementById('issue-btn');
const historyBtn = document.getElementById('history-btn');
const solutionsBtn = document.getElementById('solutions-btn');

const issueSection = document.getElementById('issue-section');
const historySection = document.getElementById('history-section');
const solutionsSection = document.getElementById('solutions-section');

// Function to handle smooth scrolling to a section
function scrollToSection(sectionElement) {
  sectionElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Add click event listeners to each button
issueBtn.addEventListener('click', () => scrollToSection(issueSection));
historyBtn.addEventListener('click', () => scrollToSection(historySection));
solutionsBtn.addEventListener('click', () => scrollToSection(solutionsSection));
