import '~/theme/src/clay.css';
import '~/theme/src/main.css';

import CwCardPanelTwoColumnToolbar from '~/cardPanelTwoColumnToolbar/src/CwCardPanelTwoColumnToolbar.vue';
import CwText from '~/text/src/CwText.vue';
import CwButtonLink from '~/buttonLink/src/CwButtonLink.vue';

export const toolbarDefault = () => ({
    components: {
        CwCardPanelTwoColumnToolbar,
        CwText,
        CwButtonLink,
    },
    data() {
        return {
            bulkSelect: false,
            totalSelected: 10,
            settingOptions: [
                {
                    ref: 'copMembersList',
                    key: 'cop-members-list',
                    title: 'community-members',
                    icon: 'single-neutral',
                    default: true,
                },
                {
                    ref: 'orgMembersList',
                    key: 'org-members-list',
                    title: 'organization-members',
                    icon: 'building-org',
                },
                {
                    ref: 'pendingInvitation',
                    key: 'pending-list',
                    title: 'pending-invitation',
                    icon: 'mail-with-circle-forward-arrow',
                },
                {
                    ref: 'joinRequests',
                    key: 'join-requests-list',
                    title: 'join-requests',
                    icon: 'circle-time-3',
                },
            ],
            activeTabMenu: {},
        };
    },
    created() {
        this.cardPanelToolbar = {
            title: 'Users',
        };
    },
    methods: {
        onSelectBulk() {
            this.bulkSelect = !this.bulkSelect;
        },
        onTabMenu(tabMenu) {
            this.activeTabMenu = tabMenu;
        },
    },
    template: `
    <cw-card-panel-two-column-toolbar
        :title="cardPanelToolbar.title"
        :show-toolbar="bulkSelect"
        :selected-number="totalSelected"
        :tab-menus="settingOptions"
        @on-close="onSelectBulk"
        @on-click-tab-menu="onTabMenu"
    >
        <template #bulk-toolbar>
            <button class="btn btn-primary">
                Invite
            </button>
        </template>
        <template #mobile-toolbar>
            <button class="btn btn-primary">
                Invite
            </button>
        </template>
        <template #bulk-action>
            <button class="btn btn-primary">
                Remove
            </button>
        </template>
        <template #right-body>
            <div class="mt-5 form-group input-checkbox-wrapper">
                <label for="toggle">
                    <input type="checkbox" id="toggle" @change="onSelectBulk" class="form-group input-checkbox-wrapper" />
                    <span>Show toolbar action</span>
                </label>
            </div>
        </template>
    </cw-card-panel-two-column-toolbar>
  `,
});

export const AdvancedfilterPrimarybutton = () => ({
    components: {
        CwCardPanelTwoColumnToolbar,
        CwText,
        CwButtonLink,
    },
    data() {
        return {
            bulkSelect: false,
            totalSelected: 10,
            settingOptions: [
                {
                    ref: 'copMembersList',
                    key: 'cop-members-list',
                    title: 'advanced filter',
                    icon: 'single-neutral',
                    default: true,
                    advancedFilter: true,
                    primaryButton: {
                        label: 'Invite',
                        cssClassWrapper: 'cec-pl-4'
                    },
                },
            ],
            activeTabMenu: {},
        };
    },
    created() {
        this.cardPanelToolbar = {
            title: 'Users',
        };
    },
    methods: {
        onSelectBulk() {
            this.bulkSelect = !this.bulkSelect;
        },
        onTabMenu(tabMenu) {
            this.activeTabMenu = tabMenu;
        },
    },
    template: `
        <cw-card-panel-two-column-toolbar
            :title="cardPanelToolbar.title"
            :show-toolbar="bulkSelect"
            :selected-number="totalSelected"
            :tab-menus="settingOptions"
            @on-close="onSelectBulk"
            @on-click-tab-menu="onTabMenu"
        >
            <template #mobile-toolbar>
                <button class="btn btn-primary">
                    Invite
                </button>
            </template>
            <template #bulk-action>
                <button class="btn btn-primary">
                    Remove
                </button>
            </template>
            <template #right-body>
                <div class="ml-5 mt-5 form-group input-checkbox-wrapper">
                    <label for="toggle">
                        <input type="checkbox" id="toggle" @change="onSelectBulk" class="form-group input-checkbox-wrapper" />
                        <span>Show toolbar action</span>
                    </label>
                </div>
            </template>
        </cw-card-panel-two-column-toolbar>
    `,
});

