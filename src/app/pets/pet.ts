import PetCategory from "./pet-category";
import PetStatus from "./pet-status";
import PetTag from "./pet-tag";

export default interface Pet {
    id: string,
    name: string,
    category: PetCategory,
    photoUrls: Array<string>,
    tags: Array<PetTag>,
    status: PetStatus,
};
