import Abstract from './Abstract.js';

export default class extends Abstract {
	constructor() {
		super();
		this.setTitle('404');
	}

	async getHtml() {
		return `
      <h1>404</h1>
    `;
	}
}
