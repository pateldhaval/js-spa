import { navigateTo, router } from './utils.js';

// [Document ready]
document.addEventListener('DOMContentLoaded', () => {
	console.log('Ready');

	// [Execute route on page load]
	router();

	document.body.addEventListener('click', (e) => {
		if (e.target.matches('[data-link]')) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
	});
});

// [To work router with browser backward/forward buttons]
window.addEventListener('popstate', router);
