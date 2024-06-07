import '~/theme/src/clay.css';
import '~/theme/src/main.css';
import CwCardPanelTwoColumnSmallLeftSide from '~/cardPanelTwoColumnSmallLeftSide/src/CwCardPanelTwoColumnSmallLeftSide.vue';
import CwText from '~/text/src/CwText.vue';
import CwButtonLink from '~/buttonLink/src/CwButtonLink.vue';
import CwSvgIcon from '~/svgIcon/src/SvgIcon.vue';

export const cwCardPanel = () => ({
  components: {
    CwCardPanelTwoColumnSmallLeftSide,
    CwText,
    CwButtonLink
  },
  template: `
    <cw-card-panel-two-column-small-left-side
        css-wrapper-class="rounded border-xs-down"
        css-left-header-class="d-md-flex align-items-center d-none"
        css-main-body-class="p-0"
        css-right-header-class="d-md-flex align-items-center justify-content-between"
        css-right-body-wrapper="d-block"
        :hide-divider="true"
        :has-border-screen-xs="true"
    >
        <template #left-header>
            <cw-text size="22" weight="light" class="cec-ml-6">
                Users
            </cw-text>
        </template>
        <template #right-header>
            <cw-text size="22" weight="light" class="cec-ml-6 d-none d-md-block">
                CoP Members
            </cw-text>
        </template>
        <template #left-body>
            <div class="cec-pt-3 d-md-block d-none">
                Left Content
            </div>
        </template>
    </cw-card-panel-two-column-small-left-side>
  `,
});

export const cwCardPanelWithToolbarAction = () => ({
    components: {
      CwCardPanelTwoColumnSmallLeftSide,
      CwText,
      CwSvgIcon
    },
    data: function() {
        return {
            settingOptions: [
                { ref: 'copMembersList', key: 'cop-members-list', title: 'community-members', icon: 'single-neutral' },
                { ref: 'orgMembersList', key: 'org-members-list', title: 'organization-members', icon: 'building-org' },
                { ref: 'pendingInvitation', key: 'pending-list', title: 'pending-invitation', icon: 'mail-with-circle-forward-arrow' },
                { ref: 'joinRequests', key: 'join-requests-list', title: 'join-requests', icon: 'circle-time-3' },
            ],
            selectedSettingOption: {},
            bulkSelect: true
        }
    },
    methods: {
        openSettingOption(settingOption) {
            this.selectedSettingOption = settingOption;
        },
        onSelectBulk() {
            this.bulkSelect = !this.bulkSelect;
        },
        onClose: function() {
            this.onSelectBulk()
        }
    },
    template: `
        <cw-card-panel-two-column-small-left-side
            css-wrapper-class="rounded border-xs-down"
            css-left-header-class="d-md-flex align-items-center d-none"
            css-main-body-class="p-0"
            css-right-header-class="d-md-flex align-items-center justify-content-between cec-pl-6"
            css-right-body-wrapper="d-block"
            :hide-divider="true"
            :has-border-screen-xs="true"
            :show-toolbar="bulkSelect"
        >
            <template #left-header>
                <cw-text size="22" weight="light" class="cec-ml-6">
                    Users
                </cw-text>
            </template>
            <template #right-header>
                <cw-text size="22" weight="light" class="d-none d-md-block">
                    CoP Members
                </cw-text>
            </template>
            <template #left-body>
                <div class="scroll-content cec-pt-3 d-md-block d-none">
                    <cw-button-link
                        v-for="settingOption in settingOptions"
                        :key="'leftMenu' + settingOption.key"
                        type="w-100 text-gray-darker"
                        css-icon="cw-icon-sm"
                        css-class=""
                        :css-wrapper="['cec-pl-6 bg-hover-gray-lighter-alt6', (settingOption.key == selectedSettingOption.key ? 'active' : '')]"
                        :label="settingOption.title"
                        :icon-name="settingOption.icon"
                        @action="openSettingOption(settingOption)"
                    ></cw-button-link>
                </div>
            </template>
            <template #toolbar>
                <div class="d-flex align-items-center w-100 justify-content-between">
                    <cw-text size="14" weight="light" >
                        1 selected
                    </cw-text>
                    <div class="toolbar-action d-flex align-items-center">
                        <button class="btn btn-primary">
                            Show
                        </button>
                        <cw-svg-icon
                            css-class="cec-ml-2 cec-ml-sm-4 cw-icon-lg text-black-darker cursor-pointer"
                            icon-url="close"
                            @click="onClose"
                        />
                    </div>
                </div>
            </template>
            <div class="form-group input-checkbox-wrapper">
                <label for="toggle">
                    <input type="checkbox" id="toggle" @change="onSelectBulk" class="form-group input-checkbox-wrapper" />
                    <span>Show toolbar action</span>
                </label>
            </div>
        </cw-card-panel-two-column-small-left-side>
    `,
  });
