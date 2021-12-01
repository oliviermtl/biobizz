<script lang="ts">
	import Auth from 'supabase-ui-svelte';
	import { supabase } from '$lib/supabase';
</script>

<div class="grid grid-cols-1 grid-rows-1 container items-center justify-center bg-white p-6 h-full">
	<Auth supabaseClient={supabase} />
</div>

<style>
	.container {
		grid-template-rows: 100vh;
		margin: 0px auto;
	}
</style>
