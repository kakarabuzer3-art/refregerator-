export type Dealer = {
  readonly name: string;
  readonly county: string;
  readonly address: string;
  readonly phone: string;
  readonly url?: string;
};

/**
 * Real stockists go here once the client confirms them. It is deliberately
 * empty: the dealers page shows an honest "contact us" state instead of
 * invented shops.
 */
export const dealers: readonly Dealer[] = [];
