import '~/theme/src/clay.css';
import '~/theme/src/main.css';
import CwTooltipValidation from '~/tooltipValidation/src/CwTooltipValidation.vue';
import CwSvgIcon from '~/svgIcon/src/SvgIcon.vue';

export const defaultTooltip = () => ({
  components: { CwTooltipValidation, CwSvgIcon },
  data() {
    return {
      validationResult: [
            { key: "Invalid file format.", value: "The w...xlsx name cannot end with a space or dot." },
        ]
    }
  },
  template: `
    <div class="row">
        <div class="ml-6 my-6">
            <cw-tooltip-validation
                :label="validationResult[0].key"
                :validation-message='validationResult[0].value'>
                <button class="btn btn-primary">Hover me</button>
            </cw-tooltip-validation>
        </div>
    </div>
    `
});

