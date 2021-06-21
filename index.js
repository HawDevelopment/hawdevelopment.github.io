let discordLink = document.querySelector("#discord-link");

discordLink.addEventListener("click", () => {
	navigator.clipboard.writeText("HawDevelopment#8939");
	discordLink.classList.add("copied");
	setTimeout(() => {
		discordLink.classList.remove("copied");
	}, 100);
});