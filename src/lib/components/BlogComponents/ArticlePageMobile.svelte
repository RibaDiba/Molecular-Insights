<script>
    import ScrollDivider from "../ui/ScrollDivider/ScrollDivider.svelte";
    export let article;
</script>

<main class="p-4 md:p-8 poppins">

    <div>
        <div class="font-bold text-blue-950 text-3xl md:text-5xl">
            {article.title}
        </div>
    
        <div class="mt-2 text-sm md:text-lg">
            {article.author} | {article.date}
        </div>
    
        <div class="cover-container mt-4 md:mt-5">
            <img src={article.cover} alt="" class="rounded-lg w-full">
        </div>
    
        <div class="overflow-hidden mt-6 md:mt-10">
            <ScrollDivider transitionTime='2s' color="#172554" height='3px'/>
        </div>
    </div>

    <div>
        {#each article.content as object}
            <div class="my-4 md:my-5">
                {#if object.header}
                    <div class="text-2xl font-bold mt-10 text-blue-950">
                        {object.header}
                    </div>
                {/if}

                {#if object.image}
                    <img src={object.image} class="rounded-lg w-full" alt="">
                {/if}

                {#if object.list} 
                    <div class="mt-5 text-lg">
                        <ul class="list-disc list-inside">
                            {#each object.list as elem}
                                <li class="mt-2 text-md">{elem}</li>
                            {/each}
                        </ul>
                    </div>
                {/if}
                
                {#if object.paragraph}
                    <div class="mt-5 text-md">
                        {object.paragraph}
                    </div>
                {/if}

            </div>
        {/each}
        
        {#if article.citations}
        <div class="text-md md:text-xl font-bold mt-6 mb-3 text-blue-900">
            Citations
        </div>
            {#each article.citations as citation}
                <div class="text-gray-700 text-xs md:text-sm mb-4 overflow-hidden ">
                    {citation.citation}
                </div>
            {/each} 
        {/if}
    </div>

</main>

<style>
    .poppins {
        font-family: "Poppins", sans-serif;
    }

    .cover-container img {
        width: 100%;
        max-height: 400px;
        object-fit: cover;
    }

    .text-ellipsis {
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>
