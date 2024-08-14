<script>
    import Navbar from "@/components/Navbar.svelte";
    import articles from "../../lib/articles.json"
	import NewArticle from "@/components/BlogComponents/NewArticle.svelte";
	import ScrollDivider from "@/components/ui/ScrollDivider/ScrollDivider.svelte";
	import ArticleCard from "@/components/BlogComponents/ArticleCard.svelte";

</script>

<main>
    <Navbar/>

    <div class="mt-24">
        <NewArticle {articles}/>
    </div>

    <div class="mt-10 mx-20">
        <ScrollDivider transitionTime='1.5s' height='3px' color="#172554"/>
    </div>

    <div class="mx-20">
        <ArticleCard {articles}/>
    </div>


</main>

<style>
        :global(body) {
        @apply bg-blue-100;
    }
</style>