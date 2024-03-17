// @ts-nocheck
import Cookies from 'js-cookie';
import { writable } from 'svelte/store';

export const currentTheme = writable("light");

export function setCookie(name, args){
	Cookies.set(name, args, { expires: 365 });
}

export function getCookie(name){
	return Cookies.get(name);
}

export function setTheme(theme, save) {
    document.documentElement.dataset.theme = theme;
    currentTheme.set(theme);
    if (save) setCookie("theme", theme);
}

export function getTheme() {
  console.log(getCookie('theme'))
  return getCookie('theme');
}
