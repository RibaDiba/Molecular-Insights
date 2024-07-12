<script>
     import { onMount } from "svelte";
 
     let scrolled = false;
 
     onMount(() => {
         const handleScroll = () => {
             scrolled = window.scrollY > 100;
         };
 
         window.addEventListener('scroll', handleScroll);
 
         return () => {
             window.removeEventListener('scroll', handleScroll);
         };
     });
 </script>

 <main> 
     <div class="bg-blue-200">
         <nav class="fixed top-0 left-0 w-full transition-all duration-300 {scrolled ? 'bg-opacity-50' : 'bg-opacity-0'} {scrolled ? 'backdrop-blur-md' : ''} {scrolled ? 'shadow-md' : ''} bg-teal-500 text-2xl font-bold font-serif ">
             <div class="container mx-auto flex justify-between items-center p-4 text-blue-900">
                 <div class="logo">
                     <a href="/" class="font-bold text-white">Molecular Insights</a>
                 </div>
                 <ul class="flex space-x-10">
                     <li><a href="#home" class="hover:text-gray-200 text-white">About Us</a></li>
                     <li><a href="/about" class="hover:text-gray-200 text-white">Blog</a></li>
                 </ul>
             </div>
         </nav>
     </div>
 </main>
 