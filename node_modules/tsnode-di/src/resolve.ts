import { Injector } from "./injector";
import { Type } from "./type";

export function Resolve(injectable: Type<any>): any {
    return (target: any, propertyKey: string): any => {
        target[propertyKey] = Injector.resolve(injectable);
    };
}
