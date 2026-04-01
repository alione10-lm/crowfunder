import Router from "express";
import {
    closeProjectController,
    createProjectController,
    deleteProjectController,
    getAllProjectsController,
    getProjectByIdController,
    updateProjectController,
} from "../contollers/project.controller.js";

const router = Router();

router.post("/", createProjectController);

router.get("/", getAllProjectsController);

router.get("/:id", getProjectByIdController);

router.put("/:id", updateProjectController);

router.delete("/:id", deleteProjectController);

router.put("/:id/close", closeProjectController);

export default router;
