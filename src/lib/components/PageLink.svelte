<script lang="ts">
	type pageLinkProps = {
		linkHref: string;
		linkText: string;
		isExternal: boolean;
		classes?: string;
	};

	const { linkHref, linkText, isExternal, classes = '' }: pageLinkProps = $props();
</script>

<a
	href={linkHref}
	target={isExternal ? '_blank' : '_self'}
	class="text-teal-400 transition-all hover:text-teal-300 hover:underline {classes}">{linkText}</a
>
