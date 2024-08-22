<script>
	import { onMount, tick } from 'svelte';

	export let transitionTime = '0.7s';
	export let height = '4px';
	export let color = 'navy';

	let dividerVisible = false;
	let divider = null;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(async (entry) => {
					if (entry.isIntersecting) {
						dividerVisible = true;
						await tick();
					}
				});
			},
			{
				threshold: 0.5
			}
		);

		if (divider) {
			observer.observe(divider);
		}

		return () => {
			if (divider) {
				observer.unobserve(divider);
			}
		};
	});
</script>

<main class="bg-inherit">
	<div
		class="divider"
		bind:this={divider}
		class:divider-animate={dividerVisible}
		style="height: {height}; background-color: {color}; transition: width {transitionTime} cubic-bezier(0.68, -0.55, 0.27, 1.55);"
	></div>
</main>

<style>
	.divider {
		width: 0%;
		overflow: hidden;
	}

	.divider-animate {
		width: 100%;
		overflow: hidden;
	}

	main {
		overflow: hidden;
	}
</style>
