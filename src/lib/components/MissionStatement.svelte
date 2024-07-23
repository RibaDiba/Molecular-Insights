<script>

     let mission = 'Our mission is to inspire curiosity and foster a deeper understanding of biomedical science within our community. Through engaging and informative blog articles and social media posts, we aim to make complex scientific concepts accessible and interesting for students, educators, and anyone passionate about the life sciences. By sharing our passion for biomedical discoveries, we hope to encourage future generations to pursue careers in STEM and contribute to the advancement of healthcare and medicine.'
     import Button from "./ui/button/button.svelte";
</script>

<main >
     <div class="mt-10 mb-20">
          <h1 class="text-5xl text-center poppins-thin">Our Mission</h1>
     </div>

     <div class="mx-10 flex justify-around mt-5">
          <div class="m-5">
               <p class="poppins-thin text-4xl text-center mb-10">Inspire. Inform. Educate.</p>
               <p class=" text-justify text-xl ">{mission}</p>

               <div class="flex justify-around">
                    <button class="mission-buttons bg-blue-950 border-blue-950">Read Our Blog ></button>
                    <button class="mission-buttons bg-blue-950 border-blue-950">About Us ></button>
               </div>
          </div>

          <div class="m-64">
               caroseel goes here
          </div>
     </div>
</main>

<style>
     .poppins-thin {
        font-family: "Poppins", sans-serif;
        font-weight: 200;
        font-style: normal;
    }

     .mission-buttons {   
          margin-top: 30px;
          border-style: solid;
          border-radius: 3px;
          border-width: 4px;
          color: white;
          padding: 20px;
          font-size: 20px;
          font-family: "poppins";
          transition: .3s ease;
     }        

     .mission-buttons:hover {
          background-color: inherit;
          color: black;
     }

</style>