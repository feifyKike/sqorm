export type NonNullableObj = NonNullable<object>
export type Nullable<T> = T | null

export type ObjConstructor<T> = new (params: T) => T
