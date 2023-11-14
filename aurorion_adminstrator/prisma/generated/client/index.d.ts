
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model Billboard
 * 
 */
export type Billboard = $Result.DefaultSelection<Prisma.$BillboardPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Size
 * 
 */
export type Size = $Result.DefaultSelection<Prisma.$SizePayload>
/**
 * Model Color
 * 
 */
export type Color = $Result.DefaultSelection<Prisma.$ColorPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model order_details
 * 
 */
export type order_details = $Result.DefaultSelection<Prisma.$order_detailsPayload>
/**
 * Model order_items
 * 
 */
export type order_items = $Result.DefaultSelection<Prisma.$order_itemsPayload>
/**
 * Model order_items_joined
 * 
 */
export type order_items_joined = $Result.DefaultSelection<Prisma.$order_items_joinedPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Stores
 * const stores = await prisma.store.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Stores
   * const stores = await prisma.store.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs>;

  /**
   * `prisma.billboard`: Exposes CRUD operations for the **Billboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Billboards
    * const billboards = await prisma.billboard.findMany()
    * ```
    */
  get billboard(): Prisma.BillboardDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.size`: Exposes CRUD operations for the **Size** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sizes
    * const sizes = await prisma.size.findMany()
    * ```
    */
  get size(): Prisma.SizeDelegate<ExtArgs>;

  /**
   * `prisma.color`: Exposes CRUD operations for the **Color** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colors
    * const colors = await prisma.color.findMany()
    * ```
    */
  get color(): Prisma.ColorDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs>;

  /**
   * `prisma.order_details`: Exposes CRUD operations for the **order_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_details
    * const order_details = await prisma.order_details.findMany()
    * ```
    */
  get order_details(): Prisma.order_detailsDelegate<ExtArgs>;

  /**
   * `prisma.order_items`: Exposes CRUD operations for the **order_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_items.findMany()
    * ```
    */
  get order_items(): Prisma.order_itemsDelegate<ExtArgs>;

  /**
   * `prisma.order_items_joined`: Exposes CRUD operations for the **order_items_joined** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items_joineds
    * const order_items_joineds = await prisma.order_items_joined.findMany()
    * ```
    */
  get order_items_joined(): Prisma.order_items_joinedDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Store: 'Store',
    Billboard: 'Billboard',
    Category: 'Category',
    Size: 'Size',
    Color: 'Color',
    Product: 'Product',
    Image: 'Image',
    Order: 'Order',
    OrderItem: 'OrderItem',
    order_details: 'order_details',
    order_items: 'order_items',
    order_items_joined: 'order_items_joined'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'store' | 'billboard' | 'category' | 'size' | 'color' | 'product' | 'image' | 'order' | 'orderItem' | 'order_details' | 'order_items' | 'order_items_joined'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>,
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      Billboard: {
        payload: Prisma.$BillboardPayload<ExtArgs>
        fields: Prisma.BillboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillboardFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillboardFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          findFirst: {
            args: Prisma.BillboardFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillboardFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          findMany: {
            args: Prisma.BillboardFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>[]
          }
          create: {
            args: Prisma.BillboardCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          createMany: {
            args: Prisma.BillboardCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BillboardDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          update: {
            args: Prisma.BillboardUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          deleteMany: {
            args: Prisma.BillboardDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BillboardUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BillboardUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          aggregate: {
            args: Prisma.BillboardAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBillboard>
          }
          groupBy: {
            args: Prisma.BillboardGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BillboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillboardCountArgs<ExtArgs>,
            result: $Utils.Optional<BillboardCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Size: {
        payload: Prisma.$SizePayload<ExtArgs>
        fields: Prisma.SizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SizeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SizeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          findFirst: {
            args: Prisma.SizeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SizeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          findMany: {
            args: Prisma.SizeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload>[]
          }
          create: {
            args: Prisma.SizeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          createMany: {
            args: Prisma.SizeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SizeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          update: {
            args: Prisma.SizeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          deleteMany: {
            args: Prisma.SizeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SizeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SizeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          aggregate: {
            args: Prisma.SizeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSize>
          }
          groupBy: {
            args: Prisma.SizeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SizeCountArgs<ExtArgs>,
            result: $Utils.Optional<SizeCountAggregateOutputType> | number
          }
        }
      }
      Color: {
        payload: Prisma.$ColorPayload<ExtArgs>
        fields: Prisma.ColorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          findFirst: {
            args: Prisma.ColorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          findMany: {
            args: Prisma.ColorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>[]
          }
          create: {
            args: Prisma.ColorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          createMany: {
            args: Prisma.ColorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ColorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          update: {
            args: Prisma.ColorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          deleteMany: {
            args: Prisma.ColorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ColorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ColorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          aggregate: {
            args: Prisma.ColorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateColor>
          }
          groupBy: {
            args: Prisma.ColorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ColorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColorCountArgs<ExtArgs>,
            result: $Utils.Optional<ColorCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>,
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      order_details: {
        payload: Prisma.$order_detailsPayload<ExtArgs>
        fields: Prisma.order_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_detailsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_detailsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          findFirst: {
            args: Prisma.order_detailsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_detailsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          findMany: {
            args: Prisma.order_detailsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>[]
          }
          create: {
            args: Prisma.order_detailsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          createMany: {
            args: Prisma.order_detailsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.order_detailsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          update: {
            args: Prisma.order_detailsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          deleteMany: {
            args: Prisma.order_detailsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.order_detailsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.order_detailsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          aggregate: {
            args: Prisma.Order_detailsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder_details>
          }
          groupBy: {
            args: Prisma.order_detailsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Order_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_detailsCountArgs<ExtArgs>,
            result: $Utils.Optional<Order_detailsCountAggregateOutputType> | number
          }
        }
      }
      order_items: {
        payload: Prisma.$order_itemsPayload<ExtArgs>
        fields: Prisma.order_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findFirst: {
            args: Prisma.order_itemsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findMany: {
            args: Prisma.order_itemsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          create: {
            args: Prisma.order_itemsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          createMany: {
            args: Prisma.order_itemsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.order_itemsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          update: {
            args: Prisma.order_itemsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          deleteMany: {
            args: Prisma.order_itemsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.order_itemsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          aggregate: {
            args: Prisma.Order_itemsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder_items>
          }
          groupBy: {
            args: Prisma.order_itemsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Order_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemsCountArgs<ExtArgs>,
            result: $Utils.Optional<Order_itemsCountAggregateOutputType> | number
          }
        }
      }
      order_items_joined: {
        payload: Prisma.$order_items_joinedPayload<ExtArgs>
        fields: Prisma.order_items_joinedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_items_joinedFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_items_joinedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_items_joinedFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_items_joinedPayload>
          }
          findFirst: {
            args: Prisma.order_items_joinedFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_items_joinedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_items_joinedFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_items_joinedPayload>
          }
          findMany: {
            args: Prisma.order_items_joinedFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_items_joinedPayload>[]
          }
          create: {
            args: Prisma.order_items_joinedCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_items_joinedPayload>
          }
          createMany: {
            args: Prisma.order_items_joinedCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.order_items_joinedDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_items_joinedPayload>
          }
          update: {
            args: Prisma.order_items_joinedUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_items_joinedPayload>
          }
          deleteMany: {
            args: Prisma.order_items_joinedDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.order_items_joinedUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.order_items_joinedUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$order_items_joinedPayload>
          }
          aggregate: {
            args: Prisma.Order_items_joinedAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder_items_joined>
          }
          groupBy: {
            args: Prisma.order_items_joinedGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Order_items_joinedGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_items_joinedCountArgs<ExtArgs>,
            result: $Utils.Optional<Order_items_joinedCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    billboards: number
    categories: number
    sizes: number
    colors: number
    products: number
    orders: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    billboards?: boolean | StoreCountOutputTypeCountBillboardsArgs
    categories?: boolean | StoreCountOutputTypeCountCategoriesArgs
    sizes?: boolean | StoreCountOutputTypeCountSizesArgs
    colors?: boolean | StoreCountOutputTypeCountColorsArgs
    products?: boolean | StoreCountOutputTypeCountProductsArgs
    orders?: boolean | StoreCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountBillboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillboardWhereInput
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SizeWhereInput
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountColorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColorWhereInput
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }



  /**
   * Count Type BillboardCountOutputType
   */

  export type BillboardCountOutputType = {
    categories: number
  }

  export type BillboardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | BillboardCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes

  /**
   * BillboardCountOutputType without action
   */
  export type BillboardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillboardCountOutputType
     */
    select?: BillboardCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BillboardCountOutputType without action
   */
  export type BillboardCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Count Type SizeCountOutputType
   */

  export type SizeCountOutputType = {
    products: number
  }

  export type SizeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | SizeCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * SizeCountOutputType without action
   */
  export type SizeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SizeCountOutputType
     */
    select?: SizeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SizeCountOutputType without action
   */
  export type SizeCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Count Type ColorCountOutputType
   */

  export type ColorCountOutputType = {
    products: number
  }

  export type ColorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ColorCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * ColorCountOutputType without action
   */
  export type ColorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorCountOutputType
     */
    select?: ColorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ColorCountOutputType without action
   */
  export type ColorCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    images: number
    orderItems: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProductCountOutputTypeCountImagesArgs
    orderItems?: boolean | ProductCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }



  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: string
    name: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: StoreCountAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    billboards?: boolean | Store$billboardsArgs<ExtArgs>
    categories?: boolean | Store$categoriesArgs<ExtArgs>
    sizes?: boolean | Store$sizesArgs<ExtArgs>
    colors?: boolean | Store$colorsArgs<ExtArgs>
    products?: boolean | Store$productsArgs<ExtArgs>
    orders?: boolean | Store$ordersArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    billboards?: boolean | Store$billboardsArgs<ExtArgs>
    categories?: boolean | Store$categoriesArgs<ExtArgs>
    sizes?: boolean | Store$sizesArgs<ExtArgs>
    colors?: boolean | Store$colorsArgs<ExtArgs>
    products?: boolean | Store$productsArgs<ExtArgs>
    orders?: boolean | Store$ordersArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      billboards: Prisma.$BillboardPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      sizes: Prisma.$SizePayload<ExtArgs>[]
      colors: Prisma.$ColorPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["store"]>
    composites: {}
  }


  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StoreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Store that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StoreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StoreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
    **/
    create<T extends StoreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StoreCreateArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Stores.
     *     @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     *     @example
     *     // Create many Stores
     *     const store = await prisma.store.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StoreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
    **/
    delete<T extends StoreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StoreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StoreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StoreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
    **/
    upsert<T extends StoreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    billboards<T extends Store$billboardsArgs<ExtArgs> = {}>(args?: Subset<T, Store$billboardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'findMany'> | Null>;

    categories<T extends Store$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Store$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    sizes<T extends Store$sizesArgs<ExtArgs> = {}>(args?: Subset<T, Store$sizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'findMany'> | Null>;

    colors<T extends Store$colorsArgs<ExtArgs> = {}>(args?: Subset<T, Store$colorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'findMany'> | Null>;

    products<T extends Store$productsArgs<ExtArgs> = {}>(args?: Subset<T, Store$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    orders<T extends Store$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Store$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Store model
   */ 
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'String'>
    readonly name: FieldRef<"Store", 'String'>
    readonly userId: FieldRef<"Store", 'String'>
    readonly createdAt: FieldRef<"Store", 'DateTime'>
    readonly updatedAt: FieldRef<"Store", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }


  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }


  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }


  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }


  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
  }


  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }


  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
  }


  /**
   * Store.billboards
   */
  export type Store$billboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    where?: BillboardWhereInput
    orderBy?: BillboardOrderByWithRelationInput | BillboardOrderByWithRelationInput[]
    cursor?: BillboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillboardScalarFieldEnum | BillboardScalarFieldEnum[]
  }


  /**
   * Store.categories
   */
  export type Store$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Store.sizes
   */
  export type Store$sizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    where?: SizeWhereInput
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    cursor?: SizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }


  /**
   * Store.colors
   */
  export type Store$colorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    where?: ColorWhereInput
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    cursor?: ColorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }


  /**
   * Store.products
   */
  export type Store$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Store.orders
   */
  export type Store$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
  }



  /**
   * Model Billboard
   */

  export type AggregateBillboard = {
    _count: BillboardCountAggregateOutputType | null
    _min: BillboardMinAggregateOutputType | null
    _max: BillboardMaxAggregateOutputType | null
  }

  export type BillboardMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    label: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillboardMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    label: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillboardCountAggregateOutputType = {
    id: number
    storeId: number
    label: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BillboardMinAggregateInputType = {
    id?: true
    storeId?: true
    label?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillboardMaxAggregateInputType = {
    id?: true
    storeId?: true
    label?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillboardCountAggregateInputType = {
    id?: true
    storeId?: true
    label?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BillboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Billboard to aggregate.
     */
    where?: BillboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billboards to fetch.
     */
    orderBy?: BillboardOrderByWithRelationInput | BillboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Billboards
    **/
    _count?: true | BillboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillboardMaxAggregateInputType
  }

  export type GetBillboardAggregateType<T extends BillboardAggregateArgs> = {
        [P in keyof T & keyof AggregateBillboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillboard[P]>
      : GetScalarType<T[P], AggregateBillboard[P]>
  }




  export type BillboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillboardWhereInput
    orderBy?: BillboardOrderByWithAggregationInput | BillboardOrderByWithAggregationInput[]
    by: BillboardScalarFieldEnum[] | BillboardScalarFieldEnum
    having?: BillboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillboardCountAggregateInputType | true
    _min?: BillboardMinAggregateInputType
    _max?: BillboardMaxAggregateInputType
  }

  export type BillboardGroupByOutputType = {
    id: string
    storeId: string
    label: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    _count: BillboardCountAggregateOutputType | null
    _min: BillboardMinAggregateOutputType | null
    _max: BillboardMaxAggregateOutputType | null
  }

  type GetBillboardGroupByPayload<T extends BillboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillboardGroupByOutputType[P]>
            : GetScalarType<T[P], BillboardGroupByOutputType[P]>
        }
      >
    >


  export type BillboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    label?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    categories?: boolean | Billboard$categoriesArgs<ExtArgs>
    _count?: boolean | BillboardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billboard"]>

  export type BillboardSelectScalar = {
    id?: boolean
    storeId?: boolean
    label?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BillboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    categories?: boolean | Billboard$categoriesArgs<ExtArgs>
    _count?: boolean | BillboardCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BillboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Billboard"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      categories: Prisma.$CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      label: string
      imageUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["billboard"]>
    composites: {}
  }


  type BillboardGetPayload<S extends boolean | null | undefined | BillboardDefaultArgs> = $Result.GetResult<Prisma.$BillboardPayload, S>

  type BillboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BillboardFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BillboardCountAggregateInputType | true
    }

  export interface BillboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Billboard'], meta: { name: 'Billboard' } }
    /**
     * Find zero or one Billboard that matches the filter.
     * @param {BillboardFindUniqueArgs} args - Arguments to find a Billboard
     * @example
     * // Get one Billboard
     * const billboard = await prisma.billboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BillboardFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BillboardFindUniqueArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Billboard that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BillboardFindUniqueOrThrowArgs} args - Arguments to find a Billboard
     * @example
     * // Get one Billboard
     * const billboard = await prisma.billboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BillboardFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BillboardFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Billboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardFindFirstArgs} args - Arguments to find a Billboard
     * @example
     * // Get one Billboard
     * const billboard = await prisma.billboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BillboardFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BillboardFindFirstArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Billboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardFindFirstOrThrowArgs} args - Arguments to find a Billboard
     * @example
     * // Get one Billboard
     * const billboard = await prisma.billboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BillboardFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BillboardFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Billboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Billboards
     * const billboards = await prisma.billboard.findMany()
     * 
     * // Get first 10 Billboards
     * const billboards = await prisma.billboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billboardWithIdOnly = await prisma.billboard.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BillboardFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BillboardFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Billboard.
     * @param {BillboardCreateArgs} args - Arguments to create a Billboard.
     * @example
     * // Create one Billboard
     * const Billboard = await prisma.billboard.create({
     *   data: {
     *     // ... data to create a Billboard
     *   }
     * })
     * 
    **/
    create<T extends BillboardCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BillboardCreateArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Billboards.
     *     @param {BillboardCreateManyArgs} args - Arguments to create many Billboards.
     *     @example
     *     // Create many Billboards
     *     const billboard = await prisma.billboard.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BillboardCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BillboardCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Billboard.
     * @param {BillboardDeleteArgs} args - Arguments to delete one Billboard.
     * @example
     * // Delete one Billboard
     * const Billboard = await prisma.billboard.delete({
     *   where: {
     *     // ... filter to delete one Billboard
     *   }
     * })
     * 
    **/
    delete<T extends BillboardDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BillboardDeleteArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Billboard.
     * @param {BillboardUpdateArgs} args - Arguments to update one Billboard.
     * @example
     * // Update one Billboard
     * const billboard = await prisma.billboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BillboardUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BillboardUpdateArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Billboards.
     * @param {BillboardDeleteManyArgs} args - Arguments to filter Billboards to delete.
     * @example
     * // Delete a few Billboards
     * const { count } = await prisma.billboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BillboardDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BillboardDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Billboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Billboards
     * const billboard = await prisma.billboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BillboardUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BillboardUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Billboard.
     * @param {BillboardUpsertArgs} args - Arguments to update or create a Billboard.
     * @example
     * // Update or create a Billboard
     * const billboard = await prisma.billboard.upsert({
     *   create: {
     *     // ... data to create a Billboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Billboard we want to update
     *   }
     * })
    **/
    upsert<T extends BillboardUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BillboardUpsertArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Billboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardCountArgs} args - Arguments to filter Billboards to count.
     * @example
     * // Count the number of Billboards
     * const count = await prisma.billboard.count({
     *   where: {
     *     // ... the filter for the Billboards we want to count
     *   }
     * })
    **/
    count<T extends BillboardCountArgs>(
      args?: Subset<T, BillboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Billboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillboardAggregateArgs>(args: Subset<T, BillboardAggregateArgs>): Prisma.PrismaPromise<GetBillboardAggregateType<T>>

    /**
     * Group by Billboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BillboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillboardGroupByArgs['orderBy'] }
        : { orderBy?: BillboardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BillboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Billboard model
   */
  readonly fields: BillboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Billboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    categories<T extends Billboard$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Billboard$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Billboard model
   */ 
  interface BillboardFieldRefs {
    readonly id: FieldRef<"Billboard", 'String'>
    readonly storeId: FieldRef<"Billboard", 'String'>
    readonly label: FieldRef<"Billboard", 'String'>
    readonly imageUrl: FieldRef<"Billboard", 'String'>
    readonly createdAt: FieldRef<"Billboard", 'DateTime'>
    readonly updatedAt: FieldRef<"Billboard", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Billboard findUnique
   */
  export type BillboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboard to fetch.
     */
    where: BillboardWhereUniqueInput
  }


  /**
   * Billboard findUniqueOrThrow
   */
  export type BillboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboard to fetch.
     */
    where: BillboardWhereUniqueInput
  }


  /**
   * Billboard findFirst
   */
  export type BillboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboard to fetch.
     */
    where?: BillboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billboards to fetch.
     */
    orderBy?: BillboardOrderByWithRelationInput | BillboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Billboards.
     */
    cursor?: BillboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Billboards.
     */
    distinct?: BillboardScalarFieldEnum | BillboardScalarFieldEnum[]
  }


  /**
   * Billboard findFirstOrThrow
   */
  export type BillboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboard to fetch.
     */
    where?: BillboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billboards to fetch.
     */
    orderBy?: BillboardOrderByWithRelationInput | BillboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Billboards.
     */
    cursor?: BillboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Billboards.
     */
    distinct?: BillboardScalarFieldEnum | BillboardScalarFieldEnum[]
  }


  /**
   * Billboard findMany
   */
  export type BillboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboards to fetch.
     */
    where?: BillboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billboards to fetch.
     */
    orderBy?: BillboardOrderByWithRelationInput | BillboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Billboards.
     */
    cursor?: BillboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billboards.
     */
    skip?: number
    distinct?: BillboardScalarFieldEnum | BillboardScalarFieldEnum[]
  }


  /**
   * Billboard create
   */
  export type BillboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * The data needed to create a Billboard.
     */
    data: XOR<BillboardCreateInput, BillboardUncheckedCreateInput>
  }


  /**
   * Billboard createMany
   */
  export type BillboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Billboards.
     */
    data: BillboardCreateManyInput | BillboardCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Billboard update
   */
  export type BillboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * The data needed to update a Billboard.
     */
    data: XOR<BillboardUpdateInput, BillboardUncheckedUpdateInput>
    /**
     * Choose, which Billboard to update.
     */
    where: BillboardWhereUniqueInput
  }


  /**
   * Billboard updateMany
   */
  export type BillboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Billboards.
     */
    data: XOR<BillboardUpdateManyMutationInput, BillboardUncheckedUpdateManyInput>
    /**
     * Filter which Billboards to update
     */
    where?: BillboardWhereInput
  }


  /**
   * Billboard upsert
   */
  export type BillboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * The filter to search for the Billboard to update in case it exists.
     */
    where: BillboardWhereUniqueInput
    /**
     * In case the Billboard found by the `where` argument doesn't exist, create a new Billboard with this data.
     */
    create: XOR<BillboardCreateInput, BillboardUncheckedCreateInput>
    /**
     * In case the Billboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillboardUpdateInput, BillboardUncheckedUpdateInput>
  }


  /**
   * Billboard delete
   */
  export type BillboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter which Billboard to delete.
     */
    where: BillboardWhereUniqueInput
  }


  /**
   * Billboard deleteMany
   */
  export type BillboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Billboards to delete
     */
    where?: BillboardWhereInput
  }


  /**
   * Billboard.categories
   */
  export type Billboard$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Billboard without action
   */
  export type BillboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    billboardId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    billboardId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    storeId: number
    billboardId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    storeId?: true
    billboardId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    storeId?: true
    billboardId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    storeId?: true
    billboardId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    storeId: string
    billboardId: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    billboardId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    billboard?: boolean | BillboardDefaultArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    storeId?: boolean
    billboardId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    billboard?: boolean | BillboardDefaultArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      billboard: Prisma.$BillboardPayload<ExtArgs>
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      billboardId: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    billboard<T extends BillboardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillboardDefaultArgs<ExtArgs>>): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly storeId: FieldRef<"Category", 'String'>
    readonly billboardId: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Size
   */

  export type AggregateSize = {
    _count: SizeCountAggregateOutputType | null
    _min: SizeMinAggregateOutputType | null
    _max: SizeMaxAggregateOutputType | null
  }

  export type SizeMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    name: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SizeMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    name: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SizeCountAggregateOutputType = {
    id: number
    storeId: number
    name: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SizeMinAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SizeMaxAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SizeCountAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Size to aggregate.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sizes
    **/
    _count?: true | SizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SizeMaxAggregateInputType
  }

  export type GetSizeAggregateType<T extends SizeAggregateArgs> = {
        [P in keyof T & keyof AggregateSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSize[P]>
      : GetScalarType<T[P], AggregateSize[P]>
  }




  export type SizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SizeWhereInput
    orderBy?: SizeOrderByWithAggregationInput | SizeOrderByWithAggregationInput[]
    by: SizeScalarFieldEnum[] | SizeScalarFieldEnum
    having?: SizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SizeCountAggregateInputType | true
    _min?: SizeMinAggregateInputType
    _max?: SizeMaxAggregateInputType
  }

  export type SizeGroupByOutputType = {
    id: string
    storeId: string
    name: string
    value: string
    createdAt: Date
    updatedAt: Date
    _count: SizeCountAggregateOutputType | null
    _min: SizeMinAggregateOutputType | null
    _max: SizeMaxAggregateOutputType | null
  }

  type GetSizeGroupByPayload<T extends SizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SizeGroupByOutputType[P]>
            : GetScalarType<T[P], SizeGroupByOutputType[P]>
        }
      >
    >


  export type SizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    name?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    products?: boolean | Size$productsArgs<ExtArgs>
    _count?: boolean | SizeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["size"]>

  export type SizeSelectScalar = {
    id?: boolean
    storeId?: boolean
    name?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    products?: boolean | Size$productsArgs<ExtArgs>
    _count?: boolean | SizeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Size"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      name: string
      value: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["size"]>
    composites: {}
  }


  type SizeGetPayload<S extends boolean | null | undefined | SizeDefaultArgs> = $Result.GetResult<Prisma.$SizePayload, S>

  type SizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SizeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SizeCountAggregateInputType | true
    }

  export interface SizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Size'], meta: { name: 'Size' } }
    /**
     * Find zero or one Size that matches the filter.
     * @param {SizeFindUniqueArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SizeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SizeFindUniqueArgs<ExtArgs>>
    ): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Size that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SizeFindUniqueOrThrowArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SizeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SizeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Size that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindFirstArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SizeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SizeFindFirstArgs<ExtArgs>>
    ): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Size that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindFirstOrThrowArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SizeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SizeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sizes
     * const sizes = await prisma.size.findMany()
     * 
     * // Get first 10 Sizes
     * const sizes = await prisma.size.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sizeWithIdOnly = await prisma.size.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SizeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SizeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Size.
     * @param {SizeCreateArgs} args - Arguments to create a Size.
     * @example
     * // Create one Size
     * const Size = await prisma.size.create({
     *   data: {
     *     // ... data to create a Size
     *   }
     * })
     * 
    **/
    create<T extends SizeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SizeCreateArgs<ExtArgs>>
    ): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sizes.
     *     @param {SizeCreateManyArgs} args - Arguments to create many Sizes.
     *     @example
     *     // Create many Sizes
     *     const size = await prisma.size.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SizeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SizeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Size.
     * @param {SizeDeleteArgs} args - Arguments to delete one Size.
     * @example
     * // Delete one Size
     * const Size = await prisma.size.delete({
     *   where: {
     *     // ... filter to delete one Size
     *   }
     * })
     * 
    **/
    delete<T extends SizeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SizeDeleteArgs<ExtArgs>>
    ): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Size.
     * @param {SizeUpdateArgs} args - Arguments to update one Size.
     * @example
     * // Update one Size
     * const size = await prisma.size.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SizeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SizeUpdateArgs<ExtArgs>>
    ): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sizes.
     * @param {SizeDeleteManyArgs} args - Arguments to filter Sizes to delete.
     * @example
     * // Delete a few Sizes
     * const { count } = await prisma.size.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SizeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SizeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sizes
     * const size = await prisma.size.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SizeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SizeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Size.
     * @param {SizeUpsertArgs} args - Arguments to update or create a Size.
     * @example
     * // Update or create a Size
     * const size = await prisma.size.upsert({
     *   create: {
     *     // ... data to create a Size
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Size we want to update
     *   }
     * })
    **/
    upsert<T extends SizeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SizeUpsertArgs<ExtArgs>>
    ): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeCountArgs} args - Arguments to filter Sizes to count.
     * @example
     * // Count the number of Sizes
     * const count = await prisma.size.count({
     *   where: {
     *     // ... the filter for the Sizes we want to count
     *   }
     * })
    **/
    count<T extends SizeCountArgs>(
      args?: Subset<T, SizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Size.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SizeAggregateArgs>(args: Subset<T, SizeAggregateArgs>): Prisma.PrismaPromise<GetSizeAggregateType<T>>

    /**
     * Group by Size.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SizeGroupByArgs['orderBy'] }
        : { orderBy?: SizeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Size model
   */
  readonly fields: SizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Size.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    products<T extends Size$productsArgs<ExtArgs> = {}>(args?: Subset<T, Size$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Size model
   */ 
  interface SizeFieldRefs {
    readonly id: FieldRef<"Size", 'String'>
    readonly storeId: FieldRef<"Size", 'String'>
    readonly name: FieldRef<"Size", 'String'>
    readonly value: FieldRef<"Size", 'String'>
    readonly createdAt: FieldRef<"Size", 'DateTime'>
    readonly updatedAt: FieldRef<"Size", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Size findUnique
   */
  export type SizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where: SizeWhereUniqueInput
  }


  /**
   * Size findUniqueOrThrow
   */
  export type SizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where: SizeWhereUniqueInput
  }


  /**
   * Size findFirst
   */
  export type SizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sizes.
     */
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }


  /**
   * Size findFirstOrThrow
   */
  export type SizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sizes.
     */
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }


  /**
   * Size findMany
   */
  export type SizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Sizes to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }


  /**
   * Size create
   */
  export type SizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The data needed to create a Size.
     */
    data: XOR<SizeCreateInput, SizeUncheckedCreateInput>
  }


  /**
   * Size createMany
   */
  export type SizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sizes.
     */
    data: SizeCreateManyInput | SizeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Size update
   */
  export type SizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The data needed to update a Size.
     */
    data: XOR<SizeUpdateInput, SizeUncheckedUpdateInput>
    /**
     * Choose, which Size to update.
     */
    where: SizeWhereUniqueInput
  }


  /**
   * Size updateMany
   */
  export type SizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sizes.
     */
    data: XOR<SizeUpdateManyMutationInput, SizeUncheckedUpdateManyInput>
    /**
     * Filter which Sizes to update
     */
    where?: SizeWhereInput
  }


  /**
   * Size upsert
   */
  export type SizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The filter to search for the Size to update in case it exists.
     */
    where: SizeWhereUniqueInput
    /**
     * In case the Size found by the `where` argument doesn't exist, create a new Size with this data.
     */
    create: XOR<SizeCreateInput, SizeUncheckedCreateInput>
    /**
     * In case the Size was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SizeUpdateInput, SizeUncheckedUpdateInput>
  }


  /**
   * Size delete
   */
  export type SizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter which Size to delete.
     */
    where: SizeWhereUniqueInput
  }


  /**
   * Size deleteMany
   */
  export type SizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sizes to delete
     */
    where?: SizeWhereInput
  }


  /**
   * Size.products
   */
  export type Size$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Size without action
   */
  export type SizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SizeInclude<ExtArgs> | null
  }



  /**
   * Model Color
   */

  export type AggregateColor = {
    _count: ColorCountAggregateOutputType | null
    _min: ColorMinAggregateOutputType | null
    _max: ColorMaxAggregateOutputType | null
  }

  export type ColorMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    name: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ColorMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    name: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ColorCountAggregateOutputType = {
    id: number
    storeId: number
    name: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ColorMinAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ColorMaxAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ColorCountAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ColorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Color to aggregate.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colors
    **/
    _count?: true | ColorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColorMaxAggregateInputType
  }

  export type GetColorAggregateType<T extends ColorAggregateArgs> = {
        [P in keyof T & keyof AggregateColor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColor[P]>
      : GetScalarType<T[P], AggregateColor[P]>
  }




  export type ColorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColorWhereInput
    orderBy?: ColorOrderByWithAggregationInput | ColorOrderByWithAggregationInput[]
    by: ColorScalarFieldEnum[] | ColorScalarFieldEnum
    having?: ColorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColorCountAggregateInputType | true
    _min?: ColorMinAggregateInputType
    _max?: ColorMaxAggregateInputType
  }

  export type ColorGroupByOutputType = {
    id: string
    storeId: string
    name: string
    value: string
    createdAt: Date
    updatedAt: Date
    _count: ColorCountAggregateOutputType | null
    _min: ColorMinAggregateOutputType | null
    _max: ColorMaxAggregateOutputType | null
  }

  type GetColorGroupByPayload<T extends ColorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColorGroupByOutputType[P]>
            : GetScalarType<T[P], ColorGroupByOutputType[P]>
        }
      >
    >


  export type ColorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    name?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    products?: boolean | Color$productsArgs<ExtArgs>
    _count?: boolean | ColorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["color"]>

  export type ColorSelectScalar = {
    id?: boolean
    storeId?: boolean
    name?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ColorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    products?: boolean | Color$productsArgs<ExtArgs>
    _count?: boolean | ColorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ColorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Color"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      name: string
      value: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["color"]>
    composites: {}
  }


  type ColorGetPayload<S extends boolean | null | undefined | ColorDefaultArgs> = $Result.GetResult<Prisma.$ColorPayload, S>

  type ColorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ColorFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ColorCountAggregateInputType | true
    }

  export interface ColorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Color'], meta: { name: 'Color' } }
    /**
     * Find zero or one Color that matches the filter.
     * @param {ColorFindUniqueArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ColorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ColorFindUniqueArgs<ExtArgs>>
    ): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Color that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ColorFindUniqueOrThrowArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ColorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ColorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Color that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindFirstArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ColorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ColorFindFirstArgs<ExtArgs>>
    ): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Color that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindFirstOrThrowArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ColorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ColorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Colors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colors
     * const colors = await prisma.color.findMany()
     * 
     * // Get first 10 Colors
     * const colors = await prisma.color.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colorWithIdOnly = await prisma.color.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ColorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ColorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Color.
     * @param {ColorCreateArgs} args - Arguments to create a Color.
     * @example
     * // Create one Color
     * const Color = await prisma.color.create({
     *   data: {
     *     // ... data to create a Color
     *   }
     * })
     * 
    **/
    create<T extends ColorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ColorCreateArgs<ExtArgs>>
    ): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Colors.
     *     @param {ColorCreateManyArgs} args - Arguments to create many Colors.
     *     @example
     *     // Create many Colors
     *     const color = await prisma.color.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ColorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ColorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Color.
     * @param {ColorDeleteArgs} args - Arguments to delete one Color.
     * @example
     * // Delete one Color
     * const Color = await prisma.color.delete({
     *   where: {
     *     // ... filter to delete one Color
     *   }
     * })
     * 
    **/
    delete<T extends ColorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ColorDeleteArgs<ExtArgs>>
    ): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Color.
     * @param {ColorUpdateArgs} args - Arguments to update one Color.
     * @example
     * // Update one Color
     * const color = await prisma.color.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ColorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ColorUpdateArgs<ExtArgs>>
    ): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Colors.
     * @param {ColorDeleteManyArgs} args - Arguments to filter Colors to delete.
     * @example
     * // Delete a few Colors
     * const { count } = await prisma.color.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ColorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ColorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colors
     * const color = await prisma.color.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ColorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ColorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Color.
     * @param {ColorUpsertArgs} args - Arguments to update or create a Color.
     * @example
     * // Update or create a Color
     * const color = await prisma.color.upsert({
     *   create: {
     *     // ... data to create a Color
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Color we want to update
     *   }
     * })
    **/
    upsert<T extends ColorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ColorUpsertArgs<ExtArgs>>
    ): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorCountArgs} args - Arguments to filter Colors to count.
     * @example
     * // Count the number of Colors
     * const count = await prisma.color.count({
     *   where: {
     *     // ... the filter for the Colors we want to count
     *   }
     * })
    **/
    count<T extends ColorCountArgs>(
      args?: Subset<T, ColorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Color.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ColorAggregateArgs>(args: Subset<T, ColorAggregateArgs>): Prisma.PrismaPromise<GetColorAggregateType<T>>

    /**
     * Group by Color.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ColorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColorGroupByArgs['orderBy'] }
        : { orderBy?: ColorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ColorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Color model
   */
  readonly fields: ColorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Color.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    products<T extends Color$productsArgs<ExtArgs> = {}>(args?: Subset<T, Color$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Color model
   */ 
  interface ColorFieldRefs {
    readonly id: FieldRef<"Color", 'String'>
    readonly storeId: FieldRef<"Color", 'String'>
    readonly name: FieldRef<"Color", 'String'>
    readonly value: FieldRef<"Color", 'String'>
    readonly createdAt: FieldRef<"Color", 'DateTime'>
    readonly updatedAt: FieldRef<"Color", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Color findUnique
   */
  export type ColorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where: ColorWhereUniqueInput
  }


  /**
   * Color findUniqueOrThrow
   */
  export type ColorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where: ColorWhereUniqueInput
  }


  /**
   * Color findFirst
   */
  export type ColorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colors.
     */
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }


  /**
   * Color findFirstOrThrow
   */
  export type ColorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colors.
     */
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }


  /**
   * Color findMany
   */
  export type ColorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Colors to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }


  /**
   * Color create
   */
  export type ColorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * The data needed to create a Color.
     */
    data: XOR<ColorCreateInput, ColorUncheckedCreateInput>
  }


  /**
   * Color createMany
   */
  export type ColorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colors.
     */
    data: ColorCreateManyInput | ColorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Color update
   */
  export type ColorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * The data needed to update a Color.
     */
    data: XOR<ColorUpdateInput, ColorUncheckedUpdateInput>
    /**
     * Choose, which Color to update.
     */
    where: ColorWhereUniqueInput
  }


  /**
   * Color updateMany
   */
  export type ColorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colors.
     */
    data: XOR<ColorUpdateManyMutationInput, ColorUncheckedUpdateManyInput>
    /**
     * Filter which Colors to update
     */
    where?: ColorWhereInput
  }


  /**
   * Color upsert
   */
  export type ColorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * The filter to search for the Color to update in case it exists.
     */
    where: ColorWhereUniqueInput
    /**
     * In case the Color found by the `where` argument doesn't exist, create a new Color with this data.
     */
    create: XOR<ColorCreateInput, ColorUncheckedCreateInput>
    /**
     * In case the Color was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColorUpdateInput, ColorUncheckedUpdateInput>
  }


  /**
   * Color delete
   */
  export type ColorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter which Color to delete.
     */
    where: ColorWhereUniqueInput
  }


  /**
   * Color deleteMany
   */
  export type ColorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colors to delete
     */
    where?: ColorWhereInput
  }


  /**
   * Color.products
   */
  export type Color$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Color without action
   */
  export type ColorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ColorInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    price: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    categoryId: string | null
    name: string | null
    price: Decimal | null
    isFeatured: boolean | null
    isArchived: boolean | null
    sizeId: string | null
    colorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    categoryId: string | null
    name: string | null
    price: Decimal | null
    isFeatured: boolean | null
    isArchived: boolean | null
    sizeId: string | null
    colorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    storeId: number
    categoryId: number
    name: number
    price: number
    isFeatured: number
    isArchived: number
    sizeId: number
    colorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    storeId?: true
    categoryId?: true
    name?: true
    price?: true
    isFeatured?: true
    isArchived?: true
    sizeId?: true
    colorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    storeId?: true
    categoryId?: true
    name?: true
    price?: true
    isFeatured?: true
    isArchived?: true
    sizeId?: true
    colorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    storeId?: true
    categoryId?: true
    name?: true
    price?: true
    isFeatured?: true
    isArchived?: true
    sizeId?: true
    colorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    storeId: string
    categoryId: string
    name: string
    price: Decimal
    isFeatured: boolean
    isArchived: boolean
    sizeId: string
    colorId: string
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    categoryId?: boolean
    name?: boolean
    price?: boolean
    isFeatured?: boolean
    isArchived?: boolean
    sizeId?: boolean
    colorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    size?: boolean | SizeDefaultArgs<ExtArgs>
    color?: boolean | ColorDefaultArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    storeId?: boolean
    categoryId?: boolean
    name?: boolean
    price?: boolean
    isFeatured?: boolean
    isArchived?: boolean
    sizeId?: boolean
    colorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    size?: boolean | SizeDefaultArgs<ExtArgs>
    color?: boolean | ColorDefaultArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      size: Prisma.$SizePayload<ExtArgs>
      color: Prisma.$ColorPayload<ExtArgs>
      images: Prisma.$ImagePayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      categoryId: string
      name: string
      price: Prisma.Decimal
      isFeatured: boolean
      isArchived: boolean
      sizeId: string
      colorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    size<T extends SizeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SizeDefaultArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    color<T extends ColorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColorDefaultArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    images<T extends Product$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany'> | Null>;

    orderItems<T extends Product$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly storeId: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly isFeatured: FieldRef<"Product", 'Boolean'>
    readonly isArchived: FieldRef<"Product", 'Boolean'>
    readonly sizeId: FieldRef<"Product", 'String'>
    readonly colorId: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.images
   */
  export type Product$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Product.orderItems
   */
  export type Product$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    productId: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    productId: string
    url: string
    createdAt: Date
    updatedAt: Date
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    productId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      url: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }


  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Image that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageCreateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Images.
     *     @param {ImageCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const image = await prisma.image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Image model
   */ 
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly productId: FieldRef<"Image", 'String'>
    readonly url: FieldRef<"Image", 'String'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
    readonly updatedAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }


  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
  }


  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }


  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
  }


  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
  }



  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    isPaid: boolean | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updated: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    isPaid: boolean | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updated: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    storeId: number
    isPaid: number
    phone: number
    address: number
    createdAt: number
    updated: number
    _all: number
  }


  export type OrderMinAggregateInputType = {
    id?: true
    storeId?: true
    isPaid?: true
    phone?: true
    address?: true
    createdAt?: true
    updated?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    storeId?: true
    isPaid?: true
    phone?: true
    address?: true
    createdAt?: true
    updated?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    storeId?: true
    isPaid?: true
    phone?: true
    address?: true
    createdAt?: true
    updated?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    storeId: string
    isPaid: boolean
    phone: string
    address: string
    createdAt: Date
    updated: Date
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    isPaid?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updated?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    storeId?: boolean
    isPaid?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updated?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      isPaid: boolean
      phone: string
      address: string
      createdAt: Date
      updated: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }


  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly storeId: FieldRef<"Order", 'String'>
    readonly isPaid: FieldRef<"Order", 'Boolean'>
    readonly phone: FieldRef<"Order", 'String'>
    readonly address: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updated: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }


  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
  }



  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    _all: number
  }


  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    productId: string
    _count: OrderItemCountAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
  }

  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      productId: string
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }


  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OrderItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
    **/
    create<T extends OrderItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OrderItems.
     *     @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     *     @example
     *     // Create many OrderItems
     *     const orderItem = await prisma.orderItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
    **/
    delete<T extends OrderItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
    **/
    upsert<T extends OrderItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OrderItem model
   */ 
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly productId: FieldRef<"OrderItem", 'String'>
  }
    

  // Custom InputTypes

  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }


  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }


  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
  }



  /**
   * Model order_details
   */

  export type AggregateOrder_details = {
    _count: Order_detailsCountAggregateOutputType | null
    _avg: Order_detailsAvgAggregateOutputType | null
    _sum: Order_detailsSumAggregateOutputType | null
    _min: Order_detailsMinAggregateOutputType | null
    _max: Order_detailsMaxAggregateOutputType | null
  }

  export type Order_detailsAvgAggregateOutputType = {
    total_items: number | null
    order_total: Decimal | null
  }

  export type Order_detailsSumAggregateOutputType = {
    total_items: number | null
    order_total: Decimal | null
  }

  export type Order_detailsMinAggregateOutputType = {
    confirmation_id: string | null
    order_time: Date | null
    total_items: number | null
    order_total: Decimal | null
  }

  export type Order_detailsMaxAggregateOutputType = {
    confirmation_id: string | null
    order_time: Date | null
    total_items: number | null
    order_total: Decimal | null
  }

  export type Order_detailsCountAggregateOutputType = {
    confirmation_id: number
    order_time: number
    total_items: number
    order_total: number
    _all: number
  }


  export type Order_detailsAvgAggregateInputType = {
    total_items?: true
    order_total?: true
  }

  export type Order_detailsSumAggregateInputType = {
    total_items?: true
    order_total?: true
  }

  export type Order_detailsMinAggregateInputType = {
    confirmation_id?: true
    order_time?: true
    total_items?: true
    order_total?: true
  }

  export type Order_detailsMaxAggregateInputType = {
    confirmation_id?: true
    order_time?: true
    total_items?: true
    order_total?: true
  }

  export type Order_detailsCountAggregateInputType = {
    confirmation_id?: true
    order_time?: true
    total_items?: true
    order_total?: true
    _all?: true
  }

  export type Order_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_details to aggregate.
     */
    where?: order_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_details
    **/
    _count?: true | Order_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_detailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_detailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_detailsMaxAggregateInputType
  }

  export type GetOrder_detailsAggregateType<T extends Order_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_details[P]>
      : GetScalarType<T[P], AggregateOrder_details[P]>
  }




  export type order_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_detailsWhereInput
    orderBy?: order_detailsOrderByWithAggregationInput | order_detailsOrderByWithAggregationInput[]
    by: Order_detailsScalarFieldEnum[] | Order_detailsScalarFieldEnum
    having?: order_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_detailsCountAggregateInputType | true
    _avg?: Order_detailsAvgAggregateInputType
    _sum?: Order_detailsSumAggregateInputType
    _min?: Order_detailsMinAggregateInputType
    _max?: Order_detailsMaxAggregateInputType
  }

  export type Order_detailsGroupByOutputType = {
    confirmation_id: string
    order_time: Date
    total_items: number
    order_total: Decimal
    _count: Order_detailsCountAggregateOutputType | null
    _avg: Order_detailsAvgAggregateOutputType | null
    _sum: Order_detailsSumAggregateOutputType | null
    _min: Order_detailsMinAggregateOutputType | null
    _max: Order_detailsMaxAggregateOutputType | null
  }

  type GetOrder_detailsGroupByPayload<T extends order_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_detailsGroupByOutputType[P]>
        }
      >
    >


  export type order_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    confirmation_id?: boolean
    order_time?: boolean
    total_items?: boolean
    order_total?: boolean
  }, ExtArgs["result"]["order_details"]>

  export type order_detailsSelectScalar = {
    confirmation_id?: boolean
    order_time?: boolean
    total_items?: boolean
    order_total?: boolean
  }


  export type $order_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_details"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      confirmation_id: string
      order_time: Date
      total_items: number
      order_total: Prisma.Decimal
    }, ExtArgs["result"]["order_details"]>
    composites: {}
  }


  type order_detailsGetPayload<S extends boolean | null | undefined | order_detailsDefaultArgs> = $Result.GetResult<Prisma.$order_detailsPayload, S>

  type order_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<order_detailsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Order_detailsCountAggregateInputType | true
    }

  export interface order_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_details'], meta: { name: 'order_details' } }
    /**
     * Find zero or one Order_details that matches the filter.
     * @param {order_detailsFindUniqueArgs} args - Arguments to find a Order_details
     * @example
     * // Get one Order_details
     * const order_details = await prisma.order_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends order_detailsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, order_detailsFindUniqueArgs<ExtArgs>>
    ): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order_details that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {order_detailsFindUniqueOrThrowArgs} args - Arguments to find a Order_details
     * @example
     * // Get one Order_details
     * const order_details = await prisma.order_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends order_detailsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_detailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsFindFirstArgs} args - Arguments to find a Order_details
     * @example
     * // Get one Order_details
     * const order_details = await prisma.order_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends order_detailsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, order_detailsFindFirstArgs<ExtArgs>>
    ): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsFindFirstOrThrowArgs} args - Arguments to find a Order_details
     * @example
     * // Get one Order_details
     * const order_details = await prisma.order_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends order_detailsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_detailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Order_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_details
     * const order_details = await prisma.order_details.findMany()
     * 
     * // Get first 10 Order_details
     * const order_details = await prisma.order_details.findMany({ take: 10 })
     * 
     * // Only select the `confirmation_id`
     * const order_detailsWithConfirmation_idOnly = await prisma.order_details.findMany({ select: { confirmation_id: true } })
     * 
    **/
    findMany<T extends order_detailsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_detailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order_details.
     * @param {order_detailsCreateArgs} args - Arguments to create a Order_details.
     * @example
     * // Create one Order_details
     * const Order_details = await prisma.order_details.create({
     *   data: {
     *     // ... data to create a Order_details
     *   }
     * })
     * 
    **/
    create<T extends order_detailsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, order_detailsCreateArgs<ExtArgs>>
    ): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Order_details.
     *     @param {order_detailsCreateManyArgs} args - Arguments to create many Order_details.
     *     @example
     *     // Create many Order_details
     *     const order_details = await prisma.order_details.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends order_detailsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_detailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_details.
     * @param {order_detailsDeleteArgs} args - Arguments to delete one Order_details.
     * @example
     * // Delete one Order_details
     * const Order_details = await prisma.order_details.delete({
     *   where: {
     *     // ... filter to delete one Order_details
     *   }
     * })
     * 
    **/
    delete<T extends order_detailsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, order_detailsDeleteArgs<ExtArgs>>
    ): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order_details.
     * @param {order_detailsUpdateArgs} args - Arguments to update one Order_details.
     * @example
     * // Update one Order_details
     * const order_details = await prisma.order_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends order_detailsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, order_detailsUpdateArgs<ExtArgs>>
    ): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Order_details.
     * @param {order_detailsDeleteManyArgs} args - Arguments to filter Order_details to delete.
     * @example
     * // Delete a few Order_details
     * const { count } = await prisma.order_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends order_detailsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_detailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_details
     * const order_details = await prisma.order_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends order_detailsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, order_detailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_details.
     * @param {order_detailsUpsertArgs} args - Arguments to update or create a Order_details.
     * @example
     * // Update or create a Order_details
     * const order_details = await prisma.order_details.upsert({
     *   create: {
     *     // ... data to create a Order_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_details we want to update
     *   }
     * })
    **/
    upsert<T extends order_detailsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, order_detailsUpsertArgs<ExtArgs>>
    ): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsCountArgs} args - Arguments to filter Order_details to count.
     * @example
     * // Count the number of Order_details
     * const count = await prisma.order_details.count({
     *   where: {
     *     // ... the filter for the Order_details we want to count
     *   }
     * })
    **/
    count<T extends order_detailsCountArgs>(
      args?: Subset<T, order_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_detailsAggregateArgs>(args: Subset<T, Order_detailsAggregateArgs>): Prisma.PrismaPromise<GetOrder_detailsAggregateType<T>>

    /**
     * Group by Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_detailsGroupByArgs['orderBy'] }
        : { orderBy?: order_detailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_details model
   */
  readonly fields: order_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the order_details model
   */ 
  interface order_detailsFieldRefs {
    readonly confirmation_id: FieldRef<"order_details", 'String'>
    readonly order_time: FieldRef<"order_details", 'DateTime'>
    readonly total_items: FieldRef<"order_details", 'Int'>
    readonly order_total: FieldRef<"order_details", 'Decimal'>
  }
    

  // Custom InputTypes

  /**
   * order_details findUnique
   */
  export type order_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Filter, which order_details to fetch.
     */
    where: order_detailsWhereUniqueInput
  }


  /**
   * order_details findUniqueOrThrow
   */
  export type order_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Filter, which order_details to fetch.
     */
    where: order_detailsWhereUniqueInput
  }


  /**
   * order_details findFirst
   */
  export type order_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Filter, which order_details to fetch.
     */
    where?: order_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_details.
     */
    cursor?: order_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_details.
     */
    distinct?: Order_detailsScalarFieldEnum | Order_detailsScalarFieldEnum[]
  }


  /**
   * order_details findFirstOrThrow
   */
  export type order_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Filter, which order_details to fetch.
     */
    where?: order_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_details.
     */
    cursor?: order_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_details.
     */
    distinct?: Order_detailsScalarFieldEnum | Order_detailsScalarFieldEnum[]
  }


  /**
   * order_details findMany
   */
  export type order_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Filter, which order_details to fetch.
     */
    where?: order_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_details.
     */
    cursor?: order_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_details.
     */
    skip?: number
    distinct?: Order_detailsScalarFieldEnum | Order_detailsScalarFieldEnum[]
  }


  /**
   * order_details create
   */
  export type order_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * The data needed to create a order_details.
     */
    data: XOR<order_detailsCreateInput, order_detailsUncheckedCreateInput>
  }


  /**
   * order_details createMany
   */
  export type order_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_details.
     */
    data: order_detailsCreateManyInput | order_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * order_details update
   */
  export type order_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * The data needed to update a order_details.
     */
    data: XOR<order_detailsUpdateInput, order_detailsUncheckedUpdateInput>
    /**
     * Choose, which order_details to update.
     */
    where: order_detailsWhereUniqueInput
  }


  /**
   * order_details updateMany
   */
  export type order_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_details.
     */
    data: XOR<order_detailsUpdateManyMutationInput, order_detailsUncheckedUpdateManyInput>
    /**
     * Filter which order_details to update
     */
    where?: order_detailsWhereInput
  }


  /**
   * order_details upsert
   */
  export type order_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * The filter to search for the order_details to update in case it exists.
     */
    where: order_detailsWhereUniqueInput
    /**
     * In case the order_details found by the `where` argument doesn't exist, create a new order_details with this data.
     */
    create: XOR<order_detailsCreateInput, order_detailsUncheckedCreateInput>
    /**
     * In case the order_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_detailsUpdateInput, order_detailsUncheckedUpdateInput>
  }


  /**
   * order_details delete
   */
  export type order_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Filter which order_details to delete.
     */
    where: order_detailsWhereUniqueInput
  }


  /**
   * order_details deleteMany
   */
  export type order_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_details to delete
     */
    where?: order_detailsWhereInput
  }


  /**
   * order_details without action
   */
  export type order_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
  }



  /**
   * Model order_items
   */

  export type AggregateOrder_items = {
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  export type Order_itemsAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type Order_itemsSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type Order_itemsMinAggregateOutputType = {
    id: number | null
    confirmation_id: string | null
    name: string | null
    price: Decimal | null
    size: string | null
    color: string | null
    category_name: string | null
  }

  export type Order_itemsMaxAggregateOutputType = {
    id: number | null
    confirmation_id: string | null
    name: string | null
    price: Decimal | null
    size: string | null
    color: string | null
    category_name: string | null
  }

  export type Order_itemsCountAggregateOutputType = {
    id: number
    confirmation_id: number
    name: number
    price: number
    size: number
    color: number
    category_name: number
    _all: number
  }


  export type Order_itemsAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type Order_itemsSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type Order_itemsMinAggregateInputType = {
    id?: true
    confirmation_id?: true
    name?: true
    price?: true
    size?: true
    color?: true
    category_name?: true
  }

  export type Order_itemsMaxAggregateInputType = {
    id?: true
    confirmation_id?: true
    name?: true
    price?: true
    size?: true
    color?: true
    category_name?: true
  }

  export type Order_itemsCountAggregateInputType = {
    id?: true
    confirmation_id?: true
    name?: true
    price?: true
    size?: true
    color?: true
    category_name?: true
    _all?: true
  }

  export type Order_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to aggregate.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemsMaxAggregateInputType
  }

  export type GetOrder_itemsAggregateType<T extends Order_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_items[P]>
      : GetScalarType<T[P], AggregateOrder_items[P]>
  }




  export type order_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithAggregationInput | order_itemsOrderByWithAggregationInput[]
    by: Order_itemsScalarFieldEnum[] | Order_itemsScalarFieldEnum
    having?: order_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemsCountAggregateInputType | true
    _avg?: Order_itemsAvgAggregateInputType
    _sum?: Order_itemsSumAggregateInputType
    _min?: Order_itemsMinAggregateInputType
    _max?: Order_itemsMaxAggregateInputType
  }

  export type Order_itemsGroupByOutputType = {
    id: number
    confirmation_id: string
    name: string
    price: Decimal
    size: string
    color: string
    category_name: string
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  type GetOrder_itemsGroupByPayload<T extends order_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
        }
      >
    >


  export type order_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    confirmation_id?: boolean
    name?: boolean
    price?: boolean
    size?: boolean
    color?: boolean
    category_name?: boolean
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectScalar = {
    id?: boolean
    confirmation_id?: boolean
    name?: boolean
    price?: boolean
    size?: boolean
    color?: boolean
    category_name?: boolean
  }


  export type $order_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_items"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      confirmation_id: string
      name: string
      price: Prisma.Decimal
      size: string
      color: string
      category_name: string
    }, ExtArgs["result"]["order_items"]>
    composites: {}
  }


  type order_itemsGetPayload<S extends boolean | null | undefined | order_itemsDefaultArgs> = $Result.GetResult<Prisma.$order_itemsPayload, S>

  type order_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<order_itemsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Order_itemsCountAggregateInputType | true
    }

  export interface order_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_items'], meta: { name: 'order_items' } }
    /**
     * Find zero or one Order_items that matches the filter.
     * @param {order_itemsFindUniqueArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends order_itemsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemsFindUniqueArgs<ExtArgs>>
    ): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order_items that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {order_itemsFindUniqueOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends order_itemsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends order_itemsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemsFindFirstArgs<ExtArgs>>
    ): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends order_itemsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_items.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_itemsWithIdOnly = await prisma.order_items.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends order_itemsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order_items.
     * @param {order_itemsCreateArgs} args - Arguments to create a Order_items.
     * @example
     * // Create one Order_items
     * const Order_items = await prisma.order_items.create({
     *   data: {
     *     // ... data to create a Order_items
     *   }
     * })
     * 
    **/
    create<T extends order_itemsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemsCreateArgs<ExtArgs>>
    ): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Order_items.
     *     @param {order_itemsCreateManyArgs} args - Arguments to create many Order_items.
     *     @example
     *     // Create many Order_items
     *     const order_items = await prisma.order_items.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends order_itemsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_items.
     * @param {order_itemsDeleteArgs} args - Arguments to delete one Order_items.
     * @example
     * // Delete one Order_items
     * const Order_items = await prisma.order_items.delete({
     *   where: {
     *     // ... filter to delete one Order_items
     *   }
     * })
     * 
    **/
    delete<T extends order_itemsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemsDeleteArgs<ExtArgs>>
    ): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order_items.
     * @param {order_itemsUpdateArgs} args - Arguments to update one Order_items.
     * @example
     * // Update one Order_items
     * const order_items = await prisma.order_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends order_itemsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemsUpdateArgs<ExtArgs>>
    ): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemsDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends order_itemsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_itemsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends order_itemsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_items.
     * @param {order_itemsUpsertArgs} args - Arguments to update or create a Order_items.
     * @example
     * // Update or create a Order_items
     * const order_items = await prisma.order_items.upsert({
     *   create: {
     *     // ... data to create a Order_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_items we want to update
     *   }
     * })
    **/
    upsert<T extends order_itemsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, order_itemsUpsertArgs<ExtArgs>>
    ): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_items.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemsCountArgs>(
      args?: Subset<T, order_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_itemsAggregateArgs>(args: Subset<T, Order_itemsAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemsAggregateType<T>>

    /**
     * Group by Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemsGroupByArgs['orderBy'] }
        : { orderBy?: order_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_items model
   */
  readonly fields: order_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the order_items model
   */ 
  interface order_itemsFieldRefs {
    readonly id: FieldRef<"order_items", 'Int'>
    readonly confirmation_id: FieldRef<"order_items", 'String'>
    readonly name: FieldRef<"order_items", 'String'>
    readonly price: FieldRef<"order_items", 'Decimal'>
    readonly size: FieldRef<"order_items", 'String'>
    readonly color: FieldRef<"order_items", 'String'>
    readonly category_name: FieldRef<"order_items", 'String'>
  }
    

  // Custom InputTypes

  /**
   * order_items findUnique
   */
  export type order_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }


  /**
   * order_items findUniqueOrThrow
   */
  export type order_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }


  /**
   * order_items findFirst
   */
  export type order_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }


  /**
   * order_items findFirstOrThrow
   */
  export type order_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }


  /**
   * order_items findMany
   */
  export type order_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }


  /**
   * order_items create
   */
  export type order_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * The data needed to create a order_items.
     */
    data: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
  }


  /**
   * order_items createMany
   */
  export type order_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * order_items update
   */
  export type order_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * The data needed to update a order_items.
     */
    data: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
    /**
     * Choose, which order_items to update.
     */
    where: order_itemsWhereUniqueInput
  }


  /**
   * order_items updateMany
   */
  export type order_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
  }


  /**
   * order_items upsert
   */
  export type order_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * The filter to search for the order_items to update in case it exists.
     */
    where: order_itemsWhereUniqueInput
    /**
     * In case the order_items found by the `where` argument doesn't exist, create a new order_items with this data.
     */
    create: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
    /**
     * In case the order_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
  }


  /**
   * order_items delete
   */
  export type order_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Filter which order_items to delete.
     */
    where: order_itemsWhereUniqueInput
  }


  /**
   * order_items deleteMany
   */
  export type order_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemsWhereInput
  }


  /**
   * order_items without action
   */
  export type order_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
  }



  /**
   * Model order_items_joined
   */

  export type AggregateOrder_items_joined = {
    _count: Order_items_joinedCountAggregateOutputType | null
    _avg: Order_items_joinedAvgAggregateOutputType | null
    _sum: Order_items_joinedSumAggregateOutputType | null
    _min: Order_items_joinedMinAggregateOutputType | null
    _max: Order_items_joinedMaxAggregateOutputType | null
  }

  export type Order_items_joinedAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    total_items: number | null
    order_total: Decimal | null
  }

  export type Order_items_joinedSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    total_items: number | null
    order_total: Decimal | null
  }

  export type Order_items_joinedMinAggregateOutputType = {
    id: number | null
    confirmation_id: string | null
    name: string | null
    price: Decimal | null
    size: string | null
    color: string | null
    category_name: string | null
    order_time: Date | null
    total_items: number | null
    order_total: Decimal | null
  }

  export type Order_items_joinedMaxAggregateOutputType = {
    id: number | null
    confirmation_id: string | null
    name: string | null
    price: Decimal | null
    size: string | null
    color: string | null
    category_name: string | null
    order_time: Date | null
    total_items: number | null
    order_total: Decimal | null
  }

  export type Order_items_joinedCountAggregateOutputType = {
    id: number
    confirmation_id: number
    name: number
    price: number
    size: number
    color: number
    category_name: number
    order_time: number
    total_items: number
    order_total: number
    _all: number
  }


  export type Order_items_joinedAvgAggregateInputType = {
    id?: true
    price?: true
    total_items?: true
    order_total?: true
  }

  export type Order_items_joinedSumAggregateInputType = {
    id?: true
    price?: true
    total_items?: true
    order_total?: true
  }

  export type Order_items_joinedMinAggregateInputType = {
    id?: true
    confirmation_id?: true
    name?: true
    price?: true
    size?: true
    color?: true
    category_name?: true
    order_time?: true
    total_items?: true
    order_total?: true
  }

  export type Order_items_joinedMaxAggregateInputType = {
    id?: true
    confirmation_id?: true
    name?: true
    price?: true
    size?: true
    color?: true
    category_name?: true
    order_time?: true
    total_items?: true
    order_total?: true
  }

  export type Order_items_joinedCountAggregateInputType = {
    id?: true
    confirmation_id?: true
    name?: true
    price?: true
    size?: true
    color?: true
    category_name?: true
    order_time?: true
    total_items?: true
    order_total?: true
    _all?: true
  }

  export type Order_items_joinedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items_joined to aggregate.
     */
    where?: order_items_joinedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items_joineds to fetch.
     */
    orderBy?: order_items_joinedOrderByWithRelationInput | order_items_joinedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_items_joinedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items_joineds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items_joineds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items_joineds
    **/
    _count?: true | Order_items_joinedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_items_joinedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_items_joinedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_items_joinedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_items_joinedMaxAggregateInputType
  }

  export type GetOrder_items_joinedAggregateType<T extends Order_items_joinedAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_items_joined]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_items_joined[P]>
      : GetScalarType<T[P], AggregateOrder_items_joined[P]>
  }




  export type order_items_joinedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_items_joinedWhereInput
    orderBy?: order_items_joinedOrderByWithAggregationInput | order_items_joinedOrderByWithAggregationInput[]
    by: Order_items_joinedScalarFieldEnum[] | Order_items_joinedScalarFieldEnum
    having?: order_items_joinedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_items_joinedCountAggregateInputType | true
    _avg?: Order_items_joinedAvgAggregateInputType
    _sum?: Order_items_joinedSumAggregateInputType
    _min?: Order_items_joinedMinAggregateInputType
    _max?: Order_items_joinedMaxAggregateInputType
  }

  export type Order_items_joinedGroupByOutputType = {
    id: number
    confirmation_id: string
    name: string
    price: Decimal
    size: string
    color: string
    category_name: string
    order_time: Date
    total_items: number
    order_total: Decimal
    _count: Order_items_joinedCountAggregateOutputType | null
    _avg: Order_items_joinedAvgAggregateOutputType | null
    _sum: Order_items_joinedSumAggregateOutputType | null
    _min: Order_items_joinedMinAggregateOutputType | null
    _max: Order_items_joinedMaxAggregateOutputType | null
  }

  type GetOrder_items_joinedGroupByPayload<T extends order_items_joinedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_items_joinedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_items_joinedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_items_joinedGroupByOutputType[P]>
            : GetScalarType<T[P], Order_items_joinedGroupByOutputType[P]>
        }
      >
    >


  export type order_items_joinedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    confirmation_id?: boolean
    name?: boolean
    price?: boolean
    size?: boolean
    color?: boolean
    category_name?: boolean
    order_time?: boolean
    total_items?: boolean
    order_total?: boolean
  }, ExtArgs["result"]["order_items_joined"]>

  export type order_items_joinedSelectScalar = {
    id?: boolean
    confirmation_id?: boolean
    name?: boolean
    price?: boolean
    size?: boolean
    color?: boolean
    category_name?: boolean
    order_time?: boolean
    total_items?: boolean
    order_total?: boolean
  }


  export type $order_items_joinedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_items_joined"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      confirmation_id: string
      name: string
      price: Prisma.Decimal
      size: string
      color: string
      category_name: string
      order_time: Date
      total_items: number
      order_total: Prisma.Decimal
    }, ExtArgs["result"]["order_items_joined"]>
    composites: {}
  }


  type order_items_joinedGetPayload<S extends boolean | null | undefined | order_items_joinedDefaultArgs> = $Result.GetResult<Prisma.$order_items_joinedPayload, S>

  type order_items_joinedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<order_items_joinedFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Order_items_joinedCountAggregateInputType | true
    }

  export interface order_items_joinedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_items_joined'], meta: { name: 'order_items_joined' } }
    /**
     * Find zero or one Order_items_joined that matches the filter.
     * @param {order_items_joinedFindUniqueArgs} args - Arguments to find a Order_items_joined
     * @example
     * // Get one Order_items_joined
     * const order_items_joined = await prisma.order_items_joined.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends order_items_joinedFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, order_items_joinedFindUniqueArgs<ExtArgs>>
    ): Prisma__order_items_joinedClient<$Result.GetResult<Prisma.$order_items_joinedPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order_items_joined that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {order_items_joinedFindUniqueOrThrowArgs} args - Arguments to find a Order_items_joined
     * @example
     * // Get one Order_items_joined
     * const order_items_joined = await prisma.order_items_joined.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends order_items_joinedFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_items_joinedFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__order_items_joinedClient<$Result.GetResult<Prisma.$order_items_joinedPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order_items_joined that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_items_joinedFindFirstArgs} args - Arguments to find a Order_items_joined
     * @example
     * // Get one Order_items_joined
     * const order_items_joined = await prisma.order_items_joined.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends order_items_joinedFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, order_items_joinedFindFirstArgs<ExtArgs>>
    ): Prisma__order_items_joinedClient<$Result.GetResult<Prisma.$order_items_joinedPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order_items_joined that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_items_joinedFindFirstOrThrowArgs} args - Arguments to find a Order_items_joined
     * @example
     * // Get one Order_items_joined
     * const order_items_joined = await prisma.order_items_joined.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends order_items_joinedFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, order_items_joinedFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__order_items_joinedClient<$Result.GetResult<Prisma.$order_items_joinedPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Order_items_joineds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_items_joinedFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items_joineds
     * const order_items_joineds = await prisma.order_items_joined.findMany()
     * 
     * // Get first 10 Order_items_joineds
     * const order_items_joineds = await prisma.order_items_joined.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_items_joinedWithIdOnly = await prisma.order_items_joined.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends order_items_joinedFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_items_joinedFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_items_joinedPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order_items_joined.
     * @param {order_items_joinedCreateArgs} args - Arguments to create a Order_items_joined.
     * @example
     * // Create one Order_items_joined
     * const Order_items_joined = await prisma.order_items_joined.create({
     *   data: {
     *     // ... data to create a Order_items_joined
     *   }
     * })
     * 
    **/
    create<T extends order_items_joinedCreateArgs<ExtArgs>>(
      args: SelectSubset<T, order_items_joinedCreateArgs<ExtArgs>>
    ): Prisma__order_items_joinedClient<$Result.GetResult<Prisma.$order_items_joinedPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Order_items_joineds.
     *     @param {order_items_joinedCreateManyArgs} args - Arguments to create many Order_items_joineds.
     *     @example
     *     // Create many Order_items_joineds
     *     const order_items_joined = await prisma.order_items_joined.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends order_items_joinedCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_items_joinedCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order_items_joined.
     * @param {order_items_joinedDeleteArgs} args - Arguments to delete one Order_items_joined.
     * @example
     * // Delete one Order_items_joined
     * const Order_items_joined = await prisma.order_items_joined.delete({
     *   where: {
     *     // ... filter to delete one Order_items_joined
     *   }
     * })
     * 
    **/
    delete<T extends order_items_joinedDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, order_items_joinedDeleteArgs<ExtArgs>>
    ): Prisma__order_items_joinedClient<$Result.GetResult<Prisma.$order_items_joinedPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order_items_joined.
     * @param {order_items_joinedUpdateArgs} args - Arguments to update one Order_items_joined.
     * @example
     * // Update one Order_items_joined
     * const order_items_joined = await prisma.order_items_joined.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends order_items_joinedUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, order_items_joinedUpdateArgs<ExtArgs>>
    ): Prisma__order_items_joinedClient<$Result.GetResult<Prisma.$order_items_joinedPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Order_items_joineds.
     * @param {order_items_joinedDeleteManyArgs} args - Arguments to filter Order_items_joineds to delete.
     * @example
     * // Delete a few Order_items_joineds
     * const { count } = await prisma.order_items_joined.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends order_items_joinedDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, order_items_joinedDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items_joineds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_items_joinedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items_joineds
     * const order_items_joined = await prisma.order_items_joined.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends order_items_joinedUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, order_items_joinedUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_items_joined.
     * @param {order_items_joinedUpsertArgs} args - Arguments to update or create a Order_items_joined.
     * @example
     * // Update or create a Order_items_joined
     * const order_items_joined = await prisma.order_items_joined.upsert({
     *   create: {
     *     // ... data to create a Order_items_joined
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_items_joined we want to update
     *   }
     * })
    **/
    upsert<T extends order_items_joinedUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, order_items_joinedUpsertArgs<ExtArgs>>
    ): Prisma__order_items_joinedClient<$Result.GetResult<Prisma.$order_items_joinedPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Order_items_joineds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_items_joinedCountArgs} args - Arguments to filter Order_items_joineds to count.
     * @example
     * // Count the number of Order_items_joineds
     * const count = await prisma.order_items_joined.count({
     *   where: {
     *     // ... the filter for the Order_items_joineds we want to count
     *   }
     * })
    **/
    count<T extends order_items_joinedCountArgs>(
      args?: Subset<T, order_items_joinedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_items_joinedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_items_joined.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_items_joinedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_items_joinedAggregateArgs>(args: Subset<T, Order_items_joinedAggregateArgs>): Prisma.PrismaPromise<GetOrder_items_joinedAggregateType<T>>

    /**
     * Group by Order_items_joined.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_items_joinedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_items_joinedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_items_joinedGroupByArgs['orderBy'] }
        : { orderBy?: order_items_joinedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_items_joinedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_items_joinedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_items_joined model
   */
  readonly fields: order_items_joinedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_items_joined.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_items_joinedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the order_items_joined model
   */ 
  interface order_items_joinedFieldRefs {
    readonly id: FieldRef<"order_items_joined", 'Int'>
    readonly confirmation_id: FieldRef<"order_items_joined", 'String'>
    readonly name: FieldRef<"order_items_joined", 'String'>
    readonly price: FieldRef<"order_items_joined", 'Decimal'>
    readonly size: FieldRef<"order_items_joined", 'String'>
    readonly color: FieldRef<"order_items_joined", 'String'>
    readonly category_name: FieldRef<"order_items_joined", 'String'>
    readonly order_time: FieldRef<"order_items_joined", 'DateTime'>
    readonly total_items: FieldRef<"order_items_joined", 'Int'>
    readonly order_total: FieldRef<"order_items_joined", 'Decimal'>
  }
    

  // Custom InputTypes

  /**
   * order_items_joined findUnique
   */
  export type order_items_joinedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items_joined
     */
    select?: order_items_joinedSelect<ExtArgs> | null
    /**
     * Filter, which order_items_joined to fetch.
     */
    where: order_items_joinedWhereUniqueInput
  }


  /**
   * order_items_joined findUniqueOrThrow
   */
  export type order_items_joinedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items_joined
     */
    select?: order_items_joinedSelect<ExtArgs> | null
    /**
     * Filter, which order_items_joined to fetch.
     */
    where: order_items_joinedWhereUniqueInput
  }


  /**
   * order_items_joined findFirst
   */
  export type order_items_joinedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items_joined
     */
    select?: order_items_joinedSelect<ExtArgs> | null
    /**
     * Filter, which order_items_joined to fetch.
     */
    where?: order_items_joinedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items_joineds to fetch.
     */
    orderBy?: order_items_joinedOrderByWithRelationInput | order_items_joinedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items_joineds.
     */
    cursor?: order_items_joinedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items_joineds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items_joineds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items_joineds.
     */
    distinct?: Order_items_joinedScalarFieldEnum | Order_items_joinedScalarFieldEnum[]
  }


  /**
   * order_items_joined findFirstOrThrow
   */
  export type order_items_joinedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items_joined
     */
    select?: order_items_joinedSelect<ExtArgs> | null
    /**
     * Filter, which order_items_joined to fetch.
     */
    where?: order_items_joinedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items_joineds to fetch.
     */
    orderBy?: order_items_joinedOrderByWithRelationInput | order_items_joinedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items_joineds.
     */
    cursor?: order_items_joinedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items_joineds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items_joineds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items_joineds.
     */
    distinct?: Order_items_joinedScalarFieldEnum | Order_items_joinedScalarFieldEnum[]
  }


  /**
   * order_items_joined findMany
   */
  export type order_items_joinedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items_joined
     */
    select?: order_items_joinedSelect<ExtArgs> | null
    /**
     * Filter, which order_items_joineds to fetch.
     */
    where?: order_items_joinedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items_joineds to fetch.
     */
    orderBy?: order_items_joinedOrderByWithRelationInput | order_items_joinedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items_joineds.
     */
    cursor?: order_items_joinedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items_joineds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items_joineds.
     */
    skip?: number
    distinct?: Order_items_joinedScalarFieldEnum | Order_items_joinedScalarFieldEnum[]
  }


  /**
   * order_items_joined create
   */
  export type order_items_joinedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items_joined
     */
    select?: order_items_joinedSelect<ExtArgs> | null
    /**
     * The data needed to create a order_items_joined.
     */
    data: XOR<order_items_joinedCreateInput, order_items_joinedUncheckedCreateInput>
  }


  /**
   * order_items_joined createMany
   */
  export type order_items_joinedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items_joineds.
     */
    data: order_items_joinedCreateManyInput | order_items_joinedCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * order_items_joined update
   */
  export type order_items_joinedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items_joined
     */
    select?: order_items_joinedSelect<ExtArgs> | null
    /**
     * The data needed to update a order_items_joined.
     */
    data: XOR<order_items_joinedUpdateInput, order_items_joinedUncheckedUpdateInput>
    /**
     * Choose, which order_items_joined to update.
     */
    where: order_items_joinedWhereUniqueInput
  }


  /**
   * order_items_joined updateMany
   */
  export type order_items_joinedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items_joineds.
     */
    data: XOR<order_items_joinedUpdateManyMutationInput, order_items_joinedUncheckedUpdateManyInput>
    /**
     * Filter which order_items_joineds to update
     */
    where?: order_items_joinedWhereInput
  }


  /**
   * order_items_joined upsert
   */
  export type order_items_joinedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items_joined
     */
    select?: order_items_joinedSelect<ExtArgs> | null
    /**
     * The filter to search for the order_items_joined to update in case it exists.
     */
    where: order_items_joinedWhereUniqueInput
    /**
     * In case the order_items_joined found by the `where` argument doesn't exist, create a new order_items_joined with this data.
     */
    create: XOR<order_items_joinedCreateInput, order_items_joinedUncheckedCreateInput>
    /**
     * In case the order_items_joined was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_items_joinedUpdateInput, order_items_joinedUncheckedUpdateInput>
  }


  /**
   * order_items_joined delete
   */
  export type order_items_joinedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items_joined
     */
    select?: order_items_joinedSelect<ExtArgs> | null
    /**
     * Filter which order_items_joined to delete.
     */
    where: order_items_joinedWhereUniqueInput
  }


  /**
   * order_items_joined deleteMany
   */
  export type order_items_joinedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items_joineds to delete
     */
    where?: order_items_joinedWhereInput
  }


  /**
   * order_items_joined without action
   */
  export type order_items_joinedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items_joined
     */
    select?: order_items_joinedSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const BillboardScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    label: 'label',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BillboardScalarFieldEnum = (typeof BillboardScalarFieldEnum)[keyof typeof BillboardScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    billboardId: 'billboardId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SizeScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    name: 'name',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SizeScalarFieldEnum = (typeof SizeScalarFieldEnum)[keyof typeof SizeScalarFieldEnum]


  export const ColorScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    name: 'name',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ColorScalarFieldEnum = (typeof ColorScalarFieldEnum)[keyof typeof ColorScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    categoryId: 'categoryId',
    name: 'name',
    price: 'price',
    isFeatured: 'isFeatured',
    isArchived: 'isArchived',
    sizeId: 'sizeId',
    colorId: 'colorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    isPaid: 'isPaid',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updated: 'updated'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const Order_detailsScalarFieldEnum: {
    confirmation_id: 'confirmation_id',
    order_time: 'order_time',
    total_items: 'total_items',
    order_total: 'order_total'
  };

  export type Order_detailsScalarFieldEnum = (typeof Order_detailsScalarFieldEnum)[keyof typeof Order_detailsScalarFieldEnum]


  export const Order_itemsScalarFieldEnum: {
    id: 'id',
    confirmation_id: 'confirmation_id',
    name: 'name',
    price: 'price',
    size: 'size',
    color: 'color',
    category_name: 'category_name'
  };

  export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum]


  export const Order_items_joinedScalarFieldEnum: {
    id: 'id',
    confirmation_id: 'confirmation_id',
    name: 'name',
    price: 'price',
    size: 'size',
    color: 'color',
    category_name: 'category_name',
    order_time: 'order_time',
    total_items: 'total_items',
    order_total: 'order_total'
  };

  export type Order_items_joinedScalarFieldEnum = (typeof Order_items_joinedScalarFieldEnum)[keyof typeof Order_items_joinedScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: StringFilter<"Store"> | string
    name?: StringFilter<"Store"> | string
    userId?: StringFilter<"Store"> | string
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    billboards?: BillboardListRelationFilter
    categories?: CategoryListRelationFilter
    sizes?: SizeListRelationFilter
    colors?: ColorListRelationFilter
    products?: ProductListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    billboards?: BillboardOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    sizes?: SizeOrderByRelationAggregateInput
    colors?: ColorOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    name?: StringFilter<"Store"> | string
    userId?: StringFilter<"Store"> | string
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    billboards?: BillboardListRelationFilter
    categories?: CategoryListRelationFilter
    sizes?: SizeListRelationFilter
    colors?: ColorListRelationFilter
    products?: ProductListRelationFilter
    orders?: OrderListRelationFilter
  }, "id">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Store"> | string
    name?: StringWithAggregatesFilter<"Store"> | string
    userId?: StringWithAggregatesFilter<"Store"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
  }

  export type BillboardWhereInput = {
    AND?: BillboardWhereInput | BillboardWhereInput[]
    OR?: BillboardWhereInput[]
    NOT?: BillboardWhereInput | BillboardWhereInput[]
    id?: StringFilter<"Billboard"> | string
    storeId?: StringFilter<"Billboard"> | string
    label?: StringFilter<"Billboard"> | string
    imageUrl?: StringFilter<"Billboard"> | string
    createdAt?: DateTimeFilter<"Billboard"> | Date | string
    updatedAt?: DateTimeFilter<"Billboard"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    categories?: CategoryListRelationFilter
  }

  export type BillboardOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    categories?: CategoryOrderByRelationAggregateInput
  }

  export type BillboardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BillboardWhereInput | BillboardWhereInput[]
    OR?: BillboardWhereInput[]
    NOT?: BillboardWhereInput | BillboardWhereInput[]
    storeId?: StringFilter<"Billboard"> | string
    label?: StringFilter<"Billboard"> | string
    imageUrl?: StringFilter<"Billboard"> | string
    createdAt?: DateTimeFilter<"Billboard"> | Date | string
    updatedAt?: DateTimeFilter<"Billboard"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    categories?: CategoryListRelationFilter
  }, "id">

  export type BillboardOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BillboardCountOrderByAggregateInput
    _max?: BillboardMaxOrderByAggregateInput
    _min?: BillboardMinOrderByAggregateInput
  }

  export type BillboardScalarWhereWithAggregatesInput = {
    AND?: BillboardScalarWhereWithAggregatesInput | BillboardScalarWhereWithAggregatesInput[]
    OR?: BillboardScalarWhereWithAggregatesInput[]
    NOT?: BillboardScalarWhereWithAggregatesInput | BillboardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Billboard"> | string
    storeId?: StringWithAggregatesFilter<"Billboard"> | string
    label?: StringWithAggregatesFilter<"Billboard"> | string
    imageUrl?: StringWithAggregatesFilter<"Billboard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Billboard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Billboard"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    storeId?: StringFilter<"Category"> | string
    billboardId?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    billboard?: XOR<BillboardRelationFilter, BillboardWhereInput>
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    billboardId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    billboard?: BillboardOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    storeId?: StringFilter<"Category"> | string
    billboardId?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    billboard?: XOR<BillboardRelationFilter, BillboardWhereInput>
    products?: ProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    billboardId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    storeId?: StringWithAggregatesFilter<"Category"> | string
    billboardId?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type SizeWhereInput = {
    AND?: SizeWhereInput | SizeWhereInput[]
    OR?: SizeWhereInput[]
    NOT?: SizeWhereInput | SizeWhereInput[]
    id?: StringFilter<"Size"> | string
    storeId?: StringFilter<"Size"> | string
    name?: StringFilter<"Size"> | string
    value?: StringFilter<"Size"> | string
    createdAt?: DateTimeFilter<"Size"> | Date | string
    updatedAt?: DateTimeFilter<"Size"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    products?: ProductListRelationFilter
  }

  export type SizeOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type SizeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SizeWhereInput | SizeWhereInput[]
    OR?: SizeWhereInput[]
    NOT?: SizeWhereInput | SizeWhereInput[]
    storeId?: StringFilter<"Size"> | string
    name?: StringFilter<"Size"> | string
    value?: StringFilter<"Size"> | string
    createdAt?: DateTimeFilter<"Size"> | Date | string
    updatedAt?: DateTimeFilter<"Size"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    products?: ProductListRelationFilter
  }, "id">

  export type SizeOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SizeCountOrderByAggregateInput
    _max?: SizeMaxOrderByAggregateInput
    _min?: SizeMinOrderByAggregateInput
  }

  export type SizeScalarWhereWithAggregatesInput = {
    AND?: SizeScalarWhereWithAggregatesInput | SizeScalarWhereWithAggregatesInput[]
    OR?: SizeScalarWhereWithAggregatesInput[]
    NOT?: SizeScalarWhereWithAggregatesInput | SizeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Size"> | string
    storeId?: StringWithAggregatesFilter<"Size"> | string
    name?: StringWithAggregatesFilter<"Size"> | string
    value?: StringWithAggregatesFilter<"Size"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Size"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Size"> | Date | string
  }

  export type ColorWhereInput = {
    AND?: ColorWhereInput | ColorWhereInput[]
    OR?: ColorWhereInput[]
    NOT?: ColorWhereInput | ColorWhereInput[]
    id?: StringFilter<"Color"> | string
    storeId?: StringFilter<"Color"> | string
    name?: StringFilter<"Color"> | string
    value?: StringFilter<"Color"> | string
    createdAt?: DateTimeFilter<"Color"> | Date | string
    updatedAt?: DateTimeFilter<"Color"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    products?: ProductListRelationFilter
  }

  export type ColorOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type ColorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ColorWhereInput | ColorWhereInput[]
    OR?: ColorWhereInput[]
    NOT?: ColorWhereInput | ColorWhereInput[]
    storeId?: StringFilter<"Color"> | string
    name?: StringFilter<"Color"> | string
    value?: StringFilter<"Color"> | string
    createdAt?: DateTimeFilter<"Color"> | Date | string
    updatedAt?: DateTimeFilter<"Color"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    products?: ProductListRelationFilter
  }, "id">

  export type ColorOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ColorCountOrderByAggregateInput
    _max?: ColorMaxOrderByAggregateInput
    _min?: ColorMinOrderByAggregateInput
  }

  export type ColorScalarWhereWithAggregatesInput = {
    AND?: ColorScalarWhereWithAggregatesInput | ColorScalarWhereWithAggregatesInput[]
    OR?: ColorScalarWhereWithAggregatesInput[]
    NOT?: ColorScalarWhereWithAggregatesInput | ColorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Color"> | string
    storeId?: StringWithAggregatesFilter<"Color"> | string
    name?: StringWithAggregatesFilter<"Color"> | string
    value?: StringWithAggregatesFilter<"Color"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Color"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Color"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    storeId?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFilter<"Product"> | boolean
    isArchived?: BoolFilter<"Product"> | boolean
    sizeId?: StringFilter<"Product"> | string
    colorId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    size?: XOR<SizeRelationFilter, SizeWhereInput>
    color?: XOR<ColorRelationFilter, ColorWhereInput>
    images?: ImageListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    size?: SizeOrderByWithRelationInput
    color?: ColorOrderByWithRelationInput
    images?: ImageOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    storeId?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFilter<"Product"> | boolean
    isArchived?: BoolFilter<"Product"> | boolean
    sizeId?: StringFilter<"Product"> | string
    colorId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    size?: XOR<SizeRelationFilter, SizeWhereInput>
    color?: XOR<ColorRelationFilter, ColorWhereInput>
    images?: ImageListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    storeId?: StringWithAggregatesFilter<"Product"> | string
    categoryId?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolWithAggregatesFilter<"Product"> | boolean
    isArchived?: BoolWithAggregatesFilter<"Product"> | boolean
    sizeId?: StringWithAggregatesFilter<"Product"> | string
    colorId?: StringWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    productId?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    productId?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    productId?: StringWithAggregatesFilter<"Image"> | string
    url?: StringWithAggregatesFilter<"Image"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    storeId?: StringFilter<"Order"> | string
    isPaid?: BoolFilter<"Order"> | boolean
    phone?: StringFilter<"Order"> | string
    address?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updated?: DateTimeFilter<"Order"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    orderItems?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    isPaid?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    store?: StoreOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    storeId?: StringFilter<"Order"> | string
    isPaid?: BoolFilter<"Order"> | boolean
    phone?: StringFilter<"Order"> | string
    address?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updated?: DateTimeFilter<"Order"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
    orderItems?: OrderItemListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    isPaid?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    storeId?: StringWithAggregatesFilter<"Order"> | string
    isPaid?: BoolWithAggregatesFilter<"Order"> | boolean
    phone?: StringWithAggregatesFilter<"Order"> | string
    address?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    productId?: StringWithAggregatesFilter<"OrderItem"> | string
  }

  export type order_detailsWhereInput = {
    AND?: order_detailsWhereInput | order_detailsWhereInput[]
    OR?: order_detailsWhereInput[]
    NOT?: order_detailsWhereInput | order_detailsWhereInput[]
    confirmation_id?: StringFilter<"order_details"> | string
    order_time?: DateTimeFilter<"order_details"> | Date | string
    total_items?: IntFilter<"order_details"> | number
    order_total?: DecimalFilter<"order_details"> | Decimal | DecimalJsLike | number | string
  }

  export type order_detailsOrderByWithRelationInput = {
    confirmation_id?: SortOrder
    order_time?: SortOrder
    total_items?: SortOrder
    order_total?: SortOrder
  }

  export type order_detailsWhereUniqueInput = Prisma.AtLeast<{
    confirmation_id?: string
    AND?: order_detailsWhereInput | order_detailsWhereInput[]
    OR?: order_detailsWhereInput[]
    NOT?: order_detailsWhereInput | order_detailsWhereInput[]
    order_time?: DateTimeFilter<"order_details"> | Date | string
    total_items?: IntFilter<"order_details"> | number
    order_total?: DecimalFilter<"order_details"> | Decimal | DecimalJsLike | number | string
  }, "confirmation_id">

  export type order_detailsOrderByWithAggregationInput = {
    confirmation_id?: SortOrder
    order_time?: SortOrder
    total_items?: SortOrder
    order_total?: SortOrder
    _count?: order_detailsCountOrderByAggregateInput
    _avg?: order_detailsAvgOrderByAggregateInput
    _max?: order_detailsMaxOrderByAggregateInput
    _min?: order_detailsMinOrderByAggregateInput
    _sum?: order_detailsSumOrderByAggregateInput
  }

  export type order_detailsScalarWhereWithAggregatesInput = {
    AND?: order_detailsScalarWhereWithAggregatesInput | order_detailsScalarWhereWithAggregatesInput[]
    OR?: order_detailsScalarWhereWithAggregatesInput[]
    NOT?: order_detailsScalarWhereWithAggregatesInput | order_detailsScalarWhereWithAggregatesInput[]
    confirmation_id?: StringWithAggregatesFilter<"order_details"> | string
    order_time?: DateTimeWithAggregatesFilter<"order_details"> | Date | string
    total_items?: IntWithAggregatesFilter<"order_details"> | number
    order_total?: DecimalWithAggregatesFilter<"order_details"> | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsWhereInput = {
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    id?: IntFilter<"order_items"> | number
    confirmation_id?: StringFilter<"order_items"> | string
    name?: StringFilter<"order_items"> | string
    price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    size?: StringFilter<"order_items"> | string
    color?: StringFilter<"order_items"> | string
    category_name?: StringFilter<"order_items"> | string
  }

  export type order_itemsOrderByWithRelationInput = {
    id?: SortOrder
    confirmation_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    category_name?: SortOrder
  }

  export type order_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    confirmation_id?: StringFilter<"order_items"> | string
    name?: StringFilter<"order_items"> | string
    price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    size?: StringFilter<"order_items"> | string
    color?: StringFilter<"order_items"> | string
    category_name?: StringFilter<"order_items"> | string
  }, "id">

  export type order_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    confirmation_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    category_name?: SortOrder
    _count?: order_itemsCountOrderByAggregateInput
    _avg?: order_itemsAvgOrderByAggregateInput
    _max?: order_itemsMaxOrderByAggregateInput
    _min?: order_itemsMinOrderByAggregateInput
    _sum?: order_itemsSumOrderByAggregateInput
  }

  export type order_itemsScalarWhereWithAggregatesInput = {
    AND?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    OR?: order_itemsScalarWhereWithAggregatesInput[]
    NOT?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_items"> | number
    confirmation_id?: StringWithAggregatesFilter<"order_items"> | string
    name?: StringWithAggregatesFilter<"order_items"> | string
    price?: DecimalWithAggregatesFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    size?: StringWithAggregatesFilter<"order_items"> | string
    color?: StringWithAggregatesFilter<"order_items"> | string
    category_name?: StringWithAggregatesFilter<"order_items"> | string
  }

  export type order_items_joinedWhereInput = {
    AND?: order_items_joinedWhereInput | order_items_joinedWhereInput[]
    OR?: order_items_joinedWhereInput[]
    NOT?: order_items_joinedWhereInput | order_items_joinedWhereInput[]
    id?: IntFilter<"order_items_joined"> | number
    confirmation_id?: StringFilter<"order_items_joined"> | string
    name?: StringFilter<"order_items_joined"> | string
    price?: DecimalFilter<"order_items_joined"> | Decimal | DecimalJsLike | number | string
    size?: StringFilter<"order_items_joined"> | string
    color?: StringFilter<"order_items_joined"> | string
    category_name?: StringFilter<"order_items_joined"> | string
    order_time?: DateTimeFilter<"order_items_joined"> | Date | string
    total_items?: IntFilter<"order_items_joined"> | number
    order_total?: DecimalFilter<"order_items_joined"> | Decimal | DecimalJsLike | number | string
  }

  export type order_items_joinedOrderByWithRelationInput = {
    id?: SortOrder
    confirmation_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    category_name?: SortOrder
    order_time?: SortOrder
    total_items?: SortOrder
    order_total?: SortOrder
  }

  export type order_items_joinedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_items_joinedWhereInput | order_items_joinedWhereInput[]
    OR?: order_items_joinedWhereInput[]
    NOT?: order_items_joinedWhereInput | order_items_joinedWhereInput[]
    confirmation_id?: StringFilter<"order_items_joined"> | string
    name?: StringFilter<"order_items_joined"> | string
    price?: DecimalFilter<"order_items_joined"> | Decimal | DecimalJsLike | number | string
    size?: StringFilter<"order_items_joined"> | string
    color?: StringFilter<"order_items_joined"> | string
    category_name?: StringFilter<"order_items_joined"> | string
    order_time?: DateTimeFilter<"order_items_joined"> | Date | string
    total_items?: IntFilter<"order_items_joined"> | number
    order_total?: DecimalFilter<"order_items_joined"> | Decimal | DecimalJsLike | number | string
  }, "id">

  export type order_items_joinedOrderByWithAggregationInput = {
    id?: SortOrder
    confirmation_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    category_name?: SortOrder
    order_time?: SortOrder
    total_items?: SortOrder
    order_total?: SortOrder
    _count?: order_items_joinedCountOrderByAggregateInput
    _avg?: order_items_joinedAvgOrderByAggregateInput
    _max?: order_items_joinedMaxOrderByAggregateInput
    _min?: order_items_joinedMinOrderByAggregateInput
    _sum?: order_items_joinedSumOrderByAggregateInput
  }

  export type order_items_joinedScalarWhereWithAggregatesInput = {
    AND?: order_items_joinedScalarWhereWithAggregatesInput | order_items_joinedScalarWhereWithAggregatesInput[]
    OR?: order_items_joinedScalarWhereWithAggregatesInput[]
    NOT?: order_items_joinedScalarWhereWithAggregatesInput | order_items_joinedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_items_joined"> | number
    confirmation_id?: StringWithAggregatesFilter<"order_items_joined"> | string
    name?: StringWithAggregatesFilter<"order_items_joined"> | string
    price?: DecimalWithAggregatesFilter<"order_items_joined"> | Decimal | DecimalJsLike | number | string
    size?: StringWithAggregatesFilter<"order_items_joined"> | string
    color?: StringWithAggregatesFilter<"order_items_joined"> | string
    category_name?: StringWithAggregatesFilter<"order_items_joined"> | string
    order_time?: DateTimeWithAggregatesFilter<"order_items_joined"> | Date | string
    total_items?: IntWithAggregatesFilter<"order_items_joined"> | number
    order_total?: DecimalWithAggregatesFilter<"order_items_joined"> | Decimal | DecimalJsLike | number | string
  }

  export type StoreCreateInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardCreateNestedManyWithoutStoreInput
    categories?: CategoryCreateNestedManyWithoutStoreInput
    sizes?: SizeCreateNestedManyWithoutStoreInput
    colors?: ColorCreateNestedManyWithoutStoreInput
    products?: ProductCreateNestedManyWithoutStoreInput
    orders?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoreInput
    sizes?: SizeUncheckedCreateNestedManyWithoutStoreInput
    colors?: ColorUncheckedCreateNestedManyWithoutStoreInput
    products?: ProductUncheckedCreateNestedManyWithoutStoreInput
    orders?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
    categories?: CategoryUpdateManyWithoutStoreNestedInput
    sizes?: SizeUpdateManyWithoutStoreNestedInput
    colors?: ColorUpdateManyWithoutStoreNestedInput
    products?: ProductUpdateManyWithoutStoreNestedInput
    orders?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoreNestedInput
    sizes?: SizeUncheckedUpdateManyWithoutStoreNestedInput
    colors?: ColorUncheckedUpdateManyWithoutStoreNestedInput
    products?: ProductUncheckedUpdateManyWithoutStoreNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillboardCreateInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutBillboardsInput
    categories?: CategoryCreateNestedManyWithoutBillboardInput
  }

  export type BillboardUncheckedCreateInput = {
    id?: string
    storeId: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutBillboardInput
  }

  export type BillboardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutBillboardsNestedInput
    categories?: CategoryUpdateManyWithoutBillboardNestedInput
  }

  export type BillboardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutBillboardNestedInput
  }

  export type BillboardCreateManyInput = {
    id?: string
    storeId: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillboardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillboardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutCategoriesInput
    billboard: BillboardCreateNestedOneWithoutCategoriesInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    storeId: string
    billboardId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutCategoriesNestedInput
    billboard?: BillboardUpdateOneRequiredWithoutCategoriesNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    billboardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    storeId: string
    billboardId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    billboardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SizeCreateInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutSizesInput
    products?: ProductCreateNestedManyWithoutSizeInput
  }

  export type SizeUncheckedCreateInput = {
    id?: string
    storeId: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutSizeInput
  }

  export type SizeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutSizesNestedInput
    products?: ProductUpdateManyWithoutSizeNestedInput
  }

  export type SizeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type SizeCreateManyInput = {
    id?: string
    storeId: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SizeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SizeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorCreateInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutColorsInput
    products?: ProductCreateNestedManyWithoutColorInput
  }

  export type ColorUncheckedCreateInput = {
    id?: string
    storeId: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutColorInput
  }

  export type ColorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutColorsNestedInput
    products?: ProductUpdateManyWithoutColorNestedInput
  }

  export type ColorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutColorNestedInput
  }

  export type ColorCreateManyInput = {
    id?: string
    storeId: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    size: SizeCreateNestedOneWithoutProductsInput
    color: ColorCreateNestedOneWithoutProductsInput
    images?: ImageCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    storeId: string
    categoryId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    size?: SizeUpdateOneRequiredWithoutProductsNestedInput
    color?: ColorUpdateOneRequiredWithoutProductsNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    storeId: string
    categoryId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    productId: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyInput = {
    id?: string
    productId: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    isPaid?: boolean
    phone?: string
    address?: string
    createdAt?: Date | string
    updated?: Date | string
    store: StoreCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    storeId: string
    isPaid?: boolean
    phone?: string
    address?: string
    createdAt?: Date | string
    updated?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    storeId: string
    isPaid?: boolean
    phone?: string
    address?: string
    createdAt?: Date | string
    updated?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    product: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    productId: string
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    productId: string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type order_detailsCreateInput = {
    confirmation_id: string
    order_time: Date | string
    total_items: number
    order_total: Decimal | DecimalJsLike | number | string
  }

  export type order_detailsUncheckedCreateInput = {
    confirmation_id: string
    order_time: Date | string
    total_items: number
    order_total: Decimal | DecimalJsLike | number | string
  }

  export type order_detailsUpdateInput = {
    confirmation_id?: StringFieldUpdateOperationsInput | string
    order_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_items?: IntFieldUpdateOperationsInput | number
    order_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_detailsUncheckedUpdateInput = {
    confirmation_id?: StringFieldUpdateOperationsInput | string
    order_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_items?: IntFieldUpdateOperationsInput | number
    order_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_detailsCreateManyInput = {
    confirmation_id: string
    order_time: Date | string
    total_items: number
    order_total: Decimal | DecimalJsLike | number | string
  }

  export type order_detailsUpdateManyMutationInput = {
    confirmation_id?: StringFieldUpdateOperationsInput | string
    order_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_items?: IntFieldUpdateOperationsInput | number
    order_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_detailsUncheckedUpdateManyInput = {
    confirmation_id?: StringFieldUpdateOperationsInput | string
    order_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_items?: IntFieldUpdateOperationsInput | number
    order_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateInput = {
    confirmation_id: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    size: string
    color: string
    category_name: string
  }

  export type order_itemsUncheckedCreateInput = {
    id?: number
    confirmation_id: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    size: string
    color: string
    category_name: string
  }

  export type order_itemsUpdateInput = {
    confirmation_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type order_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    confirmation_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type order_itemsCreateManyInput = {
    id?: number
    confirmation_id: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    size: string
    color: string
    category_name: string
  }

  export type order_itemsUpdateManyMutationInput = {
    confirmation_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type order_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    confirmation_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type order_items_joinedCreateInput = {
    confirmation_id: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    size: string
    color: string
    category_name: string
    order_time: Date | string
    total_items: number
    order_total: Decimal | DecimalJsLike | number | string
  }

  export type order_items_joinedUncheckedCreateInput = {
    id?: number
    confirmation_id: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    size: string
    color: string
    category_name: string
    order_time: Date | string
    total_items: number
    order_total: Decimal | DecimalJsLike | number | string
  }

  export type order_items_joinedUpdateInput = {
    confirmation_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    order_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_items?: IntFieldUpdateOperationsInput | number
    order_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_items_joinedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    confirmation_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    order_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_items?: IntFieldUpdateOperationsInput | number
    order_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_items_joinedCreateManyInput = {
    id?: number
    confirmation_id: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    size: string
    color: string
    category_name: string
    order_time: Date | string
    total_items: number
    order_total: Decimal | DecimalJsLike | number | string
  }

  export type order_items_joinedUpdateManyMutationInput = {
    confirmation_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    order_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_items?: IntFieldUpdateOperationsInput | number
    order_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_items_joinedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    confirmation_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    size?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    category_name?: StringFieldUpdateOperationsInput | string
    order_time?: DateTimeFieldUpdateOperationsInput | Date | string
    total_items?: IntFieldUpdateOperationsInput | number
    order_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BillboardListRelationFilter = {
    every?: BillboardWhereInput
    some?: BillboardWhereInput
    none?: BillboardWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type SizeListRelationFilter = {
    every?: SizeWhereInput
    some?: SizeWhereInput
    none?: SizeWhereInput
  }

  export type ColorListRelationFilter = {
    every?: ColorWhereInput
    some?: ColorWhereInput
    none?: ColorWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type BillboardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SizeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ColorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StoreRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type BillboardCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillboardMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillboardMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillboardRelationFilter = {
    is?: BillboardWhereInput
    isNot?: BillboardWhereInput
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    billboardId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    billboardId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    billboardId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SizeCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SizeMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SizeMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColorCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColorMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ColorMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SizeRelationFilter = {
    is?: SizeWhereInput
    isNot?: SizeWhereInput
  }

  export type ColorRelationFilter = {
    is?: ColorWhereInput
    isNot?: ColorWhereInput
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    isFeatured?: SortOrder
    isArchived?: SortOrder
    sizeId?: SortOrder
    colorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    isPaid?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    isPaid?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    isPaid?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type order_detailsCountOrderByAggregateInput = {
    confirmation_id?: SortOrder
    order_time?: SortOrder
    total_items?: SortOrder
    order_total?: SortOrder
  }

  export type order_detailsAvgOrderByAggregateInput = {
    total_items?: SortOrder
    order_total?: SortOrder
  }

  export type order_detailsMaxOrderByAggregateInput = {
    confirmation_id?: SortOrder
    order_time?: SortOrder
    total_items?: SortOrder
    order_total?: SortOrder
  }

  export type order_detailsMinOrderByAggregateInput = {
    confirmation_id?: SortOrder
    order_time?: SortOrder
    total_items?: SortOrder
    order_total?: SortOrder
  }

  export type order_detailsSumOrderByAggregateInput = {
    total_items?: SortOrder
    order_total?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type order_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    confirmation_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    category_name?: SortOrder
  }

  export type order_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type order_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    confirmation_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    category_name?: SortOrder
  }

  export type order_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    confirmation_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    category_name?: SortOrder
  }

  export type order_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type order_items_joinedCountOrderByAggregateInput = {
    id?: SortOrder
    confirmation_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    category_name?: SortOrder
    order_time?: SortOrder
    total_items?: SortOrder
    order_total?: SortOrder
  }

  export type order_items_joinedAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    total_items?: SortOrder
    order_total?: SortOrder
  }

  export type order_items_joinedMaxOrderByAggregateInput = {
    id?: SortOrder
    confirmation_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    category_name?: SortOrder
    order_time?: SortOrder
    total_items?: SortOrder
    order_total?: SortOrder
  }

  export type order_items_joinedMinOrderByAggregateInput = {
    id?: SortOrder
    confirmation_id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    size?: SortOrder
    color?: SortOrder
    category_name?: SortOrder
    order_time?: SortOrder
    total_items?: SortOrder
    order_total?: SortOrder
  }

  export type order_items_joinedSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    total_items?: SortOrder
    order_total?: SortOrder
  }

  export type BillboardCreateNestedManyWithoutStoreInput = {
    create?: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput> | BillboardCreateWithoutStoreInput[] | BillboardUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: BillboardCreateOrConnectWithoutStoreInput | BillboardCreateOrConnectWithoutStoreInput[]
    createMany?: BillboardCreateManyStoreInputEnvelope
    connect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutStoreInput = {
    create?: XOR<CategoryCreateWithoutStoreInput, CategoryUncheckedCreateWithoutStoreInput> | CategoryCreateWithoutStoreInput[] | CategoryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutStoreInput | CategoryCreateOrConnectWithoutStoreInput[]
    createMany?: CategoryCreateManyStoreInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type SizeCreateNestedManyWithoutStoreInput = {
    create?: XOR<SizeCreateWithoutStoreInput, SizeUncheckedCreateWithoutStoreInput> | SizeCreateWithoutStoreInput[] | SizeUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SizeCreateOrConnectWithoutStoreInput | SizeCreateOrConnectWithoutStoreInput[]
    createMany?: SizeCreateManyStoreInputEnvelope
    connect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
  }

  export type ColorCreateNestedManyWithoutStoreInput = {
    create?: XOR<ColorCreateWithoutStoreInput, ColorUncheckedCreateWithoutStoreInput> | ColorCreateWithoutStoreInput[] | ColorUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ColorCreateOrConnectWithoutStoreInput | ColorCreateOrConnectWithoutStoreInput[]
    createMany?: ColorCreateManyStoreInputEnvelope
    connect?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutStoreInput = {
    create?: XOR<ProductCreateWithoutStoreInput, ProductUncheckedCreateWithoutStoreInput> | ProductCreateWithoutStoreInput[] | ProductUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutStoreInput | ProductCreateOrConnectWithoutStoreInput[]
    createMany?: ProductCreateManyStoreInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutStoreInput = {
    create?: XOR<OrderCreateWithoutStoreInput, OrderUncheckedCreateWithoutStoreInput> | OrderCreateWithoutStoreInput[] | OrderUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutStoreInput | OrderCreateOrConnectWithoutStoreInput[]
    createMany?: OrderCreateManyStoreInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BillboardUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput> | BillboardCreateWithoutStoreInput[] | BillboardUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: BillboardCreateOrConnectWithoutStoreInput | BillboardCreateOrConnectWithoutStoreInput[]
    createMany?: BillboardCreateManyStoreInputEnvelope
    connect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<CategoryCreateWithoutStoreInput, CategoryUncheckedCreateWithoutStoreInput> | CategoryCreateWithoutStoreInput[] | CategoryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutStoreInput | CategoryCreateOrConnectWithoutStoreInput[]
    createMany?: CategoryCreateManyStoreInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type SizeUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<SizeCreateWithoutStoreInput, SizeUncheckedCreateWithoutStoreInput> | SizeCreateWithoutStoreInput[] | SizeUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SizeCreateOrConnectWithoutStoreInput | SizeCreateOrConnectWithoutStoreInput[]
    createMany?: SizeCreateManyStoreInputEnvelope
    connect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
  }

  export type ColorUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<ColorCreateWithoutStoreInput, ColorUncheckedCreateWithoutStoreInput> | ColorCreateWithoutStoreInput[] | ColorUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ColorCreateOrConnectWithoutStoreInput | ColorCreateOrConnectWithoutStoreInput[]
    createMany?: ColorCreateManyStoreInputEnvelope
    connect?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<ProductCreateWithoutStoreInput, ProductUncheckedCreateWithoutStoreInput> | ProductCreateWithoutStoreInput[] | ProductUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutStoreInput | ProductCreateOrConnectWithoutStoreInput[]
    createMany?: ProductCreateManyStoreInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<OrderCreateWithoutStoreInput, OrderUncheckedCreateWithoutStoreInput> | OrderCreateWithoutStoreInput[] | OrderUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutStoreInput | OrderCreateOrConnectWithoutStoreInput[]
    createMany?: OrderCreateManyStoreInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BillboardUpdateManyWithoutStoreNestedInput = {
    create?: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput> | BillboardCreateWithoutStoreInput[] | BillboardUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: BillboardCreateOrConnectWithoutStoreInput | BillboardCreateOrConnectWithoutStoreInput[]
    upsert?: BillboardUpsertWithWhereUniqueWithoutStoreInput | BillboardUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: BillboardCreateManyStoreInputEnvelope
    set?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    disconnect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    delete?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    connect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    update?: BillboardUpdateWithWhereUniqueWithoutStoreInput | BillboardUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: BillboardUpdateManyWithWhereWithoutStoreInput | BillboardUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: BillboardScalarWhereInput | BillboardScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutStoreNestedInput = {
    create?: XOR<CategoryCreateWithoutStoreInput, CategoryUncheckedCreateWithoutStoreInput> | CategoryCreateWithoutStoreInput[] | CategoryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutStoreInput | CategoryCreateOrConnectWithoutStoreInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutStoreInput | CategoryUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: CategoryCreateManyStoreInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutStoreInput | CategoryUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutStoreInput | CategoryUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type SizeUpdateManyWithoutStoreNestedInput = {
    create?: XOR<SizeCreateWithoutStoreInput, SizeUncheckedCreateWithoutStoreInput> | SizeCreateWithoutStoreInput[] | SizeUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SizeCreateOrConnectWithoutStoreInput | SizeCreateOrConnectWithoutStoreInput[]
    upsert?: SizeUpsertWithWhereUniqueWithoutStoreInput | SizeUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: SizeCreateManyStoreInputEnvelope
    set?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    disconnect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    delete?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    connect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    update?: SizeUpdateWithWhereUniqueWithoutStoreInput | SizeUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: SizeUpdateManyWithWhereWithoutStoreInput | SizeUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: SizeScalarWhereInput | SizeScalarWhereInput[]
  }

  export type ColorUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ColorCreateWithoutStoreInput, ColorUncheckedCreateWithoutStoreInput> | ColorCreateWithoutStoreInput[] | ColorUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ColorCreateOrConnectWithoutStoreInput | ColorCreateOrConnectWithoutStoreInput[]
    upsert?: ColorUpsertWithWhereUniqueWithoutStoreInput | ColorUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ColorCreateManyStoreInputEnvelope
    set?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
    disconnect?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
    delete?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
    connect?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
    update?: ColorUpdateWithWhereUniqueWithoutStoreInput | ColorUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ColorUpdateManyWithWhereWithoutStoreInput | ColorUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ColorScalarWhereInput | ColorScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ProductCreateWithoutStoreInput, ProductUncheckedCreateWithoutStoreInput> | ProductCreateWithoutStoreInput[] | ProductUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutStoreInput | ProductCreateOrConnectWithoutStoreInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutStoreInput | ProductUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ProductCreateManyStoreInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutStoreInput | ProductUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutStoreInput | ProductUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutStoreNestedInput = {
    create?: XOR<OrderCreateWithoutStoreInput, OrderUncheckedCreateWithoutStoreInput> | OrderCreateWithoutStoreInput[] | OrderUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutStoreInput | OrderCreateOrConnectWithoutStoreInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutStoreInput | OrderUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: OrderCreateManyStoreInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutStoreInput | OrderUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutStoreInput | OrderUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type BillboardUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput> | BillboardCreateWithoutStoreInput[] | BillboardUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: BillboardCreateOrConnectWithoutStoreInput | BillboardCreateOrConnectWithoutStoreInput[]
    upsert?: BillboardUpsertWithWhereUniqueWithoutStoreInput | BillboardUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: BillboardCreateManyStoreInputEnvelope
    set?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    disconnect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    delete?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    connect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    update?: BillboardUpdateWithWhereUniqueWithoutStoreInput | BillboardUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: BillboardUpdateManyWithWhereWithoutStoreInput | BillboardUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: BillboardScalarWhereInput | BillboardScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<CategoryCreateWithoutStoreInput, CategoryUncheckedCreateWithoutStoreInput> | CategoryCreateWithoutStoreInput[] | CategoryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutStoreInput | CategoryCreateOrConnectWithoutStoreInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutStoreInput | CategoryUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: CategoryCreateManyStoreInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutStoreInput | CategoryUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutStoreInput | CategoryUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type SizeUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<SizeCreateWithoutStoreInput, SizeUncheckedCreateWithoutStoreInput> | SizeCreateWithoutStoreInput[] | SizeUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SizeCreateOrConnectWithoutStoreInput | SizeCreateOrConnectWithoutStoreInput[]
    upsert?: SizeUpsertWithWhereUniqueWithoutStoreInput | SizeUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: SizeCreateManyStoreInputEnvelope
    set?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    disconnect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    delete?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    connect?: SizeWhereUniqueInput | SizeWhereUniqueInput[]
    update?: SizeUpdateWithWhereUniqueWithoutStoreInput | SizeUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: SizeUpdateManyWithWhereWithoutStoreInput | SizeUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: SizeScalarWhereInput | SizeScalarWhereInput[]
  }

  export type ColorUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ColorCreateWithoutStoreInput, ColorUncheckedCreateWithoutStoreInput> | ColorCreateWithoutStoreInput[] | ColorUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ColorCreateOrConnectWithoutStoreInput | ColorCreateOrConnectWithoutStoreInput[]
    upsert?: ColorUpsertWithWhereUniqueWithoutStoreInput | ColorUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ColorCreateManyStoreInputEnvelope
    set?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
    disconnect?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
    delete?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
    connect?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
    update?: ColorUpdateWithWhereUniqueWithoutStoreInput | ColorUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ColorUpdateManyWithWhereWithoutStoreInput | ColorUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ColorScalarWhereInput | ColorScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ProductCreateWithoutStoreInput, ProductUncheckedCreateWithoutStoreInput> | ProductCreateWithoutStoreInput[] | ProductUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutStoreInput | ProductCreateOrConnectWithoutStoreInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutStoreInput | ProductUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ProductCreateManyStoreInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutStoreInput | ProductUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutStoreInput | ProductUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<OrderCreateWithoutStoreInput, OrderUncheckedCreateWithoutStoreInput> | OrderCreateWithoutStoreInput[] | OrderUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutStoreInput | OrderCreateOrConnectWithoutStoreInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutStoreInput | OrderUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: OrderCreateManyStoreInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutStoreInput | OrderUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutStoreInput | OrderUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutBillboardsInput = {
    create?: XOR<StoreCreateWithoutBillboardsInput, StoreUncheckedCreateWithoutBillboardsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutBillboardsInput
    connect?: StoreWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutBillboardInput = {
    create?: XOR<CategoryCreateWithoutBillboardInput, CategoryUncheckedCreateWithoutBillboardInput> | CategoryCreateWithoutBillboardInput[] | CategoryUncheckedCreateWithoutBillboardInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutBillboardInput | CategoryCreateOrConnectWithoutBillboardInput[]
    createMany?: CategoryCreateManyBillboardInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutBillboardInput = {
    create?: XOR<CategoryCreateWithoutBillboardInput, CategoryUncheckedCreateWithoutBillboardInput> | CategoryCreateWithoutBillboardInput[] | CategoryUncheckedCreateWithoutBillboardInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutBillboardInput | CategoryCreateOrConnectWithoutBillboardInput[]
    createMany?: CategoryCreateManyBillboardInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type StoreUpdateOneRequiredWithoutBillboardsNestedInput = {
    create?: XOR<StoreCreateWithoutBillboardsInput, StoreUncheckedCreateWithoutBillboardsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutBillboardsInput
    upsert?: StoreUpsertWithoutBillboardsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutBillboardsInput, StoreUpdateWithoutBillboardsInput>, StoreUncheckedUpdateWithoutBillboardsInput>
  }

  export type CategoryUpdateManyWithoutBillboardNestedInput = {
    create?: XOR<CategoryCreateWithoutBillboardInput, CategoryUncheckedCreateWithoutBillboardInput> | CategoryCreateWithoutBillboardInput[] | CategoryUncheckedCreateWithoutBillboardInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutBillboardInput | CategoryCreateOrConnectWithoutBillboardInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutBillboardInput | CategoryUpsertWithWhereUniqueWithoutBillboardInput[]
    createMany?: CategoryCreateManyBillboardInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutBillboardInput | CategoryUpdateWithWhereUniqueWithoutBillboardInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutBillboardInput | CategoryUpdateManyWithWhereWithoutBillboardInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutBillboardNestedInput = {
    create?: XOR<CategoryCreateWithoutBillboardInput, CategoryUncheckedCreateWithoutBillboardInput> | CategoryCreateWithoutBillboardInput[] | CategoryUncheckedCreateWithoutBillboardInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutBillboardInput | CategoryCreateOrConnectWithoutBillboardInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutBillboardInput | CategoryUpsertWithWhereUniqueWithoutBillboardInput[]
    createMany?: CategoryCreateManyBillboardInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutBillboardInput | CategoryUpdateWithWhereUniqueWithoutBillboardInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutBillboardInput | CategoryUpdateManyWithWhereWithoutBillboardInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<StoreCreateWithoutCategoriesInput, StoreUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutCategoriesInput
    connect?: StoreWhereUniqueInput
  }

  export type BillboardCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<BillboardCreateWithoutCategoriesInput, BillboardUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: BillboardCreateOrConnectWithoutCategoriesInput
    connect?: BillboardWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StoreUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<StoreCreateWithoutCategoriesInput, StoreUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutCategoriesInput
    upsert?: StoreUpsertWithoutCategoriesInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutCategoriesInput, StoreUpdateWithoutCategoriesInput>, StoreUncheckedUpdateWithoutCategoriesInput>
  }

  export type BillboardUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<BillboardCreateWithoutCategoriesInput, BillboardUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: BillboardCreateOrConnectWithoutCategoriesInput
    upsert?: BillboardUpsertWithoutCategoriesInput
    connect?: BillboardWhereUniqueInput
    update?: XOR<XOR<BillboardUpdateToOneWithWhereWithoutCategoriesInput, BillboardUpdateWithoutCategoriesInput>, BillboardUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutSizesInput = {
    create?: XOR<StoreCreateWithoutSizesInput, StoreUncheckedCreateWithoutSizesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutSizesInput
    connect?: StoreWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutSizeInput = {
    create?: XOR<ProductCreateWithoutSizeInput, ProductUncheckedCreateWithoutSizeInput> | ProductCreateWithoutSizeInput[] | ProductUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSizeInput | ProductCreateOrConnectWithoutSizeInput[]
    createMany?: ProductCreateManySizeInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutSizeInput = {
    create?: XOR<ProductCreateWithoutSizeInput, ProductUncheckedCreateWithoutSizeInput> | ProductCreateWithoutSizeInput[] | ProductUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSizeInput | ProductCreateOrConnectWithoutSizeInput[]
    createMany?: ProductCreateManySizeInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StoreUpdateOneRequiredWithoutSizesNestedInput = {
    create?: XOR<StoreCreateWithoutSizesInput, StoreUncheckedCreateWithoutSizesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutSizesInput
    upsert?: StoreUpsertWithoutSizesInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutSizesInput, StoreUpdateWithoutSizesInput>, StoreUncheckedUpdateWithoutSizesInput>
  }

  export type ProductUpdateManyWithoutSizeNestedInput = {
    create?: XOR<ProductCreateWithoutSizeInput, ProductUncheckedCreateWithoutSizeInput> | ProductCreateWithoutSizeInput[] | ProductUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSizeInput | ProductCreateOrConnectWithoutSizeInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSizeInput | ProductUpsertWithWhereUniqueWithoutSizeInput[]
    createMany?: ProductCreateManySizeInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSizeInput | ProductUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSizeInput | ProductUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutSizeNestedInput = {
    create?: XOR<ProductCreateWithoutSizeInput, ProductUncheckedCreateWithoutSizeInput> | ProductCreateWithoutSizeInput[] | ProductUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSizeInput | ProductCreateOrConnectWithoutSizeInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSizeInput | ProductUpsertWithWhereUniqueWithoutSizeInput[]
    createMany?: ProductCreateManySizeInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSizeInput | ProductUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSizeInput | ProductUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutColorsInput = {
    create?: XOR<StoreCreateWithoutColorsInput, StoreUncheckedCreateWithoutColorsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutColorsInput
    connect?: StoreWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutColorInput = {
    create?: XOR<ProductCreateWithoutColorInput, ProductUncheckedCreateWithoutColorInput> | ProductCreateWithoutColorInput[] | ProductUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutColorInput | ProductCreateOrConnectWithoutColorInput[]
    createMany?: ProductCreateManyColorInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutColorInput = {
    create?: XOR<ProductCreateWithoutColorInput, ProductUncheckedCreateWithoutColorInput> | ProductCreateWithoutColorInput[] | ProductUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutColorInput | ProductCreateOrConnectWithoutColorInput[]
    createMany?: ProductCreateManyColorInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StoreUpdateOneRequiredWithoutColorsNestedInput = {
    create?: XOR<StoreCreateWithoutColorsInput, StoreUncheckedCreateWithoutColorsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutColorsInput
    upsert?: StoreUpsertWithoutColorsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutColorsInput, StoreUpdateWithoutColorsInput>, StoreUncheckedUpdateWithoutColorsInput>
  }

  export type ProductUpdateManyWithoutColorNestedInput = {
    create?: XOR<ProductCreateWithoutColorInput, ProductUncheckedCreateWithoutColorInput> | ProductCreateWithoutColorInput[] | ProductUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutColorInput | ProductCreateOrConnectWithoutColorInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutColorInput | ProductUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: ProductCreateManyColorInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutColorInput | ProductUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutColorInput | ProductUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutColorNestedInput = {
    create?: XOR<ProductCreateWithoutColorInput, ProductUncheckedCreateWithoutColorInput> | ProductCreateWithoutColorInput[] | ProductUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutColorInput | ProductCreateOrConnectWithoutColorInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutColorInput | ProductUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: ProductCreateManyColorInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutColorInput | ProductUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutColorInput | ProductUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutProductsInput = {
    create?: XOR<StoreCreateWithoutProductsInput, StoreUncheckedCreateWithoutProductsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutProductsInput
    connect?: StoreWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type SizeCreateNestedOneWithoutProductsInput = {
    create?: XOR<SizeCreateWithoutProductsInput, SizeUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SizeCreateOrConnectWithoutProductsInput
    connect?: SizeWhereUniqueInput
  }

  export type ColorCreateNestedOneWithoutProductsInput = {
    create?: XOR<ColorCreateWithoutProductsInput, ColorUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ColorCreateOrConnectWithoutProductsInput
    connect?: ColorWhereUniqueInput
  }

  export type ImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StoreUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<StoreCreateWithoutProductsInput, StoreUncheckedCreateWithoutProductsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutProductsInput
    upsert?: StoreUpsertWithoutProductsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutProductsInput, StoreUpdateWithoutProductsInput>, StoreUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type SizeUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<SizeCreateWithoutProductsInput, SizeUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SizeCreateOrConnectWithoutProductsInput
    upsert?: SizeUpsertWithoutProductsInput
    connect?: SizeWhereUniqueInput
    update?: XOR<XOR<SizeUpdateToOneWithWhereWithoutProductsInput, SizeUpdateWithoutProductsInput>, SizeUncheckedUpdateWithoutProductsInput>
  }

  export type ColorUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ColorCreateWithoutProductsInput, ColorUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ColorCreateOrConnectWithoutProductsInput
    upsert?: ColorUpsertWithoutProductsInput
    connect?: ColorWhereUniqueInput
    update?: XOR<XOR<ColorUpdateToOneWithWhereWithoutProductsInput, ColorUpdateWithoutProductsInput>, ColorUncheckedUpdateWithoutProductsInput>
  }

  export type ImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProductInput | ImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProductInput | ImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProductInput | ImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProductInput | ImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProductInput | ImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProductInput | ImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    upsert?: ProductUpsertWithoutImagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutImagesInput, ProductUpdateWithoutImagesInput>, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type StoreCreateNestedOneWithoutOrdersInput = {
    create?: XOR<StoreCreateWithoutOrdersInput, StoreUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: StoreCreateOrConnectWithoutOrdersInput
    connect?: StoreWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type StoreUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<StoreCreateWithoutOrdersInput, StoreUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: StoreCreateOrConnectWithoutOrdersInput
    upsert?: StoreUpsertWithoutOrdersInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutOrdersInput, StoreUpdateWithoutOrdersInput>, StoreUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    upsert?: ProductUpsertWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderItemsInput, ProductUpdateWithoutOrderItemsInput>, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BillboardCreateWithoutStoreInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutBillboardInput
  }

  export type BillboardUncheckedCreateWithoutStoreInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutBillboardInput
  }

  export type BillboardCreateOrConnectWithoutStoreInput = {
    where: BillboardWhereUniqueInput
    create: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput>
  }

  export type BillboardCreateManyStoreInputEnvelope = {
    data: BillboardCreateManyStoreInput | BillboardCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutStoreInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboard: BillboardCreateNestedOneWithoutCategoriesInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutStoreInput = {
    id?: string
    billboardId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutStoreInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutStoreInput, CategoryUncheckedCreateWithoutStoreInput>
  }

  export type CategoryCreateManyStoreInputEnvelope = {
    data: CategoryCreateManyStoreInput | CategoryCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type SizeCreateWithoutStoreInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutSizeInput
  }

  export type SizeUncheckedCreateWithoutStoreInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutSizeInput
  }

  export type SizeCreateOrConnectWithoutStoreInput = {
    where: SizeWhereUniqueInput
    create: XOR<SizeCreateWithoutStoreInput, SizeUncheckedCreateWithoutStoreInput>
  }

  export type SizeCreateManyStoreInputEnvelope = {
    data: SizeCreateManyStoreInput | SizeCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type ColorCreateWithoutStoreInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutColorInput
  }

  export type ColorUncheckedCreateWithoutStoreInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutColorInput
  }

  export type ColorCreateOrConnectWithoutStoreInput = {
    where: ColorWhereUniqueInput
    create: XOR<ColorCreateWithoutStoreInput, ColorUncheckedCreateWithoutStoreInput>
  }

  export type ColorCreateManyStoreInputEnvelope = {
    data: ColorCreateManyStoreInput | ColorCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutStoreInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    size: SizeCreateNestedOneWithoutProductsInput
    color: ColorCreateNestedOneWithoutProductsInput
    images?: ImageCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStoreInput = {
    id?: string
    categoryId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStoreInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStoreInput, ProductUncheckedCreateWithoutStoreInput>
  }

  export type ProductCreateManyStoreInputEnvelope = {
    data: ProductCreateManyStoreInput | ProductCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutStoreInput = {
    id?: string
    isPaid?: boolean
    phone?: string
    address?: string
    createdAt?: Date | string
    updated?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutStoreInput = {
    id?: string
    isPaid?: boolean
    phone?: string
    address?: string
    createdAt?: Date | string
    updated?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutStoreInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutStoreInput, OrderUncheckedCreateWithoutStoreInput>
  }

  export type OrderCreateManyStoreInputEnvelope = {
    data: OrderCreateManyStoreInput | OrderCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type BillboardUpsertWithWhereUniqueWithoutStoreInput = {
    where: BillboardWhereUniqueInput
    update: XOR<BillboardUpdateWithoutStoreInput, BillboardUncheckedUpdateWithoutStoreInput>
    create: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput>
  }

  export type BillboardUpdateWithWhereUniqueWithoutStoreInput = {
    where: BillboardWhereUniqueInput
    data: XOR<BillboardUpdateWithoutStoreInput, BillboardUncheckedUpdateWithoutStoreInput>
  }

  export type BillboardUpdateManyWithWhereWithoutStoreInput = {
    where: BillboardScalarWhereInput
    data: XOR<BillboardUpdateManyMutationInput, BillboardUncheckedUpdateManyWithoutStoreInput>
  }

  export type BillboardScalarWhereInput = {
    AND?: BillboardScalarWhereInput | BillboardScalarWhereInput[]
    OR?: BillboardScalarWhereInput[]
    NOT?: BillboardScalarWhereInput | BillboardScalarWhereInput[]
    id?: StringFilter<"Billboard"> | string
    storeId?: StringFilter<"Billboard"> | string
    label?: StringFilter<"Billboard"> | string
    imageUrl?: StringFilter<"Billboard"> | string
    createdAt?: DateTimeFilter<"Billboard"> | Date | string
    updatedAt?: DateTimeFilter<"Billboard"> | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutStoreInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutStoreInput, CategoryUncheckedUpdateWithoutStoreInput>
    create: XOR<CategoryCreateWithoutStoreInput, CategoryUncheckedCreateWithoutStoreInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutStoreInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutStoreInput, CategoryUncheckedUpdateWithoutStoreInput>
  }

  export type CategoryUpdateManyWithWhereWithoutStoreInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutStoreInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    storeId?: StringFilter<"Category"> | string
    billboardId?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type SizeUpsertWithWhereUniqueWithoutStoreInput = {
    where: SizeWhereUniqueInput
    update: XOR<SizeUpdateWithoutStoreInput, SizeUncheckedUpdateWithoutStoreInput>
    create: XOR<SizeCreateWithoutStoreInput, SizeUncheckedCreateWithoutStoreInput>
  }

  export type SizeUpdateWithWhereUniqueWithoutStoreInput = {
    where: SizeWhereUniqueInput
    data: XOR<SizeUpdateWithoutStoreInput, SizeUncheckedUpdateWithoutStoreInput>
  }

  export type SizeUpdateManyWithWhereWithoutStoreInput = {
    where: SizeScalarWhereInput
    data: XOR<SizeUpdateManyMutationInput, SizeUncheckedUpdateManyWithoutStoreInput>
  }

  export type SizeScalarWhereInput = {
    AND?: SizeScalarWhereInput | SizeScalarWhereInput[]
    OR?: SizeScalarWhereInput[]
    NOT?: SizeScalarWhereInput | SizeScalarWhereInput[]
    id?: StringFilter<"Size"> | string
    storeId?: StringFilter<"Size"> | string
    name?: StringFilter<"Size"> | string
    value?: StringFilter<"Size"> | string
    createdAt?: DateTimeFilter<"Size"> | Date | string
    updatedAt?: DateTimeFilter<"Size"> | Date | string
  }

  export type ColorUpsertWithWhereUniqueWithoutStoreInput = {
    where: ColorWhereUniqueInput
    update: XOR<ColorUpdateWithoutStoreInput, ColorUncheckedUpdateWithoutStoreInput>
    create: XOR<ColorCreateWithoutStoreInput, ColorUncheckedCreateWithoutStoreInput>
  }

  export type ColorUpdateWithWhereUniqueWithoutStoreInput = {
    where: ColorWhereUniqueInput
    data: XOR<ColorUpdateWithoutStoreInput, ColorUncheckedUpdateWithoutStoreInput>
  }

  export type ColorUpdateManyWithWhereWithoutStoreInput = {
    where: ColorScalarWhereInput
    data: XOR<ColorUpdateManyMutationInput, ColorUncheckedUpdateManyWithoutStoreInput>
  }

  export type ColorScalarWhereInput = {
    AND?: ColorScalarWhereInput | ColorScalarWhereInput[]
    OR?: ColorScalarWhereInput[]
    NOT?: ColorScalarWhereInput | ColorScalarWhereInput[]
    id?: StringFilter<"Color"> | string
    storeId?: StringFilter<"Color"> | string
    name?: StringFilter<"Color"> | string
    value?: StringFilter<"Color"> | string
    createdAt?: DateTimeFilter<"Color"> | Date | string
    updatedAt?: DateTimeFilter<"Color"> | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutStoreInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutStoreInput, ProductUncheckedUpdateWithoutStoreInput>
    create: XOR<ProductCreateWithoutStoreInput, ProductUncheckedCreateWithoutStoreInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutStoreInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutStoreInput, ProductUncheckedUpdateWithoutStoreInput>
  }

  export type ProductUpdateManyWithWhereWithoutStoreInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutStoreInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    storeId?: StringFilter<"Product"> | string
    categoryId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFilter<"Product"> | boolean
    isArchived?: BoolFilter<"Product"> | boolean
    sizeId?: StringFilter<"Product"> | string
    colorId?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutStoreInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutStoreInput, OrderUncheckedUpdateWithoutStoreInput>
    create: XOR<OrderCreateWithoutStoreInput, OrderUncheckedCreateWithoutStoreInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutStoreInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutStoreInput, OrderUncheckedUpdateWithoutStoreInput>
  }

  export type OrderUpdateManyWithWhereWithoutStoreInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutStoreInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    storeId?: StringFilter<"Order"> | string
    isPaid?: BoolFilter<"Order"> | boolean
    phone?: StringFilter<"Order"> | string
    address?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updated?: DateTimeFilter<"Order"> | Date | string
  }

  export type StoreCreateWithoutBillboardsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutStoreInput
    sizes?: SizeCreateNestedManyWithoutStoreInput
    colors?: ColorCreateNestedManyWithoutStoreInput
    products?: ProductCreateNestedManyWithoutStoreInput
    orders?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutBillboardsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutStoreInput
    sizes?: SizeUncheckedCreateNestedManyWithoutStoreInput
    colors?: ColorUncheckedCreateNestedManyWithoutStoreInput
    products?: ProductUncheckedCreateNestedManyWithoutStoreInput
    orders?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutBillboardsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutBillboardsInput, StoreUncheckedCreateWithoutBillboardsInput>
  }

  export type CategoryCreateWithoutBillboardInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutCategoriesInput
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutBillboardInput = {
    id?: string
    storeId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutBillboardInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBillboardInput, CategoryUncheckedCreateWithoutBillboardInput>
  }

  export type CategoryCreateManyBillboardInputEnvelope = {
    data: CategoryCreateManyBillboardInput | CategoryCreateManyBillboardInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithoutBillboardsInput = {
    update: XOR<StoreUpdateWithoutBillboardsInput, StoreUncheckedUpdateWithoutBillboardsInput>
    create: XOR<StoreCreateWithoutBillboardsInput, StoreUncheckedCreateWithoutBillboardsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutBillboardsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutBillboardsInput, StoreUncheckedUpdateWithoutBillboardsInput>
  }

  export type StoreUpdateWithoutBillboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutStoreNestedInput
    sizes?: SizeUpdateManyWithoutStoreNestedInput
    colors?: ColorUpdateManyWithoutStoreNestedInput
    products?: ProductUpdateManyWithoutStoreNestedInput
    orders?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutBillboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutStoreNestedInput
    sizes?: SizeUncheckedUpdateManyWithoutStoreNestedInput
    colors?: ColorUncheckedUpdateManyWithoutStoreNestedInput
    products?: ProductUncheckedUpdateManyWithoutStoreNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutBillboardInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutBillboardInput, CategoryUncheckedUpdateWithoutBillboardInput>
    create: XOR<CategoryCreateWithoutBillboardInput, CategoryUncheckedCreateWithoutBillboardInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutBillboardInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutBillboardInput, CategoryUncheckedUpdateWithoutBillboardInput>
  }

  export type CategoryUpdateManyWithWhereWithoutBillboardInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutBillboardInput>
  }

  export type StoreCreateWithoutCategoriesInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardCreateNestedManyWithoutStoreInput
    sizes?: SizeCreateNestedManyWithoutStoreInput
    colors?: ColorCreateNestedManyWithoutStoreInput
    products?: ProductCreateNestedManyWithoutStoreInput
    orders?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
    sizes?: SizeUncheckedCreateNestedManyWithoutStoreInput
    colors?: ColorUncheckedCreateNestedManyWithoutStoreInput
    products?: ProductUncheckedCreateNestedManyWithoutStoreInput
    orders?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutCategoriesInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutCategoriesInput, StoreUncheckedCreateWithoutCategoriesInput>
  }

  export type BillboardCreateWithoutCategoriesInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutBillboardsInput
  }

  export type BillboardUncheckedCreateWithoutCategoriesInput = {
    id?: string
    storeId: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillboardCreateOrConnectWithoutCategoriesInput = {
    where: BillboardWhereUniqueInput
    create: XOR<BillboardCreateWithoutCategoriesInput, BillboardUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutProductsInput
    size: SizeCreateNestedOneWithoutProductsInput
    color: ColorCreateNestedOneWithoutProductsInput
    images?: ImageCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    storeId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithoutCategoriesInput = {
    update: XOR<StoreUpdateWithoutCategoriesInput, StoreUncheckedUpdateWithoutCategoriesInput>
    create: XOR<StoreCreateWithoutCategoriesInput, StoreUncheckedCreateWithoutCategoriesInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutCategoriesInput, StoreUncheckedUpdateWithoutCategoriesInput>
  }

  export type StoreUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
    sizes?: SizeUpdateManyWithoutStoreNestedInput
    colors?: ColorUpdateManyWithoutStoreNestedInput
    products?: ProductUpdateManyWithoutStoreNestedInput
    orders?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
    sizes?: SizeUncheckedUpdateManyWithoutStoreNestedInput
    colors?: ColorUncheckedUpdateManyWithoutStoreNestedInput
    products?: ProductUncheckedUpdateManyWithoutStoreNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type BillboardUpsertWithoutCategoriesInput = {
    update: XOR<BillboardUpdateWithoutCategoriesInput, BillboardUncheckedUpdateWithoutCategoriesInput>
    create: XOR<BillboardCreateWithoutCategoriesInput, BillboardUncheckedCreateWithoutCategoriesInput>
    where?: BillboardWhereInput
  }

  export type BillboardUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: BillboardWhereInput
    data: XOR<BillboardUpdateWithoutCategoriesInput, BillboardUncheckedUpdateWithoutCategoriesInput>
  }

  export type BillboardUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutBillboardsNestedInput
  }

  export type BillboardUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type StoreCreateWithoutSizesInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardCreateNestedManyWithoutStoreInput
    categories?: CategoryCreateNestedManyWithoutStoreInput
    colors?: ColorCreateNestedManyWithoutStoreInput
    products?: ProductCreateNestedManyWithoutStoreInput
    orders?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutSizesInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoreInput
    colors?: ColorUncheckedCreateNestedManyWithoutStoreInput
    products?: ProductUncheckedCreateNestedManyWithoutStoreInput
    orders?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutSizesInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutSizesInput, StoreUncheckedCreateWithoutSizesInput>
  }

  export type ProductCreateWithoutSizeInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    color: ColorCreateNestedOneWithoutProductsInput
    images?: ImageCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSizeInput = {
    id?: string
    storeId: string
    categoryId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSizeInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSizeInput, ProductUncheckedCreateWithoutSizeInput>
  }

  export type ProductCreateManySizeInputEnvelope = {
    data: ProductCreateManySizeInput | ProductCreateManySizeInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithoutSizesInput = {
    update: XOR<StoreUpdateWithoutSizesInput, StoreUncheckedUpdateWithoutSizesInput>
    create: XOR<StoreCreateWithoutSizesInput, StoreUncheckedCreateWithoutSizesInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutSizesInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutSizesInput, StoreUncheckedUpdateWithoutSizesInput>
  }

  export type StoreUpdateWithoutSizesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
    categories?: CategoryUpdateManyWithoutStoreNestedInput
    colors?: ColorUpdateManyWithoutStoreNestedInput
    products?: ProductUpdateManyWithoutStoreNestedInput
    orders?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutSizesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoreNestedInput
    colors?: ColorUncheckedUpdateManyWithoutStoreNestedInput
    products?: ProductUncheckedUpdateManyWithoutStoreNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutSizeInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutSizeInput, ProductUncheckedUpdateWithoutSizeInput>
    create: XOR<ProductCreateWithoutSizeInput, ProductUncheckedCreateWithoutSizeInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutSizeInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutSizeInput, ProductUncheckedUpdateWithoutSizeInput>
  }

  export type ProductUpdateManyWithWhereWithoutSizeInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutSizeInput>
  }

  export type StoreCreateWithoutColorsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardCreateNestedManyWithoutStoreInput
    categories?: CategoryCreateNestedManyWithoutStoreInput
    sizes?: SizeCreateNestedManyWithoutStoreInput
    products?: ProductCreateNestedManyWithoutStoreInput
    orders?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutColorsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoreInput
    sizes?: SizeUncheckedCreateNestedManyWithoutStoreInput
    products?: ProductUncheckedCreateNestedManyWithoutStoreInput
    orders?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutColorsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutColorsInput, StoreUncheckedCreateWithoutColorsInput>
  }

  export type ProductCreateWithoutColorInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    size: SizeCreateNestedOneWithoutProductsInput
    images?: ImageCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutColorInput = {
    id?: string
    storeId: string
    categoryId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutColorInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutColorInput, ProductUncheckedCreateWithoutColorInput>
  }

  export type ProductCreateManyColorInputEnvelope = {
    data: ProductCreateManyColorInput | ProductCreateManyColorInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithoutColorsInput = {
    update: XOR<StoreUpdateWithoutColorsInput, StoreUncheckedUpdateWithoutColorsInput>
    create: XOR<StoreCreateWithoutColorsInput, StoreUncheckedCreateWithoutColorsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutColorsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutColorsInput, StoreUncheckedUpdateWithoutColorsInput>
  }

  export type StoreUpdateWithoutColorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
    categories?: CategoryUpdateManyWithoutStoreNestedInput
    sizes?: SizeUpdateManyWithoutStoreNestedInput
    products?: ProductUpdateManyWithoutStoreNestedInput
    orders?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutColorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoreNestedInput
    sizes?: SizeUncheckedUpdateManyWithoutStoreNestedInput
    products?: ProductUncheckedUpdateManyWithoutStoreNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutColorInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutColorInput, ProductUncheckedUpdateWithoutColorInput>
    create: XOR<ProductCreateWithoutColorInput, ProductUncheckedCreateWithoutColorInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutColorInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutColorInput, ProductUncheckedUpdateWithoutColorInput>
  }

  export type ProductUpdateManyWithWhereWithoutColorInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutColorInput>
  }

  export type StoreCreateWithoutProductsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardCreateNestedManyWithoutStoreInput
    categories?: CategoryCreateNestedManyWithoutStoreInput
    sizes?: SizeCreateNestedManyWithoutStoreInput
    colors?: ColorCreateNestedManyWithoutStoreInput
    orders?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoreInput
    sizes?: SizeUncheckedCreateNestedManyWithoutStoreInput
    colors?: ColorUncheckedCreateNestedManyWithoutStoreInput
    orders?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutProductsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutProductsInput, StoreUncheckedCreateWithoutProductsInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutCategoriesInput
    billboard: BillboardCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    storeId: string
    billboardId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type SizeCreateWithoutProductsInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutSizesInput
  }

  export type SizeUncheckedCreateWithoutProductsInput = {
    id?: string
    storeId: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SizeCreateOrConnectWithoutProductsInput = {
    where: SizeWhereUniqueInput
    create: XOR<SizeCreateWithoutProductsInput, SizeUncheckedCreateWithoutProductsInput>
  }

  export type ColorCreateWithoutProductsInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutColorsInput
  }

  export type ColorUncheckedCreateWithoutProductsInput = {
    id?: string
    storeId: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColorCreateOrConnectWithoutProductsInput = {
    where: ColorWhereUniqueInput
    create: XOR<ColorCreateWithoutProductsInput, ColorUncheckedCreateWithoutProductsInput>
  }

  export type ImageCreateWithoutProductInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUncheckedCreateWithoutProductInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutProductInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
  }

  export type ImageCreateManyProductInputEnvelope = {
    data: ImageCreateManyProductInput | ImageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutProductInput = {
    id?: string
    order: OrderCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: string
    orderId: string
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: OrderItemCreateManyProductInput | OrderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithoutProductsInput = {
    update: XOR<StoreUpdateWithoutProductsInput, StoreUncheckedUpdateWithoutProductsInput>
    create: XOR<StoreCreateWithoutProductsInput, StoreUncheckedCreateWithoutProductsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutProductsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutProductsInput, StoreUncheckedUpdateWithoutProductsInput>
  }

  export type StoreUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
    categories?: CategoryUpdateManyWithoutStoreNestedInput
    sizes?: SizeUpdateManyWithoutStoreNestedInput
    colors?: ColorUpdateManyWithoutStoreNestedInput
    orders?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoreNestedInput
    sizes?: SizeUncheckedUpdateManyWithoutStoreNestedInput
    colors?: ColorUncheckedUpdateManyWithoutStoreNestedInput
    orders?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutCategoriesNestedInput
    billboard?: BillboardUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    billboardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SizeUpsertWithoutProductsInput = {
    update: XOR<SizeUpdateWithoutProductsInput, SizeUncheckedUpdateWithoutProductsInput>
    create: XOR<SizeCreateWithoutProductsInput, SizeUncheckedCreateWithoutProductsInput>
    where?: SizeWhereInput
  }

  export type SizeUpdateToOneWithWhereWithoutProductsInput = {
    where?: SizeWhereInput
    data: XOR<SizeUpdateWithoutProductsInput, SizeUncheckedUpdateWithoutProductsInput>
  }

  export type SizeUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutSizesNestedInput
  }

  export type SizeUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorUpsertWithoutProductsInput = {
    update: XOR<ColorUpdateWithoutProductsInput, ColorUncheckedUpdateWithoutProductsInput>
    create: XOR<ColorCreateWithoutProductsInput, ColorUncheckedCreateWithoutProductsInput>
    where?: ColorWhereInput
  }

  export type ColorUpdateToOneWithWhereWithoutProductsInput = {
    where?: ColorWhereInput
    data: XOR<ColorUpdateWithoutProductsInput, ColorUncheckedUpdateWithoutProductsInput>
  }

  export type ColorUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutColorsNestedInput
  }

  export type ColorUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutProductInput, ImageUncheckedUpdateWithoutProductInput>
    create: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutProductInput, ImageUncheckedUpdateWithoutProductInput>
  }

  export type ImageUpdateManyWithWhereWithoutProductInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    productId?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
  }

  export type ProductCreateWithoutImagesInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    size: SizeCreateNestedOneWithoutProductsInput
    color: ColorCreateNestedOneWithoutProductsInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutImagesInput = {
    id?: string
    storeId: string
    categoryId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
  }

  export type ProductUpsertWithoutImagesInput = {
    update: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    size?: SizeUpdateOneRequiredWithoutProductsNestedInput
    color?: ColorUpdateOneRequiredWithoutProductsNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type StoreCreateWithoutOrdersInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardCreateNestedManyWithoutStoreInput
    categories?: CategoryCreateNestedManyWithoutStoreInput
    sizes?: SizeCreateNestedManyWithoutStoreInput
    colors?: ColorCreateNestedManyWithoutStoreInput
    products?: ProductCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
    categories?: CategoryUncheckedCreateNestedManyWithoutStoreInput
    sizes?: SizeUncheckedCreateNestedManyWithoutStoreInput
    colors?: ColorUncheckedCreateNestedManyWithoutStoreInput
    products?: ProductUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutOrdersInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutOrdersInput, StoreUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    product: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    productId: string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithoutOrdersInput = {
    update: XOR<StoreUpdateWithoutOrdersInput, StoreUncheckedUpdateWithoutOrdersInput>
    create: XOR<StoreCreateWithoutOrdersInput, StoreUncheckedCreateWithoutOrdersInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutOrdersInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutOrdersInput, StoreUncheckedUpdateWithoutOrdersInput>
  }

  export type StoreUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
    categories?: CategoryUpdateManyWithoutStoreNestedInput
    sizes?: SizeUpdateManyWithoutStoreNestedInput
    colors?: ColorUpdateManyWithoutStoreNestedInput
    products?: ProductUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutStoreNestedInput
    sizes?: SizeUncheckedUpdateManyWithoutStoreNestedInput
    colors?: ColorUncheckedUpdateManyWithoutStoreNestedInput
    products?: ProductUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutOrderItemsInput = {
    id?: string
    isPaid?: boolean
    phone?: string
    address?: string
    createdAt?: Date | string
    updated?: Date | string
    store: StoreCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    storeId: string
    isPaid?: boolean
    phone?: string
    address?: string
    createdAt?: Date | string
    updated?: Date | string
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type ProductCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutProductsInput
    category: CategoryCreateNestedOneWithoutProductsInput
    size: SizeCreateNestedOneWithoutProductsInput
    color: ColorCreateNestedOneWithoutProductsInput
    images?: ImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    storeId: string
    categoryId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutOrderItemsInput = {
    update: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    size?: SizeUpdateOneRequiredWithoutProductsNestedInput
    color?: ColorUpdateOneRequiredWithoutProductsNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type BillboardCreateManyStoreInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateManyStoreInput = {
    id?: string
    billboardId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SizeCreateManyStoreInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColorCreateManyStoreInput = {
    id?: string
    name: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateManyStoreInput = {
    id?: string
    categoryId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyStoreInput = {
    id?: string
    isPaid?: boolean
    phone?: string
    address?: string
    createdAt?: Date | string
    updated?: Date | string
  }

  export type BillboardUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutBillboardNestedInput
  }

  export type BillboardUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutBillboardNestedInput
  }

  export type BillboardUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboard?: BillboardUpdateOneRequiredWithoutCategoriesNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    billboardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    billboardId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SizeUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutSizeNestedInput
  }

  export type SizeUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type SizeUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColorUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutColorNestedInput
  }

  export type ColorUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutColorNestedInput
  }

  export type ColorUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    size?: SizeUpdateOneRequiredWithoutProductsNestedInput
    color?: ColorUpdateOneRequiredWithoutProductsNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyBillboardInput = {
    id?: string
    storeId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateWithoutBillboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutCategoriesNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBillboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutBillboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    storeId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutProductsNestedInput
    size?: SizeUpdateOneRequiredWithoutProductsNestedInput
    color?: ColorUpdateOneRequiredWithoutProductsNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManySizeInput = {
    id?: string
    storeId: string
    categoryId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    colorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    color?: ColorUpdateOneRequiredWithoutProductsNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutSizeInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    colorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyColorInput = {
    id?: string
    storeId: string
    categoryId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    isFeatured?: boolean
    isArchived?: boolean
    sizeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutColorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    size?: SizeUpdateOneRequiredWithoutProductsNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutColorInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutColorInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    sizeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyProductInput = {
    id?: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateManyProductInput = {
    id?: string
    orderId: string
  }

  export type ImageUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    productId: string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StoreCountOutputTypeDefaultArgs instead
     */
    export type StoreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BillboardCountOutputTypeDefaultArgs instead
     */
    export type BillboardCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BillboardCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SizeCountOutputTypeDefaultArgs instead
     */
    export type SizeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SizeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ColorCountOutputTypeDefaultArgs instead
     */
    export type ColorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ColorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreDefaultArgs instead
     */
    export type StoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BillboardDefaultArgs instead
     */
    export type BillboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BillboardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SizeDefaultArgs instead
     */
    export type SizeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SizeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ColorDefaultArgs instead
     */
    export type ColorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ColorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImageDefaultArgs instead
     */
    export type ImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderItemDefaultArgs instead
     */
    export type OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use order_detailsDefaultArgs instead
     */
    export type order_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = order_detailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use order_itemsDefaultArgs instead
     */
    export type order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = order_itemsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use order_items_joinedDefaultArgs instead
     */
    export type order_items_joinedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = order_items_joinedDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}