import Abstract from './Abstract.js';

export default class extends Abstract {
	constructor() {
		super();
		this.setTitle('Posts');
	}

	async getHtml() {
		return `
			<h1 class='block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white'>Posts</h1>
			<p class="mt-2 text-lg text-gray-800 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi eum est nam nesciunt officia, explicabo consectetur perspiciatis cumque in eos! Debitis tempora quisquam adipisci fuga placeat sunt illum deserunt ea. Fuga labore qui harum ipsum debitis quibusdam sint nihil velit voluptatem quo.
			</p>
			<p class="mt-2 text-lg text-gray-800 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi eum est nam nesciunt officia, explicabo consectetur perspiciatis cumque in eos! Debitis tempora quisquam adipisci fuga placeat sunt illum deserunt ea. Fuga labore qui harum ipsum debitis quibusdam sint nihil velit voluptatem quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi eum est nam nesciunt officia, explicabo consectetur perspiciatis cumque in eos! Debitis tempora quisquam adipisci fuga placeat sunt illum deserunt ea. Fuga labore qui harum ipsum debitis quibusdam sint nihil velit voluptatem quo.
			</p>
			<p class="mt-2 text-lg text-gray-800 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi eum est nam nesciunt officia, explicabo consectetur perspiciatis cumque in eos! Debitis tempora quisquam adipisci fuga placeat sunt illum deserunt ea. Fuga labore qui harum ipsum debitis quibusdam sint nihil velit voluptatem quo.
			</p>
			<p class="mt-2 text-lg text-gray-800 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi eum est nam nesciunt officia, explicabo consectetur perspiciatis cumque in eos! Debitis tempora quisquam adipisci fuga placeat sunt illum deserunt ea. Fuga labore qui harum ipsum debitis quibusdam sint nihil velit voluptatem quo.
			</p>
			<p class="mt-2 text-lg text-gray-800 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi eum est nam nesciunt officia, explicabo consectetur perspiciatis cumque in eos! Debitis tempora quisquam adipisci fuga placeat sunt illum deserunt ea. Fuga labore qui harum ipsum debitis quibusdam sint nihil velit voluptatem quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi eum est nam nesciunt officia, explicabo consectetur perspiciatis cumque in eos! Debitis tempora quisquam adipisci fuga placeat sunt illum deserunt ea. Fuga labore qui harum ipsum debitis quibusdam sint nihil velit voluptatem quo.
			</p>
			<p class="mt-2 text-lg text-gray-800 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi eum est nam nesciunt officia, explicabo consectetur perspiciatis cumque in eos! Debitis tempora quisquam adipisci fuga placeat sunt illum deserunt ea. Fuga labore qui harum ipsum debitis quibusdam sint nihil velit voluptatem quo.
			</p>
			<p class="mt-2 text-lg text-gray-800 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi eum est nam nesciunt officia, explicabo consectetur perspiciatis cumque in eos! Debitis tempora quisquam adipisci fuga placeat sunt illum deserunt ea. Fuga labore qui harum ipsum debitis quibusdam sint nihil velit voluptatem quo.
			</p>
			<p class="mt-2 text-lg text-gray-800 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi eum est nam nesciunt officia, explicabo consectetur perspiciatis cumque in eos! Debitis tempora quisquam adipisci fuga placeat sunt illum deserunt ea. Fuga labore qui harum ipsum debitis quibusdam sint nihil velit voluptatem quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi eum est nam nesciunt officia, explicabo consectetur perspiciatis cumque in eos! Debitis tempora quisquam adipisci fuga placeat sunt illum deserunt ea. Fuga labore qui harum ipsum debitis quibusdam sint nihil velit voluptatem quo.
			</p>
			<p class="mt-2 text-lg text-gray-800 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi eum est nam nesciunt officia, explicabo consectetur perspiciatis cumque in eos! Debitis tempora quisquam adipisci fuga placeat sunt illum deserunt ea. Fuga labore qui harum ipsum debitis quibusdam sint nihil velit voluptatem quo.
			</p>
    `;
	}
}
