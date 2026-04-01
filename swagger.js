import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "CrowdFunding API",
            version: "1.0.0",
            description: "API de financement collaboratif",
        },
        components: {
            securitySchemes: {
                cookieAuth: {
                    type: "apiKey",
                    in: "cookie",
                    name: "token",
                },
            },
        },
    },
    apis: ["./routes/*.js"],
};

export const swaggerSpec = swaggerJsdoc(options);
