// Base de données en mémoire (non-persistante)
let computers = [
    { id: 1, name: "Dell XPS 15" },
    { id: 2, name: "MacBook Pro M3" },
    { id: 3, name: "Lenovo ThinkPad X1" }
];

let nextId = 4;

/**
 * Récupère tous les ordinateurs
 */
const getAllComputers = () => {
    return computers;
};

/**
 * Récupère un ordinateur par son ID
 */
const getComputerById = (id) => {
    const computer = computers.find(c => c.id === parseInt(id));
    if (!computer) {
        throw new Error(`Ordinateur avec l'ID ${id} non trouvé`);
    }
    return computer;
};

/**
 * Crée un nouvel ordinateur
 */
const createComputer = (name) => {
    if (!name || name.trim() === '') {
        throw new Error('Le nom de l\'ordinateur est requis');
    }

    const newComputer = {
        id: nextId++,
        name: name.trim()
    };

    computers.push(newComputer);
    return newComputer;
};

/**
 * Met à jour un ordinateur existant
 */
const updateComputer = (id, name) => {
    if (!name || name.trim() === '') {
        throw new Error('Le nom de l\'ordinateur est requis');
    }

    const index = computers.findIndex(c => c.id === parseInt(id));
    if (index === -1) {
        throw new Error(`Ordinateur avec l'ID ${id} non trouvé`);
    }

    computers[index].name = name.trim();
    return computers[index];
};

/**
 * Supprime un ordinateur
 */
const deleteComputer = (id) => {
    const index = computers.findIndex(c => c.id === parseInt(id));
    if (index === -1) {
        throw new Error(`Ordinateur avec l'ID ${id} non trouvé`);
    }

    const deletedComputer = computers[index];
    computers.splice(index, 1);
    return deletedComputer;
};

module.exports = {
    getAllComputers,
    getComputerById,
    createComputer,
    updateComputer,
    deleteComputer
};
