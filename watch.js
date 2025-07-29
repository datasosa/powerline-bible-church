// watch.js

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const contentType = urlParams.get('type'); // e.g., 'sermon'
    const contentId = urlParams.get('id');    // e.g., 'the-power-of-your-words'

    // Find the specific content based on type and ID
    const content = media.find(item => item.type === contentType && item.id === contentId);

    if (content) {
        // Update page title
        document.title = `${content.title} - Powerline Bible Church`;

        // Populate Hero Section
        document.getElementById('media-hero-title').textContent = content.heroTitle || content.title;
        document.getElementById('media-hero-subtitle').textContent = content.heroSubtitle || 'Powerful messages and inspiring content';

        // Populate Main Content Details
        document.getElementById('media-main-title').textContent = content.title;
        document.getElementById('media-author').innerHTML = `<i class="fas fa-user"></i> ${content.author}`;
        document.getElementById('media-date').innerHTML = `<i class="fas fa-calendar"></i> ${content.date}`;
        document.getElementById('media-category').innerHTML = `<i class="fas fa-tag"></i> ${content.category}`;
        document.getElementById('media-description').textContent = content.description;

        // Embed Video
        const contentPlaceholder = document.getElementById('media-content-placeholder');
        if (content.youtubeId) {
            contentPlaceholder.innerHTML = `
                <iframe src="http://googleusercontent.com/youtube.com/9${content.youtubeId}?autoplay=1"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        title="${content.title}"
                        loading="lazy"></iframe>
            `;
            contentPlaceholder.classList.remove('loading-spinner'); // Remove spinner once loaded
        } else {
            contentPlaceholder.innerHTML = '<p>Video not available.</p>';
            contentPlaceholder.classList.remove('loading-spinner');
        }

        // Handle Download Link
        const downloadLink = document.getElementById('media-download-link');
        if (content.downloadLink && content.downloadLink !== '#') {
            downloadLink.href = content.downloadLink;
            downloadLink.style.display = 'inline-block'; // Show the button
        } else {
            downloadLink.style.display = 'none'; // Hide if no link
        }

        // Handle Notes Link
        const notesLink = document.getElementById('media-notes-link');
        if (content.notesLink && content.notesLink !== '#') {
            notesLink.href = content.notesLink;
            notesLink.style.display = 'inline-block'; // Show the button
        } else {
            notesLink.style.display = 'none'; // Hide if no link
        }

        // Function to copy share link
        window.copyShareLink = function() {
            const shareUrl = window.location.href;
            navigator.clipboard.writeText(shareUrl).then(() => {
                alert('Content link copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                alert('Could not copy link. Please copy it manually from the address bar.');
            });
        };

        // Populate Related Content (Simple Example: other sermons of the same type, or just other items)
        const relatedContentGrid = document.getElementById('related-content-grid');
        relatedContentGrid.innerHTML = ''; // Clear loading text
        // Filter for other sermons, excluding the current one, and take first 3
        const otherContent = media.filter(item => item.type === contentType && item.id !== contentId).slice(0, 3);

        if (otherContent.length > 0) {
            otherContent.forEach(relatedItem => {
                const card = document.createElement('div');
                card.classList.add('sermon-card'); // Reusing sermon-card class for consistency
                card.innerHTML = `
                    <div class="sermon-thumbnail">
                        <img src="${relatedItem.thumbnail}" alt="${relatedItem.title}" loading="lazy">
                        <a href="watch.html?type=${relatedItem.type}&id=${relatedItem.id}" class="play-btn small-play-btn" aria-label="Watch ${relatedItem.title}"><i class="fas fa-play"></i></a>
                    </div>
                    <div class="sermon-info">
                        <h3>${relatedItem.title}</h3>
                        <p class="sermon-meta">${relatedItem.author} | ${relatedItem.date}</p>
                        <div class="sermon-actions">
                            <a href="watch.html?type=${relatedItem.type}&id=${relatedItem.id}" class="btn-sm"><i class="fas fa-play-circle"></i> Watch</a>
                        </div>
                    </div>
                `;
                relatedContentGrid.appendChild(card);
            });
        } else {
            relatedContentGrid.innerHTML = '<p>No related content found.</p>';
        }

    } else {
        // If content ID or type is not found
        document.title = "Content Not Found - Powerline Bible Church";
        document.getElementById('media-hero-title').textContent = 'Content Not Found';
        document.getElementById('media-hero-subtitle').textContent = 'The content you are looking for does not exist.';
        document.getElementById('media-content-placeholder').innerHTML = '<p>Please check the URL or return to the <a href="sermons.html">Sermons Archive</a>.</p>';
        document.getElementById('media-content-placeholder').classList.remove('loading-spinner');

        document.getElementById('media-main-title').style.display = 'none';
        document.querySelector('.media-meta').style.display = 'none';
        document.getElementById('media-description').style.display = 'none';
        document.querySelector('.single-page-actions').style.display = 'none';
        document.querySelector('.related-content-section').style.display = 'none';
    }
});

