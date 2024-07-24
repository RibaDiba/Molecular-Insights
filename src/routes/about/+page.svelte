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

// Default theme
import "@splidejs/svelte-splide/css";

// or only core styles
import "@splidejs/svelte-splide/css/core";

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

<main>
<Navbar />

<div class="mt-40 flex flex-col text-center">
  <h1 class="meet-header justify-center">Meet Our Team</h1>
  <div class="divider mx-64 mt-10 bg-blue-950"></div>
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
                      <!-- Add social media icons here -->
                      <a href="/"
                          ><img
                              src="path/to/facebook-icon.png"
                              alt="Facebook"
                          /></a
                      >
                      <a href="/"
                          ><img
                              src="path/to/instagram-icon.png"
                              alt="Instagram"
                          /></a
                      >
                      <a href="/"
                          ><img
                              src="path/to/youtube-icon.png"
                              alt="YouTube"
                          /></a
                      >
                  </div>
              </div>
          </SplideSlide>
      {/each}
  </Splide>
</div>

<div class="mt-64">
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
  object-fit: cover; /* Ensures the image covers the container without distorting the aspect ratio */
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
</style>
