import Pet from "../../app/pets/pet"
import PetStatus from "../../app/pets/pet-status"

const petsMock: Array<Pet> = [
    { id: '1', name: 'Tiger', category: { id: '0', name: 'cat1' }, status: PetStatus.available, photoUrls: [], tags: [] },
    { id: '2', name: 'Monkey', category: { id: '1', name: 'cat2' }, status: PetStatus.available, photoUrls: [], tags: [] },
    { id: '2', name: 'Fox', category: { id: '3', name: 'cat3' }, status: PetStatus.sold, photoUrls: [], tags: [] },
    { id: '3', name: 'Rabbit', category: { id: '4', name: 'cat4' }, status: PetStatus.sold, photoUrls: [], tags: [] },
];

export default petsMock;
