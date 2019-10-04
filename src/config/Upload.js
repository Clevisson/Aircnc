const multer = require("multer"); //Importa o multer
const path = require("path");

module.exports = {
  storage: multer.diskStorage({ //Define como o multer armazenará os arquivos
    destination: path.resolve(__dirname, '..', '..', 'uploads'), //Define o local de salvamento dos arquivos, no caso, no disco
    filename: (req, file, cb) => { //Define como o nome do arquivo será formado
      const ext = path.extname(file.originalname); //Extensão do arquivo
      const name = path.basename(file.originalname, ext); //Retorna o nome do arquivo sem a extensão

      cb(null, `${name}-${Date.now()}${ext}`);//Retorna o nome do arquivo
    },
  }),
};