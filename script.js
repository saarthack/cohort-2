const users = [
    {
        fullName: "Aarav Mehta",
        image: "https://plus.unsplash.com/premium_photo-1763369800370-a89b6fb2a3d2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "UX Designer",
        description: "Designs apps that feel human. Loves coffee & pixel-perfect layouts.",
        tags: ["Figma", "UI/UX", "Design Systems", "Freelancer"]
    },
    {
        fullName: "Emily Carter",
        image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
        profession: "Software Engineer",
        description: "Writes clean code and breaks things just to fix them better.",
        tags: ["React", "TypeScript", "Open Source", "Tech Speaker"]
    },
    {
        fullName: "Aisha Khan",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        profession: "Data Scientist",
        description: "Finds patterns in the noise. Speaks fluently in charts and numbers.",
        tags: ["Python", "AI", "Machine Learning", "Analytics"]
    },
    {
        fullName: "Noah Williams",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        profession: "Content Creator",
        description: "Makes complex topics easy. Lives on caffeine and camera angles.",
        tags: ["Video Editing", "Education", "YouTube", "Storytelling"]
    }
];

var sum = ''

users.forEach(function (elem) {
    sum = sum + `<div class="card">
      <img src="${elem.image}" alt="">
      <h3>${elem.fullName}</h3>
      <h4>${elem.profession}</h4>
      <p>${elem.description}</p>
    </div>`

})

var main = document.querySelector('main')

main.innerHTML = sum