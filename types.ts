// boolean (true/false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 42

// array (type[] ou Array<type>)
let items: string[]
items = ["foo", "bar"]

// tuple
let title: [number, string]
title = [1, "Lorem ipsum dolor sit amet"]

// enum
enum Colors {
  white = '#FFFFFF',
  black = '#000000',
  blue = '#0066FF'
}

// any (qualquer coisa) Não é legal!
let coisa: any
coisa = ['1', 2, "foo"]

// void (vazio)
function logger(): void {
  console.log('foo');
}

// null | undefined
type Bla = string | undefined
let variable: null /* Quase nunca faz sentido */

// never
function error(): never {
  throw new Error("error")
}

// object
let cart: object
cart = {
  foo: "bar"
}
