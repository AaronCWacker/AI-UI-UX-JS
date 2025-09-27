# AI-UI-UX-JS
AI Pair Programming Examples of Top 100 JS and HTML Techniques for Simulators and Advanced Interactive 3D Spaces

How to use this repo:
1. Clone me
2. Make it your own - try small fast confirmation changes (1-10 seconds) by:
   - create a new git file called Your_Fun_To_Write_App.html
   - check it in
   - try to find the URL and share it with a friend.
3. index.html is special - edit that one in grok, gpt, gemini or claude, all are great outputs and fun that they are so different.  Mashups of multiple unlock new capabilities since some are going to be better at book smart retrieval due to corpus so are all uniquely skilled based on input datasets.
4. Create new apps and githubio it.  This means making a URL you can link to based on name of file and then automatically rebuild outputs ready to go on the interwebs.

GLHF - Aaron


# Easy GitHub Pages Recipe for Fun Web Apps 🎉

🌟 **Setup Basics (The Toy Box)**  
📦 *Storage Spot*: https://github.com/AaronCWacker/AI-UI-UX-JS - Upload HTML files here (e.g., `My_Cool_Game.html`). Use _ for spaces.  
🌐 *Show-Off Spot*: https://aaroncwacker.github.io/AI-UI-UX-JS/ - Gallery auto-shows apps as clickable cards.  
🪄 *Why Easy?* GitHub’s robot (Actions) does the work. Just add files, and magic happens!

✏️ **Make & Add Apps (New Toys)**  
📝 *Create*: Write HTML + JS (like `<canvas>` games). Test in browser. Save as `Super_Fun_Game.html`.  
🚀 *Upload*: Go to repo, click “Add file,” upload, and commit. Edit online with ✏️ if needed.  
🔮 *Auto-Magic*: Gallery auto-adds cards from file names (e.g., `Super_Fun_Game.html` → “Super Fun Game”).

🎈 **Share & Play (Show the World)**  
🤖 *Robot Work*: Wait 1-2 min after upload; robot deploys to site.  
👀 *See It*: Visit https://aaroncwacker.github.io/AI-UI-UX-JS/. Click new card to play!  
⚡ *Fast Tips*: Test locally, upload often, edit quick. Share URL like https://aaroncwacker.github.io/AI-UI-UX-JS/Your_Game.html.

🎉 **Done!** Mix (create), bake (upload), share (play). Keep adding toys! 🚀


Tarot Decks:
1. https://aaroncwacker.github.io/AI-UI-UX-JS/Tarot_A_Legacy_in_Metal_Steel_Engineering_Innovation_Deck.html
2. https://aaroncwacker.github.io/AI-UI-UX-JS/Tarot_All_Saints_Deck.html
3. https://aaroncwacker.github.io/AI-UI-UX-JS/Tarot_Angels_and_Nordic_Deities.html
4. https://aaroncwacker.github.io/AI-UI-UX-JS/Tarot_Card_SVG_Designer.html
5. https://aaroncwacker.github.io/AI-UI-UX-JS/Tarot_Magnetic_Metals_and_Heritage_Deck.html
6. https://aaroncwacker.github.io/AI-UI-UX-JS/Tarot_Metals_Magnetism_Heritage_Steel_and_Metal_Deck.html
7. https://aaroncwacker.github.io/AI-UI-UX-JS/Tarot_Moulin_Rouge_Deck.html
8. https://aaroncwacker.github.io/AI-UI-UX-JS/Tarot_Moulin_Rouge_v2.html
9. https://aaroncwacker.github.io/AI-UI-UX-JS/Tarot_of_Angels_In_Our_Solar_System.html
   

This repository operates with a Github Pages gitaction script to prepare static content output.  Here are URLs:

1. Base Repo: https://github.com/AaronCWacker/AI-UI-UX-JS/
2. Pages index:  https://aaroncwacker.github.io/AI-UI-UX-JS/
3. Infinite HTML JS Simulators UI UX and Games

HTML sample for dynamic index:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI UI/UX JS Apps</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .app-card {
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .app-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800">

    <div class="container mx-auto px-4 py-8 md:py-12">
        <header class="text-center mb-10">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900">AI UI/UX App Gallery</h1>
            <p class="mt-3 text-lg text-gray-600">A collection of web experiments and applications.</p>
        </header>

        <!-- The gallery will be populated here by the script -->
        <main id="app-gallery" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <!-- Loading placeholder -->
            <div id="loading" class="col-span-full text-center text-gray-500">
                <p>Loading apps...</p>
            </div>
        </main>

        <footer class="text-center mt-12 text-gray-500">
            <p>&copy; 2024 - Powered by GitHub Pages</p>
        </footer>
    </div>

    <script>
        // Configuration for your repository
        const GITHUB_USER = 'aaroncwacker';
        const GITHUB_REPO = 'AI-UI-UX-JS';

        // The element where the app links will be displayed
        const gallery = document.getElementById('app-gallery');
        const loadingIndicator = document.getElementById('loading');

        /**
         * Fetches the list of files from the GitHub repository and builds the gallery.
         */
        async function buildGallery() {
            // Construct the GitHub API URL for the repository's contents
            const apiUrl = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/`;

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`GitHub API error: ${response.status}`);
                }
                const files = await response.json();

                // Filter for .html files, excluding this index.html file
                const htmlFiles = files.filter(file => 
                    file.type === 'file' && 
                    file.name.endsWith('.html') && 
                    file.name !== 'index.html'
                );
                
                // Clear the loading indicator
                loadingIndicator.style.display = 'none';

                if (htmlFiles.length === 0) {
                    gallery.innerHTML = '<p class="col-span-full text-center">No HTML apps found in this repository yet.</p>';
                    return;
                }

                // Create a card for each HTML file
                htmlFiles.forEach(file => {
                    // Clean up the name for display
                    const appName = file.name.replace('.html', '').replace(/[-_]/g, ' ');

                    const card = document.createElement('a');
                    card.href = file.name; // Link directly to the html file
                    card.className = 'app-card bg-white rounded-xl shadow-md overflow-hidden block';
                    
                    card.innerHTML = `
                        <div class="p-6">
                            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">${appName}</div>
                            <p class="mt-2 text-gray-500 text-sm">Click to launch the application.</p>
                        </div>
                    `;
                    
                    gallery.appendChild(card);
                });

            } catch (error) {
                console.error('Failed to fetch repository files:', error);
                loadingIndicator.style.display = 'none';
                gallery.innerHTML = `<p class="col-span-full text-center text-red-500">Error: Could not load app gallery. Check the console for details.</p>`;
            }
        }

        // Run the function when the page loads
        document.addEventListener('DOMContentLoaded', buildGallery);
    </script>

</body>
</html>

```
