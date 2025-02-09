/// <reference path='fourslash.ts' />

// @Filename: /other.ts
//// export function foo() { return 1 };

// @Filename: /a.ts
////import { foo as oFoo } from './other';
////[|export const x = oFoo();|]
////export const a = 0;

verify.moveToNewFile({
    newFileContents: {
"/a.ts":
`export const a = 0;`,

"/x.ts":
`import { foo as oFoo } from './other';

export const x = oFoo();
`
    },
});
