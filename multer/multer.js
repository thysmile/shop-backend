const multer = require("multer");
const path = require("path");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

const checkFileType = (file, cb) => {
  const fileType = /jpg|jpeg|png/;
  const ext = fileType.test(path.extname(file.original).toLocaleLowerCase());
  const mimeType = fileType.test(file.mimeType);
};

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACESS_KEY_KEY,
  region: "ap-southeast-2",
});

const imageUpload = multer({
  limits: 500000,
  storage: multerS3({
    s3: s3,
    bucket: "komnothet",
    acl: "public-read",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(
        null,
        `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      );
    },
  }),
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

module.exports = imageUpload;
