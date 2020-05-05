import "reflect-metadata";
import { Type } from "./type";

export namespace Injector {
	const INSTANCE_TABLE: Map<string, any> = new Map<string, any>();
	// A map where all registered injectables will be stored
	const injectables: Map<string, Type<any>> = new Map<string, Type<any>>();

	// resolving instances
	export const resolve = <T>(target: Type<any>): T  => {
		let injectable: T = INSTANCE_TABLE.get((target as any).name);
		if (injectable !== undefined) {
			return injectable;
		}
		// tokens are required dependencies, while injections are resolved tokens from the Injector
		const tokens = Reflect.getMetadata("design:paramtypes", target) || [];
		const injections = tokens.map((token: any) => Injector.resolve<any>(token));
		injectable = new target(...injections);
		INSTANCE_TABLE.set((target as any).name, injectable);
		return injectable;
	};

	// store injectables within the injector
	export const set = (target: Type<any>): void => {
		injectables.set((target as any).name, target);
	};
}
