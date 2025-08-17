# Recipe Collection Website

This project is a single-page website that showcases a collection of recipes with a clean and modern design. It uses a pure CSS approach for filtering and navigation, providing a fast and interactive user experience without relying on JavaScript.

🛠️ Technologies Used
HTML5: For the core structure of the website.

Tailwind CSS: A utility-first CSS framework used for rapid UI development. It provides classes for responsive design, spacing, colors, and shadows.

Google Fonts (Inter): A clean and highly readable font used throughout the site.

✨ Styling and Methods
This project combines two main styling methods to achieve its look and functionality:

Tailwind Utility Classes: Applied directly to HTML elements to handle basic styling like padding (p-6), margins (mb-4), background colors (bg-gray-50), shadows (shadow-lg), and responsive layouts (md:grid-cols-3).

Custom CSS: Written within a <style> block to define more complex behaviors. This includes the grid-based layout for the recipe cards, hover animations, and the core filtering and navigation logic.

Key Methods Implemented:

CSS-Only Filtering: Recipes are filtered using hidden radio buttons and the :checked pseudo-class. When a filter button is clicked, it changes the checked state of its associated radio button, which then uses CSS selectors to show or hide the corresponding recipe items.

CSS-Only Navigation: The site creates a single-page application feel by using the :target pseudo-class. When a user clicks a recipe card, the URL changes to an anchor link (e.g., #palak-paneer-detail). The CSS then detects this change and displays the corresponding hidden recipe detail section while hiding the main gallery.

Responsive Design: The layout adapts to different screen sizes using Tailwind's responsive prefixes (md:, lg:), ensuring the website is fully functional and visually appealing on both mobile and desktop devices.

Animations and Interactivity: Smooth hover effects (transform, transition-all) are applied to recipe cards to enhance the user experience and give visual feedback.

📝 Writer's Note on Styling
While this project demonstrates a mix of Tailwind and a dedicated <style> block, it's important to understand the different approaches to CSS. In a large project, using a dedicated stylesheet file (.css) is generally a better practice than writing all your styles in a <style> block. Similarly, while inline CSS (<p style="color: red;">) is quick for small changes, it's not recommended for production code as it makes styles difficult to manage and reuse. This project's use of a <style> block is a step up from inline styles and serves to showcase all of the pure CSS methods in a single, self-contained file.