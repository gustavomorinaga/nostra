export type TOffer = {
	title: string;
	description: string;
	link: Pick<HTMLAnchorElement, 'href' | 'title'>;
	image: Pick<HTMLImageElement, 'src' | 'alt'>;
};

export { default as CardOffer } from './card-offer.layout.svelte';
