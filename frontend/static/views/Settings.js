import Abstract from './Abstract.js';

export default class extends Abstract {
	constructor() {
		super();
		this.setTitle('Settings');
	}

	async getHtml() {
		return `
      <h1>Settings</h1>
    `;
	}
}