export const SearchboxAdvancedfilterPrimarybutton = () => ({
    components: {
        CwCardPanelTwoColumnToolbar,
        CwText,
        CwButtonLink,
    },
    data() {
        return {
            bulkSelect: false,
            totalSelected: 10,
            settingOptions: [
                {
                    ref: 'copMembersList',
                    key: 'cop-members-list',
                    title: 'advanced filter',
                    icon: 'single-neutral',
                    default: true,
                    advancedFilter: true,
                    primaryButton: {
                        label: 'Invite',
                        cssClassWrapper: 'cec-pl-4'
                    },
                    search: {
                        placeholder: 'Search',
                    },
                    searchKeyword: '',
                },
            ],
            activeTabMenu: {},
        };
    },
    created() {
        this.cardPanelToolbar = {
            title: 'Users',
        };
    },
    methods: {
        onSelectBulk() {
            this.bulkSelect = !this.bulkSelect;
        },
        onTabMenu(tabMenu) {
            this.activeTabMenu = tabMenu;
        },
        onSearch(text) {
            this.searchKeyword = text;
        }
    },
    template: `
        <cw-card-panel-two-column-toolbar
            :title="cardPanelToolbar.title"
            :show-toolbar="bulkSelect"
            :selected-number="totalSelected"
            :tab-menus="settingOptions"
            @on-close="onSelectBulk"
            @on-search="onSearch"
            @on-click-tab-menu="onTabMenu"
        >
            <template #mobile-toolbar>
                <button class="btn btn-primary">
                    Invite
                </button>
            </template>
            <template #bulk-action>
                <button class="btn btn-primary">
                    Remove
                </button>
            </template>
            <template #right-body>
                <p>
                    {{ searchKeyword }}
                </p>
                <div class="ml-5 mt-5 form-group input-checkbox-wrapper">
                    <label for="toggle">
                        <input type="checkbox" id="toggle" @change="onSelectBulk" class="form-group input-checkbox-wrapper" />
                        <span>Show toolbar action</span>
                    </label>
                </div>
            </template>
        </cw-card-panel-two-column-toolbar>
    `,
});

export const LargeSearchboxAdvancedfilter = () => ({
    components: {
        CwCardPanelTwoColumnToolbar,
        CwText,
        CwButtonLink,
    },
    data() {
        return {
            bulkSelect: false,
            totalSelected: 10,
            settingOptions: [
                {
                    ref: 'copMembersList',
                    key: 'cop-members-list',
                    title: 'advanced filter',
                    icon: 'single-neutral',
                    default: true,
                    advancedFilter: true,
                    search: {
                        size: 'lg',
                        placeholder: 'Search',
                    },
                    searchKeyword: '',
                },
            ],
            activeTabMenu: {},
        };
    },
    created() {
        this.cardPanelToolbar = {
            title: 'Users',
        };
    },
    methods: {
        onSelectBulk() {
            this.bulkSelect = !this.bulkSelect;
        },
        onTabMenu(tabMenu) {
            this.activeTabMenu = tabMenu;
        },
        onSearch(text) {
            this.searchKeyword = text;
        }
    },
    template: `
        <cw-card-panel-two-column-toolbar
            :title="cardPanelToolbar.title"
            :show-toolbar="bulkSelect"
            :selected-number="totalSelected"
            :tab-menus="settingOptions"
            @on-close="onSelectBulk"
            @on-search="onSearch"
            @on-click-tab-menu="onTabMenu"
        >
            <template #mobile-toolbar>
                <button class="btn btn-primary">
                    Invite
                </button>
            </template>
            <template #bulk-action>
                <button class="btn btn-primary">
                    Remove
                </button>
            </template>
            <template #right-body>
                <p>
                    {{ searchKeyword }}
                </p>
                <div class="ml-5 mt-5 form-group input-checkbox-wrapper">
                    <label for="toggle">
                        <input type="checkbox" id="toggle" @change="onSelectBulk" class="form-group input-checkbox-wrapper" />
                        <span>Show toolbar action</span>
                    </label>
                </div>
            </template>
        </cw-card-panel-two-column-toolbar>
    `,
});

