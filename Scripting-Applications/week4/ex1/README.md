# Week 4 – Exercise 1: 3-View App (Hash Router)

This assignment demonstrates ES modules, templates, `DocumentFragment`, and hash routing.

- Views: Home, List, Detail
- Uses `location.hash` and `hashchange` to render routes
- List view uses `<template>` + `DocumentFragment`
- Detail route format: `#/item/<id>`
- Focus moves to `<main tabindex="-1">` after render

Open `index.html` with Live Server.

## Routes

- `#/` → Home
- `#/list` → List
- `#/item/1` (or 2, 3) → Detail
