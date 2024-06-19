import '~/theme/src/clay.css';
import '~/theme/src/main.css';
import SkeletonItem from '~/skeleton/src/SkeletonItem.vue';

export const SkeletonAvatar = () => ({
  components: { SkeletonItem },
  template: `
        <skeleton-item :avatar="true" height="lg " />
    `,
});

export const SkeletonCommunity = () => ({
  components: { SkeletonItem },
  template: `
    <div class="skeleton-community-wrapper">
        <h1>List community in search</h1>
        <div class="cec-card community-search-tile mb-4 cec-px-4">
            <div class="cec-card__body">
                <div class="d-flex flex-column flex-lg-row flex-xl-row align-items-center">
                    <div class="align-self-center">
                        <div class="community-search-tile__profile">
                            <skeleton-item :avatar="true" />
                        </div>
                    </div>
                    <div class="w-100 ml-lg-4 ml-xl-4 pb-4 pb-lg-0 pb-xl-0 d-flex flex-column">
                        <div class="d-flex cec-mt-sm-0 cec-mt-2">
                            <skeleton-item class="skeleton-badge w-120" height="lg" />
                            <skeleton-item class="skeleton-badge w-120 cec-ml-1" height="lg" />
                        </div>
                        <div class="cec-mt-3">
                            <skeleton-item class="w-120" :paragraph="true" height="md" />
                            <skeleton-item class="w-180 cec-mt-2" :paragraph="true" height="sm" />
                        </div>
                    </div>
                    <div class="mt-4 mt-lg-0 mt-xl-0">
                        <skeleton-item class="skeleton-button" />
                    </div>
                </div>
            </div>
        </div>
        <h1>List my community</h1>
        <div class="mb-4 cec-px-4 cec-card">
            <div class="d-flex flex-row align-items-center py-2 py-sm-4 border border-top-0 border-left-0 border-right-0 border-style-dash" v-for="index in 9" :key="index">
                <div class="align-self-center">
                    <skeleton-item class="w-100-px mr-4 d-none d-sm-block" :avatar="true" />
                    <skeleton-item class="w-50-px mr-4 d-block d-sm-none" :avatar="true"/>
                </div>
                <div class="w-100 d-flex flex-column">
                    <div class="d-none d-sm-flex cec-mt-sm-0 cec-mt-2">
                        <skeleton-item class="skeleton-badge w-200" height="sm" />
                        <skeleton-item class="skeleton-badge w-120 cec-ml-1" height="sm" />
                    </div>
                    <div class="d-flex d-sm-none cec-mt-sm-0 cec-mt-2">
                        <skeleton-item class="skeleton-badge w-200" height="sm" />
                    </div>
                    <div class="cec-mt-3">
                        <skeleton-item class="w-120" :paragraph="true" height="md" />
                        <skeleton-item class="w-120 cec-mt-2" :paragraph="true" height="sm" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,
});

export const SkeletonCourse = () => ({
  components: { SkeletonItem },
  template: `
        <h1>Render in my learning</h1>
        <div class="course-card-summary-wrapper w-100 d-flex flex-column flex-md-row border-bottom border-bottom-style-dash py-4">
            <div class="course-image mb-0 d-flex justify-content-center">
                <div class="image__wrapper w-320 w-xs-100 mw-100 h-129 h-sm-120">
                    <skeleton-item class="skeleton-icon border-radius-4 cec-mr-lg-4 w-100 h-100"/>
                </div>
            </div>
            <div class="course-info mt-2 mt-lg-0 d-lg-block d-flex flex-wrap justify-content-center flex-fill">
                <div class="course-title-wrapper">
                    <skeleton-item class="skeleton-icon course-title cec-mb-2 w-220"/>
                </div>
                <div class="w-100 d-lg-block d-flex justify-content-center">
                    <skeleton-item class="skeleton-icon cec-mb-2 w-50-px"/>
                </div>
                <skeleton-item class="w-90 cec-mb-2" :paragraph="true" height="md"/>
                <skeleton-item class="w-90 cec-mb-2" :paragraph="true" height="md"/>
                <skeleton-item class="w-90 cec-mb-2" :paragraph="true" height="md"/>
                <skeleton-item class="w-70" :paragraph="true" height="md"/>
            </div>
        </div>
    `,
});

export const SkeletonManageCourse = () => ({
  components: { SkeletonItem },
  template: `
    <h1>Render in LMS Manage Course</h1>
    <div v-for="(rowCourse, index) in 4" :key="index" class="course-card-summary-wrapper w-100 d-flex flex-column flex-md-row border-bottom border-bottom-style-dash py-4">
        <div class="course-image mb-0 d-flex justify-content-center">
            <div class="image__wrapper w-173-px mw-100 h-70-px">
                <skeleton-item class="skeleton-icon border-radius-4 cec-mr-lg-6 w-100 h-100"/>
            </div>
        </div>
        <div class="course-info mt-2 mt-lg-0 d-lg-block d-flex flex-wrap justify-content-center flex-fill">
            <div class="course-title-wrapper">
                <skeleton-item :paragraph="true" height="lg"
                    class="skeleton-icon course-title cec-mb-2 w-25"/>
            </div>
            <div class="w-100 d-lg-block d-flex justify-content-center">
                <skeleton-item :paragraph="true" class="skeleton-icon course-desc cec-mb-2 cec-mt-4 w-50"/>
            </div>
            <div class="table-responsive word-break-initial cw-table-wrapper">
                <table class="course-instance-list cw-table table font-size-14 text-black cw-table--style-dashed last-child-border-0">
                    <thead class="thead--sm font-weight-bold border">
                        <th class="table-cell-content sort-column w-30">
                            <skeleton-item height="sm" class="skeleton-icon w-100"/>
                        </th>
                        <th class="table-cell-content sort-column w-20">
                            <skeleton-item height="sm" class="skeleton-icon w-100"/>
                        </th>
                        <th class="table-cell-content sort-column w-15">
                            <skeleton-item height="sm" class="skeleton-icon w-100"/>
                        </th>
                        <th class="table-cell-content sort-column w-20">
                            <skeleton-item height="sm" class="skeleton-icon w-100"/>
                        </th>
                        <th class="table-cell-content sort-column w-15">
                            <skeleton-item height="sm" class="skeleton-icon w-100"/>
                        </th>
                    </thead>
                    <tbody>
                        <tr v-for="(rowm,index) in 2" :key="index">
                            <td><skeleton-item :paragraph="true" height="lg" class="skeleton-icon w-100"/></td>
                            <td><skeleton-item :paragraph="true" height="lg" class="skeleton-icon w-100"/></td>
                            <td><skeleton-item :paragraph="true" height="lg" class="skeleton-icon w-100"/></td>
                            <td><skeleton-item :paragraph="true" height="lg" class="skeleton-icon w-100"/></td>
                            <td><skeleton-item :paragraph="true" height="lg" class="skeleton-icon w-100"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
      `,
});


export const SkeletonAccountSecurity = () => ({
    components: { SkeletonItem },
    template: `
        <h1>Render in Account security</h1>
        <div class="account-security-list cec-p-6">
            <div class="d-flex flex-column w-100 border-bottom border-bottom-style-dash cec-mb-4">
                <skeleton-item
                    class="cec-mb-5 w-40 xs-down--width-100"
                    height="sm"
                    radius="lg"
                ></skeleton-item>
                <skeleton-item
                    class="cec-mb-5 w-20 xs-down--width-100"
                    height="sm"
                    radius="lg"
                ></skeleton-item>
                <div class="w-50 d-flex align-items-center cec-mb-5">
                    <skeleton-item class="skeleton-icon w-29-px cec-mr-1"/>
                    <skeleton-item
                        class=" w-75 xs-down--width-100"
                        height="sm"
                        radius="lg"
                    ></skeleton-item>
                </div>
            </div>
            <div class="cec-mb-4">
                <skeleton-item
                    class="cec-mb-5 w-20 xs-down--width-100"
                    height="sm"
                    radius="lg"
                ></skeleton-item>
                <div class="d-flex cec-mb-6">
                    <skeleton-item
                        class="w-56-px h-25-px border-radius-48"
                    ></skeleton-item>
                    <div class="w-100 ml-2 mt-1">
                        <skeleton-item
                            class="cec-mb-4 w-20 xs-down--width-100"
                            height="sm"
                            radius="lg"
                        ></skeleton-item>
                        <skeleton-item
                            class="cec-mb-4 w-90 xs-down--width-100"
                            height="sm"
                            radius="lg"
                        ></skeleton-item>
                        <skeleton-item
                            class="w-90 h-120"
                            radius="md"
                        ></skeleton-item>
                    </div>
                </div>
                <skeleton-item
                    class="cec-mb-5 w-40 xs-down--width-100"
                    height="sm"
                    radius="lg"
                ></skeleton-item>
                <skeleton-item :paragraph="true" height="lg"
                        class="skeleton-icon cec-mb-5 w-20 w-sm-50"/>
                <div class="d-flex pb-3">
                    <skeleton-item
                        class="w-56-px h-25-px border-radius-48"
                    ></skeleton-item>
                    <div class="w-100 ml-2 mt-1">
                        <skeleton-item
                            class="cec-mb-4 w-20 xs-down--width-100"
                            height="sm"
                            radius="lg"
                        ></skeleton-item>
                        <skeleton-item
                            class="cec-mb-4 w-90 xs-down--width-100"
                            height="sm"
                            radius="lg"
                        ></skeleton-item>
                        <skeleton-item
                            class="w-90 h-120"
                            radius="md"
                        ></skeleton-item>
                    </div>
                </div>
            </div>
        </div>
      `,
  });



export const SkeletonAdminSetting = () => ({
    components: { SkeletonItem },
    template: `



        <h2>Banner</h2>


        <div>
            <skeleton-item
                class="w-20"
                height="sm"
                radius="lg"
            ></skeleton-item>
            <div class="cec-mt-5">
                <div class=" mw-100 h-129">
                    <skeleton-item class="skeleton-icon w-100 h-100"/>
                </div>
            </div>
            <div class="cec-mt-6 d-flex justify-content-end border-top cec-pt-6">
                <skeleton-item class="skeleton-button" />
            </div>
        </div>

        
        <h2>skeleton_radio_inline</h2>

        <div class="d-flex align-items-center">
            <skeleton-item 
                :avatar="true" 
                class="w-20-px"
            ></skeleton-item>
            <skeleton-item
                class="w-20 ml-2 xs-down--width-100"
                height="sm"
                radius="lg"
            ></skeleton-item>
        </div>

        <h2>skeleton_radio_inline_paragraph</h2>
            <div>
                <div class="d-flex align-items-center cec-mt-3">
                    <skeleton-item 
                        :avatar="true"
                        class="w-20-px"
                    ></skeleton-item>
                    <skeleton-item
                        class="w-15 cec-ml-2 w-sm-50"
                        height="sm"
                        radius="lg"
                    ></skeleton-item>
                </div>
                <skeleton-item
                    class="cec-mb-4 cec-mt-3 cec-ml-6 w-50 w-sm-80"
                    height="sm"
                    radius="lg"
                ></skeleton-item> 
            </div>

        <h2>skeleton_checkbox_inline</h2>

        <div class="w-full d-flex align-items-center cec-mb-5">
            <skeleton-item class="skeleton-icon w-25-px cec-mr-2"/>
            <skeleton-item
                class="w-10 w-sm-80"
                height="sm"
                radius="lg"
            ></skeleton-item>
        </div>

        <h1>Render in Visibility</h1>

        <div class="cec-card__body">
            <div>
                <skeleton-item
                    class="w-20 cec-mb-3 xs-down--width-100"
                    height="sm"
                    radius="lg"
                ></skeleton-item>

                <div v-for="(rowCourse, index) in 5" :key="index">
                    <div class="d-flex align-items-center cec-mt-3">
                        <skeleton-item 
                            :avatar="true"
                            class="w-20-px"
                        ></skeleton-item>
                        <skeleton-item
                            class="w-15 cec-ml-2 w-sm-50"
                            height="sm"
                            radius="lg"
                        ></skeleton-item>
                    </div>
                    <skeleton-item
                        class="cec-mb-4 cec-mt-3 cec-ml-6 w-50 w-sm-80"        <div class="w-full d-flex align-items-center cec-mb-5">
            <skeleton-item class="skeleton-icon w-25-px cec-mr-2"/>
            <skeleton-item
                class="w-10 w-sm-80"
                height="sm"
                radius="lg"
            ></skeleton-item>
        </div>
                </div>
            </div>
            <div class="cec-mt-4">
                <div class="d-md-flex align-items-center cec-mb-2">
                    <skeleton-item
                        class="w-20 cec-mb-3 xs-down--width-100"
                        height="sm"
                        radius="lg"
                    ></skeleton-item>
                </div>
                <div v-for="(rowCourse, index) in 2" :key="index">
                    <div class="d-flex align-items-center cec-mb-3">
                        <skeleton-item 
                            :avatar="true"
                            class="w-20-px"
                        ></skeleton-item>
                        <skeleton-item
                            class="w-15 cec-ml-2 w-sm-50"
                            height="sm"
                            radius="lg"        <div class="w-full d-flex align-items-center cec-mb-5">
            <skeleton-item class="skeleton-icon w-25-px cec-mr-2"/>
            <skeleton-item
                class="w-10 w-sm-80"
                height="sm"
                radius="lg"
            ></skeleton-item>
        </div>


        <h1>Render in Default Post Author</h1>

        <div class="cec-card__body">
            <skeleton-item
                class="w-50 cec-mb-5 w-sm-80"
                height="sm"
                radius="lg"
            ></skeleton-item>
            
            <div v-for="(rowCourse, index) in 2" :key="index">
                <div class="d-flex align-items-center cec-mb-5">
                    <skeleton-item 
                        :avatar="true"
                        class="w-20-px"
                    ></skeleton-item>
                    <skeleton-item
                        class="w-15 cec-ml-2 w-sm-50"        <div class="w-full d-flex align-items-center cec-mb-5">
            <skeleton-item class="skeleton-icon w-25-px cec-mr-2"/>
            <skeleton-item
                class="w-10 w-sm-80"
                height="sm"
                radius="lg"
            ></skeleton-item>
        </div>
        </div>



        <h1>Render in Features</h1>
        <div class="cec-card__body">
            <skeleton-item
                class="w-40 cec-mb-5 w-sm-80"
                height="sm"
                radius="lg"
            ></skeleton-item>

            <div class="row">
                <div v-for="(rowCourse, index) in 9" :key="index" class="col-sm-3 d-flex align-items-center cec-mb-5">
                    <skeleton-item class="skeleton-icon w-25-px cec-mr-2"/>
                    <skeleton-item
                        class="w-50 w-sm-80"
                        height="sm"
                        radius="lg"
                    ></skeleton-item>
                </div>
            </div>

            <skeleton-item
                class="w-40 cec-mb-5 w-sm-80"
                height="sm"
                radius="lg"
            ></skeleton-item>

            <div class="cw-dropdown cw-dropdown--width-220">
                <skeleton-item class="skeleton-icon course-title cec-mb-2 w-100 min-height-40"/>
            </div>
        </div>

        <h1>Render in Membership</h1>

        <div class="cec-card__body">
            <skeleton-item
                class="w-50 cec-mb-5 w-sm-80"
                height="sm"
                radius="lg"
            ></skeleton-item>
            <div class="cec-my-3">        <div class="w-full d-flex align-items-center cec-mb-5">
            <skeleton-item class="skeleton-icon w-25-px cec-mr-2"/>
            <skeleton-item
                class="w-10 w-sm-80"
                height="sm"
                radius="lg"
            ></skeleton-item>
        </div>
            </div>
            <div class="d-flex flex-column align-items-left">
                <div v-for="(rowCourse, index) in 3" :key="index">
                    <div class="cw-radio d-flex align-items-center cec-mb-5">
                        <skeleton-item 
                            :avatar="true"
                            class="w-20-px"
                        ></skeleton-item>
                        <skeleton-item
                            class="w-30 cec-ml-2 w-sm-80"
                            height="sm"
                            radius="lg"
                        ></skeleton-item>
                    </div>
                </div>
            </div>

            <div class="cec-mb-3">
                <skeleton-item
                    class="w-50 cec-mb-5 w-sm-80"
                    height="sm"
                    radius="lg"
                ></skeleton-item>
                <div class="d-flex flex-column align-items-left">
                    <div v-for="(rowCourse, index) in 3" :key="index">
                        <div class="cw-radio d-flex align-items-center cec-mb-5">
                            <skeleton-item 
                                :avatar="true"
                                class="w-20-px"
                            ></skeleton-item>
                            <skeleton-item
                                class="w-30 cec-ml-2 w-sm-80"
                                height="sm"
                                radius="lg"
                            ></skeleton-item>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cec-mb-3">
                <skeleton-item
                    class="w-50 cec-mb-5 w-sm-80"
                    height="sm"
                    radius="lg"
                ></skeleton-item>
            </div>

            <div v-for="(rowCourse, index) in 4" :key="index">
                <div class="form-group input-checkbox-wrapper cw-checkbox--lighter w-full d-flex align-items-center cec-mb-5">
                    <skeleton-item class="skeleton-icon w-25-px cec-mr-2"/>
                    <skeleton-item
                        class="w-10 w-sm-80"
                        height="sm"
                        radius="lg"
                    ></skeleton-item>
                </div>
            </div>

            <div class="d-flex flex-column align-items-left cec-mt-5 cec-mb-3">
                <skeleton-item
                    class="w-50 cec-mb-5 w-sm-80"
                    height="sm"
                    radius="lg"
                ></skeleton-item>
                <skeleton-item
                    class="w-50 cec-mb-5 w-sm-80"
                    height="sm"
                    radius="lg"
                ></skeleton-item>
                <div class="cw-dropdown w-320 w-sm-100">
                    <skeleton-item class="skeleton-icon course-title cec-mb-2 w-100 min-height-40"/>
                </div>
            </div>
        </div>
      `,
  });



  export const SkeletonGeneralSetting = () => ({
    components: { SkeletonItem },
    template: `
        <div>
            <div class="border-bottom border-bottom-style-dash">
                <div class="cec-p-6">
                    <skeleton-item
                        class="w-90-px"
                        height="lg"
                        radius="lg"
                    ></skeleton-item>
                    <div class="row">
                        <div class="col-12 col-sm-6 col-lg-4 cec-mt-5">
                            <skeleton-item
                                class="w-90-px cec-mb-2"
                                height="sm"
                                radius="lg"
                            ></skeleton-item>
                            <div class="cw-dropdown dropdown-toggle d-flex cursor-pointer align-items-center">
                                <skeleton-item class="skeleton-input-field cec-mb-2"/>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 cec-pt-4">
                            <skeleton-item
                                class="w-90-px cec-mb-2"
                                height="sm"
                                radius="lg"
                            ></skeleton-item>
                            <div class="cw-dropdown dropdown-toggle d-flex cursor-pointer align-items-center">
                                <skeleton-item class="skeleton-input-field cec-mb-2"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 cec-pt-2">
                            <skeleton-item class="skeleton-button"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-bottom-style-dash border-bottom">
                <div class="cec-p-6">
                    <skeleton-item
                        class="w-184"
                        height="lg"
                        radius="lg"
                    ></skeleton-item>
                    <div class="row">
                        <div class="col-12 col-lg-7 cec-mt-5">
                            <skeleton-item
                                class="w-90-px cec-mb-2"
                                height="sm"
                                radius="lg"
                            ></skeleton-item>
                            <div class="cw-dropdown dropdown-toggle d-flex cursor-pointer align-items-center cec-mb-3">
                                <skeleton-item class="skeleton-input-field"/>
                            </div>
                            <div class="row">
                                <div class="form-group input-text-wrapper col-sm-12 cec-mt-2">
                                    <skeleton-item
                                        class="w-90-px cec-mb-2"
                                        height="sm"
                                        radius="lg"
                                    ></skeleton-item>
                                    <div class="cw-dropdown dropdown-toggle d-flex cursor-pointer align-items-center">
                                        <skeleton-item class="skeleton-input-field"/>
                                    </div>
                                </div>
                                <div class="form-group input-text-wrapper col-sm-12 cec-mt-2">
                                    <skeleton-item
                                        class="w-90-px cec-mb-2"
                                        height="sm"
                                        radius="lg"
                                    ></skeleton-item>
                                    <div class="cw-dropdown dropdown-toggle d-flex cursor-pointer align-items-center">
                                        <skeleton-item class="skeleton-input-field"/>
                                    </div>
                                </div>
                            </div>
                            <skeleton-item class="skeleton-button"/>
                        </div>
                        <div class="col-12 col-lg-5 cec-pt-4">
                            <div class="d-flex flex-col h-320">
                                <skeleton-item
                                    class="w-100 cec-mb-2 h-100"
                                    radius="lg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


      `,
  });


export const SkeletonNotification = () => ({
components: { SkeletonItem },
template: `
<div>
    <div class="cec-px-6 mt-3">
        <skeleton-item
            class="w-150 cec-mb-2"
            height="sm"
            radius="lg"
        ></skeleton-item>
        <div class="cw-dropdown w-320 w-sm-100">
            <skeleton-item class="skeleton-input-field"/>
        </div>
    </div>
    <div class="cec-px-6 mt-3">
        <skeleton-item
            class="w-150 cec-mb-2"
            height="sm"
            radius="lg"
        ></skeleton-item>
        <div class="cec-px-6 mt-3 mb-4 border rounded">
            <div class="notification-item my-3">
                <skeleton-item
                    class="w-245 w-sm-100 cec-mb-3"
                    height="sm"
                    radius="lg"
                ></skeleton-item>
                <skeleton-item
                    class="w-245 w-sm-100 cec-mb-6"
                    height="sm"
                    radius="lg"
                ></skeleton-item>
                <div class="row cec-px-6 mb-3 d-flex align-items-center" v-for="index in 9" :key="index">
                    <div class="col col-md-6">
                        <skeleton-item
                            class="w-150 cec-mb-3"
                            height="sm"
                            radius="lg"
                        ></skeleton-item>
                    </div>
                    <div class="col col-md-4">
                        <div class="w-full d-flex align-items-center cec-mb-5">
                            <skeleton-item class="skeleton-icon w-25-px cec-mr-2"/>
                            <skeleton-item
                                class="w-80"
                                height="sm"
                                radius="lg"
                            ></skeleton-item>
                        </div>
                    </div>
                    <div class="col col-md-2 pr-0 pl-4">
                        <div class="w-full d-flex align-items-center cec-mb-5">
                            <skeleton-item class="skeleton-icon w-25-px cec-mr-2"/>
                            <skeleton-item
                                class="w-80"
                                height="sm"
                                radius="lg"
                            ></skeleton-item>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
});


