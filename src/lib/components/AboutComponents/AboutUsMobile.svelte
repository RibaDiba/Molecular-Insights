<script>
     export let coFounders;
     export let writers;

     import insta from '../../images/Social Media images/instagram-apps-icon-free-png.webp'
	import linkedIn from '../../images/Social Media images/linkedin.png'
	import ScrollDivider from '../ui/ScrollDivider/ScrollDivider.svelte';
 
     let activeIndex = 0; // Track the clicked image
     let clicked = true;  // Track if an image was clicked
 </script>
 
 <main class="poppins mb-10">
     <div class="text-center mb-5 text-xl">Meet our Team</div>
 
     <div class="coFounder-img-container flex justify-around mt-3 rounded-lg">
         <!-- svelte-ignore a11y-click-events-have-key-events -->
         <!-- svelte-ignore a11y-no-static-element-interactions -->
         {#each coFounders as coFounder, index}
             <!-- svelte-ignore a11y-click-events-have-key-events -->
             <div 
                 class="flex flex-col coFounder-img relative" 
                 on:click={() => {
                     activeIndex = index;
                     clicked = true;
                 }}
             >
                 <img src={coFounder.image} alt="" class="coFounder-img rounded-lg">
                 <div class="text-center social-icons justify-center items-center">
                     <div class="text-primary">{coFounder.name}</div>
                     <div class="text-gray-400 text-sm">{coFounder.title}</div>
                 </div>
                 {#if activeIndex === index && clicked}
                     <div class="animated-line mt-5"></div>
                 {/if}
             </div>
         {/each}
     </div>

     <div class="bg-blue-200 text-sm mt-10 py-6 social-icons px-5">
          <div class="">{coFounders[activeIndex].description}</div>
          <div class="flex">
               <a href={coFounders[activeIndex].instaLink}><img src={insta} alt="" class="mt-2"></a>
               <a href={coFounders[activeIndex].linkedIn}><img src={linkedIn} alt="" class="mt-2 ml-2"></a>
          </div>
     </div>

     <div class="mx-5">
          <ScrollDivider transitionTime='2s' height='3px' color='#172554' />
     </div>

     <div class="flex justify-center">
        <div class="grid grid-cols-2 gap-7 p-6 pt-0">
            {#each writers as writer}
                <div class="grid-item writer-image felx justify-center items-center">
                        <img src={writer.image} alt="" class="rounded-lg">
                        <div class="text-primary poppins text-center mt-2">{writer.name}</div>
                        <div class="text-center text-sm text-gray-500">{writer.title}</div>
                </div>
            {/each}
        </div>
    </div>
 </main>
 
 <style>
     .poppins {
         font-family: "Poppins";
     }
 
     .coFounder-img img {
         width: 140px;
         height: 150px;
         object-fit: cover;
     }
 
     .coFounder-img {
         cursor: pointer;
         position: relative;
     }
 
     .animated-line {
         position: absolute;
         bottom: -10px;
         left: 50%;
         width: 0;
         height: 4px;
         background-color: var(--primary-color, #000);
         transition: width 0.5s ease, left 0.5s ease;
         animation: animateLine 0.5s forwards;
     }
 
     @keyframes animateLine {
         from {
             width: 0;
             left: 50%;
         }
         to {
             width: 100%;
             left: 0;
         }
     }
	.social-icons img {
		width: 24px;
		height: 24px;
	}

     .writer-image img {
          width: 150px;
          height: 150px;
          object-fit: cover;
     }
 </style>
 