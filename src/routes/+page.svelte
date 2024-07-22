<script>
     import { Button } from '$lib/components/ui/button';
     import Navbar from '$lib/components/Navbar.svelte';
     import { TextGenerateEffect } from '$lib/components/ui/TextGenerateEffect';
     import MissionStatement from '@/components/MissionStatement.svelte';
     import { onMount } from 'svelte';
 
     const words = 'Molecular Insights';
     let scrolled = false;
 
     function handleScroll() {
         const missionElement = document.getElementById('mission-statement');
         missionElement.scrollIntoView({ behavior: 'smooth' });
     }
 </script>
 
 <main class="relative min-h-screen flex flex-col">
     <Navbar />
     <div class="bg-blue-200 flex flex-col justify-center items-center w-full h-screen relative">
         <img src='src/lib/images/human_gamete_embryos.webp' alt="" class="w-full h-full object-cover absolute top-0 left-0">
         <div class="relative flex flex-col items-center justify-center w-full h-full">
             <span class="text-white text-9xl px-4 py-2 rounded">
                 <TextGenerateEffect {words}/>
             </span>
             <Button size='lg' variant='default' class="bg-blue-950 hover:bg-blue-900 mt-10 text-xl p-8 font-mono learn-more" on:click={handleScroll}>Learn More</Button>
         </div>
     </div>
 
     <div id="mission-statement" class="relative">
         <MissionStatement />
     </div>
 
     <div id="read-blog">
     </div>
 </main>
 
 <style>
     .learn-more {
         transition: padding 0.3s ease;
     }
 
     .learn-more:hover {
         padding: 10px;
     }
 </style>
 