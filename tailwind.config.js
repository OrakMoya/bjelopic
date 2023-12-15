/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'sm-md': '704px'
			},
			backgroundImage: {
				'bjelopic-basic-bg': "url('images/background.jpg')"
			}
		}
	},
	plugins: []
};
