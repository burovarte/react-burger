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

export const ingredientsArray = [
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
export const ingredientsArrayCount = [
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

export const ingredientsArrayChange = [
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
            constructor: [],
            ingredient: {},
            order: 0,
        });
    });

    it('Must return LOAD_INGREDIENTS', () => {
        expect(
            mainReducer(
                {
                    ingredients: [],
                    constructor: [],
                    ingredient: {},
                    order: 0,
                },
                {
                    type: types.LOAD_INGREDIENTS,
                    data: ingredientsArray,
                }
            )
        ).toEqual({
            ingredients: ingredientsArrayCount,
            constructor: [],
            ingredient: {},
            order: 0,
        });

        expect(
            mainReducer(
                {
                    ingredients: ingredientsArrayCount,
                    constructor: [],
                    ingredient: {},
                    order: 0,
                },
                {
                    type: types.LOAD_INGREDIENTS,
                    data: ingredientsArray,
                }
            )
        ).toEqual({
            ingredients: ingredientsArrayCount,
            constructor: [],
            ingredient: {},
            order: 0,
        });
    });

    it('Must return LOAD_DETAILS', () => {
        expect(
            mainReducer(
                {
                    ingredients: [],
                    constructor: [],
                    ingredient: {},
                    order: 0,
                },
                {
                    type: types.LOAD_DETAILS,
                    item: ingredientsArrayCount[0],
                }
            )
        ).toEqual({
            ingredients: [],
            constructor: [],
            ingredient: ingredientsArrayCount[0],
            order: 0,
        });

        expect(
            mainReducer(
                {
                    ingredients: ingredientsArrayCount,
                    constructor: [],
                    ingredient: ingredientsArrayCount[0],
                    order: 0,
                },
                {
                    type: types.LOAD_DETAILS,
                    item: ingredientsArrayCount[1],
                }
            )
        ).toEqual({
            ingredients: ingredientsArrayCount,
            constructor: [],
            ingredient: ingredientsArrayCount[1],
            order: 0,
        });
    });

    it('Must return DELETE_DETAILS', () => {
        expect(
            mainReducer(
                {
                    ingredients: [],
                    constructor: [],
                    ingredient: {},
                    order: 0,
                },
                {
                    type: types.DELETE_DETAILS,
                }
            )
        ).toEqual({
            ingredients: [],
            constructor: [],
            ingredient: {},
            order: 0,
        });

        expect(
            mainReducer(
                {
                    ingredients: ingredientsArrayCount,
                    constructor: [],
                    ingredient: ingredientsArrayCount[0],
                    order: 5674,
                },
                {
                    type: types.DELETE_DETAILS,
                }
            )
        ).toEqual({
            ingredients: ingredientsArrayCount,
            constructor: [],
            ingredient: {},
            order: 0,
        });
    });

    it('Must return ORDER_NUMBER', () => {
        expect(
            mainReducer(
                {
                    ingredients: [],
                    constructor: [],
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
            constructor: [],
            ingredient: {},
            order: 3489,
        });

        expect(
            mainReducer(
                {
                    ingredients: ingredientsArrayCount,
                    constructor: [],
                    ingredient: ingredientsArrayCount[0],
                    order: 5674,
                },
                {
                    type: types.ORDER_NUMBER,
                    number: 3489,
                }
            )
        ).toEqual({
            ingredients: ingredientsArrayCount,
            constructor: [],
            ingredient: ingredientsArrayCount[0],
            order: 3489,
        });
    });

    it('Must return ADD_INGREDIENT', () => {
        ingredientsArrayChange[1].amount = 0;
        expect(
            mainReducer(
                {
                    ingredients: ingredientsArrayCount,
                    constructor: [],
                    ingredient: {},
                    order: 0,
                },
                {
                    type: types.ADD_INGREDIENT,
                    item: ingredientsArrayCount[0],
                    id: ingredientsArrayCount[0]._id,
                    qnt: 1,
                    amount: ingredientsArrayCount[0].amount + ingredientsArrayChange[0].amount
                }
            )
        ).toEqual({
            ingredients: ingredientsArrayChange,
            constructor: [
                {
                    ...ingredientsArrayCount[0],
                    uniqueId: ingredientsArrayCount[0].uniqueId
                },
            ],
            ingredient: {},
            order: 0
        });

        ingredientsArrayChange[1].amount = 2;
        ingredientsArrayCount[0].amount = 1;
        expect(
            mainReducer(
                {
                    ingredients: ingredientsArrayCount,
                    constructor: [
                        {
                            ...ingredientsArrayCount[0],
                            uniqueId: ingredientsArrayCount[0]._id,
                        },
                    ],
                    ingredient: {},
                    order: 0,
                },
                {
                    type: types.ADD_INGREDIENT,
                    item: ingredientsArrayCount[1],
                    id: ingredientsArrayCount[1]._id,
                    qnt: 2,
                }
            )
        ).toEqual({
            ingredients: ingredientsArrayChange,
            constructor: [
                {
                    ...ingredientsArrayCount[0],
                    uniqueId: ingredientsArrayCount[0]._id,
                },
                {
                    ...ingredientsArrayCount[1],
                    uniqueId: ingredientsArrayCount[1]._id,
                },
            ],
            ingredient: {},
            order: 0,
        });
    });

    it('Must return DELETE_INGREDIENT', () => {
        ingredientsArrayCount[1].amount = 2;
        ingredientsArrayChange[1].amount = 0;
        const itemForDelete = {
            ...ingredientsArrayCount[1],
            uniqueId: 1637997988671,
        };
        expect(
            mainReducer(
                {
                    ingredients: ingredientsArrayCount,
                    constructor: [
                        {
                            ...ingredientsArrayCount[0],
                            uniqueId: 1637997988670,
                        },
                        {
                            ...ingredientsArrayCount[1],
                            uniqueId: 1637997988671,
                        },
                    ],
                    ingredient: {},
                    order: 0,
                },
                {
                    type: types.DELETE_INGREDIENT,
                    item: itemForDelete,
                    id: ingredientsArrayCount[1]._id,
                    qnt: 2,
                }
            )
        ).toEqual({
            ingredients: ingredientsArrayChange,
            constructor: [
                {
                    ...ingredientsArrayCount[0],
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
                    ingredients: ingredientsArrayCount,
                    constructor: [
                        {
                            ...ingredientsArrayCount[0],
                            uniqueId: 1637997988670,
                        },
                        {
                            ...ingredientsArrayCount[1],
                            uniqueId: 1637997988671,
                        },
                        {
                            ...ingredientsArrayCount[2],
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
            ingredients: ingredientsArrayCount,
            constructor: [
                {
                    ...ingredientsArrayCount[1],
                    uniqueId: 1637997988671,
                },
                {
                    ...ingredientsArrayCount[0],
                    uniqueId: 1637997988670,
                },
                {
                    ...ingredientsArrayCount[2],
                    uniqueId: 1637997988672,
                },
            ],
            ingredient: {},
            order: 0,
        });
    });

    it('Must return ORDER_CLEAR', () => {
        ingredientsArrayChange[0].amount = 0;
        ingredientsArrayChange[1].amount = 0;
        ingredientsArrayCount[0].amount = 1;
        ingredientsArrayCount[1].amount = 1;
        expect(
            mainReducer(
                {
                    ingredients: ingredientsArrayCount,
                    constructor: [
                        {
                            ...ingredientsArrayCount[0],
                            uniqueId: 1637997988670,
                        },
                        {
                            ...ingredientsArrayCount[1],
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
            ingredients: ingredientsArrayChange,
            constructor: [],
            ingredient: {},
            amount: 0,
        });
    });
});