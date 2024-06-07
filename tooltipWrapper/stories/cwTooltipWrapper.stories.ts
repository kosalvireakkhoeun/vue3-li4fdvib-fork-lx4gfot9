import '~/theme/src/clay.css';
import '~/theme/src/main.css';
import CwTooltipWrapper from '~/tooltipWrapper/src/CwTooltipWrapper.vue';
import CwSvgIcon from '~/svgIcon/src/SvgIcon.vue';

export const defaultTooltip = () => ({
  components: { CwTooltipWrapper, CwSvgIcon },
  template: `
    <div class="row">
        <div class="ml-6 my-6">
            <cw-tooltip-wrapper label="The step-by-step guide walked you through setting up the project using Amplication, creating entities for">
                <button class="btn btn-primary">Hover me</button>
            </cw-tooltip-wrapper>
        </div>
    </div>
    `
});

export const ListTooltip = () => ({
    components: { CwTooltipWrapper, CwSvgIcon },
    template: `
      <div class="row">
          <div class="ml-6 my-6">
              <cw-tooltip-wrapper
                :label="[ 'List1', 'List2' ]">
                  <button class="btn btn-primary">Hover me</button>
              </cw-tooltip-wrapper>
          </div>
      </div>
      `
  });