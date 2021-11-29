<script>
	// Icons
	import FaThermometerFull from 'svelte-icons/fa/FaThermometerFull.svelte';
	import FaThermometerQuarter from 'svelte-icons/fa/FaThermometerQuarter.svelte';
	import FaTint from 'svelte-icons/fa/FaTint.svelte';

	import { differenceInCalendarWeeks } from 'date-fns';
	import RangeSlider from 'svelte-range-slider-pips';
	let bucketLiters = [9];
	const dateGrowStart = new Date(2021, 10, 3);
	const today = new Date();
	let currentWeek = differenceInCalendarWeeks(today, dateGrowStart);
	let growStages = ['Vegetative', 'Flowering'];
	let parameters = {
		humidity: {
			label: 'Humidity',
			values: [70, 70, 65, 60, 60, 50, 50],
			icon: 'FaTint'
		},
		temp_day: { label: 'Temperature Day', values: [25], icon: 'FaThermometerFull' },
		temp_night: { label: 'Temperature Night', values: [18], icon: 'FaThermometerQuarter' }
	};
	let nutes = {
		rootjuice: [4, 0],
		biogrow: [0, 2, 2, 2, 3, 3, 4, 4, 4, 4, 0, 0],
		biobloom: [0, 0, 1, 2, 2, 3, 3, 4, 4, 4, 0, 0],
		topmax: [0, 0, 1, 1, 1, 1, 1, 4, 4, 4, 0, 0],
		bioheaven: [2, 2, 2, 2, 3, 4, 4, 5, 5, 5, 0, 0]
	};
	let nutesRatio = [50];
	const nutesToDisplay = () => {
		let toDisplay = 0;
		Object.entries(nutes).forEach((element) => {
			console.log(element[1]);
			if (currentWeek > element[1].length) {
				element[1][element[1].length - 1] > 0 && toDisplay++;
			} else {
				element[1][currentWeek] > 0 && toDisplay++;
			}
		});

		return toDisplay;
	};
</script>

<!-- Optimal conditions -->
<div
	class=" justify-center items-center flex flex-col bg-white rounded drop-shadow-sm sm:p-4 py-1 absolute bottom-0 left-0 right-0"
>
	<p>Parametres Optimum</p>
	<div class="flex">
		{#each Object.entries(parameters) as [param, val]}
			<div class="grid-cols-3 items-center bg-gray-300 m-2 p-1 relative self-center">
				<div class="flex flex-row items-center align-center justify-center self-center">
					<div class="w-4 h-4 mr-3 ml-2 ">
						{#if val.icon === 'FaThermometerFull'} <FaThermometerFull />{/if}
						{#if val.icon === 'FaThermometerQuarter'} <FaThermometerQuarter />{/if}
						{#if val.icon === 'FaTint'} <FaTint />{/if}
					</div>
					<div>
						<p>
							{currentWeek >= val.values.length
								? val.values[val.values.length - 1]
								: val.values[currentWeek - 1]}
							{val.label === 'Humidity' ? '%' : '°C'}
						</p>
					</div>
				</div>
				<h1 class="text-xs">{val.label}</h1>
			</div>
		{/each}
	</div>
</div>
<!-- Week -->
<div class="flex flex-col justify-center items-center text-xl bg-white">
	<p>
		{today.toLocaleDateString('de-DE', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</p>
	<div class="flex flex-col justify-center items-center">
		Week {currentWeek}
		<!-- Grow Stage -->
		<p class="text-sm">
			{currentWeek > 1 ? `${growStages[1]} week  ${currentWeek - 2}` : growStages[0] + currentWeek}
		</p>
	</div>
</div>

<!-- Bucket Size -->
<div class="flex flex-col justify-center mt-10 bg-opacity-100 bg-gray-100 rounded sm:p-4 py-4">
	<p class="self-center">Capacité du sceau {bucketLiters} Litres</p>
	<RangeSlider
		id="bucket"
		bind:values={bucketLiters}
		pips
		step={1}
		pipstep={1}
		max={10}
		suffix="l."
		all="label"
	/>
</div>
<!-- Nutrients -->
<div class="flex flex-col justify-center mt-10 bg-opacity-100 bg-gray-100 rounded sm:p-4 py-4">
	<div class="px-4">
		<div class="grid grid-cols-{nutesToDisplay()}">
			{#each Object.entries(nutes) as [nute, val]}
				<div
					class="bg-{nute} {currentWeek > val.length
						? val[val.length - 1] === 0
							? 'hidden'
							: 'nutes'
						: val[currentWeek] === 0
						? 'hidden'
						: 'nutes'}"
				>
					<h1 class="text-gray-100">{nute}</h1>
					<p class="text-xl text-white">
						{currentWeek >= val.length
							? Number(((val[val.length - 1] * nutesRatio[0]) / 100) * bucketLiters[0]).toFixed(1)
							: Number(((val[currentWeek - 1] * nutesRatio[0]) / 100) * bucketLiters[0]).toFixed(1)}
					</p>
					<p class="text-gray-100">ml</p>
				</div>
			{/each}
		</div>
	</div>

	<RangeSlider bind:values={nutesRatio} pips step={1} pipstep={25} suffix="%" all="label" />
</div>
