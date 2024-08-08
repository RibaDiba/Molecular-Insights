<script>
	import Navbar from "@/components/Navbar.svelte";
	import FooterComponent from "@/components/FooterComponent.svelte";
	import { Splide, SplideSlide } from "@splidejs/svelte-splide";
	import ishwari from "../../lib/images/about_us_images/691f68_ff5c1ba2e7d94d299b034448ba193eb3~mv2.webp";
	import anumeha from "../../lib/images/about_us_images/b6d17b_1b15acf093e64c6ea0aa0ebd6f4aaf1e~mv2.webp";
	import faiza from "../../lib/images/about_us_images/IMG_6268.webp";
	import subi from "../../lib/images/about_us_images/IMG_9300.webp";
	import sara from "../../lib/images/about_us_images/image0.webp";
	import dhruhi from "../../lib/images/about_us_images/image1.webp";
	import insta from "../../lib/images/Social Media images/instagram-apps-icon-free-png.webp";

	// Default theme
	import "@splidejs/svelte-splide/css";

	// or only core styles
	import "@splidejs/svelte-splide/css/core";
  import FounderCarrousel from "@/components/AboutComponents/FounderCarrousel.svelte";

  const coFounders = [
    {
      name: "Ishwari",
      title: "Co-Founder",
      instaLink: "",
      description: "I am a rising senior at John P Stevens High School. I am interested in majoring in Biomedical Engineering and pursuing a medical degree in the future. I wanted to create this website and blog to educate myself on science topics and explore my passion for medical learnings. I wish to share my knowledge and inspire young middle and elementary schoolers in the magnificent world of science.",
      linkedIn: "",
      image: ishwari
    },
    {
      name: "Anumeha",
      title: "Co-Founder",
      instaLink: "",
      description: "I am a rising senior at John P Stevens High School. I am interested in pursuing pharmacology and leaning into medicinal research. My hobbies include Bharatnatyam and listening to music. Growing up, I've always had my cultural classes outside of school but during school I was always enamored by science. As I entered high school, I found my love for chemistry and have since pursued as many opportunities in medicinal chemistry as I can.  I wanted to create this website to keep people in our community updated about new feats in science while allow more inspire more students to find their love for science.",
      linkedIn: "",
      image: anumeha
    }
  ]

	const teamMembers = [
		{
			name: "Ishwari",
			title: "Co-Founder",
			image: ishwari,
		},
		{
			name: "Anumeha",
			title: "Co-Founder",
			image: anumeha,
		},
		{
			name: "Faiza",
			title: "Writer",
			image: faiza,
		},
		{
			name: "Subi",
			title: "Writer",
			image: subi,
		},
		{
			name: "Sara",
			title: "Writer",
			image: sara,
		},
		{
			name: "Dhruhi",
			title: "Writer",
			image: dhruhi,
		},
	];
</script>

<main class="">
	<Navbar />

	<div class="mt-20 flex flex-col text-center">
		<h1 class="meet-header justify-center">Meet Our Team</h1>
		<div class="divider mx-64 mt-10 bg-blue-950"></div>
	</div>

	<div  class=" mt-20 flex items-center justify-center items-center bg-blue-100 py-10">
		<FounderCarrousel {coFounders} {insta} />
	  </div>
	

	<div class="mx-64 mt-20 flex items-center justify-center bg-blue-100 p-20">
		<Splide
			aria-label="Meet Our Team"
			options={{ perPage: 3, gap: "1rem", width: "100%", height: "auto" }}
		>
			{#each teamMembers as member}
				<SplideSlide>
					<div class="slide-container">
						<div class="image-container justify-center">
							<img
								src={member.image}
								alt={member.name}
								class="carousel-image"
							/>
						</div>
						<p class="label">{member.name}</p>
						<p class="title">{member.title}</p>
						<div class="social-icons flex justify-center mb-10">
							<a href="/"><img src={insta} alt="Instagram" /></a>
						</div>
					</div>
				</SplideSlide>
			{/each}
		</Splide>
	</div>


	<div class="mt-20">
		<FooterComponent />
	</div>
</main>

<style>
	.meet-header {
		font-family: "poppins";
		font-size: 48px;
		font-weight: 200;
	}

	.divider {
		height: 4px;
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
		@apply bg-blue-200;
	}

  .founder-image-container {
    margin: 10px;
    padding: 0rem;
  }

  .poppins {
	font-family: 'poppins';
  }

</style>
