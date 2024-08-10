<script lang="ts">
	export let writers: any;
	export let insta: any;
</script>

<main class="flex justify-center bg-blue-100 pb-10">
	{#each writers as writer}
		<div class="flex flex-col justify-center text-center font-writers writer-container m-5">
			<div class="writer-image">
				<img src={writer.image} class="rounded-lg"alt="" />
			</div>
			<div>
				<div class="text-3xl text-blue-950 my-1px mt-2">{writer.name}</div>
				<div class="text-gray-400">{writer.title}</div>
			</div>

			<div class="overflow-hidden divider mt-5"></div>
		</div>
	{/each}
</main>

<style>
	.writer-image img {
		width: 300px;
		height: 300px;
		object-fit: cover;
	}

	.font-writers {
		font-family: 'Poppins';
	}

	.divider {
		height: 5px;
		background-color: #172554;
		width: 100%; 
		transform: scaleX(0); 
		transform-origin: center; 
		transition: transform 0.5s 
	}

	.writer-container:hover .divider {
		transform: scaleX(1); /* Scale to full width */
	}

	.writer-container {
		overflow: hidden;
	}
</style>