export const SkeletonConsents = () => ({
    components: { SkeletonItem },
    template: `
        <div class="consents-holder">
            <div class="d-flex cec-mb-4 border-bottom border-bottom-style-dash cec-pl-6 w-100 text-black">
                <div class="tab-menu cec-py-4 mr-3" v-for="index in 3" :key="index">
                    <skeleton-item
                        class="w-90-px"
                        height="sm"
                        radius="lg"
                    ></skeleton-item>
                </div>
            </div>
            <div class="px-md-4 cec-pb-6 border-bottom-sm-down">
                <div class="consent-user-overview-holder">
                    <div class="border border-bottom-sm-down border-last-child-none rounded">
                        <div class="d-flex justify-content-between text-black border-bottom" v-for="index in 5" :key="index">
                            <div class="d-flex cursor-pointer cec-py-2 cec-pl-4 w-100">
                                <skeleton-item class="rounded-circle mr-3 img-60-60" :avatar="true" />
                                <div class="d-flex flex-column py-2 w-full">
                                    <div class="d-flex flex-column flex-lg-row flex-wrap cec-mb-2">
                                        <skeleton-item
                                            class="w-200"
                                            height="md"
                                            radius="lg"
                                        ></skeleton-item>
                                    </div>
                                    <div class="text-gray-darker pt-1 font-size-12-sm-down">
                                        <skeleton-item
                                            class="w-320" 
                                            height="sm"
                                            radius="lg"
                                        ></skeleton-item>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex cec-pt-5 pr-3">
                                <div class="dropdown">
                                    <skeleton-item class="skeleton-icon w-25-px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
});


export const SkeletonActivityLog = () => ({
    components: { SkeletonItem },
    template: `
    <div class="activity-log-list">
        <div class="cec-pt-4 cec-pb-2">
        <skeleton-item
            class="w-100-px cec-mb-4"
            height="sm"
            radius="lg"
        ></skeleton-item>
        <div class="d-md-flex align-items-start cec-mb-4 cec-mb-md-2" v-for="index in 5" :key="index">
            <div class="cec-mb-3 mb-md-0 w-10 sm-down--width-100 cec-mt-md-6">
                <skeleton-item
                    class="w-56-px"
                    height="sm"
                    radius="lg"
                ></skeleton-item>
            </div>
            <div class="d-flex border border-radius-10 cec-p-4 cec-ml-md-6 cec-ml-lg-4 w-90 md-down--width-100 align-items-center">
                <div class="image__wrapper h-auto m-0 loaded">
                    <skeleton-item class="cw-icon-xxl rounded-circle mr-3" :avatar="true" />
                </div>
                <div class="d-flex align-items-center flex-wrap w-100">
                    <div class="w-100">
                        <skeleton-item
                            class="w-50 sm-down--width-100"
                            height="sm"
                            radius="lg"
                        ></skeleton-item>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
});


