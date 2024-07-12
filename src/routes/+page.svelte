<script>
     import { Button } from '$lib/components/ui/button'
     import Navbar from '$lib/components/Navbar.svelte'
     import { TextGenerateEffect } from '$lib/components/ui/TextGenerateEffect'
     import MissionStatement from '@/components/MissionStatement.svelte'
     import { onMount } from 'svelte';

     const words = 'Molecular Insights'
     let scrolled = false

     function handleScroll() {
          const missionElement = document.getElementById('mission-statement')
          missionElement.scrollIntoView({ behavior: 'smooth' })
     }

</script>

<main class="relative min-h-screen flex flex-col">
    

     <div class="bg-blue-200 flex flex-col justify-center items-center w-full h-screen relative">
          <img src="src/lib/images/shape-background.jpeg" alt="" class="w-full h-full object-cover absolute top-0 left-0">
          <div class="relative flex flex-col items-center justify-center w-full h-full">
               <span class="text-white text-9xl px-4 py-2 rounded">
                    <TextGenerateEffect {words}/>
               </span>

               <Button size='lg' variant='default' class="bg-blue-950 hover:bg-blue-900 mt-10 text-xl p-8 font-mono" on:click={handleScroll}>Learn More</Button>
          </div>
     </div>

     <Navbar />
     <div id="" class="position-relative">
          <MissionStatement/>
     </div>

</main>
