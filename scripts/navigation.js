document.getElementById('menu-toggle').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('open');
});
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
const courses = [
    { subject: 'CSE', number: 110, title: 'Programming Building Blocks', credits: 2, completed: false },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 3, completed: false },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: false },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: false },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: false },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: true }, // You're doing this now!
    { subject: 'WDD', number: 331, title: 'Frontend Web Development II', credits: 2, completed: false }
    // Add/modify the rest from the official list - change completed: true for ones you've done
];

const courseList = document.getElementById('course-list');
const totalCreditsEl = document.getElementById('total-credits');

function displayCourses(filtered) {
    courseList.innerHTML = '';
    let total = 0;
    filtered.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card' + (course.completed ? ' completed' : '');
        card.innerHTML = `<strong>${course.subject} ${course.number}</strong><br>${course.title}<br>Credits: ${course.credits}`;
        courseList.appendChild(card);
        total += course.credits;
    });
    totalCreditsEl.textContent = total;
}

displayCourses(courses); // Initial load

document.querySelectorAll('.filters button').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        let filtered = courses;
        if (filter === 'wdd') filtered = courses.filter(c => c.subject === 'WDD');
        if (filter === 'cse') filtered = courses.filter(c => c.subject === 'CSE');
        displayCourses(filtered);
    });
});