<script>
	import Navbar from '@/components/Navbar.svelte';
	import FooterComponent from '@/components/FooterComponent.svelte';
	import Writers from '@/components/AboutComponents/Writers.svelte';
	import { ScrollDivider } from '@/components/ui/ScrollDivider/index';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import ishwari from '../../lib/images/about_us_images/691f68_ff5c1ba2e7d94d299b034448ba193eb3~mv2.webp';
	import anumeha from '../../lib/images/about_us_images/b6d17b_1b15acf093e64c6ea0aa0ebd6f4aaf1e~mv2.webp';
	import faiza from '../../lib/images/about_us_images/IMG_6268.webp';
	import subi from '../../lib/images/about_us_images/IMG_9300.webp';
	import sara from '../../lib/images/about_us_images/image0.webp';
	import dhruhi from '../../lib/images/about_us_images/image1.webp';
	import insta from '../../lib/images/Social Media images/instagram-apps-icon-free-png.webp';

	// Default theme
	import '@splidejs/svelte-splide/css';

	// or only core styles
	import '@splidejs/svelte-splide/css/core';
	import FounderCarrousel from '@/components/AboutComponents/FounderCarrousel.svelte';

	const coFounders = [
		{
			name: 'Ishwari',
			title: 'Co-Founder',
			instaLink: '',
			description:
				'I am a rising senior at John P Stevens High School. I am interested in majoring in Biomedical Engineering and pursuing a medical degree in the future. I wanted to create this website and blog to educate myself on science topics and explore my passion for medical learnings. I wish to share my knowledge and inspire young middle and elementary schoolers in the magnificent world of science.',
			linkedIn: '',
			image: ishwari
		},
		{
			name: 'Anumeha',
			title: 'Co-Founder',
			instaLink: '',
			description:
				"I am a rising senior at John P Stevens High School. I am interested in pursuing pharmacology and leaning into medicinal research. My hobbies include Bharatnatyam and listening to music. Growing up, I've always had my cultural classes outside of school but during school I was always enamored by science. As I entered high school, I found my love for chemistry and have since pursued as many opportunities in medicinal chemistry as I can.  I wanted to create this website to keep people in our community updated about new feats in science while allow more inspire more students to find their love for science.",
			linkedIn: '',
			image: anumeha
		}
	];

	const writers = [
		{
			name: 'Faiza',
			title: 'Writer',
			image: faiza,
			insta: '/dont-forget-url'
		},
		{
			name: 'Subi',
			title: 'Writer',
			image: subi,
			insta: '/dont-forget-url'
		},
		{
			name: 'Sara',
			title: 'Writer',
			image: sara,
			insta: '/dont-forget-url'
		},
		{
			name: 'Dhruhi',
			title: 'Writer',
			image: dhruhi,
			insta: '/dont-forget-url'
		}
	];
</script>

<main class="">
	<Navbar />

	<div class="mt-40 flex flex-col text-center">
		<h1 class="meet-header justify-center">Meet Our Team</h1>
		<div class="mx-96 mt-5">
			<ScrollDivider transitionTime='2s' height='7px' color='#172554' />
		</div>
	</div>

	<div class=" mt-5 flex items-center justify-center items-center bg-blue-100 py-10">
		<FounderCarrousel {coFounders} {insta} />
	</div>

	<div class="bg-blue-100 mx-10 my-5">
		<ScrollDivider transitionTime="2s" height="7px" color="#172554" />
	</div>

	<div class="">
		<Writers {writers} {insta} />
	</div>

	<div class="">
		<FooterComponent />
	</div>
</main>

<style>
	.meet-header {
		font-family: 'poppins';
		font-size: 48px;
		font-weight: 200;
	}

	.divider {
		height: 4px;
	}

	.divider::after {
		content: '';
		position: absolute;
		bottom: -5px;
		height: 1px;
		width: 100%;
		left: 0;
		background-color: #272727;
		transition: 0.3s;
		transition-timing-function: easy-in-out;
		transform: scaleX(0);
	}

	.slide-container {
		text-align: center;
		padding: 1rem;
	}
	.image-container {
		width: 200px; /* Set a fixed width */
		height: 200px; /* Set a fixed height */
		margin: 0 auto;
		overflow: hidden;
	}
	.carousel-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.label {
		font-weight: bold;
		margin-top: 0.5rem;
		font-size: 1.2rem;
	}
	.title {
		margin-top: 0.3rem;
		font-size: 1rem;
		color: grey;
	}
	.experience {
		margin-top: 0.3rem;
		font-size: 0.9rem;
		color: darkgrey;
	}
	.social-icons {
		margin-top: 0.5rem;
	}
	.social-icons a {
		margin: 0 0.5rem;
	}
	.social-icons img {
		width: 24px;
		height: 24px;
	}

	:global(body) {
		@apply bg-blue-100;
	}

	.founder-image-container {
		margin: 10px;
		padding: 0rem;
	}

	.poppins {
		font-family: 'poppins';
	}
</style>
