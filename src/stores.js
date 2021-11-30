import { writable } from 'svelte/store';
import { browser } from '$app/env';

// How many liters of water in a bucket
const storedBucket = JSON.parse(browser && localStorage.getItem('bucketLiters')) || [1];
export const bucketLiters = writable(browser && storedBucket);
bucketLiters.subscribe((val) => {
	browser && localStorage.setItem('bucketLiters', JSON.stringify(val));
});

// When did the plantation start
const storedDate =
	new Date(JSON.parse(browser && localStorage.getItem('dateGrowStart'))) || new Date();
export const dateGrowStart = writable(browser && storedDate);
dateGrowStart.subscribe(
	(val) => browser && localStorage.setItem('dateGrowStart', JSON.stringify(val))
);

// Nutriments ratio compared to official chart
const storedRatio = JSON.parse(browser && localStorage.getItem('nutesRatio')) || [50];
export const nutesRatio = writable(browser && storedRatio);
nutesRatio.subscribe((val) => browser && localStorage.setItem('nutesRatio', JSON.stringify(val)));
