

export interface IFlyBehavior {
    fly: () => void;
}


export class FlyWithJetpack implements IFlyBehavior {
    fly(): void {
        console.info('I can fly with a jetpack! Woooooooooo!');
    }
}

export class CanFly implements IFlyBehavior {
    fly(): void {
        console.info('I can fly! :)');
    }
}

export class CanNotFly implements IFlyBehavior {
    fly(): void {
        console.info('I can not fly! :(')
    }
}
