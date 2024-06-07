<script setup>
import { CwSvgIcon } from '../../index';

const iconPlaygroundCode = '<cw-svg-icon icon-url="close"></cw-svg-icon>';
const handleError = (e) => console.error(e);

</script>

# Icon component

## Description

<Description :of="CwSvgIcon">

</Description>

## Props

<Props :of="CwSvgIcon"></Props>

## Example

<Playground
  :code="iconPlaygroundCode"
  :components="{ CwSvgIcon }">
</Playground>
