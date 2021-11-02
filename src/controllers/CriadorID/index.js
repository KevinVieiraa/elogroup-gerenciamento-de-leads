export default class CriadorID {
    static id = 0;

    static novoId() {
        return this.id++;
    }
}