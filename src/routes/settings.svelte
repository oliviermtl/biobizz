<script>
	import { DateInput } from 'date-picker-svelte';
	import { bucketLiters, dateGrowStart } from '../store';
</script>

<!-- Starting date -->
<div class="flex bg-blue-100">
	<p>Debut plantation</p>
	<DateInput bind:value={$dateGrowStart} format="dd-MM-yyyy" />
</div>