export const ExtralargeSearchbox = () => ({
    components: {
        CwCardPanelTwoColumnToolbar,
        CwText,
        CwButtonLink,
    },
    data() {
        return {
            bulkSelect: false,
            totalSelected: 10,
            settingOptions: [
                {
                    ref: 'copMembersList',
                    key: 'cop-members-list',
                    title: 'advanced filter',
                    icon: 'single-neutral',
                    default: true,
                    search: {
                        size: 'xl',
                        placeholder: 'Search',
                    },
                    searchKeyword: '',
                },
            ],
            activeTabMenu: {},
        };
    },
    created() {
        this.cardPanelToolbar = {
            title: 'Users',
        };
    },
    methods: {
        onSelectBulk() {
            this.bulkSelect = !this.bulkSelect;
        },
        onTabMenu(tabMenu) {
            this.activeTabMenu = tabMenu;
        },
        onSearch(text) {
            this.searchKeyword = text;
        }
    },
    template: `
        <cw-card-panel-two-column-toolbar
            :title="cardPanelToolbar.title"
            :show-toolbar="bulkSelect"
            :selected-number="totalSelected"
            :tab-menus="settingOptions"
            @on-close="onSelectBulk"
            @on-search="onSearch"
            @on-click-tab-menu="onTabMenu"
        >
            <template #mobile-toolbar>
                <button class="btn btn-primary">
                    Invite
                </button>
            </template>
            <template #bulk-action>
                <button class="btn btn-primary">
                    Remove
                </button>
            </template>
            <template #right-body>
                <p>
                    {{ searchKeyword }}
                </p>
                <div class="ml-5 mt-5 form-group input-checkbox-wrapper">
                    <label for="toggle">
                        <input type="checkbox" id="toggle" @change="onSelectBulk" class="form-group input-checkbox-wrapper" />
                        <span>Show toolbar action</span>
                    </label>
                </div>
            </template>
        </cw-card-panel-two-column-toolbar>
    `,
});


export const SearchboxDropdownFilter = () => ({
    components: {
        CwCardPanelTwoColumnToolbar,
        CwText,
        CwButtonLink,
    },
    data() {
        return {
            bulkSelect: false,
            totalSelected: 10,
            settingOptions: [
                {
                    ref: 'copMembersList',
                    key: 'cop-members-list',
                    title: 'advanced filter',
                    icon: 'single-neutral',
                    default: true,
                    search: {
                        size: 'sm',
                        placeholder: 'Search',
                    },
                    dropdownFilter: {
                        label: 'All roles',
                        menuItems: [
                            { key: '0', value: 'Manager' }
                        ]
                    },
                    searchKeyword: '',
                },
            ],
            activeTabMenu: {},
        };
    },
    created() {
        this.cardPanelToolbar = {
            title: 'Users',
        };
    },
    methods: {
        onSelectBulk() {
            this.bulkSelect = !this.bulkSelect;
        },
        onTabMenu(tabMenu) {
            this.activeTabMenu = tabMenu;
        },
        onSearch(text) {
            this.searchKeyword = text;
        }
    },
    template: `
        <cw-card-panel-two-column-toolbar
            :title="cardPanelToolbar.title"
            :show-toolbar="bulkSelect"
            :selected-number="totalSelected"
            :tab-menus="settingOptions"
            @on-close="onSelectBulk"
            @on-search="onSearch"
            @on-click-tab-menu="onTabMenu"
        >
            <template #mobile-toolbar>
                <button class="btn btn-primary">
                    Invite
                </button>
            </template>
            <template #bulk-action>
                <button class="btn btn-primary">
                    Remove
                </button>
            </template>
            <template #right-body>
                <p>
                    {{ searchKeyword }}
                </p>
                <div class="ml-5 mt-5 form-group input-checkbox-wrapper">
                    <label for="toggle">
                        <input type="checkbox" id="toggle" @change="onSelectBulk" class="form-group input-checkbox-wrapper" />
                        <span>Show toolbar action</span>
                    </label>
                </div>
            </template>
        </cw-card-panel-two-column-toolbar>
    `,
});