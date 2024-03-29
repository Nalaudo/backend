import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/')
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '.png'
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const upload = multer({ storage }).single('file')

export default upload
