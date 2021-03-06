const multer = require('multer')
const path = require('path')
const { v4: uuid } = require('uuid')

const uploadsDir = path.join(__dirname, '../../public/uploads')

const getImageFilter = (fileSize) => {
    const filter = {
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpe?g|png|svg)$/)) {
                return cb(new Error('Please upload an image'))
            }

            cb(undefined, true)
        }
    }

    if (fileSize) {
        filter.limits = {
            fileSize
        }
    }

    return filter
}

const getMulter = (dest, options) => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(uploadsDir, dest))
        },
        filename: (req, file, cb) => {
            cb(null, uuid() + path.extname(file.originalname))
        }
    })

    return multer({
        storage,
        ...options
    })
}

module.exports = {
    getMulter,
    getImageFilter
}
