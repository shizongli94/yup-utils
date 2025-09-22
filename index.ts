import { mixed, InferType, Schema, string } from 'yup'

// deparacted
export function enumSchema<T extends Record<string, string | number>>(enumObj: T): Schema<T[keyof T] | undefined | null> {
  const values = Object.values(enumObj) as unknown as T[keyof T][];
  return mixed<T[keyof T]>().oneOf(values);
}

// deparacted
export function enumSchemaWithDefault<T extends Record<string, string | number>>(
  enumObj: T,
  defaultValue: T[keyof T]
) {
  const values = Object.values(enumObj) as T[keyof T][];
  return mixed<T[keyof T]>().oneOf(values).default(defaultValue);
}

// deparacted
export function enumSchemaRequired<T extends Record<string, string | number>>(enumObj: T): Schema<T[keyof T]> {
  const values = Object.values(enumObj) as unknown as T[keyof T][];
  return mixed<T[keyof T]>().oneOf(values).defined().required();
}

// deparacted
export function enumSchemeUndefinedOnError<T extends Record<string, string | number>>(enumObj: T): Schema<T[keyof T] | undefined> {
  type Value = T[keyof T]
  const values = Object.values(enumObj) as Value[];
  return mixed<Value>().transform(v => values.includes(v as Value) ? v as Value : undefined)
}

export function createEnumSchema<T extends Record<string, string | number>>(
  enumObj: T
) {
  const values = Object.values(enumObj) as T[keyof T][];
  
  return {
    optional: (): Schema<T[keyof T] | undefined> => 
      mixed<T[keyof T]>()
        .transform(v => values.includes(v as T[keyof T]) ? v as T[keyof T] : undefined),
    
    required: (): Schema<T[keyof T]> => 
      mixed<T[keyof T]>()
        .transform(v => values.includes(v as T[keyof T]) ? v as T[keyof T] : undefined)
        .required() as Schema<T[keyof T]>,
    
    withDefault: (defaultValue: T[keyof T]): Schema<T[keyof T]> => 
      mixed<T[keyof T]>()
        .transform(v => values.includes(v as T[keyof T]) ? v as T[keyof T] : undefined)
        .default(defaultValue) as Schema<T[keyof T]>
  };
}


export function uuid() {
  return string().trim().uuid()
}

export function sha256Hex() {
  return string().trim().length(64).lowercase().matches(/^[0-9a-f]{64}$/)
}

export function mobilePhoneNumber_cn() {
  return string().trim().matches(/^1[0-9]{10}$/)
}