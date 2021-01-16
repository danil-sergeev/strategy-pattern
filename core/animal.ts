import {IFlyBehavior} from "./fly";
import {ISoundBehavior} from "./sound";

export abstract class Animal {
    abstract display(): void;

    constructor(
        public title: string,
        public lifespan: number,
        private flyBehavior: IFlyBehavior,
        private soundBehavior: ISoundBehavior,
    ) {

    }

    public performSound(): void {
        this.soundBehavior.makeSound();
    }

    public performFly(): void {
        this.flyBehavior.fly();
    }

    public setFlyBehavior(fb: IFlyBehavior): void {
        this.flyBehavior = fb;
    }

    public setSoundBehavior(sb: ISoundBehavior): void {
        this.soundBehavior = sb;
    }
}
