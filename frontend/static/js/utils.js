// [All routes]
export const routes = [
	{ path: '/not-found', view: () => console.log('404 loaded!') },
	{ path: '/', view: () => console.log('Dashboard loaded!') },
	{ path: '/posts', view: () => console.log('Posts loaded!') },
	{ path: '/settings', view: () => console.log('Settings loaded!') },
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
	console.log(match);

	// [If no route matches, default to 404]
	if (!match) {
		return {
			route: routes[0],
			isMatch: true,
		};
	}

	match.route.view();
};
