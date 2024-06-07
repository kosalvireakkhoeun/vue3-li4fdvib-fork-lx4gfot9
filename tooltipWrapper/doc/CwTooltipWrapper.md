<script setup>
import { CwTooltipWrapper } from '../../index';

const buttonPlaygroundCode = `
    <cw-tooltip-wrapper label="show tooltips">
        <button class="btn btn-primary">Hover me</button>
    </cw-tooltip-wrapper>`
</script>

# cw-tooltip-wrapper

## Description

## Props

<Props :of="CwTooltipWrapper"></Props>

## Example

<Playground
  :code="buttonPlaygroundCode"
  :components="{ CwTooltipWrapper }">
</Playground>
