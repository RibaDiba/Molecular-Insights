<script lang="ts">

     export let writers: any
     export let insta: any

</script>

<main class="flex justify-center bg-blue-100 pb-10">

     {#each writers as writer}
          <div class="flex flex-col justify-center text-center font-writers">
               <div class="writer-image p-5">
                    <img src={writer.image} alt="">
               </div>
               <div>
                    <div class="text-2xl text-blue-950">{writer.name}</div>
                    <div class="text-gray-400">{writer.title}</div>
               </div>
          </div>
     {/each}

  

</main>

<style>
     .writer-image img {
          width: 300px;
          height: 300px;
          object-fit: cover;
     }

     .font-writers {
          font-family: 'Poppins';
     }
</style>