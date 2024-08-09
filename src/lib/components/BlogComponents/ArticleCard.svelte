<script>

    export let articles
</script>

<main>
    <section class="py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each articles as article}
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
        {/each}
    </div>
    </section>
</main>

<style>
    .image-container img {
        width: 100%;
        max-height: 300px;
        border-top-left-radius: .5rem;
        border-top-right-radius: .5rem;
        object-fit: cover;
    }

    .poppins {
        font-family: "Poppins";
    }
</style>