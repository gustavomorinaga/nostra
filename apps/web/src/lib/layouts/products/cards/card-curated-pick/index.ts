export type TPick = {
	handle: string;
	title: string;
	link: string;
	image: Pick<HTMLImageElement, 'src' | 'alt'>;
};

export { default as CardCuratedPick } from './card-curated-pick.layout.svelte';
