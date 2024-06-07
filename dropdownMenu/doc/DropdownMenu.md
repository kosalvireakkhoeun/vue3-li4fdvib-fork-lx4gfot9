<script setup>
import { DropdownMenu } from '../../index';

let dropdownItems = [
  { name: 'Billing', disabled: true },
  { name: 'Edit', orderBy: true },
  { name: 'Delete' },
  { name: 'View' },
  { name: 'Truncate People You are running a development build of vue' },
];
const buttonPlaygroundCode = `
  <div class="position-absolute">
    <DropdownMenu class="show" :items="dropdownItems">Click me</DropdownMenu>
  </div>
  `;
</script>

# Dropdown Menu

## Description

Very simple button component

## Props

<Props :of="DropdownMenu"></Props>

## Example

<Playground
  :code="buttonPlaygroundCode"
  :data-scope="{ dropdownItems }"
  :components="{ DropdownMenu }">
</Playground>
