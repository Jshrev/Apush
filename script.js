const issueBtn = document.getElementById('issue-btn');
const historyBtn = document.getElementById('history-btn');
const solutionsBtn = document.getElementById('solutions-btn');

const issueSection = document.getElementById('issue-section');
const historySection = document.getElementById('history-section');
const solutionsSection = document.getElementById('solutions-section');

function scrollToSection(sectionElement) {
  sectionElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

issueBtn.addEventListener('click', () => scrollToSection(issueSection));
historyBtn.addEventListener('click', () => scrollToSection(historySection));
solutionsBtn.addEventListener('click', () => scrollToSection(solutionsSection));
