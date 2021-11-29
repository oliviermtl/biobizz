<script>
	import { differenceInCalendarWeeks } from 'date-fns';
	import RangeSlider from 'svelte-range-slider-pips';
	const bucketLiters = 9;
	const dateGrowStart = new Date(2021, 10, 3);
	const today = new Date();
	let currentWeek = differenceInCalendarWeeks(today, dateGrowStart);
	let growStages = ['Vegetative', 'Flowering'];
	let parameters = {
		humidity: [70, 70, 65, 60, 60, 50, 50],
		temp_day: [25],
		temp_night: [18]
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

<div class="justify-center flex">
	{today.toLocaleDateString('de-DE', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})}
</div>
<!-- Week -->
<div class="flex justify-center text-xl mt-2 mb-4">
	<div class="flex flex-col justify-center items-center">
		<!-- Start : {dateGrowStart.toLocaleDateString('de-DE', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})}
	<br /> -->
		Week {currentWeek}
		<!-- Grow Stage -->
		<p class="text-sm">
			{currentWeek > 1 ? `${growStages[1]} week  ${currentWeek - 2}` : growStages[0] + currentWeek}
		</p>
	</div>
</div>

<!-- Optimal conditions -->
<div class="justify-between flex">
	{#each Object.entries(parameters) as [param, val]}
		<div class="flex-col button">
			<h1>{param}</h1>
			<p>{currentWeek >= val.length ? val[val.length - 1] : val[currentWeek]}</p>
		</div>
	{/each}
</div>

<!-- Nutrients -->
<div class="flex justify-center mt-10">
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
						? Number(((val[val.length - 1] * nutesRatio[0]) / 100) * bucketLiters).toFixed(1)
						: Number(((val[currentWeek] * nutesRatio[0]) / 100) * bucketLiters).toFixed(1)}
				</p>
				<p class="text-gray-100">ml</p>
			</div>
		{/each}
	</div>
</div>

<div>
	<RangeSlider bind:values={nutesRatio} pips step={1} pipstep={25} suffix="%" all="label" />
</div>
<div>{nutesRatio}</div>
