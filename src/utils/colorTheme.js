export function setTheme() {
	const themes = ["light", "dark"];
	const themeColors = ["gold", "love"];

	if (!localStorage.getItem("theme") || !localStorage.getItem("themeColor")) {
		document.documentElement.setAttribute("data-theme", "light");
		document.body.setAttribute("data-theme", "gold");
		localStorage.setItem("theme", "light");
		localStorage.setItem("themeColor", "gold");
	} else {
		if (
			!themes.includes(localStorage.getItem("theme")) ||
			!themeColors.includes(localStorage.getItem("themeColor"))
		) {
			document.documentElement.setAttribute("data-theme", "light");
			document.body.setAttribute("data-theme", "gold");
			localStorage.setItem("theme", "light");
			localStorage.setItem("themeColor", "gold");
		} else {
			document.documentElement.setAttribute(
				"data-theme",
				localStorage.getItem("theme")
			);
			document.body.setAttribute(
				"data-theme",
				localStorage.getItem("themeColor")
			);
		}
	}
}

export function makeDark() {
	localStorage.setItem("theme", "dark");
	document.documentElement.setAttribute("data-theme", "dark");
}

export function makeLight() {
	localStorage.setItem("theme", "light");
	document.documentElement.setAttribute("data-theme", "light");
}

export function changeThemeColor(color) {
	const themeColors = ["gold", "love"];

	if (!themeColors.includes(color)) {
		localStorage.setItem("themeColor", "gold");
		document.body.setAttribute("data-theme", "gold");
	} else {
		localStorage.setItem("themeColor", color);
		document.body.setAttribute("data-theme", color);
	}
}
