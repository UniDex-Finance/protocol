import { AbstractOrderFilledCancelledFetcher, orderHashUtils } from '@0x/order-utils';
import { SignedOrder } from '@0x/types';
import { BigNumber } from '@0x/utils';

import { ExchangeWrapper } from './exchange_wrapper';

export class SimpleOrderFilledCancelledFetcher implements AbstractOrderFilledCancelledFetcher {
    private readonly _exchangeWrapper: ExchangeWrapper;
    constructor(exchange: ExchangeWrapper) {
        this._exchangeWrapper = exchange;
    }
    public async getFilledTakerAmountAsync(orderHash: string): Promise<BigNumber> {
        const filledTakerAmount = new BigNumber(await this._exchangeWrapper.getTakerAssetFilledAmountAsync(orderHash));
        return filledTakerAmount;
    }
    public async isOrderCancelledAsync(signedOrder: SignedOrder): Promise<boolean> {
        const orderHash = orderHashUtils.getOrderHashHex(signedOrder);
        const isCancelled = await this._exchangeWrapper.isCancelledAsync(orderHash);
        const orderEpoch = await this._exchangeWrapper.getOrderEpochAsync(
            signedOrder.makerAddress,
            signedOrder.senderAddress,
        );
        const isCancelledByOrderEpoch = orderEpoch > signedOrder.salt;
        return isCancelled || isCancelledByOrderEpoch;
    }
}
