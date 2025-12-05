export type ProfileConfig = {
	avatar?: string;
	name: string;
	webname: string;
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
	}[];
};


export const profileConfig: ProfileConfig = {
	avatar: "src/assets/blog-placeholder-about.jpg",// Relative to the /src directory. Relative to the /public directory if it starts with '/'
    name: "JIN",
	webname:"Jin's Cubby",
	bio: "Welcome to my Cubby!.",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/saicaca/fuwari",
		},
	],
};


export const navigation = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "About",
		href: "/about",
	},
	{
		label: "Blog",
		href: "/blog",
	},
	{
		label: "Tag",
		href: "/tags",
	},
]
