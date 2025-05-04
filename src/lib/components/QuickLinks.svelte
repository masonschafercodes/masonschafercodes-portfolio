<script lang="ts">
	import PageLink from './PageLink.svelte';
</script>

<div class="flex items-center gap-4">
	<PageLink
		isExternal={true}
		linkHref="https://www.linkedin.com/in/masonschafer/"
		linkText="LinkedIn"
		classes="text-sm font-geist"
	/>
	<PageLink
		isExternal={true}
		linkHref="https://github.com/masonschafercodes"
		linkText="GitHub"
		classes="text-sm font-geist"
	/>
	<PageLink
		isExternal={true}
		linkHref="/resume_2025.pdf"
		linkText="Grab my Resume"
		classes="text-sm font-geist"
	/>
</div>
