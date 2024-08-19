<script>
    import Navbar from "@/components/Navbar.svelte";
    import NavbarMobile from "@/components/NavbarMobile.svelte";
    import Footer from "@/components/FooterComponent.svelte";
    import "../app.css";
</script>

<div class="hidden md:block">
    <Navbar />
</div>

<div class="block md:hidden">
    <NavbarMobile />
</div>

<slot></slot>

<div>
    <Footer />
</div>
