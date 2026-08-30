import { getAllPhotos } from '$lib/photos';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const photos = await getAllPhotos(); // no slice
    return { photos };
};

export interface Photo {
    slug: string;
    image: string;
    thumbnail: string;
    width: number;
    height: number;
    date: Date;
}
