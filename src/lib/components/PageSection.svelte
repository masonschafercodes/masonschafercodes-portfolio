<script lang="ts">
	import type { Snippet } from 'svelte';

	type pageSectionProps = {
		sectionLabel: string;
		children: Snippet;
	};

	const { sectionLabel, children }: pageSectionProps = $props();
</script>

<div class="flex flex-col gap-2 rounded-md border border-gray-700 bg-gray-800 p-4 shadow-lg">
	<h3 class="font-header text-md text-gray-200">
		{sectionLabel}
	</h3>
	<section class="font-geist text-sm text-gray-300">
		{@render children?.()}
	</section>
</div>
