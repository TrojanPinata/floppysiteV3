export function getCookie(name: string): string | null {
	const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
	return match ? decodeURIComponent(match[2]) : null;
}

export function setCookie(name: string, value: string, days: number = 365): void {
	const expires = new Date(Date.now() + days * 864e5).toUTCString();
	document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

/* I still plan to implement dark mode, but for some reason I could not get it to work and I am
   not nearly good enough at JS/TS/Svelte to get it to work the correct way. This site is already
   a bodge, and I am already being lazy by using tailwind. */