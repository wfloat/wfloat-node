// @ts-ignore
import sherpaOnnx from "../wasm/index.cjs";

export function greet(name: string): string {
  const version = sherpaOnnx.version
  return `Version, ${version}`;
}

console.log(greet("foo"))
