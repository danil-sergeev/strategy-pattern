
export interface ISoundBehavior {
    makeSound: () => void;
}

export class BarkBehavior implements ISoundBehavior {
    makeSound(): void {
        console.info('I can bark! Woof-woof!');
    }

}

export class QuackBehavior implements ISoundBehavior {
    makeSound(): void {
        console.info('I can quack! Quack-Quack!')
    }
}

export class SpeakBehavior implements ISoundBehavior {
    makeSound(): void {
        console.info('I can speak! Hello!');
    }
}
