<script>
    import ScrollDivider from "../ui/ScrollDivider/ScrollDivider.svelte";
    export let article
</script>

<main class="mx-64 poppins mb-10">

    <div class="">

        <div class=" poppins font-bold text-blue-950 text-5xl">
            {article.title}
        </div>
    
        <div class="mt-3 poppins text-lg">
            <div class="font-bold text-blue-900">{article.author}</div>  {article.date}
        </div>
    
        <div class="cover-container mt-5">
            <img src={article.cover} alt="" class="rounded-lg">
        </div>
    
        <div class="overflow-hidden mt-10">
            <ScrollDivider transitionTime='2s' color="#172554" height='3px'/>
        </div>
    </div>

    <div class="">
        {#each article.content as object}
            <div class="my-5">
                {#if object.header}
                    <div class="text-3xl font-bold mt-10 text-blue-950">
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
                                <li class="mt-2">{elem}</li>
                            {/each}
                        </ul>
                    </div>
                {/if}
                
                {#if object.paragraph}
                    <div class="mt-5 text-lg">
                        {object.paragraph}
                    </div>
                {/if}

            </div>
        {/each}
        
        {#if article.citations}
        <div class="text-xl font-bold mt-10 mb-3 text-blue-900">Citations</div>
            {#each article.citations as citation}
                <div class="text-gray-700 text-xs mb-4">{citation.citation}</div>
            {/each} 
        {/if}
    </div>

</main>

<style>
    .poppins {
        font-family: "Poppins";
    }

    .cover-container img {
        width: 100%;
        max-height: 800px;
        object-fit: cover;
    }

    
</style>