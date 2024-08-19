<script>
    import Navbar from "@/components/Navbar.svelte";
    import articles from "../../lib/articles.json"
	import NewArticle from "@/components/BlogComponents/NewArticle.svelte";
	import ScrollDivider from "@/components/ui/ScrollDivider/ScrollDivider.svelte";
	import ArticleCard from "@/components/BlogComponents/ArticleCard.svelte";

</script>

<main class="">

    <div class="mt-24 rounded-lg">
        <NewArticle {articles}/>
    </div>

    <div class="mt-10 mx-20 hidden md:block">
        <ScrollDivider transitionTime='1.5s' height='3px' color="#172554"/>
    </div>
    
    <div class="block md:hidden mt-2 mx-5">
        <ScrollDivider transitionTime='1.5s' height='3px' color="#172554"/>
    </div>

    <div class="">
        <ArticleCard {articles}/>
    </div>


</main>

<style>
        :global(body) {
        @apply bg-blue-100;
    }
</style>