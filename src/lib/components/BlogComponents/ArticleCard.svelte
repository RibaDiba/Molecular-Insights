<script>

    import { onMount } from "svelte";

    export let articles

</script>

<main>
    <section class="py-12 hidden md:block mx-20">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 max-w">
        {#each [...articles].reverse() as article, i}
            {#if i > 0}
                <div class="bg-white shadow-md rounded-lg flex flex-col poppins">
                    <div class="image-container rounded-t-lg">  
                        <a href="/blog/{article.id}"><img src={article.cover} alt=""></a>
                    </div>
                    <div class="p-4 flex-1 flex flex-col justify-between">
                        <h3 class="text-xl font-bold mt-4 text-blue-950"><a href="/blog/{article.id}">{article.title}</a></h3>
                        <h3 class="text-sm mt-4">{article.blurb}</h3>
                        <div class="flex flex-col justify-around">
                            <p class="text-blue-950 mt-3">{article.author} | {article.date}</p>
                        </div>
                    </div>
                </div>
            {/if}
        {/each}
    </div>
    </section>

    {#each [...articles].reverse() as article, i}
        {#if i > 0} 
            <section class="bg-inherit py-4 poppins block md:hidden mx-5">
                <div class="mx-auto flex flex-col items-start gap-3">
            
                    <div class="new-article-mobile flex items-start gap-3 mb-4">
                        
                        <div class="image-container flex-shrink-0">
                            <a href="/blog/{article.id}"><img src={article.cover} alt=""></a>
                        </div>
                        
                        <div class="text-left">
                        <h1 class="text-base font-bold leading-tight text-blue-950">
                            <a href="/blog/{article.id}">{article.title}</a>
                        </h1>
                        <p class="mt-1 text-xs">{article.author} | {article.date}</p>
                        </div>
                        
                    </div>
                </div>

                <div class="divider"></div>
            </section>
        {/if}
    {/each}
</main>

<style>
    /* Styles for image container */
    .image-container img {
        width: 100%;
        max-height: 250px;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        object-fit: cover;
    }

    /* Ensures the max-width is responsive while maintaining a minimum width */
    .max-w {
        max-width: 100%;
        min-width: 400px;
    }

    /* Applies the Poppins font with a fallback */
    .poppins {
        font-family: "Poppins", sans-serif;
    }

    /* Styles for mobile article section */
    .new-article-mobile {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem; /* Space between image and text */
        margin-bottom: 1rem; /* Space below the article */
    }

    .new-article-mobile img {
        width: 120px;
        height: 70px;
        object-fit: cover;
        border-radius: 0.5rem; /* Ensure the image corners match the rounded styling */
    }

    /* Global body styles */
    :global(body) {
        @apply bg-blue-100;
    }
</style>