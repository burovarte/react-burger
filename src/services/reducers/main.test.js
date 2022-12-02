import {mainReducer} from './main'
import * as types from '../action';

export const testMessage = {
    success: true,
    orders: [
        {
            ingredients: ['60d3463f7034a000269f45e9', '60d3463f7034a000269f45e7'],
            _id: '',
            status: 'done',
            number: 1,
            createdAt: '2021-06-23T20:11:01.403Z',
            updatedAt: '2021-06-23T20:11:01.406Z',
        },
        {
            ingredients: ['60d3463f7034a000269f45e9'],
            _id: '',
            status: 'done',
            number: 3,
            createdAt: '2021-06-23T20:13:23.654Z',
            updatedAt: '2021-06-23T20:13:23.657Z',
        },
    ],
    total: 2,
    totalToday: 2,
};
export const addedTestMessage = {
    success: true,
    orders: [
        {
            ingredients: ['60d3463f7034a000269f45e9', '60d3463f7034a000269f45e7'],
            _id: '',
            status: 'done',
            number: 1,
            createdAt: '2021-06-23T20:11:01.403Z',
            updatedAt: '2021-06-23T20:11:01.406Z',
        },
        {
            ingredients: ['60d3463f7034a000269f45e9'],
            _id: '',
            status: 'done',
            number: 3,
            createdAt: '2021-06-23T20:13:23.654Z',
            updatedAt: '2021-06-23T20:13:23.657Z',
        },
        {
            ingredients: ['60d3463f7034a000269f45e9', '60d3463f7034a000269f45e9'],
            _id: '',
            status: 'done',
            number: 4,
            createdAt: '2021-06-23T20:13:23.654Z',
            updatedAt: '2021-06-23T20:13:23.657Z',
        },
    ],
    total: 3,
    totalToday: 3,
};

export const ingrediens = [
    {
        _id: '60666c42cc7b410027a1a9b1',
        name: 'Краторная булка N-200i',
        type: 'bun',
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
        __v: 0,
    },
    {
        _id: '60666c42cc7b410027a1a9b5',
        name: 'Говяжий метеорит (отбивная)',
        type: 'main',
        proteins: 800,
        fat: 800,
        carbohydrates: 300,
        calories: 2674,
        price: 3000,
        image: 'https://code.s3.yandex.net/react/code/meat-04.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
        __v: 0,
    },
    {
        _id: '60666c42cc7b410027a1a9b6',
        name: 'Биокотлета из марсианской Магнолии',
        type: 'main',
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: 'https://code.s3.yandex.net/react/code/meat-01.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
        __v: 0,
    },
];
export const ingrediensCount = [
    {
        _id: '60666c42cc7b410027a1a9b1',
        name: 'Краторная булка N-200i',
        type: 'bun',
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
        __v: 0,
        amount: 0,
    },
    {
        _id: '60666c42cc7b410027a1a9b5',
        name: 'Говяжий метеорит (отбивная)',
        type: 'main',
        proteins: 800,
        fat: 800,
        carbohydrates: 300,
        calories: 2674,
        price: 3000,
        image: 'https://code.s3.yandex.net/react/code/meat-04.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
        __v: 0,
        amount: 0,
    },
    {
        _id: '60666c42cc7b410027a1a9b6',
        name: 'Биокотлета из марсианской Магнолии',
        type: 'main',
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: 'https://code.s3.yandex.net/react/code/meat-01.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
        __v: 0,
        amount: 0,
    },
];

export const ingrediensChange = [
    {
        _id: '60666c42cc7b410027a1a9b1',
        name: 'Краторная булка N-200i',
        type: 'bun',
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
        __v: 0,
        amount: 0,
    },
    {
        _id: '60666c42cc7b410027a1a9b5',
        name: 'Говяжий метеорит (отбивная)',
        type: 'main',
        proteins: 800,
        fat: 800,
        carbohydrates: 300,
        calories: 2674,
        price: 3000,
        image: 'https://code.s3.yandex.net/react/code/meat-04.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
        __v: 0,
        amount: 0,
    },
    {
        _id: '60666c42cc7b410027a1a9b6',
        name: 'Биокотлета из марсианской Магнолии',
        type: 'main',
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: 'https://code.s3.yandex.net/react/code/meat-01.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
        __v: 0,
        amount: 0,
    },
];

