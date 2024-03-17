// @ts-nocheck
import Cookies from 'js-cookie';
import { writable } from 'svelte/store';

// Initialize currentTheme as a Svelte writable store
export const currentTheme = writable("light");

// Function to set a cookie
export function setCookie(name, args){
	Cookies.set(name, args, { expires: 365 });
}

// Function to get a cookie
export function getCookie(name){
	return Cookies.get(name);
}

// Function to set the theme
export function setTheme(theme, save) {
    document.documentElement.dataset.theme = theme;
    currentTheme.set(theme); // Update the currentTheme store
    if (save) setCookie("theme", theme);
}

// Function to get the theme
export function getTheme() {
  console.log(getCookie('theme'))
  return getCookie('theme');
}
