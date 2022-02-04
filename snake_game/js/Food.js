class Food {
    constructor(){
        this.apples = [];
    }

    createFood() {
        for(let i = 0; i < numberOFApples; i++) {
            this.apples[i] = {
                x: HELPERS.random.getX(),
                y: HELPERS.random.getY(),
              };
        }
        return this.apples;
    }
}

this.Food = new Food();
this.food = this.Food.createFood();