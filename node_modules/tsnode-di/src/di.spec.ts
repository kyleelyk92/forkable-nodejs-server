import * as chai from "chai";
import { Injectable } from "./injectable";
import { Injector } from "./injector";
import { Resolve } from './resolve';

const expect = chai.expect;

@Injectable()
class A {
	private aId: number;
	constructor() {
		this.aId = Math.ceil(Math.random() * 100000);
	}
	public get id(): number {
		return this.aId;
	}
}
@Injectable()
class B {
	constructor(public a: A) { }
}
@Injectable()
class C {
    @Resolve(B)
    public b!: B;
	constructor(public a: A) { }
}

describe("DI", () => {
	beforeEach((done) => {
		done();
	});
	afterEach((done) => {
		done();
	});
	describe("Injector", () => {
		it("should not throw if Reflect.getMetadata returns undefined", () => {
			const getMetadata = Reflect.getMetadata;
			Reflect.getMetadata = (...args: any[]) => undefined;
			const a = Injector.resolve<A>(A);
			Reflect.getMetadata = getMetadata;
			expect(a).not.to.be.undefined;
		});
	});
	describe("class A", () => {
		it("should instantiate", () => {
			const a = Injector.resolve<A>(A);
			expect(a).not.to.be.undefined;
		});
	});
	describe("class B", () => {
		it("should instantiate", () => {
			const b = Injector.resolve<B>(B);
			expect(b).not.to.be.undefined;
		});
		it("should resolve an instance of class A through DI", () => {
			const b = Injector.resolve<B>(B);
			expect(b.a).not.to.be.undefined;
		});
		it("should have access to instance A's id", () => {
			const b = Injector.resolve<B>(B);
			expect(b.a.id).to.be.greaterThan(0);
			expect(b.a.id).to.be.lessThan(100001);
		});
	});
	describe("class C", () => {
		it("should instantiate", () => {
			const c = Injector.resolve<C>(C);
			expect(c).not.to.be.undefined;
		});
		it("should resolve an instance of class A through DI", () => {
			const c = Injector.resolve<C>(C);
			expect(c.a).not.to.be.undefined;
		});
		it("should have access to instance A's id", () => {
			const c = Injector.resolve<C>(C);
			expect(c.a.id).to.be.greaterThan(0);
			expect(c.a.id).to.be.lessThan(100001);
		});
		it("should resolve an instance of class B with @Resolve", () => {
			const c = Injector.resolve<C>(C);
			expect(c.b).to.be.instanceof(B);
		});
		it("should have access to instance A's id through class B", () => {
			const c = Injector.resolve<C>(C);
			expect(c.b.a.id).to.be.greaterThan(0);
			expect(c.b.a.id).to.be.lessThan(100001);
		});
		it("should resolve the same instance of A as B does", () => {
			const b = Injector.resolve<B>(B);
			const c = Injector.resolve<C>(C);
			expect(b.a.id).to.be.equal(c.a.id);
		});
	});
});
