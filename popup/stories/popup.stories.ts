import '~/theme/src/clay.css';
import '~/theme/src/main.css';
import CwPopup from '~/popup/src/CwPopup.vue';

export const CwPopupDefault = () => ({
  components: { CwPopup },
  data() {
    return {
      popupConfig: {
        title: 'Popup Title',
        size: 'lg',
        confirmButtonTitle: 'Send Invite',
        cssConfirmButton: 'btn--width-150',
        backButtonTitle: 'Back',
      },
      isShowing: false,
    };
  },
  methods: {
    closePopup() {
      this.isShowing = false;
    },
    openPopup() {
      this.isShowing = true;
    },
  },
  template: `
    <cw-popup
        :config="popupConfig"
        :is-showing="isShowing"
        @close="closePopup"
    >
        <input type="text" class="form-control" placeholder="Enter email">
    </cw-popup>
    <p>
        I click open:
        <button class="btn btn-primary" @click="openPopup">Open popup</button>
    </p>
    `,
});

export const CwPopupBackCircle = () => ({
  components: { CwPopup },
  data() {
    return {
      popupConfig: {
        title: 'Popup Title',
        size: 'lg',
        confirmButtonTitle: 'Send Invite',
        cssConfirmButton: 'btn--width-150',
        backButtonTitle: 'Back',
        isBackCircle: true,
      },
      isShowing: false,
    };
  },
  methods: {
    closePopup() {
      this.isShowing = false;
    },
    openPopup() {
      this.isShowing = true;
    },
  },
  template: `
      <cw-popup
          :config="popupConfig"
          :is-showing="isShowing"
          @close="closePopup"
      >
          <input type="text" class="form-control" placeholder="Enter email">
      </cw-popup>
      <p>
          I click open:
          <button class="btn btn-primary" @click="openPopup">Open popup</button>
      </p>
      `,
});



export const CwPopupNext = () => ({
    components: { CwPopup },
    data() {
      return {
        popupInviteConfig: {
            title: 'Popup Title',
            size: 'lg',
            confirmButtonTitle: 'Next',
            cssConfirmButton: 'btn--width-150',
            enableSaveButton: true,
        },
        popupSendInviteConfig: {
            title: 'Popup Title',
            size: 'lg',
            confirmButtonTitle: 'Send Invite',
            cssConfirmButton: 'btn--width-150',
            enableSaveButton: true,
            backButtonTitle: 'Back',
            isBackCircle: true,
        },
        isShowing: false,
        isSendInviteStep: false,
      };
    },
    computed: {
        popupConfig: function() {
            return (this.isSendInviteStep) ? this.popupSendInviteConfig : this.popupInviteConfig;
        }
    },
    methods: {
      closePopup() {
        this.isShowing = false;
      },
      openPopup() {
        this.isShowing = true;
      },
      submit() {
        console.log('sending invite...');
        this.popupSendInviteConfig.isSubmitting = true;
        setTimeout(() => {
            this.closePopup();
        }, 2000);
      },
      onNext() {
        if (this.isSendInviteStep) this.submit();
        else this.isSendInviteStep = !this.isSendInviteStep;
      },
    },
    template: `
        <cw-popup
            :config="popupConfig"
            :enable-save-button="popupInviteConfig.enableSaveButton"
            :is-showing="isShowing"
            @close="closePopup"
            @on-back="onNext"
            @save="onNext"
        >
            <input type="text" class="form-control" placeholder="Enter email">
        </cw-popup>
        <p>
            I click open:
            <button class="btn btn-primary" @click="openPopup">Open popup</button>
        </p>
        `,
  });