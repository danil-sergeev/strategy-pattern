
import {Animal} from "./core/animal";
import {IFlyBehavior, FlyWithJetpack, CanFly, CanNotFly} from "./core/fly";
import {ISoundBehavior, BarkBehavior, QuackBehavior, SpeakBehavior} from "./core/sound";


class Dog extends Animal {
    constructor(
        title: string,
        lifespan: number,
        fb: IFlyBehavior,
        sb: ISoundBehavior,
    ) {
        super(title, lifespan, fb, sb);
    }

    display(): void {
        console.info('I am a dog, I can do sounds and can not fly!');
    }
}


class Duck extends Animal {
    constructor(
        title: string,
        lifespan: number,
        fb: IFlyBehavior,
        sb: ISoundBehavior,
    ) {
        super(title, lifespan, fb, sb);
    }

    display(): void {
        console.info('I am a duck, I can quack and I can fly!');
    }
}

class Human extends Animal {
    constructor(
        title: string,
        lifespan: number,
        fb: IFlyBehavior,
        sb: ISoundBehavior,
    ) {
        super(title, lifespan, fb, sb);
    }

    display(): void {
        console.info('I am a human, I can speak and I can fly!');
    }
}

const dog = new Dog(
    'Labrador',
    15,
    new CanNotFly(),
    new BarkBehavior(),
);

const duck = new Duck(
    'Mallard',
    5,
    new CanFly(),
    new QuackBehavior(),
);

const human = new Human(
    'Danil',
    70,
    new FlyWithJetpack(),
    new SpeakBehavior(),
);


dog.performFly();
dog.performSound();

duck.performFly();
duck.performSound();

human.performFly();
human.performSound();
