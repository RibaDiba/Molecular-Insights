<script>

     import * as Carousel from '$lib/components/ui/carousel';
     import * as Card from '$lib/components/ui/card'
     import { onMount } from 'svelte';
     import TextGenerateEffect from './ui/TextGenerateEffectGeneral/TextGenerateEffect.svelte';

     const mission = 'Our mission is to inspire curiosity and foster a deeper understanding of biomedical science within our community. Through engaging and informative blog articles and social media posts, we aim to make complex scientific concepts accessible and interesting for students, educators, and anyone passionate about the life sciences. By sharing our passion for biomedical discoveries, we hope to encourage future generations to pursue careers in STEM and contribute to the advancement of healthcare and medicine. Join us on our journey to explore the fascinating world of biomedical science and make a difference in our community! Follow our blog and Instagram for the latest articles, insights, and updates. Together, we can ignite a passion for science and inspire the next generation of biomedical innovators.'
     let scrolled

     onMount(() => {
         const handleScroll = () => {
             scrolled = window.scrollY > 200;
         };
 
         window.addEventListener('scroll', handleScroll);
 
         return () => {
             window.removeEventListener('scroll', handleScroll);
         };
     });

</script>

<main>

     
     <div class="flex justify-around bg-teal-200" id="">
          <div class="w-3/5 mt-20">
               <h1 class="font-bold text-center text-4xl mb-10 mt-10">Our Mission</h1>
               {#if scrolled}
                    <TextGenerateEffect words={mission}/>
               {/if}
          </div>

          <div class="justify-center items-center mx-20 items-center half" id="mission-statement">
               <Carousel.Root class="w-full max-w-md">
                    <Carousel.Content>
                      {#each Array(5) as _, i (i)}
                        <Carousel.Item>
                          <div class="p-1">
                            <Card.Root>
                              <Card.Content
                                class="flex aspect-video items-center justify-center p-10"
                              >
                                <span class="text-4xl font-semibold">{i + 1}</span>
                              </Card.Content>
                            </Card.Root>
                          </div>
                        </Carousel.Item>
                      {/each}
                    </Carousel.Content>
                    <Carousel.Previous />
                    <Carousel.Next />
               </Carousel.Root>
          </div> 
     </div>

</main>

<style>
     .half {
          margin-top: 25vh;
     }
</style>