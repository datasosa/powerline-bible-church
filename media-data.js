// media-data.js

// Using a single 'media' array for simplicity for now,
// but in a more complex setup, you might have separate arrays
// like 'sermons', 'events', 'documentaries' etc.
const media = [
    {
        type: 'sermon', // Added type property
        id: 'the-power-of-your-words',
        title: 'The Power of Your Words',
        heroTitle: 'The Power of Your Words',
        heroSubtitle: 'Unlock the creative force within you',
        author: 'Bishop Lawrence Osagie', // Changed from speaker to author for generality
        date: 'June 9, 2025',
        category: 'Faith Foundations', // Changed from series to category
        description: 'In this powerful message, Bishop Osagie teaches from Proverbs 18:21 about how your words create your world and how to harness the creative power in your tongue. Learn how to speak life and transform your circumstances.',
        youtubeId: 'UFHLtI1IPIM', // Example YouTube ID, **REPLACE WITH ACTUAL**
        thumbnail: 'images/sermon-featured.jpg', // Thumbnail for main sermons page and related section
        downloadLink: '#', // Changed from mp3DownloadLink to downloadLink
        notesLink: '#'
    },
    {
        type: 'sermon',
        id: 'walking-by-faith',
        title: 'Walking by Faith',
        heroTitle: 'Walking by Faith',
        heroSubtitle: 'Living a life dependent on God',
        author: 'Bishop Lawrence Osagie',
        date: 'May 26, 2025',
        category: 'Faith Foundations',
        description: 'Discover what it truly means to walk by faith and not by sight. Bishop Osagie expounds on practical steps to activate your faith for daily living and overcoming challenges.',
        youtubeId: 'mR_9nI_pS-k', // Example YouTube ID, **REPLACE WITH ACTUAL**
        thumbnail: 'images/sermon1.jpg',
        downloadLink: '#',
        notesLink: '#'
    },
    {
        type: 'sermon',
        id: 'godly-relationships',
        title: 'Godly Relationships',
        heroTitle: 'Godly Relationships',
        heroSubtitle: 'Building divine connections',
        author: 'Bishop Lawrence Osagie',
        date: 'May 19, 2025',
        category: 'Godly Relationships',
        description: 'Learn biblical principles for fostering healthy and godly relationships in your marriage, family, friendships, and community. Practical wisdom for lasting connections.',
        youtubeId: 'xP-2U7A0_iQ', // Example YouTube ID, **REPLACE WITH ACTUAL**
        thumbnail: 'images/sermon2.jpg',
        downloadLink: '#',
        notesLink: '#'
    },
    {
        type: 'sermon',
        id: 'financial-wisdom',
        title: 'Financial Wisdom',
        heroTitle: 'Financial Wisdom',
        heroSubtitle: 'Kingdom principles for prosperity',
        author: 'Rev. David Oke',
        date: 'May 12, 2025',
        category: 'Divine Prosperity',
        description: 'Rev. David Oke shares profound financial wisdom rooted in scripture. Understand how to manage your resources, break free from debt, and experience divine prosperity.',
        youtubeId: 'bLw921d7_d0', // Example YouTube ID, **REPLACE WITH ACTUAL**
        thumbnail: 'images/sermon3.jpg',
        downloadLink: '#',
        notesLink: '#'
    },
    {
        type: 'sermon',
        id: 'divine-healing',
        title: 'Divine Healing',
        heroTitle: 'Divine Healing',
        heroSubtitle: 'Accessing your healing covenant',
        author: 'Bishop Lawrence Osagie',
        date: 'May 5, 2025',
        category: 'Healing & Miracles',
        description: 'This message empowers you to receive and walk in divine healing. Bishop Osagie teaches on the Finished Work of Christ and your right to supernatural health.',
        youtubeId: 'yO-WbJdM5Lg', // Example YouTube ID, **REPLACE WITH ACTUAL**
        thumbnail: 'images/sermon4.jpg',
        downloadLink: '#',
        notesLink: '#'
    },
    {
        type: 'sermon',
        id: 'faith-that-works',
        title: 'Faith That Works',
        heroTitle: 'Faith That Works',
        heroSubtitle: 'Activating your faith for results',
        author: 'Pastor Grace Adeleke',
        date: 'April 28, 2025',
        category: 'Faith Foundations',
        description: 'Pastor Grace Adeleke dives into what it means to have a working faith. This sermon provides practical insights and steps to move from belief to receiving your breakthrough.',
        youtubeId: 'kP-1U8C1_oJ', // Example YouTube ID, **REPLACE WITH ACTUAL**
        thumbnail: 'images/sermon5.jpg',
        downloadLink: '#',
        notesLink: '#'
    },
    {
        type: 'sermon',
        id: 'marriage-covenant',
        title: 'Marriage Covenant',
        heroTitle: 'Marriage Covenant',
        heroSubtitle: 'Building a strong, Christ-centered marriage',
        author: 'Bishop Lawrence Osagie',
        date: 'April 21, 2025',
        category: 'Godly Relationships',
        description: 'Explore the sanctity and power of the marriage covenant from a biblical perspective. Bishop Osagie shares timeless principles for a joyful and fulfilling marital journey.',
        youtubeId: 'aN-3X9B2_qL', // Example YouTube ID, **REPLACE WITH ACTUAL**
        thumbnail: 'images/sermon6.jpg',
        downloadLink: '#',
        notesLink: '#'
    }
    // Add more media objects here (sermons, events, etc.)
];

