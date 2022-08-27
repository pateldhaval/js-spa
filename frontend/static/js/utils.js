import NotFound from '../views/NotFound.js';
import Dashboard from '../views/Dashboard.js';
import Posts from '../views/Posts.js';
import Settings from '../views/Settings.js';

// [All routes]
// [Assign each view class to respective routes]
export const routes = [
	{ path: '/not-found', view: NotFound },
	{ path: '/', view: Dashboard },
	{ path: '/posts', view: Posts },
	{ path: '/settings', view: Settings },
];

// [Navigation function]
export const navigateTo = (location) => {
	// [To change browser url]
	history.pushState(null, null, location);

	router();
};

// [Router function]
export const router = async () => {
	// [Find a match using url from routes]
	const potentialMatches = routes.map((route) => {
		const isMatch = location.pathname === route.path;
		return {
			route,
			isMatch,
		};
	});

	// [Get the route that matches with url]
	const match = potentialMatches.find((item) => item.isMatch);
	// console.log(match);

	// [If no route matches, default to 404]
	if (!match) {
		return {
			route: routes[0],
			isMatch: true,
		};
	}

	// Create new object called 'view' from the assigned class
	const view = new match.route.view();
	document.querySelector('#app').innerHTML = await view.getHtml();
};
