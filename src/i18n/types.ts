import type { MessageKey } from './messages/en'

export type TranslateFn = (
  key: MessageKey,
  vars?: Record<string, string | number>
) => string
