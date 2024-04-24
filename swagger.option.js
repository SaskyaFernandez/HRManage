import path from 'path';
import { fileURLToPath } from 'url';

// Fix pour « import.meta.dirname » qui ne fonctionne pas en node v20 et moins !
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Documentation : https://brikev.github.io/express-jsdoc-swagger-docs/

const swaggerOptions = {
    // Information globale sur votre API
    info: {
        version: '1.0.0',
        title: 'HRManage_api',
        description: 'Human resources management system',
        license: {
            name: 'ISC',
        },
    },
    // Répertoire racine de l'API
    // Remplacer __dirname par import.meta.dirname à partir de Node.js 21+
    baseDir: __dirname,
    // Répertoire à analyser pour générer le Swagger
    filesPattern: [
        './controllers/*.controller.js',
        './dto/*.dto.js',
        // './validators/*.validator.js'
    ],
    // Interface Swagger
    exposeSwaggerUI: true,
    swaggerUIPath: '/api-docs',
    swaggerUiOptions: {},
    // JSON Api Docs
    exposeApiDocs: true,
    apiDocsPath: '/v3/api-docs/swagger.json',
};

export default swaggerOptions;
