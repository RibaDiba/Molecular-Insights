<script>
    import { onMount } from "svelte";
    import logo from "../images/FINAL_Logo-removebg-preview (1).png";
</script>

<main>
    <div class="bg-blue-200">
        <nav
            class="absolute top-0 left-0 w-full bg-transparent text-2xl font-bold font-serif z-10"
        >
            <div
                class="container mx-auto flex justify-between items-center p-4 text-blue-950 font-Nuntio font-light text-3xl m-2"
            >
                <div class="logo poppins-thin flex items-center">
                    <a href="/" class="font-bold ml-2">Molecular Insights</a>
                </div>
                <ul class="flex space-x-10 poppins-thin">
                    <li>
                        <a
                            href="/about"
                            class="poppins-thin after:bg-blue-950 hover-comp"
                            >About Us</a
                        >
                    </li>
                    <li>
                        <a href="/blog" class="after:bg-blue-950 hover-comp"
                            >Blog</a
                        >
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</main>

<style lang="postcss">
    .poppins-thin {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    .hover-comp {
        position: relative;
    }

    .hover-comp::after {
        content: "";
        position: absolute;
        height: 3px;
        left: 0;
        bottom: -3px;
        width: 0;
        transition: width 0.5s;
    }

    .hover-comp:hover:after {
        width: 100%;
    }
</style>
