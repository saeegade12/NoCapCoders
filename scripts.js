document.addEventListener('DOMContentLoaded', function() {
    // Randomly assign a house (for demo purposes)
    const houses = [
        { name: "Gryffindor", color: "var(--gryffindor-red)", text: "white" },
        { name: "Slytherin", color: "var(--slytherin-green)", text: "white" },
        { name: "Ravenclaw", color: "var(--ravenclaw-blue)", text: "white" },
        { name: "Hufflepuff", color: "var(--hufflepuff-yellow)", text: "var(--ink)" }
    ];
    
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    const houseBadges = document.querySelectorAll('#user-house');
    
    houseBadges.forEach(badge => {
        badge.textContent = randomHouse.name;
        badge.style.backgroundColor = randomHouse.color;
        badge.style.color = randomHouse.text;
    });
    
    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 100);
    });
    
    // Form submission for goal setting
    const studyPlanForm = document.getElementById('study-plan-form');
    if (studyPlanForm) {
        studyPlanForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Your study plan has been saved to your Time-Turner!');
        });
    }
});