export const emailTestFirst = {
    email: 'email@mail.com',
    password: 'abcd123',
};

export const emailTestSecond = {
    email: 'dskdskld@mail.com',
    password: '123abcd',
};

describe('MainReducer', () => {
    it('Must return initialState', () => {
        expect(mainReducer(undefined, {})).toEqual({
            ingredients: [],
            burgerConstructor: [],
            ingredient: {},
            order: 0,
        });
    });

    it('Must return LOAD_INGREDIENTS', () => {
        expect(
            mainReducer(
                {
                    ingredients: [],
                    burgerConstructor: [],
                    ingredient: {},
                    order: 0,
                },
                {
                    type: types.LOAD_INGREDIENTS,
                    data: ingrediens,
                }
            )
        ).toEqual({
            ingredients: ingrediensCount,
            burgerConstructor: [],
            ingredient: {},
            order: 0,
        });

        expect(
            mainReducer(
                {
                    ingredients: ingrediensCount,
                    burgerConstructor: [],
                    ingredient: {},
                    order: 0,
                },
                {
                    type: types.LOAD_INGREDIENTS,
                    data: ingrediens,
                }
            )
        ).toEqual({
            ingredients: ingrediensCount,
            burgerConstructor: [],
            ingredient: {},
            order: 0,
        });
    });

    it('Must return LOAD_DETAILS', () => {
        expect(
            mainReducer(
                {
                    ingredients: [],
                    burgerConstructor: [],
                    ingredient: {},
                    order: 0,
                },
                {
                    type: types.LOAD_DETAILS,
                    item: ingrediensCount[0],
                }
            )
        ).toEqual({
            ingredients: [],
            burgerConstructor: [],
            ingredient: ingrediensCount[0],
            order: 0,
        });

        expect(
            mainReducer(
                {
                    ingredients: ingrediensCount,
                    burgerConstructor: [],
                    ingredient: ingrediensCount[0],
                    order: 0,
                },
                {
                    type: types.LOAD_DETAILS,
                    item: ingrediensCount[1],
                }
            )
        ).toEqual({
            ingredients: ingrediensCount,
            burgerConstructor: [],
            ingredient: ingrediensCount[1],
            order: 0,
        });
    });

    it('Must return DELETE_DETAILS', () => {
        expect(
            mainReducer(
                {
                    ingredients: [],
                    burgerConstructor: [],
                    ingredient: {},
                    order: 0,
                },
                {
                    type: types.DELETE_DETAILS,
                }
            )
        ).toEqual({
            ingredients: [],
            burgerConstructor: [],
            ingredient: {},
            order: 0,
        });

        expect(
            mainReducer(
                {
                    ingredients: ingrediensCount,
                    burgerConstructor: [],
                    ingredient: ingrediensCount[0],
                    order: 5674,
                },
                {
                    type: types.DELETE_DETAILS,
                }
            )
        ).toEqual({
            ingredients: ingrediensCount,
            burgerConstructor: [],
            ingredient: {},
            order: 0,
        });
    });

    it('Must return ORDER_NUMBER', () => {
        expect(
            mainReducer(
                {
                    ingredients: [],
                    burgerConstructor: [],
                    ingredient: {},
                    order: 0,
                },
                {
                    type: types.ORDER_NUMBER,
                    number: 3489,
                }
            )
        ).toEqual({
            ingredients: [],
            burgerConstructor: [],
            ingredient: {},
            order: 3489,
        });

        expect(
            mainReducer(
                {
                    ingredients: ingrediensCount,
                    burgerConstructor: [],
                    ingredient: ingrediensCount[0],
                    order: 5674,
                },
                {
                    type: types.ORDER_NUMBER,
                    number: 3489,
                }
            )
        ).toEqual({
            ingredients: ingrediensCount,
            burgerConstructor: [],
            ingredient: ingrediensCount[0],
            order: 3489,
        });
    });

    it('Must return ADD_INGREDIENT', () => {
        ingrediensChange[0].amount = 1;
        expect(
            mainReducer(
                {
                    ingredients: ingrediensCount,
                    burgerConstructor: [],
                    ingredient: {},
                    order: 0,
                },
                {
                    type: types.ADD_INGREDIENT,
                    item: ingrediensCount[0],
                    uniqueId: ingrediensCount[0]._id,
                    amount: 1
                }
            )
        ).toEqual({
            ingredients: ingrediensChange,
            burgerConstructor: [
                {
                    ...ingrediensCount[0],
                    uniqueId: ingrediensCount[0]._id,
                },
            ],
            ingredient: {},
            order: 0
        });

        ingrediensChange[1].amount = 1;
        ingrediensCount[0].amount = 1;
        expect(
            mainReducer(
                {
                    ingredients: ingrediensCount,
                    burgerConstructor: [
                        {
                            ...ingrediensCount[0],
                            uniqueId: ingrediensCount[0]._id,
                        },
                    ],
                    ingredient: {},
                    order: 0,
                },
                {
                    type: types.ADD_INGREDIENT,
                    item: ingrediensCount[1],
                    uniqueId: ingrediensCount[1]._id,
                    amount: 1,
                }
            )
        ).toEqual({
            ingredients: ingrediensChange,
            burgerConstructor: [
                {
                    ...ingrediensCount[0],
                    uniqueId: ingrediensCount[0]._id,
                },
                {
                    ...ingrediensCount[1],
                    uniqueId: ingrediensCount[1]._id,
                },
            ],
            ingredient: {},
            order: 0,
        });
    });

    it('Must return DELETE_INGREDIENT', () => {
        ingrediensCount[1].amount = 2;
        ingrediensChange[1].amount = 0;
        const itemForDelete = {
            ...ingrediensCount[1],
            uniqueId: 1637997988671,
        };
        expect(
            mainReducer(
                {
                    ingredients: ingrediensCount,
                    burgerConstructor: [
                        {
                            ...ingrediensCount[0],
                            uniqueId: 1637997988670,
                        },
                        {
                            ...ingrediensCount[1],
                            uniqueId: 1637997988671,
                        },
                    ],
                    ingredient: {},
                    order: 0,
                },
                {
                    type: types.DELETE_INGREDIENT,
                    item: itemForDelete,
                    id: ingrediensCount[1]._id,
                    qnt: 2,
                }
            )
        ).toEqual({
            ingredients: ingrediensChange,
            burgerConstructor: [
                {
                    ...ingrediensCount[0],
                    uniqueId: 1637997988670,
                },
            ],
            ingredient: {},
            order: 0,
        });
    });

    it('Must return CHANGE_INGREDIENT', () => {
        expect(
            mainReducer(
                {
                    ingredients: ingrediensCount,
                    burgerConstructor: [
                        {
                            ...ingrediensCount[0],
                            uniqueId: 1637997988670,
                        },
                        {
                            ...ingrediensCount[1],
                            uniqueId: 1637997988671,
                        },
                        {
                            ...ingrediensCount[2],
                            uniqueId: 1637997988672,
                        },
                    ],
                    ingredient: {},
                    order: 0,
                },
                {
                    type: types.CHANGE_INGREDIENT,
                    dragIndex: 0,
                    hoverIndex: 1,
                }
            )
        ).toEqual({
            ingredients: ingrediensCount,
            burgerConstructor: [
                {
                    ...ingrediensCount[1],
                    uniqueId: 1637997988671,
                },
                {
                    ...ingrediensCount[0],
                    uniqueId: 1637997988670,
                },
                {
                    ...ingrediensCount[2],
                    uniqueId: 1637997988672,
                },
            ],
            ingredient: {},
            order: 0,
        });
    });

    it('Must return ORDER_CLEAR', () => {
        ingrediensChange[0].amount = 0;
        ingrediensChange[1].amount = 0;
        ingrediensCount[0].amount = 1;
        ingrediensCount[1].amount = 1;
        expect(
            mainReducer(
                {
                    ingredients: ingrediensCount,
                    burgerConstructor: [
                        {
                            ...ingrediensCount[0],
                            uniqueId: 1637997988670,
                        },
                        {
                            ...ingrediensCount[1],
                            uniqueId: 1637997988671,
                        },
                    ],
                    ingredient: {},
                    amount: 0,
                },
                {
                    type: types.ORDER_CLEAR,
                }
            )
        ).toEqual({
            ingredients: ingrediensChange,
            burgerConstructor: [],
            ingredient: {},
            amount: 0,
        });
    });
});
