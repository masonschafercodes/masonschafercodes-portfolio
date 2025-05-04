<script lang="ts">
	import PageLink from '$lib/components/PageLink.svelte';
	import PageSection from '$lib/components/PageSection.svelte';
	import QuickLinks from '$lib/components/QuickLinks.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let showName = false;

	function handleShowName(): number {
		return setTimeout(() => {
			showName = true;
		}, 1000);
	}

	onMount(() => {
		const setNameTimeoutId = handleShowName();

		return () => clearTimeout(setNameTimeoutId);
	});
</script>

<div class="h-screen w-screen overflow-hidden bg-gray-900">
	<div class="flex min-h-full justify-center">
		<div class="flex w-full max-w-6xl flex-col px-2 py-6 md:py-12">
			<div class="flex flex-col md:flex-row md:justify-between">
				<h1 class="font-header text-3xl text-gray-100">Hello and Welcome!</h1>
				<QuickLinks />
			</div>

			<div class="mt-12">
				<!-- Page Sections -->

				<!-- About Me -->
				<PageSection sectionLabel="About Me">
					I&apos;m Mason Schafer. I have recently been enjoying learning more about graphics
					programming in my free time, I even built a simple <PageLink
						isExternal={true}
						linkHref="https://github.com/masonschafercodes/weekend-raytracer"
						linkText="raytracer over a weekend."
					/> Right now, I am working through <PageLink
						isExternal={true}
						linkHref="http://learnopengl.com/"
						linkText="http://learnopengl.com/"
					/> and having a blast! I&apos;ve also been experimenting with <PageLink
						isExternal={true}
						linkHref="https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/"
						linkText="retrieval-augmented generation"
					/> and generative AI models to build tools that help me with day-to-day tasks. My professional
					background is more web focused. I spend a lot of my time planning and implementing new features,
					maintaining our existing feature set, and communicating with our clients to improve the platform.
					<div class="mt-6 flex flex-col gap-3">
						<span class="font-medium">
							💻 Currently a Software Engineer <PageLink
								isExternal={true}
								linkHref="https://monsterconnect.com/"
								linkText="@MonsterConnect"
							/>
						</span>
						<span class="font-medium">
							🗺️ Based in <PageLink
								isExternal={true}
								linkHref="https://www.google.com/maps/place/Indiana/@39.7449673,-88.6841147,7z/data=!3m1!4b1!4m5!3m4!1s0x886b50bcd9f81b1d:0x7e102fcecb32ec72!8m2!3d40.2671941!4d-86.1349019"
								linkText="Indianapolis, US"
							/>
						</span>
						<span class="font-medium">
							📄 Grab my <PageLink
								isExternal={true}
								linkHref="/resume_2025.pdf"
								linkText="Resume"
							/>
						</span>
					</div>
				</PageSection>
			</div>
		</div>
	</div>
</div>
