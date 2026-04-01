import Project from "../models/Project.model.js";

//Todo  : Implement getAllProjectsService, getProjectByIdService, updateProjectService, deleteProjectService

export const createProjectService = async (projectData) => {
    try {
        const project = await Project.create(projectData);

        return project;
    } catch (error) {
        throw new Error("Error creating project: " + error.message);
    }
};

export async function getAllProjectsService() {
    try {
        const projects = await Project.find().populate("owner");
        return projects;
    } catch (error) {
        throw new Error("Error fetching projects: " + error.message);
    }
}

export async function getProjectByIdService(projectId) {
    try {
        const project = await Project.findById(projectId).populate("owner");
        if (!project) {
            throw new Error("Project not found");
        }
        return project;
    } catch (error) {
        throw new Error("Error fetching project: " + error.message);
    }
}

export async function updateProjectService(projectId, updateData) {
    try {
        const project = await Project.findByIdAndUpdate(projectId, updateData, {
            new: true,
        });
        if (!project) {
            throw new Error("Project not found");
        }
        return project;
    } catch (error) {
        throw new Error("Error updating project: " + error.message);
    }
}

export async function deleteProjectService(projectId) {
    try {
        const project = await Project.findByIdAndDelete(projectId);
        if (!project) {
            throw new Error("Project not found");
        }
        return project;
    } catch (error) {
        throw new Error("Error deleting project: " + error.message);
    }
}
