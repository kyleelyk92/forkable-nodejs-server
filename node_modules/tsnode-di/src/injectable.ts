import { GenericClassDecorator } from "./generic-class-decorator";
import { Injector } from "./injector";
import { Type } from "./type";

export const Injectable = (): GenericClassDecorator<Type<object>> => {
    return (target: Type<object>) => {
        Injector.set(target);
    };
};
