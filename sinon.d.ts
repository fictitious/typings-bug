import "sinon";
declare module "sinon" {

    export interface SinonPromise {
        resolves(value?: any): void;
        rejects(value?: any): void;
    }

    export interface SinonStub {
        returnsPromise(): SinonPromise;
    }

    // had to add these from SinonSandbox to SinonStatic
    // 
    // no idea if it's really supposed to have those methods
    export interface SinonStatic {
        requests: SinonFakeXMLHttpRequest;
        server: SinonFakeServer;
        useFakeServer(): SinonFakeServer;
        restore(): void;
    }
}
