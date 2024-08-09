<script>
    import { Button } from "$lib/components/ui/button";
    import Navbar from "$lib/components/Navbar.svelte";
    import { TextGenerateEffect } from "$lib/components/ui/TextGenerateEffect";
    import MissionStatement from "@/components/MissionStatement.svelte";
    import { onMount } from "svelte";

    const words = "Molecular Insights";
    let scrolled = false;

    function handleScroll() {
        const missionElement = document.getElementById("mission-statement");
        missionElement.scrollIntoView({ behavior: "smooth" });
    }
</script>

<main class="relative min-h-screen flex flex-col">
    <Navbar />
    <div
        class="bg-blue-200 flex flex-col justify-center items-center w-full h-screen relative"
    >
        <img
            src="src/lib/images/human_gamete_embryos.webp"
            alt=""
            class="w-full h-full object-cover absolute top-0 left-0"
        />
        <div
            class="relative flex flex-col items-center justify-center w-full h-full"
        >
            <span class="text-white text-9xl px-4 py-2 rounded">
                <TextGenerateEffect {words} />
            </span>
            <button
                class="bg-blue-950 border-blue-950 mt-10 text-xl p-8 font-mono learn-more"
                on:click={handleScroll}>Learn More</button
            >
        </div>
    </div>

    <div id="mission-statement" class="relative">
        <MissionStatement />
    </div>

    <div id="read-blog"></div>
</main>

<style lang="postcss">
    .learn-more {
        color: white;
        border-radius: 3px;
        border-style: solid;
        border-width: 3px;
        padding: 15px;
        font-family: "Poppins";
        transition: 0.3s ease;
    }

    .learn-more:hover {
        background-color: transparent;
        color: black;
    }

    :global(body) {
        @apply bg-blue-100;
    }
</style>
