import { IDelivery, IHistoryOfOrder, IPayment, IProduct } from './../../types/Model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IOrder } from '../../types/Model'
import { RootState } from '../store'
import moment from "moment"

interface ordersState {
    order: IHistoryOfOrder
}

const initialState: ordersState = {
    order: {
        id: crypto.randomUUID(),
        orderNumber: 0,
        created: moment().format('d.MM.YYYY'),
        received: moment().format('d.MM.YYYY'),
        purchases: [],
        orders: [],
        deliveryInfo: [],
        payments: []
    }

}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrderNumber: (state, action: PayloadAction<number>) => {
            const newOrder: number = action.payload
            state.order.orderNumber = newOrder
        },
        addToOrder: (state, action: PayloadAction<IOrder>) => {
            const newOrder: IOrder = action.payload
            state.order.orders.push(newOrder)
        },
        addToPurchases: (state, action: PayloadAction<IProduct[]>) => {
            const newPurchases: IProduct[] = action.payload
            newPurchases.map(pruduct => state.order.purchases.push(pruduct))
        },
        addToDeliveryInfo: (state, action: PayloadAction<IDelivery>) => {
            const newDeliveryInfo: IDelivery = action.payload
            state.order.deliveryInfo.push(newDeliveryInfo)
        },
        addTopPayments: (state, action: PayloadAction<IPayment>) => {
            const newPayment: IPayment = action.payload
            state.order.payments.push(newPayment)
        },
        clearOrder: state => {
            state.order = {
                id: crypto.randomUUID(),
                orderNumber: 0,
                created: moment().format('d.MM.YYYY'),
                received: moment().format('d.MM.YYYY'),
                purchases: [],
                orders: [],
                deliveryInfo: [],
                payments: []
            }
        },
    }
});

export const { addToOrder, addToPurchases, addToDeliveryInfo, addTopPayments, clearOrder, addOrderNumber } = orderSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items

export default orderSlice.reducer
