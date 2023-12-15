import { type Context } from '../../../main'

export type ResolverFunction<Args, Result> = (args: Args, ctx: any) => Result

export function makeResolver<Args = unknown, Result = any> (func: ResolverFunction<Args, Result>) {
  return (_: unknown, args: Args, ctx: Context) => func(args, ctx)
}
