import Abstract from './Abstract.js';

export default class extends Abstract {
	constructor() {
		super();
		this.setTitle('Dashboard');
	}

	async getHtml() {
		return `
      <h1 class='block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white'>Dashboard</h1>
			<p class="mt-2 text-lg text-gray-800 dark:text-gray-400">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id sequi eum est nam nesciunt officia, explicabo consectetur perspiciatis cumque in eos! Debitis tempora quisquam adipisci fuga placeat sunt illum deserunt ea. Fuga labore qui harum ipsum debitis quibusdam sint nihil velit voluptatem quo. Vitae maiores commodi accusamus ratione? Deserunt, numquam.
			</p>
      <div class="mt-5 flex gap-2">
        <a href="/posts" data-link class="inline-flex items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 text-sm">
          Go to Posts
        </a>
      </div>
    `;
	}
}
