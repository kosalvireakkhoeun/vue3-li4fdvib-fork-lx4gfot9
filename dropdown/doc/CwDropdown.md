<script setup>
import { CwDropdown } from '../../index';

let dropdownItems = [

    {"value":"All Roles", "key": 0},
    {"value":"Administrator","key":"13481811"},
    {"value":"Contact Manager","key":"35479088"},
    {"value":"Learning Administrator","key":"2906904"},
    {"value":"Member","key":"13481813"}
];
const buttonPlaygroundCode = `
    <cw-dropdown
        :show-icon="true"
        :items="dropdownItems"
        class-wrapper="btn-group cw-dropdown--width-200 border border-sm-0"
        css-toggle="h-100 border-0"
        css-dropdown-menu="dropdown-menu--darker rounded-0 mt-2"
        placeholder="Filter Role"
        :is-static-placeholder="true"
    >
    </cw-dropdown>
  `;
</script>

# cw-dropdown

## Description

Very simple button component

## Props

<Props :of="CwDropdown"></Props>

## Example

<Playground
  :code="buttonPlaygroundCode"
  :data-scope="{ dropdownItems }"
  :components="{ CwDropdown }">
</Playground>
