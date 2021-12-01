<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import '../tailwind.css';
	import { browser } from '$app/env';
</script>

<!-- <Header /> -->
<Header />
<main>
	{#if browser} <slot />{/if}
	{#if !browser} <p>loading</p>{/if}
</main>

<footer>
	<p class="text-xs text-green-800">Elles sont belles mes salades ? 🥗</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* padding: 1rem; */
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
