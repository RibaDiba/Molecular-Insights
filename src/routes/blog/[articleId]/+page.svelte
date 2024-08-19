<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from 'svelte';
    import articles from '../../../lib/articles.json';
    import Navbar from '../../../lib/components/Navbar.svelte'
	import ArticlePage from "@/components/BlogComponents/ArticlePage.svelte";
	import { Footer } from "@/components/ui/card";
	import FooterComponent from "@/components/FooterComponent.svelte";
	import ArticlePageMobile from "@/components/BlogComponents/ArticlePageMobile.svelte";
    
    let articleId: string;
    let article: any = null;

    articleId = $page.params.articleId;

    onMount(() => {
        // Find the article by ID
        // @ts-ignore
        article = articles.find((elem) => elem.id == articleId);
        console.log(article);
    });
</script>

<main class="lg:container">

    <div class="mt-36 hidden md:block">
        {#if article}
            <ArticlePage {article} />
        {/if}
    </div>

    <div class="block md:hidden mt-20">
        {#if article}
            <ArticlePageMobile {article} />
        {/if}
    </div>

</main>


<style>
    :global(body) {
        @apply bg-blue-100;
    }

</style>
