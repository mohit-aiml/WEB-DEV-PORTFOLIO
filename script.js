document.getElementById('technical-details').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent event from bubbling up to the document
    const technicalDetailsHover = document.getElementById('technical-details-hover');

    // Check if circles are currently visible
    if (!technicalDetailsHover.classList.contains('show-semicircle')) {
        technicalDetailsHover.classList.add('show-semicircle');

        // Create and append six bubbles
        const bubbleDetails = [
            "Languages Learnt:  Python, HTML, SQL",
            "Frameworks learnt: Bootstrap (CSS Framework)",
            "Tools known: Git, GitHub",
            "Databases learnt: MySQL",
            "Knows multiple libraries: MySQL2",
            "Currently Learning: MERN Stack Web Development"
        ];

        // Clear existing bubbles
        technicalDetailsHover.innerHTML = '';

        bubbleDetails.forEach(detail => {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';

            // Split the details into name and content
            const parts = detail.split(': ');
            const fieldName = document.createElement('p');
            const content = document.createElement('p');

            fieldName.textContent = parts[0] + ':';
            content.textContent = parts[1];

            bubble.appendChild(fieldName);
            bubble.appendChild(content);
            technicalDetailsHover.appendChild(bubble);
        });

        // Fade in effect
        setTimeout(() => {
            technicalDetailsHover.style.opacity = '1';
        }, 10); // Slight delay for opacity transition
    } else {
        // Fade out effect before hiding
        technicalDetailsHover.style.opacity = '0';
        setTimeout(() => {
            technicalDetailsHover.classList.remove('show-semicircle');
            technicalDetailsHover.innerHTML = ''; // Clear bubbles when hiding
        }, 500); // Match this timeout to the CSS transition duration
    }
});

document.addEventListener('click', function() {
    const technicalDetailsHover = document.getElementById('technical-details-hover');
    if (technicalDetailsHover.classList.contains('show-semicircle')) {
        technicalDetailsHover.style.opacity = '0'; // Fade out effect
        setTimeout(() => {
            technicalDetailsHover.classList.remove('show-semicircle');
            technicalDetailsHover.innerHTML = ''; // Clear bubbles when hiding
        }, 500); // Match this timeout to the CSS transition duration
    }
});

document.getElementById('about-me').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent event from bubbling up
    const aboutMeHover = document.getElementById('about-me-hover');

    // Check if the about-me box is visible
    if (!aboutMeHover.classList.contains('show-box')) {
        aboutMeHover.classList.add('show-box');

        // Clear existing content
        aboutMeHover.innerHTML = '';

        // Create the title and paragraph elements
        const title = document.createElement('h2');
        title.textContent = 'ABOUT ME';
        title.className = 'about-me-title';

        const paragraph = document.createElement('p');
        paragraph.textContent = "I am an aspiring coder with a passion for problem-solving and technology. Currently pursuing a B.Tech in Computer Science with a specialization in Artificial Intelligence and Machine Learning, I am constantly learning new programming languages, frameworks, and tools to expand my technical skill set. My journey in coding began with an interest in creating innovative solutions, and I am now focused on building a strong foundation in both front-end and back-end development. I thrive in collaborative environments, enjoy tackling complex challenges, and am committed to lifelong learning. As I continue to grow in my career, I am eager to contribute to meaningful projects and explore opportunities in open-source development to further hone my expertise. Whether it's through coding, working on personal projects, or learning from industry experts, I am dedicated to becoming a proficient and versatile developer.";
        paragraph.className = 'about-me-content';

        // Append the title and paragraph to the hover box
        aboutMeHover.appendChild(title);
        aboutMeHover.appendChild(paragraph);

        // Fade in effect
        setTimeout(() => {
            aboutMeHover.style.opacity = '1';
        }, 10); // Slight delay for opacity transition
    } else {
        // Fade out effect before hiding
        aboutMeHover.style.opacity = '0';
        setTimeout(() => {
            aboutMeHover.classList.remove('show-box');
            aboutMeHover.innerHTML = ''; // Clear content when hiding
        }, 500); // Match this timeout to the CSS transition duration
    }
});

document.addEventListener('click', function() {
    const aboutMeHover = document.getElementById('about-me-hover');
    if (aboutMeHover.classList.contains('show-box')) {
        aboutMeHover.style.opacity = '0'; // Fade out effect
        setTimeout(() => {
            aboutMeHover.classList.remove('show-box');
            aboutMeHover.innerHTML = ''; // Clear content when hiding
        }, 500); // Match this timeout to the CSS transition duration
    }
});

document.getElementById('external-links').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent event from bubbling up to the document
    const externalLinksHover = document.getElementById('external-links-hover');

    // Check if the box is currently visible
    if (!externalLinksHover.classList.contains('show-external-links')) {
        externalLinksHover.classList.add('show-external-links');

        // Create and append icons with names and links
        const iconsDetails = [
            { src: 'github-svgrepo-com.svg', name: 'GitHub', link: 'https://github.com/mohit-aiml' },
            { src: 'instagram-social-media-network-communication-interaction-connection-svgrepo-com.svg', name: 'Instagram', link: 'https://instagram.com/_.om_pandeyy._' },
            { src: 'new-logo-gmail-svgrepo-com.svg', name: 'Gmail', link: 'mailto:ompandey.aiml@gmail.com' }
        ];

        // Clear existing icons
        externalLinksHover.innerHTML = '';

        const title = document.createElement('h3');
        title.textContent = 'CONTACT ME';
        title.style.color = 'white'; // Title color
        externalLinksHover.appendChild(title);

        iconsDetails.forEach(iconDetail => {
            const iconContainer = document.createElement('div');
            iconContainer.className = 'icon-container';

            const icon = document.createElement('img');
            icon.src = iconDetail.src;
            icon.className = 'icon';
            icon.alt = iconDetail.name;

            const iconName = document.createElement('p');
            iconName.textContent = iconDetail.name;
            iconName.className = 'icon-name';

            // Add click event to redirect to the link
            iconContainer.addEventListener('click', function() {
                window.open(iconDetail.link, '_blank'); // Open the link in a new tab
            });

            iconContainer.appendChild(icon);
            iconContainer.appendChild(iconName);
            externalLinksHover.appendChild(iconContainer);
        });

        // Fade in effect
        setTimeout(() => {
            externalLinksHover.style.opacity = '1';
        }, 10); // Slight delay for opacity transition
    } else {
        // Fade out effect before hiding
        externalLinksHover.style.opacity = '0';
        setTimeout(() => {
            externalLinksHover.classList.remove('show-external-links');
            externalLinksHover.innerHTML = ''; // Clear icons when hiding
        }, 500); // Match this timeout to the CSS transition duration
    }
});

document.addEventListener('click', function() {
    const externalLinksHover = document.getElementById('external-links-hover');
    if (externalLinksHover.classList.contains('show-external-links')) {
        externalLinksHover.style.opacity = '0'; // Fade out effect
        setTimeout(() => {
            externalLinksHover.classList.remove('show-external-links');
            externalLinksHover.innerHTML = ''; // Clear icons when hiding
        }, 500); // Match this timeout to the CSS transition duration
    }
});


