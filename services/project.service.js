import Project from "../models/Project.model.js";
import Investment from "../models/Investment.model.js";
import mongoose from "mongoose";

//Todo  : Implement getAllProjectsService, getProjectByIdService, updateProjectService, deleteProjectService

export const createProjectService = async (projectData) => {
    try {
        const project = await Project.create(projectData);

        return project;
    } catch (error) {
        throw new Error("Error creating project: " + error.message);
    }
};

export async function getAllProjectsService(userId) {
    try {
        const projects = await Project.find({ owner: userId }).populate(
            "owner",
        );

        const investments = await Investment.find({
            project: { $in: projects.map((p) => p._id) },
        });

        return { projects, investments };
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

export async function closeProjectService(projectId) {
    try {
        const project = await Project.findByIdAndUpdate(
            projectId,
            { status: "closed" },
            { new: true },
        );
        if (!project) {
            throw new Error("Project not found");
        }
        return project;
    } catch (error) {
        throw new Error("Error closing project: " + error.message);
    }
}
