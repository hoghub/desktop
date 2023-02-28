export interface IElectronAPI {
    test: () => void,
}

declare global {
    interface Window {
        electronAPI: IElectronAPI
    }
}