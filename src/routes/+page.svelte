<script>
    import { Button } from "$lib/components/ui/button";
    import Navbar from "$lib/components/Navbar.svelte";
    import { TextGenerateEffect } from "$lib/components/ui/TextGenerateEffect";
    import MissionStatement from "@/components/MissionStatement.svelte";
    import MissionStatementMobile from "@/components/MissionStatementMobile.svelte";
    import { onMount } from "svelte";

    const words = "Molecular Insights";
    let scrolled = false;

    function handleScroll() {
        const missionElement = document.getElementById("mission-statement");
        missionElement.scrollIntoView({ behavior: "smooth" });

        const missionElementMobile = document.getElementById("mission-statement-mobile");
        missionElementMobile.scrollIntoView({ behavior: "smooth" });
    }
</script>

<main class="relative min-h-screen flex flex-col">
    <div class="relative w-full h-screen flex flex-col justify-center items-center bg-blue-200 overflow-hidden z-1">
        <img src="src/lib/images/human_gamete_embryos.webp" alt="" class="w-full h-full object-cover absolute inset-0" />

        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-70 z-0"></div>

        <div class="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
            <span class="text-white text-4xl md:text-6xl lg:text-8xl px-4 py-2 rounded-lg font-bold">
                <TextGenerateEffect {words} />
            </span>

            <button class="bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-500 hover:to-blue-800 mt-10 text-base md:text-lg lg:text-xl px-6 py-3 rounded-lg shadow-lg font-mono transition-all duration-300 ease-in-out transform hover:scale-105 poppins" on:click={handleScroll}>
                Learn More
            </button>
        </div>
    </div>

    <div id="mission-statement" class="relative inset-0 hidden md:block">
        <div class="absolute inset-0 bg-gradient-to-b from-blue-900 to-transparent opacity-70 z-0"></div>
        <div class="relative z-10">
            <MissionStatement />
        </div>
    </div>

    <div id="mission-statement-mobile" class="relative inset-0 block md:hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-blue-900 to-transparent opacity-70 z-0"></div>
        <div class="relative z-10">
            <MissionStatementMobile />
        </div>
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

    @media (max-width: 768px) {
        .learn-more {
            padding: 8px;
        }

        span.text-white {
            font-size: 2.5rem;
        }

        button.learn-more {
            padding: 8px;
            font-size: 1rem;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        span.text-white {
            font-size: 4rem;
        }

        button.learn-more {
            padding: 10px;
            font-size: 1.2rem;
        }
    }

    .poppins {
        font-family: 'Poppins';
    }
</style>
