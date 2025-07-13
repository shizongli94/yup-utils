import { mixed, InferType, Schema, string } from 'yup'

export function enumSchema<T extends Record<string, string | number>>(enumObj: T): Schema<T[keyof T] | undefined | null> {
  const values = Object.values(enumObj) as unknown as T[keyof T][];
  return mixed<T[keyof T]>().oneOf(values);
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