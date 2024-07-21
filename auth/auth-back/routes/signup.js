const router = require("express").Router();
const { jsonResponse } = require("../lib/jsonResponse");

router.post("/", (req, res) => {
    const { UserName, Name, Password } = req.body;

    if (!UserName || !Name || !Password) {
        return res.status(400).json(jsonResponse(400, {
            error: "Fields Are Required"
        }));
    }

    // Envía una respuesta JSON indicando que el usuario se creó correctamente
    res.status(200).json(jsonResponse(200, { message: "User Created Successfully" }));
});

module.exports = router;
