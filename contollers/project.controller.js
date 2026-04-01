//TODO : create project controller , get all projects controller, get project by id controller, update project controller, delete project controller

import {
    createProjectService,
    getAllProjectsService,
    getProjectByIdService,
    updateProjectService,
    deleteProjectService,
    closeProjectService,
} from "../services/project.service.js";

export const createProjectController = async (req, res) => {
    try {
        const projectData = req.body;
        projectData.owner = req.user._id;
        const project = await createProjectService(projectData);

        res.status(201).json({
            success: true,
            data: project,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getAllProjectsController = async (req, res) => {
    try {
        const { projects, investments } = await getAllProjectsService(
            req.user._id,
        );
        res.status(200).json({
            success: true,
            data: { projects, investments },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getProjectByIdController = async (req, res) => {
    try {
        const projectId = req.params.id;
        const project = await getProjectByIdService(projectId);
        res.status(200).json({
            success: true,
            data: project,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateProjectController = async (req, res) => {
    try {
        const projectId = req.params.id;

        const updateData = req.body;

        const project = await updateProjectService(projectId, updateData);
        res.status(200).json({
            success: true,
            data: project,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteProjectController = async (req, res) => {
    try {
        const projectId = req.params.id;
        await deleteProjectService(projectId);
        res.status(200).json({
            success: true,
            message: "Project deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const closeProjectController = async (req, res) => {
    try {
        const projectId = req.params.id;
        const project = await closeProjectService(projectId);
        res.status(200).json({
            success: true,
            data: project,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
