export function isLiteral<L extends string>(
  str: string,
  ...literals: L[]
): str is L {
  return literals.includes(str as L);
}
