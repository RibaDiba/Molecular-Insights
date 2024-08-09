<script>
    import ScrollDivider from "../ui/ScrollDivider/ScrollDivider.svelte";
    export let article
</script>

<main class="mx-64 poppins">
    <div class=" poppins font-bold text-blue-950 text-5xl">
        {article.title}
    </div>

    <div class="mt-3 poppins text-lg">
        {article.author} | {article.date}
    </div>

    <div class="cover-container mt-5">
        <img src={article.cover} alt="" class="rounded-lg">
    </div>

    <div class="overflow-hidden mt-10">
        <ScrollDivider transitionTime='2s' color="#172554" height='3px'/>
    </div>

    <div class="">
        {#each article.content as object}
            <div class="text-3xl font-bold mt-10 text-blue-950">
                {object.header}
            </div>

            {#if object.image}
                <img src={object.image} alt="">
            {/if}
            
            <div class="mt-5 text-lg">
                {object.paragragh}
            </div>
        {/each}
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