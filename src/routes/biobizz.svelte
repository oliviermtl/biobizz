<script>
	import { bucketLiters, dateGrowStart, nutesRatio } from '../stores';
	// Icons
	import FaThermometerFull from 'svelte-icons/fa/FaThermometerFull.svelte';
	import FaThermometerQuarter from 'svelte-icons/fa/FaThermometerQuarter.svelte';
	import FaTint from 'svelte-icons/fa/FaTint.svelte';

	import { differenceInWeeks } from 'date-fns';
	import RangeSlider from 'svelte-range-slider-pips';

	const today = new Date();

	$: currentWeek = differenceInWeeks(today, new Date($dateGrowStart));
	let growStages = ['Vegetative', 'Flowering'];
	let parameters = {
		temp_day: { label: 'Temperature Day', values: [24, 24, 25, 26, 26], icon: 'FaThermometerFull' },
		temp_night: {
			label: 'Temperature Night',
			values: [18, 18, 18, 19, 19],
			icon: 'FaThermometerQuarter'
		},
		humidity: {
			label: 'Humidity',
			values: [70, 70, 60, 55, 50, 50, 50, 40, 40, 40],
			icon: 'FaTint'
		}
	};
	let nutes = {
		rootjuice: [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		biogrow: [0, 2, 2, 2, 3, 3, 4, 4, 4, 4, 0, 0],
		biobloom: [0, 0, 1, 2, 2, 3, 3, 4, 4, 4, 0, 0],
		topmax: [0, 0, 1, 1, 1, 1, 1, 4, 4, 4, 0, 0],
		bioheaven: [2, 2, 2, 2, 3, 4, 4, 5, 5, 5, 0, 0]
	};

	const nutesToDisplay = () => {
		let toDisplay = 0;
		Object.entries(nutes).forEach((element) => {
			if (currentWeek > element[1].length) {
				element[1][element[1].length - 1] > 0 && toDisplay++;
			} else {
				element[1][currentWeek] > 0 && toDisplay++;
			}
		});

		return toDisplay;
	};
</script>

<!-- Week -->
<div class="flex flex-col justify-center items-center text-xl bg-white pb-2 pt-1">
	<p>
		{today.toLocaleDateString('fr-FR', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</p>
	<div class="flex flex-col justify-center items-center">
		Week {currentWeek + 1}
		<!-- Grow Stage -->
		<p class="text-sm">
			{currentWeek > 1
				? `${growStages[1]} week  ${currentWeek - 1}`
				: `${growStages[0]} week ${currentWeek + 1}`}
		</p>
	</div>
</div>

<!-- Optimal conditions -->
<div class=" justify-center items-center flex flex-col  rounded drop-shadow-sm sm:p-4 py-1 ">
	<div class="flex">
		<div class="grid grid-cols-4 items-center m-2 p-1 relative self-center">
			{#each Object.entries(parameters) as [param, val]}
				<div
					class="flex flex-row items-center align-center justify-center self-center pr-3 border-r-2 border-gray-400"
				>
					<div class="w-4 h-4 mr-1 ml-2 ">
						{#if val.icon === 'FaThermometerFull'} <FaThermometerFull />{/if}
						{#if val.icon === 'FaThermometerQuarter'} <FaThermometerQuarter />{/if}
						{#if val.icon === 'FaTint'} <FaTint />{/if}
					</div>
					<div>
						<p class="text-xs">
							{currentWeek >= val.values.length
								? val.values[val.values.length - 1]
								: val.values[currentWeek]}
							{val.label === 'Humidity' ? '%' : '°C'}
						</p>
					</div>
				</div>
				<!-- <h1 class="text-xs">{val.label}</h1> -->
			{/each}
			<div class="flex flex-row items-center align-center justify-center self-center">
				<div class="mr-1 text-xs"><p>pH</p></div>
				<div>
					<p class="text-xs">6.5</p>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Nutrients -->
<div class="flex flex-col justify-center bg-white rounded sm:p-4 px-2 py-4">
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
							? Number(((val[val.length - 1] * $nutesRatio[0]) / 100) * $bucketLiters[0]).toFixed(1)
							: Number(((val[currentWeek] * $nutesRatio[0]) / 100) * $bucketLiters[0]).toFixed(1)}
					</p>
					<p class="text-gray-100">ml</p>
				</div>
			{/each}
		</div>
	</div>

	<RangeSlider bind:values={$nutesRatio} pips step={1} pipstep={25} suffix="%" all="label" />
	<RangeSlider
		id="bucket"
		bind:values={$bucketLiters}
		pips
		step={1}
		pipstep={2}
		max={20}
		suffix="l."
		all="label"
	/>
</div>