export const SkeletonMyThreads = () => ({
    components: { SkeletonItem },
    template: `
    <div class="list-group mb-0">
        <div class="list-group-item border-dash-y border-sm-y">
            <div class="thread-wrapper cec-pb-2">
                <div class="d-flex justify-content-between align-items-start card-item">
                    <div class="d-flex flex-column w-100">
                        <skeleton-item
                            class="w-80 cec-my-3"
                            height="sm"
                            radius="lg"
                        ></skeleton-item>
                        <skeleton-item
                            class="w-20 w-sm-50 cec-my-2"
                            height="sm"
                            radius="lg"
                        ></skeleton-item>
                    </div>
                    <div class="dropdown-three-dots dropdown arrow-indicator">
                        <skeleton-item class="skeleton-icon w-25-px cec-mt-2"/>
                    </div>
                </div>
                <skeleton-item
                    class="w-10 w-sm-124-5-px cec-my-3"
                    height="sm"
                    radius="lg"
                ></skeleton-item>
            </div>
            <skeleton-item
                class="w-30 w-sm-70 cec-mb-2"
                height="sm"
                radius="lg"
            ></skeleton-item>
        </div>
        <div class="list-group-item border-dash-y border-sm-y">
    <div class="thread-wrapper">
        <!---->
        <div class="d-flex justify-content-between align-items-start card-item">
            <div>
                <div class="d-flex">
                    <a href="javascript:;" class="subject text-decoration-none">asdsfsddasd</a>
                    <div class="cec-ml-2 cec-py-0 badge badge-pill text-white font-size-8 d-flex align-items-center text-uppercase badge-warning">New</div>
                </div>
                <p class="view-tag mb-0"><i class="mr-2">posted in</i><span class="font-weight-bold text-black">ABC</span></p>
            </div>
            <div class="dropdown-three-dots dropdown arrow-indicator">
                <a id="_copForumPortlet_dropdownMenuLinkthread" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div class="three-dots-icon undefined three-dots-icon--vertical"><span class="icon-dot"></span> <span class="icon-dot"></span> <span class="icon-dot"></span></div>
                </a>
                <ul aria-labelledby="_copForumPortlet_dropdownMenuLinkthread" class="dropdown-menu shadow dropdown-menu-right">
                    <li><a href="javascript:;" class="text-black dropdown-item">Edit</a></li>
                    <li><a href="javascript:;" class="text-black dropdown-item">Move</a></li>
                    <li><a href="javascript:;" class="text-black dropdown-item">Unsubscribe</a></li>
                    <li><a href="javascript:;" class="text-black dropdown-item">Remove</a></li>
                </ul>
            </div>
        </div>
        <!---->
        <div class="my-sm-3 mt-1 mb-2 multi-line-text-ellipsis-two short-description font-size-14 description">
            <div class="cw-editor-display"><p>sdxfvdsfxdfc</p></div>
        </div>
    </div>
    <div class="mt-sm-2 align-items-center view-wrapper">
        <div class="w-100 item-bottom-container d-sm-block d-flex flex-column-reverse mb-sm-0 mb-1">
            <div class="d-sm-inline d-flex">
                <span class="d-sm-inline d-flex align-items-center cec-mr-sm-5 cec-mr-6">
                    <svg class="lexicon-icon cw-icon d-sm-none d-inline-block mr-2"><use xlink:href="https://org-vireak.crosswired.me/o/cw-cec-theme/images/icons/icons.svg?v=1.0.128#upvote"></use></svg> <span class="mr-0">0</span>
                    <i class="d-sm-inline d-none">Upvotes</i>
                </span>
                <span class="d-sm-inline d-flex align-items-center cec-mr-sm-5 cec-mr-6">
                    <svg class="lexicon-icon cw-icon d-sm-none d-inline-block mr-2"><use xlink:href="https://org-vireak.crosswired.me/o/cw-cec-theme/images/icons/icons.svg?v=1.0.128#comment"></use></svg> <span class="mr-0">0</span>
                    <i class="d-sm-inline d-none">Replies</i>
                </span>
                <span class="d-sm-inline d-flex align-items-center">
                    <svg class="lexicon-icon cw-icon d-sm-none d-inline-block mr-2"><use xlink:href="https://org-vireak.crosswired.me/o/cw-cec-theme/images/icons/icons.svg?v=1.0.128#view"></use></svg> <span class="mr-0">1</span>
                    <i class="d-sm-inline d-none">View</i>
                </span>
            </div>
            <span class="font-size-14 mb-sm-0 mb-2"><i>Created</i> Jun 19, 2024</span>
        </div>
    </div>
</div>

    </div>
    `,
});