<script setup>
import { CwPopup } from '../../index';

let popupConfig = {
    title: 'Popup Title',
}
const popupPlaygroundCode = `
    <cw-popup
        config="popupConfig"
        :is-showing="true"
    ></cw-popup>

`;

</script>

# cw-popup

## Description

## Props

<Props :of="CwPopup"></Props>

## Example
<Playground
  :code="popupPlaygroundCode"
  :data-scope="{ popupConfig }"
  :components="{ CwPopup }">
</Playground>
