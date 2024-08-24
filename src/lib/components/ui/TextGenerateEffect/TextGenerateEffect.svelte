<script lang="ts">
    import { Motion } from "svelte-motion";
    import { cn } from "$lib/utils";

    export let words: string;
    export let className: string | undefined = undefined;

    const variants = {
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                delay: i * 0.3,
                duration: 2,
            },
        }),
        hidden: { opacity: 0 },
    };
</script>

<div class={cn("font-bold", className)}>
    <div class="mt-4">
        <div
            class=" text-9xl leading-snug tracking-wide text-blue-950 dark:text-white"
        >
            <Motion
                let:motion
                custom={0}
                {variants}
                initial="hidden"
                animate={"visible"}
            >
                <div use:motion>
                    {#each words.split(" ") as word, idx (`${word}${idx}`)}
                        <Motion
                            let:motion
                            {variants}
                            custom={idx + 1}
                            initial="hidden"
                            animate={"visible"}
                        >
                            <span
                                use:motion
                                class="text-blue-950 dark:text-white poppins-thin text-8xl hidden md:block"
                            >
                                {word}{" "}
                            </span>

                            <span
                                use:motion
                                class="text-blue-950 dark:text-white poppins-thin text-6xl block md:hidden"
                            >
                                {word}{" "}
                            </span>
                        </Motion>
                    {/each}
                </div>
            </Motion>
        </div>
    </div>
</div>

<style>
    .poppins-thin {
        font-family: "Poppins", sans-serif;
        font-weight: 300;
        font-style: normal;
    }
</style>
