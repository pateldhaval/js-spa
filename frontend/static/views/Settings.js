import Abstract from './Abstract.js';

export default class extends Abstract {
	constructor() {
		super();
		this.setTitle('Settings');
	}

	async getHtml() {
		return `
			<h1 class='block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white'>Settings</h1>
			<p class="mt-4">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi eum est nam nesciunt officia, explicabo consectetur perspiciatis cumque in eos! Debitis tempora quisquam adipisci fuga placeat sunt illum deserunt ea. Fuga labore qui harum ipsum debitis quibusdam sint nihil velit voluptatem quo. Vitae maiores commodi accusamus ratione? Deserunt, numquam. Id sequi eum est nam nesciunt officia, explicabo consectetur perspiciatis cumque in eos! Debitis tempora quisquam adipisci fuga placeat sunt illum deserunt ea. Fuga labore qui harum ipsum debitis quibusdam sint nihil velit voluptatem quo. Vitae maiores commodi accusamus ratione? Deserunt, numquam.
			</p>
    `;
	}
}
