<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from 'svelte';
    import articles from '../../../lib/articles.json';
    import Navbar from '../../../lib/components/Navbar.svelte'
	import ArticlePage from "@/components/BlogComponents/ArticlePage.svelte";
	import { Footer } from "@/components/ui/card";
	import FooterComponent from "@/components/FooterComponent.svelte";
    
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

<Navbar />

<main class="container">

    <div class="mt-36">
        {#if article}
            <ArticlePage {article} />
        {/if}
    </div>

</main>

<div class="mt-20">
    <FooterComponent/>
</div>

<style>
    :global(body) {
        @apply bg-blue-100;
    }

</style>
