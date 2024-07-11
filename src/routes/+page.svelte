<script>
     import { Button } from '$lib/components/ui/button'
     import Navbar from '$lib/components/Navbar.svelte'
     import { TextGenerateEffect } from '$lib/components/ui/TextGenerateEffect'

     const words = 'Molecular Insights'
</script>

<main class="">
     <Navbar />

     <div class="bg-blue-200 flex justify-center first-comp">
          <div class="absolute flex flex-col items-center justify-center">
               <span class="text-white text-9xl px-4 py-2 rounded">
                    <TextGenerateEffect {words}/>
               </span>

               <Button size='lg' variant='default' class="bg-blue-950 hover:bg-blue-900 mt-10 text-xl p-8 font-mono">Learn More</Button>
          </div>
     </div>



</main>

<style>
     .first-comp {
          margin: 35dvh;
     }
</style>