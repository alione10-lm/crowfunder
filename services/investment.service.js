//TODO : create investment  , get all investments, get investment by id, update investment, delete investment

import Investment from "../models/Investment.model.js";

export const createInvestmentService = async (investmentData) => {
    try {
        const investment = await Investment.create(investmentData);

        return investment;
    } catch (error) {
        throw new Error("Error creating investment: " + error.message);
    }
};

export async function getAllInvestmentsService() {
    try {
        const investments = await Investment.find()
            .populate("investor")
            .populate("project");
        return investments;
    } catch (error) {
        throw new Error("Error fetching investments: " + error.message);
    }
}

export async function getInvestmentByIdService(investmentId) {
    try {
        const investment = await Investment.findById(investmentId)
            .populate("investor")
            .populate("project");
        if (!investment) {
            throw new Error("Investment not found");
        }
        return investment;
    } catch (error) {
        throw new Error("Error fetching investment: " + error.message);
    }
}

export async function updateInvestmentService(investmentId, updateData) {
    try {
        const investment = await Investment.findByIdAndUpdate(
            investmentId,
            updateData,
            {
                new: true,
            },
        );

        if (!investment) {
            throw new Error("Investment not found");
        }

        return investment;
    } catch (error) {
        throw new Error("Error updating investment: " + error.message);
    }
}

export async function deleteInvestmentService(investmentId) {
    try {
        const investment = await Investment.findByIdAndDelete(investmentId);
        if (!investment) {
            throw new Error("Investment not found");
        }
        return investment;
    } catch (error) {
        throw new Error("Error deleting investment: " + error.message);
    }
}
