import fs from 'node:fs/promises';
import path from 'node:path';
import exifr from 'exifr';
import sharp from 'sharp';
import { imageSize } from 'image-size';

const IMAGES_DIR = path.resolve('static/pictures');

export async function getAllPhotos() { 
    const filenames = (await fs.readdir(IMAGES_DIR)).filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f));

    const photos = await Promise.all(
        filenames.map(async (filename) => {
            const filePath = path.join(IMAGES_DIR, filename);
            const stats = await fs.stat(filePath);
            const metadata = await sharp(filePath).metadata();
            const exif = metadata.exif ? await exifr.parse(metadata.exif).catch(() => null) : null;

            const date = exif?.DateTimeOriginal instanceof Date ? exif.DateTimeOriginal : stats.mtime;
            const thumbBuffer = await fs.readFile(filePath);
            const { width, height } = imageSize(thumbBuffer);

            return {
                slug: path.parse(filename).name,
                image: `/pictures/${filename}`,
                thumbnail: `/pictures/${filename}`,
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