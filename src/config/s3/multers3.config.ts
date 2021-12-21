import { S3 } from 'aws-sdk';
import { Request } from 'express';
import { StorageEngine } from 'multer';
import multerS3 from 'multer-s3';

import { ENVIRONMENT } from '@environment';

const s3BucketOptions: S3.Types.ClientConfiguration = {
  accessKeyId: ENVIRONMENT.S3.ACCESS_KEY_ID,
  secretAccessKey: ENVIRONMENT.S3.SECRET_ACCESS_KEY,
  region: ENVIRONMENT.S3.REGION,
};

export const s3Bucket: S3 = new S3(s3BucketOptions);

export const multerS3Config: StorageEngine = multerS3({
  s3: s3Bucket,
  // acl: 'public-read',
  bucket: ENVIRONMENT.S3.BUCKET_NAME,
  metadata: (req: Request, file: Express.MulterS3.File, cb) => {
    cb(null, {
      originalName: file.originalname,
      encoding: file.encoding,
      mimeType: file.mimetype,
    });
  },
  key: (req: Request, file: Express.MulterS3.File, cb) => {
    cb(null, Date.now().toString());
  },
});
