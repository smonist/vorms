import { useFormInternalContext } from './useFormInternalContext';
import type { FieldValidator, UseFormRegisterReturn } from '../types';

type UseFieldOptions<Value> = {
  validate?: FieldValidator<Value>;
};

export function useField<Value>(
  name: string,
  options: UseFieldOptions<Value> = {},
): UseFormRegisterReturn<Value> {
  const { registerField, getFieldValue, getFieldAttrs, getFieldMeta } =
    useFormInternalContext();

  registerField(name, options);

  return {
    value: getFieldValue<Value>(name),
    attrs: getFieldAttrs(name),
    ...getFieldMeta(name),
  };
}
