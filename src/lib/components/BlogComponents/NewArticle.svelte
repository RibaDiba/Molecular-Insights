<script>
    export let articles 

    let article = articles[articles.length-1]

    console.log(article.image)
</script>

<main class="bg-blue-200">
    <section class="bg-inherit py-12 poppins hidden md:block">
        <div class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-around">
            <div class="md:w-1/2 m-10">
                <div class="badge badge-primary badge-lg mb-2 font-bold">NEW</div>
                <h1 class="text-4xl font-bold leading-tight text-blue-950"><a href="/blog/{article.id}">{article.title}</a></h1>
                <p class="mt-4 text-gray-600 text-justify">{article.blurb}</p>
                <p class="mt-2">{article.author} | {article.date}</p>
            </div>
            <div class="md:w-1/2 new-article-image flex justify-around">
                <img src={article.cover} alt="" class="w-full h-auto rounded-lg">
            </div>
        </div>
    </section>

    <section class="bg-inherit py-4 poppins block md:hidden">
        <div class="mx-auto flex md:flex-row justify-around">

            <div class="md:w-1/8 new-article-mobile flex justify-around">
                <img src={article.cover} alt="" class="w-full h-auto rounded-lg">
            </div>
            <div class="md:w-1/2 text-left">
                <div class="badge mb-1 badge-primary badge-sm font-bold">NEW</div>
                <h1 class="text-2xl font-bold leading-tight text-blue-950"><a href="/blog/{article.id}">{article.title}</a></h1>
                <p class="mt-1 text-xs">{article.author} | {article.date}</p>
            </div>
        </div>
    </section>
      
      
</main>

<style>
    .poppins {
        font-family: "Poppins";
    }

    .new-article-image img {
        width: 400px;
        height: 300px;
        object-fit: cover;
        align-self: flex-end;
    }

    .new-article-mobile img {
        width: 150px;
        height: 100px;
        object-fit: cover;
        align-self: flex-end;
    }


    :global(body) {
        @apply bg-blue-100;
    }
    
</style>