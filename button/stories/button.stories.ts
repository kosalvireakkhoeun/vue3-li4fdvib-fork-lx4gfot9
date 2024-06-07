import '~/theme/src/clay.css';
import '~/theme/src/main.css';
import CwButton from '~/button/src/CwButton.vue';

export const primary = () => ({
  components: { CwButton },
  template: `<cw-button class="btn btn-primary" variant="primary">Primary</cw-button>`,
});

export const secondary = () => ({
  components: { CwButton },
  template: `<cw-button class="btn btn-secondary" variant="secondary">Secondary</cw-button>`,
});

export const outlineprimary = () => ({
  components: { CwButton },
  template: `<CwButton class="btn btn-outline-primary" variant="secondary">Outline Primary</CwButton>`,
});

export const disabled = () => ({
  components: { CwButton },
  template: `<CwButton variant="disabled">Disabled</CwButton>`,
});

export const btnDefault = () => ({
  components: { CwButton },
  template: `
    <button class="btn btn-default">CwButton Default</button>
  `,
});

export const btnLink = () => ({
  components: { CwButton },
  template: `
    <button class="btn btn-link">CwButton Link</button>
  `,
});

export const cecBtnSticky = () => ({
  components: { CwButton },
  template: `
  <div class="cec-btn-sticky__wrapper mt-4">
    <div class="container-fluid-1280 cec-btn-sticky__container">
      <div class="portlet-layout row">
          <div class="col-md-12">
              <div class="button-holder cec-button-holder m-0">
                  <button class="btn btn-outline-primary">
                      Cancel
                  </button>
                  <button class="btn btn-primary">
                      Save
                  </button>
              </div>
          </div>
      </div>
  </div>
  `,
});

export const cecButtonHolder = () => ({
  components: { CwButton },
  template: `
    <div class="button-holder cec-button-holder row-reverse">
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-outline-primary btn-cancel">Cancel</button>
    </div>
  `,
});

export const buttonWidth = () => ({
  components: { CwButton },
  template: `
    <CwButton class="btn btn-primary btn--width-110">Primary 110</CwButton>
    <br><div class="cec-mt-2"/>
    <CwButton class="btn btn-primary btn--width-150">Primary 150</CwButton>
    <br><div class="cec-mt-2"/>
    <CwButton class="btn btn-primary btn--width-200">Primary 200</CwButton>
    <br><div class="cec-mt-2"/>
    <CwButton class="btn btn-primary btn--width-240">Primary 240</CwButton>
    <br><div class="cec-mt-2"/>
    <CwButton class="btn btn-primary btn--width-257">Primary 257</CwButton>
  `,
});

export const H2light = () => ({
  components: { CwButton },
  template: `
    <h2 class="font-weight-light">Subscribe form</h2>
  `,
});
