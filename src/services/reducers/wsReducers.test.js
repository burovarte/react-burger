import { wsReducer } from './wsReducers';
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

describe('WsReducer', () => {
    it('Must return initialState', () => {
        expect(wsReducer(undefined, {})).toEqual({
            wsConnected: false,
            messages: {
                success: false,
                orders: [],
                total: 0,
                totalToday: 0,
            },
        });
    });

    it('Must return WS_CONNECTION_SUCCESS', () => {
        expect(
            wsReducer(
                {
                    wsConnected: false,
                    messages: {
                        success: false,
                        orders: [],
                        total: 0,
                        totalToday: 0,
                    },
                },
                {
                    type: types.WS_CONNECTION_SUCCESS,
                }
            )
        ).toEqual({
            wsConnected: true,
            messages: {
                success: false,
                orders: [],
                total: 0,
                totalToday: 0,
            },
        });

        expect(
            wsReducer(
                {
                    wsConnected: false,
                    error: 'some errors',
                    messages: {
                        success: false,
                        orders: [],
                        total: 0,
                        totalToday: 0,
                    },
                },
                {
                    type: types.WS_CONNECTION_SUCCESS,
                }
            )
        ).toEqual({
            wsConnected: true,
            error: undefined,
            messages: {
                success: false,
                orders: [],
                total: 0,
                totalToday: 0,
            },
        });
    });

    it('Must return WS_CONNECTION_ERROR', () => {
        expect(
            wsReducer(
                {
                    wsConnected: false,
                    messages: {
                        success: false,
                        orders: [],
                        total: 0,
                        totalToday: 0,
                    },
                },
                {
                    type: types.WS_CONNECTION_ERROR,
                    payload: 'some error',
                }
            )
        ).toEqual({
            wsConnected: false,
            error: 'some error',
            messages: {
                success: false,
                orders: [],
                total: 0,
                totalToday: 0,
            },
        });

        expect(
            wsReducer(
                {
                    wsConnected: false,
                    error: 'some errors',
                    messages: {
                        success: false,
                        orders: [],
                        total: 0,
                        totalToday: 0,
                    },
                },
                {
                    type: types.WS_CONNECTION_ERROR,
                    payload: 'other error',
                }
            )
        ).toEqual({
            wsConnected: false,
            error: 'other error',
            messages: {
                success: false,
                orders: [],
                total: 0,
                totalToday: 0,
            },
        });
    });

    it('Must return WS_CONNECTION_CLOSED', () => {
        expect(
            wsReducer(
                {
                    wsConnected: true,
                    messages: testMessage,
                },
                {
                    type: types.WS_CONNECTION_CLOSED,
                }
            )
        ).toEqual({
            wsConnected: false,
            error: undefined,
            messages: testMessage,
        });

        expect(
            wsReducer(
                {
                    wsConnected: true,
                    error: 'some errors',
                    messages: {
                        success: false,
                        orders: [],
                        total: 0,
                        totalToday: 0,
                    },
                },
                {
                    type: types.WS_CONNECTION_CLOSED,
                }
            )
        ).toEqual({
            wsConnected: false,
            error: undefined,
            messages: {
                success: false,
                orders: [],
                total: 0,
                totalToday: 0,
            },
        });
    });

    it('Must return WS_GET_MESSAGE', () => {

        expect(
            wsReducer(
                {
                    wsConnected: false,
                    messages: {
                        success: false,
                        orders: [],
                        total: 0,
                        totalToday: 0,
                    },
                },
                {
                    type: types.WS_GET_MESSAGE,
                    payload: testMessage,
                }
            )
        ).toEqual({
            wsConnected: false,
            error: undefined,
            messages: testMessage,
        });

        expect(
            wsReducer(
                {
                    wsConnected: true,
                    error: undefined,
                    messages: testMessage,
                },
                {
                    type: types.WS_GET_MESSAGE,
                    payload: addedTestMessage,
                }
            )
        ).toEqual({
            wsConnected: true,
            error: undefined,
            messages: addedTestMessage,
        });
    });
});