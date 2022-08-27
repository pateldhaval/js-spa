import Abstract from './Abstract.js';

export default class extends Abstract {
	constructor() {
		super();
		this.setTitle('Dashboard');
	}

	async getHtml() {
		return `
      <h1>Dashboard</h1>
      <a href="/posts" data-link>Go to Posts</a>
    `;
	}
}
