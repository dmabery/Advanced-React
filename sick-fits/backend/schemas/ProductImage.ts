import 'dotenv/config';
import { cloudinaryImage } from "@keystone-next/cloudinary";
import { integer, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const cloudinary = {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: 'sickfits',
}

export const ProductImage = list({
    fields: {
        iamge: cloudinaryImage({
            cloudinary,
            label: 'Source'
        })
    }
})