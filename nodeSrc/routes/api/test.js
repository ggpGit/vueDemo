const Router = require('koa-router');
const router = new Router();

let db = {
    tobi: { name: 'tobi', species: 'ferret' },
    loki: { name: 'loki', species: 'ferret' },
    jane: { name: 'jane', species: 'ferret' }
}

let pets = {
    list: (ctx) => {
        let names = Object.keys(db);
        ctx.body = 'pets: ' + names.join(', ');
    },

    show: (ctx, name) => {
        let pet = db[name];
        if(!pet) {
            return ctx.throw('cannot find that pet', 404);
        }
        ctx.body = pet.name + ' is a ' + pet.species;
    }
};

router.get('/pets', pets.list);

module.exports = router;