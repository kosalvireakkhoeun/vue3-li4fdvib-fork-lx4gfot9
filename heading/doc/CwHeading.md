<script setup>
import { CwHeading } from '../../index';

const buttonPlaygroundCode = `<cw-heading :size="2" weight="light" class="my-0">Heading 2</cw-heading>`;

</script>

# cw-heading

## Description

$h1-font-size:                  22px;                    // 22px

$h2-font-size:                  19px;                    // 19px

$h3-font-size:                  $font-size-base;         // 16px

$h4-font-size:                  $font-size-regular;      // 14px

$h5-font-size:                  $font-size-regular;      // 14px

$h6-font-size:                  $font-size-small;        // 12px


## Props

<Props :of="CwHeading"></Props>

## Example
<Playground
  :code="buttonPlaygroundCode"
  :components="{ CwHeading }">
</Playground>
