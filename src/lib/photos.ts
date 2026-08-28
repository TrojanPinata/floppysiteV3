import fs from 'node:fs/promises';
import path from 'node:path';
import exifr from 'exifr';
import { imageSize } from 'image-size';

const IMAGES_DIR = path.resolve('static/images');

export async function getAllPhotos() { 
    const filenames = (await fs.readdir(IMAGES_DIR)).filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f));

    const photos = await Promise.all(
        filenames.map(async (filename) => {
            const filePath = path.join(IMAGES_DIR, filename);
            const stats = await fs.stat(filePath);
            const exif = await exifr
                .parse(filePath, ['DateTimeOriginal', 'Orientation']) 
                .catch(() => null);

            const date = exif?.DateTimeOriginal instanceof Date ? exif.DateTimeOriginal : stats.mtime;
            const thumbBuffer = await fs.readFile(filePath);
            const { width, height } = imageSize(thumbBuffer);

            return {
                slug: path.parse(filename).name,
                image: `/images/${filename}`,
                thumbnail: `/images/${filename}`,
                width,
                height,
                date
            };
        })
    );

    return photos.sort((a, b) => b.date.getTime() - a.date.getTime());
}

export interface Photo {
    slug: string;
    image: string;
    thumbnail: string;
    width: number;
    height: number;
    date: Date;
}