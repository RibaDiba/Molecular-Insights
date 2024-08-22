<script>
    import Navbar from "@/components/Navbar.svelte";
    import NavbarMobile from "@/components/NavbarMobile.svelte";
    import Footer from "@/components/FooterComponent.svelte";
    import { page } from "$app/stores";
    import "../app.css";
</script>

{#if $page.url.pathname !== '/'}
    <div class="hidden md:block z-20 ">
        <Navbar />
    </div>

    <div class="block md:hidden z-20 ">
        <NavbarMobile />
    </div>

{:else}

    <div class="hidden md:block z-20 relative ">
        <Navbar />
    </div>

    <div class="block md:hidden z-20 relative ">
        <NavbarMobile />
    </div>

{/if}

<slot></slot>

<div>
    <Footer />
</div>
