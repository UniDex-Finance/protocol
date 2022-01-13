// tslint:disable: max-classes-per-file
import { Numberish, RevertError } from '@0x/utils';

import { ERC721Order } from '../erc721_orders';

export class OverspentEthError extends RevertError {
    constructor(ethSpent?: Numberish, msgValue?: Numberish) {
        super('OverspentEthError', 'OverspentEthError(uint256 ethSpent, uint256 msgValue)', {
            ethSpent,
            msgValue,
        });
    }
}

export class InsufficientEthError extends RevertError {
    constructor(ethAvailable?: Numberish, orderAmount?: Numberish) {
        super('InsufficientEthError', 'InsufficientEthError(uint256 ethAvailable, uint256 orderAmount)', {
            ethAvailable,
            orderAmount,
        });
    }
}

export class ERC721TokenMismatchError extends RevertError {
    constructor(token1?: string, token2?: string) {
        super('ERC721TokenMismatchError', 'ERC721TokenMismatchError(address token1, address token2)', {
            token1,
            token2,
        });
    }
}

export class ERC20TokenMismatchError extends RevertError {
    constructor(token1?: string, token2?: string) {
        super('ERC20TokenMismatchError', 'ERC20TokenMismatchError(address token1, address token2)', {
            token1,
            token2,
        });
    }
}

export class NegativeSpreadError extends RevertError {
    constructor(sellOrderAmount?: Numberish, buyOrderAmount?: Numberish) {
        super('NegativeSpreadError', 'NegativeSpreadError(uint256 sellOrderAmount, uint256 buyOrderAmount)', {
            sellOrderAmount,
            buyOrderAmount,
        });
    }
}

export class SellOrderFeesExceedSpreadError extends RevertError {
    constructor(sellOrderFees?: Numberish, spread?: Numberish) {
        super(
            'SellOrderFeesExceedSpreadError',
            'SellOrderFeesExceedSpreadError(uint256 sellOrderFees, uint256 spread)',
            {
                sellOrderFees,
                spread,
            },
        );
    }
}

export class OnlyTakerError extends RevertError {
    constructor(sender?: string, taker?: string) {
        super('OnlyTakerError', 'OnlyTakerError(address sender, address taker)', {
            sender,
            taker,
        });
    }
}

export { InvalidSignerError } from './native_orders';

export class OrderNotFillableError extends RevertError {
    constructor(maker?: string, nonce?: Numberish, orderStatus?: ERC721Order.OrderStatus) {
        super('OrderNotFillableError', 'OrderNotFillableError(address maker, uint256 nonce, uint8 orderStatus)', {
            maker,
            nonce,
            orderStatus,
        });
    }
}

export class ERC721TokenIdMismatchError extends RevertError {
    constructor(tokenId?: Numberish, orderTokenId?: Numberish) {
        super('ERC721TokenIdMismatchError', 'ERC721TokenIdMismatchError(uint256 tokenId, uint256 orderTokenId)', {
            tokenId,
            orderTokenId,
        });
    }
}

export class PropertyValidationFailedError extends RevertError {
    constructor(
        propertyValidator?: string,
        erc721Token?: string,
        erc721TokenId?: Numberish,
        propertyData?: string,
        errorData?: string,
    ) {
        super(
            'PropertyValidationFailedError',
            'PropertyValidationFailedError(address propertyValidator, address erc721Token, uint256 erc721TokenId, bytes propertyData, bytes errorData)',
            {
                propertyValidator,
                erc721Token,
                erc721TokenId,
                propertyData,
                errorData,
            },
        );
    }
}

const types = [
    OverspentEthError,
    InsufficientEthError,
    ERC721TokenMismatchError,
    ERC20TokenMismatchError,
    NegativeSpreadError,
    SellOrderFeesExceedSpreadError,
    OnlyTakerError,
    OrderNotFillableError,
    ERC721TokenIdMismatchError,
    PropertyValidationFailedError,
];

// Register the types we've defined.
for (const type of types) {
    RevertError.registerType(type);
}