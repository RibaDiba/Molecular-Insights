<script>
    let mission = "Our mission is to inspire curiosity and foster a deeper understanding of biomedical science within our community. Through engaging and informative blog articles and social media posts, we aim to make complex scientific concepts accessible and interesting for students, educators, and anyone passionate about the life sciences. By sharing our passion for biomedical discoveries, we hope to encourage future generations to pursue careers in STEM and contribute to the advancement of healthcare and medicine.";
    
    import Button from "./ui/button/button.svelte";
    import FooterComponent from "./FooterComponent.svelte";
    import image1 from '../images/font_page_images/IMG_3677.png';
    import image2 from '../images/font_page_images/IMG_6737.png';
    import image3 from '../images/font_page_images/IMG_6747.png';
    import arrow from '../images/arrows/arrow.png'; 
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
    
    let image_array = [image1, image2, image3];

    // Default theme
    import '@splidejs/svelte-splide/css';
	import ScrollDivider from "./ui/ScrollDivider/ScrollDivider.svelte";
</script>

<main class="mb-5">
    <div class="mission-container mt-10 ">
        <h1 class="mt-5 text-5xl text-center poppins-thin">Our Mission</h1>
        <div class="overflow-hidden m-5 mx-96 mb-10 bg-inherit">
            <ScrollDivider transitionTime='2s' color='#172554' height='7px'/>
        </div>
    </div>

    <div class="content-container relative">
        <div class="absolute "></div>

        <div class="mission-text z-10">
            <p class="poppins-thin text-4xl text-center mb-5">Inspire. Inform. Educate.</p>
            <p class="text-justify text-lg">{mission}</p>

            <div class="button-group flex justify-around mt-5">
                <a href="/blog">
                    <button class="mission-buttons bg-blue-950 border-blue-950">Read Our Blog &gt;</button>
                </a>
                <a href="/about">
                    <button class="mission-buttons bg-blue-950 border-blue-950">About Us &gt;</button>
                </a>
            </div>
        </div>

        <div class="carousel-container z-10">
            <Splide
                aria-label="Meet Our Co-Founders"
                options={{
                    type: 'loop',
                    autoplay: true,
                    interval: 2000,
                    pauseOnHover: true,
                    pauseOnFocus: true,
                    width: '100%',
                    gap: '20px',
                    padding: '1rem',
                }}
                hasTrack={false}
            >
                <SplideTrack>
                    {#each image_array as image}
                        <SplideSlide>
                            <div class="front-images mb-7">
                                <img src={image} alt="">
                            </div>
                        </SplideSlide>
                    {/each}
                </SplideTrack>

                <div class="splide__arrows arrow-container">
                    <button class="splide__arrow splide__arrow--prev btn">
                        <img src={arrow} alt="" class="arrow-image">
                    </button>
                    <button class="splide__arrow splide__arrow--next btn">
                        <img src={arrow} alt="" class="arrow-image flipped">
                    </button>
                </div>
            </Splide>
        </div>
    </div>
</main>

<style>
    .poppins-thin {
        font-family: "Poppins", sans-serif;
        font-weight: 200;
    }

    .mission-container {
        margin: 20px 0;
    }

    .mission-buttons {
        margin-top: 10px;
        border-style: solid;
        border-radius: 3px;
        border-width: 4px;
        color: white;
        padding: 20px;
        font-size: 20px;
        font-family: "Poppins", sans-serif;
        transition: 0.3s ease;
        cursor: pointer;
    }

    button {
        cursor: pointer;
    }

    .mission-buttons:hover {
        background-color: inherit;
        color: black;
    }

    .divider {
        height: 4px;
        background-color: black;
        margin: 20px auto;
        width: 60%;
    }

    .content-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 20px;
    }

    .mission-text {
        max-width: 40%;
    }

    .carousel-container {
        max-width: 50%;
    }

    .front-images img {
        width: 1000px;
        height: 100%;
        object-fit: cover;
        margin: 0;
    }

    .arrow-container {
        display: flex;
        justify-content: space-between;
    }

    .arrow-image {
        width: 25px;
        height: 25px;
    }

    .flipped {
        transform: rotate(180deg);
    }

    .splide__progress__bar {
        height: 4px;
        background: #007BFF;
        transition: width 0.3s ease;
    }

    .splide__arrow {
        display: none;
    }   
</style>
