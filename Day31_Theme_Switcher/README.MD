Dark/Light Theme Toggle Website

This project is a simple, single-page website demonstrating how to implement a user-toggleable Dark/Light theme. It is built using core web technologies without any external frameworks.

Features
Dark/Light Theme Toggle: A button in the navigation bar allows the user to switch between a light and a dark color scheme.

Theme Persistence: The user's theme preference is saved in their browser's local storage, so the website remembers their choice on subsequent visits.

System Theme Detection: On the first visit, the website automatically detects the user's system-level dark or light mode preference and applies the corresponding theme.

Icon-Based Toggle: The toggle button uses emoji icons (a sun and a moon) to visually represent the current theme and the theme it will switch to.

Technologies Used
This project is a great example of a feature built with the foundational trio of web development:

HTML (index.html)
Provides the basic structure and content of the webpage.

Uses a data-theme attribute on the <html> tag to serve as a marker for the current theme. This attribute's value is what our CSS and JavaScript use to manage the theme.

CSS (style.css)
CSS Variables: The core of the theme-switching is managed with CSS custom properties (variables). This allows us to define different color values for the same property name (e.g., --background-color) and switch between them easily.

Attribute Selector: The :root[data-theme="dark"] selector is used to apply all the dark theme's variable values when the <html> element has a data-theme value of "dark".

Icon Styling: CSS is also used to style the toggle button and to conditionally show either the sun or moon icon based on the current theme.

JavaScript (script.js)
Event Listener: A click event listener on the toggle button detects when the user wants to switch the theme.

localStorage: The localStorage.setItem() and localStorage.getItem() methods are used to save and retrieve the user's theme preference. This ensures the theme is persistent across browser sessions.

window.matchMedia(): This API is used to detect the user's operating system-level theme preference (prefers-color-scheme: dark) on their first visit, providing a smooth initial experience.

Attribute Manipulation: The script's main function is to toggle the value of the data-theme attribute on the <html> element, which in turn triggers the CSS to apply the correct styles.