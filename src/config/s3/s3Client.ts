import multer from 'multer';
import { Request } from 'express';
import { extname } from 'path';

import { CONSTANTS } from '@constants';
import { multerS3Config } from './multers3.config';

function checkFileType(file: Express.Multer.File, cb: any): boolean {
  let allowedFileTypeString = '/';
  for (const extension of CONSTANTS.ALLOWED_FILE_EXTENSIONS) {
    allowedFileTypeString += `${extension}|`;
  }
  allowedFileTypeString += '/';

  const allowedFileTypeRegex = new RegExp(allowedFileTypeString);

  // Check extension and mimetype
  if (allowedFileTypeRegex.test(extname(file.originalname).toLowerCase()) && allowedFileTypeRegex.test(file.mimetype)) {
    return cb(null, true);
  }
  cb(new Error('File extension is not allowed'), false);

}

export const uploadDocument: multer.Instance = multer({
  storage: multerS3Config,
  limits: {
    fileSize: CONSTANTS.MAX_FILE_SIZE_ALLOWED,
  },
  fileFilter: (req: Request, file: Express.Multer.File, cb) => {
    checkFileType(file, cb);
  },
});
